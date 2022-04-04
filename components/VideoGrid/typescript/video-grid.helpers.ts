import { Dispatch, KeyboardEventHandler, SetStateAction } from 'react';
import { getOS } from '../../../helpers/tools';

export const handleKeyUpDown = (
  setIsCtrlPressed: Dispatch<SetStateAction<boolean>>,
  setIsShiftPressed: Dispatch<SetStateAction<boolean>>,
  event: 'keyup' | 'keydown',
) => {
  const handler = (e: KeyboardEvent) => {
    if (getOS() === 'Mac OS') {
      if (e.key === 'Meta') {
        setIsCtrlPressed(event === 'keydown' ? true : false);
      }
    } else {
      if (e.key === 'Control') {
        setIsCtrlPressed(event === 'keydown' ? true : false);
      }
    }

    if (e.key === 'Alt') {
      setIsShiftPressed(event === 'keydown' ? true : false);
    }
  };

  return handler;
};
