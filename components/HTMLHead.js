/* eslint-disable max-len */
import Head from 'next/head';

const DEFAULT_DESCRIPTION = 'Net Worth Performance app for Android & iOS helps you calculate and track your net worth over time. The app groups assets by categories (e.g. Bank accounts, Stocks, Bonds, P2P Investments, etc.), and handles different currencies out of the box, so you have the current and past overview of your net worth at any time. Update your asset values once per month to see your wealth distribution with useful charts and statistics.';

export default function HTMLHead({ title, description }) {
  return (
    <Head>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || DEFAULT_DESCRIPTION} />
      <meta property="og:image" content="https://getnetworthapp.com/app/0.png" />
      <meta property="og:url" content="https://getnetworthapp.com/" />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
