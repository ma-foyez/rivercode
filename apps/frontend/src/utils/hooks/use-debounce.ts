import { useCallback, useEffect } from 'react';
import { debounce } from 'lodash';

// export const useDebouncedFuncCall = (functionCall = () => { }, delay = 500) => {
//   return useCallback(
//     debounce(() => {
//       functionCall();
//     }, delay),
//     [functionCall, delay]
//   );
// }
export const useDebouncedFuncCall = (functionCall = () => { }, delay = 500) => {
  return useCallback(
    debounce(() => {
      functionCall();
    }),
    [functionCall]
  );
}

export const useDebounced = (functionCall = () => { }, delay = 500) => {
  const debouncedCall = useDebouncedFuncCall(functionCall, delay);

  useEffect(() => {
    debouncedCall(); // call debounced dispatch function
    return debouncedCall.cancel; // cleanup the debounced function
  }, []);

  return null;
};

// [Note: I'll try to fixed multiple times api calling by useEffect]