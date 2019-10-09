const isPackage = (x: { service: string }) => x && x.service === 'package';
const hasNestedServices = (x: { services: any[] }) => x && x.services;

export { isPackage, hasNestedServices };
