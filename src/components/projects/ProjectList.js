import ProjectCardGroup from './ProjectCardGroup';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
`;

const ProjectList = ({ projectContent, indexShow }) => {
  return (
    <List>
      {projectContent.filter((element, i) => i < indexShow).map((project, index) => (
        <li key={index}>
          <ProjectCardGroup key={index} element={project}/>
        </li>
      ))}
    </List>
  )
}

export default ProjectList;