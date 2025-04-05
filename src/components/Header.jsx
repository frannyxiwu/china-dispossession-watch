import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
    const [isHamburgerOpen, setHamburgerOpen] = useState(false);
    const [isHandbookDropdownOpen, setHandbookDropdownOpen] = useState(false);
    const handbookDropdownRef = useRef(null);
    const activeStyle = {
        fontWeight: '700'    
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (handbookDropdownRef.current && !handbookDropdownRef.current.contains(event.target)) {
                setHandbookDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    return (
        <Wrapper>
            <NavLink to={'/directory'}>
                <EngTitle>China Dispossession Watch <b>中国征地拆迁观察</b></EngTitle>
            </NavLink>
            <NavigationLinkContainer>
                <NavLink 
                    to={'/'}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    {/* <FlexDiv>
                        <EngTitle>Home</EngTitle> 
                        <ChTitle>主页</ChTitle>
                    </FlexDiv> */}
                </NavLink>
                <DropdownContainer ref={handbookDropdownRef}>
                    <DropdownButton 
                        onClick={() => setHandbookDropdownOpen(!isHandbookDropdownOpen)}
                    >
                        <FlexDiv>
                            <EngTitle>Handbook</EngTitle>
                            <ChTitle>手册</ChTitle>
                            {isHandbookDropdownOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                        </FlexDiv>
                    </DropdownButton>
                    {isHandbookDropdownOpen && (
                        <SubMenu>
                            <NavLink 
                                to={'/handbook'}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                onClick={() => setHandbookDropdownOpen(false)}
                                end
                            >
                                <SubMenuText>Process</SubMenuText>
                            </NavLink>
                            <NavLink 
                                to={'/handbook/tactical-manual'}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                onClick={() => setHandbookDropdownOpen(false)}
                            >
                                <SubMenuText>Tactical Manual</SubMenuText>
                            </NavLink>
                            <NavLink 
                                to={'/handbook/thematic-guide'}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                onClick={() => setHandbookDropdownOpen(false)}
                            >
                                <SubMenuText>Thematic Guide</SubMenuText>
                            </NavLink>
                        </SubMenu>
                    )}
                </DropdownContainer>
                <NavLink 
                    to={'/directory'}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <FlexDiv>
                        <EngTitle>Directory</EngTitle>
                        <ChTitle>目录</ChTitle>
                    </FlexDiv>
                </NavLink>
                <NavLink 
                    to={'/about'}
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                >
                    <FlexDiv>
                        <EngTitle>About</EngTitle>
                        <ChTitle>关于</ChTitle>
                    </FlexDiv>
                </NavLink>
                <a 
                    href={'www.google.com'}//link for participation
                >
                    <FlexDiv>
                        <EngTitle>Contact</EngTitle>
                        <ChTitle>联系</ChTitle>
                    </FlexDiv>
                </a>
            </NavigationLinkContainer>
            <HamburgerMenu onClick={() => setHamburgerOpen(!isHamburgerOpen)}>
                {isHamburgerOpen ? <CloseIcon/> : <MenuIcon/>}
            </HamburgerMenu>
            {isHamburgerOpen && 
                <DropdownMenu>
                    <NavLink 
                        onClick={() => setHamburgerOpen(false)}
                        to={'/'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        <EngTitle>Home</EngTitle>
                    </NavLink>
                    <NavLink 
                        onClick={() => setHamburgerOpen(false)}
                        to={'/handbook'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        <EngTitle>Handbook - Process</EngTitle>
                    </NavLink>
                    <NavLink 
                        onClick={() => setHamburgerOpen(false)}
                        to={'/handbook/tactical-manual'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        <EngTitle>Handbook - Tactical Manual</EngTitle>
                    </NavLink>
                    <NavLink 
                        onClick={() => setHamburgerOpen(false)}
                        to={'/handbook/thematic-guide'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        <EngTitle>Handbook - Thematic Guide</EngTitle>
                    </NavLink>
                    <NavLink 
                        onClick={() => setHamburgerOpen(false)}
                        to={'/directory'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        <EngTitle>Directory</EngTitle>
                    </NavLink>
                    <NavLink 
                        onClick={() => setHamburgerOpen(false)}
                        to={'/about'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        <EngTitle>About</EngTitle>
                    </NavLink>
                    <NavLink 
                        onClick={() => setHamburgerOpen(false)}
                        to={'https://forms.gle/9NPYBbUc8ErcP7tn6'}
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        <EngTitle>Contact</EngTitle>
                    </NavLink>
                </DropdownMenu>
            }
        </Wrapper>
    )
}

export default Header

const DropdownMenu = styled.div`
    position: absolute;
    bottom: -258px;
    left: 0px;
    height: 258px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    background: inherit;
    z-index: 100;
    font-family: 'Rowdies';
    font-weight: 300;
    font-size: 22px;
    line-height: 120%;
    text-transform: uppercase;
    color: #423F67;

    box-shadow: 0px 17px 20px 0px rgba(66, 63, 103, 0.25);

    @media(min-width: 800px) {
        display: none;
    }
` 

const HamburgerMenu = styled.button`
    color: #423F67;
    background: none;
    border: none;
    cursor: pointer;
    @media (min-width: 800px) {
        display: none;
    }
`

const EngTitle = styled.div`
    font-family: "Rowdies", cursive;
    margin-right: 8px;
`

const ChTitle = styled.div`
    font-family: "Noto Sans SC";
    font-weight: 700;
    
    position: relative;
    top: -1px;
`

const FlexDiv = styled.div`
    display: flex;
    min-width: 150px;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    position: sticky;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px;
    box-sizing: border-box;
    background-color: #ffffff;
    position: relative;
    z-index: 101;

    border-bottom: 1px solid #d4d4d4;
    a {
        color: #423F67;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 16px;
        line-height: 120%;
    }
    h1 {
        font-size: 10px;
    }
    @media(max-width: 800px) {
        padding: 12px 12px 12px 4px;
    }
`

const NavigationLinkContainer = styled.div`
    display: flex;
    a {
        margin-left: 12px;
    }
    @media (max-width: 800px) {
        display: none;
    }
`

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    margin-left: 12px;
`

const DropdownButton = styled.div`
    background: none;
    border: none;
    cursor: pointer;
    color: #423F67;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 16px;
    line-height: 120%;
    display: flex;
    align-items: center;
`

const SubMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1000;
    border-radius: 4px;
    padding: 8px 0;
    margin-top: 8px;
    
    a {
        color: #423F67;
        text-decoration: none;
        display: block;
        padding: 8px 16px;
        margin: 0;
        
        &:hover {
            background-color: #f9f9f9;
        }
    }
`

const SubMenuText = styled.div`
    font-family: "Rowdies", cursive;
    font-size: 14px;
`