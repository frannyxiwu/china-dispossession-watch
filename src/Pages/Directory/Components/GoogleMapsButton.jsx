import React from 'react';
import styled from 'styled-components'

const GoogleMapsButton = ({data}) => {
    const baseUrl = 'https://www.google.com/maps/dir/?api=1&destination='
        const locations = data.map(profile => profile.address.split(', ').join(',').split(' ').join('+') + '+boston');
        
    const handleClick = () => {
        const destination = locations.shift();
        const queryLocations = locations.join('%7C');

        const url = baseUrl + destination + '&travelmode=walking&waypoints=' + queryLocations;

        window.open(url, '_blank').focus();
    }

    return (
        <Wrapper onClick={handleClick}>
            View in Google Maps
        </Wrapper>
    )
}

export default GoogleMapsButton;

const Wrapper = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;

    width: 207px;
    height: 40px;

    border: 1px solid #423F67;
    border-radius: 4px;
    background: none;
    font-family: "quattrocento", serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #423F67;
    cursor: pointer;
    white-space: nowrap;
    
    transition: all .1s ease-in-out;
`