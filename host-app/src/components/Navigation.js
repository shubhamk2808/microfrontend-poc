import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './Button';

const Navigation = ({ routes }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRoot = location.pathname === '/';

  const currentRoute = routes.find(route => route.path === location.pathname);

  return (
    <div style={{ 
      marginBottom: '20px',
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div>
        {!isRoot && (
          <Button onClick={() => navigate('/')}>
            Back to Dashboard
          </Button>
        )}
      </div>
      {currentRoute && (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px'
        }}>
          <span style={{ fontSize: '24px' }}>{currentRoute.icon}</span>
          <h2 style={{ margin: 0 }}>{currentRoute.name}</h2>
        </div>
      )}
    </div>
  );
};

export default Navigation; 