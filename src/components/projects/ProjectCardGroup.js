import {
  ProjectCardWrapper,
  ProjectCard,
  CoverCard,
  ProjectCover,
  ProjectInfoWrapper,
  ProjectTitle,
  ProjectIntro,
  ProjectDate,
  ProjectLink,
  BottomCards,
  ClientCard,
  ClientWrapper,
  HeaderWrapper,
  ClientPicWrapper,
  ClientPic,
  ClientRev,
  ClientInfoWrapper,
  ClientName,
  ClientPos,
  ReviewLink,
  StudentsCard,
  StudentsWrapper,
  HeaderStudentWrapper,
  StudentsPicsWrapper,
  StudentsPics,
  StudentsInfoWrapper,
  StudentsTitle,
  StudentsNames,
  StudentsRev,
} from "./Projects.style";

const ProjectCardGroup = ({ element, i }) => {
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
            target="_blank"
          >
            Visit wbesite →
          </ProjectLink>
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
            >
              Read full review
            </ReviewLink>
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
                <StudentsTitle>{"Students Team"}</StudentsTitle>
                <StudentsNames>
                  {element.fields.studentName4},{""}{" "}
                  {element.fields.studentName4}, {""}
                  {element.fields.studentName4}
                </StudentsNames>
              </StudentsInfoWrapper>
            </HeaderStudentWrapper>
            <StudentsRev>{element.fields.studentText}</StudentsRev>
          </StudentsWrapper>
        </StudentsCard>
      </BottomCards>
    </ProjectCardWrapper>
  );
};

export default ProjectCardGroup;
