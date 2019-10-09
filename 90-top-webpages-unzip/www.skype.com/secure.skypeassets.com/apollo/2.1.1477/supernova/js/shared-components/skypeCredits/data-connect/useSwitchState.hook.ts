// https://docs.skype.net/endpoints/wallet/contracts/atu/GET_application_json_1.0/
// https://qaapi.skype.net/wallet/contracts/atu - get the most relevant ATU contract
import axios from 'axios';
import { useEffect, useState } from 'react';

import getSetting from '../../../lib/settings/get-setting';

/*******************************************************************************************************
 * Types
 *******************************************************************************************************/
type ContractDTO = {
  id: number;
  paymentInstrument: { href: string };
  status: 'ACTIVE' | 'CANCELLED' | 'SUSPENDED' | undefined;
};

function callAPI(skypeToken: string) {
  return (
    axios
      .get(getSetting(['settings', 'api', 'contracts']), {
        headers: {
          Accept: 'application/json; ver=1.0',
          'X-Skypetoken': skypeToken,
        },
      })
      .then(x => x.data)
      // TODO process error
      .catch(() => ({}))
  );
}

function useSwitchState(needCall: boolean, userToken: string) {
  const [switchState, setSwitchState] = useState();

  useEffect(() => {
    if (needCall) {
      callAPI(userToken).then((x: ContractDTO) => {
        setSwitchState(x.status === 'ACTIVE');
      });
    }
  }, [needCall]);

  return [switchState, setSwitchState];
}

export default useSwitchState;
