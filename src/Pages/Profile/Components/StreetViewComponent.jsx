import React, { useEffect } from 'react';
import styled from 'styled-components';

function StreetViewComponent({ location, heading }) {
  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps JavaScript API not loaded or invalid.');
      return;
    }

    const streetViewService = new window.google.maps.StreetViewService();
    const numericHeading = Number(heading) || 0;

    const panoramaOptions = {
      position: { ...location },
      pov: { heading: numericHeading, pitch: 0 },
      enableCloseButton: false,
      enableZoom: false,
      enableAddressControl: false,
      enablePanControl: false,
      enableLinksControl: false,
      enableFullScreen: false,
    };

    const streetViewPanorama = new window.google.maps.StreetViewPanorama(
      document.getElementById('street-view-container'),
      panoramaOptions
    );

    streetViewService.getPanorama(
      { location: panoramaOptions.position, radius: 50 },
      (data, status) => {
        if (status === 'OK' && data?.location) {
          streetViewPanorama.setPano(data.location.pano);
        } else {
          console.warn(
            'Street View not found for this location. Status:',
            status
          );
        }
      }
    );
  }, [location, heading]);

  return <StreetViewContainer id="street-view-container" />;
}

export default StreetViewComponent;

/* Center it and match the wrapper’s max width */
const StreetViewContainer = styled.div`
  width: 100%;
  max-width: 539px;
  height: 300px;
  margin: 0 auto;

  @media (max-width: 700px) {
    display: none;
  }
`;
