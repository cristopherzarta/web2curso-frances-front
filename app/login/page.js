"use client";

import Header from "@/components/Header";
import { AuthContext } from "../layout";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Image from "next/image";
import { config } from "@/constans/config";

const Login = () => {
  const {
    state: { isAuthenticated },
  } = useContext(AuthContext);

  const router = useRouter();

  if (isAuthenticated) {
    router.replace("/");
  }

  const handleLogin = () => {
    window.location = `${config.BASE_BACKEND_URL}/auth/google`;
  };

  return (
    <div>
      <Header isLoginPage />

      <div
        className="df aic br2 cblack cursorp"
        onClick={handleLogin}
        style={{
          backgroundColor: "white",
          height: "3rem",
          maxWidth: "20rem",
          margin: "5rem auto 0 auto",
          boxShadow: "0 1px 2px rgba(0,0,0,0,0.6)",
        }}
      >
        <div style={{ marginLeft: "1.5rem" }}>
          <Image
            src={"/google.png"}
            width={25}
            height={25}
            alt="Picture of the author"
          />
        </div>
        <span className="tac" style={{ width: "100%" }}>
          Acceder con Google
        </span>
      </div>
    </div>
  );
};

export default Login;
