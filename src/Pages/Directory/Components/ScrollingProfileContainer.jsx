import { useState, useEffect, useRef } from 'react';
import { useContainerDimensions } from '../../../components/Hooks';
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd';
import GoogleMapsButton from './GoogleMapsButton.jsx'

// icons
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ScrollingProfileContainer = ({removeFromTrail, isOpen, trail, provided, snapshot}) => {
    const [shouldArrowsRender, setArrowsRender] = useState(false)
    const scrollContainerRef = useRef()
    const { width, height } = useContainerDimensions(scrollContainerRef);
    const scrollRef = useRef();
    const [isScrolledFully, setIsScrolledFully] = useState(false);
    const [isNotScrolled, setIsNotScrolled] = useState(false);

    const checkScroll = () => {
        const el = scrollRef.current;
        const {scrollLeft, scrollWidth, clientWidth} = el;
        if(scrollWidth - clientWidth === scrollLeft) {
            // fully scrolled
            setIsScrolledFully(true);
            setIsNotScrolled(false);
        } else if (scrollLeft === 0) {
            // fully unscrolled
            setIsNotScrolled(true);
            setIsScrolledFully(false);
        } else {
            setIsNotScrolled(false);
            setIsScrolledFully(false);
        }
    }

    const onScroll = (e) => {
        const el = scrollRef.current;

        if(el) {
            if(e.deltaY == 0) return;
            el.scrollBy(e.deltaY, 0);
        }

        checkScroll();
    }

    const clickArrow = (position) => {
        const el = scrollRef.current;

        if(position === 'right') {
            el.scrollBy({left: -100, top: 0, behavior: 'smooth'})
        } else {
            el.scrollBy({left: 100, top: 0, behavior: 'smooth'})
        }
        checkScroll();
    }

    useEffect(() => {
        if((width - (trail.length * 280)) < 0) {
            setArrowsRender(true);
        } else {
            setArrowsRender(false);
        }
    }, [trail, width])

    useEffect(() => {
        const el = scrollRef.current;

        if(el) {
            el.scrollBy(10000, 0)
        }

        checkScroll();
    }, [trail])

    return (

                <Wrapper>
                    <AlignFlexDiv>
                        {shouldArrowsRender && isOpen &&
                            <IconWrapper 
                                isScrolledFully={isScrolledFully} 
                                isNotScrolled={isNotScrolled} 
                                pos={'left'}
                                style={{marginRight: '16px'}}
                                onClick={() => clickArrow('right')}
                            >
                                <ArrowBackIosIcon/>
                            </IconWrapper>
                        }
                        <ScrollContainer 
                            ref={scrollRef} 
                            onWheel={e => onScroll(e)} 
                        >
                            <MeasurementDiv
                                ref={scrollContainerRef}
                            >
                                <span style={{display: 'none'}}>{provided.placeholder}</span>
                                {isOpen && trail.map((profile, index) => {
                                    return (
                                        <FlexDiv key={profile.id}>
                                            {index !== 0 &&<ProfileSpacer isDragging={!snapshot.isDraggingOver}/>}
                                            <Draggable draggableId={profile.profileId} index={index} key={profile.id}>
                                                {(dropProvided, dropSnapshot) => (
                                                    <div
                                                        ref={dropProvided.innerRef}
                                                        {...dropProvided.draggableProps}
                                                        {...dropProvided.dragHandleProps}
                                                    >
                                                        <ProfileContainer isDragging={dropSnapshot.isDragging}>
                                                            <ProfileImage src={profile.images[0].link}/>
                                                            <ProfileTitle>{profile.name}</ProfileTitle>
                                                            <DeleteProfileButton onClick={() => removeFromTrail(profile)}>
                                                                <RemoveIcon/>
                                                            </DeleteProfileButton>
                                                        </ProfileContainer>
                                                        {dropProvided.placeholder}
                                                    </div>
                                                )}
                                            </Draggable>
                                        </FlexDiv>
                                    )
                                })}
                            </MeasurementDiv>
                        </ScrollContainer>
                        {shouldArrowsRender && isOpen &&
                            <IconWrapper 
                                isScrolledFully={isScrolledFully} 
                                isNotScrolled={isNotScrolled} 
                                pos={'right'}
                                style={{marginLeft: '16px'}}
                                onClick={() => clickArrow('left')}
                            >
                                <ArrowForwardIosIcon />
                            </IconWrapper>
                        }
                    </AlignFlexDiv>
                    {isOpen && <GoogleMapsButton data={trail}/>}
                </Wrapper>
    )
}

export default ScrollingProfileContainer;

const AlignFlexDiv = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
`


const IconWrapper = styled.button`
    border: none;
    background-color: transparent;
    color: #423F67;
    opacity: ${
        props => 
            props.pos === 'right' ?
                props.isScrolledFully && '25%' :
                props.isNotScrolled && '25%'
    };
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const MeasurementDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
`

const ScrollContainer = styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`

const DeleteProfileButton = styled.button`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 8px;
    top: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    background: #423F67;

    cursor: pointer;
    border-radius: 50%;
    border: none;
`

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

const ProfileSpacer = styled.div`
    width: 16px;
    border-bottom: 1px solid #423F67;
    visibility: ${props => !props.isDragging && 'hidden'};
`

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
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
