import React from 'react';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayer = ({file}) => {
    // const [trackProgress, setTrackProgress] = useState(0);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [printedDuration, setPrintedDuration] = useState('')

    // const findTrack = () => {
    //     if(filename === undefined) return;
    //     const track = tracks.find(item => item.filename === filename);
    //     return track.audioSrc;
    // }
    
    // useEffect(() => {
    //     const track = tracks.find(item => item.filename === filename);
    //     setPrintedDuration(track.duration);
    // }, [])

    // const audioRef = useRef();
    // const intervalRef = useRef();
    // const isReady = useRef(false);
    
    // const handleAudio = () => {
    //     if(!isPlaying) {
    //         setIsPlaying(true);
    //     } else {
    //         setIsPlaying(false);
    //     }
    // }

	// const startTimer = () => {
    //     // Clear any timers already running
    //     clearInterval(intervalRef.current);
  
    //     intervalRef.current = setInterval(() => {
    //         if(audioRef.current.ended) {
    //             setIsPlaying(false);
    //         } else {
    //             setTrackProgress(audioRef.current.currentTime);
    //         }
    //     }, [1000]);
    //   }

    // function secondsToHms(d) {
    //     d = Number(d);
    //     var m = Math.floor(d % 3600 / 60);
    //     var s = Math.floor(d % 3600 % 60);
    
    //     var mDisplay = m + ":";
    //     var sDisplay = s < 10 ? '0' + s : s;
    //     return mDisplay + sDisplay; 
    // }

    // useEffect(() => {
    //     if (isPlaying) {
    //         audioRef.current.play();
    //         startTimer();
    //     } else {
    //         clearInterval(intervalRef.current);
    //         audioRef.current.pause();
    //     }
    // }, [isPlaying]);


    return (
        <div> 
            <FileTitle>{file.name}</FileTitle>
            {/* <AudioPlayerWrapper
                onClick={handleAudio}
            >
                {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
                {isPlaying ? <PlayPause>Pause</PlayPause> : <PlayPause>Play</PlayPause>}
                <DurationBar>
                    <ElapsedBar elapsed={(100 * trackProgress) / audioRef.current.duration}/>
                </DurationBar>
                {audioRef && 
                    <div style={{width: '100px', fontSize:'12px', textAlign: 'right'}}>
                        {secondsToHms(trackProgress)}/{printedDuration}
                    </div>
                }
            </AudioPlayerWrapper> */}
            <ReactAudioPlayer 
                controls
                src={file.src}
            >
                {file.name}
            </ReactAudioPlayer>
        </div>
    )
}

const FileTitle = styled.div`
    color: #423F67;
    font-family: 'Quattrocento';
    font-weight: 700;
    margin-bottom: 8px;
`

// const PlayPause = styled.div`
//     width: 85px;
// `

// const ElapsedBar = styled.div`
//     height: 12px;
//     border-radius: 5px;
//     background-color: #423F67;
//     left: 0px;
//     width: ${props => `${props.elapsed > 50 ? props.elapsed + 1 : props.elapsed}%`};
// `

// const DurationBar = styled.div`
//     width: 100%;
//     height: 12px;
//     border-radius: 5px;
//     background-color: rgba(66, 63, 103, 0.25);;
//     position: relative;
// `

// const AudioPlayerWrapper = styled.div`
//     max-width: 443px;
//     color: #423F67;

//     display: flex;
//     align-items: center;

//     box-sizing: border-box;
//     padding: 7px 16px;

//     justify-content: space-evenly;
//     padding: 8px 16px;
//     gap: 8px;

//     height: 40px;

//     border: 1px solid #423F67;
//     background-color: #FBF6E9;
//     border-radius: 4px;
//     font-family: 'Quattrocento';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 26px;

//     color: #423F67;

//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     position: relative;
// `

export default AudioPlayer;