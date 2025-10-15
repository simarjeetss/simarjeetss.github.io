/**
 * A utility function for conditionally joining class names together
 * @param {...string} classes - The class names to be joined
 * @returns {string} The joined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}