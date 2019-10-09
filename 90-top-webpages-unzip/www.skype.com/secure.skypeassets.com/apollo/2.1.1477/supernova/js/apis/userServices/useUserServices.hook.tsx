import { useState } from 'react';

import runOnDev from '../../lib/debug/runOnDev';
import useSelfCancelLimitInterval from '../../lib/hooks/useSelfCancelLimitInterval.hook';

export type UserServicesDto = {
  service: string;
  active: boolean;
  end: string;
  id: string;
  balance: number;
  quota: number;
  services: UserServicesDto[];
};

const USER_SERVICES_SS_KEY = 'userServices';

if (process.env.NODE_ENV === 'development') {
  runOnDev(function putMockResponseToSS() {
    window.sessionStorage.clear();
    import('./mockUserServices').then(resolve => {
      setTimeout(
        () =>
          sessionStorage.setItem(
            USER_SERVICES_SS_KEY,
            JSON.stringify(resolve.default())
          ),
        2000
      );
    });
  });
}

const useUserServices = (): [UserServicesDto[], boolean] => {
  const [userServices, setUserServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const checkData = () => sessionStorage.getItem(USER_SERVICES_SS_KEY);
  const setData = (data: string) => {
    try {
      setUserServices(JSON.parse(data));
    } catch (e) {
      setUserServices([]);
    }
    setIsLoading(false);
  };

  useSelfCancelLimitInterval(() => {
    const data = checkData();
    return [!!data, [data]];
  }, setData);

  return [userServices, isLoading];
};

export default useUserServices;
