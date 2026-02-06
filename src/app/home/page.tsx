'use client';

import React, { useState } from 'react';
import { Zap, Star, Ticket, MapPin, Calendar, Menu, X, ArrowRight, Trophy, Mic2, Heart, Disc } from 'lucide-react';

const HeritageBall = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "OTA Runway",
      theme: "Ancestral Opulence",
      description: "Bring it in a look that screams royalty from your lineage. Gold, velvet, and heavy fabrics required.",
      prize: "$1,000"
    },
    {
      title: "Femme Queen Realness",
      theme: "Matriarchs",
      description: "Pay homage to the icons who paved the way. 70s, 80s, or 90s vintage execution.",
      prize: "$500 + Trophy"
    },
    {
      title: "Vogue Fem",
      theme: "Battle for Legacy",
      description: "Soft and Cunt vs. Dramatics. Prepare for a battle. No prop restrictions.",
      prize: "$1,500"
    },
    {
      title: "Best Dressed",
      theme: "Gilded Glamour",
      description: "You don't have to walk to serve. The crowd is watching.",
      prize: "Trophy + Bottle"
    },
    {
      title: "Face",
      theme: "Portrait",
      description: "Oval, structure, beauty. Frame your face like a museum masterpiece.",
      prize: "$750"
    }
  ];

  const judges = [
    { name: "Mother Tasha", house: "LaBeija", alias: "The Legend" },
    { name: "Icon Papi", house: "Balenciaga", alias: "The Blueprint" },
    { name: "Prince", house: "Miyake-Mugler", alias: "The Moment" }
  ];

  const ticketTiers = [
    { name: "Early Bird", price: "$35", status: "Sold Out", color: "#71717a" },
    { name: "General Admission", price: "$50", status: "Selling Fast", color: "#3b82f6" },
    { name: "VIP Tables", price: "$500", status: "Limited", color: "#d946ef" }
  ];

  return (
    <div className="app-container">
      <style>{`
        :root {
          --fuchsia: #d946ef;
          --blue: #3b82f6;
          --black: #000000;
          --white: #ffffff;
          --zinc-900: #18181b;
          --zinc-800: #27272a;
          --zinc-700: #3f3f46;
          --zinc-500: #71717a;
          --zinc-400: #a1a1aa;
        }

        .app-container {
          min-height: 100vh;
          background-color: var(--black);
          color: var(--white);
          font-family: system-ui, -apple-system, sans-serif;
          overflow-x: hidden;
          position: relative;
        }

        /* Background Effects */
        .bg-glow {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .glow-1 {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: rgba(217, 70, 239, 0.1);
          border-radius: 50%;
          filter: blur(120px);
        }
        .glow-2 {
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          filter: blur(120px);
        }

        /* Navigation */
        nav {
          position: fixed;
          width: 100%;
          z-index: 50;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
        }
        .nav-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }
        .logo-icon {
          width: 2rem;
          height: 2rem;
          background: linear-gradient(to top right, var(--fuchsia), var(--blue));
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-style: italic;
          color: black;
        }
        .logo-text {
          font-size: 1.25rem;
          font-weight: 900;
          font-style: italic;
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: inherit;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          transition: color 0.3s;
        }
        .nav-links a:hover { color: var(--fuchsia); }
        .btn-outline {
          padding: 0.5rem 1.5rem;
          border: 1px solid white;
          transition: all 0.3s;
        }
        .btn-outline:hover {
          background: white;
          color: black;
          transform: skewX(-12deg);
        }

        /* Hero Section */
        header {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 5rem;
          text-align: center;
        }
        .hero-badge {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .badge {
          padding: 0.25rem 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-family: monospace;
        }
        .hero-title-container {
          position: relative;
          margin-bottom: 2rem;
        }
        h1 {
          font-size: clamp(4rem, 15vw, 10rem);
          font-weight: 900;
          font-style: italic;
          letter-spacing: -0.05em;
          line-height: 1;
          margin: 0;
          text-transform: uppercase;
        }
        .title-main { position: relative; z-index: 10; mix-blend-mode: overlay; }
        .title-bg {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 100%;
          color: transparent;
          background: linear-gradient(to right, #c026d3, #2563eb);
          -webkit-background-clip: text;
          background-clip: text;
          opacity: 0.5;
          filter: blur(4px);
          z-index: 0;
        }

        /* Marquee */
        .marquee-container {
          background: var(--fuchsia);
          padding: 0.75rem 0;
          overflow: hidden;
          white-space: nowrap;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          transform: rotate(1deg) scale(1.1);
          position: relative;
          z-index: 20;
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-text {
          color: black;
          font-weight: 900;
          font-style: italic;
          font-size: 1.25rem;
          margin: 0 2rem;
          text-transform: uppercase;
        }

        /* Categories */
        .section-padding { padding: 8rem 1.5rem; }
        .container { max-width: 1200px; margin: 0 auto; }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .section-title {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.05em;
          margin: 0;
        }
        .grid-categories {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 1024px) {
          .grid-categories { grid-template-columns: 5fr 7fr; }
        }
        .cat-item {
          padding: 1.5rem;
          border-left: 4px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: all 0.3s;
        }
        .cat-item.active {
          background: rgba(255, 255, 255, 0.1);
          border-left-color: var(--fuchsia);
        }
        .cat-display {
          background: linear-gradient(to bottom right, #111827, #000);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem;
          position: relative;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .prize-tag {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--blue);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }

        /* Tickets */
        .ticket-row {
          background: rgba(24, 24, 27, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 2rem;
          margin-bottom: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: border-color 0.3s;
        }
        .ticket-row:hover { border-color: rgba(255, 255, 255, 0.4); }
        .btn-purchase {
          padding: 0.75rem 2rem;
          background: white;
          color: black;
          font-weight: 700;
          border: none;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
        }
        .btn-purchase:hover:not(:disabled) {
          background: var(--fuchsia);
          color: white;
          transform: skewX(-12deg);
        }
        .btn-purchase:disabled {
          background: #27272a;
          color: #71717a;
          cursor: not-allowed;
        }

        /* Utility */
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-4 { gap: 1rem; }
        .text-fuchsia { color: var(--fuchsia); }
        .text-blue { color: var(--blue); }
      `}</style>

      <div className="bg-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
      </div>

      <nav>
        <div className="nav-content">
          <div className="logo">
            <div className="logo-icon">H</div>
            <span className="logo-text">HERITAGE<span style={{color: 'var(--blue)'}}>BALL</span></span>
          </div>
          
          <div className="nav-links">
            <a href="#lineup">Lineup</a>
            <a href="#categories">Categories</a>
            <a href="#tickets" className="btn-outline">Secure Entry</a>
          </div>
        </div>
      </nav>

      <header>
        <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="hero-badge">
            <span className="badge" style={{color: 'var(--fuchsia)'}}>VOL. IV</span>
            <span className="badge" style={{color: 'var(--blue)'}}>NYC • 2026</span>
          </div>
          
          <div className="hero-title-container">
            <h1 className="title-main">HERITAGE</h1>
            <h1 className="title-bg">HERITAGE</h1>
          </div>

          <p style={{fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase', maxWidth: '800px', margin: '0 auto 3rem'}}>
            The category is <span style={{background: 'var(--fuchsia)', padding: '0 0.5rem'}}>Survival</span>. 
            The category is <span style={{background: 'var(--blue)', padding: '0 0.5rem'}}>Future</span>.
          </p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', width: '100%', maxWidth: '500px'}}>
            <div style={{background: 'rgba(255,255,255,0.05)', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{textAlign: 'left'}}>
                <div style={{fontSize: '0.7rem', color: '#aaa', fontPadding: 'monospace'}}>DATE</div>
                <div style={{fontWeight: 700}}>JAN 28, 2026</div>
              </div>
              <Calendar size={20} color="var(--fuchsia)" />
            </div>
            <div style={{background: 'rgba(255,255,255,0.05)', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div style={{textAlign: 'left'}}>
                <div style={{fontSize: '0.7rem', color: '#aaa', fontPadding: 'monospace'}}>LOCATION</div>
                <div style={{fontWeight: 700}}>CRYSTAL HALL</div>
              </div>
              <MapPin size={20} color="var(--blue)" />
            </div>
          </div>
        </div>
      </header>

      <div className="marquee-container">
        <div className="animate-scroll">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="marquee-text">• 10s Across The Board • Don't Chop • Serve It •</span>
          ))}
          {[...Array(10)].map((_, i) => (
            <span key={i + 10} className="marquee-text">• 10s Across The Board • Don't Chop • Serve It •</span>
          ))}
        </div>
      </div>

      <section id="categories" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The <span className="text-fuchsia">Categories</span></h2>
            <div style={{fontFamily: 'monospace', color: '#888', fontSize: '0.8rem'}}>/// PREPARE YOUR EFFECT</div>
          </div>

          <div className="grid-categories">
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              {categories.map((cat, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`cat-item ${activeTab === idx ? 'active' : ''}`}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h3 style={{margin: 0, textTransform: 'uppercase', color: activeTab === idx ? 'white' : '#666'}}>{cat.title}</h3>
                    {activeTab === idx && <Zap size={18} color="var(--fuchsia)" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="cat-display">
              <div style={{position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1}}>
                <Trophy size={120} style={{transform: 'rotate(15deg)'}} />
              </div>
              
              <div style={{position: 'relative', zIndex: 10}}>
                <span className="prize-tag">Prize: {categories[activeTab].prize}</span>
                <h3 style={{fontSize: '2.5rem', fontStyle: 'italic', margin: '0 0 1rem', textTransform: 'uppercase'}}>"{categories[activeTab].theme}"</h3>
                <div style={{width: '60px', height: '4px', background: 'var(--fuchsia)', marginBottom: '2rem'}}></div>
                <p style={{fontSize: '1.2rem', color: '#ccc', lineHeight: 1.6, maxWidth: '500px'}}>{categories[activeTab].description}</p>
              </div>

              <div style={{marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#666', fontFamily: 'monospace'}}>
                <div style={{width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%'}}></div>
                REGISTRATION OPEN
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lineup" style={{background: 'white', color: 'black', padding: '6rem 1.5rem'}}>
        <div className="container">
          <div style={{borderBottom: '4px solid black', paddingBottom: '1rem', marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
            <h2 className="section-title" style={{fontSize: '4rem'}}>The Panel</h2>
            <Star size={40} color="var(--fuchsia)" />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
            {judges.map((judge, idx) => (
              <div key={idx} style={{borderBottom: '2px solid black', paddingBottom: '1.5rem'}}>
                <div style={{aspectRatio: '1', background: 'black', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyCenter: 'center', position: 'relative', overflow: 'hidden'}}>
                  <span style={{fontSize: '8rem', fontWeight: 900, color: 'rgba(255,255,255,0.05)'}}>{idx + 1}</span>
                </div>
                <h3 style={{fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: '0 0 0.5rem'}}>{judge.name}</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase'}}>
                  <span>{judge.house}</span>
                  <span style={{background: 'black', color: 'white', padding: '0 0.4rem'}}>{judge.alias}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', borderTop: '2px solid #eee', paddingTop: '3rem'}}>
             <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                <div style={{padding: '1rem', background: 'black', color: 'white', borderRadius: '50%'}}><Mic2 size={32} /></div>
                <div style={{textAlign: 'left'}}>
                  <div style={{fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase'}}>Commentator</div>
                  <div style={{fontSize: '1.8rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase'}}>Kevin JZ Prodigy</div>
                </div>
             </div>
             <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
                <div style={{padding: '1rem', background: 'black', color: 'white', borderRadius: '50%'}}><Disc size={32} /></div>
                <div style={{textAlign: 'left'}}>
                  <div style={{fontSize: '0.7rem', fontWeight: 700, color: '#888', textTransform: 'uppercase'}}>The Beats</div>
                  <div style={{fontSize: '1.8rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase'}}>Byrell The Great</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section id="tickets" className="section-padding" style={{textAlign: 'center'}}>
        <div className="container" style={{maxWidth: '800px'}}>
          <h2 className="section-title" style={{fontSize: '4rem', marginBottom: '1rem'}}>Access Granted</h2>
          <p style={{color: '#888', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem', marginBottom: '4rem'}}>Select your tier. No refunds. No drama.</p>

          <div>
            {ticketTiers.map((ticket, i) => (
              <div key={i} className="ticket-row">
                <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
                  <Ticket size={32} color={ticket.color} />
                  <div style={{textAlign: 'left'}}>
                    <h3 style={{margin: 0, textTransform: 'uppercase', fontSize: '1.5rem'}}>{ticket.name}</h3>
                    <div style={{fontSize: '0.6rem', fontFamily: 'monospace', color: '#666'}}>{ticket.status}</div>
                  </div>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
                  <span style={{fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', opacity: ticket.status === 'Sold Out' ? 0.3 : 1}}>
                    {ticket.price}
                  </span>
                  <button className="btn-purchase" disabled={ticket.status === 'Sold Out'}>
                    {ticket.status === 'Sold Out' ? 'Closed' : 'Purchase'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{padding: '4rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center'}}>
        <div className="logo-text" style={{fontSize: '2rem', marginBottom: '2rem'}}>
          HERITAGE<span style={{color: 'var(--blue)'}}>BALL</span>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', fontSize: '0.8rem', color: '#666', textTransform: 'uppercase'}}>
          <a href="#" style={{color: 'inherit', textDecoration: 'none'}}>Instagram</a>
          <a href="#" style={{color: 'inherit', textDecoration: 'none'}}>Facebook</a>
          <a href="#" style={{color: 'inherit', textDecoration: 'none'}}>Email</a>
        </div>
        <div style={{fontSize: '0.7rem', color: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'}}>
          NYC BALLROOM COALITION <Heart size={12} color="#500" />
        </div>
      </footer>
    </div>
  );
};

export default HeritageBall;