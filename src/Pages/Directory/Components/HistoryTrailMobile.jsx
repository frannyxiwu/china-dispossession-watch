import styled from 'styled-components'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { KeyboardArrowDown } from '@mui/icons-material';

import ScrollingProfileContainerMobile from './ScrollingProfileContainerMobile';

const HistoryTrailMobile = ({trail, removeFromTrail, isOpen, setOpen, addToTrail}) => {

    return (
            <Wrapper 
                isOpen={isOpen}
            >
                <TitleWrapper 
                    onClick={() => setOpen(!isOpen)}
                >
                    <TrailTitle>MY TRAIL {trail.length > 0 && `(${trail.length} Profiles)`}</TrailTitle>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <OpenButton onClick={() => setOpen(!isOpen)}>
                            {!isOpen ? 
                                <KeyboardArrowUpIcon/> :
                                <KeyboardArrowDown/>
                            }
                        </OpenButton>
                    </div>
                </TitleWrapper>
                {
                    isOpen &&
                    (
                        trail.length === 0 ?
                            <>
                                <HistoryTrailProfileContainer>
                                    <p>Add profiles here to create your own trail.</p>
                                </HistoryTrailProfileContainer> 
                            </> :
                            <ScrollingProfileContainerMobile
                                removeFromTrail={removeFromTrail}
                                isOpen={isOpen}
                                trail={trail}
                            />
                    )                             
                }
            </Wrapper>
    )
}

export default HistoryTrailMobile

const HistoryTrailProfileContainer = styled.div`
    width: 100%;
    height: 80px;
    font-family: 'Quattrocento', serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #423F67;
    border-radius: 12px;    
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23423F67FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
`

const OpenButton = styled.div`
    background: none;
    border: none;
    cursor: pointer;
`

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: ${props => !props.isOpen ? '50px' : 'fit-content'};
    left: 0px;
    bottom: 0px;
    background: #FFD44A;
    padding: ${props => props.isOpen ? "24px" : "12px 30px"};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* transition: all .12s ease-in-out; */
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
    cursor: pointer;
`

const TrailTitle = styled.div`
    font-family: 'Quattrocento', serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;

    color: #423F67;
`