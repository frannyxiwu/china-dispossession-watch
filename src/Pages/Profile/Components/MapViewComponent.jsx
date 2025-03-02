import React, { useEffect } from 'react';
import styled from 'styled-components';

function MapViewComponent({ location, zoom = 14 }) {
  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps JavaScript API not loaded or invalid.');
      return;
    }

    const mapContainer = document.getElementById('map-view-container');
    if (!mapContainer) {
      console.error('No DOM element found with id="map-view-container"');
      return;
    }

    const map = new window.google.maps.Map(mapContainer, {
      center: location,
      zoom,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,     // Disable Pegman
    });

    new window.google.maps.Marker({
      position: location,
      map,
    });
  }, [location, zoom]);

  return <MapViewContainer id="map-view-container" />;
}

export default MapViewComponent;

const MapViewContainer = styled.div`
  width: 100%;
  max-width: 539px;
  height: 300px;
  margin: 0 auto;

  @media (max-width: 700px) {
    display: none;
  }
`;
