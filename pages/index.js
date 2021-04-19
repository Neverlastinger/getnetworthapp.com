import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <title>Net Worth Performance</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <h1>
          Welcome to Get Net Worth Performance App!
        </h1>

        <p>
          Get started by editing
          <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
