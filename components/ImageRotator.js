import React, { useEffect, useState, forwardRef, useCallback, useRef } from 'react';
import cn from 'classnames';

const DEFAULT_INTERVAL = 7200;

/**
 * Smoothly rotates different images with opacity transition.
 */
export default forwardRef(({ interval = DEFAULT_INTERVAL, slideCount, getImagePath, alt }, ref) => {
  const intervalIdRef = useRef({});
  const timeoutIdRef = useRef({});

  const [slideState, setSlideState] = useState({
    hidden: 1,
    first: 0,
    second: null,
    renderFirst: true,
    renderSecond: false
  });

  const goToNextSlide = () => {
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
  };

  // eslint-disable-next-line no-param-reassign
  ref.current.nextSlide = useCallback(() => {
    clearInterval(intervalIdRef.current);
    clearTimeout(timeoutIdRef.current);

    goToNextSlide();
  }, [ref.current]);

  useEffect(() => {
    intervalIdRef.current = setInterval(goToNextSlide, interval);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(() => {
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
});
