import React from 'react';
import { Wrapper } from "../Wrapper"
import { IntroWrapper, Title, TextIntro, ImageWrapper, Image, CoverCard, ProjectCard, BottomCards, ClientCard, StudentsCard, ProjectCardWrapper, TextWrapper, ProjectCover, ProjectInfoWrapper, ProjectTitle, ProjectIntro, ProjectDate, ProjectLink, ClientWrapper, HeaderWrapper, ClientPic, ClientName, ClientPos, ClientRev, ClientPicWrapper, ClientInfoWrapper, ReviewLink, StudentsWrapper, StudentsPicsWrapper, StudentsPics, StudentsInfoWrapper, StudentsTitle, StudentsNames, StudentsRev, HeaderStudentWrapper, Lines, LinesWrapper, CardWrapper, ProjectPageCard, ProjectPageCardTitle, ProjectPageCardNumber, ProjectPageCardText, ProjectsIntroWrapper, TextIntroWrapper, ImageIntroWrapper, ProjectIntroTitle, ProjectIntroText, ImageProjectIntro } from './dataAnalysisPage.styles';

import image1 from '../../images/web-dev.png';
import imageIntro from '../../images/projects-intro.png';

import { client } from '../../helper/client';

const DataAnalysisPage = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [projectData, setProjectData] = React.useState({});

    const contentfullData = (id) => {
        client(id)
            .then(res => {
                setProjectData(res.items);
                setIsLoaded(true);
            })
    }

    React.useEffect(() => {
        contentfullData('dataAnalysisProjects')
    }, []);

    const projectContent = projectData;
    return (
        <>
        <Wrapper>
            <IntroWrapper>
                <TextWrapper>
                    <Title>What data analysis requests can we help with?</Title>
                    <TextIntro>Practicum by Yandex students are ready to undertake analytics of the data provided by the company or if necessary, are ready to conduct market research to obtain the necessary data for analysis.</TextIntro>
                </TextWrapper>

                <ImageWrapper>
                    <Image style={{ backgroundImage: `url(${image1})` }}></Image>
                </ImageWrapper>
            </IntroWrapper>

            <CardWrapper>
                <ProjectPageCard>
                    <ProjectPageCardNumber>1</ProjectPageCardNumber>
                    <ProjectPageCardTitle>We analyze pricing</ProjectPageCardTitle>
                    <ProjectPageCardText>We will analyze your data, competitors open data, market conditions, and current trends. We will share our conclusions and recommendations regarding the pricing policy of your company.</ProjectPageCardText>
                </ProjectPageCard>
                <ProjectPageCard>
                    <ProjectPageCardNumber>2</ProjectPageCardNumber>
                    <ProjectPageCardTitle>We can build<br/> a recommendation model</ProjectPageCardTitle>
                    <ProjectPageCardText>We will customize issued recommendations. We will analyze data on the behavior of your clients. You will be able to quickly understand what to offer so that they take the suggested action.</ProjectPageCardText>
                </ProjectPageCard>
                <ProjectPageCard>
                    <ProjectPageCardNumber>3</ProjectPageCardNumber>
                    <ProjectPageCardTitle>We can segment your<br/>customer </ProjectPageCardTitle>
                    <ProjectPageCardText>We will divide users into segments, select a core, segment them by interests, and give recommendations regarding the most popular content for each group to increase their retention or formulate a discount policy.</ProjectPageCardText>
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
                projectContent.map((element, i) => {
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
        </Wrapper>
        </>
    )
}

export default DataAnalysisPage;