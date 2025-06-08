// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook/clerk',
  '/api/public(.*)',
  '/owner(.*)',
  '/api/property(.*)',
]);

const isIgnoredRoute = createRouteMatcher([
  '/api/webhook/clerk',
  '/favicon.ico',
  '/_next(.*)',
  '/public(.*)',
]);

export default clerkMiddleware((auth, req) => {
  if (isIgnoredRoute(req)) {
    return;
  }

  if (isPublicRoute(req)) {
    return;
  }

  // Protect all other routes
  auth.protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};