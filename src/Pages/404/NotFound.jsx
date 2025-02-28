import React from 'react';
import styled from 'styled-components';
import Acorn404 from '../../assets/404acorn.png'

const NotFound = () => {

    return (
        <Wrapper>
            <Header>404</Header>
            <AcornImg src={Acorn404} alt='a little acorn with foot steps behind it'/>
            <Eng404>Oops, looks like you're lost</Eng404>
            <Ch404>哦，你好像迷路了</Ch404> 

            <Body>Go back to our homepage and pick a site to explore instead!</Body>
            <Body>回到主页placeholder for translation here。。。</Body>
        </Wrapper>
    )
}

export default NotFound

const Body = styled.div`
    color: #1E1E1E;

    text-align: center;
    font-family: 'Quattrocento';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
`

const Header = styled.div`
    font-size: 70px;
    font-family: 'Rowdies', sans-serif;
`

const AcornImg = styled.img`
    position: relative;
    left: -10px;
    width: 500px;
    margin-bottom: 32px;

    @media(max-width: 800px) {
        left: -5px;
        width: 200px;
    }
`

const Wrapper = styled.div`
    background-color: #FBF6E9;
    display: flex;
    padding: 24px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #423F67; 
    height: 95vh;
    font-weight: 500;
    font-size: 28px;
    gap: 8px;
    text-align: center;
`

const Eng404 = styled.div`
    font-family: 'Rowdies', sans-serif;
    font-size: 32px;
    text-transform: uppercase   ;
`

const Ch404 = styled.div`
    font-family: 'Noto Serif TC', sans-serif;
    font-size: 40px;
    font-weight: 900;
`