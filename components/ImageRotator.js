import { useEffect, useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const DEFAULT_INTERVAL = 7200;

/**
 * Smoothly rotates different images with opacity transition.
 */
export default function ImageRotator({ interval = DEFAULT_INTERVAL, slideCount, getImagePath }) {
  const [slideState, setSlideState] = useState({
    hidden: 1,
    first: 0,
    second: null
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideState((state) => {
        if (state.hidden === 1) {
          return {
            ...state,
            hidden: 0,
            second: state.second ? (state.second + 2) % slideCount : 1
          };
        }

        return {
          ...state,
          hidden: 1,
          first: (state.first + 2) % slideCount
        };
      });
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <FadingImage
        className={cn({ hidden: slideState.hidden === 0 })}
        src={getImagePath(slideState.first)}
        alt="Net Worth Performance app functionalities"
      />
      <FadingImage
        className={cn({ hidden: slideState.hidden === 1 })}
        src={getImagePath(slideState.second)}
        alt="Net Worth Performance app functionalities"
      />
    </>
  );
}

const FadingImage = styled.img`
  opacity: 1;
  transition: opacity 2s;

  &.hidden {
    opacity: 0;
  }
`;
