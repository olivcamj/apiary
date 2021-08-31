import { useState, useEffect, useRef } from 'react';
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
  ProjectButtonBottom,
} from './projects.style';
import ProjectList from './ProjectList';
import LoadingProjectCards from './LoadingProjectCards';

import { client } from '../../helper/client';
import { LIMIT } from '../../utils/configData.json';

import imageIntro from '../../images/projects-intro.png';

const Projects = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [contentfulId, setContentfulId] = useState('');
	const [projectData, setProjectData] = useState({});

	const [projectsToShow, setProjectsToShow] = useState([]);
	const projectsPerPage = LIMIT;
	let arrayForHoldingProjects = [];
	const ref = useRef(projectsPerPage);

	const loopWithSlice = (start, end) => {
		const slicedProjects = projectData.slice(start, end);
		arrayForHoldingProjects = arrayForHoldingProjects.concat(slicedProjects);
		setProjectsToShow(arrayForHoldingProjects);
	}

	useEffect(() => {
		loopWithSlice(0, projectsPerPage)
	}, []);

	const handleShowMoreProjects = () => {
		loopWithSlice(ref.current, ref.current + projectsPerPage);
		ref.current += projectsPerPage;
	}

	const contentfulData = (id) => {
		client(id)
      .then(res => {
        setProjectData(res.items);
				// loopWithSlice(0, projectsPerPage);
        setIsLoaded(true);
      })
	}

	const handleId = (projectId) => {
		const thisIsId = projectId;
		setContentfulId(thisIsId);
		contentfulData(thisIsId);
	}

	useEffect(() => {
		contentfulData(contentfulId);
	}, []);

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
					<ProjectList projectsToRender={projectsToShow} />
					:
					<LoadingProjectCards />
				}

				<ProjectsBottomLinksWrapper>
					<ProjectButtonBottom marginb onClick={handleShowMoreProjects}>More projects...</ProjectButtonBottom>
					<ProjectButtonBottom marginb orange href={"/"} target={"_blank"}>Delegate a task</ProjectButtonBottom>
				</ProjectsBottomLinksWrapper>

			</Container>
		</WrapperDiv>
	)
}

export default Projects;
