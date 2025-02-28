import styled from 'styled-components';
import ProfileList from './Components/ProfileList';
import HistoryTrail from './Components/HistoryTrail';
import HistoryTrailMobile from './Components/HistoryTrailMobile';
import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Map from '../Map/Map';
import { useRecoilState } from 'recoil';
import { trailValues } from '../../state/state';
import Media from 'react-media';

const Directory = ({data}) => {
    const [trail, setTrail] = useState([]);
    const [isHistoryTrailOpen, setHistoryTrailOpen] = useState(false);
    const [profileHovered, setProfileHovered] = useState(null);
    const [trailState, setTrailState] = useRecoilState(trailValues);

    const dragEnd = (result) => {
        if(!result.destination) return;
        if(!result.destination.droppableId) return;

        if(result.source.droppableId === 'scrollingMenuId') {
            const i = result.destination.index;
            const profiles = [...trail];
            let foundProfile = data.find(profile => profile.id === result.draggableId);

            if (trail.includes(foundProfile)) return;
            profiles.splice(i, 0, foundProfile);
            setTrail(profiles); 

        } else if (result.source.droppableId === 'profileContainerDrop') {
            const startIndex = result.source.index;
            const endIndex = result.destination.index;

            setTrail((trail) => {
                const profiles = [...trail];
                const [removed] = profiles.splice(startIndex, 1);
                profiles.splice(endIndex, 0, removed);
                return profiles;
              });
        }
    }

    const isProfileInTrail = (profile) => {
        return trail.includes(profile)
    }

    const removeFromTrail = (data) => {
        const tempArray = trail.filter(profile => profile !== data)
        setTrail(tempArray);
    }

    const addToTrail = (data, trail) => {
        if(isProfileInTrail(data)) {
            return
        } else {
            setTrail([...trail, data])
        }
    }

    useEffect(() => {
        if(trail.length === 0) return;

        if (!isHistoryTrailOpen) {
            setHistoryTrailOpen(true)
        }
    }, [trail])

    useEffect(() => {
        setTrailState({historyTrail: trail});
    }, [trail])

    useEffect(() => {
        if(
            trailState.historyTrail.length > 0 &&
            trail.length === 0
        ) {
            setTrail(trailState.historyTrail);
        }
    }, [])

    return (
        <Media 
            queries={{
                small: "(max-width: 599px)",
                large: "(min-width: 600px)"
            }}
        >
            {matches => (
                <>
                    <DragDropContext
                        onDragEnd={dragEnd}
                    >
                        <Wrapper>
                            <ProfileList
                                data={data}
                                profileHovered={profileHovered}
                                setProfileHovered={setProfileHovered}
                                isHistoryTrailOpen={isHistoryTrailOpen}
                                setHistoryTrailOpen={setHistoryTrailOpen}
                                trail={trail}
                                setTrail={setTrail}
                                isProfileInTrail={isProfileInTrail}
                                removeFromTrail={removeFromTrail}
                                matches={matches}
                            />
                            <Map 
                                data={data} 
                                profileHovered={profileHovered}
                                setProfileHovered={setProfileHovered}
                                isHistoryTrailOpen={isHistoryTrailOpen}
                            />
                                {matches.small && 
                                    <HistoryTrailMobile
                                        trail={trail}
                                        setTrail={setTrail}
                                        isProfileInTrail={isProfileInTrail}
                                        removeFromTrail={removeFromTrail}
                                        isOpen={isHistoryTrailOpen}
                                        setOpen={setHistoryTrailOpen}
                                        addToTrail={addToTrail}
                                    />
                                }
                                {matches.large && 
                                    <HistoryTrail
                                        trail={trail}
                                        setTrail={setTrail}
                                        isProfileInTrail={isProfileInTrail}
                                        removeFromTrail={removeFromTrail}
                                        isOpen={isHistoryTrailOpen}
                                        setOpen={setHistoryTrailOpen}
                                        addToTrail={addToTrail}
                                    />
                                }
                        </Wrapper>
                    </DragDropContext>
                </>
            )}
        </Media>
    )
}

export default Directory;

const Wrapper = styled.div`
    display: flex;
    transition: all .12s ease-in-out;
`