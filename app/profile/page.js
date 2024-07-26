"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense, useContext, useEffect } from "react";
import { AuthContext } from "../layout";
import Header from "@/components/Header";

export default function Profile () {
  
  const { state, dispatch } = useContext(AuthContext);

  const searchParams = useSearchParams();
  const token = searchParams.get("login_info");

  const router = useRouter();

  //console.log(router)

  // console.log(searchParams);
  //console.log(login_info);

  useEffect(() => {
    //console.log({ jwt: searchParams.get("jwt") });

    if (searchParams.get("login_info")) {
      const login_info = JSON.parse(searchParams.get("login_info"));

      dispatch({
        type: "LOGIN",
        payload: login_info,
      });
      router.replace("/profile");
    }
  }, [searchParams.get?.login_info]);

  return (
    <Suspense>
      <Header />
      <div>PROFILE</div>
    </Suspense>
  );
};


