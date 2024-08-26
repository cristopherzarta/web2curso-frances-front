import { config } from "@/constans/config";
import { useRouter } from "next/navigation";
import PayPalButtons from "./ui/PayPalButtons";
import { isPast } from "date-fns";

const CourseVideo = ({
  videoUrl,
  isAuthenticated,
  hasBoughtTheCourse,
  isFree,
  courseId,
  coursePrice,
  setCourse,
  howManySectionsFinished,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || isFree;

  const router = useRouter();

  // console.log({ coursePrice });
  //console.log({ hasBoughtTheCourse });

  //const today = Date.now();
  let price = Math.min(coursePrice, 10 + 2 * howManySectionsFinished);

  const offerExpirationDate = new Date(2024, 9, 31, 17, 12);

  if (isPast(offerExpirationDate)) {
    price = coursePrice;
  }

  //console.log({
  //isPast: isPast(new Date(2024, 6, 31, 17, 12)),
  //date: new Date(2024, 6, 31, 17, 12)  });
  //console.log({couldWatch})
  return (
    <div
      className="df aic jcc mt20 br5 "
      style={{
        overflow: "hidden",
        width: "100%",
        height: "auto",
        boxShadow: "0 2px 10px rgba(255,255,255,0.2)",
      }}
    >
      {couldWatch && (
        <video
          src={videoUrl}
          style={{ width: "100%", height: "100%" }}
          controls
        ></video>
      )}
      {!couldWatch && !isAuthenticated && (
        <p>
          Para visualizar el curso primero deberias{" "}
          <u className="cursorp" onClick={() => router.push("/login")}>
            iniciar sesión
          </u>
        </p>
      )}
      {!couldWatch && isAuthenticated && (
        <div className="df aic fdc">
          <p> Para visualizar este video primero deberias adquirir el curso </p>

          <PayPalButtons
            coursePrice={coursePrice}
            price={price}
            courseId={courseId}
            setCourse={setCourse}
          />
        </div>
      )}
    </div>
  );
};

export default CourseVideo;
