import { cookies } from 'next/headers';
import { runWithAmplifyServerContext } from '@aws-amplify/adapter-nextjs';
import { getCurrentUser } from '@aws-amplify/auth/server';

// This page always dynamically renders per request
export const dynamic = 'force-dynamic';

export default async function ssrAuth() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });

    return currentUser;
  } catch (error) {
    console.error(error);
    return false;
  }
}