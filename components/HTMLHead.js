import Head from 'next/head';

export default function HTMLHead({ title }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
