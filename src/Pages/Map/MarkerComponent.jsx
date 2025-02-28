import React from 'react';
import { pin, colorPin } from './encodedSvg';
import { Marker } from '@react-google-maps/api';
import { useRecoilState } from 'recoil';
import { mapValues } from '../../state/state';
import { scroller } from "react-scroll";
import { useNavigate } from 'react-router-dom';

const MarkerComponent = ({location, id,}) => {
    const navigate = useNavigate();
    const [values, setValues] = useRecoilState(mapValues);
    
    const handleMouseOver = (id) => {
        setValues({...mapValues, locationHovered: id})
        scroller.scrollTo( id, {
            smooth: true,
            containerId: 'scrollingMenu',
            duration: 400,
        })
    }

    const handleClick = (id) => {
        navigate(`/directory/${id}`)
    }

    return (
        <Marker
            position={{lat: location.lat, lng: location.lng}} 
            key={id}
            icon={
                values.locationHovered === id ?
                {url: colorPin} :
                {url: pin}
            }
            onMouseOver={() => handleMouseOver(id)}
            onMouseOut={() => setValues({...values, locationHovered: ''})}
            onClick={() => handleClick(id)}
        />
    )
}

export default MarkerComponent