import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Building2,
  Home,
  Palette,
  User,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Star,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  MessageCircle,
  FileText,
  Eye,
  Handshake,
  ChevronLeft,
  ChevronRight as ChevRight
} from 'lucide-react'
import hero1 from './assets/hero.png'
import hero2 from './assets/Gold Modern Home Building Construction Logo.png'
import hero3 from './assets/Black White Modern Business Company Logo.png'
import hero4 from './assets/Black White Modern Greative Triangle Logo (1).png'
import founderVideo from './assets/Red inspirational Quotes video.mp4'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis
    gsap.registerPlugin(ScrollTrigger)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    ScrollTrigger.addEventListener('scroll', ScrollTrigger.update)
    gsap.ticker.add(() => {
      ScrollTrigger.update()
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ecosystem-card', {
        scrollTrigger: { trigger: '.ecosystem-section', start: 'top 80%' },
        y: 120, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out'
      })

      gsap.from('.section-title', {
        scrollTrigger: { trigger: '.section-title', start: 'top 85%' },
        y: 60, opacity: 0, duration: 1, ease: 'power3.out'
      })

      gsap.from('.flow-step', {
        scrollTrigger: { trigger: '.flow-section', start: 'top 75%' },
        y: 60, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      })

      gsap.from('.featured-content', {
        scrollTrigger: { trigger: '.featured-section', start: 'top 70%' },
        x: -100, opacity: 0, duration: 1.2, ease: 'power3.out'
      })

      gsap.from('.featured-image', {
        scrollTrigger: { trigger: '.featured-section', start: 'top 70%' },
        x: 100, opacity: 0, duration: 1.2, ease: 'power3.out'
      })

      gsap.from('.trust-card', {
        scrollTrigger: { trigger: '.trust-section', start: 'top 75%' },
        y: 80, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      })

      gsap.from('.investment-content', {
        scrollTrigger: { trigger: '.investment-section', start: 'top 70%' },
        y: 100, opacity: 0, duration: 1, ease: 'power3.out'
      })

      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: '.testimonials-section', start: 'top 75%' },
        y: 100, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out'
      })

      gsap.from('.cta-content', {
        scrollTrigger: { trigger: '.cta-section', start: 'top 70%' },
        scale: 0.9, opacity: 0, duration: 1, ease: 'power3.out'
      })
    })

    return () => ctx.revert()
  }, [])

  const ecosystemBrands = [
    { icon: Building2, name: 'Unique Spark Infra', tagline: 'We build premium real estate developments', cta: 'View Projects', color: '#D4AF37' },
    { icon: Home, name: 'Chandraprabha Realty', tagline: 'We handle buying, selling & advisory', cta: 'Explore Properties', color: '#C9A227' },
    { icon: Palette, name: 'QalaGriha', tagline: 'We transform spaces into luxury lifestyle', cta: 'View Designs', color: '#FFD700' },
    { icon: User, name: 'Nilesh Dubey', tagline: 'Vision behind the ecosystem', cta: 'View Profile', color: '#B8860B' },
    { icon: Award, name: 'Premium Homes', tagline: 'Luxury living spaces with world-class amenities', cta: 'View Collection', color: '#D4AF37' }
  ]

  const userFlowSteps = [
    { step: 1, title: 'Visit Homepage', desc: 'Understand ecosystem', icon: Home },
    { step: 2, title: 'Click Project', desc: 'Go to Unique Spark', icon: Building2 },
    { step: 3, title: 'Show Interest', desc: 'Move to Chandraprabha', icon: Users },
    { step: 4, title: 'Buy Property', desc: 'Lead captured', icon: Star },
    { step: 5, title: 'Want Design', desc: 'Move to QalaGriha', icon: Palette }
  ]

  const trustFeatures = [
    { icon: Award, title: '15+ Years Experience', desc: 'Decades of expertise in real estate development' },
    { icon: Users, title: '500+ Happy Families', desc: 'Trusted by hundreds of satisfied homeowners' },
    { icon: TrendingUp, title: 'End-to-End Ecosystem', desc: 'From development to design under one roof' },
    { icon: CheckCircle, title: 'Premium Service', desc: 'Uncompromising quality at every step' }
  ]

  const testimonials = [
    { name: 'Rajesh Sharma', role: 'Property Investor', text: 'The ecosystem approach is incredible. Bought a plot, got it designed and built - seamless experience!', rating: 5 },
    { name: 'Priya Patel', role: 'Homeowner', text: 'QalaGriha transformed our space into a masterpiece. The attention to detail is remarkable.', rating: 5 },
    { name: 'Amit Gupta', role: 'NRI Client', text: 'Managed everything remotely. Chandraprabha Realty made investing from abroad completely hassle-free.', rating: 5 }
  ]

  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home"><HeroCarousel /></section>
        <MarqueeCarouselShowcase />
        <FeaturedProject />
        <ProjectsShowcase />
        <section id="projects"><EcosystemSection brands={ecosystemBrands} /></section>
        <section id="realty"><ChandraprabhaSection /></section>
        <section id="qala"><QalaGrihaSection /></section>
        <section id="founder"><FounderSection /></section>
        <FlowSection steps={userFlowSteps} />
        <TrustSection features={trustFeatures} />
        <InvestmentSection />
        <TestimonialsSection testimonials={testimonials} />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Chandraprabha Realty', href: '#realty' },
    { name: 'QalaGriha', href: '#qala' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-icon"><Building2 size={28} /></span>
          <span className="logo-text">Unique Spark Infra</span>
        </a>

        <div className="navbar-menu">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">{item.name}</a>
          ))}
        </div>

        <div className="navbar-actions">
          <a href="#contact" className="nav-cta">
            <Phone size={16} />
            Book Consultation
          </a>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-menu-header">
            <span className="mobile-logo-text">Unique Spark Infra</span>
            <button className="mobile-close-btn" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="mobile-menu-items">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                {item.name}
                <ChevronRight size={20} />
              </a>
            ))}
          </div>
          <a href="#contact" className="mobile-cta-btn" onClick={() => setIsOpen(false)}>
            <Phone size={20} />Book Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState('next')

  const slides = [
    { id: 1, image: hero1, tagline: 'Premium Developments' },
    { id: 2, image: hero2, tagline: 'Build Excellence' },
    { id: 3, image: hero3, tagline: 'Realty Services' },
    { id: 4, image: hero4, tagline: 'Design Studio' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next')
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setDirection('next')
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }
  const prevSlide = () => {
    setDirection('prev')
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="hero-carousel-section">
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27611-large.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-particles">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }}></div>
        ))}
      </div>

      <div className="sparkle-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="sparkle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}>
            <Star size={8 + Math.random() * 8} />
          </div>
        ))}
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide
            const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
            const isNext = index === (currentSlide + 1) % slides.length

            return (
              <div
                key={slide.id}
                className={`carousel-slide ${isActive ? 'active' : ''} ${isPrev && direction === 'next' ? 'exit-left' : ''} ${isNext && direction === 'prev' ? 'exit-right' : ''}`}
              >
                <img src={slide.image} alt="" className="slide-image" />
                <div className="slide-glass-overlay"></div>
                <div className="slide-content-overlay">
                  <span className="slide-tagline">{slide.tagline}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="carousel-overlay-gradient"></div>

        <div className="hero-brand-overlay">
          <div className="brand-content">
            <h1 className="brand-title">Unique Spark Infra</h1>
            <p className="brand-tagline">Development • Sales • Design</p>
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={28} />
          </button>
          <div className="carousel-indicators">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentSlide ? 'next' : 'prev')
                  setCurrentSlide(index)
                }}
              />
            ))}
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="carousel-progress">
          <div className="progress-bar" style={{ '--progress': `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}

function MarqueeCarouselShowcase() {
  const sectionRef = useRef(null)
  const floatingRef = useRef([])
  const trackRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.marquee-header',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      )

      floatingRef.current.forEach((el, index) => {
        gsap.to(el, {
          y: -150 - (index * 50),
          rotation: index % 2 === 0 ? 15 : -15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        })
      })

      const updateCenterScale = () => {
        if (!trackRef.current) return;
        const items = trackRef.current.querySelectorAll('.marquee-item');
        const centerX = window.innerWidth / 2;

        items.forEach(item => {
          const rect = item.getBoundingClientRect();
          // Skip off-screen elements to save performance
          if (rect.right < 0 || rect.left > window.innerWidth) return;

          const itemCenter = rect.left + rect.width / 2;
          const dist = Math.abs(centerX - itemCenter);
          const maxDist = window.innerWidth / 2;

          // scale factor: center is 1.15, fades to 0.75 at edges
          let scale = 1.15 - (dist / maxDist) * 0.4;
          scale = Math.max(0.75, Math.min(1.15, scale));

          // opacity factor
          let opacity = 1 - (dist / maxDist) * 0.5;
          opacity = Math.max(0.4, Math.min(1, opacity));

          item.style.transform = `scale(${scale})`;
          item.style.opacity = opacity;
        });
      };

      gsap.ticker.add(updateCenterScale);

      // Cleanup
      return () => {
        gsap.ticker.remove(updateCenterScale);
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const carouselItems = [
    {
      src: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=800&q=80',
      title: 'Premium Architect 1'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Premium Architect 2'
    },

    {
      src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      title: 'Modern Residencies'
    },

    {
      src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80', // another interior/architecture
      title: 'Interior Masterpiece'
    }
  ];

  return (
    <section ref={sectionRef} className="marquee-carousel-section">
      <div className="sparkle-bg">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="sparkle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}></div>
        ))}
      </div>

      <img ref={el => floatingRef.current[0] = el} src={hero1} alt="" className="animated-floating-photo p1" />
      <img ref={el => floatingRef.current[1] = el} src={hero2} alt="" className="animated-floating-photo p2" />
      <img ref={el => floatingRef.current[2] = el} src={hero3} alt="" className="animated-floating-photo p3" />
      <img ref={el => floatingRef.current[3] = el} src={hero4} alt="" className="animated-floating-photo p4" />

      <div className="marquee-header">
        <span className="section-tag">Premium Showcase</span>
        <h2 className="section-title">Architectural Masterpieces</h2>
        <p className="section-subtitle">Experience luxury spaces designed to inspire</p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track" ref={trackRef}>
          {carouselItems.map((item, i) => (
            <div className="marquee-item" key={`m1-${i}`}>
              <img src={item.src} alt={item.title} />
              <div className="marquee-item-overlay">
                <h3 className="marquee-item-title">{item.title}</h3>
              </div>
              <div className="marquee-item-glow"></div>
            </div>
          ))}
          {carouselItems.map((item, i) => (
            <div className="marquee-item" key={`m2-${i}`}>
              <img src={item.src} alt={item.title} />
              <div className="marquee-item-overlay">
                <h3 className="marquee-item-title">{item.title}</h3>
              </div>
              <div className="marquee-item-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsShowcase() {
  const projects = [
    { id: 1, image: hero1, title: 'Sunrise Villas', location: 'Prime Location', price: '₹1.5 Cr', type: 'Luxury Villa' },
    { id: 2, image: hero2, title: 'Golden Heights', location: 'City Center', price: '₹2.5 Cr', type: 'Premium Apartment' },
    { id: 3, image: hero3, title: 'Royal Residency', location: 'Lake View', price: '₹3.2 Cr', type: 'Penthouse' },
    { id: 4, image: hero4, title: 'Diamond Towers', location: 'Business District', price: '₹1.8 Cr', type: 'Commercial' }
  ]

  return (
    <section className="projects-showcase-section">
      <div className="sparkle-bg">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="sparkle-dot" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
          }}></div>
        ))}
      </div>

      <div className="floating-images-left">
        <img src={hero1} alt="" className="float-img" />
        <img src={hero2} alt="" className="float-img" />
        <img src={hero3} alt="" className="float-img" />
      </div>
      <div className="floating-images-right">
        <img src={hero4} alt="" className="float-img" />
        <img src={hero3} alt="" className="float-img" />
        <img src={hero2} alt="" className="float-img" />
      </div>

      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Discover our premium collection of luxury properties</p>
        </div>

        <div className="projects-carousel-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ '--delay': `${index * 0.15}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-type">{project.type}</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-location"><MapPin size={14} /> {project.location}</div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-footer">
                  <span className="project-price">{project.price}</span>
                  <a href="#" className="project-link"><Eye size={16} /> View</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="showcase-cta">
          <a href="#" className="btn btn-primary">View All Projects<ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  )
}

function EcosystemSection({ brands }) {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const headerRef = useRef(null)
  const imagesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )

      gsap.fromTo(imagesRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3
        }
      )

      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.5
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        const forwardAmount = index * 50 + 20
        gsap.fromTo(card,
          { z: -100, scale: 0.95, opacity: 0.5 },
          {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1
            },
            z: forwardAmount,
            scale: 1,
            opacity: 1,
            ease: 'power1.out'
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardHover = (index, isEnter) => {
    gsap.to(cardsRef.current[index], {
      scale: 1.05,
      y: isEnter ? -10 : 0,
      boxShadow: isEnter
        ? '0 25px 50px rgba(212, 175, 55, 0.3)'
        : '0 10px 30px rgba(0, 0, 0, 0.3)',
      duration: 0.4,
      ease: 'power3.out'
    })
  }

  return (
    <section ref={sectionRef} className="ecosystem-section" id="ecosystem">
      <div className="ecosystem-bg-pattern"></div>
      <div className="ecosystem-floating-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
      <div className="ecosystem-photo-collage">
        <img ref={el => imagesRef.current[0] = el} src={hero1} alt="" className="collage-img c1" />
        <img ref={el => imagesRef.current[1] = el} src={hero2} alt="" className="collage-img c2" />
        <img ref={el => imagesRef.current[2] = el} src={hero3} alt="" className="collage-img c3" />
        <img ref={el => imagesRef.current[3] = el} src={hero4} alt="" className="collage-img c4" />
      </div>
      <div className="container">
        <div ref={headerRef} className="section-header">
          <span className="section-tag">Our Ecosystem</span>
          <h2 className="section-title">
            <span className="title-line">Unique Spark Infra</span>
          </h2>
          <p className="section-subtitle">
            Development • Sales • Design — Complete ecosystem under one vision
          </p>
        </div>

        <div className="ecosystem-showcase">
          <div className="ecosystem-image-grid">
            <div className="ecosystem-img-card img-main">
              <img src={hero1} alt="Unique Spark Infra Projects" />
              <div className="img-overlay">
                <h3>Premium Developments</h3>
                <p>Luxury villas & apartments</p>
              </div>
            </div>
            <div className="ecosystem-img-card">
              <img src={hero2} alt="Construction Excellence" />
              <div className="img-overlay">
                <h3>Build Excellence</h3>
              </div>
            </div>
            <div className="ecosystem-img-card">
              <img src={hero3} alt="Realty Services" />
              <div className="img-overlay">
                <h3>Realty</h3>
              </div>
            </div>
            <div className="ecosystem-img-card">
              <img src={hero4} alt="Design Studio" />
              <div className="img-overlay">
                <h3>QalaGriha</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="ecosystem-grid">
          {brands.map((brand, index) => (
            <div
              ref={el => cardsRef.current[index] = el}
              key={brand.name}
              className="ecosystem-card"
              style={{ '--accent-color': brand.color, '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <div className="card-shine"></div>
              <div className="card-glow"></div>
              <div className="card-border-animation"></div>
              <div className="card-icon">
                <brand.icon size={40} />
                <div className="card-icon-ring"></div>
              </div>
              <h3 className="card-title">{brand.name}</h3>
              <p className="card-tagline">{brand.tagline}</p>
              <div className="card-divider"></div>
              <a href="#" className="card-cta">{brand.cta}<ArrowRight size={18} /></a>
            </div>
          ))}
        </div>

        <div className="ecosystem-stats">
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Premium Brands</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Vision</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Possibilities</span>
          </div>
        </div>

        <div className="animated-content-section">
          <div className="animated-banner">
            <div className="banner-content">
              <span className="banner-text">Premium Quality</span>
              <span className="banner-dot"></span>
              <span className="banner-text">Trusted by 500+ Families</span>
              <span className="banner-dot"></span>
              <span className="banner-text">15+ Years Experience</span>
              <span className="banner-dot"></span>
              <span className="banner-text">Premium Quality</span>
              <span className="banner-dot"></span>
              <span className="banner-text">Trusted by 500+ Families</span>
              <span className="banner-dot"></span>
              <span className="banner-text">15+ Years Experience</span>
              <span className="banner-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlowSection({ steps }) {
  return (
    <section className="flow-section">
      <div className="flow-floating-imgs">
        <img src={hero1} alt="" className="flow-float-img" />
        <img src={hero2} alt="" className="flow-float-img" />
        <img src={hero3} alt="" className="flow-float-img" />
        <img src={hero4} alt="" className="flow-float-img" />
      </div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">1 User → Multiple Revenue Streams</h2>
          <p className="section-subtitle">Experience the seamless ecosystem journey</p>
        </div>

        <div className="flow-container">
          <div className="flow-line"></div>
          {steps.map((step, index) => (
            <div key={step.step} className="flow-wrapper">
              <div className="flow-step">
                <div className="step-number">{step.step}</div>
                <div className="step-icon"><step.icon size={32} /></div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="flow-arrow"><ArrowRight size={24} /></div>}
            </div>
          ))}
        </div>

        <div className="flow-result">
          <Handshake size={40} />
          <h3>Result = 1 User × 3 Revenue Streams</h3>
          <p>Development + Sales + Design = Complete Ecosystem</p>
        </div>
      </div>
    </section>
  )
}

function FeaturedProject() {
  return (
    <section className="featured-section" id="infra">
      <div className="floating-grid-bg">
        <div className="grid-img g1"><img src={hero1} alt="" /></div>
        <div className="grid-img g2"><img src={hero2} alt="" /></div>
        <div className="grid-img g3"><img src={hero3} alt="" /></div>
        <div className="grid-img g4"><img src={hero4} alt="" /></div>
        <div className="grid-img g5"><img src={hero1} alt="" /></div>
        <div className="grid-img g6"><img src={hero2} alt="" /></div>
      </div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Projects</span>
          <h2 className="section-title">Our Premium Properties</h2>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            <img src={hero1} alt="Project 1" />
            <img src={hero2} alt="Project 2" />
            <img src={hero3} alt="Project 3" />
            <img src={hero4} alt="Project 4" />
            <img src={hero1} alt="Project 1" />
            <img src={hero2} alt="Project 2" />
            <img src={hero3} alt="Project 3" />
            <img src={hero4} alt="Project 4" />
          </div>
        </div>

        <div className="featured-projects-grid">
          <div className="featured-project-card">
            <img src={hero1} alt="Sunrise Villas" />
            <div className="project-card-overlay">
              <span className="project-badge">Luxury Villa</span>
              <h3>Sunrise Villas</h3>
              <p className="project-price">₹1.5 Cr</p>
              <p className="project-specs">4 BHK • 3000 Sq.ft</p>
            </div>
          </div>
          <div className="featured-project-card">
            <img src={hero2} alt="Golden Heights" />
            <div className="project-card-overlay">
              <span className="project-badge">Premium Apartment</span>
              <h3>Golden Heights</h3>
              <p className="project-price">₹2.5 Cr</p>
              <p className="project-specs">3 BHK • 2500 Sq.ft</p>
            </div>
          </div>
          <div className="featured-project-card">
            <img src={hero3} alt="Royal Residency" />
            <div className="project-card-overlay">
              <span className="project-badge">Penthouse</span>
              <h3>Royal Residency</h3>
              <p className="project-price">₹3.2 Cr</p>
              <p className="project-specs">5 BHK • 4500 Sq.ft</p>
            </div>
          </div>
          <div className="featured-project-card">
            <img src={hero4} alt="Diamond Towers" />
            <div className="project-card-overlay">
              <span className="project-badge">Commercial</span>
              <h3>Diamond Towers</h3>
              <p className="project-price">₹1.8 Cr</p>
              <p className="project-specs">Retail • Office Space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChandraprabhaSection() {
  return (
    <section className="brand-section chandraprabha-section">
      <div className="brand-bg-pattern"></div>
      <div className="container">
        <div className="brand-header">
          <span className="section-tag">Realty Partner</span>
          <h2 className="section-title">Chandraprabha Realty</h2>
          <p className="section-subtitle">Your trusted partner for buying, selling & advisory services</p>
        </div>
        <div className="brand-content-grid">
          <div className="brand-content-left">
            <div className="brand-features">
              <div className="brand-feature">
                <div className="feature-icon"><CheckCircle size={24} /></div>
                <div className="feature-text">
                  <h4>Property Buying</h4>
                  <p>Expert guidance through every step of your property purchase journey</p>
                </div>
              </div>
              <div className="brand-feature">
                <div className="feature-icon"><TrendingUp size={24} /></div>
                <div className="feature-text">
                  <h4>Property Selling</h4>
                  <p>Maximize your property value with our strategic marketing approach</p>
                </div>
              </div>
              <div className="brand-feature">
                <div className="feature-icon"><FileText size={24} /></div>
                <div className="feature-text">
                  <h4>Advisory Services</h4>
                  <p>Professional advice on investment opportunities and market trends</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">Explore Properties<ArrowRight size={18} /></a>
          </div>
          <div className="brand-visual">
            <div className="brand-gallery">
              <img src={hero1} alt="Property Portfolio" className="gallery-main-img" />
              <div className="gallery-overlay">
                <img src={hero2} alt="Construction" />
                <img src={hero3} alt="Realty" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QalaGrihaSection() {
  return (
    <section className="brand-section qala-section">
      <div className="brand-bg-pattern"></div>
      <div className="container">
        <div className="brand-header">
          <span className="section-tag">Design Studio</span>
          <h2 className="section-title">QalaGriha</h2>
          <p className="section-subtitle">Transforming spaces into luxury lifestyles through innovative design</p>
        </div>
        <div className="brand-content-grid reverse">
          <div className="brand-visual">
            <div className="brand-gallery qala-gallery">
              <div className="gallery-stack">
                <img src={hero4} alt="QalaGriha Design" className="stack-img-1" />
                <img src={hero2} alt="Architecture" className="stack-img-2" />
                <img src={hero3} alt="Interior" className="stack-img-3" />
              </div>
            </div>
          </div>
          <div className="brand-content-left">
            <div className="brand-features">
              <div className="brand-feature">
                <div className="feature-icon"><Palette size={24} /></div>
                <div className="feature-text">
                  <h4>Interior Design</h4>
                  <p>Stunning interiors that reflect your personality and style</p>
                </div>
              </div>
              <div className="brand-feature">
                <div className="feature-icon"><Building2 size={24} /></div>
                <div className="feature-text">
                  <h4>Architecture</h4>
                  <p>Modern architectural solutions for residential and commercial spaces</p>
                </div>
              </div>
              <div className="brand-feature">
                <div className="feature-icon"><Star size={24} /></div>
                <div className="feature-text">
                  <h4>Luxury Finishing</h4>
                  <p>Premium materials and exquisite attention to detail</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">View Designs<ArrowRight size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
      )

      const textElements = contentRef.current.querySelectorAll('.founder-animate-line')
      gsap.fromTo(textElements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.3
        }
      )

      const stats = contentRef.current.querySelectorAll('.founder-stat-item')
      gsap.fromTo(stats,
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.8
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        scale: 1.15,
        ease: 'none'
      })

      gsap.to('.founder-bg-shape', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        x: 100,
        y: -50,
        ease: 'none'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleImageHover = (isEnter) => {
    gsap.to(imageRef.current, {
      scale: isEnter ? 1.05 : 1,
      rotateY: isEnter ? 5 : 0,
      rotateX: isEnter ? -5 : 0,
      boxShadow: isEnter
        ? '0 30px 60px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.3)'
        : '0 20px 40px rgba(0, 0, 0, 0.4)',
      duration: 0.5,
      ease: 'power3.out'
    })
  }

  return (
    <section ref={sectionRef} className="founder-showcase-section">
      <div className="founder-showcase-bg">
        <div className="founder-bg-shape shape-1"></div>
        <div className="founder-bg-shape shape-2"></div>
      </div>

      <div className="founder-showcase-container">
        <div
          className="founder-image-wrapper"
          ref={imageRef}
          onMouseEnter={() => handleImageHover(true)}
          onMouseLeave={() => handleImageHover(false)}
        >
          <img src={hero2} alt="Nilesh Dubey - Founder" className="founder-main-image" />
          <div className="founder-image-glow"></div>
          <div className="founder-image-border"></div>
        </div>

        <div ref={contentRef} className="founder-content">
          <span className="founder-label founder-animate-line">Visionary Leader</span>

          <h2 className="founder-name-text founder-animate-line">Nilesh Dubey</h2>

          <p className="founder-title founder-animate-line">Founder & Managing Director</p>

          <div className="founder-divider founder-animate-line"></div>

          <p className="founder-story founder-animate-line">
            With over 15 years of excellence in real estate, I've built more than structures—
            I've created homes and legacies for over 500 families. Our ecosystem approach
            ensures every client receives end-to-end excellence from development to design.
          </p>

          <p className="founder-quote founder-animate-line">
            "We don't just build properties; we craft experiences that stand the test of time."
          </p>

          <div className="founder-stats">
            <div className="founder-stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="founder-stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Families</span>
            </div>
            <div className="founder-stat-item">
              <span className="stat-number">₹200+</span>
              <span className="stat-label">Crore</span>
            </div>
          </div>

          <button className="founder-cta-btn founder-animate-line">
            Connect With Nilesh
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

function TrustSection({ features }) {
  return (
    <section className="trust-section">
      <div className="trust-bg-pattern"></div>
      <div className="trust-gallery-bg">
        <img src={hero1} alt="" className="tg-img t1" />
        <img src={hero2} alt="" className="tg-img t2" />
        <img src={hero3} alt="" className="tg-img t3" />
        <img src={hero4} alt="" className="tg-img t4" />
      </div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Built on Trust, Driven by Excellence</h2>
        </div>

        <div className="trust-grid">
          {features.map((feature) => (
            <div key={feature.title} className="trust-card">
              <div className="trust-icon"><feature.icon size={32} /></div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <div className="trust-card-bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InvestmentSection() {
  return (
    <section className="investment-section" id="investment">
      <div className="investment-floating-imgs">
        <img src={hero1} alt="" className="investment-float-img" />
        <img src={hero2} alt="" className="investment-float-img" />
        <img src={hero3} alt="" className="investment-float-img" />
        <img src={hero4} alt="" className="investment-float-img" />
      </div>
      <div className="container">
        <div className="investment-grid">
          <div className="investment-visual">
            <div className="investment-graphic">
              <img src={hero1} alt="Investment" className="investment-bg-img" />
              <div className="investment-ring ring-1"></div>
              <div className="investment-ring ring-2"></div>
              <div className="investment-ring ring-3"></div>
              <div className="investment-center"><TrendingUp size={60} /></div>
            </div>
          </div>

          <div className="investment-content">
            <span className="section-tag">Investment Opportunities</span>
            <h2 className="section-title">Partner with Unique Spark Infra</h2>
            <p className="section-subtitle">
              Join hands with us for JV opportunities, co-development projects, and high-yield investments.
            </p>

            <div className="investment-benefits">
              <div className="investment-benefit">
                <div className="benefit-icon"><TrendingUp size={24} /></div>
                <div className="benefit-info">
                  <h4>Guaranteed Returns</h4>
                  <p>Attractive ROI on all investment opportunities</p>
                </div>
              </div>
              <div className="investment-benefit">
                <div className="benefit-icon"><Building2 size={24} /></div>
                <div className="benefit-info">
                  <h4>Premium Projects</h4>
                  <p>Hand-picked high-value developments</p>
                </div>
              </div>
              <div className="investment-benefit">
                <div className="benefit-icon"><Users size={24} /></div>
                <div className="benefit-info">
                  <h4>Expert Management</h4>
                  <p>End-to-end project handling by experts</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary investment-cta">Invest Now<ArrowRight size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection({ testimonials }) {
  return (
    <section className="testimonials-section">
      <div className="testimonials-bg"></div>
      <div className="testimonial-floating-imgs">
        <img src={hero1} alt="" className="tf-img" />
        <img src={hero2} alt="" className="tf-img" />
        <img src={hero3} alt="" className="tf-img" />
        <img src={hero4} alt="" className="tf-img" />
      </div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-floating-imgs">
        <img src={hero1} alt="" className="cta-float-img" />
        <img src={hero2} alt="" className="cta-float-img" />
        <img src={hero3} alt="" className="cta-float-img" />
        <img src={hero4} alt="" className="cta-float-img" />
      </div>
      <div className="cta-bg">
        <div className="cta-gradient"></div>
        <div className="cta-particles"></div>
      </div>

      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Space?</h2>
          <p>Book a free consultation with our experts and take the first step towards your dream property.</p>

          <div className="cta-buttons">
            <a href="tel:+919876543210" className="btn btn-white"><Phone size={20} />Call Now</a>
            <a href="https://wa.me/919876543210" className="btn btn-whatsapp"><MessageCircle size={20} />WhatsApp</a>
          </div>

          <div className="cta-form">
            <h3>Send us a message</h3>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Your Query"></textarea>
              <button type="submit" className="btn btn-primary">Submit<ArrowRight size={18} /></button>
            </form>
          </div>

          <div className="cta-contact">
            <div className="contact-item"><Phone size={18} /><span>+91 98765 43210</span></div>
            <div className="contact-item"><Mail size={18} /><span>info@dubaiecosystem.com</span></div>
            <div className="contact-item"><MapPin size={18} /><span>Dubai, UAE</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Unique Spark Infra</h3>
            <p>Your complete real estate solution - Development, Sales, Design, all under one roof.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#">Unique Spark Infra</a>
            <a href="#">Chandraprabha Realty</a>
            <a href="#">QalaGriha</a>
            <a href="#">Founder Profile</a>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <a href="#">Buy Property</a>
            <a href="#">Sell Property</a>
            <a href="#">Interior Design</a>
            <a href="#">Investment</a>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="footer-contact-item"><Phone size={16} /><span>+91 98765 43210</span></div>
            <div className="footer-contact-item"><Mail size={16} /><span>info@dubaiecosystem.com</span></div>
            <div className="footer-contact-item"><MapPin size={16} /><span>Dubai, UAE</span></div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Unique Spark Infra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default App
