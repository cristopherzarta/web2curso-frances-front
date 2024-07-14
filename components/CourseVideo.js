const CourseVideo = ({ videoUrl }) => {
  return (
    <div
      className="mt20 br5"
      style={{
        overflow: "hidden",
        height: "28rem",
        boxShadow: "0 3px 5px rgba(255,255,255,0.2)",
      }}
    >
      <video
        src={videoUrl}
        style={{ width: "100%", height: "100% " }}
        controls
      ></video>
    </div>
  );
};

export default CourseVideo;
