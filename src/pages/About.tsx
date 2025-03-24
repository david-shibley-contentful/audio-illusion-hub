
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

const About = () => {
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
              <span className="text-sm font-medium text-ai-teal">About Us</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              The Story Behind
              <span className="bg-gradient-to-r from-ai-teal to-ai-blue clip-text text-transparent block mt-2">
                Audio Illusion
              </span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              A visionary record label at the intersection of artificial intelligence and musical creativity,
              pushing the boundaries of what's possible in sound.
            </p>
          </div>
        </div>
      </section>
      
      {/* Origin Story */}
      <section className="py-20 bg-ai-navy relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 rounded-full border border-ai-purple/30 bg-ai-purple/10">
                <span className="text-xs font-medium text-ai-purple">Our Origin</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                From Concept to Reality
              </h2>
              
              <p className="text-white/80 mb-6">
                Audio Illusion began as an experimental project exploring the capabilities of AI in music production. 
                What started as a technological curiosity quickly evolved into something more profound—a new approach 
                to musical expression and creativity.
              </p>
              
              <p className="text-white/80 mb-6">
                Founded in 2022, our label embraces the tension between human artistry and computational creativity. 
                We believe that this intersection is where the most interesting musical innovations occur.
              </p>
              
              <p className="text-white/80">
                Today, Audio Illusion stands at the forefront of a new musical movement, creating soundscapes that 
                challenge conventional notions of composition and production while delivering emotionally resonant experiences.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=450&q=80" 
                  alt="Audio Illusion Studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ai-navy to-transparent opacity-40"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-ai-teal rounded-full flex items-center justify-center hover:bg-ai-teal/90 transition-colors">
                    <Play className="h-6 w-6 text-ai-navy fill-ai-navy ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI & Music Section */}
      <section className="py-20 bg-gradient-to-b from-ai-navy to-ai-navy/95 relative">
        <div className="noise-bg"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-ai-blue/30 bg-ai-blue/10">
              <span className="text-xs font-medium text-ai-blue">Our Approach</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              AI-Driven Music Creation
            </h2>
            
            <p className="text-white/80">
              We harness the power of artificial intelligence as a creative tool, 
              augmenting human musicianship with computational innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Neural Networks',
                description: 'Training AI systems on diverse musical datasets to generate novel patterns and ideas.'
              },
              {
                number: '02',
                title: 'Human Curation',
                description: 'Expert producers select, refine, and develop the most promising AI-generated elements.'
              },
              {
                number: '03',
                title: 'Hybrid Production',
                description: 'Blending traditional instruments and techniques with AI-generated components.'
              },
              {
                number: '04',
                title: 'Iterative Process',
                description: 'Continuous feedback loop between human and machine to perfect each composition.'
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="glass-dark p-6 rounded-xl border border-white/5 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-ai-teal text-2xl font-heading font-bold mb-4 block">{step.number}</span>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Founder Section */}
      <section className="py-20 bg-ai-navy relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-ai-navy to-ai-navy/80">
                <img 
                  src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Audio Illusion Founder" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ai-navy via-ai-navy/30 to-transparent opacity-60"></div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="inline-block mb-4 px-3 py-1 rounded-full border border-ai-teal/30 bg-ai-teal/10">
                <span className="text-xs font-medium text-ai-teal">The Artist</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Audio Illusion
              </h2>
              
              <p className="text-white/80 mb-6">
                As both the founder and principal artist behind the label, Audio Illusion represents 
                a unique creative vision at the intersection of technology and artistry.
              </p>
              
              <p className="text-white/80 mb-6">
                With a background spanning computer science and classical composition, Audio Illusion 
                brings a multidisciplinary approach to music creation, combining technical expertise 
                with artistic sensitivity.
              </p>
              
              <p className="text-white/80 mb-8">
                Each release explores new possibilities in AI-assisted composition, sound design, and 
                production techniques, pushing forward the evolution of electronic music.
              </p>
              
              <Link 
                to="/music" 
                className="inline-flex items-center bg-ai-blue hover:bg-ai-blue/90 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 group"
              >
                Explore the Music
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision & Future */}
      <section className="py-20 bg-gradient-to-b from-ai-navy to-ai-navy/95 relative">
        <div className="noise-bg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ai-blue/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-ai-purple/30 bg-ai-purple/10">
              <span className="text-xs font-medium text-ai-purple">Looking Forward</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Vision & Future
            </h2>
            
            <p className="text-white/80">
              As AI continues to evolve, so does our approach to music creation. 
              Here's what we're building toward.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: 'Expanding the Artist Roster',
                description: 'We plan to sign and develop more artists who share our vision of AI-assisted music creation, building a diverse collective of forward-thinking creators.'
              },
              {
                title: 'Advancing the Technology',
                description: 'Ongoing research and development into new AI models specifically designed for musical applications, creating proprietary tools that push the boundaries of what's possible.'
              },
              {
                title: 'Creating Immersive Experiences',
                description: 'Expanding beyond audio to develop AI-generated visual components and interactive experiences that complement our musical releases.'
              }
            ].map((vision, index) => (
              <div 
                key={index} 
                className="glass-dark p-8 rounded-xl border border-white/5 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-white font-semibold text-xl mb-3">{vision.title}</h3>
                <p className="text-white/70">{vision.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-ai-purple hover:bg-ai-purple/90 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 group"
            >
              Connect With Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
