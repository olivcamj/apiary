import React from 'react';
import { Container, CoverCard, ProjectCard, BottomCards, ClientCard, StudentsCard, ProjectsLinkWrapper, ProjectCardWrapper, ProjectsBottomLinksWrapper, ProjectButton} from './projects.style';
import { GlobalButton } from '../global-components/global-components';
import BounceLoader from "react-spinners/ClipLoader";
import { client } from '../../helper/client';

const Projects = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [contentfulId, setContentfulId] = React.useState('');
    const [projectData, setProjectData] = React.useState({});

    const contentfullData = (id) => {
        client(id)
            .then(res => {
                setProjectData(res.items);
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

    setTimeout(() => {
        setIsLoaded(true)
    }, 2000);

    return (
        <Container>
            <ProjectsLinkWrapper>
                <ProjectButton onClick={() => handleId('projects')} projects >Web development</ProjectButton>
                <ProjectButton onClick={() => handleId('dataAnalysisProjects')} projects >Data analysis</ProjectButton>
                <ProjectButton projects >Data science</ProjectButton>
            </ProjectsLinkWrapper>

            {isLoaded
                ?
                <>
                    <ProjectCardWrapper>
                        <ProjectCard
                            projectTitle={projectContent[0].fields.title}
                            projectIntro={projectContent[0].fields.intro}
                            projectDate={projectContent[0].fields.createdin}
                        // href={}
                        >
                            <CoverCard
                                coverPic={projectContent[0].fields.coverImg.fields.file.url}
                            ></CoverCard>
                        </ProjectCard>

                        <BottomCards>
                            <ClientCard
                                clientName={projectContent[0].fields.clientName}
                                clientPic={projectContent[0].fields.clientPic.fields.file.url}
                                clientPos={projectContent[0].fields.clientPos}
                                clientRev={projectContent[0].fields.clientReview}
                            ></ClientCard>
                            <StudentsCard
                                studentsTeam={'Students Team'}
                                studentName1={projectContent[0].fields.studentName4}
                                studentsReview={projectContent[0].fields.studentText}
                                studentPic={projectContent[0].fields.student1.fields.file.url}
                            ></StudentsCard>
                        </BottomCards>
                    </ProjectCardWrapper>
                </>

                :
                <BounceLoader color={'#000'} loading={true} size={60} />
            }

            <ProjectsBottomLinksWrapper>
                <GlobalButton marginb href={"/"} target={"_blank"}>More projects...</GlobalButton>
                <GlobalButton marginb orange href={"/"} target={"_blank"}>Delegate a task</GlobalButton>
            </ProjectsBottomLinksWrapper>

        </Container>
    )
}


export default Projects;