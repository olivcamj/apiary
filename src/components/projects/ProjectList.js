import ProjectCardGroup from './ProjectCardGroup';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  list-style-type: none;
`;

const ProjectList = ({ projectContent, indexShow }) => {
  return (
    <List>
      {projectContent.filter((element, i) => i < indexShow).map((project, index) => (
        <Li key={index}>
          <ProjectCardGroup key={index} element={project}/>
        </Li>
      ))}
    </List>
  )
}

export default ProjectList;