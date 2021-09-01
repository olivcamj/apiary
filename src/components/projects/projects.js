import React from 'react';
import ProjectList from './ProjectList';
import LoadingProjectCards from './LoadingProjectCards';
import { 
  WrapperDiv, 
  Container, 
  ProjectsLinkWrapper, 
  ProjectsBottomLinksWrapper, 
  ProjectButton, 
  ProjectsIntroWrapper, 
  TextWrapper, 
  ImageIntroWrapper, 
  ProjectIntroTitle, 
  ProjectIntroText, 
  ImageProjectIntro, 
  ProjectButtonBottom
} from './Projects.style';

import { client } from '../../helper/client';

import imageIntro from '../../images/projects-intro.png';

const Projects = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [contentfulId, setContentfulId] = React.useState('');
  const [projectData, setProjectData] = React.useState({});

  const contentfullData = (id) => {
    client(id)
      .then(res => {
        setProjectData(res.items);
        setIsLoaded(true);
      })
  }

  const handleId = (projectId) => {
    const thisIsId = projectId;
    setContentfulId(thisIsId);
    contentfullData(thisIsId);
  }

  React.useEffect(() => {
    contentfullData(contentfulId)
  }, []);

  const projectContent = projectData;

  const [button1Bg, setButton1Bg] = React.useState({background: "#FF9900", color: "#FFFFFF"});
  const [button2Bg, setButton2Bg] = React.useState({background: "#FFFFFF", color: "#FF9900"});
  const [button3Bg, setButton3Bg] = React.useState({background: "#FFFFFF", color: "#FF9900"});

  const [indexShow, setIndexShow] = React.useState(2);

  function handleLoadMore () {
    setIndexShow(indexShow + 2);
  }

  function handleButton1 () {
    handleId('projects');
    setIndexShow(2);
    setButton1Bg({background: "#FF9900", color: "#FFFFFF"});
    setButton2Bg({background: "#FFFFFF", color: "#FF9900"});
    setButton3Bg({background: "#FFFFFF", color: "#FF9900"});
  }
  function handleButton2 () {
    handleId('dataAnalysisProjects');
    setIndexShow(2);
    setButton1Bg({background: "#FFFFFF", color: "#FF9900"});
    setButton2Bg({background: "#FF9900", color: "#FFFFFF"});
    setButton3Bg({background: "#FFFFFF", color: "#FF9900"});
  }
  function handleButton3 () {
    handleId('dataScienceProjects');
    setIndexShow(2);
    setButton1Bg({background: "#FFFFFF", color: "#FF9900"});
    setButton2Bg({background: "#FFFFFF", color: "#FF9900"});
    setButton3Bg({background: "#FF9900", color: "#FFFFFF"});
  }

  return (
    <WrapperDiv neutral name="projects">
      <Container>
        <ProjectsIntroWrapper>
          <TextWrapper>
            <ProjectIntroTitle>Delegate tasks to those who enjoy them</ProjectIntroTitle>
            <ProjectIntroText>Check out the projects our students have done for companies in the USA and beyond</ProjectIntroText>
          </TextWrapper>
          <ImageIntroWrapper>
            <ImageProjectIntro src={imageIntro} />
          </ImageIntroWrapper>
        </ProjectsIntroWrapper>
        <ProjectsLinkWrapper>
          <ProjectButton onClick={() => handleButton1()} projects style={button1Bg}>Web development</ProjectButton>
          <ProjectButton onClick={() => handleButton2()} projects style={button2Bg}>Data analysis</ProjectButton>
          <ProjectButton onClick={() => handleButton3()} projects style={button3Bg}>Data science</ProjectButton>
        </ProjectsLinkWrapper>

        {isLoaded
          ?
            <ProjectList projectContent={projectContent} indexShow={indexShow} />
          :
            <LoadingProjectCards />
        }

        <ProjectsBottomLinksWrapper>
          <ProjectButtonBottom marginb onClick={() => handleLoadMore()}>More projects...</ProjectButtonBottom>
          <ProjectButtonBottom marginb orange href={"/"}>Delegate a task</ProjectButtonBottom>
        </ProjectsBottomLinksWrapper>

      </Container>
    </WrapperDiv>
  )
}

export default Projects;
