/**
 * @param {import("webdriverio").Selector} selector the keyword term
 **/
export default (selector) => {
  const value = selector.getValue();
  const length = value.length;
  const backSpaces = new Array(length).fill("Backspace");
  return backSpaces;
};
