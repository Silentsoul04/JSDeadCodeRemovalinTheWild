const windowPropertyResolver = () =>
  Promise.resolve(window && (window as any).supernovaData);
const fileResolver = () =>
  import('./data/supernova-data').then(x => x.pageGreen);

const defaultResolver = () => Promise.resolve({});

const Resolvers = {
  file: fileResolver,
  windowProperty: windowPropertyResolver,
};

export type ResolverType = keyof typeof Resolvers;

const resolver = (type: ResolverType = 'windowProperty') =>
  (Resolvers[type] || defaultResolver)();

export default resolver;
