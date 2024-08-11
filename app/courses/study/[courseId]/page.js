"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import CourseSectionVideo from "@/components/CourseSectionVideo";
import CourseVideo from "@/components/CourseVideo";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import { config } from "@/constans/config";
import { AuthContext } from "@/app/layout";
import { Container } from "@/components/ui/Container";

const StudyPage = ({ params }) => {
  const {
    state: { isAuthenticated, user, alreadyChecked, token },
  } = useContext(AuthContext);
  const courseId = params.courseId;
  const [course, setCourse] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  console.log({ course })

  const handleRefund = async () => {
    console.log("REFUNDING");
    const url = `${config.BASE_BACKEND_URL}/paypal/captures/${course.capture_id}/refund`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (data.ok) {
      setCourse((prevData) => ({ ...prevData, hasBoughtTheCourse: false }));
      Swal.fire("Listo", data.message, "success");
    } else {
      Swal.fire("UPS", data.message, "error");
    }
  };

  const router = useRouter();
  //const { courseId } = router.query

  //console.log(`${params.courseId}`);
  //console.log({ course });

  //console.log({ alreadyChecked })
  useEffect(() => {
    //console.log({ user })
     if (!!courseId && alreadyChecked) {
      console.log("FETCHING", { alreadyChecked, user });
      const queryParams = !!user ? `?user_id=${user.sub}` : "";
      fetch(`${config.BASE_BACKEND_URL}/courses/${courseId}${queryParams}`)
        .then((res) => res.json())
        .then(({ ok, data }) => {
          if (ok) {
            setCourse(data);
            setSelectedVideo(data.sections[0].videos[1]);
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [courseId]);

  // console.log({course} );

  //console.log(params.courseId);
  //console.log({ selectedVideo });
  // console.log({ course });
  return (
    <>
      <Header />
      <Container>
        <div className="df aic">
          <div
            className="df fdc"
            style={{ height: "100vh", backgroundColor: "var(--blackDark)" }}
          >
            <h3 className="p10"> SECCIONES del CURSO </h3>
            <div className="df fdc">
              {course?.sections?.map((section) => (
                <div className="df fdc" key={section.name}>
                  <div
                    className="p10 mb5"
                    style={{ backgroundColor: "var(--black)" }}
                  >
                    <span>{section.name}</span>
                  </div>
                  <div className="mb5">
                    {section.videos.map((video, index) => (
                      <CourseSectionVideo
                        key={video.title}
                        index={index}
                        video={video}
                        setSelectedVideo={setSelectedVideo}
                        isAuthenticated={isAuthenticated}
                        hasBoughtTheCourse={course.hasBoughtTheCourse}
                        isSelected={selectedVideo.title === video.title}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {!!selectedVideo && (
            <div className="p10" style={{ height: "100vh", minWidth: "70%" }}>
              <div className="df aic jcsb">
                <h3>{selectedVideo?.title}</h3>
                {!!course.capture_id && course.hasBoughtTheCourse && (
                  <Button color="red" onClick={handleRefund}>
                    Obtener devolucion
                  </Button>
                )}
              </div>
              <CourseVideo
                videoUrl={selectedVideo.videoUrl}
                isAuthenticated={isAuthenticated}
                isFree={!!selectedVideo.free}
                hasBoughtTheCourse={course.hasBoughtTheCourse}
                setCourse={setCourse}
                howManySales={course.howManySales}
                courseId={course._id}
                coursePrice={course.price}
              />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default StudyPage;
