"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AuthContext } from "../layout";
import Header from "@/components/Header";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { config } from "@/constans/config";
import Swal from "sweetalert2";

export default function Profile() {
  const {
    state: { user, token },
    dispatch,
  } = useContext(AuthContext);

  const searchParams = useSearchParams();
  searchParams.get("login_info");

  const router = useRouter();

  const handleDeletePersonalData = async () => {
    const response = await Swal.fire({
      title: "Atencion",
      html: "Estas seguro de eliminar todos tus datos personales?",
      icon: "warning",
      confirmButtonText: "Si, eliminar",
      confirmButtonColor: "var(--red)",
      showCancelButton: true,
      cancelButtonText: "No, gracias",
    });
    if (response.isConfirmed) {
      const url = `${config.BASE_BACKEND_URL}/users/${user.sub}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (data.ok) {
        await Swal.fire("Listo", data.message, "success");
        dispatch({ type: "LOGOUT" });
      }
    }
  };

  useEffect(() => {
    if (searchParams.get("login_info")) {
      const login_info = JSON.parse(searchParams.get("login_info"));

      dispatch({
        type: "LOGIN",
        payload: login_info,
      });
      router.replace("/");
    }
  }, [searchParams.get?.login_info]);
  //console.log("login_info")
  return (
    <>
      <Header />
      <Container>
        <div className="df fdc aic jcc mt20" style={{ width: "100%" }}>
          <div className="df aic ">
            <div
              className="posr oh cursorp mr10"
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "5rem",
              }}
            >
              <Image src={user?.pictureUrl} layout="fill" objectFit="cover" />
            </div>
            <div>
              <h1>
                {user?.firstname} {user?.lastname}
              </h1>
            </div>
          </div>
          <div className="df aic">
            <i className="fas fa-envelope mr10 fs14 mt3" />
            <h2>{user?.email}</h2>
          </div>
          <Button color="red" mt="2rem" onClick={handleDeletePersonalData}>
            <span className="fs12 ">Eliminar mis datos personales</span>
          </Button>
        </div>
      </Container>
    </>
  );
}
