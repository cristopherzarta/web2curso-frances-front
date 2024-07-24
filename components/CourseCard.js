"use client";

import { AuthContext } from "@/app/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Swal from "sweetalert2";

const CourseCard = ({ course }) => {

  const { thumbnail, name, description, _id } = course;

  const router = useRouter();

  const handleClick = () => {
   
    
    router.push(`/courses/study/${_id}`);
    localStorage.setItem(_id, JSON.stringify(course));
  };

  return (
    <>
      <div className="df jcsb cursorp card-container " onClick={handleClick}>
        <div
          style={{
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            marginRight: "1rem",
            width: `${0.82 * 150}px`,
          }}
        >
          <Image
            priority={true}
            src={thumbnail}
            alt="Picture of the author"
            width={0.82 * 150}
            height={150}
           
          />
        </div>

        <div className="df fdc card-body ">
          <h3 className="cblack">{name}</h3>
          <h1 className="cgrey m0">{description}</h1>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          background-color: white;
          padding: 0.75rem;
          border-radius: 0.5rem;
          max-width: 50rem;
          transition: transform 0.3s ease;
        }

        .card-container:hover {
          transform: scale(1.03);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }

        .card-body {
          width: 60%;
        }

        @media (max-width: 800px) {
          .card-container {
            flex-direction: column;
            width: ${0.82 * 150 + "px"};
            margin: 0 auto;
          }

          .card-body {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default CourseCard;
