import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faLock } from "@fortawesome/free-solid-svg-icons";

const CourseSectionVideo = ({
  index,
  video,
  setSelectedVideo,
  isAuthenticated,
  hasBoughtTheCourse,
  isSelected,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || video.free;

  //console.log({ setSelectedVideo });
  //console.log({ isAuthenticated });
  console.log({ isSelected });

  //console.log({ couldWatch });

  return (
    <div
      className="df aic jcsb p5 cursorp"
      onClick={(e) => {
        e.stopPropagation()
        setSelectedVideo(video)}}
    >
      <div className="df aic fs8">
        <span className="mr5">{video.emoji}</span>
        <span>{video.title.slice(2, video.title.length)}</span>
      </div>
      {couldWatch && (
        <i
          className={
            "fa-solid fa-circle-play ml10" + (isSelected ? " cgreen" : " cviolet")
          }
        />
      )}
      {!couldWatch && (
        <i
          className={
            "fa-solid fa-lock cred ml10" + (isSelected ? " cgreen" : " cred")
          }
        />
      )}
    </div>
  );
};

export default CourseSectionVideo;
