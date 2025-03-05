import styled from "styled-components";
import MassHumanitiesLogo from '../../images/massHumanitiesLogo.png'

const About = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Header>
                    <Rowdies>ABOUT</Rowdies>
                </Header>
                <SubHeader>
                    What is the China Dispossession Watch?
                </SubHeader>
                <Content>
                    xxxxxxxxxxx
                </Content>
                
                <Header style={{marginTop: '36px'}}>
                    <Noto>關於我們</Noto>
                </Header>
                <SubHeader>
                    <Noto>
                        什么是中国征地拆迁观察?
                    </Noto>
                </SubHeader>
                <Content>
                    <Noto>
                    xxxxxxxxxxx
                    </Noto>
                </Content>
            </ContentWrapper>
        </Wrapper>
    )
}

const Noto = styled.div`
    font-family: 'Noto Serif TC', sans-serif;
    color: inherit;
    font-weight: inherit;
`

const Rowdies = styled.div`
    font-family: 'Rowdies', sans-serif;
`

const Sponsers = styled.div`
    font-family: 'Rowdies';
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    color: #423F67;

    img {
        height: 100px;
    }
`

const Border = styled.div`
    margin: 40px 0px;
    height: 1px;
    width: 100%;

    background: rgba(66, 63, 103, 0.25);
`

const Content = styled.div`
    margin-top: 16px;

    font-family: ${props => props.font === 'Noto Serif TC' ? 'Noto Serif TC' : 'Quattrocento'};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */


    color: #1E1E1E;

`

const SubHeader = styled.div`
    margin-top: 8px;

    font-family: ${props => props.font === 'Noto Serif TC' ? 'Noto Serif TC' : 'Rowdies'};
    font-style: normal;
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    color: #423F67;
    margin: 24px 0px;
`

const Header = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    margin-bottom: 24px;

    gap:6px;
    display: flex;
    flex-direction: column;

    text-transform: uppercase;

    color: #423F67;

    div:not(:first-child) {
        font-weight: 800;
    }
`

const Wrapper = styled.div`
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 33px;
    display: flex;
    justify-content: center;
`

const ContentWrapper = styled.div`
    margin-top: 33px;
    padding: 32px;
    width: 900px;
    display: flex;

    flex-direction: column;
    box-sizing: border-box;

    @media(max-width: 600px) {
        margin-top: 0px;
        padding: 0px;
    }
`

export default About;