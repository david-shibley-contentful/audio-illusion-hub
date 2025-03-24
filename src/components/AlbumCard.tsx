
import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface AlbumCardProps {
  album: {
    id: number;
    title: string;
    artist: string;
    image: string;
    year: string;
    streamingLinks: {
      spotify?: string;
      appleMusic?: string;
      soundcloud?: string;
    };
    onClick?: () => void;
  };
}

const AlbumCard = ({ album }: AlbumCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-ai-navy mb-4">
        <img 
          src={album.image} 
          alt={album.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-ai-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4">
          <div className="flex justify-end space-x-2">
            {Object.entries(album.streamingLinks).map(([platform, url]) => (
              url && (
                <a 
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-full transition-colors"
                >
                  <ExternalLink size={14} />
                </a>
              )
            ))}
          </div>
          
          <button 
            onClick={album.onClick}
            className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${
              isHovered 
                ? 'bg-ai-teal scale-100 opacity-100' 
                : 'bg-white scale-75 opacity-0'
            }`}
          >
            <Play size={20} className="text-ai-navy fill-ai-navy ml-0.5" />
          </button>
          
          <div></div> {/* Spacer */}
        </div>
      </div>
      
      <h3 className="font-medium text-white text-base mb-1">{album.title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-white/70 text-sm">{album.artist}</span>
        <span className="text-white/50 text-sm">{album.year}</span>
      </div>
    </div>
  );
};

export default AlbumCard;
