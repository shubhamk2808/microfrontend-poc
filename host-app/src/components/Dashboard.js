import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

const Dashboard = ({ routes }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <div style={{ 
        marginTop: '20px',
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
      }}>
        {routes.map(({ path, name, description, icon }) => (
          <AppCard 
            key={path}
            title={name}
            description={description}
            icon={icon}
            onClick={() => navigate(path)}
          />
        ))}
      </div>
    </div>
  );
};

const AppCard = ({ title, description, icon, onClick }) => (
  <div style={{
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '20px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }
  }} onClick={onClick}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontSize: '24px' }}>{icon}</span>
      <h3 style={{ margin: 0 }}>{title}</h3>
    </div>
    <p style={{ color: '#666' }}>{description}</p>
    <Button onClick={onClick}>Launch</Button>
  </div>
);

export default Dashboard; 