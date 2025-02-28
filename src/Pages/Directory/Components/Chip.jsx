import styled from 'styled-components'

const Chip = ({profile}) => {
    return (
        <ProfileContainer>
            <ProfileImage src={profile.images[0]}/>
            <ProfileTitle>{profile.name}</ProfileTitle>
        </ProfileContainer>
    )
}

export default Chip

const ProfileTitle = styled.div`
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    color: #423F67;
`

const ProfileImage = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 3px;
    object-fit: cover;
    margin-right: 12px;
`

const ProfileContainer = styled.div`
    box-sizing: border-box;
    padding: 8px;

    width: 264px;
    height: 80px;

    background: #FBF6E9;
    border: 1px solid #423F67;
    border-radius: 8px;

    display: flex;
    align-items: center;
    position: relative;
`
