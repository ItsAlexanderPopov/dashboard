import React from 'react';
import { pieChartData } from '../../data/dummy';
import { Header, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="m-4 mt-24 md:m-10 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="m-auto w-3/4">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity={true} height="480px" />
    </div>
  </div>
);

export default Pie;