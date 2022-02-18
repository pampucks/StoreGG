import React from 'react';
import StatsTopUp from './StatsTopUp';
import Line from './Line';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <StatsTopUp quantity="290M+" title="Players Top Up" />
          <Line />
          <StatsTopUp quantity="12.500" title="Games Available" />
          <Line />
          <StatsTopUp quantity="99,9%" title="Happy Players" />
          <Line />
          <StatsTopUp quantity="4.7" title="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
