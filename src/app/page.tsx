import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/main');

  return (
    <main className={inter.className}>
      
    </main>
  );
}
