// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  console.log(projectDetails)
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails
  return (
    <>
      <div className="project-container">
        <img className="project-image" src={imageUrl} alt="project" />
        <div className="project-title-calendar-container">
          <h1 className="project-title">{projectTitle}</h1>
          <div className="calendarIcon-duration-container">
            <AiFillCalendar color="#171f46" />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <a href={projectUrl} className="visit-link">
          Visit
        </a>
      </div>
    </>
  )
}
export default ProjectTimelineCard
