import ProjectCardGroup from './ProjectCardGroup';

const ProjectList = ({ projectsToRender }) => {
  return (
    <ul>
      {projectsToRender.map((project, index) => (
        <li>
          <ProjectCardGroup key={index} element={project}/>
        </li>
      ))}
    </ul>
  )
}

export default ProjectList;