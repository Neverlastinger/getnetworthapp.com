import Head from 'next/head';
import { PRODUCT_DESCRIPTION_P1, PRODUCT_DESCRIPTION_P2 } from 'app/const';
import ImageRotator from 'components/ImageRotator';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <title>Net Worth Performance</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="main-wrapper">
        <div className="box content">
          <img className="logo" src="/logo-full.svg" alt="Net Worth Performance" />
          <div className="description">
            <p>{PRODUCT_DESCRIPTION_P1}</p>
            <p>{PRODUCT_DESCRIPTION_P2}</p>
          </div>

          <div className="get-the-app">
            <div className="text">Get the app.</div>
            <div className="images">
              <img src="/app-store.png" alt="Go to the Apple App Store" />
              <img src="/play-store.png" alt="Go to the Android Play Store" />
            </div>
          </div>
        </div>
        <div className="box phone">
          <div className="android-app">
            <img className="phone-image" src="/PNGIX.com_android-png_1815605.png" alt="Net Worth Performance app functionalities" />
            <div className="screenshot">
              <img src="/app/1a.png" alt="Net Worth Performance app functionalities" />
            </div>
          </div>

          <div className="ios-app">
            <img className="phone-image" src="/transparent-iphone-11-pro-silver.png" alt="Net Worth Performance app functionalities" />
            <div className="screenshot">
              <ImageRotator
                slideCount={6}
                getImagePath={(index) => `/app/${index}.png`}
                alt="Net Worth Performance app functionalities"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
