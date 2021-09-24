import React, { useReducer, useEffect } from 'react';
import { AppRouter } from './routes/AppRouter'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { RouteData } from './routes/RouteData';

const init = () => {
  return JSON.parse(localStorage.getItem('userAuth')) || { logged: false };
}

export const SoaintApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('userAuth', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch, RouteData }} >
      <AppRouter />
    </AuthContext.Provider>

  );
}

