"use client";

import Header from "../../../components/Header";
import { useRouter } from "next/navigation";
import CourseCard from "../../../components/CourseCard";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const [course, setCourse] = useState({});

  const router = useRouter();
  const { courseId } = router.query;

  useEffect(() => {
    const courseFromLS = JSON.parse(localStorage.getItem(courseId));
    setCourse(courseFromLS);
  }, []);

  return (
    <div>
      <Header />

      <div className="mt20">
        <CourseCard course={course} />
      </div>
    </div>
  );
};

export default CoursePage;
