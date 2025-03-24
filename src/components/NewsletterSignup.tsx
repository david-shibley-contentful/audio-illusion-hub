
import { useState } from 'react';
import { Check } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section className="py-20 bg-ai-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ai-blue/10 to-transparent"></div>
      <div className="noise-bg"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to hear about new releases, 
            exclusive content, and upcoming events.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 focus:border-ai-teal text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-ai-teal transition-all duration-300"
                  required
                />
                {isSubmitted && (
                  <div className="absolute inset-y-0 right-3 flex items-center text-green-400">
                    <Check className="h-5 w-5" />
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading || isSubmitted}
                className={`bg-ai-teal hover:bg-ai-teal/90 text-ai-navy font-medium px-6 py-3 rounded-lg transition-all duration-300 disabled:opacity-70 ${
                  isSubmitted ? 'bg-green-500 hover:bg-green-500' : ''
                }`}
              >
                {isLoading ? 'Subscribing...' : isSubmitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </form>
          
          <p className="text-white/50 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Audio Illusion.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Exclusive Content',
              description: 'Get access to behind-the-scenes content, early releases, and subscriber-only material.'
            },
            {
              title: 'Community Events',
              description: 'Be the first to know about listening parties, live streams, and exclusive community gatherings.'
            },
            {
              title: 'Artist Insights',
              description: 'Dive deeper into the creative process with notes from Audio Illusion and featured artists.'
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="glass-dark p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
