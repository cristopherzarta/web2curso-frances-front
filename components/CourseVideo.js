import { config } from "@/constans/config";
import { useRouter } from "next/navigation";

const CourseVideo = ({
  videoUrl,
  isAuthenticated,
  hasBoughtTheCourse,
  isFree,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || isFree;

  const router = useRouter()


  return (
    <div
      className="df aic jcc mt20 br5"
      style={{
        overflow: "hidden",
        height: "28rem",
        boxShadow: "0 3px 5px rgba(255,255,255,0.2)",
      }}
    >
      {couldWatch && (
        <video
          src={videoUrl}
          style={{ width: "100%", height: "100% " }}
          controls
        ></video>
      )}

      {!couldWatch && !isAuthenticated && (
        <p>
          Para visualizar el curso primero deberias{" "}
          <u
            className="cursorp"
            onClick={() => router.push("/login")}
          >
            iniciar sesión
          </u>
        </p>
      )}

      {!couldWatch && isAuthenticated && (
        <p>
          Para visualizar este video primero deberias{" "}
          <u
            className="cursorp"
            onClick={() => {
              // TO DO implimentar contratacion del curso
            }}
          >
            adquirir el curso
          </u>
        </p>
      )};
    </div>
  );
};

export default CourseVideo;
