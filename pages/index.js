import { useRef, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { PRODUCT_DESCRIPTION_P1, PRODUCT_DESCRIPTION_P2 } from 'app/const';
import ImageRotator from 'components/ImageRotator';
import HTMLHead from 'components/HTMLHead';

export default function Home() {
  const imageRotatorRef = useRef({});
  const [isManualRotation, setManualRotation] = useState(false);

  const onPhoneClick = () => {
    setManualRotation(true);
    imageRotatorRef.current.nextSlide();
  };

  return (
    <>
      <HTMLHead title="Net Worth Performance" />

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
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href="https://play.google.com/store/apps/details?id=com.radoslavpopov.networthperformance" target="_blank">
                <img src="/play-store.png" alt="Go to the Android Play Store" />
              </a>
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

          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
          <div className={cn('ios-app', { manual: isManualRotation })} onClick={onPhoneClick}>
            <img className="phone-image" src="/transparent-iphone-11-pro-silver.png" alt="Net Worth Performance app functionalities" />
            <div className="screenshot">
              <ImageRotator
                ref={imageRotatorRef}
                slideCount={6}
                getImagePath={(index) => `/app/${index}.png`}
                alt="Net Worth Performance app functionalities"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="main-footer">
        <ul>
          <li>
            <Link href="/net-worth">What is net worth?</Link>
          </li>
          <li>
            <Link href="/asset">What is an asset?</Link>
          </li>
          <li>
            <Link href="/how-to-use-net-worth-performance">How do I use Net Worth Performance?</Link>
          </li>
          <li>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href="https://play.google.com/store/apps/details?id=com.radoslavpopov.networthperformance" target="_blank">Android app</a>
          </li>
          <li>
            <a href="">iOS app</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
