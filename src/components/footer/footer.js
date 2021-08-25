
import { WrapperDiv, RightDiv, LeftDiv, CenterDiv, AboutUs, Email, Linkedin, Tfn, FooterInfo, Info, Top, Text } from './footer.styles.js';

const Footer = () => {

    return (
        <WrapperDiv dark>

            <LeftDiv>
                <AboutUs>About us</AboutUs>
                <Email>msgordienko@yandex-team.com</Email>
                <Linkedin>LinkedIn</Linkedin>
                <Tfn>+1-510-646-62-5</Tfn>
            </LeftDiv>

            <CenterDiv>
                <FooterInfo>
                    <Info>This website is developed by Practicum by Yandex’ students</Info>
                </FooterInfo>
            </CenterDiv>

            <RightDiv>
                <Top>Back to top ↑</Top>
                <Text>© 2020 Practicum by Yandex</Text>
            </RightDiv>

        </WrapperDiv>
    )
}

export default Footer;