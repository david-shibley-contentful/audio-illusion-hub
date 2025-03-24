
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AlbumCard from '../components/AlbumCard';
import MusicPlayer from '../components/MusicPlayer';
import { Search } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

// Sample albums data
const allAlbums = [
  {
    id: 1,
    title: 'Synthetic Dreams',
    artist: 'Audio Illusion',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Ambient',
    year: '2023',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 2,
    title: 'Neural Waves',
    artist: 'Neural Pulse',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Electronic',
    year: '2023',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
  },
  {
    id: 3,
    title: 'Harmonic Algorithm',
    artist: 'Quantum Echo',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Experimental',
    year: '2022',
    streamingLinks: {
      spotify: 'https://spotify.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 4,
    title: 'Digital Echoes',
    artist: 'Synthetic Dreams',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Downtempo',
    year: '2022',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 5,
    title: 'Quantum Frequencies',
    artist: 'Audio Illusion',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'IDM',
    year: '2021',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
  },
  {
    id: 6,
    title: 'Generative Patterns',
    artist: 'Neural Pulse',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Ambient',
    year: '2021',
    streamingLinks: {
      spotify: 'https://spotify.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 7,
    title: 'Algorithmic Harmony',
    artist: 'Quantum Echo',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Experimental',
    year: '2020',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
    },
  },
  {
    id: 8,
    title: 'Sentient Machines',
    artist: 'Synthetic Dreams',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=600&q=80',
    genre: 'Electronic',
    year: '2020',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
];

// Sample tracks data for music player
const tracks = [
  {
    id: 1,
    title: 'Synthetic Dreams',
    artist: 'Audio Illusion',
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Digital Whispers',
    artist: 'Audio Illusion',
    duration: '4:12',
  },
  {
    id: 3,
    title: 'Neural Pathways',
    artist: 'Audio Illusion',
    duration: '5:20',
  },
  {
    id: 4,
    title: 'Quantum Dreams',
    artist: 'Audio Illusion',
    duration: '3:55',
  },
];

const Music = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [filteredAlbums, setFilteredAlbums] = useState(allAlbums);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter albums based on search term and genre
  useEffect(() => {
    const filtered = allAlbums.filter(album => {
      const matchesSearch = 
        album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        album.artist.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesGenre = selectedGenre === 'All' || album.genre === selectedGenre;
      
      return matchesSearch && matchesGenre;
    });
    
    setFilteredAlbums(filtered);
  }, [searchTerm, selectedGenre]);
  
  // Get unique genres from albums
  const genres = ['All', ...Array.from(new Set(allAlbums.map(album => album.genre)))];
  
  const handleAlbumClick = () => {
    setIsPlayerVisible(true);
  };

  return (
    <div className="bg-ai-navy min-h-screen text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-ai-navy overflow-hidden">
        <AnimatedBackground className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-radial from-ai-navy/40 to-ai-navy/95 z-10"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 glass-dark px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-ai-teal">Our Releases</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Explore Our
              <span className="bg-gradient-to-r from-ai-teal to-ai-blue clip-text text-transparent block mt-2">
                Music Catalog
              </span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Discover the latest releases and complete discography from Audio Illusion
              and our roster of innovative artists.
            </p>
          </div>
        </div>
      </section>
      
      {/* Music Catalog */}
      <section className="py-20 bg-ai-navy relative">
        <div className="noise-bg"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/50" />
              </div>
              <input
                type="text"
                placeholder="Search albums or artists..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/5 border border-white/10 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-ai-teal focus:border-ai-teal transition-all duration-300 w-full md:w-64"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button 
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`px-4 py-1.5 rounded-full transition-all duration-300 text-sm ${
                    selectedGenre === genre 
                      ? 'bg-ai-teal text-ai-navy' 
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
          
          {/* Albums Grid */}
          {filteredAlbums.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {filteredAlbums.map((album, index) => (
                <div 
                  key={album.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <AlbumCard 
                    album={album} 
                    onClick={handleAlbumClick}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-xl font-medium text-white mb-2">No albums found</h3>
              <p className="text-white/70">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Music Player Fixed at Bottom */}
      {isPlayerVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 animate-slide-in-bottom">
          <div className="container mx-auto">
            <MusicPlayer tracks={tracks} />
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Music;
