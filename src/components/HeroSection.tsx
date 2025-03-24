
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ai-navy overflow-hidden py-20">
      <AnimatedBackground className="opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial from-ai-navy/40 to-ai-navy/95 z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 glass-dark px-4 py-2 rounded-full animate-fade-in">
            <span className="text-sm font-medium text-ai-teal">Redefining Music Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Where AI Meets 
            <span className="bg-gradient-to-r from-ai-teal to-ai-blue clip-text text-transparent block mt-2">
              Musical Imagination
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            Audio Illusion is pushing the boundaries of music creation with AI-driven 
            technology, delivering innovative sounds across multiple genres.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link 
              to="/music" 
              className="bg-ai-blue hover:bg-ai-blue/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center group"
            >
              Listen Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ai-navy to-transparent z-10"></div>
          <div className="flex justify-center">
            <div className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl glass-dark animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="w-full h-full bg-gradient-to-tr from-ai-navy to-ai-blue/20 flex items-center justify-center">
                <div className="flex items-center space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="wave-bar"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
