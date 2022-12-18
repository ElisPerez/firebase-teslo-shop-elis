import { useEffect, useReducer, useState } from 'react';
import { ICartProduct } from '../../interfaces';
import { CartContext, cartReducer } from './';
import Cookie from 'js-cookie';

export interface CartState {
  cart: ICartProduct[];
  isLoaded: boolean;
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  shippingAddress?: ShippingAddress;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  zip: string;
  city: string;
  country: string;
  phone: string;
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  isLoaded: false,
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
  shippingAddress: undefined,
};

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  const [isMounted, setIsMounted] = useState(false);

  // useEffect #1: Add to Cart from Cookie:
  useEffect(() => {
    if (!isMounted) {
      try {
        const cartProductsFromCookie = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : [];

        dispatch({
          type: '[CART] - LoadCart from cookies | storage',
          payload: cartProductsFromCookie,
        });
        setIsMounted(true);
      } catch (error) {
        // Si existe algun problema al parsear las cookies se envia al state un array vacio:
        dispatch({ type: '[CART] - LoadCart from cookies | storage', payload: [] });
        setIsMounted(true);
      }
    }
  }, [isMounted]);

  // console.log('State useEffect1:', state); //? Array vacio al recargar 🤒 SOLUCION: desactivar reactStrictMode en el file next.config.js o implementar un useState isMounted

  // useEffect #2: Update Cart from Cookie:
  useEffect(() => {
    if (Cookie.get('firstName')) {
      const shippingAddress = {
        firstName: Cookie.get('firstName') || '',
        lastName: Cookie.get('lastName') || '',
        address: Cookie.get('address') || '',
        address2: Cookie.get('address2') || '',
        zip: Cookie.get('zip') || '',
        city: Cookie.get('city') || '',
        country: Cookie.get('country') || '',
        phone: Cookie.get('phone') || '',
      };

      dispatch({ type: '[CART] - LoadAddress From Cookies', payload: shippingAddress });
    }
  }, []);

  // useEffect #3: Add product to Cookies
  useEffect(() => {
    if (isMounted) Cookie.set('cart', JSON.stringify(state.cart));
  }, [state.cart, isMounted]);

  // useEffect #3: Product info to Order page
  useEffect(() => {
    // Option #1: Más simplificada
    const numberOfItems = state.cart.reduce(
      (previousValue, currentValue) => currentValue.quantity + previousValue,
      0
    );

    // Option #2: Más visual
    // const numberOfItems = state.cart.reduce((previousValue, product) => {
    //   // El segundo argumento "0" es el valor inicial de "previousValue"
    //   const accumulator = product.quantity + previousValue;
    //   return accumulator;
    // }, 0);

    // Option #1: Más simplificada
    const subTotal = state.cart.reduce(
      (prev, current) => current.quantity * current.price + prev,
      0
    );

    // Option #2: Más visual
    // const subTotal = state.cart.reduce((previousValue, product) => {
    //   const currentValue = product.quantity * product.price;
    //   return previousValue + currentValue;
    // }, 0)

    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0); // 0.10 (From Environment Variables)

    const orderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (taxRate + 1), // Example: 100 * 1.10
      // total: (subTotal * (taxRate + 1)).toFixed(2), // Example: 100 * 1.10
    };

    dispatch({ type: '[CART] - Update Order Summary', payload: orderSummary });
  }, [state.cart, isMounted]);

  const addProductToCart = (product: ICartProduct) => {
    //* Nivel 1: No funciona porque guarda cada producto aparte y no acumula la cantidad en el mismo producto (repeticion del mismo producto)

    // dispatch({ type: '[CART] - Updated products in cart', payload: product });

    //* Nivel 2: Tampoco funcionaría

    // const productInCart = state.cart.filter(p => p._id !== product._id && p.size !== product.size);
    // dispatch({ type: '[CART] - Updated products in cart', payload: [...productInCart, product] });

    // ? Nivel final: Si funciona
    const productInCart = state.cart.some(p => p._id === product._id);
    if (!productInCart) {
      return dispatch({
        type: '[CART] - Updated products in cart',
        payload: [...state.cart, product],
      });
    }

    const productInCartButDifferentSize = state.cart.some(
      p => p._id === product._id && p.size === product.size
    );
    if (!productInCartButDifferentSize) {
      return dispatch({
        type: '[CART] - Updated products in cart',
        payload: [...state.cart, product],
      });
    }

    // Acumular
    const updatedProducts = state.cart.map(p => {
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      // Actualizar la cantidad:
      p.quantity += product.quantity;
      return p;
    });

    dispatch({
      type: '[CART] - Updated products in cart',
      payload: updatedProducts,
    });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: '[CART] - Change cart quantity', payload: product });
  };

  const removeCartProduct = (product: ICartProduct) => {
    dispatch({ type: '[CART] - Remove product in cart', payload: product });
  };

  const updateAddress = (address: ShippingAddress) => {
    Cookie.set('firstName', address.firstName);
    Cookie.set('lastName', address.lastName);
    Cookie.set('address', address.address);
    Cookie.set('address2', address.address2 || '');
    Cookie.set('zip', address.zip);
    Cookie.set('city', address.city);
    Cookie.set('country', address.country);
    Cookie.set('phone', address.phone);

    dispatch({ type: '[CART] - Update Address', payload: address });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        // Methods
        addProductToCart,
        updateCartQuantity,
        removeCartProduct,
        updateAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
