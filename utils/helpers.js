/**
 *
 * @param date
 * @returns {string}
 */
export const formatedDate = (date) => {
  const d = new Date(`${date}`);
  let month = d.getMonth() + 1;
  let day = d.getDate();

  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  return `${day}/${month}/${d.getFullYear()}`;
};

/**
 * @param fn
 * @param delay
 * @returns {Function}
 */
export const debounce = (fn, delay = 250) => {
  let timeout;
  return (...args) => {
    const functionCall = () => fn.call(this, ...args);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, delay);
  };
};

/**
 * @param start
 * @param end
 * @returns {*}
 */
export const randomBetween = (start, end) => (
  Math.floor(Math.random() * (end - start + 1)) + start
);

export const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

/**
 *
 * @param t: elaspedTime in milliseconds
 * @param b: startValue
 * @param c: endValue
 * @param d: totalDuration
 * @returns {*}
 */
export const easeInOutQuad = (t, b, c, d)  => {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * ((--t) * (t - 2) - 1) + b;
};


export const suportWebGL = (() => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
})();
