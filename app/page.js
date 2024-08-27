"use client";

import "./globals.css";
import { useEffect, useState } from "react";

import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import { config } from "@/constans/config";
import Image from "next/image";

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
        console.log({ err });
      });
  }, []);

  //console.log(courses)
  return (
    <>
      <div className="df fdc aic jcc  ">
        <Header />
        <div className="df fdc p5 tac mb5 ">
          <h1 style={{ lineHeight: "2rem" }}>
            &ldquo;<span className="main-word">Vive</span> como si fueras a
            morir mañana,
            <br /> <span className="main-word">aprende</span> como si fueras a
            vivir por siempre.&rdquo;
          </h1>
          <div className="df aic asfe" style={{ marginRight: "4rem" }}>
            <span className="mr5">- Mahatma Gandhi*</span>
            <div
              className="posr oh cursorp ml5"
              style={{
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "1.75rem",
              }}
            >
              <Image src={"/gandhi.jpg"} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        <h2 className="mt20 tdu" style={{ margintop: "5rem" }}>
          CURSOS
        </h2>

        <div className="mt10">
          {courses.map((c) => (
            <CourseCard course={c} key={c._id} />
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .main-title {
            line-height: 3rem;
            font-size: 3rem;
            max-width: 60vw;
            font-weight: 400;
            font-family: cubano, sans-serif;
          }

          .main-word {
            background: linear-gradient(
              -35deg,
              rgb(111, 255, 116),
              rgb(15, 120, 2)
            );
            -webkit-background-clip: text;
            color: transparent;
          }
          @media (max-width: 700px) {
            .main-title {
              max-width: 95vw;
            }
          }
        `}
      </style>
    </>
  );
}
