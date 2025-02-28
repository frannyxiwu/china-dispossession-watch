import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
const MobileChip = ({
    profile,
    removeFromTrail
}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(false);
        removeFromTrail(profile);
    }

    const handleOverlayClick = () => {
        setIsClicked(false);
    }

    return (
        <ProfileContainer onClick={() => setIsClicked(true)}>
            {isClicked && <Overlay onClick={handleOverlayClick}/>}
            {isClicked && <Button onClick={handleButtonClick}><CloseIcon/></Button>}
            <ProfileImage src={profile.images[0]}/>
        </ProfileContainer>
    )
}

export default MobileChip

const Button = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #423F67;
    color: white;
    border-radius: 50%;
    position: absolute;
    border: none;
    left: 20px;
`

const Overlay = styled.div`
    position: absolute;
    height: 64px;
    width: 64px;
    left: 8px;
    opacity: 0.5;
    background: #FBF6E9;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProfileImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 3px;
    object-fit: cover; 
`

const ProfileContainer = styled.button`
    box-sizing: border-box;
    padding: 8px;

    height: 80px;

    background: #FBF6E9;
    border: 1px solid #423F67;
    border-radius: 8px;

    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
`
