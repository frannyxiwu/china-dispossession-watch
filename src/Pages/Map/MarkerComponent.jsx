import React from 'react';
import { pin, colorPin } from './encodedSvg';
import { Marker } from '@react-google-maps/api';
import { useRecoilState } from 'recoil';
import { mapValues } from '../../state/state';
import { scroller } from "react-scroll";
// Remove the useNavigate import since we won't navigate
// import { useNavigate } from 'react-router-dom';

const MarkerComponent = ({ location, id, onMarkerClick }) => {
  const [values, setValues] = useRecoilState(mapValues);
  // Remove the navigate hook:
  // const navigate = useNavigate();
  
  const handleMouseOver = (id) => {
    setValues({ ...values, locationHovered: id });
    scroller.scrollTo(id, {
      smooth: true,
      containerId: 'scrollingMenu',
      duration: 400,
    });
  };

  const handleClick = (id) => {
    // Instead of navigating to the profile page,
    // call the onMarkerClick callback passed from the parent.
    onMarkerClick(id);
  };

  return (
    <Marker
      position={{ lat: location.lat, lng: location.lng }}
      key={id}
      icon={values.locationHovered === id ? { url: colorPin } : { url: pin }}
      onMouseOver={() => handleMouseOver(id)}
      onMouseOut={() => setValues({ ...values, locationHovered: '' })}
      onClick={() => handleClick(id)}
    />
  );
};

export default MarkerComponent;
