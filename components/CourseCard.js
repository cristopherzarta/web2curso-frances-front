"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const CourseCard = ({ course }) => {
  const { thumbnail, name, description, _id } = course;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/study/${_id}`);
    localStorage.setItem(_id, JSON.stringify(course));
  };

  return (
    <>
      <div
        className="df jcsb cursorp card-container posr"
        onClick={handleClick}
      >
        <div
          style={{
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            marginRight: "1rem",
            width: `${15 * 1.77}rem`,
            height: `15rem`,
            overflow: "hidden",
          }}
        >
          <Image
            priority={true}
            src={thumbnail}
            alt="Picture of the author"
            width={150 * 1.77}
            height={150}
            layout="responsive"
          />
        </div>

        <div className="df fdc card-body ">
          <h3 className="cwhite mv5 ">{name}</h3>
          <h1 className="cgrey m0">{description}</h1>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          flex-direction: column;
          background-color: var(--white);
          width: ${15 * 1.77 + "rem"};
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
          transition: transform 0.3s ease;
          margin: 0 auto;
        }

        .card-body {
          width: 100%;
          padding: 0.75rem;
          background-color: var(--black);
        }

        .card-container:hover {
          transform: scale(1.03);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </>
  );
};

export default CourseCard;
