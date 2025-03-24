
import { useState, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  tracks: {
    id: number;
    title: string;
    artist: string;
    duration: string;
    audioSrc?: string; // Optional for now since we're mocking functionality
  }[];
}

const MusicPlayer = ({ tracks }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<number | null>(null);
  
  const currentTrack = tracks[currentTrackIndex];
  
  const togglePlay = () => {
    if (isPlaying) {
      // In a real implementation, we would pause the audio
      clearProgressInterval();
    } else {
      // In a real implementation, we would play the audio
      simulatePlayback();
    }
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // In a real implementation, we would mute/unmute the audio
  };
  
  const playNextTrack = () => {
    clearProgressInterval();
    setProgress(0);
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    
    // Only auto-play if it was already playing
    if (isPlaying) {
      simulatePlayback();
    } else {
      setIsPlaying(true);
      simulatePlayback();
    }
  };
  
  const playPreviousTrack = () => {
    clearProgressInterval();
    setProgress(0);
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
    
    // Only auto-play if it was already playing
    if (isPlaying) {
      simulatePlayback();
    } else {
      setIsPlaying(true);
      simulatePlayback();
    }
  };
  
  // For demo purposes, simulate playback with progress bar
  const simulatePlayback = () => {
    clearProgressInterval();
    progressInterval.current = window.setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 0.5;
        if (newProgress >= 100) {
          clearProgressInterval();
          setIsPlaying(false);
          setProgress(0);
          return 0;
        }
        return newProgress;
      });
    }, 100);
  };
  
  const clearProgressInterval = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
      progressInterval.current = null;
    }
  };
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const newProgress = (clickPosition / rect.width) * 100;
    
    setProgress(Math.min(100, Math.max(0, newProgress)));
    // In a real implementation, we would seek the audio
  };
  
  return (
    <div className="glass-dark rounded-xl p-4 w-full">
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <div className="flex-1">
            <h3 className="text-white font-medium truncate">{currentTrack.title}</h3>
            <p className="text-white/60 text-sm truncate">{currentTrack.artist}</p>
          </div>
          <div className="flex items-center space-x-1">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="wave-bar h-4 w-0.5 mx-px" style={{
                animationPlayState: isPlaying ? 'running' : 'paused'
              }}></div>
            ))}
          </div>
          <span className="text-white/60 text-sm ml-2">{currentTrack.duration}</span>
        </div>
        
        <div 
          className="h-1.5 bg-white/10 rounded-full mb-4 cursor-pointer relative overflow-hidden"
          onClick={handleProgressClick}
        >
          <div 
            className="absolute top-0 left-0 h-full bg-ai-teal rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={playPreviousTrack}
              className="text-white/70 hover:text-white transition-colors"
            >
              <SkipBack size={18} />
            </button>
            
            <button 
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-ai-teal text-ai-navy flex items-center justify-center hover:bg-ai-teal/90 transition-colors"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
            </button>
            
            <button 
              onClick={playNextTrack}
              className="text-white/70 hover:text-white transition-colors"
            >
              <SkipForward size={18} />
            </button>
          </div>
          
          <button 
            onClick={toggleMute}
            className="text-white/70 hover:text-white transition-colors"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
