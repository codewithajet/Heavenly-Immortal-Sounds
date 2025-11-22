import { useState, useEffect, useRef } from 'react';
import { Menu, X, Play, Pause, Music, Users, Image, ChevronDown, Instagram, Youtube, Facebook, MapPin, Mail, PhoneCall, Heart, Star, Calendar, Award, Mic2, Disc3, Headphones, Globe, ArrowRight, Quote, Clock, ChevronRight, Send, Volume2 } from 'lucide-react';

const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isInView];
};

const AnimatedSection = ({ children, delay = 0, direction = 'up' }) => {
  const [ref, isInView] = useInView(0.1);
  const directions = {
    up: 'translate-y-12',
    down: '-translate-y-12',
    left: 'translate-x-12',
    right: '-translate-x-12',
    none: 'translate-y-0'
  };
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directions[direction]}`}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  const NavLink = ({ page, children }) => (
    <button onClick={() => { setCurrentPage(page); setMenuOpen(false); window.scrollTo(0, 0); }}
      className={`relative px-4 py-2 font-medium tracking-wider uppercase text-xs transition-all duration-300 ${currentPage === page ? 'text-amber-400' : 'text-gray-300 hover:text-amber-300'}`}>
      {children}
      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 rounded-full ${currentPage === page ? 'w-6' : 'w-0'}`} />
    </button>
  );

  const Header = () => (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl py-2 shadow-2xl shadow-amber-900/10' : 'bg-gradient-to-b from-black/80 to-transparent py-3 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4 cursor-pointer group" onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}>
          <div className="relative">
            <img src="https://res.cloudinary.com/dqhcroiw8/image/upload/v1763746729/Heavenly%20Immortal%20Sounds/logo_removebg_g0dfer.png"  className="w-10 h-10 md:w-12 md:h-12 rounded-xlflex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500"/>
          </div>
          <div>
            <h1 className="text-base md:text-xl font-bold text-white tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>HEAVENLY</h1>
            <p className="text-[8px] md:text-[10px] text-amber-400 tracking-[0.2em] md:tracking-[0.3em] font-medium">IMMORTAL SOUNDS</p>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-1">
          {['home', 'about', 'music', 'gallery', 'contact'].map(page => (
            <NavLink key={page} page={page}>{page}</NavLink>
          ))}
          <button onClick={() => setCurrentPage('contact')} className="ml-4 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs tracking-wider rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
            BOOK NOW
          </button>
        </nav>
        <button className="lg:hidden text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-xl border-t border-amber-900/20">
          <div className="flex flex-col items-center py-6 gap-1">
            {['home', 'about', 'music', 'gallery', 'contact'].map(page => (
              <NavLink key={page} page={page}>{page}</NavLink>
            ))}
            <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className="mt-4 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold text-xs tracking-wider rounded-full">
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );

  const Footer = () => (
    <footer className="bg-gradient-to-b from-black via-amber-950/5 to-black border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-6 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <img src="https://res.cloudinary.com/dqhcroiw8/image/upload/v1763746729/Heavenly%20Immortal%20Sounds/logo_removebg_g0dfer.png" className="w-12 h-12 rounded-xl  flex items-center justify-center"/>
              <div>
                <h3 className="text-base md:text-lg font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>HEAVENLY</h3>
                <p className="text-[8px] md:text-[9px] text-amber-400 tracking-[0.2em] md:tracking-[0.25em]">IMMORTAL SOUNDS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-6">
              A faith-based worship ministry carrying the sacred sound of African rhythm and Hebrew spirituality to the nations.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, url: "https://www.instagram.com/theheavenlysounds/" },
                { Icon: Facebook, url: "https://www.facebook.com/heavenlyimmortalsound" },
                { Icon: Youtube, url: "/" }
              ].map(({ Icon, url }, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-amber-900/20 border border-amber-800/30 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300">
                  <Icon size={16} className="md:hidden" />
                  <Icon size={18} className="hidden md:block" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
              <span className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent rounded" />
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {[['Home', 'home'], ['About Us', 'about'], ['Our Music', 'music'], ['Gallery', 'gallery'], ['Contact', 'contact']].map(([label, page]) => (
                <li key={page}>
                  <button onClick={() => { setCurrentPage(page); window.scrollTo(0, 0); }} className="text-gray-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group">
                    <ChevronRight size={12} className="text-amber-600 group-hover:translate-x-1 transition-transform" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
              <span className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent rounded" />
              Our Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {['Worship Sessions', 'Church Ministrations', 'Revival Meetings', 'Concert Events', 'Studio Recording', 'Worship Training'].map((item, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                  <Star size={8} className="text-amber-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 md:mb-6 flex items-center gap-2 text-sm md:text-base">
              <span className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent rounded" />
              Contact Info
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs md:text-sm">No. 1 Mohammed Abu Street, Okeira-Nla, Ajah, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall size={16} className="text-amber-500" />
                <span className="text-gray-400 text-xs md:text-sm">08136511666</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-500" />
                <span className="text-gray-400 text-xs md:text-sm break-all">info@heavenlyimmortalsounds.com</span>
              </li>
            </ul>
            <div className="mt-4 md:mt-6 p-3 md:p-4 rounded-xl bg-gradient-to-r from-amber-900/20 to-transparent border border-amber-800/20">
              <p className="text-amber-400 text-xs font-medium mb-1">Ministry Hours</p>
              <p className="text-gray-400 text-xs md:text-sm">Available for bookings 24/7</p>
            </div>
          </div>
        </div>
        <div className="pt-6 md:pt-8 border-t border-amber-900/20">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-gray-500 text-xs md:text-sm">
              © {new Date().getFullYear()} Heavenly Immortal Sounds. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <span className="text-gray-500 text-xs md:text-sm">@PstLightShalom</span>
              <span className="text-gray-500 text-xs md:text-sm">@HeavenlyImmortalSounds</span>
            </div>
            <div className="flex flex-col items-center text-gray-600 text-xs">
              <p className="flex items-center gap-1">
                Made with <Heart size={10} className="text-amber-500" /> in Lagos, Nigeria
              </p>
              <a href="https://damilareajetunmobi.vercel.app" target="_blank" rel="noopener noreferrer"
                className="mt-1 text-amber-400 font-medium hover:text-amber-500 transition-colors">
                Developed by Code With Ajet
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23c77909" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-black/90 to-black" />
          <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl pt-20 md:pt-24">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-900/30 border border-amber-700/30 mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 text-xs md:text-sm tracking-widest uppercase">African Hebrew Worship</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-1 md:mb-2 leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              Heavenly
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600" style={{ fontFamily: 'Georgia, serif' }}>
                Immortal Sounds
              </span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={600}>
            <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-2 md:mb-4 leading-relaxed px-2">
              Experience the divine fusion of African rhythm and ancient Hebrew scales
            </p>
            <p className="text-amber-400/80 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-2">
              A sacred sound designed to draw souls into deep encounters with the Most High God
            </p>
          </AnimatedSection>
          <AnimatedSection delay={800}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center mb-10 md:mb-16 px-4">
              <button onClick={() => setCurrentPage('music')} className="group px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-black font-bold text-sm md:text-base rounded-full hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 md:gap-3">
                <Play size={18} fill="black" />
                Experience Our Sound
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => setCurrentPage('contact')} className="px-6 md:px-10 py-4 md:py-5 border-2 border-amber-500/50 text-amber-400 font-bold text-sm md:text-base rounded-full hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3">
                <Calendar size={18} />
                Book For Your Event
              </button>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={1000}>
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-12 lg:gap-16 px-4">
              {[['150+', 'Events'], ['50+', 'Churches'], ['10K+', 'Lives Touched'], ['5+', 'Years Ministry']].map(([num, label], i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400" style={{ fontFamily: 'Georgia, serif' }}>{num}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 animate-bounce">
          <span className="text-gray-500 text-[10px] md:text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="text-amber-500" size={20} />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-amber-950/5 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-20">
              <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">What We Offer</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>More Than Music</h2>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">Our worship is a spiritual atmosphere, a prophetic sound, an invitation into the presence of the King</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Mic2 size={24} />, title: 'Prophetic Worship', desc: 'Spirit-led ministrations that break chains and open heavens', color: 'from-amber-500 to-orange-600' },
              { icon: <Globe size={24} />, title: 'African-Hebrew Fusion', desc: 'Ancient Hebrew scales meet vibrant African rhythms', color: 'from-amber-600 to-yellow-500' },
              { icon: <Headphones size={24} />, title: 'Studio Excellence', desc: 'Professional recording and production services', color: 'from-orange-500 to-amber-600' },
              { icon: <Heart size={24} />, title: 'Revival Movement', desc: 'Spreading the fire of true worship across nations', color: 'from-yellow-500 to-amber-500' }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="group h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-b from-amber-900/10 to-black/50 border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 md:mb-6 text-black group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-6 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="aspect-square rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 p-1">
                  <div className="w-full h-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-800/50 to-black flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-3 md:mb-4">
                        <Mic2 size={36} className="text-black md:hidden" />
                        <Mic2 size={48} className="text-black hidden md:block" />
                      </div>
                      <p className="text-amber-300 font-medium text-sm md:text-base">Rabbi Light Shalom</p>
                      <p className="text-gray-500 text-xs md:text-sm">Lead Psalmist</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-28 h-28 md:w-40 md:h-40 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5">
                  <div className="w-full h-full rounded-xl md:rounded-2xl bg-black flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-amber-400">OPÍFÈ</p>
                      <p className="text-gray-500 text-[10px] md:text-xs">Hebrew Instrument</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Meet The Psalmist</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 md:mt-4 mb-6 md:mb-8" style={{ fontFamily: 'Georgia, serif' }}>Rabbi Light Shalom</h2>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                A spirit-filled psalmist, teacher, and prophetic worship leader whose ministry carries a divine frequency that transforms worship into supernatural encounters.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                Rabbi Light Shalom is also the creator of <span className="text-amber-400 font-semibold">OPÍFÈ</span>, a special Hebrew wind instrument used in prophetic ministration. His unique calling bridges African expression with Hebrew spirituality, creating a worship experience that awakens spirits and stirs revival.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
                {['Prophetic Worship', 'OPÍFÈ Creator', 'Teacher', 'Revival Leader'].map((tag, i) => (
                  <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-amber-900/20 border border-amber-800/30 text-amber-400 text-xs md:text-sm">{tag}</span>
                ))}
              </div>
              <button onClick={() => setCurrentPage('about')} className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-2 group text-sm md:text-base">
                Learn More About Our Ministry
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-amber-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16">
              <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Featured Music</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 md:mt-4" style={{ fontFamily: 'Georgia, serif' }}>Latest Releases</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Heavenly Encounter', type: 'Album', tracks: 8, gradient: 'from-amber-600 to-orange-700' },
              { title: 'OPÍFÈ Sessions', type: 'Instrumental', tracks: 5, gradient: 'from-orange-600 to-amber-700' },
              { title: 'Revival Fire', type: 'Live', tracks: 12, gradient: 'from-yellow-600 to-amber-700' }
            ].map((album, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="group cursor-pointer" onClick={() => setCurrentPage('music')}>
                  <div className={`aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br ${album.gradient} p-1 mb-3 md:mb-4 overflow-hidden`}>
                    <div className="w-full h-full rounded-lg md:rounded-xl bg-gradient-to-br from-black/20 to-black/60 flex items-center justify-center relative">
                      <Disc3 size={60} className="text-white/20 md:hidden" />
                      <Disc3 size={80} className="text-white/20 hidden md:block" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-500 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <Play size={24} fill="black" className="text-black ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-base md:text-lg group-hover:text-amber-400 transition-colors">{album.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm">{album.type} • {album.tracks} Tracks</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={400}>
            <div className="text-center mt-8 md:mt-12">
              <button onClick={() => setCurrentPage('music')} className="px-6 md:px-8 py-3 md:py-4 border border-amber-500/50 text-amber-400 font-medium text-sm md:text-base rounded-full hover:bg-amber-500/10 transition-all duration-300 inline-flex items-center gap-2 md:gap-3">
                View All Music <ArrowRight size={16} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c77909 0, #c77909 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="max-w-4xl mx-auto relative">
          <AnimatedSection>
            <div className="text-center mb-8 md:mb-12">
              <Quote size={36} className="text-amber-600/30 mx-auto mb-3 md:mb-4 md:w-12 md:h-12" />
              <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Testimonials</span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 md:mt-4" style={{ fontFamily: 'Georgia, serif' }}>Lives Transformed</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="relative h-48 md:h-64">
              {[
                { text: "The atmosphere shifted the moment they began to minister. Heaven literally touched earth.", author: "Pastor Emmanuel", church: "Grace Assembly, Lagos" },
                { text: "Rabbi Light Shalom carries an unusual anointing. The prophetic worship opened doors we didn't know were closed.", author: "Bishop Grace", church: "Dominion Chapel, Abuja" },
                { text: "The OPÍFÈ instrument creates sounds that penetrate deep into the spirit. Truly a divine gift.", author: "Rev. Michael", church: "Glory Tabernacle, Port Harcourt" }
              ].map((t, i) => (
                <div key={i} className={`absolute inset-0 transition-all duration-700 ${activeTestimonial === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                  <p className="text-base md:text-xl lg:text-2xl text-gray-300 text-center leading-relaxed mb-6 md:mb-8 italic px-2">"{t.text}"</p>
                  <div className="text-center">
                    <p className="text-amber-400 font-semibold text-sm md:text-base">{t.author}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{t.church}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {[0, 1, 2].map(i => (
                <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-2 md:h-3 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'bg-amber-500 w-6 md:w-8' : 'bg-amber-900/50 hover:bg-amber-700 w-2 md:w-3'}`} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="relative p-8 md:p-12 lg:p-20 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-amber-900/30 border border-amber-700/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-amber-600/10 rounded-full blur-3xl" />
              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Ready to Experience<br />The Sacred Sound?</h2>
                <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10 px-2">Book Heavenly Immortal Sounds for your church service, revival, concert, or special Christian gathering.</p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <button onClick={() => setCurrentPage('contact')} className="px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm md:text-base rounded-full hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 md:gap-3">
                    <Calendar size={18} />
                    Book Us Now
                  </button>
                  <a href="tel:08136511666" className="px-6 md:px-10 py-4 md:py-5 border-2 border-amber-500/50 text-amber-400 font-bold text-sm md:text-base rounded-full hover:bg-amber-500/10 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3">
                    <PhoneCall size={18} />
                    08136511666
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-20">
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Who We Are</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>About Our Ministry</h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto px-2">A worship movement rooted in African expression and anchored in the depth of Hebrew spirituality.</p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
          <AnimatedSection direction="left">
            <div className="h-full p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-800/30">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-4 md:mb-6">
                <Star size={20} className="text-black md:hidden" />
                <Star size={24} className="text-black hidden md:block" />
              </div>
              <h3 className="text-amber-400 font-semibold mb-3 md:mb-4 tracking-wide text-xs md:text-sm">OUR VISION</h3>
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">To exalt God through excellent sound and creative expression — inspiring souls, empowering worship, and spreading the message of Christ through digital and musical innovation.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="h-full p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-800/30">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-4 md:mb-6">
                <Award size={20} className="text-black md:hidden" />
                <Award size={24} className="text-black hidden md:block" />
              </div>
              <h3 className="text-amber-400 font-semibold mb-3 md:mb-4 tracking-wide text-xs md:text-sm">OUR MISSION</h3>
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed">To create a Spirit-filled creative environment where worship is recorded, refined, and shared with the world; to train, collaborate, and inspire others to use their gifts for Kingdom impact.</p>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-900/10 via-amber-800/20 to-amber-900/10 border border-amber-700/20 mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Unique Sound</h3>
              <p className="text-gray-400 text-sm md:text-base">A beautiful fusion that creates an atmosphere both ancient and fresh</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: <Disc3 size={20} />, label: 'African Rhythms', desc: 'Vibrant beats from the motherland' },
                { icon: <Music size={20} />, label: 'Hebrew Scales', desc: 'Ancient Jewish melodies' },
                { icon: <Globe size={20} />, label: 'Middle Eastern', desc: 'Rich harmonic traditions' },
                { icon: <Mic2 size={20} />, label: 'Prophetic Flow', desc: 'Spirit-led utterances' }
              ].map((item, i) => (
                <div key={i} className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-black/30 hover:bg-amber-900/20 transition-colors duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-lg md:rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-400 mb-3 md:mb-4">{item.icon}</div>
                  <h4 className="text-white font-semibold text-sm md:text-base mb-1 md:mb-2">{item.label}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="text-center p-8 md:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-800/20 to-black border border-amber-700/30">
            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 md:mb-6">
              <Mic2 size={32} className="text-black md:hidden" />
              <Mic2 size={40} className="text-black hidden md:block" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Rabbi Light Shalom</h2>
            <p className="text-amber-400 text-sm md:text-base mb-4 md:mb-6">Founder & Lead Psalmist</p>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-4 md:mb-6 px-2">Rabbi Light Shalom is a spirit-filled psalmist, teacher, and prophetic worship leader. His ministry carries Heavenly Immortal Sounds — a divine frequency that transforms worship into encounter.</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {['Prophetic Worship', 'OPÍFÈ Creator', 'Teacher', 'Revival Leader'].map((tag, i) => (
                <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-amber-900/30 border border-amber-800/40 text-amber-400 text-xs md:text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="mt-12 md:mt-20 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Team</h3>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10 px-2">A family of dedicated vocalists, instrumentalists, and ministers passionately committed to delivering excellence.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {['Vocalists', 'Instrumentalists', 'Sound Engineers', 'Ministers'].map((role, i) => (
                <div key={i} className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-amber-900/10 border border-amber-900/20">
                  <Users size={24} className="text-amber-500 mx-auto mb-2 md:mb-3" />
                  <p className="text-white font-medium text-sm md:text-base">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );

  const MusicPage = () => (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16">
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Listen</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Our Music</h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-2">Every song is crafted with one purpose: to ignite worship and usher listeners into God's presence.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-900/20 via-amber-800/10 to-amber-900/20 border border-amber-700/30 mb-8 md:mb-12">
            <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0">
                <Volume2 size={28} className="text-black md:hidden" />
                <Volume2 size={36} className="text-black hidden md:block" />
              </div>
              <div className="min-w-0">
                <p className="text-amber-400 text-xs md:text-sm mb-1">Now Playing</p>
                <h3 className="text-lg md:text-2xl font-bold text-white truncate">Heavenly Encounter</h3>
                <p className="text-gray-500 text-sm truncate">Rabbi Light Shalom</p>
              </div>
            </div>
            <div className="h-1.5 md:h-2 bg-amber-900/30 rounded-full overflow-hidden mb-2 md:mb-3">
              <div className="h-full w-1/3 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" />
            </div>
            <div className="flex justify-between text-gray-500 text-xs md:text-sm">
              <span>2:15</span>
              <span>6:42</span>
            </div>
          </div>
        </AnimatedSection>
        <div className="space-y-3 md:space-y-4 mb-10 md:mb-16">
          {[
            { title: 'Heavenly Encounter', type: 'Original Worship', duration: '6:42' },
            { title: 'Ancient of Days', type: 'Hebrew Scales', duration: '5:18' },
            { title: 'OPÍFÈ Sessions Vol. 1', type: 'Instrumental', duration: '12:34' },
            { title: 'Revival Fire', type: 'Live Ministration', duration: '8:21' },
            { title: 'Draw Me Close', type: 'Studio Recording', duration: '4:56' },
            { title: 'Holy Ground', type: 'African Worship', duration: '7:03' },
            { title: 'Throne Room', type: 'Prophetic Flow', duration: '9:45' }
          ].map((track, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="group flex items-center gap-3 md:gap-6 p-3 md:p-5 rounded-xl md:rounded-2xl bg-gradient-to-r from-amber-900/10 to-transparent border border-amber-900/20 hover:border-amber-500/40 hover:bg-amber-900/20 transition-all duration-300 cursor-pointer" onClick={() => setIsPlaying(isPlaying === i ? null : i)}>
                <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center hover:from-amber-400 hover:to-amber-500 transition-colors group-hover:scale-110 duration-300 flex-shrink-0">
                  {isPlaying === i ? <Pause size={18} className="text-black" /> : <Play size={18} className="text-black ml-0.5" />}
                </button>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm md:text-lg truncate">{track.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm truncate">{track.type}</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 md:gap-4">
                  <Clock size={14} className="text-gray-600" />
                  <span className="text-gray-500 text-xs md:text-sm">{track.duration}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
            {['Original African-Hebrew worship songs', 'Live ministration recordings', 'Instrumental worship (OPÍFÈ)', 'Studio projects & collaborations'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-lg md:rounded-xl bg-amber-900/10 border border-amber-900/20">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-gray-300 text-xs md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );

  const GalleryPage = () => (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16">
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Moments</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Gallery</h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-2">Step into our world through images capturing live worship ministrations and prophetic nights.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {['All', 'Live Events', 'Studio', 'OPÍFÈ', 'Behind the Scenes'].map((cat, i) => (
              <button key={i} className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-300 text-xs md:text-sm font-medium ${i === 0 ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black' : 'border border-amber-600/40 text-amber-400 hover:bg-amber-600/20'}`}>{cat}</button>
            ))}
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            { label: 'Live Worship Night', sub: 'Lagos 2024', gradient: 'from-amber-600 to-orange-700' },
            { label: 'Studio Recording', sub: 'Album Session', gradient: 'from-amber-700 to-yellow-600' },
            { label: 'OPÍFÈ Performance', sub: 'Prophetic Night', gradient: 'from-orange-600 to-amber-700' },
            { label: 'Team Rehearsal', sub: 'Weekly Practice', gradient: 'from-yellow-700 to-amber-600' },
            { label: 'Revival Meeting', sub: 'Abuja 2024', gradient: 'from-amber-800 to-orange-600' },
            { label: 'Church Service', sub: 'Guest Ministration', gradient: 'from-orange-700 to-yellow-700' }
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className={`group relative aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} overflow-hidden cursor-pointer`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Image className="text-white" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <p className="text-white font-medium text-sm md:text-base">{item.label}</p>
                  <p className="text-white/60 text-xs md:text-sm">{item.sub}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16">
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Connect</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Get In Touch</h1>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-2">We are open for church invitations, worship concerts, revivals, and Christian gatherings.</p>
          </div>
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16">
          <AnimatedSection direction="left">
            <div className="space-y-3 md:space-y-5">
              {[
                { icon: <PhoneCall size={20} />, label: 'Bookings & Enquiries', value: '08136511666', sub: 'Call/WhatsApp – Secretary' },
                { icon: <MapPin size={20} />, label: 'Our Address', value: 'No. 1 Mohammed Abu Street', sub: 'Okeira-Nla, Ajah, Lagos, Nigeria' },
                { icon: <Mail size={20} />, label: 'Email Us', value: 'info@heavenlyimmortalsounds.com', sub: 'We respond within 24 hours' },
                { icon: <Clock size={20} />, label: 'Availability', value: 'Open for Bookings', sub: 'Available 24/7 for enquiries' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 md:gap-5 p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-amber-900/15 to-transparent border border-amber-900/25 hover:border-amber-500/40 transition-all duration-300">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-500 flex-shrink-0">{item.icon}</div>
                  <div className="min-w-0">
                    <p className="text-gray-500 text-xs md:text-sm mb-0.5 md:mb-1">{item.label}</p>
                    <p className="text-white font-semibold text-sm md:text-lg truncate">{item.value}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-900/20 to-black border border-amber-800/30">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Send Us a Message</h3>
              <div className="space-y-3 md:space-y-5">
                <div>
                  <label className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2 block">Your Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg md:rounded-xl bg-black/50 border border-amber-900/30 text-white text-sm md:text-base placeholder-gray-600 focus:border-amber-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2 block">Email Address</label>
                  <input type="email" placeholder="Enter your email" className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg md:rounded-xl bg-black/50 border border-amber-900/30 text-white text-sm md:text-base placeholder-gray-600 focus:border-amber-500 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2 block">Your Message</label>
                  <textarea placeholder="Tell us about your event..." rows={3} className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg md:rounded-xl bg-black/50 border border-amber-900/30 text-white text-sm md:text-base placeholder-gray-600 focus:border-amber-500 focus:outline-none transition-colors resize-none" />
                </div>
                <button className="w-full py-3 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm md:text-base rounded-lg md:rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3">
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <div className="text-center p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20 border border-amber-800/20">
            <p className="text-amber-400 tracking-widest text-xs font-medium mb-4 md:mb-6 uppercase">Follow Us on Social Media</p>
            <div className="flex justify-center gap-3 md:gap-4 mb-4 md:mb-6">
              {[
                { Icon: Instagram, url: "https://www.instagram.com/theheavenlysounds/" },
                { Icon: Youtube, url: "/" },
                { Icon: Facebook, url: "https://www.facebook.com/heavenlyimmortalsound" }
              ].map(({ Icon, url }, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-amber-600/40 text-amber-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 flex items-center justify-center">
                  <Icon size={20} className="md:hidden" />
                  <Icon size={24} className="hidden md:block" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">@PstLightShalom • @HeavenlyImmortalSounds</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Header />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'music' && <MusicPage />}
      {currentPage === 'gallery' && <GalleryPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
}