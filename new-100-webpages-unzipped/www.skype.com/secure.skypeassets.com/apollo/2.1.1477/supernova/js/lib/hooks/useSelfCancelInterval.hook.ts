import { useEffect } from 'react';

const intervalStep = 500;

function useSelfCancelInterval(
  check: () => [boolean, any[] | undefined],
  onSelfCancel: (...data: any[]) => void
) {
  useEffect(() => {
    // If data has loaded, no need to wait
    const [fulfilled, ...rest] = check();
    if (fulfilled) {
      onSelfCancel.apply(null, rest);
      return;
    }

    const interval = setInterval(() => {
      const [isFulfilled, ...args] = check();
      if (isFulfilled) {
        onSelfCancel.apply(null, args);
        clearInterval(interval);
      }
    }, intervalStep);

    // Cleaning
    return () => {
      clearInterval(interval);
    };
  }, []); // Run effect only once
}

export default useSelfCancelInterval;
export { intervalStep };
