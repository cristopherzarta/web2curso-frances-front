import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faLock } from '@fortawesome/free-solid-svg-icons'

const CourseSectionVideo = ({video,
       setSelectedVideo,
       isAuthenticated,
       hasBoughtTheCourse
    }) => {
    const couldWatch = (isAuthenticated && hasBoughtTheCourse) || video.free

    
    console.log({couldWatch })
  
  return (
    <div
    className="df aic p5 cursorp" onClick={() => setSelectedVideo(video)}>
        {couldWatch &&   <FontAwesomeIcon icon={faCirclePlay}  className='cviolet mh5'/>}
        {!couldWatch &&   <FontAwesomeIcon icon={faLock} className='cred mh5' />}
        
 

    <span style={{ fontSize: "0.9rem" }}>{video.title}</span>
  </div>
  )
}

export default CourseSectionVideo