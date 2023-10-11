import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 h-screen flex flex-col pt-[200px]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 mx-auto">
          <h1 className="text-4xl mb-4 text-center text-revolver">Welcome to Arena</h1>
          <p className="mb-4 text-center text-revolver">
            Learn Social Media First Hand.
          </p>
        </div>
      </div>
    </div>
  )
}
