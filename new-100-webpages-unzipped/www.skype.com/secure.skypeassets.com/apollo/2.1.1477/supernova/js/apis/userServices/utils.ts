import { UserServicesDto } from './useUserServices.hook';

// TODO type
const getActiveServices = (
  serviceGetter: (x: UserServicesDto[]) => Array<{ active: boolean }>,
  source: UserServicesDto[]
): any[] => serviceGetter(source).filter(x => x.active);

const validResponse = (source?: UserServicesDto[]) =>
  !source || source.length < 0 ? [] : source;

export { getActiveServices, validResponse };
