import styled from 'styled-components'
import { useState } from 'react';

import PoemSegment from './PoemSegment';
import PoemSegmentMobile from './PoemSegmentMobile';
import Media from 'react-media';
const Homepage = ({data}) => {
    const [hoveredSegment, setHoveredSegment] = useState(null);

    return (
        <Media
            queries={{
                small: "(max-width: 599px)",
                large: "(min-width: 600px)"
            }}
        >
            {matches => (
                <>
                    {matches.small && (
                        <>
                            <Wrapper 
                                backgroundImage={hoveredSegment && hoveredSegment.cover}
                                hoveredSegment={hoveredSegment}
                                mobile={matches.small}
                            >
                                {data.map((item, index) => {
                                    return (
                                        <PoemSegmentMobile 
                                            item={item} 
                                            index={index}
                                            key={index}
                                            hoveredSegment={hoveredSegment}
                                            setHoveredSegment={setHoveredSegment}
                                        />
                                    )
                                })}
                            </Wrapper>
                        </>
                    )}
                    {matches.large && (
                        <Wrapper backgroundImage={hoveredSegment && hoveredSegment.cover}>
                            {data.map((item, index) => {
                                return (
                                    <PoemSegment 
                                        item={item} 
                                        index={index}
                                        key={index}
                                        hoveredSegment={hoveredSegment}
                                        setHoveredSegment={setHoveredSegment}
                                    />
                                )
                            })}
                        </Wrapper>
                    )}
                </>
            )}
        </Media>
    )
}
 
export default Homepage

const CloseButton = styled.button`
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0px;
`

const InstructionHeader = styled.div`
    height: 52px;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: 'Quattrocento', sans-serif;
    line-height: 20px;
    font-family: 14px;
    background-color: #423F67;
    color: #FBF6E9;
    box-sizing: border-box;
`

const Wrapper = styled.div`
    height: calc(100vh - 88px);
    background-color: #FBF6E9;
    box-sizing: border-box;
    z-index: -10;
    overflow-x: hidden;
    padding: ${props => props.mobile ? '16px' : '32px 30px'};

    width: 100%;
    background-image: url(${props => props.backgroundImage});
    background-position: ${props => props.mobile && 'center'};
    background-attachment: fixed;
    background-size: cover;
`