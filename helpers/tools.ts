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
