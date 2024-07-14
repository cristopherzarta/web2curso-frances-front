"use client";

import CourseCard from "@/components/CourseCard";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function CoursePage ({ params }) {
  const [course, setCourse] = useState({});
  console.log({ params });

  useEffect(() => {
    const courseFromLS = JSON.parse(localStorage.getItem("params.courseId"));
    setCourse(courseFromLS);
    console.log({ courseFromLS });
  }, []);

  return (
    <div>
      <Header />
      <div className="mt20">
    <CourseCard course={params.courseId}/>

      </div>
    </div>
  );
}
