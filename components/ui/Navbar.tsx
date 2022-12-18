import { useContext, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

// import {
//   AppBar,
//   Badge,
//   Box,
//   Button,
//   IconButton,
//   Input,
//   InputAdornment,
//   Link,
//   Toolbar,
//   Typography,
// } from '@mui/material'; // No usar asi porque es mas lento en dev.

import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { CartContext, UiContext } from '../../context';

export const Navbar = () => {
  const router = useRouter(); //asPath, push...

  const { toggleSideMenu } = useContext(UiContext);
  const { numberOfItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    router.push(`/search/${searchTerm}`);
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href={'/'} passHref>
          <Link display='flex' alignItems='center'>
            <Typography variant='h6'>Teslo |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' } }}>
          <NextLink href={'/category/men'} passHref>
            <Link>
              <Button color={router.asPath === '/category/men' ? 'primary' : 'info'}>Men</Button>
            </Link>
          </NextLink>
          <NextLink href={'/category/women'} passHref>
            <Link>
              <Button color={router.asPath === '/category/women' ? 'primary' : 'info'}>
                Women
              </Button>
            </Link>
          </NextLink>
          <NextLink href={'/category/kids'} passHref>
            <Link>
              <Button color={router.asPath === '/category/kids' ? 'primary' : 'info'}>Kids</Button>
            </Link>
          </NextLink>
        </Box>

        <Box flex={1} />

        {/* Search Icon BIG Screen */}
        {isSearchVisible ? (
          <Input
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            autoFocus
            className='fadeIn'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyPress={e => (e.key === 'Enter' ? onSearchTerm() : null)}
            type='text'
            placeholder='Search...'
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => setIsSearchVisible(false)}>
                  <ClearOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            className='fadeIn'
            onClick={() => setIsSearchVisible(true)}
          >
            <SearchOutlinedIcon />
          </IconButton>
        )}

        {/* Search Icon SMALL Screen */}
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={() => {
            toggleSideMenu();
            setIsSearchVisible(false);
          }}
        >
          <SearchOutlinedIcon />
        </IconButton>

        {/* Cart Icon */}
        <NextLink href={'/cart'} passHref>
          <Link>
            <IconButton>
              <Badge badgeContent={numberOfItems > 9 ? '+9' : numberOfItems} color='secondary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button
          onClick={() => {
            toggleSideMenu();
            setIsSearchVisible(false);
          }}
        >
          Menu
        </Button>
      </Toolbar>
    </AppBar>
  );
};
