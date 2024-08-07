"use client";

import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/layout";
import Button from "./ui/Button";
import Image from "next/image";
import { Container } from "./ui/Container";

const Header = ({ isLoginPage }) => {
  const {
    state: { isAuthenticated, user },
    dispatch,
  } = useContext(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setShowUserMenu(false);
  };

  return (
    <>
      <div
        className="df aic w100p p5"
        style={{
          backgroundColor: "var(--blackDark)",
          boxShadow: "0 2px 15px rgba(0,0,0,0.5)",
        }}
      >
        <Container>
          <h1 className="cursorp" onClick={() => router.push("/")}>
            🧠 Feed Him Well
          </h1>
          {!isAuthenticated && !isLoginPage && (
            <Button onClick={() => router.push("/login")} color="violet">
              Iniciar sesión
            </Button>
          )}
          {isAuthenticated && (
            <div className="posr">
              <div
                className="posr oh cursorp"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "2.5rem",
                }}
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <Image src={user?.pictureUrl} layout="fill" objectFit="cover" />
              </div>
              {showUserMenu && (
                <div
                  className="posa df fdc br5 pt5 cblack oh"
                  style={{
                    backgroundColor: "white",
                    top: "3rem",
                    right: 0,
                    width: "9.5rem",
                    zIndex: 10,
                  }}
                >
                  {[
                    {
                      text: "Mi perfil",
                      color: "var(--black)",
                      icon: "fas fa-user",
                      onClick: () => {
                        router.push("/profile");
                        setShowUserMenu(false);
                      },
                    },
                    {
                      text: "Cerrar sesion",
                      color: "var(--red)",
                      icon: "fas fa-sing-out-alt",
                      onClick: handleLogout,
                    },
                  ].map((option) => (
                    <span
                      className="mb5 p5 cursorp option "
                      style={{ color: option.color }}
                      onClick={option.onClick}
                      key={option.text}
                    >
                      <i className={option.icon} />
                      <span className="ml5">{option.text}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {showUserMenu && (
            <div
              className="posa"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                zIndex: 9,
              }}
              onClick={() => setShowUserMenu(!showUserMenu)}
            ></div>
          )}
        </Container>
      </div>
      <style jsx>
        {`
          .option:hover {
            background-color: var(--violet);
            color: white !important;
          }
        `}
      </style>
    </>
  );
};

export default Header;
