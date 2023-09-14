import React from 'react';

import { Header, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 mt-24 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart height='full' width='full' />
    </div>
  </div>
);

export default Stacked;