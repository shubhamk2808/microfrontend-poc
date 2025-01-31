import React, { Suspense } from 'react';

const RouteWrapper = ({ Component }) => {
  return (
    <Suspense fallback={
      <div style={{ padding: '20px', textAlign: 'center' }}>
        Loading application...
      </div>
    }>
      <div style={{ padding: '20px' }}>
        <Component />
      </div>
    </Suspense>
  );
};

export default RouteWrapper; 