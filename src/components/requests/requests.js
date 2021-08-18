import { Container, CardWrapper, RequestsCard, RequestsTitle, RequestsIntro } from './requests.styles';

import image1 from '../../images/web-dev.png';
import image2 from '../../images/data-analysis.png';
import image3 from '../../images/data-science.png';

const Requests= () => {

    return (
        <Container>

            <RequestsTitle>What requests can we help with?</RequestsTitle>
            <RequestsIntro>We carry out important, non-urgent tasks, with results that you can use in your work.</RequestsIntro>

            <CardWrapper>
                <RequestsCard
                    requestsImage={image1}
                    requestsTitle={'Web development'}
                    requestsHash={'#programing'}
                >
                </RequestsCard>
                <RequestsCard
                    requestsImage={image2}
                    requestsTitle={'Data analysis'}
                    requestsHash={'#analysis'}
                >
                </RequestsCard>
                <RequestsCard
                    requestsImage={image3}
                    requestsTitle={'Data science'}
                    requestsHash={'#science'}
                >
                </RequestsCard>
            </CardWrapper>

        </Container>

    )
}

export default Requests;