"use client";

import { useReducer, createContext, useEffect, Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Script from "next/script";

export const AuthContext = createContext();

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
console.log({ env: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID });

/*const getLoginInfo = (entity) => {
  return typeof localStorage !== "undefined"
    ? JSON.parse(localStorage.getItem(entity))
    : null;
}; */

const initialState = {
  alreadyChecked: false,
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  //console.log({ action });
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.jwt);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.jwt,
      };
    case "LOGOUT":
      localStorage.clear();
      window.location = "/";
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
        token: action.payload.token,
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
    const token = localStorage.getItem("token");

    if (!!token || !!user) {
      dispatch({
        type: "SET_LOGGED_USER",
        payload: { user, token, isAuthenticated: true, alreadyChecked: true },
      });
    } else {
      dispatch({
        type: "SET_LOGGED_USER",
        payload: {
          user: null,
          token: null,
          isAuthenticated: false,
          alreadyChecked: true,
        },
      });
    }
  }, []);

  return (
    <html lang="en">
      <AuthContext.Provider value={{ state, dispatch }}>
        <body className={inter.className}>
          <Suspense>{children}</Suspense>
          <Script
            defer
            src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`}
          />
        </body>
      </AuthContext.Provider>
    </html>
  );
}

export default RootLayout;
