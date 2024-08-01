"use client";

import { useRouter } from "next/navigation";
import CourseCard from "../../../components/CourseCard";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useParams } from "next/navigation";

const CoursePage = () => {
  const [course, setCourse] = useState({});
  const params = useParams();

  //console.log(course)
  //console.log(params);

  useEffect(() => {
    const courseFromLS = JSON.parse(localStorage.getItem(params.courseId));
    setCourse(courseFromLS);
      }, []);

  return (
    <div>
      <Header />
      <div className="mt20">
        <CourseCard course={params.courseId} />
      </div>

      {params.courseId}
    </div>
  );
};

export default CoursePage;
