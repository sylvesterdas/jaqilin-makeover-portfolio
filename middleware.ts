import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ml'],
  defaultLocale: 'ml',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|logo.png|favicon.ico).*)'],
};