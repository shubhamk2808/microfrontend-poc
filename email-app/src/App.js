import React, { Suspense } from 'react';

// Lazy load the Button to handle potential loading issues
const Button = React.lazy(() => import('components/Button').then(module => ({
  default: module.Button
})));

const App = () => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '10px',
      borderRadius: '4px'
    }}>
      <h2>Email Application</h2>
      <div style={{ marginTop: '10px' }}>
        <Suspense fallback={<button>Loading...</button>}>
          <Button onClick={() => console.log('Email button clicked')}>
            Email Button
          </Button>
        </Suspense>
      </div>
      <div style={{ marginTop: '10px' }}>
        Status: Running on port 3002
      </div>
    </div>
  );
};

export default App;