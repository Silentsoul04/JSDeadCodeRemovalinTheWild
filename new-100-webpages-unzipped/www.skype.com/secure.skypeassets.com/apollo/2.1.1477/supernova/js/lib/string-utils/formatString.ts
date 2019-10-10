/**
 * @param source string with placeholders in {0} ... {N} format
 * @param values values to put in corresponding places
 */
const formatString = (source: string | undefined, ...values: string[]) =>
  (source || '').replace(/\{([0-9]+)\}/g, (_, i) => values[i]);

export default formatString;
