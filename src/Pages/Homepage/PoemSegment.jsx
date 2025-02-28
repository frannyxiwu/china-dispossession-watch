import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PoemSegment = ({ item, index, setHoveredSegment, hoveredSegment}) => {
    const textColors = ['#FB538B', '#6EAE53', '#DF3C41', '#4297AF', '#F2723A']

    return (
        <Link
            to={`directory/${item.id}`}
            style={{textDecoration: 'none'}}
            onFocus={() => setHoveredSegment(item)}
        >
            <Wrapper
                key={item.id} 
                textColor={textColors[index % 5]}
                onMouseEnter={() => setHoveredSegment(item)}
                onMouseLeave={() => setHoveredSegment(null)}
                hoveredSegment={hoveredSegment}
                item={item}
            >   
                {item.hint}
            </Wrapper>
        </Link>
    )
}

export default PoemSegment

const Wrapper = styled.span`
    opacity: ${props => props.hoveredSegment && (props.hoveredSegment !== props.item.id) && '.45'};
    border: ${props => props.hoveredSegment && (props.hoveredSegment !== props.item.id) && 'border: 1.5px solid rgba(35, 31, 31, 0.7);'};

    font-family: 'Rowdies', cursive;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 160%;
    margin-right: 1em;
    z-index: 100;
    position: relative;

    color: ${props => props.textColor};
    
    cursor: pointer;
    transition: .1s all linear;
    :hover {
        opacity: 1;
    	-webkit-text-stroke-width: 1.5px;
        -webkit-text-stroke-color: rgba(35, 31, 31, 0.7);
    }
`