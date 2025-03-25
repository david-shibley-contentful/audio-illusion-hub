
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, Check, AlertCircle, Instagram, Twitter, Youtube } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import AnimatedBackground from '../components/AnimatedBackground';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dgodidozd' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('6bc88314-31fb-419a-ba11-7cf54b3de82c_zeamyq')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500))
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const validateForm = () => {
    const newErrors: Partial<FormState> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user types
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
    }, 1500);
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
              <span className="text-sm font-medium text-ai-teal">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Connect With
              <span className="bg-gradient-to-r from-ai-teal to-ai-blue clip-text text-transparent block mt-2">
                Audio Illusion
              </span>
            </h1>
            
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              Have questions, feedback, or interested in working with us?
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-20 bg-ai-navy relative">
        <div className="noise-bg"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-ai-blue/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-ai-blue" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <a 
                      href="mailto:info@audioillusion.com" 
                      className="text-white/70 hover:text-ai-teal transition-colors"
                    >
                      audio.illusion.music@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ai-purple/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-ai-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Location</h3>
                    <p className="text-white/70">
                      Denver, CO, United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-ai-teal/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-ai-teal" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <p className="text-white/70">
                      +1 (661) 802-1360
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-white font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/a.udio_i.llusion/", color: "hover:bg-pink-500/20 hover:text-pink-400" },
                    { icon: <Youtube className="h-5 w-5" />, href: "https://www.youtube.com/channel/UCAFpzKygfcV8SM0HCVgKPwQ", color: "hover:bg-red-500/20 hover:text-red-400" },
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white/5 p-3 rounded-full transition-all duration-300 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 glass-dark p-6 rounded-xl border border-white/10">
                <h3 className="text-white font-medium mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <AdvancedImage cldImg={img} />
            
            {/* Contact Form */}
            {/* <div className="order-1 lg:order-2">
              <div className="glass-dark p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-ai-teal transition-all duration-300`}
                    />
                    {errors.name && (
                      <div className="mt-1 flex items-center text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-ai-teal transition-all duration-300`}
                    />
                    {errors.email && (
                      <div className="mt-1 flex items-center text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-white/5 border ${
                        errors.subject ? 'border-red-500' : 'border-white/10'
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-ai-teal transition-all duration-300`}
                    >
                      <option value="" className="bg-ai-navy">Select a subject</option>
                      <option value="General Inquiry" className="bg-ai-navy">General Inquiry</option>
                      <option value="Artist Submission" className="bg-ai-navy">Artist Submission</option>
                      <option value="Business Proposal" className="bg-ai-navy">Business Proposal</option>
                      <option value="Press & Media" className="bg-ai-navy">Press & Media</option>
                      <option value="Other" className="bg-ai-navy">Other</option>
                    </select>
                    {errors.subject && (
                      <div className="mt-1 flex items-center text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full bg-white/5 border ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      } rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-ai-teal transition-all duration-300`}
                    ></textarea>
                    {errors.message && (
                      <div className="mt-1 flex items-center text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
