import { Card, ProjectCover, ProjectWrapper, ProjectTitle, ProjectIntro, ProjectDate, ProjectLink, ClientWrapper, HeaderWrapper, ClientPic, ClientName, ClientPos, ClientRev, ClientPicWrapper, ClientInfoWrapper, StudentsWrapper, StudentsPicsWrapper, StudentsPics, StudentsInfoWrapper, StudentsTitle, StudentsNames, StudentsRev, ReviewLink, UsefullWrapper, ImageWrapper, UsefullImage, UsefullTitle, UsefullText, RequestsImageWrapper, RequestsWrapper, RequestsImage, RequestsHash, RequestsTitle, ChatText, HeaderStudentWrapper } from './globalCard.styles';


export const GlobalCard = ({
    className,
    children,
    coverPic,
    projectTitle,
    projectIntro,
    projectDate,
    href,
    clientName,
    clientPic,
    clientPos,
    clientRev,
    studentsTeam,
    studentName1,
    studentsReview,
    studentPic,
    reviewLink,
    usefullImage,
    usefullTitle,
    usefullText,
    requestsImage,
    requestsHash,
    requestsTitle,
    chatText
}) => {
    return (
        <Card className={className}>
            {children}

            {coverPic && <ProjectCover src={coverPic} />}

            {projectTitle &&
                <ProjectWrapper>
                    <ProjectTitle>{projectTitle}</ProjectTitle>
                    <ProjectIntro>{projectIntro}</ProjectIntro>
                    <ProjectDate>{projectDate}</ProjectDate>
                    <ProjectLink href={href} target="_blank">Visit wbesite →</ProjectLink>
                </ProjectWrapper>
            }

            {clientName &&
                <ClientWrapper>
                    <HeaderWrapper>
                        <ClientPicWrapper>
                            <ClientPic src={clientPic} />
                        </ClientPicWrapper>
                        <ClientInfoWrapper>
                            <ClientName>{clientName}</ClientName>
                            <ClientPos>{clientPos}</ClientPos>
                        </ClientInfoWrapper>
                    </HeaderWrapper>
                    <ClientRev>{clientRev}</ClientRev>
                    <ReviewLink href={reviewLink}>Read full review</ReviewLink>
                </ClientWrapper>
            }

            {studentsTeam &&
                <StudentsWrapper>
                    <HeaderStudentWrapper>
                        <StudentsPicsWrapper>
                            <StudentsPics src={studentPic} />
                            <StudentsPics src={studentPic} />
                            <StudentsPics src={studentPic} />
                        </StudentsPicsWrapper>
                        <StudentsInfoWrapper>
                            <StudentsTitle>{studentsTeam}</StudentsTitle>
                            <StudentsNames>{studentName1},{''} {studentName1}, {''}{studentName1}</StudentsNames>
                        </StudentsInfoWrapper>
                    </HeaderStudentWrapper>
                    <StudentsRev>{studentsReview}</StudentsRev>
                </StudentsWrapper>
            }

            {usefullImage &&
                <UsefullWrapper>
                    <ImageWrapper>
                        <UsefullImage
                            src={usefullImage}
                        />
                    </ImageWrapper>
                    <UsefullTitle>{usefullTitle}</UsefullTitle>
                    <UsefullText>{usefullText}</UsefullText>
                </UsefullWrapper>
            }

            {requestsImage &&
                <RequestsWrapper>
                    <RequestsHash>{requestsHash}</RequestsHash>
                    <RequestsTitle>{requestsTitle}</RequestsTitle>
                    
                    <RequestsImageWrapper>
                        <RequestsImage
                            src={requestsImage}
                        />
                    </RequestsImageWrapper>
                    
                </RequestsWrapper>

            }

            {chatText &&
                <ChatText>{chatText}</ChatText>
            }



        </Card>
    )
}