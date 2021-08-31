import { Container, CardWrapper, RequestsCard, RequestsTitle, RequestsIntro, LinkToProject } from './requests.styles';
import { Wrapper } from '../Wrapper';

import image1 from '../../images/web-dev.png';
import image2 from '../../images/data-analysis.png';
import image3 from '../../images/data-science.png';

const Requests = () => {

    return (
        <Wrapper>
            <Container name="requests">

                <RequestsTitle>What requests can we help with?</RequestsTitle>
                <RequestsIntro>We carry out important, non-urgent tasks, with results that you can use in your work.</RequestsIntro>

                <CardWrapper>
                    <LinkToProject to="/webdev">
                        <RequestsCard
                            requestsImage={image1}
                            requestsTitle={'Web development'}
                            requestsHash={'#programing'}
                        >
                        </RequestsCard>
                    </LinkToProject>

                    <LinkToProject to="/dataanalysis">
                        <RequestsCard
                            requestsImage={image2}
                            requestsTitle={'Data analysis'}
                            requestsHash={'#analysis'}
                        >
                        </RequestsCard>
                    </LinkToProject>
                    <LinkToProject to="/dataScience">
                        <RequestsCard
                            requestsImage={image3}
                            requestsTitle={'Data science'}
                            requestsHash={'#science'}
                        >
                        </RequestsCard>
                    </LinkToProject>
                </CardWrapper>

            </Container>
        </Wrapper>
    )
}

export default Requests;