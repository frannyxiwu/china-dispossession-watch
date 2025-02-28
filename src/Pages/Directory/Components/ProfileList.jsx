import React from 'react';
import styled from 'styled-components';
import ProfileMenuItem from './ProfileMenuItem.jsx';
import ProfileMenuItemMobile from './ProfileMenuItemMobile.jsx';
import { Droppable } from 'react-beautiful-dnd';
import { Element } from 'react-scroll';

const ProfileList = ({
    isHistoryTrailOpen, 
    data, 
    setProfileHovered, 
    profileHovered, 
    setHistoryTrailOpen,
    trail,
    setTrail,
    isProfileInTrail,
    removeFromTrail,
    matches
}) => {
    return (
        <Droppable 
            droppableId="scrollingMenuId"
            isDropDisabled={true}
        >
            {(provided, snapshot) => (
                <ScrollingMenu
                    containerId='scrollingMenu'
                    id='scrollingMenu'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isHistoryTrailOpen={isHistoryTrailOpen}
                >
                    {matches.small && 
                            <InstructionHeader >
                                <div>Press and hold a site to add it to your trail or open in Google Maps</div>
                            </InstructionHeader>
                    }
                    {data.map((profile, index) => {
                        return (
                            <Element 
                                name={profile.id}
                                key={profile.index}
                            >
                                {matches.small ? (
                                    <ProfileMenuItemMobile 
                                        index={index}
                                        data={profile} 
                                        trail={trail}
                                        setTrail={setTrail}
                                        isProfileInTrail={isProfileInTrail}
                                        removeFromTrail={removeFromTrail}
                                        setHistoryTrailOpen={setHistoryTrailOpen}
                                        setProfileHovered={setProfileHovered}
                                        profileHovered={profileHovered}
                                    />
                                ) : (
                                    <ProfileMenuItem 
                                        index={index}
                                        data={profile} 
                                        trail={trail}
                                        setTrail={setTrail}
                                        isProfileInTrail={isProfileInTrail}
                                        removeFromTrail={removeFromTrail}
                                        setHistoryTrailOpen={setHistoryTrailOpen}
                                        setProfileHovered={setProfileHovered}
                                        profileHovered={profileHovered}
                                    />
                                )}
                            </Element>
                        )}
                    )}
                    {provided.placeholder}
                </ScrollingMenu>
            )}
        </Droppable>
    )
}

export default ProfileList

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

const ScrollingMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FBF6E9;
    overflow-y: scroll;
    min-width: 438px;
    height: ${props => 
        props.isHistoryTrailOpen ?
            'calc(100vh - 234px)' :
            'calc(100vh - 138px)'
        };


    @media(max-width: 800px) {
        width: 100%;
        min-width: 100%;
        height: ${props => 
        props.isHistoryTrailOpen ?
            'calc(100vh - 234px)' :
            'calc(100vh - 138px)'
        };
    }
`