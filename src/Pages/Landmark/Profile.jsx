import { ArrowForward, ArrowBack } from '@mui/icons-material';
import styled from 'styled-components';
import Island from './Components/Island';
import data from '../../yu-xiulan'
//import data from './bao-hailan';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LearnMore from './Components/LearnMore';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const {id} = useParams()
    const [profile, setProfile] = useState('')
    const [imageId, setImageId] = useState(0)
    const [showArrow, setShowArrow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let foundProfile = data.find(item => item.id === id);

        if(foundProfile) {
            setProfile(foundProfile)
        } else {
            navigate(`/404`)
        }
    }, [])

    const descriptionParser = (item, id) => {

        if (item.type === 'en') {
            return <EnglishText key={id}>{item.default}</EnglishText>
        } else if (item.type === 'ch') {
            return <ChineseText key={id}>{item.default}</ChineseText>
        }
    }

    const quoteParser = (quote) => {
        if (!quote || quote.length === 0) return null;
        const englishQuotes = quote.filter(quote => quote.type === 'en' && quote.type !== 'attribution');
        const chineseQuotes = quote.filter(quote => quote.type === 'ch' && quote.type !== 'attribution');

        if (quote[0].type === 'en') {
            return (
                <>
                    <EnglishQuote>
                        <QuoteMarks>“</QuoteMarks>
                        {englishQuotes.map((item, index) => {
                            if(item.type === 'attribution') return;
                            return (
                                <div key={index} >
                                    {item.default} 
                                    <br/>
                                    <br/>
                                </div>
                            )
                        })}
                        <QuoteMarks>”</QuoteMarks>
                    </EnglishQuote>
                    <ChineseQuote>
                        <QuoteMarks>“</QuoteMarks>
                        {chineseQuotes.map(item => {
                            if(item.type === 'attribution') return;
                            return (
                                <div>
                                    {item.default}
                                    <br/>
                                    <br/>
                                </div>
                            )
                        })}
                        <QuoteMarks>”</QuoteMarks>
                        <Attributions><b>Source: </b>{profile.quote.find(item => item.type === 'attribution').default}</Attributions>
                    </ChineseQuote>
                </>
            )
        } else {
            return (
                <>
                    <ChineseQuote>
                        <QuoteMarks>“</QuoteMarks>
                        {chineseQuotes.map(item => {
                            if(item.type === 'attribution') return;
                            return (
                                <div>
                                    {item.default}
                                    <br/>
                                    <br/>
                                </div>
                            )
                        })}
                        <QuoteMarks>”</QuoteMarks>
                    </ChineseQuote>
                    <EnglishQuote>
                        <QuoteMarks>“</QuoteMarks>
                        {englishQuotes.map((item, index) => {
                            if(item.type === 'attribution') return;
                            return (
                                <div key={index} >
                                    {item.default} 
                                    <br/>
                                    <br/>
                                </div>
                            )
                        })}
                        <QuoteMarks>”</QuoteMarks>
                        <Attributions><b>Source: </b>{quote.find(item => item.type === 'attribution').default}</Attributions>
                    </EnglishQuote>
                </>
            )
        }
    }

    const handleNegativeClick = () => {
        if(imageId - 1 < 0) return;

        setImageId(imageId - 1);
    }

    const handlePositiveClick = () => {
        const limit = profile.images.length;

        if(imageId + 1 === limit) return;

        setImageId(imageId + 1);
    }

    if (profile) return (
        <Wrapper>
            <BodyWrapper>
                <Island data={profile}/>
                <Body>
                    {profile.description.map((item, index) => {
                        return descriptionParser(item, index +1);
                    })}
                    {profile.quote && quoteParser(profile.quote)}
                    <Carousel
                        onMouseEnter={() => setShowArrow(true)}
                        onMouseLeave={() => setShowArrow(false)}
                    >
                        <CarouselButton limit={profile.images.length - 1 === imageId} pos={'right'} onClick={handlePositiveClick}><ArrowForward/></CarouselButton>
                        <CarouselButton limit={imageId === 0} pos={'left'} onClick={handleNegativeClick}><ArrowBack/></CarouselButton>
                        { profile.images && <a href={profile.images[imageId].link}><img src={profile.images[imageId].link} style={{height: '500px', margin: 'auto'}} alt=''/></a>}
                    </Carousel>
                    <ImageCaption>{profile.images[imageId].caption}</ImageCaption>
                    <ImageCaptionChinese>{profile.images[imageId].chCaption}</ImageCaptionChinese>
                    <Counter>{imageId + 1}/{profile.images.length}</Counter>
                    {profile?.secondaryQuote && quoteParser(profile.secondaryQuote)}
                    <Border/>
                    {
                        profile?.resources &&
                        <div>
                            <LearnMoreTitle>Learn More</LearnMoreTitle>
                            <LearnMoreSubtitle >Check out more resources submitted by our community.</LearnMoreSubtitle>
                            {profile.resources?.map(resource => {
                                return <LearnMore resource={resource}/>
                            })}
                        </div>
                    }
                </Body>
            </BodyWrapper>
        </Wrapper>  
    )
}

export default Profile

const LearnMoreSubtitle = styled.div`
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px;
`

const LearnMoreTitle = styled.div`
    margin-bottom: 16px;
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;

    color: #423F67;
    text-transform: uppercase;
`

const Border = styled.div`
    border-top: 1px solid rgba(66, 63, 103, 0.25);
    margin: 32px 0px;
    width: 100%;
`

const ImageCaption = styled.div`
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    color: #1E1E1E;
`

const ImageCaptionChinese = styled(ImageCaption)`
    font-family: 'Noto Serif TC';
`

const Counter = styled.div`
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;

    color: #1E1E1E;
`

const CarouselButton = styled.button`
    position: absolute;
    top: calc(50% - 8px);
    left: ${props => props.pos === 'left' && '8px'};
    right: ${props => props.pos === 'right' && '8px'};
    opacity: ${props => props.limit && 0.5};
    display: flex;
    align-items: center;
    justify-content: center;
    background: #423F67;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: none;
    cursor: ${props => !props.limit && 'pointer'};
`

const Carousel = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 800px) {
        height: auto;
    }
`

const Attributions = styled.div`
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */


    color: #1E1E1E;
`

const QuoteMarks = styled.div`
    font-family: 'Rowdies';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    /* or 119% */

    text-transform: uppercase;

    color: #423F67;
`

const EnglishText = styled.div`
    font-family: 'Quattrocento';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 32px;

    color: #1E1E1E;    
`

const ChineseText = styled.div`
    font-family: 'Noto Serif TC';
    margin-bottom: 32px;
`

const ChineseQuote = styled.div`
    padding: 16px 32px;
    color: #423F67;
    font-weight: 500;
    font-family: 'Noto Serif TC';
`

const EnglishQuote = styled.div`
    padding: 16px 32px;
    color: #423F67;
    font-weight: 300;
    font-family: 'Rowdies';
`

const Body = styled.div`
    padding: 32px 48px;
    box-sizing: border-box;
    overflow-y: scroll;
    height: 100%;
    max-width: 900px;

    display: flex;
    flex-direction: column;
    border-left: 1px solid rgba(66, 63, 103, 0.25);
    ::-webkit-scrollbar{
        display: none;
    }
    @media(max-width: 800px) {
        height: 100%;
        border-left: none;
    }
`

const BodyWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    @media(max-width: 800px) {
        flex-direction: column;
    }
`

const Wrapper = styled.div`
    display: flex;
    background-color: #FBF6E9;
    justify-content: center;
`