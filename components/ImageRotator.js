import { useEffect, useState } from 'react';
import cn from 'classnames';

const DEFAULT_INTERVAL = 7200;

/**
 * Smoothly rotates different images with opacity transition.
 */
export default function ImageRotator({ interval = DEFAULT_INTERVAL, slideCount, getImagePath, alt }) {
  const [slideState, setSlideState] = useState({
    hidden: 1,
    first: 0,
    second: null,
    renderFirst: true,
    renderSecond: false
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideState((state) => {
        if (state.hidden === 1) {
          return {
            ...state,
            hidden: 0,
            second: state.second ? (state.second + 2) % slideCount : 1,
            renderFirst: true,
            renderSecond: true
          };
        }

        return {
          ...state,
          hidden: 1,
          first: (state.first + 2) % slideCount,
          renderFirst: true,
          renderSecond: true
        };
      });
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSlideState((state) => ({
        ...state,
        [slideState.hidden === 1 ? 'renderSecond' : 'renderFirst']: false
      }));
    }, interval / 2);
  }, [slideState.hidden]);

  return (
    <>
      <img
        className={cn({ hidden: slideState.hidden === 0 })}
        src={slideState.renderFirst ? getImagePath(slideState.first) : undefined}
        alt={alt}
      />
      <img
        className={cn({ hidden: slideState.hidden === 1 })}
        src={slideState.renderSecond ? getImagePath(slideState.second) : undefined}
        alt={alt}
      />
    </>
  );
}
