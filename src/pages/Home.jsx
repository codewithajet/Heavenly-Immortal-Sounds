import { useState, useEffect, useRef } from 'react';
import { Menu, X, Play, Pause, Music, Users, Image, ChevronDown, Instagram, Youtube, Facebook, MapPin, Mail, PhoneCall, Heart, Star, Calendar, Award, Mic2, Disc3, Headphones, Globe, ArrowRight, Quote, Clock, ChevronRight, Send, Volume2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
            <img src="https://res.cloudinary.com/dqhcroiw8/image/upload/v1763746729/Heavenly%20Immortal%20Sounds/logo_removebg_g0dfer.png" alt="Heavenly Immortal Sounds Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500" />
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
              <img src="https://res.cloudinary.com/dqhcroiw8/image/upload/v1763746729/Heavenly%20Immortal%20Sounds/logo_removebg_g0dfer.png" className="w-12 h-12 rounded-xl flex items-center justify-center"/>
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
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-amber-900/30 border border-amber-700/30 mb-6 md:mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-xs md:text-sm tracking-widest uppercase">African Hebrew Worship</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-1 md:mb-2 leading-none animate-fade-in-up" style={{ fontFamily: 'Georgia, serif' }}>
            Heavenly
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-none animate-fade-in-up delay-200">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600" style={{ fontFamily: 'Georgia, serif' }}>
              Immortal Sounds
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-2 md:mb-4 leading-relaxed px-2 animate-fade-in-up delay-300">
            Experience the divine fusion of African rhythm and ancient Hebrew scales
          </p>
          <p className="text-amber-400/80 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-2 animate-fade-in-up delay-400">
            A sacred sound designed to draw souls into deep encounters with the Most High God
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center mb-10 md:mb-16 px-4 animate-fade-in-up delay-500">
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
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-12 lg:gap-16 px-4 animate-fade-in-up delay-600">
            {[['150+', 'Events'], ['50+', 'Churches'], ['10K+', 'Lives Touched'], ['5+', 'Years Ministry']].map(([num, label], i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${700 + i * 100}ms` }}>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400" style={{ fontFamily: 'Georgia, serif' }}>{num}</p>
                <p className="text-gray-500 text-xs md:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 animate-bounce animate-fade-in delay-1000">
          <span className="text-gray-500 text-[10px] md:text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="text-amber-500" size={20} />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-amber-950/5 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>More Than Music</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-2">Our worship is a spiritual atmosphere, a prophetic sound, an invitation into the presence of the King</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Mic2 size={24} />, title: 'Prophetic Worship', desc: 'Spirit-led ministrations that break chains and open heavens', color: 'from-amber-500 to-orange-600' },
              { icon: <Globe size={24} />, title: 'African-Hebrew Fusion', desc: 'Ancient Hebrew scales meet vibrant African rhythms', color: 'from-amber-600 to-yellow-500' },
              { icon: <Headphones size={24} />, title: 'Studio Excellence', desc: 'Professional recording and production services', color: 'from-orange-500 to-amber-600' },
              { icon: <Heart size={24} />, title: 'Revival Movement', desc: 'Spreading the fire of true worship across nations', color: 'from-yellow-500 to-amber-500' }
            ].map((item, i) => (
              <div key={i} className="group h-full p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-b from-amber-900/10 to-black/50 border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 animate-fade-in-up" style={{ animationDelay: `${i * 200}ms` }}>
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 md:mb-6 text-black group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    <section className="py-16 md:py-28 px-4 md:px-6 bg-black relative">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

      {/* IMAGE SECTION */}
      <div className="relative max-w-lg mx-auto lg:max-w-none animate-fade-in-left">
        <div className="relative group">
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

          {/* Image Frame */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 border-amber-700/40 bg-gradient-to-br from-amber-900/20 to-black/50 backdrop-blur-sm shadow-2xl shadow-amber-900/20">
            <img 
              src="https://res.cloudinary.com/dqhcroiw8/image/upload/v1764349818/Heavenly%20Immortal%20Sounds/Rabbi_Light_Shalom_jex0rk.png"
              alt="Rabbi Light Shalom - Lead Psalmist & OPÍFÈ Creator"
              className="w-full h-[500px] md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-amber-900/30"></div>

            {/* Name Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-gradient-to-r from-amber-900/90 to-black/90 backdrop-blur-md rounded-2xl p-5 border border-amber-600/40 shadow-2xl">
                <p className="text-amber-300 font-bold text-xl md:text-2xl mb-1">Rabbi Light Shalom</p>
                <p className="text-amber-400/90 text-sm md:text-base">Lead Psalmist & OPÍFÈ Creator</p>
              </div>
            </div>
          </div>

          {/* Floating OPÍFÈ Badge */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-10 group-hover:scale-110 transition-transform duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/40 rounded-2xl blur-md"></div>

              <div className="relative bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-2 md:p-2.5 border-2 border-amber-400/60 shadow-2xl shadow-amber-500/30">
                <div className="bg-black rounded-xl md:rounded-2xl p-4 md:p-5 text-center min-w-[100px] md:min-w-[120px]">
                  <p className="text-xl md:text-3xl font-bold text-amber-400">OPÍFÈ</p>
                  <p className="text-[10px] md:text-xs text-amber-500 font-medium mt-1">Hebrew Instrument</p>
                </div>
              </div>

              {/* Corners */}
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-amber-400 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="animate-fade-in-right">
        <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">
          Meet The Psalmist
        </span>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 md:mt-4 mb-6 md:mb-8"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Rabbi Light Shalom
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
          A spirit-filled psalmist, teacher, and prophetic worship leader whose ministry carries a divine frequency that transforms worship into supernatural encounters.
        </p>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
          Rabbi Light Shalom is also the creator of{" "}
          <span className="text-amber-400 font-semibold">OPÍFÈ</span>, a special Hebrew wind instrument used in prophetic ministration. His unique calling bridges African expression with Hebrew spirituality, creating a worship experience that awakens spirits and stirs revival.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-6 md:mb-8">
          {["Prophetic Worship", "OPÍFÈ Creator", "Teacher", "Revival Leader"].map((tag, i) => (
            <span
              key={i}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-amber-900/20 border border-amber-800/30 text-amber-400 text-xs md:text-sm animate-scale-in"
              style={{ animationDelay: `${300 + i * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => setCurrentPage("about")}
          className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-2 group text-sm md:text-base"
        >
          Learn More About Our Ministry
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </div>
  </div>
</section>


      <section className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black via-amber-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Featured Music</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 md:mt-4" style={{ fontFamily: 'Georgia, serif' }}>Latest Releases</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Heavenly Encounter', type: 'Album', tracks: 8, gradient: 'from-amber-600 to-orange-700' },
              { title: 'OPÍFÈ Sessions', type: 'Instrumental', tracks: 5, gradient: 'from-orange-600 to-amber-700' },
              { title: 'Revival Fire', type: 'Live', tracks: 12, gradient: 'from-yellow-600 to-amber-700' }
            ].map((album, i) => (
              <div key={i} className="group cursor-pointer animate-flip-in" style={{ animationDelay: `${i * 200}ms` }} onClick={() => setCurrentPage('music')}>
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
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12 animate-fade-in-up delay-400">
            <button onClick={() => setCurrentPage('music')} className="px-6 md:px-8 py-3 md:py-4 border border-amber-500/50 text-amber-400 font-medium text-sm md:text-base rounded-full hover:bg-amber-500/10 transition-all duration-300 inline-flex items-center gap-2 md:gap-3">
              View All Music <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c77909 0, #c77909 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <Quote size={36} className="text-amber-600/30 mx-auto mb-3 md:mb-4 md:w-12 md:h-12" />
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Testimonials</span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-3 md:mt-4" style={{ fontFamily: 'Georgia, serif' }}>Lives Transformed</h2>
          </div>
          <div className="relative h-48 md:h-64 animate-zoom-in">
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
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-6 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-8 md:p-12 lg:p-20 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-900/30 via-amber-800/20 to-amber-900/30 border border-amber-700/30 overflow-hidden animate-fade-in-up delay-200">
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
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Who We Are</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>About Our Ministry</h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-3xl mx-auto px-2">A worship movement rooted in African expression and anchored in the depth of Hebrew spirituality.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-20">
          <div className="h-full p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-800/30 animate-fade-in-left">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-4 md:mb-6">
              <Star size={20} className="text-black md:hidden" />
              <Star size={24} className="text-black hidden md:block" />
            </div>
            <h3 className="text-amber-400 font-semibold mb-3 md:mb-4 tracking-wide text-xs md:text-sm">OUR VISION</h3>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed">To exalt God through excellent sound and creative expression — inspiring souls, empowering worship, and spreading the message of Christ through digital and musical innovation.</p>
          </div>
          <div className="h-full p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-900/20 to-transparent border border-amber-800/30 animate-fade-in-right">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-4 md:mb-6">
              <Award size={20} className="text-black md:hidden" />
              <Award size={24} className="text-black hidden md:block" />
            </div>
            <h3 className="text-amber-400 font-semibold mb-3 md:mb-4 tracking-wide text-xs md:text-sm">OUR MISSION</h3>
            <p className="text-gray-300 text-sm md:text-lg leading-relaxed">To create a Spirit-filled creative environment where worship is recorded, refined, and shared with the world; to train, collaborate, and inspire others to use their gifts for Kingdom impact.</p>
          </div>
        </div>
        <div className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-900/10 via-amber-800/20 to-amber-900/10 border border-amber-700/20 mb-12 md:mb-20 animate-fade-in-up">
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
              <div key={i} className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-black/30 hover:bg-amber-900/20 transition-colors duration-300 animate-zoom-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-lg md:rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-400 mb-3 md:mb-4">{item.icon}</div>
                <h4 className="text-white font-semibold text-sm md:text-base mb-1 md:mb-2">{item.label}</h4>
                <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center p-8 md:p-12 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-800/20 to-black border border-amber-700/30 animate-fade-in-up">
          <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 md:mb-6">
            <Mic2 size={32} className="text-black md:hidden" />
            <Mic2 size={40} className="text-black hidden md:block" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>Rabbi Light Shalom</h2>
          <p className="text-amber-400 text-sm md:text-base mb-4 md:mb-6">Founder & Lead Psalmist</p>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-4 md:mb-6 px-2">Rabbi Light Shalom is a spirit-filled psalmist, teacher, and prophetic worship leader. His ministry carries Heavenly Immortal Sounds — a divine frequency that transforms worship into encounter.</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['Prophetic Worship', 'OPÍFÈ Creator', 'Teacher', 'Revival Leader'].map((tag, i) => (
              <span key={i} className="px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-amber-900/30 border border-amber-800/40 text-amber-400 text-xs md:text-sm animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-20 text-center animate-fade-in-up">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4" style={{ fontFamily: 'Georgia, serif' }}>Our Team</h3>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10 px-2">A family of dedicated vocalists, instrumentalists, and ministers passionately committed to delivering excellence.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['Vocalists', 'Instrumentalists', 'Sound Engineers', 'Ministers'].map((role, i) => (
              <div key={i} className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-amber-900/10 border border-amber-900/20 animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <Users size={24} className="text-amber-500 mx-auto mb-2 md:mb-3" />
                <p className="text-white font-medium text-sm md:text-base">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

const MusicPage = () => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // FIXED CLOUDINARY URLs: raw/upload instead of video/upload
const tracks = [
  { 
    title: 'SACRED CHANT', 
    artist: 'RABBI LIGHT SHALOM', 
    url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446985/Heavenly%20Immortal%20Sounds/Music/SACRED_CHANT_k32gp8.mp3',
    type: 'Worship'
  },
  { 
    title: 'YAHWEH MAGENENU', 
    artist: 'RABBI LIGHT SHALOM', 
     url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446993/Heavenly%20Immortal%20Sounds/Music/YAHWEH_MAGENENU_jgzwte.mp3',
  },
  { 
    title: 'INTO YOU', 
    artist: 'RABBI LIGHT SHALOM', 
    url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446976/Heavenly%20Immortal%20Sounds/Music/INTO_YOU_xx0vos.mp3',
    type: 'Worship'
  },
  { 
    title: 'SO GREAT', 
    artist: 'RABBI LIGHT SHALOM', 
      url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446992/Heavenly%20Immortal%20Sounds/Music/SO_GREAT_sas0im.mp3',
    type: 'Worship'
  },
  { 
    title: 'HOW GREAT', 
    artist: 'RABBI LIGHT SHALOM', 
    url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446869/Heavenly%20Immortal%20Sounds/Music/HOW_GREAT_u6ulbh.mp3',
    type: 'Worship'
  },
  { 
    title: 'MY HEALER', 
    artist: 'RABBI LIGHT SHALOM', 
    url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446962/Heavenly%20Immortal%20Sounds/Music/My_healer_gdebip.mp3',
    type: 'Worship'
  },
  { 
    title: 'IKEDI', 
    artist: 'RABBI LIGHT SHALOM', 
    url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446963/Heavenly%20Immortal%20Sounds/Music/Ikedi_fhvaki.mp3',
    type: 'Worship'
  },
  { 
    title: 'IDIEBERE', 
    artist: 'RABBI LIGHT SHALOM', 
    url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446980/Heavenly%20Immortal%20Sounds/Music/qwa7f3e6pmji7ts8tlmq.mp3',
    type: 'Worship'
  },
  { 
    title: 'I PRAY ONE DAY', 
    artist: 'RABBI LIGHT SHALOM', 
    url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446865/Heavenly%20Immortal%20Sounds/Music/I_pray_one_day_cchxjk.mp3',
    type: 'Worship'
  },
  { 
    title: 'FIRE ME UP', 
    artist: 'RABBI LIGHT SHALOM', 
    url: 'https://res.cloudinary.com/dqhcroiw8/video/upload/v1764446995/Heavenly%20Immortal%20Sounds/Music/Lord_fire_me_up_dhvydi.mp3',
    type: 'Worship'
  }
];


  // Improved audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };
    
    const handleLoadedData = () => {
      setIsLoading(false);
      setError(null);
      if (audio.duration && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };

    const handleError = (e) => {
      console.error('Audio error:', e);
      setIsLoading(false);
      setError('Failed to load audio');
      setIsPlayingTrack(false);
    };

    const handleEnded = () => {
      setIsPlayingTrack(false);
      if (currentTrack < tracks.length - 1) {
        setTimeout(() => {
          setCurrentTrack(currentTrack + 1);
          setIsPlayingTrack(true);
        }, 1000);
      }
    };

    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('error', handleError);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [currentTrack, tracks.length]);

useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  setIsLoading(true);
  setError(null);
  setCurrentTime(0);
  
  const currentTrackUrl = tracks[currentTrack].url;
  
  // Set the audio source and load
  audio.src = currentTrackUrl;
  audio.load();
  
  // If should be playing, attempt to play
  if (isPlayingTrack) {
    const playAudio = async () => {
      try {
        await audio.play();
        setIsLoading(false);
      } catch (err) {
        console.error('Play failed:', err);
        setIsLoading(false);
        setError('Failed to play audio. Please check if the file exists.');
        setIsPlayingTrack(false);
      }
    };
    playAudio();
  } else {
    setIsLoading(false);
  }
}, [currentTrack, isPlayingTrack]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlayingTrack) {
        audio.pause();
        setIsPlayingTrack(false);
      } else {
        if (audio.currentTime >= audio.duration - 0.1) {
          audio.currentTime = 0;
        }
        await audio.play();
        setIsPlayingTrack(true);
        setError(null);
      }
    } catch (err) {
      console.error('Playback error:', err);
      setError('Failed to play audio. Please try again.');
      setIsPlayingTrack(false);
    }
  };

  const playTrack = async (index) => {
    if (index === currentTrack) {
      await togglePlay();
    } else {
      setCurrentTrack(index);
      setIsPlayingTrack(true);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (audio && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      audio.currentTime = percentage * duration;
    }
  };

  const skipForward = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
    }
  };

  const skipBackward = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <audio 
        ref={audioRef} 
        preload="metadata"
        onError={(e) => {
          console.error('Audio element error:', e);
          setError('Audio file not found or corrupted');
        }}
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Listen</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Our Music</h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-2">Every song is crafted with one purpose: to ignite worship and usher listeners into God's presence.</p>
        </div>

        {/* Main Player */}
        <div className="p-4 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-900/20 via-amber-800/10 to-amber-900/20 border border-amber-700/30 mb-8 md:mb-12 animate-fade-in-up">
          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-700/30 rounded-lg">
              <p className="text-red-400 text-sm text-center">{error}</p>
            </div>
          )}
          
          <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
            <button 
              onClick={togglePlay} 
              disabled={isLoading}
              className="w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center flex-shrink-0 hover:from-amber-400 hover:to-amber-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : isPlayingTrack ? (
                <>
                  <Pause size={28} className="text-black md:hidden" />
                  <Pause size={36} className="text-black hidden md:block" />
                </>
              ) : (
                <>
                  <Play size={28} className="text-black ml-1 md:hidden" />
                  <Play size={36} className="text-black ml-1 hidden md:block" />
                </>
              )}
            </button>
            
            <div className="min-w-0 flex-1">
              <p className="text-amber-400 text-xs md:text-sm mb-1">Now Playing</p>
              <h3 className="text-lg md:text-2xl font-bold text-white truncate">{tracks[currentTrack].title}</h3>
              <p className="text-gray-500 text-sm truncate">{tracks[currentTrack].artist}</p>
              <p className="text-gray-600 text-xs">{tracks[currentTrack].type}</p>
            </div>

            {/* Skip Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                onClick={skipBackward}
                disabled={currentTrack === 0}
                className="p-2 rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-800/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 20L9 12l10-8v16z"/>
                  <path d="M5 19V5"/>
                </svg>
              </button>
              
              <button 
                onClick={skipForward}
                disabled={currentTrack === tracks.length - 1}
                className="p-2 rounded-full bg-amber-900/30 text-amber-400 hover:bg-amber-800/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 4l10 8-10 8V4z"/>
                  <path d="M19 5v14"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div 
              className="h-1.5 md:h-2 bg-amber-900/30 rounded-full overflow-hidden cursor-pointer group"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-100 relative group-hover:from-amber-400 group-hover:to-amber-300"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
              </div>
            </div>
            
            <div className="flex justify-between text-gray-500 text-xs md:text-sm">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Track List */}
        <div className="space-y-3 md:space-y-4 mb-10 md:mb-16">
          {tracks.map((track, i) => (
            <div 
              key={i}
              className={`group flex items-center gap-3 md:gap-6 p-3 md:p-5 rounded-xl md:rounded-2xl bg-gradient-to-r from-amber-900/10 to-transparent border transition-all duration-300 cursor-pointer ${
                currentTrack === i 
                  ? isPlayingTrack 
                    ? 'border-amber-500/60 bg-amber-900/20 shadow-lg shadow-amber-500/10' 
                    : 'border-amber-500/40 bg-amber-900/20'
                  : 'border-amber-900/20 hover:border-amber-500/40 hover:bg-amber-900/20'
              } animate-fade-in-up`} 
              style={{ animationDelay: `${i * 50}ms` }} 
              onClick={() => playTrack(i)}
            >
              <button className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center hover:from-amber-400 hover:to-amber-500 transition-colors group-hover:scale-110 duration-300 flex-shrink-0 relative">
                {currentTrack === i && isPlayingTrack ? (
                  <Pause size={18} className="text-black" />
                ) : (
                  <Play size={18} className="text-black ml-0.5" />
                )}
                
                {/* Track number */}
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-700 text-white text-xs rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </button>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm md:text-lg truncate">{track.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm truncate">{track.artist}</p>
                <p className="text-gray-600 text-xs">{track.type}</p>
              </div>
              
              {currentTrack === i && isPlayingTrack && (
                <div className="flex items-center gap-1">
                  <span className="w-1 h-3 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-4 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-3 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              )}
              
              {currentTrack === i && isLoading && (
                <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
              )}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 animate-fade-in-up">
          {[
            'Original African-Hebrew worship songs', 
            'Live ministration recordings', 
            'Instrumental worship (OPÍFÈ)', 
            'Studio projects & collaborations'
          ].map((item, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-lg md:rounded-xl bg-amber-900/10 border border-amber-900/20 animate-zoom-in" 
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-amber-500 flex-shrink-0" />
              <span className="text-gray-300 text-xs md:text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

  const GalleryPage = () => (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Moments</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Gallery</h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-2">Step into our world through images capturing live worship ministrations and prophetic nights.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 animate-fade-in-up">
          {['All', 'Live Events', 'Studio', 'OPÍFÈ', 'Behind the Scenes'].map((cat, i) => (
            <button key={i} className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-300 text-xs md:text-sm font-medium ${i === 0 ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black' : 'border border-amber-600/40 text-amber-400 hover:bg-amber-600/20'} animate-zoom-in`} style={{ animationDelay: `${i * 100}ms` }}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {[
            { label: 'Live Worship Night', sub: 'Lagos 2024', gradient: 'from-amber-600 to-orange-700' },
            { label: 'Studio Recording', sub: 'Album Session', gradient: 'from-amber-700 to-yellow-600' },
            { label: 'OPÍFÈ Performance', sub: 'Prophetic Night', gradient: 'from-orange-600 to-amber-700' },
            { label: 'Team Rehearsal', sub: 'Weekly Practice', gradient: 'from-yellow-700 to-amber-600' },
            { label: 'Revival Meeting', sub: 'Abuja 2024', gradient: 'from-amber-800 to-orange-600' },
            { label: 'Church Service', sub: 'Guest Ministration', gradient: 'from-orange-700 to-yellow-700' }
          ].map((item, i) => (
            <div key={i} className={`group relative aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} overflow-hidden cursor-pointer animate-zoom-in`} style={{ animationDelay: `${i * 100}ms` }}>
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
          ))}
        </div>
      </div>
    </div>
  );

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  // Status for messages (JSX version — no TypeScript types)
  const [status, setStatus] = useState({
    type: '', // 'success' | 'error'
    message: ''
  });

  // API URL (fallback for development)
  const API_URL = import.meta.env.VITE_API_URL || 'https://heavenly-immortal-sounds-server.onrender.com/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when typing
    if (status.type === 'error') {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields' });
      setLoading(false);
      return;
    }

    if (formData.name.trim().length < 2) {
      setStatus({ type: 'error', message: 'Name must be at least 2 characters long' });
      setLoading(false);
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Please write a message with at least 10 characters' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully.'
        });

        // Reset form
        setFormData({ name: '', email: '', message: '' });

        // Hide after 10s
        setTimeout(() => {
          setStatus({ type: '', message: '' });
        }, 10000);
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        type: 'error',
        message:
          'Failed to send message. Please check your internet connection and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium uppercase">Connect</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-3 md:mt-4 mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Get In Touch</h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto px-2">We are open for church invitations, worship concerts, revivals, and Christian gatherings.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16">
          {/* Contact Information */}
          <div className="space-y-3 md:space-y-5">
            {[
              { icon: <PhoneCall size={20} />, label: 'Bookings & Enquiries', value: '08136511666', sub: 'Call/WhatsApp – Secretary', link: 'tel:+2348136511666' },
              { icon: <MapPin size={20} />, label: 'Our Address', value: 'No. 1 Mohammed Abu Street', sub: 'Okeira-Nla, Ajah, Lagos, Nigeria', link: 'https://maps.google.com/?q=No.1+Mohammed+Abu+Street+Okeira-Nla+Ajah+Lagos' },
              { icon: <Mail size={20} />, label: 'Email Us', value: 'info@heavenlyimmortalsounds.com', sub: 'We respond within 24 hours', link: 'mailto:info@heavenlyimmortalsounds.com' },
              { icon: <Clock size={20} />, label: 'Availability', value: 'Open for Bookings', sub: 'Available 24/7 for enquiries', link: null }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`flex gap-3 md:gap-5 p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-amber-900/15 to-transparent border border-amber-900/25 hover:border-amber-500/40 transition-all duration-300 animate-fade-in-left ${item.link ? 'cursor-pointer' : ''}`}
                style={{ animationDelay: `${i * 100}ms` }}
                onClick={() => item.link && window.open(item.link, item.link.startsWith('http') ? '_blank' : '_self')}
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-amber-900/30 flex items-center justify-center text-amber-500 flex-shrink-0">{item.icon}</div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs md:text-sm mb-0.5 md:mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm md:text-lg truncate">{item.value}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="p-5 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-amber-900/20 to-black border border-amber-800/30 animate-fade-in-right">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6" style={{ fontFamily: 'Georgia, serif' }}>Send Us a Message</h3>
            
            {/* Status Messages */}
            {status.message && (
              <div className={`mb-4 md:mb-6 p-4 rounded-lg border animate-fade-in-up ${
                status.type === 'success' 
                  ? 'bg-green-900/20 border-green-500/50 text-green-400' 
                  : 'bg-red-900/20 border-red-500/50 text-red-400'
              }`}>
                <div className="flex items-start gap-3">
                  {status.type === 'success' ? (
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                  <p className="text-sm leading-relaxed flex-1">{status.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
              <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <label htmlFor="name" className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2 block">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  required
                  minLength={2}
                  disabled={loading}
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg md:rounded-xl bg-black/50 border border-amber-900/30 text-white text-sm md:text-base placeholder-gray-600 focus:border-amber-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <label htmlFor="email" className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2 block">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email" 
                  required
                  disabled={loading}
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg md:rounded-xl bg-black/50 border border-amber-900/30 text-white text-sm md:text-base placeholder-gray-600 focus:border-amber-500 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                />
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <label htmlFor="message" className="text-gray-400 text-xs md:text-sm mb-1.5 md:mb-2 block">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, preferred dates, and any special requirements..." 
                  rows={5}
                  required
                  minLength={10}
                  disabled={loading}
                  className="w-full px-4 md:px-5 py-3 md:py-4 rounded-lg md:rounded-xl bg-black/50 border border-amber-900/30 text-white text-sm md:text-base placeholder-gray-600 focus:border-amber-500 focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed" 
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-sm md:text-base rounded-lg md:rounded-xl hover:from-amber-400 hover:to-amber-500 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 animate-fade-in-up disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-amber-500/30" 
                style={{ animationDelay: '600ms' }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-r from-amber-900/20 via-transparent to-amber-900/20 border border-amber-800/20 animate-fade-in-up">
          <p className="text-amber-400 tracking-widest text-xs font-medium mb-4 md:mb-6 uppercase">Follow Us on Social Media</p>
          <div className="flex justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            {[
              { Icon: Instagram, url: "https://www.instagram.com/theheavenlysounds/" },
              { Icon: Youtube, url: "/" },
              { Icon: Facebook, url: "https://www.facebook.com/heavenlyimmortalsound" }
            ].map(({ Icon, url }, i) => (
              <a 
                key={i} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-amber-600/40 text-amber-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-300 flex items-center justify-center animate-zoom-in" 
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Icon size={20} className="md:hidden" />
                <Icon size={24} className="hidden md:block" />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">@PstLightShalom • @HeavenlyImmortalSounds</p>
        </div>
      </div>
    </div>
  );
};

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