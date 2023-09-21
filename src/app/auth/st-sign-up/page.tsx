import { Amplify, Auth } from 'aws-amplify';
import awsExports from '../../../aws-exports';
import { withSSRContext } from 'aws-amplify';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import SignUp from './SignUp';

Amplify.configure({...awsExports, ssr: true});

export default async function Page() {
  const req = {
    headers: {
      cookie: headers().get("cookie"),
    },
  };

  const { Auth } = withSSRContext({ req });
 

  try {
    await Auth.currentAuthenticatedUser();
    redirect("/dashboard");
  } catch (error) {
    return (<SignUp />)
    
  }

};
