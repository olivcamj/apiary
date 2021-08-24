import { Container, CardWrapper, UsefullCard, UsefullTitle, UsefullIntro } from './usefull.styles';
import { Wrapper } from '../Wrapper';

import image1 from '../../images/resource-saving.png';
import image2 from '../../images/publicize.png';
import image3 from '../../images/pr-boost.png';

const Usefull = () => {
    return (
        <Wrapper dark>
            <Container name="useful">

                <UsefullTitle>Why is it useful for your company?</UsefullTitle>
                <UsefullIntro>By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness.</UsefullIntro>

                <CardWrapper>
                    <UsefullCard
                        usefullImage={image1}
                        usefullTitle={'Resource saving'}
                        usefullText={'Delegate tasks for free and get results that can be used in your future work.'}
                    >
                    </UsefullCard>
                    <UsefullCard
                        usefullImage={image2}
                        usefullTitle={'Publicize'}
                        usefullText={'We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.'}
                    >
                    </UsefullCard>
                    <UsefullCard
                        usefullImage={image3}
                        usefullTitle={'PR boost'}
                        usefullText={'This will increase the visibility of the company among job seekers and attract those who share the values of your company.'}
                    >
                    </UsefullCard>
                </CardWrapper>

            </Container>
        </Wrapper>
    )
}

export default Usefull;