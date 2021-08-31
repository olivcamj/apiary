import ProjectCardGroup from './ProjectCardGroup';

const ProjectList = ({ projectsToRender }) => {
  return (
    <ul>
      {projectsToRender.map((project, index) => (
        <ProjectCardGroup key={index} element={project}/>
      ))}
    </ul>
  )
}

export default ProjectList;