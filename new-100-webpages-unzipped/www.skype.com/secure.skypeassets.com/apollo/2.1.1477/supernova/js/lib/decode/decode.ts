import he from 'he';
import isNil from 'lodash/isNil';

export default function decode(value?: any) {
  if (isNil(value) || typeof value !== 'string') return value;

  return he.decode(value);
}
