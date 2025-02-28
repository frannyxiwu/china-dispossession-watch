import styled from 'styled-components';
import EastIcon from '@mui/icons-material/East';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { mapValues } from '../../../state/state.jsx';
import { useLongPress } from '../../../components/Hooks.jsx';
import AddIcon from '@mui/icons-material/Add';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { Link } from 'react-router-dom';

const ProfileMenuItemMobile = ({
    data, 
    trail, 
    setTrail, 
    isProfileInTrail, 
    removeFromTrail, 
}) => {
    const [values, setValues] = useRecoilState(mapValues)
    const [lineOne, setLineOne] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    
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

        setLineOne(splitAddressArray[0])
    }, [])


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

    const handleGoogleMapsClick = (address) => {
        const encodedAddress = encodeURIComponent(address)
        const googleMapsUrl = `https://www.google.com/maps?q=${encodedAddress}`;
        window.open(googleMapsUrl, '_blank').focus();
    }

    const onClick = () => {
        return
    }

    const onLongPress = () => {
        setIsOpen(true);
    }

    const defaultOptions = {
        shouldPreventDefault: false,
        delay: 500,
      };

    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

    return (
        <div style={{display:'flex'}}>
            <Slider 
                isOpen={isOpen}
            >
                <SliderButton
                    onClick={e => handleAddRemoveTrail(e)}
                    onFocus={() => setIsOpen(true)}
                >
                    {
                        isProfileInTrail(data) ? 
                            <RemoveOutlinedIcon 
                                fontSize='large'
                            /> :
                            <AddIcon 
                                fontSize='large'
                            /> 
                    }
                </SliderButton>
                <SliderButton
                    onFocus={() => setIsOpen(true)}
                    onClick={() => handleGoogleMapsClick(data.address)}
                >
                    <LocationOnOutlinedIcon 
                        fontSize='large'
                    />
                </SliderButton>
            </Slider>
            <Wrapper
                profileHovered={values.locationHovered}
                profileId={data.id}
                isOpen={isOpen}
                {...longPressEvent}
            >
                <ProfileTitle
                    profileHovered={values.locationHovered}
                    profileId={data.id}
                >
                    <Link to={`/directory/${data.id}`}>{data.name}</Link>
                    <div style={{marginLeft: '16px'}}><EastIcon/></div>
                </ProfileTitle>
                <Address>
                    <div>{lineOne}</div>
                </Address>
            </Wrapper> 
        </div>
    )
}

export default ProfileMenuItemMobile

const SliderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFD44A;
    height: 50%;
    color: #423F67;
    border: none;
    
    :active {
        background-color: #423F67;
        color: white;
    }
`

const Slider = styled.div`
    width: ${props => props.isOpen ? '75px' : '0px'};
    transition: 0.2s ease;

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(66, 63, 103, 0.25);
`

const Wrapper = styled.div`
    position: relative;
    width: ${props => props.isOpen ? '352px' : '427px'};
    transition: 0.2s ease;
    padding: 24px 40px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: none;
    background-color: ${props => props.locationHovered === props.profileId ? '#FFD44A' : '#FBF6E9'};
    border-radius: ${props => props.isDragging && '25px'};
    border-bottom: 1px solid rgba(66, 63, 103, 0.25);
    cursor: pointer;
    :hover {
        background-color: #FFD44A;
    }
`

const Address = styled.div`
    font-family: 'Quattrocento', serif;
    font-size: 18px;
    margin-top: 8px;
    line-height: 26px;
`

const ProfileTitle = styled.a`
    display: flex;
    font-size: 32px;
    color: #423F67;
    font-family: "Rowdies", serif;
    text-decoration: none;
    text-decoration-thickness: 2px;

    :hover {
        text-decoration: underline;
    }
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