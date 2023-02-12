import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    if (accessToken === null && location === '/todo') return navigate('/');
    if (accessToken !== null && location !== '/todo') return navigate('/todo');
  }, []);
};

export default useRedirect;
