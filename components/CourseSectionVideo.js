import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCirclePlay, faLock}  from "@fortawesome/free-solid-svg-icons";



const CourseSectionVideo = ({
  index,
  video,
  setSelectedVideo,
  isAuthenticated,
  hasBoughtTheCourse,
  isSelected,

}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || video.free;

  console.log({ setSelectedVideo });
  console.log({ isAuthenticated });
  console.log({ isSelected });

  //console.log({ couldWatch });
  
  return (
    <div className="df aic p5 cursorp" onClick={() => setSelectedVideo()}>
      {couldWatch &&  <FontAwesomeIcon icon={faCirclePlay} className={"mh10" + ( isSelected ? 'cgreen' : 'cviolet' )} /> }
      {!couldWatch && <FontAwesomeIcon icon={faLock} className={"cred mh5"}/>}

      <span style={{ fontSize: "0.9rem" }}>{video.title}</span>
    </div>
  );
};

export default CourseSectionVideo;
