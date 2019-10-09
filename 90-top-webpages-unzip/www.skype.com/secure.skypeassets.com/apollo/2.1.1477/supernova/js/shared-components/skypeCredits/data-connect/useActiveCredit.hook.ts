import useUserServices from '../../../apis/userServices/useUserServices.hook';
import { validResponse } from '../../../apis/userServices/utils';

const getCredit = (source?: any[]) =>
  validResponse(source).filter(
    (x: { service: string }) => x.service === 'pstn'
  );

export default function useActiveCredit(): ReturnType<typeof useUserServices> {
  const [data, isLoading] = useUserServices();

  return [getCredit(data), isLoading];
}
