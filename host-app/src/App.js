import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import RouteWrapper from './components/RouteWrapper';
import { routes } from './config/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation routes={routes} />
        <Routes>
          <Route path="/" element={<Dashboard routes={routes} />} />
          {routes.map(({ path, element: Element }) => (
            <Route
              key={path}
              path={path}
              element={<RouteWrapper Component={Element} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;