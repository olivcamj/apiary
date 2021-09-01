import {
  Card,
  IconBoxWrapper,
  ImageWrapper,
  IconBoxImage,
  IconBoxTitle,
  IconBoxText,
  RequestsImageWrapper,
  RequestsWrapper,
  RequestsImage,
  RequestsHash,
  RequestsTitle,
  ChatText,
} from "./globalCard.styles";

export const GlobalCard = ({
  className,
  children,
  iconBoxImage,
  iconBoxTitle,
  iconBoxText,
  requestsImage,
  requestsHash,
  requestsTitle,
  chatText,
}) => {
  return (
    <Card className={className}>
      {children}

      {iconBoxImage && (
        <IconBoxWrapper>
          <ImageWrapper>
            <IconBoxImage src={iconBoxImage} />
          </ImageWrapper>
          <IconBoxTitle>{iconBoxTitle}</IconBoxTitle>
          <IconBoxText>{iconBoxText}</IconBoxText>
        </IconBoxWrapper>
      )}

      {requestsImage && (
        <RequestsWrapper>
          <RequestsHash>{requestsHash}</RequestsHash>
          <RequestsTitle>{requestsTitle}</RequestsTitle>

          <RequestsImageWrapper>
            <RequestsImage src={requestsImage} />
          </RequestsImageWrapper>
        </RequestsWrapper>
      )}

      {chatText && <ChatText>{chatText}</ChatText>}
    </Card>
  );
};
