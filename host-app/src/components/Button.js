import React from 'react';

export const Button = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    style={{
      padding: '8px 16px',
      margin: '4px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      cursor: 'pointer'
    }}
  >
    {children}
  </button>
); 