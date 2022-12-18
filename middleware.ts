import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
// import { jwt } from './utils';
// import { verifyAuth } from '@lib/auth'

export async function middleware(req: NextRequest, e: NextFetchEvent) {
  // console.log(req.nextUrl);
  if (req.nextUrl.pathname.startsWith('/checkout/')) {
    // const verifiedToken = await verifyAuth(req).catch((err) => {
    //   console.error(err.message)
    // })

    const token = req.cookies.get('token') || '';
    console.log({ token });
    const url = req.nextUrl.clone();
    // const requestedPage = req.nextUrl.pathname;
    const requestedPage = url.pathname;

    // url.pathname = '/auth/login?page='+`${requestedPage}`;

    try {
      // await jwt.isValidToken(token); //! No funciona las utils en los middlewares
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(`/auth/login?page=${requestedPage}`);
      // return NextResponse.redirect(new URL('/', req.url)) // De la documentacion.
    }
  }
}

export const config = {
  matcher: '/checkout/:path/',
};
