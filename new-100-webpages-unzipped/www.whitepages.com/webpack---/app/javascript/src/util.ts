import * as R from 'ramda';

const CAMEL_CASE_REGEX = /([a-z])([A-Z])/g;
const NON_ALPHANUMERIC_REGEX = /[^a-zA-Z0-9]+/;

// remove properties of an object that have null values
export const compactObject = data => {
  return R.filter(value => value != null, data);
};

// converts "someCase" to "some_case"
export const toSnakeCase = str => {
  return str
    .trim()
    .replace(CAMEL_CASE_REGEX, '$1 $2')
    .replace(NON_ALPHANUMERIC_REGEX, '_')
    .toLowerCase();
};

// split object out into tuples, snake_case the first item in each tuple, then recombine object
export const snakeifyObject = params => {
  const snakifiedParams: string[] = [];
  params.forEach(param => snakifiedParams.push(toSnakeCase(param)));
  return snakifiedParams;
};

export const snakeObjectFromParameters = (params, data) => {
  const snakifiedParams = snakeifyObject(params);
  const stitchedDictionary = R.zipObj(snakifiedParams, data);
  const filteredDictionary = compactObject(stitchedDictionary);
  return filteredDictionary;
};
