"use client";
import "./globals.css";
import { useEffect, useState } from "react";

import CourseVideo from "@/components/CourseVideo";
import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";

const BASE_BACKEND_URL = !!process.env.NEXT_PUBLIC_VERCEL_ENV ? process.env.NEXT_PUBLIC_BASE_BACKEND_URL : "http://localhost:4000";

export default function Home() {
  const [courses, setCourses] = useState([]);
  console.log({BASE_BACKEND_URL, env: process.env.NEXT_PUBLIC_VERCEL_ENV})

  useEffect(() => {
    fetch(`${BASE_BACKEND_URL}/courses`)
      .then((res) => res.json())
      .then(({ ok, data }) => {
        if (ok) {
          setCourses(data);
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div className="df fdc aic jcc  ">
      <Header />
      <div className="df fdc p5 tac mb5 ">
        <h1 style={{ lineHeight: "2rem" }}>
          &ldquo;Vive como si fueras a morir mañana, aprende como si fueras a
          vivir por siempre.&ldquo;
        </h1>
        <span>- Mahatma Gandhi</span>
      </div>

      <h2 className="mt20 tdu">CURSOS</h2>

      <div className="mt10">
        {courses.map((c) => (
          <CourseCard course={c} key={c._id} />
        ))}
        <div></div>
      </div>
    </div>
  );
}
