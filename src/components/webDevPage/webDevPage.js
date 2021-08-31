import React from 'react';
import { Wrapper } from "../Wrapper"
import { ProjectsBottomLinksWrapper, ProjectButtonBottom, IntroWrapper, Title, TextIntro, ImageWrapper, Image, CoverCard, ProjectCard, BottomCards, ClientCard, StudentsCard, ProjectCardWrapper, TextWrapper, ProjectCover, ProjectInfoWrapper, ProjectTitle, ProjectIntro, ProjectDate, ProjectLink, ClientWrapper, HeaderWrapper, ClientPic, ClientName, ClientPos, ClientRev, ClientPicWrapper, ClientInfoWrapper, ReviewLink, StudentsWrapper, StudentsPicsWrapper, StudentsPics, StudentsInfoWrapper, StudentsTitle, StudentsNames, StudentsRev, HeaderStudentWrapper, Lines, LinesWrapper, CardWrapper, ProjectPageCard, ProjectPageCardTitle, ProjectPageCardNumber, ProjectPageCardText, ProjectsIntroWrapper, TextIntroWrapper, ImageIntroWrapper, ProjectIntroTitle, ProjectIntroText, ImageProjectIntro } from './webDevPage.styles';

import image1 from '../../images/web-dev.png';
import imageIntro from '../../images/projects-intro.png';

import { client } from '../../helper/client';

const WebDevPage = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [projectData, setProjectData] = React.useState({});

    const [indexShow, setIndexShow] = React.useState(2);

    function handleLoadMore () {
        setIndexShow(indexShow + 2);
    }

    const contentfullData = (id) => {
        client(id)
            .then(res => {
                setProjectData(res.items);
                setIsLoaded(true);
            })
    }

    React.useEffect(() => {
        contentfullData('projects')
    }, []);

    const projectContent = projectData;
    return (
        <>
            <Wrapper>
                <IntroWrapper>
                    <TextWrapper>
                        <Title>What web development requests can we help with?</Title>
                        <TextIntro>Practicum by Yandex students are ready to build your website from your design or if necessary, we can ask our colleagues from the design team to create a unique design for your company and a website based on this design.</TextIntro>
                    </TextWrapper>

                    <ImageWrapper>
                        <Image style={{ backgroundImage: `url(${image1})` }}></Image>
                    </ImageWrapper>
                </IntroWrapper>

                <CardWrapper>
                    <ProjectPageCard>
                        <ProjectPageCardNumber>1</ProjectPageCardNumber>
                        <ProjectPageCardTitle>Create a one page  website <br /> from scratch</ProjectPageCardTitle>
                        <ProjectPageCardText>We can create a landing page for a new project or refresh an existing one</ProjectPageCardText>
                    </ProjectPageCard>
                    <ProjectPageCard>
                        <ProjectPageCardNumber>2</ProjectPageCardNumber>
                        <ProjectPageCardTitle>We make up your <br /> website design</ProjectPageCardTitle>
                        <ProjectPageCardText>If you already have a website design, we will gladly prepare an adaptive layout.</ProjectPageCardText>
                    </ProjectPageCard>
                    <ProjectPageCard>
                        <ProjectPageCardNumber>3</ProjectPageCardNumber>
                        <ProjectPageCardTitle>Let´s create a complex <br /> multi-page website for the project</ProjectPageCardTitle>
                        <ProjectPageCardText>We are able to work on highly complex websites with deeply nested pages.</ProjectPageCardText>
                    </ProjectPageCard>
                </CardWrapper>
            </Wrapper>
            <Wrapper neutral>
                <ProjectsIntroWrapper>
                    <TextIntroWrapper>
                        <ProjectIntroTitle>Delegate tasks to those who enjoy them</ProjectIntroTitle>
                        <ProjectIntroText>Check out the projects our students have done for companies in the USA and beyond</ProjectIntroText>
                    </TextIntroWrapper>
                    <ImageIntroWrapper>
                        <ImageProjectIntro src={imageIntro} />
                    </ImageIntroWrapper>

                </ProjectsIntroWrapper>

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
            </Wrapper>
        </>
    )
}

export default WebDevPage;