
import HeroSection from '../components/HeroSection';
import FeaturedReleases from '../components/FeaturedReleases';
import NewsletterSignup from '../components/NewsletterSignup';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ArrowRight, ArrowDown, Music, Headphones, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ai-navy min-h-screen text-white">
      <NavBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Label Section */}
      <section className="py-20 bg-ai-navy relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in">
              <div className="inline-block mb-4 px-3 py-1 rounded-full border border-ai-teal/30 bg-ai-teal/10">
                <span className="text-xs font-medium text-ai-teal">Our Vision</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Pioneering the Future of AI-Driven Music Creation
              </h2>
              
              <p className="text-white/80 mb-6">
                Audio Illusion is more than a record label—it's a laboratory for the future of music. 
                We blend cutting-edge AI technology with human creativity to push the boundaries of 
                what's possible in sound design and composition.
              </p>
              
              <p className="text-white/80 mb-8">
                Our mission is to create innovative, emotive music that challenges conventions while 
                remaining accessible and engaging for listeners across genres.
              </p>
              
              <Link 
                to="/about" 
                className="inline-flex items-center text-ai-teal hover:text-white transition-colors duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="order-1 md:order-2 animate-fade-in">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glassmorphism bg-ai-blue/10">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&h=800&q=80" 
                    alt="Audio Illusion Studio" 
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ai-navy to-transparent opacity-50"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-ai-blue/10 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center space-x-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="wave-bar h-10 w-1"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-ai-navy to-ai-navy/95 relative">
        <div className="noise-bg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ai-blue/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-ai-purple/30 bg-ai-purple/10">
              <span className="text-xs font-medium text-ai-purple">What We Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Innovative Approach to Music
            </h2>
            
            <p className="text-white/80">
              Audio Illusion combines technological innovation with artistic vision 
              to create unique audio experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Music className="h-6 w-6 text-ai-teal" />,
                title: 'AI-Powered Creation',
                description: 'Leveraging artificial intelligence to generate unique compositions and sounds that push creative boundaries.'
              },
              {
                icon: <Headphones className="h-6 w-6 text-ai-purple" />,
                title: 'Genre-Blending Sound',
                description: 'Crossing traditional music boundaries to create innovative soundscapes that defy categorization.'
              },
              {
                icon: <User className="h-6 w-6 text-ai-blue" />,
                title: 'Artist Development',
                description: 'Supporting and nurturing talent with a focus on those exploring the intersection of technology and music.'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-dark p-8 rounded-xl border border-white/5 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 rounded-full bg-white/5 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/about" 
              className="inline-flex items-center text-white/70 hover:text-white transition-colors duration-300 group"
            >
              Discover More
              <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Releases */}
      <FeaturedReleases />
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
