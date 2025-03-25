
import { ExternalLink } from 'lucide-react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

interface ArtistCardProps {
  artist: {
    id: number;
    name: string;
    image: string;
    bio: string;
    socialLinks: {
      spotify?: string;
      instagram?: string;
      twitter?: string;
      website?: string;
    };
  };
}

const ArtistCard = ({ artist }: ArtistCardProps) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dgodidozd' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('6bc88314-31fb-419a-ba11-7cf54b3de82c_zeamyq')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500))

  return (
    <div className="group relative w-full">
      <div className="overflow-hidden rounded-lg aspect-[3/4] bg-gradient-to-b from-ai-navy to-ai-navy/80 mb-4">
        <AdvancedImage cldImg={img} />
        <div className="absolute inset-0 bg-gradient-to-t from-ai-navy via-ai-navy/50 to-transparent opacity-60"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white/90 text-sm line-clamp-4 mb-4">
            {artist.bio}
          </p>
          
          <div className="flex items-center space-x-3">
            {Object.entries(artist.socialLinks).map(([platform, url]) => (
              url && (
                <a 
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )
            ))}
          </div>
        </div>
      </div>
      
      <h3 className="text-white font-medium text-lg">{artist.name}</h3>
    </div>
  );
};

export default ArtistCard;
