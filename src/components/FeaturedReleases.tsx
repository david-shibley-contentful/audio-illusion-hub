
import { useState, useRef } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const albums = [
  {
    id: 1,
    title: 'Synthetic Dreams',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Ambient',
    year: '2023',
  },
  {
    id: 2,
    title: 'Neural Waves',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Electronic',
    year: '2023',
  },
  {
    id: 3,
    title: 'Harmonic Algorithm',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Experimental',
    year: '2022',
  },
  {
    id: 4,
    title: 'Digital Echoes',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Downtempo',
    year: '2022',
  },
];

const FeaturedReleases = () => {
  const [activeAlbum, setActiveAlbum] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const handlePlayHover = (id: number) => {
    setActiveAlbum(id);
  };
  
  return (
    <section className="py-20 bg-gradient-to-b from-ai-navy to-ai-navy/90 relative">
      <div className="noise-bg"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Featured Releases
            </h2>
            <p className="text-white/70 max-w-2xl">
              Explore our latest tracks and albums, pushing the boundaries of AI-driven music creation.
            </p>
          </div>
          <Link 
            to="/music" 
            className="mt-4 md:mt-0 group inline-flex items-center text-ai-teal hover:text-white transition-colors duration-300"
          >
            View All Releases
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-none"
        >
          {albums.map((album) => (
            <div 
              key={album.id}
              className="min-w-[280px] max-w-[280px] animate-fade-in"
              style={{ animationDelay: `${album.id * 100}ms` }}
            >
              <div 
                className="relative group aspect-square overflow-hidden rounded-xl mb-4 bg-ai-navy"
                onMouseEnter={() => handlePlayHover(album.id)}
                onMouseLeave={() => setActiveAlbum(null)}
              >
                <img 
                  src={album.image} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeAlbum === album.id 
                        ? 'bg-ai-teal scale-100 opacity-100' 
                        : 'bg-white scale-90 opacity-0'
                    }`}
                  >
                    <Play className="h-6 w-6 text-ai-navy fill-ai-navy" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-1">{album.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">{album.genre}</span>
                  <span className="text-white/50 text-sm">{album.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReleases;
