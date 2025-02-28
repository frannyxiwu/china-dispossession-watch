import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Acorn from '../../../assets/acorn.png';
import AudioPlayer from './AudioPlayer';
import StreetViewComponent from './StreetViewComponent';

const Island = ({data}) => {
    const [isTooltipShowing, setIsTooltipShowing] = useState(false);
    const [tooltipTimeout, setTooltipTimeout] = useState(null);

    const toggleTooltip = (ev) => {
        ev.preventDefault();
        setIsTooltipShowing(!isTooltipShowing);
        clearTimeout(tooltipTimeout); // Clear any existing timeout
    }

    const destroyTooltip = () => {
        setIsTooltipShowing(false);
        clearTimeout(tooltipTimeout); // Clear any existing timeout
    }

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', destroyTooltip);
    
        // Remove scroll event listener on component unmount
        return () => {
          window.removeEventListener('scroll', destroyTooltip);
          clearTimeout(tooltipTimeout); // Clear any existing timeout
        };
    }, []);

    useEffect(() => {
        if (isTooltipShowing) {
            const timeoutId = setTimeout(() => {
                setIsTooltipShowing(false);
            }, 1500);
            setTooltipTimeout(timeoutId); // Store the timeout ID
        }
    }, [isTooltipShowing]);

    return (
        <Wrapper>
            <Title>
                {data.name}
                {data.sign && 
                <TooltipWrapper>
                    <button
                        onClick={ev => toggleTooltip(ev)}
                        onMouseEnter={ev => toggleTooltip(ev)}
                    >
                        <img 
                            style={{marginLeft: '8px'}} 
                            src={Acorn} 
                            alt='acorn that indicates a physical sign'
                        />
                    </button>
                    {isTooltipShowing &&
                        <Tooltip>Visit the sign in person!</Tooltip>
                    }
                </TooltipWrapper>
                }
            </Title>
            <SubTitle>“{data.hint}”</SubTitle>
            <Address>{data.address} {data.chineseAddress}</Address>
            <StreetViewComponent location={data.location} heading={data.heading}/>
            <Border/>
            {data.audio && data.audio.map((file) => {
                return <AudioPlayer key={file.name} file={file}/>
            })}
            <CommentButton>
                <a href={'https://forms.gle/9NPYBbUc8ErcP7tn6'}>
                    Submit a Story
                </a>
            </CommentButton>
        </Wrapper>
    )
}

export default Island

const Tooltip = styled.div`
    position: absolute;
    font-family: 'Quattrocento';
    font-size: 16px;
    white-space: nowrap;
    color: white;
    text-transform: none;
    background-color: #423F67;
    border-radius: 8px;
    padding: 12px;
    height: 36px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    left: -75px;
`

const TooltipWrapper = styled.div`
    position: relative;

    button {
        background: none;
        border: none;
        margin: 0px;
        padding: 0px;
        cursor: pointer;
    }
`

const Border = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(66, 63, 103, 0.25);
    margin: 8px 0px;
`

const CommentButton = styled.button`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    max-width: 221px;
    height: 40px;
    white-space: nowrap;

    background: #FFD44A;
    border: none;
    border-radius: 4px;
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    cursor: pointer;

    a {
        color: #423F67;
        text-decoration: none;
        :visited {
            color: #423F67;
        }
    }
`

const Address = styled.div`
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #423F67;
`

const SubTitle = styled.div`
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;

    color: #423F67;
`

const Title = styled.div`
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    text-transform: uppercase;
    color: #423F67;
    display: flex;
    gap: 8px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px 48px;
    max-width: 539px;
    box-sizing: border-box;
`
