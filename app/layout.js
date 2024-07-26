"use client";

import { useReducer, createContext, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const AuthContext = createContext();

/*const getLoginInfo = (entity) => {
  return typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem(entity))
    : null;
}; */

const initialState = {
  alreadyChecked: false,
  isAuthenticated: false,
  user: null,
  jwt: null,
};

const reducer = (state, action) => {
  //console.log({ action });
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
      localStorage.clear()
      window.location = "/"
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "SET_LOGGED_USER":
      return {
        ...state,
        alreadyChecked: action.payload.alreadyChecked,
        isAuthenticated: action.payload.isAuthenticated,
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
    const user = JSON.parse(localStorage.getItem("user"));
    const jwt = localStorage.getItem("jwt");
   

    if (!!jwt || !!user) {
      dispatch({ type: "SET_LOGGED_USER", payload: { user, jwt, isAuthenticated: true, alreadyChecked: true } });
    } else {
      dispatch({ type: "SET_LOGGED_USER", payload: { user:null,
         jwt: null, 
         isAuthenticated: false,
         alreadyChecked: true, 
        },
         });
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
