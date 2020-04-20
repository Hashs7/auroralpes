export const debounce = (callback, wait, immediate = false) => {
    let timeout = null;

    return function() {
        const callNow = immediate && !timeout;
        const next = () => callback.apply(this, arguments);

        clearTimeout(timeout)
        timeout = setTimeout(next, wait);

        if (callNow) {
            next();
        }
    }
}

export function throttle(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}