"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/courses`)
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
    <div className="df fdc aic jcc mt20 cursorp">
      <h1>Mi wed de CURSOS - MERGE</h1>
      {courses.map((c) => (
        <div className="df fdc" style={{ width: "50rem" }} key={c._id}>
          <div
            className="df jcsb "
            style={{
              width: "45rem",
              backgroundColor: "white",
              padding: "0.75 rem",
              borderRadius: "0.5rem",
            }}
          >
            <div
              style={{
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                marginRight: "1rem",
              }}
            >
              <Image
                src={c.thumbnail}
                alt="Picture of the author"
                width={0.82 * 150}
                height={150}
              />
            </div>

            <div className="df fdc aic jcc" style={{ width: "60%" }}>
              {" "}
              <h3 className="cblack" mv5>
                {c.name}
              </h3>
              <h1 className="cgrey m0">
                Este curso de Frances es ideal para aquellos que siempre han
                querido aprender la lengua más bella del mundo.
              </h1>
            </div>
          </div>
          <div
            className="mt20 br5"
            style={{
              overflow: "hidden",
              height: "28rem",
              boxShadow: "0 3px 5px rgba(255,255,255,0.2)",
            }}
          >
            <video
              src={c.videos[0].videoUrl}
              style={{ width: "100%", height: "100% " }}
              autoPlay
              controls
            ></video>
          </div>
        </div>
      ))}
    </div>
  );
}
