import React from 'react';
import styled from 'styled-components';

const NotFound = () => {

    return (
        <Wrapper>
            <Header>404</Header>
            <Eng404>Oops, looks like you're lost</Eng404>
            <Ch404>哦，你好像迷路了</Ch404> 
<br></br>
            <Body>Return to home</Body>
            <Body>回到主页</Body>
        </Wrapper>
    )
}

export default NotFound

const Body = styled.div`
    color: #1E1E1E;

    text-align: center;
    font-family: 'Lora', serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 162.5% */
`

const Header = styled.div`
    font-size: 30px;
    font-family: 'Lora', serif;
    font-weight: 1200;
`

const Wrapper = styled.div`
    background-color: #ffffff;
    display: flex;
    padding: 24px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #423F67; 
    height: 95vh;
    font-weight: 900;
    font-size: 28px;
    gap: 8px;
    text-align: center;
`

const Eng404 = styled.div`
    font-family: 'Lora', serif;
    font-size: 16px;
    {/* text-transform: uppercase; */}
    line-height: 20px;
`

const Ch404 = styled.div`
    font-family: 'Noto Serif';
    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
`