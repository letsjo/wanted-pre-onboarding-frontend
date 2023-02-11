import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('./pages/Login'));
const Join = lazy(() => import('./pages/Join'));
const Todo = lazy(() => import('./pages/Todo'));

function App() {
  return (
    <Router>
      <Suspense fallback={ <div>Loading...</div> }>
        <Routes>
          <Route path='/' element={ <Login /> } />
          <Route path='/signin' element={ <Login /> } />
          <Route path='/signup' element={ <Join /> } />
          <Route path='/todo' element={ <Todo /> } />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
