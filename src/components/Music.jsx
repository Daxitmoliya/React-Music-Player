import React, { useRef, useState } from 'react'
import { FaBackward } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaFastForward } from "react-icons/fa";
import video1 from '../assets/videos/video1.mp4'
import image1 from '../assets/Images/image1.jpg'
import image2 from '../assets/Images/image2.jpg'
import image3 from '../assets/Images/image3.jpg'
import image4 from '../assets/Images/image4.jpg'
import image5 from '../assets/Images/image5.jpg'
import image6 from '../assets/Images/image6.jpg'
import image7 from '../assets/Images/image7.jpg'
import song1 from '../assets/songs/Chasing - NEFFEX.mp3'
import song2 from '../assets/songs/AURORA - Runaway (Lyrics).mp3'
import song3 from '../assets/songs/Catch Me If I Fall - NEFFEX.mp3'
import song4 from '../assets/songs/Inspired (Clean) - NEFFEX.mp3'
import song5 from '../assets/songs/Baby doll [ slowed + reverb ] __ meet bros ,Kanika Kapoor __ jr santu.mp3'
import song6 from '../assets/songs/SOCH(Slowed+Reverbed) __ Hardy Sandhu.webm'
import song7 from '../assets/songs/Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar,Arijit Singh,Amitabh B.webm'
import { FaPauseCircle } from "react-icons/fa";


const Music = () => {

     const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Chasing',
    songArtist: 'NEFFEX ',
    songSrc: song1,
    songAvatar: image1,
  })

    const [audioProgress, setAudioProgress] = useState(0);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [musicIndex, setMusicIndex] = useState(0);
    const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
     const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');

    const currentAudio = useRef()

    const handleMusicProgressBar = (e)=>{
        setAudioProgress(e.target.value);
        currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
      }

    let avatarClass = ['objectFitCover','objectFitContain','none']
    const [avatarClassIndex, setAvatarClassIndex] = useState(0)
    const handleAvatar = () => {
        if (avatarClassIndex >= avatarClass.length - 1) {
          setAvatarClassIndex(0);
        } else {
          setAvatarClassIndex(avatarClassIndex + 1);
        }
      };
      
      

    const handleAudioPlay = () =>{
        if (currentAudio.current.paused){
            currentAudio.current.play();
            setIsAudioPlaying(true)
        }else{
            currentAudio.current.pause();
            setIsAudioPlaying(false)
        }
    }

    const musicAPI = [
        {
          songName: 'Chasing',
          songArtist: 'NEFFEX',
          songSrc: song1,
          songAvatar: image1
        },
        {
          songName: 'AURORA - Runaway',
          songArtist: 'Aurora Aksnes',
          songSrc: song2,
          songAvatar: image2
        },
        {
          songName: 'Catch Me If I Fall',
          songArtist: 'TEGNENT',
          songSrc: song3,
          songAvatar: image3
        },
        {
          songName: 'Inspired (Clean)',
          songArtist: 'NEFFEX',
          songSrc: song4,
          songAvatar: image4
        },
        {
          songName: 'Baby doll [ slowed + reverb ]',
          songArtist: 'Kanika Kapoor',
          songSrc: song5,
          songAvatar: image5
        },
        {
          songName: 'Soch (Slowed+Reverbed)',
          songArtist: 'Hardy Sandhu',
          songSrc: song6,
          songAvatar: image6
        },
        {
          songName: 'Apna Bana Le',
          songArtist: 'Arijit Singh',
          songSrc: song7,
          songAvatar: image7
        }
      ]

      const handlenextsong = () => {
        if (musicIndex >= musicAPI.length - 1) {
          let setNumber = 0;
          setMusicIndex(setNumber);
          updatecurrentmusic(setNumber);
        } else {
          let setNumber = musicIndex + 1;
          setMusicIndex(setNumber);
          updatecurrentmusic(setNumber);
        }
      };

      const handlepresong = () =>{
        if (musicIndex >= musicAPI.length + 1) {
            let setNumber = 0;
            setMusicIndex(setNumber);
            updatecurrentmusic(setNumber);
          } else {
            let setNumber = musicIndex - 1;
            setMusicIndex(setNumber);
            updatecurrentmusic(setNumber);
          }
      }

      const updatecurrentmusic = (number) => {
        let musicObject = musicAPI[number];
        setCurrentMusicDetails({
          songName: musicObject.songName,
          songArtist: musicObject.songArtist,
          songSrc: musicObject.songSrc,
          songAvatar: musicObject.songAvatar,
        });
        setIsAudioPlaying(true);
        currentAudio.current.src = musicObject.songSrc;
        currentAudio.current.play();
      };

      const handleAudioUpdate = () => {
        console.log("handleAudioUpdate function called"); // Add this line
        // Input total length of the audio
        let minutes = Math.floor(currentAudio.current.duration / 60);
        let seconds = Math.floor(currentAudio.current.duration % 60);
        let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
        setMusicTotalLength(musicTotalLength0);
    
        // Input Music Current Time
        let currentMin = Math.floor(currentAudio.current.currentTime / 60);
        let currentSec = Math.floor(currentAudio.current.currentTime % 60);
        let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
        setMusicCurrentTime(musicCurrentT);
    
        const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
        setAudioProgress(isNaN(progress) ? 0 : progress);
    };
    

  return (
    <>
        <div className="container">
        <audio src={currentMusicDetails.songSrc} ref={currentAudio}  onTimeUpdate={handleAudioUpdate}></audio>
        <video src={video1} muted autoPlay  className='backgroundVideo'></video>
        <div className="blackScreen"></div>
        <div className="music-Container">
        <p className='musicPlayer'>Music Player</p>
        <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
        <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
        <img
            src={currentMusicDetails.songAvatar}
            className={avatarClass[avatarClassIndex]}
            alt="song Avatar"
            id="songAvatar"
            onClick={handleAvatar}
    />
      <div className="musicTimerDiv">
        <p className='musicCurrentTime'>{musicCurrentTime}</p>
        <p className='musicTotalLenght'>{musicTotalLength}</p>
      </div>
      <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar}  />
      <div className="musicControlers">
          <FaBackward className="musicControler" onClick={handlepresong}/>
          {isAudioPlaying ? (
            <FaPauseCircle
              className="musicControler fa-pause-circle"
              onClick={handleAudioPlay}
            />
          ) : (
            <FaPlayCircle
              className="musicControler fa-circle-play"
              onClick={handleAudioPlay}
            />
          )}
          <FaFastForward className="musicControler" onClick={handlenextsong}/>
        </div>
      </div>
      </div>
    <div className="changeBackBtn" >
      Change Background
    </div>
            
    </>
  )
}

export default Music