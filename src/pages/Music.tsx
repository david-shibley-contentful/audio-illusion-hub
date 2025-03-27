
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AlbumCard from '../components/AlbumCard';
import MusicPlayer from '../components/MusicPlayer';
import { Search } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import SoundCloudPlayer from '@/components/SoundCloudPlayer';

// Sample albums data
const allAlbums = [
  {
    id: 1,
    title: 'Backroads & Ballads',
    artist: 'Audio Illusion',
    url: 'https://soundcloud.com/a_udio-i_llusion/sets/backroads-ballads',
    genre: 'Country',
    year: '2025',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },  {
    id: 2,
    title: 'Beauty in the Darkness',
    artist: 'Audio Illusion',
    url: 'https://soundcloud.com/a_udio-i_llusion/sets/beauty-in-the-darkness',
    genre: 'Hip-hop/Rap',
    year: '2025',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 3,
    title: 'Golden Hour',
    artist: 'Audio Illusion',
    url: 'https://soundcloud.com/a_udio-i_llusion/sets/golden-hour',
    genre: 'Lofi',
    year: '2025',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 4,
    title: 'Lovable Lullabies',
    artist: 'Audio Illusion',
    url: 'https://soundcloud.com/a_udio-i_llusion/sets/lovable-lullabies',
    genre: 'Electronic',
    year: '2025',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 5,
    title: 'Rise and Shine',
    artist: 'Audio Illusion',
    url: 'https://soundcloud.com/a_udio-i_llusion/sets/rise-and-shine',
    genre: 'Electronic',
    year: '2025',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 6,
    title: 'Best Rappers Unalive',
    artist: 'Audio Illusion',
    url: 'https://soundcloud.com/a_udio-i_llusion/sets/best-rappers-unalive',
    genre: 'Rap',
    year: '2025',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  },
  {
    id: 7,
    title: 'Phantom Frequencies',
    artist: 'Audio Illusion',
    url: 'https://soundcloud.com/a_udio-i_llusion/sets/phantom-frequencies',
    genre: 'Midtempo bass / new beat',
    year: '2025',
    streamingLinks: {
      spotify: 'https://spotify.com',
      appleMusic: 'https://music.apple.com',
      soundcloud: 'https://soundcloud.com',
    },
  }
];

const Music = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [filteredAlbums, setFilteredAlbums] = useState(allAlbums);
  
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
          {filteredAlbums. length > 0 && filteredAlbums.map((album) => {
            return (
              <SoundCloudPlayer playlistUrl={album.url}/>
            )
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Music;
