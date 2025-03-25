
import { Link } from 'react-router-dom';
import { Music, Mail, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ai-navy py-12 md:py-20 relative overflow-hidden">
      <div className="noise-bg"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-6 w-6 text-ai-teal" />
              <span className="font-heading font-bold text-lg text-white">
                SHIBLEY <span className="text-ai-teal">RECORDS</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Pioneering AI-driven music creation across multiple genres, pushing the boundaries of what's possible in sound.
            </p>
          </div>

          {/* Site Links */}
          <div className="col-span-1">
            <h4 className="text-white font-medium mb-4 text-base">Navigate</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Artists', 'Music', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/70 hover:text-ai-teal transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h4 className="text-white font-medium mb-4 text-base">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#"
                    className="text-white/70 hover:text-ai-teal transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h4 className="text-white font-medium mb-4 text-base">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/a.udio_i.llusion/" },
                // { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
                // { icon: <Spotify className="h-5 w-5" />, href: "https://spotify.com" },
                { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/channel/UCAFpzKygfcV8SM0HCVgKPwQ" },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 text-white/80 hover:text-ai-teal p-2.5 rounded-full transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-white/70">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@audioillusion.com" className="text-sm hover:text-ai-teal transition-colors duration-300">
                audio.illusion.music@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Audio Illusion. All rights reserved.
          </div>
          <div className="text-white/50 text-xs">
            Crafted with precision and innovation.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
