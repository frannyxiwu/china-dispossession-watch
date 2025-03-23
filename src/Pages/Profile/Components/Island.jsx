import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import PdfModal from './pdfModal'; // for pdf display
import AudioPlayer from './AudioPlayer';
import MapViewComponent from './MapViewComponent';


const Island = ({ data, currentLang }) => {
 const [isTooltipShowing, setIsTooltipShowing] = useState(false);
 const [tooltipTimeout, setTooltipTimeout] = useState(null);
 const [imageId, setImageId] = useState(0);
 const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
 const [currentPdfUrl, setCurrentPdfUrl] = useState('');


 const handleNegativeClick = () => {
   if (imageId - 1 < 0) return;
   setImageId(imageId - 1);
 };


 const handlePositiveClick = () => {
   if (imageId + 1 === data.images.length) return;
   setImageId(imageId + 1);
 };

 const destroyTooltip = useMemo(() => () => {
   setIsTooltipShowing(false);
   clearTimeout(tooltipTimeout);
 }, [tooltipTimeout]);


 const openPdfModal = (url) => {
   setCurrentPdfUrl(url);
   setIsPdfModalOpen(true);
 };
  const closePdfModal = () => {
   setIsPdfModalOpen(false);
   setCurrentPdfUrl('');
 };


 useEffect(() => {
   window.addEventListener('scroll', destroyTooltip);
   return () => {
     window.removeEventListener('scroll', destroyTooltip);
     clearTimeout(tooltipTimeout);
   };
 }, [destroyTooltip, tooltipTimeout]);


 useEffect(() => {
   if (isTooltipShowing) {
     const timeoutId = setTimeout(() => {
       setIsTooltipShowing(false);
     }, 1500);
     setTooltipTimeout(timeoutId);
   }
 }, [isTooltipShowing]);


 return (
   <Wrapper>
     {/* Title, SubTitle, Address, etc. can be re-enabled if you need them.
     <Title>{data.name}</Title>
     <SubTitle>“{data.hint}”</SubTitle>
     <Address>{data.address} {data.chineseAddress}</Address>
     */}


     {/* Always render the Map (removing StreetView entirely) */}
     <MapViewComponent
       location={data.location} // location should have { lat, lng }
       zoom={13}
     />


     <Border />


     {/* Audio Players if any exist */}
     {data.audio && data.audio.map((file) => (
       <AudioPlayer key={file.name} file={file} />
     ))}


     {/* Carousel */}
     {data.images && data.images.length > 0 && (
       <>
         <Carousel>
           <CarouselButton
             limit={imageId === data.images.length - 1}
             pos="right"
             onClick={handlePositiveClick}
           >
             <ArrowForward />
           </CarouselButton>
           <CarouselButton
             limit={imageId === 0}
             pos="left"
             onClick={handleNegativeClick}
           >
             <ArrowBack />
           </CarouselButton>
           {data.images[imageId].mediaType === 'image' && (
             <a href={data.images[imageId].link}>
               <img
                 src={data.images[imageId].link}
                 style={{ height: '300px', margin: 'auto' }}
                 alt=""
               />
             </a>
           )}
           {data.images[imageId].mediaType === 'pdf' && (
             <div onClick={() => openPdfModal(data.images[imageId].link)}>
               <p>Click to View PDF in Fullscreen</p>
             </div>
           )}


         </Carousel>
         <ImageCaption>
           {currentLang === 'en'
             ? data.images[imageId].caption
             : data.images[imageId].chCaption}
         </ImageCaption>
         <Counter>
           {imageId + 1}/{data.images.length}
         </Counter>
       </>
     )}
   <PdfModal
     isOpen={isPdfModalOpen}
     onClose={closePdfModal}
     pdfUrl={currentPdfUrl}
   />
   </Wrapper>
 );
};


export default Island;


/*────────────────────────────────────────────────────────────────────
 STYLED COMPONENTS
────────────────────────────────────────────────────────────────────*/


const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 16px;
 padding: 16px 24px;
 max-width: 539px;
 box-sizing: border-box;
`;


const Border = styled.div`
 width: 100%;
 border-bottom: 1px solid rgba(66, 63, 103, 0.25);
 margin: 8px 0px;
`;


const Carousel = styled.div`
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
`;


const CarouselButton = styled.button`
 position: absolute;
 top: calc(50% - 8px);
 left: ${(props) => props.pos === 'left' && '8px'};
 right: ${(props) => props.pos === 'right' && '8px'};
 opacity: ${(props) => (props.limit ? 0.5 : 1)};
 display: flex;
 align-items: center;
 justify-content: center;
 background: #423f67;
 color: white;
 border-radius: 50%;
 width: 40px;
 height: 40px;
 border: none;
 cursor: ${(props) => (!props.limit ? 'pointer' : 'default')};
`;


const ImageCaption = styled.div`
 font-family: 'Lora', serif;
 font-size: 14px;
 line-height: 18px;
 color: #000000;
`;


const Counter = styled.div`
 font-family: 'Lora', serif;
 font-size: 14px;
 line-height: 0px;
 margin-top: 0px;
 color: #000000;
`;


/** NEWLY ADDED STYLED COMPONENT
const ThumbnailWrapper = styled.div`
 margin-top: 10px;
 padding: 8px;
 background-color: #efefef;
 border: 1px solid #ccc;
 cursor: pointer;
 text-align: center;
 border-radius: 4px;
`;*/
