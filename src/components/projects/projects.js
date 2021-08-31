import React from 'react';
import { WrapperDiv, Container, CoverCard, ProjectCard, BottomCards, ClientCard, StudentsCard, ProjectsLinkWrapper, ProjectCardWrapper, ProjectsBottomLinksWrapper, ProjectButton, ProjectsIntroWrapper, TextWrapper, ImageIntroWrapper, ProjectIntroTitle, ProjectIntroText, ImageProjectIntro, ProjectButtonBottom, ProjectCover, ProjectInfoWrapper, ProjectTitle, ProjectIntro, ProjectDate, ProjectLink, ClientWrapper, HeaderWrapper, ClientPic, ClientName, ClientPos, ClientRev, ClientPicWrapper, ClientInfoWrapper, ReviewLink, StudentsWrapper, StudentsPicsWrapper, StudentsPics, StudentsInfoWrapper, StudentsTitle, StudentsNames, StudentsRev, HeaderStudentWrapper, Lines, LinesWrapper } from './projects.style';

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

    
    // setTimeout(() => {
    //     setIsLoaded(true)
    // }, 2000);

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
                    projectContent.filter((element, idx) => idx < indexShow).map((element, i) => {
                        return (

                            <ProjectCardWrapper key={i}>
                                <ProjectCard>
                                    <CoverCard>
                                        <ProjectCover src={element.fields.coverImg.fields.file.url} />
                                    </CoverCard>

                                    <ProjectInfoWrapper>
                                        <ProjectTitle>{element.fields.title}</ProjectTitle>
                                        <ProjectIntro>{element.fields.intro}</ProjectIntro>
                                        <ProjectDate>{element.fields.createdin}</ProjectDate>
                                        <ProjectLink
                                            // href={href} 
                                            target="_blank">Visit wbesite →</ProjectLink>
                                    </ProjectInfoWrapper>

                                </ProjectCard>

                                <BottomCards>
                                    <ClientCard>
                                        <ClientWrapper>
                                            <HeaderWrapper>
                                                <ClientPicWrapper>
                                                    <ClientPic src={element.fields.clientPic.fields.file.url} />
                                                </ClientPicWrapper>
                                                <ClientInfoWrapper>
                                                    <ClientName>{element.fields.clientName}</ClientName>
                                                    <ClientPos>{element.fields.clientPos}</ClientPos>
                                                </ClientInfoWrapper>
                                            </HeaderWrapper>
                                            <ClientRev>{element.fields.clientReview}</ClientRev>
                                            <ReviewLink
                                            // href={reviewLink}
                                            >Read full review</ReviewLink>
                                        </ClientWrapper>

                                    </ClientCard>
                                    <StudentsCard>
                                        <StudentsWrapper>
                                            <HeaderStudentWrapper>
                                                <StudentsPicsWrapper>
                                                    <StudentsPics src={element.fields.student1.fields.file.url} />
                                                    <StudentsPics src={element.fields.student1.fields.file.url} />
                                                    <StudentsPics src={element.fields.student1.fields.file.url} />
                                                </StudentsPicsWrapper>
                                                <StudentsInfoWrapper>
                                                    <StudentsTitle>{'Students Team'}</StudentsTitle>
                                                    <StudentsNames>{element.fields.studentName4},{''} {element.fields.studentName4}, {''}{element.fields.studentName4}</StudentsNames>
                                                </StudentsInfoWrapper>
                                            </HeaderStudentWrapper>
                                            <StudentsRev>{element.fields.studentText}</StudentsRev>
                                        </StudentsWrapper>
                                    </StudentsCard>
                                </BottomCards>
                            </ProjectCardWrapper>
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
                    <ProjectButtonBottom marginb onClick={() => handleLoadMore()}>More projects...</ProjectButtonBottom>
                    <ProjectButtonBottom marginb orange href={"/"}>Delegate a task</ProjectButtonBottom>
                </ProjectsBottomLinksWrapper>

            </Container>
        </WrapperDiv>
    )
}


export default Projects;