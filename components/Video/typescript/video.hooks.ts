import { RefObject, useEffect, useRef } from 'react';
import { observe } from './video.helpers';
import { IVideoProps } from './video.interfaces';

export const useVideo = (
  isAnimated: IVideoProps['isAnimated'],
): [RefObject<HTMLVideoElement>] => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => observe(ref, isAnimated));

  return [ref];
};
