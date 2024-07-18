"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const profile = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("jwt");

  console.log(searchParams);

  return <p>parameter 1 value is {token}</p>;
};

export default profile;
