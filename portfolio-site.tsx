import { useState, useRef, useEffect } from 'react';

// Heart-shaped petal with gradient
function HeartPetal({ color, colorLight, size, rotation, style, onMouseDown, onDoubleClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      style={{...style, transition: 'transform 0.3s ease'}} 
      onMouseDown={onMouseDown} 
      onDoubleClick={onDoubleClick} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute select-none touch-none"
    >
      <svg 
        viewBox="0 0 60 66" 
        style={{ 
          width: size, 
          height: size * 1.1, 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.3s ease',
          animation: hovered ? 'wiggle 0.4s ease-in-out' : 'none'
        }}
      >
        <defs>
          <radialGradient id={`hg-${color.replace('#','')}`} cx="50%" cy="80%" r="70%">
            <stop offset="0%" stopColor={colorLight} />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
        </defs>
        <path
          d="M30 62 Q20 58 12 48 Q4 38 4 28 Q4 18 12 12 Q20 6 30 10 Q40 6 48 12 Q56 18 56 28 Q56 38 48 48 Q40 58 30 62Z"
          fill={`url(#hg-${color.replace('#','')})`}
        />
      </svg>
    </div>
  );
}

// Pointed tulip-like petal
function PointedPetal({ color, colorLight, size, rotation, style, onMouseDown, onDoubleClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      style={{...style, transition: 'transform 0.3s ease'}} 
      onMouseDown={onMouseDown} 
      onDoubleClick={onDoubleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute select-none touch-none"
    >
      <svg 
        viewBox="0 0 42 96" 
        style={{ 
          width: size * 0.7, 
          height: size * 1.6, 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.3s ease',
          animation: hovered ? 'wiggle 0.4s ease-in-out' : 'none'
        }}
      >
        <defs>
          <linearGradient id={`pg-${color.replace('#','')}`} x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor={colorLight} />
            <stop offset="60%" stopColor={color} />
          </linearGradient>
        </defs>
        <path
          d="M21 2 Q28 15 34 30 Q40 45 40 60 Q40 75 34 84 Q28 92 21 94 Q14 92 8 84 Q2 75 2 60 Q2 45 8 30 Q14 15 21 2Z"
          fill={`url(#pg-${color.replace('#','')})`}
        />
      </svg>
    </div>
  );
}

// Round open petal
function RoundPetal({ color, colorLight, size, rotation, style, onMouseDown, onDoubleClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      style={{...style, transition: 'transform 0.3s ease'}} 
      onMouseDown={onMouseDown} 
      onDoubleClick={onDoubleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute select-none touch-none"
    >
      <svg 
        viewBox="0 0 60 63" 
        style={{ 
          width: size, 
          height: size * 1.05, 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.3s ease',
          animation: hovered ? 'wiggle 0.4s ease-in-out' : 'none'
        }}
      >
        <defs>
          <radialGradient id={`rg-${color.replace('#','')}`} cx="50%" cy="90%" r="80%">
            <stop offset="0%" stopColor={colorLight} />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
        </defs>
        <path
          d="M30 60 Q18 58 10 48 Q2 38 2 28 Q2 14 16 6 Q30 0 44 6 Q58 14 58 28 Q58 38 50 48 Q42 58 30 60Z"
          fill={`url(#rg-${color.replace('#','')})`}
        />
      </svg>
    </div>
  );
}

// Small teardrop petal
function SmallPetal({ color, colorLight, size, rotation, style, onMouseDown, onDoubleClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      style={{...style, transition: 'transform 0.3s ease'}} 
      onMouseDown={onMouseDown} 
      onDoubleClick={onDoubleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute select-none touch-none"
    >
      <svg 
        viewBox="0 0 36 60" 
        style={{ 
          width: size * 0.6, 
          height: size, 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.3s ease',
          animation: hovered ? 'wiggle 0.4s ease-in-out' : 'none'
        }}
      >
        <defs>
          <radialGradient id={`sg-${color.replace('#','')}-${size}`} cx="50%" cy="70%" r="60%">
            <stop offset="0%" stopColor={colorLight} />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
        </defs>
        <path
          d="M18 56 Q8 50 4 38 Q0 26 6 14 Q12 4 18 2 Q24 4 30 14 Q36 26 32 38 Q28 50 18 56Z"
          fill={`url(#sg-${color.replace('#','')}-${size})`}
        />
      </svg>
    </div>
  );
}

// Detailed leaf with veins
function Leaf({ color, size, rotation, style, onMouseDown, onDoubleClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      style={{...style, transition: 'transform 0.3s ease'}} 
      onMouseDown={onMouseDown} 
      onDoubleClick={onDoubleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute select-none touch-none"
    >
      <svg 
        viewBox="0 0 100 45" 
        style={{ 
          width: size, 
          height: size * 0.45, 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.3s ease',
          animation: hovered ? 'wiggle 0.4s ease-in-out' : 'none'
        }}
      >
        <defs>
          <linearGradient id={`lg-${size}`} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#1B8A4E" />
            <stop offset="50%" stopColor={color} />
            <stop offset="100%" stopColor="#1B8A4E" />
          </linearGradient>
        </defs>
        <path d="M2 22 Q15 8 30 5 Q50 2 70 5 Q85 8 98 22 Q85 36 70 40 Q50 43 30 40 Q15 36 2 22Z" fill={`url(#lg-${size})`} />
        <path d="M8 22 L92 22" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" />
        <path d="M25 22 Q32 14 42 10" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
        <path d="M25 22 Q32 30 42 34" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
        <path d="M50 22 Q57 14 67 11" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none" />
        <path d="M50 22 Q57 30 67 33" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none" />
        <path d="M75 22 Q80 16 88 14" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
        <path d="M75 22 Q80 28 88 30" stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

// Rounder leaf
function RoundLeaf({ color, size, rotation, style, onMouseDown, onDoubleClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
      style={{...style, transition: 'transform 0.3s ease'}} 
      onMouseDown={onMouseDown} 
      onDoubleClick={onDoubleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute select-none touch-none"
    >
      <svg 
        viewBox="0 0 70 49" 
        style={{ 
          width: size, 
          height: size * 0.7, 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.3s ease',
          animation: hovered ? 'wiggle 0.4s ease-in-out' : 'none'
        }}
      >
        <defs>
          <radialGradient id={`rlg-${size}`} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#1B8A4E" />
          </radialGradient>
        </defs>
        <path d="M4 24 Q4 10 20 5 Q35 2 50 5 Q66 10 66 24 Q66 38 50 44 Q35 47 20 44 Q4 38 4 24Z" fill={`url(#rlg-${size})`} />
        <path d="M10 24 L60 24" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" />
        <path d="M22 24 Q28 17 36 14" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
        <path d="M22 24 Q28 31 36 34" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" />
        <path d="M42 24 Q48 17 55 15" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
        <path d="M42 24 Q48 31 55 33" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

export default function JujuPortfolio() {
  const [positions, setPositions] = useState({});
  const [rotations, setRotations] = useState({});
  const [dragging, setDragging] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [animationComplete, setAnimationComplete] = useState({});
  const heroRef = useRef(null);

  const pieces = [
    // Petals and leaves scattered across the hero, will fall IN FRONT of text
    { id: 'p1', type: 'heart', color: '#C41E6A', colorLight: '#FFE4EC', size: 75, rotation: -20, final: { x: 50, y: 80 }, animClass: 'fall-1' },
    { id: 'p2', type: 'pointed', color: '#E84A1B', colorLight: '#FFCC4D', size: 70, rotation: 15, final: { x: 480, y: 50 }, animClass: 'fall-2' },
    { id: 'p3', type: 'round', color: '#D63B8E', colorLight: '#FFEEF4', size: 60, rotation: 25, final: { x: 380, y: 320 }, animClass: 'fall-3' },
    { id: 'p4', type: 'heart', color: '#8B2D87', colorLight: '#F5E6F5', size: 55, rotation: -10, final: { x: 550, y: 180 }, animClass: 'fall-4' },
    { id: 'p5', type: 'small', color: '#E85A8F', colorLight: '#FFF0F5', size: 50, rotation: 35, final: { x: 150, y: 380 }, animClass: 'fall-5' },
    { id: 'p6', type: 'round', color: '#F5C842', colorLight: '#FFFDE7', size: 80, rotation: -5, final: { x: 520, y: 350 }, animClass: 'fall-6' },
    { id: 'p7', type: 'pointed', color: '#D84A7C', colorLight: '#FFE8F0', size: 55, rotation: -30, final: { x: 280, y: 30 }, animClass: 'fall-7' },
    { id: 'p8', type: 'small', color: '#B83280', colorLight: '#FCE4F2', size: 40, rotation: 45, final: { x: 420, y: 420 }, animClass: 'fall-8' },
    { id: 'l1', type: 'leaf', color: '#22B573', size: 100, rotation: -15, final: { x: 30, y: 300 }, animClass: 'fall-9' },
    { id: 'l2', type: 'roundleaf', color: '#2ECC71', size: 70, rotation: 20, final: { x: 320, y: 400 }, animClass: 'fall-10' },
    { id: 'l3', type: 'leaf', color: '#27AE60', size: 80, rotation: 10, final: { x: 180, y: 180 }, animClass: 'fall-11' },
    { id: 'l4', type: 'roundleaf', color: '#22B573', size: 55, rotation: -25, final: { x: 580, y: 280 }, animClass: 'fall-12' },
    { id: 'l5', type: 'leaf', color: '#2ECC71', size: 65, rotation: 35, final: { x: 450, y: 140 }, animClass: 'fall-13' },
    { id: 'l6', type: 'roundleaf', color: '#27AE60', size: 50, rotation: -40, final: { x: 100, y: 450 }, animClass: 'fall-14' },
  ];

  const projects = [
    { name: 'Influencer CRM', tags: ['Product Design', 'B2B SaaS'], desc: 'End-to-end CRM feature for managing influencer gifting relationships, post tracking, and engagement metrics.', color: '#22B573' },
    { name: 'Speed Match NYC', tags: ['UX Research', 'Mobile App'], desc: 'Speed dating app connecting NYC singles through curated matching experiences.', color: '#D63B8E' },
    { name: 'Scan2Sell', tags: ['App Redesign', 'UI/UX'], desc: 'Interface overhaul for a product scanning app, improving user flow and reducing friction.', color: '#E84A1B' },
    { name: 'Favors', tags: ['Product Design', 'Social'], desc: 'Community platform enabling neighbors to exchange favors and build local connections.', color: '#F5C842' },
  ];

  useEffect(() => {
    // Set initial positions at final spots (animation handles the visual fall)
    const init = {};
    const initRot = {};
    pieces.forEach(p => { 
      init[p.id] = p.final; 
      initRot[p.id] = p.rotation;
    });
    setPositions(init);
    setRotations(initRot);
    
    // Mark animations complete after they finish
    const timers = pieces.map((p, i) => {
      const delay = 100 + i * 200;
      const duration = 2800;
      return setTimeout(() => {
        setAnimationComplete(prev => ({ ...prev, [p.id]: true }));
      }, delay + duration);
    });
    
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleMouseDown = (e, id) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setDragging(id);
    // Force animation complete when user starts dragging
    setAnimationComplete(prev => ({ ...prev, [id]: true }));
  };

  const handleDoubleClick = (e, id) => {
    e.preventDefault();
    // Rotate by 45 degrees on double click
    setRotations(prev => ({ ...prev, [id]: (prev[id] || 0) + 45 }));
  };

  const handleMouseMove = (e) => {
    if (!dragging || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const newX = e.clientX - rect.left - dragOffset.x;
    const newY = e.clientY - rect.top - dragOffset.y;
    setPositions(prev => ({ ...prev, [dragging]: { x: newX, y: newY } }));
  };

  const handleMouseUp = () => setDragging(null);

  const renderPiece = (piece, index) => {
    const pos = positions[piece.id] || piece.final;
    const rot = rotations[piece.id] ?? piece.rotation;
    const isComplete = animationComplete[piece.id];
    const isDraggingThis = dragging === piece.id;
    
    const style = {
      left: isComplete || isDraggingThis ? pos.x : piece.final.x,
      top: isComplete || isDraggingThis ? pos.y : piece.final.y,
      zIndex: isDraggingThis ? 100 : 30,
      cursor: isDraggingThis ? 'grabbing' : 'grab',
      animation: !isComplete && !isDraggingThis ? `fall 2.8s ease-out ${0.1 + index * 0.2}s forwards` : 'none',
    };

    const props = { 
      size: piece.size, 
      rotation: rot, 
      style, 
      onMouseDown: (e) => handleMouseDown(e, piece.id),
      onDoubleClick: (e) => handleDoubleClick(e, piece.id),
    };

    switch (piece.type) {
      case 'heart': return <HeartPetal key={piece.id} {...props} color={piece.color} colorLight={piece.colorLight} />;
      case 'pointed': return <PointedPetal key={piece.id} {...props} color={piece.color} colorLight={piece.colorLight} />;
      case 'round': return <RoundPetal key={piece.id} {...props} color={piece.color} colorLight={piece.colorLight} />;
      case 'small': return <SmallPetal key={piece.id} {...props} color={piece.color} colorLight={piece.colorLight} />;
      case 'leaf': return <Leaf key={piece.id} {...props} color={piece.color} />;
      case 'roundleaf': return <RoundLeaf key={piece.id} {...props} color={piece.color} />;
      default: return null;
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: '#FAF9F6' }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <nav className="fixed top-0 left-0 right-0 px-8 md:px-16 py-6 flex justify-between items-center z-50" style={{ backgroundColor: 'rgba(250,249,246,0.9)', backdropFilter: 'blur(12px)' }}>
        <span className="text-stone-800 font-medium">Juju</span>
        <div className="flex gap-8 text-sm text-stone-400">
          <a href="#work" className="hover:text-stone-700 transition-colors">Work</a>
          <a href="#about" className="hover:text-stone-700 transition-colors">About</a>
          <a href="mailto:fu.shih@northeastern.edu" className="hover:text-stone-700 transition-colors">Contact</a>
        </div>
      </nav>

      <section ref={heroRef} className="relative min-h-screen flex items-center px-8 md:px-16 overflow-hidden">
        {pieces.map((p, i) => renderPiece(p, i))}

        <div className="relative z-10 max-w-xl pt-20">
          <p className="text-stone-400 text-sm mb-4">Hi, I'm Juju</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 leading-[1.1] tracking-tight mb-6">
            Product Designer<br />
            <span className="text-stone-400">you can count on</span>
          </h1>
          <p className="text-stone-500 leading-relaxed mb-8 max-w-md">
            I blend design thinking with technical fluency to ship products users love. Currently designing at Magnuson Ventures.
          </p>
          <a href="mailto:fu.shih@northeastern.edu" className="inline-flex items-center gap-2 bg-stone-800 text-white px-5 py-2.5 rounded-full text-sm hover:bg-stone-700 transition-colors">
            Get in touch
          </a>
        </div>

        <div className="absolute bottom-8 left-8 md:left-16 flex items-center gap-2 text-stone-300 text-sm z-10">
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          Scroll to see work
        </div>
      </section>

      <section id="work" className="px-8 md:px-16 py-24">
        <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-3">Selected Work</h2>
        <p className="text-stone-400 text-sm mb-12 max-w-md">Projects where I led design from research to shipped product.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all cursor-pointer">
              <div className="h-48 md:h-56" style={{ backgroundColor: `${project.color}12` }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-14 h-14 rounded-xl opacity-50" style={{ backgroundColor: project.color }} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: `${project.color}15`, color: project.color }}>{tag}</span>
                  ))}
                </div>
                <h3 className="text-lg font-medium text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">{project.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-8 md:px-16 py-24 bg-stone-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-8">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-stone-500 leading-relaxed">
              <p>I hold a <span className="text-stone-700">BFA from Parsons School of Design</span> and am completing my <span className="text-stone-700">MS in Information Systems at Northeastern</span>.</p>
              <p>At Magnuson Ventures, I conduct UX audits, design features, and ship products. I can prototype in Figma, then build it in React.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-stone-600">Based in Oakland, CA</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'React', 'Python', 'SQL', 'User Research', 'Prototyping'].map((skill, i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white text-stone-500 border border-stone-200">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-8 md:px-16 py-12 border-t border-stone-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-stone-400 text-sm mb-1">Let's work together</p>
            <a href="mailto:fu.shih@northeastern.edu" className="text-stone-800 hover:text-stone-500 transition-colors">fu.shih@northeastern.edu</a>
          </div>
          <div className="flex gap-6 text-sm text-stone-400">
            <a href="https://linkedin.com/in/shihjufu" target="_blank" className="hover:text-stone-600 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-stone-600 transition-colors">Resume</a>
          </div>
        </div>
        <p className="mt-12 text-stone-300 text-sm italic text-center">Great design is always hidden in plain sight.</p>
      </footer>

      <style>{`
        @keyframes fall {
          0% {
            opacity: 0;
            transform: translateY(-100vh) translateX(0px) rotate(0deg);
          }
          15% {
            opacity: 1;
          }
          30% {
            transform: translateY(-50vh) translateX(25px) rotate(35deg);
          }
          55% {
            transform: translateY(-25vh) translateX(-15px) rotate(-25deg);
          }
          80% {
            transform: translateY(-8vh) translateX(10px) rotate(15deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
          75% { transform: rotate(-4deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
