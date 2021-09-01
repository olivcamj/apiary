import {
  ProjectCardWrapper,
  ProjectCard,
  CoverCard,
  LinesWrapper,
  Lines,
  BottomCards,
  ClientCard,
  StudentsCard,
} from "./Projects.style";

const LoadingProjectCards = () => {
  return (
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
  );
};

export default LoadingProjectCards;
