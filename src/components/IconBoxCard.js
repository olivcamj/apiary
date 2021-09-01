import styled from "styled-components";
import { GlobalCard } from "./globalComponents/globalCard/globalCard";

export const IconBoxCard = styled(GlobalCard).attrs({
  className: "iconBoxCard",
})`
  border: none;
  border-radius: 0;
  max-width: 400px;
  height: 100%;
  background: transparent;

  &:nth-child(2) {
    margin: 0 40px;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    margin: 0 auto;
    &:nth-child(2) {
      margin-left: auto;
      margin-right: auto;
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
`;
