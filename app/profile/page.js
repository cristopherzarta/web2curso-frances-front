"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense, useContext, useEffect } from "react";
import { AuthContext } from "../layout";
import Header from "@/components/Header";
import PayPalButtons from "@/components/ui/PayPalButtons";

export default function Profile() {
  const { state, dispatch } = useContext(AuthContext);

  const searchParams = useSearchParams();
  const token = searchParams.get("login_info");

  const router = useRouter();

  //console.log(token)

  //console.log(searchParams);
  //console.log(login_info);

  useEffect(() => {
    //console.log({ jwt: searchParams.get("jwt") });

    if (token) {
      const login_info = JSON.parse(token);

      dispatch({
        type: "LOGIN",
        payload: login_info,
      });
      router.replace("/profile");
    }
  }, [searchParams.get?.login_info]);
  //console.log("login_info")
  return (
    <>
      <Header />
      <div>PROFILE</div>

 

    </>
  );
}
