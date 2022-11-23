import { useEffect } from "react";
import { useContext, createContext, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userInfos, setUserInfos] = useState(null);

  function authenticateUser({ user, token }) {
    setUserInfos(user);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    localStorage.setItem("@food_explorer:user", JSON.stringify(user));
    localStorage.setItem("@food_explorer:token", token);
  }

  function deauthenticateUser() {
    setUserInfos(null);

    localStorage.removeItem("@food_explorer:user");
    localStorage.removeItem("@food_explorer:token");
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@food_explorer:user"));
    const token = localStorage.getItem("@food_explorer:token");

    if (user && token) {
      setUserInfos(user);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ userInfos, authenticateUser, deauthenticateUser }}
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
