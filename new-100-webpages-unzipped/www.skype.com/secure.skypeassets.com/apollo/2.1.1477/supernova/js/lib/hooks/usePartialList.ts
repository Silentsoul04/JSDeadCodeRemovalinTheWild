import { useState } from 'react';

/*******************************************************************************************************
 * Type
 *******************************************************************************************************/

type UsePartialList<T> = [T[], number, ({  }: any) => void];

/*******************************************************************************************************
 * Hook
 *******************************************************************************************************/

export default function usePartialList<T>(
  list: T[] = [],
  startWith: number = 0
): UsePartialList<T> {
  const [visibleList, updateList] = useState(list.slice(0, startWith));
  const [counter, setCounter] = useState(startWith);

  const toggleList = ({ next }: any, callback?: () => void) => {
    // Reverse (once all the items are visible it will hide)
    if (counter === list.length) {
      updateList(list.slice(0, startWith));
      setCounter(startWith);
    }

    // Show All Items, if 'next' is null
    else if (!next) {
      setCounter(list.length);
      updateList(list);
    } else {
      // Show only selected number of items
      const nextItems = counter + next;
      updateList(list.slice(0, nextItems));
      setCounter(nextItems);
    }

    if (callback && typeof callback === 'function') {
      callback();
    }
  };

  // Counter
  const counterRest = list.length - visibleList.length;

  return [visibleList, counterRest, toggleList];
}
