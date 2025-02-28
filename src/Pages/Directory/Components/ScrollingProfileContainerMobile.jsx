import styled from 'styled-components'
import GoogleMapsButton from './GoogleMapsButton.jsx'
import MobileChip from './MobileChip.jsx'

const ScrollingProfileContainer = ({isOpen, trail, removeFromTrail}) => {
    return (
        <Wrapper>
            <AlignFlexDiv>
                <HiddenFlexDiv>
                    {isOpen && trail.map((profile, index) => {
                        return (
                            <FlexDiv key={profile.id}>
                                {index !== 0 && <ProfileSpacer/>}
                                <MobileChip 
                                    profile={profile}
                                    removeFromTrail={removeFromTrail}
                                />
                            </FlexDiv>
                        )
                    })}
                </HiddenFlexDiv>
                <GoogleMapsButton data={trail}/>
            </AlignFlexDiv>
        </Wrapper>
    )
}

export default ScrollingProfileContainer;

const AlignFlexDiv = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    gap: 16px;
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const ProfileSpacer = styled.div`
    width: 16px;
    border-bottom: 1px solid #423F67;
`

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
`

const HiddenFlexDiv = styled(FlexDiv)`
    width: 100%;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`