import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import MarkerComponent from './MarkerComponent';
import styled from 'styled-components';

const Map = ({data, isHistoryTrailOpen, }) => {
    const [containerStyle, setContainerStyle] = useState({
        width: 'calc(100vw - 444px)',
        height: 'calc(100vh - 138px)'
    })

    const center = {
        lat: 42.3492,
        lng: -71.0621
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    })
    
    useEffect(() => {
        if(isHistoryTrailOpen === true) {
            setContainerStyle({
                ...containerStyle,
                height: 'calc(100vh - 232px)'
            });
        } else {
            setContainerStyle({
                ...containerStyle,
                height: 'calc(100vh - 138px)'
            });
        }
    }, [isHistoryTrailOpen])

    const createMapOptions = () => {
        return {
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: true,
            rotateControl: false,
            fullscreenControl: false,
            mapId: '312779142772ae11',
        }
    }

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        map.setZoom(15)
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded && (
        <Wrapper>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={createMapOptions()}
            >
                {data.map(({location, id}) => {
                    return <MarkerComponent
                        key={id} 
                        location={location} 
                        id={id}
                    />
                })}
            </GoogleMap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    @media(max-width: 800px) {
        display: none;
    }
`

export default React.memo(Map)