import { runWithAmplifyServerContext } from '@aws-amplify/adapter-nextjs';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec, {});
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  if (authenticated) {
    return response;
  }

  return NextResponse.redirect(new URL('/auth/stu-signup', request.url));
}


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|auth/stu-signup).*)',
  ],
  
};