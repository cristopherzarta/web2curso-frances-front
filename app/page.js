"use client";

import "./globals.css";
import { useEffect, useState } from "react";

import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import { config } from "@/constans/config";
import PayPalButtons2 from "@/components/ui/PayPalButtons2";




export default function Home() {
  const [courses, setCourses] = useState([]);
  /* const {
    state: { jwt },
  } = useContext(AuthContext);
  console.log({ jwt });*/

  //console.log({BASE_BACKEND_URL, env: process.env.NEXT_PUBLIC_VERCEL_ENV});

  useEffect(() => {
     fetch(`${config.BASE_BACKEND_URL}/courses`)
      .then((res) => res.json())
      .then(({ ok, data }) => {
        if (ok) {
          setCourses(data);
        }
      })
      .catch((err) => {
        console.log({ err })
      });
  }, []);

  //console.log(courses)
  return (
    <div className="df fdc aic jcc  ">
      <Header />
      <div className="df fdc p5 tac mb5 ">
        <h1 style={{ lineHeight: "2rem" }}>
          &ldquo;Vive como si fueras a morir mañana, aprende como si fueras a
          vivir por siempre.&rdquo;
        </h1>
        <span>- Mahatma Gandhi</span>
      </div>

      <h2 className="mt20 tdu" style={{ margintop: "5rem"}}>CURSOS</h2>

      <div className="mt10">
        {courses.map((c) => (
          <CourseCard course={c} key={c._id} />
        ))}
      </div>
      <PayPalButtons2 id="ksldklksdjsdljsd"/>
      
    </div>
  );
}
