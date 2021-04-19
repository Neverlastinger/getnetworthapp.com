import Head from 'next/head';
import styled from 'styled-components';
import { PRODUCT_DESCRIPTION_P1, PRODUCT_DESCRIPTION_P2 } from 'app/const';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <title>Net Worth Performance</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <MainWrapper>
        <div className="box content">
          <Logo src="/logo-full.svg" alt="Net Worth Performance" />
          <Description>
            <p>{PRODUCT_DESCRIPTION_P1}</p>
            <p>{PRODUCT_DESCRIPTION_P2}</p>
          </Description>
        </div>
        <div className="box phone">
          <AndroidApp>
            <img className="phone-image" src="/PNGIX.com_android-png_1815605.png" alt="Net Worth Performance app functionalities" />
            <div className="screenshot">
              <img src="/app/0a.png" alt="Net Worth Performance app functionalities" />
            </div>
          </AndroidApp>

          <IOSApp>
            <img className="phone-image" src="/transparent-iphone-11-pro-silver.png" alt="Net Worth Performance app functionalities" />
            <div className="screenshot">
              <img src="/app/0.png" alt="Net Worth Performance app functionalities" />
            </div>
          </IOSApp>
        </div>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 1080px;

  @media (max-width: 970px) {
    flex-direction: column;
    width: 100%;
  }

  .box {
    position: relative;
    box-sizing: border-box;
    padding: 48px;
    height: 922px;

    &.content {
      flex-basis: 420px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 200px;
    }

    &.phone {
      flex: 1;
      background: transparent url('shadow.png') repeat-y top left;

      &:before {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 40px;
        height: 100px;
        background: transparent url('shadow_top.png') repeat-y top left
      }

      &:after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 40px;
        height: 100px;
        background: transparent url('shadow_bottom.png') repeat-y top left;
      }
    }
  }
`;

const Logo = styled.img`
  margin-bottom: 36px;
  width: 100%;
`;

const Description = styled.div`
  font-size: 12px;
  line-height: 24px;
  color: #898989;
  font-weight: 500;
  text-align: right;
`;

const AndroidApp = styled.div`
  position: absolute;
  top: 58px;
  left: 68px;
  width: 476px;
  height: 817px;
  z-index: 2;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    background: black;
    height: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 1;
    transform: scale(.78);
    box-shadow: 0px 0px 6px 3px hsla(0, 0%, 0%, 0.25);
  }

  .phone-image {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 434px;
    z-index: 3;
  }

  .screenshot {
    position: absolute;
    top: 66px;
    left: 24px;
    width: 400px;
    height: 710px;
    overflow: hidden;

    img {
      width: 462px;
      height: 821px;
    }
  }
`;

const IOSApp = styled.div`
  position: absolute;
  top: 58px;
  left: 228px;
  width: 434px;
  height: 863px;
  z-index: 3;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 10px;
    background: black;
    height: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 1;
    transform: scale(.78);
    box-shadow: 0px 0px 6px 2px hsla(0, 0%, 0%, 0.25);
  }

  .phone-image {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 434px;
    z-index: 3;
  }

  .screenshot {
    position: absolute;
    top: 26px;
    left: 30px;
    width: 374px;
    height: 811px;
    overflow: hidden;
    _z-index: 9;
    border: 0px solid red;

    img {
      margin-top: -5px;
      width: 377px;
      height: 821px;
    }
  }
`;

// #0070ea
// #eb008d
// #9A0553
