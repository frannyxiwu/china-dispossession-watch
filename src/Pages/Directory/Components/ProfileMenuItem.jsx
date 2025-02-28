import styled from 'styled-components';
import EastIcon from '@mui/icons-material/East';
import { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Chip from './Chip.jsx';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { mapValues } from '../../../state/state.jsx';

const ProfileMenuItem = ({
    data, 
    trail, 
    setTrail, 
    isProfileInTrail, 
    removeFromTrail, 
    index, 
}) => {
    const [values, setValues] = useRecoilState(mapValues)
    const [isOpen, setOpen] = useState(false);
    const [lineOne, setLineOne] = useState('');

    const navigate = useNavigate();

    const handleAddRemoveTrail = (event) => {
        event.stopPropagation();
        if(!isProfileInTrail(data)) {
            setTrail([...trail, data])
        } else {
            removeFromTrail(data);
        }
    }

    useEffect(() => {
        const {address} = data;

        const splitAddressArray = address.split(',');

        setLineOne(splitAddressArray[0] + '.')
    }, [])

    const handleMouseEnter = (id) => {
        setOpen(true);
        setValues({...mapValues, locationHovered: id})
    }

    const handleMouseExit = () => {
        setOpen(false)
        setValues({...mapValues, locationHovered: ''})
    }

    const handleGoogleMapsClick = (data) => {
        const encodedAddress = encodeURIComponent( data.address + 'boston')
        const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
        window.open(googleMapsUrl, '_blank').focus();
    }

    const handleProfileNavigate = (e) => {
        e.preventDefault()
        navigate(`/directory/${data.id}`)
    }

    return (
        <Draggable
            index={index}
            draggableId={data.id}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {!snapshot.isDragging ? 
                        <Element name={data.id}>
                            <Wrapper
                                profileHovered={values.locationHovered}
                                profileId={data.id}
                                onMouseEnter={() => handleMouseEnter(data.id)} 
                                onMouseLeave={() => handleMouseExit()} 

                                isDragging={snapshot.isDragging}
                            >
                                    <ProfileTitle
                                        profileHovered={values.locationHovered}
                                        profileId={data.id}
                                        onClick={(e) => handleProfileNavigate(e)}
                                    >
                                            <div>{data.name}</div>
                                            <div style={{marginLeft: '16px'}}><EastIcon/></div>
                                    </ProfileTitle>
                                <Address>
                                    <div>{lineOne} {data.chineseAddress}</div>
                                </Address>
                                {isOpen && 
                                    <ButtonDiv>
                                        <AddToTrail onClick={(e) => handleAddRemoveTrail(e)}>
                                            {isProfileInTrail(data) ? '- Remove from my trail' :  '+ Add to my trail'}
                                        </AddToTrail>
                                        <GoogleMapsButton onClick={() => handleGoogleMapsClick(data)}>
                                            View In Google Maps
                                        </GoogleMapsButton>
                                    </ButtonDiv>
                                }
                            </Wrapper> 
                        </Element>
                        : 
                        <>
                            <Chip profile={data}/>
                            {provided.placeholder}
                        </>
                    } 
                </div>
            )}
        </Draggable>
    )
}

export default ProfileMenuItem

const GoogleMapsButton = styled.button`
    border: none;
    cursor: pointer;
    color: inherit;
    background: none;    
    font-size: 16px;
    font-weight: 700;
    font-family: inherit;
    padding: 7px 16px;
`

const AddToTrail = styled.button`
    border: 1px solid #423F67;
    border-radius: 3px;
    background: none;
    color: #423F67;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    padding: 7px 16px;
    cursor: pointer;    
`

const ButtonDiv = styled.div`
    display: flex;
    margin-top: 16px;
    color: #423F67;
    font-family: 'Quattrocento', serif;

`

const Wrapper = styled.div`
    position: relative;
    width: 427px;
    padding: 24px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: ${props => props.isDragging && '25px'};
    border-bottom: 1px solid rgba(66, 63, 103, 0.25);
    background-color: ${props => props.profileHovered === props.profileId ? '#FFD44A' : '#FBF6E9'};

    cursor: pointer;
    :hover {
        background-color: #FFD44A;
    }
    @media(max-width: 600px) {
        width: 100%;
    }
`

const Address = styled.div`
    font-family: 'Quattrocento', serif;
    font-size: 18px;
    margin-top: 8px;
    line-height: 26px;
`

const ProfileTitle = styled.div`
    display: flex;
    font-size: 32px;
    color: #423F67;
    font-family: "Rowdies", serif;
    text-decoration: ${props => props.profileHovered === props.profileId && 'underline' };
    text-decoration-thickness: 2px;

    a {
        text-decoration: none;
        text-decoration-thickness: 2px;
        color: #423F67;

        :hover {
            text-decoration: underline;
        }
        :visited {
            color: #423F67;
        }
    }
`