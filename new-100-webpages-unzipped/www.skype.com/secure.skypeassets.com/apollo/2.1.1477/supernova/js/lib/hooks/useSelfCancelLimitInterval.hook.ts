import getSetting from '../settings/get-setting';
import useSelfCancelInterval, {
  intervalStep,
} from './useSelfCancelInterval.hook';

function checkWithStandBy(
  check: () => [boolean, any[]],
  explicitStandByFor?: number
): () => [boolean, any[] | undefined] {
  let acc = -intervalStep;
  const standByFor =
    explicitStandByFor || getSetting(['settings', 'api', 'standByFor']) || 1000;

  return () => {
    acc += intervalStep;
    if (acc >= standByFor) {
      return [true, undefined];
    } else {
      return check();
    }
  };
}

function useSelfCancelLimitInterval(
  check: () => [boolean, any[]],
  onSelfCancel: (data?: any) => void,
  explicitStandByFor?: number
) {
  const standByCheck = checkWithStandBy(check, explicitStandByFor);
  useSelfCancelInterval(standByCheck, onSelfCancel);
}

export default useSelfCancelLimitInterval;
