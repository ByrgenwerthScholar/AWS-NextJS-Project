import Link from "next/link";
import { Amplify, withSSRContext } from 'aws-amplify';
import { headers } from 'next/headers';
import { redirect } from "next/navigation";
import awsExports  from "@/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default async function Dashboard() {

  const req = {
    headers: {
      cookie: headers().get("cookie"),
    },
  };

  const { Auth } = withSSRContext({ req });
 

  try {
    const user = await Auth.currentAuthenticatedUser();
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p>This is your dashboard, {user.attributes.name}.</p>
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
    redirect("/st-sign-up");
  }
}

