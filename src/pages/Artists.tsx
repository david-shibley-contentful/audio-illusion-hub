
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ArtistCard from '../components/ArtistCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

// Sample artists data
const artists = [
  {
    id: 1,
    name: 'Audio Illusion',
    image: '',
    bio: 'The founding artist of the label, exploring the boundaries of AI-driven music creation across multiple genres.',
    socialLinks: {
      spotify: 'https://open.spotify.com/artist/6KWDyaPQl2NRKLYGhBy6tA',
      instagram: 'https://www.instagram.com/a.udio_i.llusion/',
      appleMusic: 'https://music.apple.com/us/artist/audio-illusion/1803385080',
      website: 'https://soundcloud.com/a_udio-i_llusion',
    },
  },
];

const Artists = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <span className="text-sm font-medium text-ai-teal">Our Roster</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Meet the
              <span className="bg-gradient-to-r from-ai-teal to-ai-blue clip-text text-transparent block mt-2">
                Artists
              </span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              The innovative creators behind Shibley Records's groundbreaking sound,
              each bringing a unique perspective to AI-driven music.
            </p>
          </div>
        </div>
      </section>
      
      {/* Artists Grid */}
      <section className="py-20 bg-ai-navy relative">
        <div className="noise-bg"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
              <div 
                key={artist.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArtistCard artist={artist} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Section */}
      <section className="py-20 bg-gradient-to-b from-ai-navy to-ai-navy/95 relative">
        <div className="noise-bg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ai-blue/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-dark p-10 rounded-2xl border border-white/10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Join the Audio Illusion Family
            </h2>
            
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We're always on the lookout for innovative creators who are exploring the 
              frontiers of AI and music. If that sounds like you, we'd love to hear from you.
            </p>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-ai-teal hover:bg-ai-teal/90 text-ai-navy font-medium px-8 py-3 rounded-full transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Artists;
