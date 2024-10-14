import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Layout from './components/features/layouts';
import { routes } from './routes';


const AppRoutes: React.FC = () => {
  const element = useRoutes([
    {
      element: <Layout />,
      children: routes,
    },
  ]);
  return element;
};

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;