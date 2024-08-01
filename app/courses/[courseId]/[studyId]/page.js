"use client";

import CourseVideo from "@/components/CourseVideo";
import Header from "@/components/Header";
import { config } from "@/constans/config";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { faCirclePlay, faLock } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "@/app/layout";
import CourseSectionVideo from "@/components/CourseSectionVideo";

const StudyPage = () => {
  const {
    state: { isAuthenticated, user, alreadyChecked },
  } = useContext(AuthContext);
  const [course, setCourse] = useState();
  const [selectedVideo, setSelectedVideo] = useState();

  const router = useRouter();
  //const { courseId } = router.query
  const params = useParams();

  console.log(course);
  //console.log(`${params.courseId}`);
  //console.log({ alreadyChecked });

  useEffect(() => {
    if (!!params.studyId && alreadyChecked) {
      console.log("FETCHING", { alreadyChecked, user });

      const queryParams = !!user ? `?user_id${user.sub}` : "";
      fetch(`${config.BASE_BACKEND_URL}/courses/${params.studyId} ${queryParams}`)
        .then((res) => res.json())
        .then(({ ok, data }) => {
          if (ok) {
            setCourse(data);
            setSelectedVideo(data.sections[0].videos[0]);
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [params.studyId]);

  //console.log({ course });

  return (
    <div>
      <Header />
      <div className="df aic">
        <div
          className="df fdc"
          style={{ height: "100vh", backgroundColor: "var(--blackDark)" }}
        >
          <h3 className="p10"> SECCIONES del CURSO </h3>
          <div className="df fdc">
            {" "}
            {course?.sections?.map((section) => (
              <div className="df fdc" key={section.name}>
                <div
                  className="p10 mb5"
                  style={{ backgroundColor: "var(--black)" }}
                >
                  <span>{section.name}</span>
                </div>
                <div className="mb5">
                  {section.videos.map((video, index) => {
                    <CourseSectionVideo
                      key={video.title}
                      index={index}
                      video={video}
                      setSelectedVideo={setSelectedVideo}
                      isAuthenticated={isAuthenticated}
                      hasBoughtTheCourse={course?.hasBoughtTheCourse}
                      isSelected={selectedVideo.title === video.title}
                    />;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        {!!selectedVideo && (
          <div className="p10" style={{ height: "100vh", minWidth: "70%" }}>
            <h3>{selectedVideo?.title}</h3>
            <CourseVideo
              videoUrl={selectedVideo.videoUrl}
              isFree={!!selectedVideo.free}
              isAuthenticated={isAuthenticated}
              hasBoughtTheCourse={course.hasBoughtTheCourse}
              setCourse={setCourse}
              howManySales={course.howManySales}
              courseId={course._id}
              coursePrice={course.price}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPage;
