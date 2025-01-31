import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  }}>
    <header style={{
      borderBottom: '1px solid #eee',
      marginBottom: '20px',
      paddingBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1 style={{ margin: 0 }}>Micro Frontend POC</h1>
      </Link>
    </header>
    <main>
      {children}
    </main>
  </div>
);

export default Layout; 