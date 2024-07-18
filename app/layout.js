"use client";

import { useReducer, createContext, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

export const AuthContext = createContext();

/*const getLoginInfo = (entity) => {
  return typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem(entity))
    : null;
}; */

const initialState = {
  isAuthenticated: false,
  user: null,
  jwt: null,
};

const reducer = (state, action) => {
  console.log({ action });
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        jwt: action.payload.jwt,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "SET_LOGGED_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        jwt: action.payload.jwt,
      };
    default:
      return state;
  }
};

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const jwt = localStorage.getItem("jwt");
    console.log({ jwt });

    if (!!jwt || !!user) {
      dispatch({ type: "SET_LOGGED_USER", payload: { user, jwt } });
    }
  }, []);

  return (
    <html lang="en">
      <AuthContext.Provider value={{ state, dispatch }}>
        <body className={inter.className}>{children}</body>
      </AuthContext.Provider>
    </html>
  );
}

export default RootLayout;
