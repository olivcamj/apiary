import styled from "styled-components";
import { GlobalCard } from "./globalComponents/globalCard/globalCard";
import { Wrapper } from "./Wrapper";
import { Link } from "react-router-dom";
import CardBlock from "./CardBlock";
import image1 from "../images/web-dev.png";
import image2 from "../images/data-analysis.png";
import image3 from "../images/data-science.png";

const CardWrapper = styled.div`
  overflow: visible;
  display: flex;
  width: 100%;
  height: 100%;
  row-gap: 40px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    row-gap: 32px;
  }
`;

const LinkToProject = styled(Link).attrs({ className: "links" })`
  width: auto;
  text-decoration: none;
  &:nth-child(2) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const RequestsCard = styled(GlobalCard).attrs({ className: "RequestsCard" })`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 400px;
  height: 400px;
  background: transparent;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
  }

  &:nth-child(2) {
    margin-left: 40px;
    margin-right: 40px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;

    &:nth-child(2) {
      margin-left: auto;
      margin-right: auto;
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
`;

const requestsCards = (
  <CardWrapper>
    <LinkToProject to="/webdev">
      <RequestsCard
        requestsImage={image1}
        requestsTitle={"Web development"}
        requestsHash={"#programming"}
      />
    </LinkToProject>

    <LinkToProject to="/dataanalysis">
      <RequestsCard
        requestsImage={image2}
        requestsTitle={"Data analysis"}
        requestsHash={"#analysis"}
      />
    </LinkToProject>

    <LinkToProject to="/datascience">
      <RequestsCard
        requestsImage={image3}
        requestsTitle={"Data science"}
        requestsHash={"#science"}
      />
    </LinkToProject>
  </CardWrapper>
);

const Requests = () => {
  return (
    <Wrapper name="requests">
      <CardBlock
        name="requests"
        title="What requests can we help with?"
        intro="By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness."
        cards={requestsCards}
      />
    </Wrapper>
  );
};

export default Requests;
