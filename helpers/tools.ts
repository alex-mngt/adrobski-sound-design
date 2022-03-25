import { IOs } from './types';

export const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const rafDebounce = (fn: Function) => {
  var timeout: number;

  return (...args: any[]) => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
      fn.apply(this, args);
    });
  };
};

export const debounce = (fn: Function, delay: number) => {
  let prevTimestamp = 0;

  return (...args: any[]) => {
    if (Date.now() - prevTimestamp < delay) {
      return;
    }

    fn.apply(this, args);
    prevTimestamp = Date.now();
  };
};

export const slugify = (str: string) => str.toLowerCase().replace(/ /g, '-');

export const fillArray = (startIndex: number, length: number) => {
  const array: number[] = [];

  for (let i = startIndex; i <= length; i++) {
    array.push(i);
  }

  return array;
};

export const sleep = async (time: number) => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export const getOS = (): IOs | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os: IOs | null = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
};
