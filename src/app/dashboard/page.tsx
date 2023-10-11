'use client'
import Link from "next/link";
import { redirect } from "next/navigation";
import { useAuth } from "../hooks/clientAuth";


export default function Dashboard() {
  const auth = useAuth();

  try {
    const user = auth?.user;
    console.log(user);
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p>This is your dashboard, {user?.username}.</p>
        <Link
          href="/"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Go to Landing Page
        </Link>
      </main>
    );
  } catch (error) {
    console.log(error);
    redirect("/auth/st-sign-up");
  }
}

