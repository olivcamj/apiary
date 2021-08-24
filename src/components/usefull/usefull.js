import { Container, CardWrapper, IconBoxCard, IconBoxTitle, IconBoxIntro } from './usefull.styles';
import { Wrapper } from '../Wrapper';

import image1 from '../../images/resource-saving.png';
import image2 from '../../images/publicize.png';
import image3 from '../../images/pr-boost.png';

const Usefull = () => {
    return (
        <Wrapper dark>
            <Container>

                <IconBoxTitle>Why is it useful for your company?</IconBoxTitle>
                <IconBoxIntro>By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness.</IconBoxIntro>

                <CardWrapper>
                    <IconBoxCard
                        iconBoxImage={image1}
                        iconBoxTitle={'Resource saving'}
                        iconBoxText={'Delegate tasks for free and get results that can be used in your future work.'}
                    >
                    </IconBoxCard>
                    <IconBoxCard
                        iconBoxImage={image2}
                        iconBoxTitle={'Publicize'}
                        iconBoxText={'We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.'}
                    >
                    </IconBoxCard>
                    <IconBoxCard
                        iconBoxImage={image3}
                        iconBoxTitle={'PR boost'}
                        iconBoxText={'This will increase the visibility of the company among job seekers and attract those who share the values of your company.'}
                    >
                    </IconBoxCard>
                </CardWrapper>

            </Container>
        </Wrapper>
    )
}

export default Usefull;