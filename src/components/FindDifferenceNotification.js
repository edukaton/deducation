import React from 'react';

import GNotification from 'grommet/components/Notification';

const FindDifferenceNotification = ({correct, ...rest}) => (
  <GNotification closer={true} status={correct ? 'ok' : 'critical'} {...rest}>
    {correct ? 'Dobra robota. ' : 'Błędny wybór. '}
    Kliknij w zaznaczone fragmenty, aby poznać szczegóły.
  </GNotification>
);

export default FindDifferenceNotification;
