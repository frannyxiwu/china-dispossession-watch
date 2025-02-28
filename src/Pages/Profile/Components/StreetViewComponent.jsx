import React, { useEffect } from 'react';
import styled from 'styled-components';

function StreetViewComponent({location, heading}) {
  useEffect(() => {
    if (window.google?.maps) {
      const streetViewService = new window.google.maps.StreetViewService();
      const panoramaOptions = {
        position: {...location}, // Set your desired coordinates
        pov: { heading: heading, pitch: 0 }, // Set the initial view
        enableCloseButton: false, // Disable the close button
        enableZoom: false, // Disable zoom
        enableAddressControl: false, // Disable the address control
        enablePanControl: false, // Disable the pan control
        enableLinksControl: false, // Disable the links control
        enableFullScreen: false,
      };
  
      const streetViewPanorama = new window.google.maps.StreetViewPanorama(
        document.getElementById('street-view-container'),
        panoramaOptions
      );
  
      streetViewService.getPanorama({ location: panoramaOptions.position, radius: 50 }, (data, status) => {
        if (status === 'OK') {
          streetViewPanorama.setPano(data.location.pano);
        }
      });
    }
  }, []);

  return (
    <StreetViewContainer id="street-view-container" style={{ width: '100%', height: '245px', borderRadius: '15px' }}/>
  );
}

const StreetViewContainer = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`

export default StreetViewComponent;
