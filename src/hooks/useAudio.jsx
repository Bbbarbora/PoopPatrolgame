import { useRef, useState, useEffect } from 'react';

export function useAudio(url) {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  // Automatická synchronizace stavu při změně přehrávání
  useEffect(() => {
    audioRef.current =  new Audio(url)

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audioRef.current.addEventListener('play', handlePlay);
    audioRef.current.addEventListener('pause', handlePause);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current.pause();
      audioRef.current.removeEventListener('play', handlePlay);
      audioRef.current.removeEventListener('pause', handlePause);
      audioRef.current.removeEventListener('ended', handleEnded);
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