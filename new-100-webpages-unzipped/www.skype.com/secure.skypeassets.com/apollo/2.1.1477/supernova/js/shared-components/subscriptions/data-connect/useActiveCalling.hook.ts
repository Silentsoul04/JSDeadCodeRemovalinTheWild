import useUserServices, {
  UserServicesDto,
} from '../../../apis/userServices/useUserServices.hook';
import { validResponse } from '../../../apis/userServices/utils';

const Calling = ['plan', 'package', 'minute_plan'];

const isCalling = (x: UserServicesDto) =>
  x && Calling.indexOf(x.service) !== -1;

const getCalling = (source: UserServicesDto[]) =>
  validResponse(source).filter(isCalling);

export default function useActiveCalling(): ReturnType<typeof useUserServices> {
  const [data, isLoading] = useUserServices();

  return [getCalling(data), isLoading];
}
