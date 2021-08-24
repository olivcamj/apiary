import React from 'react';
import { Container, CoverCard, ProjectCard, BottomCards, ClientCard, StudentsCard, ProjectsLinkWrapper, ProjectCardWrapper, ProjectsBottomLinksWrapper, ProjectButton, ProjectsIntroWrapper, TextWrapper, ImageIntroWrapper, ProjectIntroTitle, ProjectIntroText, ImageProjectIntro, ProjectButtonBottom  } from './projects.style';
import { Wrapper } from '../Wrapper';

import BounceLoader from "react-spinners/ClipLoader";
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
    console.log(projectContent)
    setTimeout(() => {
        setIsLoaded(true)
    }, 2000);

    return (
        <Wrapper neutral>
            <Container name="projects">
                <ProjectsIntroWrapper>
                    <TextWrapper>
                        <ProjectIntroTitle>Delegate tasks to those <br /> who enjoy them</ProjectIntroTitle>
                        <ProjectIntroText>Check out the projects our students have done for <br /> companies in the USA and beyond</ProjectIntroText>
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
                            console.log(element.fields.student1.fields.file.url)
                        return (    
                        
                                <ProjectCardWrapper key={i}>
                                    <ProjectCard
                                        projectTitle={element.fields.title}
                                        projectIntro={element.fields.intro}
                                        projectDate={element.fields.createdin}
                                    // href={}
                                    >
                                        <CoverCard
                                            coverPic={element.fields.coverImg.fields.file.url}
                                        ></CoverCard>
                                    </ProjectCard>

                                    <BottomCards>
                                        <ClientCard
                                            clientName={element.fields.clientName}
                                            clientPic={element.fields.clientPic.fields.file.url}
                                            clientPos={element.fields.clientPos}
                                            clientRev={element.fields.clientReview}
                                        ></ClientCard>
                                        <StudentsCard
                                            studentsTeam={'Students Team'}
                                            studentName1={element.fields.studentName4}
                                            studentsReview={element.fields.studentText}
                                            studentPic={element.fields.student1.fields.file.url}
                                        ></StudentsCard>
                                    </BottomCards>
                                </ProjectCardWrapper>
                        )
                    })

                    
                    :
                    <BounceLoader color={'#000'} loading={true} size={60} />

                }

                <ProjectsBottomLinksWrapper>
                    <ProjectButtonBottom marginb href={"/"} target={"_blank"}>More projects...</ProjectButtonBottom>
                    <ProjectButtonBottom marginb orange href={"/"} target={"_blank"}>Delegate a task</ProjectButtonBottom>
                </ProjectsBottomLinksWrapper>

            </Container>
        </Wrapper>
    )
}


export default Projects;