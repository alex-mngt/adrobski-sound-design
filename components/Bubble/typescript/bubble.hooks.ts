import { RefObject, useRef } from 'react';

export const useBubble = (): [RefObject<HTMLDivElement>] => {
  let ref = useRef<HTMLDivElement>(null);

  return [ref];
};
