import { useContext, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  let userInfos = {
    name: "Gustavo",
    email: "gustavo@email.com",
    isAdm: true,
  };

  userInfos = null;

  return (
    <AuthContext.Provider value={{ userInfos }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
