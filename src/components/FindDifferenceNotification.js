import React from 'react';

import GNotification from 'grommet/components/Notification';

const FindDifferenceNotification = ({correct}) => (
  <GNotification closer={true} status={correct ? 'ok' : 'critical'}>
    {correct ? 'Dobra robota. ' : 'Błędny wybór. '}
    Kliknij w zaznaczone fragmenty, aby poznać szczegóły.
  </GNotification>
);

export default FindDifferenceNotification;
