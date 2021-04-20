import { useEffect, useRef } from 'react';

/**
 * Custom hook for getting previous value.
 *
 * @param  {any} value: value to be tracked
 * @return {any}
 */
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
