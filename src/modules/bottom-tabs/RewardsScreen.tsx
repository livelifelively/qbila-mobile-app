import React from 'react';
import Topbar from '../../components/design/Topbar';

import { DefaultLayout } from '../../layouts/Default';

const RewardScreen = () => {
  return (
    <DefaultLayout backgroundColor="#ffffff">
      <Topbar showBackButton={false} title="Reward Screen" />
    </DefaultLayout>
  );
};

export default RewardScreen;
