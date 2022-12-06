import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userInfos, setUserInfos] = useState(null);

  function authenticateUser({ user, token }) {
    setUserInfos(user);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    localStorage.setItem('@food_explorer:user', JSON.stringify(user));
    localStorage.setItem('@food_explorer:token', token);
    localStorage.setItem(
      '@food_explorer:session_created_at',
      JSON.stringify(Date.now())
    );
  }

  function clearLoginData() {
    setUserInfos(null);

    localStorage.removeItem('@food_explorer:user');
    localStorage.removeItem('@food_explorer:token');
    localStorage.removeItem('@food_explorer:session_created_at');
  }

  function convertDaysToMilliseconds(days) {
    const milliseconds = days * 24 * 60 * 60 * 1000;

    return milliseconds;
  }

  function validateSessionTime(mostRecentLoginTime) {
    const maximumTimeLogged = convertDaysToMilliseconds(1);

    const currentTime = Date.now();

    const timedOutOfSession =
      currentTime - mostRecentLoginTime > maximumTimeLogged;

    return timedOutOfSession;
  }

  function getSavedData() {
    const user = JSON.parse(localStorage.getItem('@food_explorer:user'));
    const token = localStorage.getItem('@food_explorer:token');
    const session = JSON.parse(
      localStorage.getItem('@food_explorer:session_created_at')
    );

    return { user, token, session };
  }

  function includeSavedData(user, token) {
    setUserInfos(user);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  function loadLastSessionData({ user, token, session }) {
    const timedOutOfSession = validateSessionTime(session);

    if (timedOutOfSession) {
      return clearLoginData();
    }

    includeSavedData(user, token);
  }

  useEffect(() => {
    const { user, token, session } = getSavedData();

    const wasTheUserAlreadyLoggedIn = user && token && session;

    if (wasTheUserAlreadyLoggedIn) {
      loadLastSessionData({ user, token, session });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ userInfos, authenticateUser, clearLoginData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
