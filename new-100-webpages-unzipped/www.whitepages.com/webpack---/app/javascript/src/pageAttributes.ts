// Process the amplitude page attributes present in `wp-amp-` meta tags into a
// JS object usable by the amplitude client.
interface IDictionary<T> {
  [key: string]: T;
}
const AMPLITUDE_META_PREFIX = 'wp-amp-';

const amplitudeMetaTags: HTMLMetaElement[] = [
  ...(Array.from(
    document.querySelectorAll(`meta[name^="${AMPLITUDE_META_PREFIX}"]`)
  ) as HTMLMetaElement[])
];

const metaNameToKey = (metaName: string) =>
  metaName.substring(AMPLITUDE_META_PREFIX.length).replace(/-/gi, '_');

const addTagToObject = (obj: object, tag: HTMLMetaElement) => ({
  ...obj,
  [metaNameToKey(tag.name)]: tag.content
});

const attrs: IDictionary<string | JSON> = amplitudeMetaTags.reduce(
  addTagToObject,
  {}
);

const semTag: HTMLMetaElement | null = document.querySelector(
  'meta[name="wp-sem"]'
);

if (semTag) {
  attrs.sem = JSON.parse(semTag.content) as JSON;
}

export default attrs;
