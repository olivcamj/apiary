import React from 'react';
import {
  WrapperDiv,
  Container,
  CoverCard,
  ProjectCard,
  BottomCards,
  ClientCard,
  StudentsCard,
  ProjectsLinkWrapper,
  ProjectsBottomLinksWrapper,
  ProjectButton,
  ProjectsIntroWrapper,
  TextWrapper,
  ImageIntroWrapper,
  ProjectIntroTitle,
  ProjectIntroText,
  ImageProjectIntro,
  ProjectButtonBottom,
  ProjectCardWrapper,
  Lines,
  LinesWrapper
} from './projects.style';
import ProjectCardGroup from './ProjectCardGroup';

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

	return (
		<WrapperDiv neutral>
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
					<ProjectButton onClick={() => handleId('projects')} projects >Web development</ProjectButton>
					<ProjectButton onClick={() => handleId('dataAnalysisProjects')} projects >Data analysis</ProjectButton>
					<ProjectButton projects >Data science</ProjectButton>
				</ProjectsLinkWrapper>

				{isLoaded
					?
					projectContent.map((element, i) => {
						return (
              <ProjectCardGroup key={i} element={element}/>
						)
					})
					:
					<ProjectCardWrapper>
						<ProjectCard>
							<CoverCard>
								<LinesWrapper>
									<Lines shine></Lines>
									<Lines shine></Lines>
									<Lines shine></Lines>
								</LinesWrapper>
							</CoverCard>
							<CoverCard>
								<LinesWrapper>
									<Lines shine></Lines>
									<Lines shine></Lines>
									<Lines shine></Lines>
								</LinesWrapper>
							</CoverCard>
						</ProjectCard>
						<BottomCards>
							<ClientCard>
								<LinesWrapper>
									<Lines shine></Lines>
									<Lines shine></Lines>
									<Lines shine></Lines>
								</LinesWrapper>
							</ClientCard>
							<StudentsCard>
								<LinesWrapper>
									<Lines shine></Lines>
									<Lines shine></Lines>
									<Lines shine></Lines>
								</LinesWrapper>
							</StudentsCard>
						</BottomCards>
					</ProjectCardWrapper>
				}

				<ProjectsBottomLinksWrapper>
					<ProjectButtonBottom marginb href={"/"} target={"_blank"}>More projects...</ProjectButtonBottom>
					<ProjectButtonBottom marginb orange href={"/"} target={"_blank"}>Delegate a task</ProjectButtonBottom>
				</ProjectsBottomLinksWrapper>

			</Container>
		</WrapperDiv>
	)
}

export default Projects;
