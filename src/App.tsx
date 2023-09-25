import { Route, Routes } from 'react-router-dom';
import '@styles/App.css';
import GeneralLayout from '@components/GeneralLayout';
import { routes } from '@utils/router';

function App() {
  return (
    <GeneralLayout>
      {' '}
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.path} path={route.path} element={route.element} />
          );
        })}
      </Routes>
    </GeneralLayout>
  );
}

export default App;
