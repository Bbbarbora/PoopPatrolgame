import { useRef, useState, useEffect } from 'react';

export function useAudio(url) {
  const audioRef = useRef(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);

  // Automatická synchronizace stavu při změně přehrávání
  useEffect(() => {
    const audio = audioRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const play = () => {
    audioRef.current.play();
  };

  const pause = () => {
    audioRef.current.pause();
  };

  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const volume = (vol) => {
    audioRef.current.volume = vol
  } 

  return {
    play,
    pause,
    stop,
    volume,
    isPlaying,
    audio: audioRef.current,
  };
}
