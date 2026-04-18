import React, { Suspense, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
// Using native Spline web component for no-build robustness
import { motion } from 'framer-motion';

// Reusable animation components
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);


  // Auto-scroll chat body seamlessly
  const chatBodyRef = React.useRef(null);
  React.useEffect(() => {
    if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if(!input.trim()) return;
    
    const newMsgs = [...messages, { sender: 'user', text: input }];
    setMessages(newMsgs);
    setInput("");

    // Simulate AI thinking and logic mapping
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let reply = "I'm just a simulated demo bot right now! Please email Sandena at sandena.umesh@gmail.com for serious inquiries.";
      
      if(lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("matlab")) {
        reply = "Sandena specializes in MATLAB, technical water treatment, and data visualization tools like Excel!";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("reach")) {
        reply = "You can immediately reach him directly at sandena.umesh@gmail.com or via his LinkedIn perfectly attached on the left.";
      } else if (lowerInput.includes("vision") || lowerInput.includes("goal") || lowerInput.includes("why")) {
        reply = "His core vision is to blend science, sustainability, and dynamic design to radically impact industrial operations.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        reply = "Hello there! How can I help you learn more about Sandena today?";
      }
      
      setMessages([...newMsgs, { sender: 'bot', text: reply }]);
    }, 800);
  };

  return (
    <div className="embedded-chat">
      <div className="chat-header">
        <h4>AI Assistant</h4>
      </div>
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((m, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={`chat-bubble ${m.sender}`}
          >
            {m.text}
          </motion.div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSend}>
        <input 
          type="text" 
          placeholder="Ask me anything..." 
          value={input} 
          onChange={e => setInput(e.target.value)} 
        />
        <button type="submit">↑</button>
      </form>
    </div>
  );
};

function App() {
  useEffect(() => {
    const loader = document.getElementById('global-loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 500); // 500ms delay ensures UI is fully painted and animations are primed
    }
  }, []);

  return (
    <>
      <div className="canvas-container">
        <spline-viewer 
          url="https://prod.spline.design/G1r1y9HMQ7PjJ0BP/scene.splinecode"
          events-target="global"
          style={{ width: '100%', height: '100vh', position: 'absolute' }}
        ></spline-viewer>
      </div>

      <nav className="navbar">
        <div className="logo">S. Umesh</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Story</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#vision">Vision</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="content-overlay">
        
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="hero-title"
          >
            Sandena<br/><span>Umesh.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="hero-subtitle">
              🎓 <strong>Chemical Engineering Student</strong> | Creative Problem Solver | Aspiring Innovator
            </p>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <FadeIn>
            <h2 className="section-title">My Story</h2>
            <p className="text-content">
              I’m a motivated Chemical Engineering student passionate about blending <strong>science, sustainability, and design</strong>. With hands-on experience in laboratory techniques, process simulation, and digital creativity, I aim to bring fresh ideas to industrial operations and environmental solutions.
            </p>
            <p className="text-content">
              I believe engineering isn’t just about equations — it’s about <strong>creating impact</strong>. Whether it’s treating wastewater with innovative solvents or designing visuals for a university club, I thrive at the intersection of technical precision and creative expression.
            </p>
          </FadeIn>
        </section>

        {/* WHAT I DO (SKILLS) */}
        <section id="skills">
          <FadeIn>
            <h2 className="section-title">What I Do</h2>
          </FadeIn>
          <div className="skills-grid">
            <FadeIn delay={0.1}>
              <div className="skill-card">
                <h3>🔬 Engineering & Research</h3>
                <ul>
                  <li>Preparation & analysis of synthetic metal ion solutions</li>
                  <li>Water treatment and filtration projects</li>
                  <li>Car wash wastewater treatment using Deep Eutectic Solvent (DES)</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="skill-card">
                <h3>💻 Technical Skills</h3>
                <ul>
                  <li>MATLAB (numerical analysis & visualization)</li>
                  <li>MS Excel for data handling</li>
                  <li>Canva & Adobe Creative Suite for design</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="skill-card">
                <h3>🧪 Lab Expertise</h3>
                <ul>
                  <li>UV-Vis spectroscopy, titration, solution standardization</li>
                  <li>Metal ion extraction & synthetic water preparation</li>
                  <li>Strong focus on chemical safety</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="skill-card">
                <h3>🎨 Creative & Leadership</h3>
                <ul>
                  <li>Graphic Designer for University Club</li>
                  <li>Tech Team Member in Chemical Engineering</li>
                  <li>Event Volunteer at College Fest</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* COURSEWORK & VISION */}
        <section id="vision">
          <FadeIn>
            <h2 className="section-title">Coursework Highlights</h2>
            <div className="tags-container">
              <span className="tag">Material & Energy Balance</span>
              <span className="tag">Particle Technology & Fluid Operations</span>
              <span className="tag">Inorganic Chemical Technology</span>
              <span className="tag">Process Instrumentation</span>
              <span className="tag">Numerical Methods</span>
            </div>
            
            <div className="tags-container" style={{marginBottom: "1rem"}}>
                <span className="tag" style={{borderColor: "#ccc", color:"#ccc"}}>🌍 English</span>
                <span className="tag" style={{borderColor: "#ccc", color:"#ccc"}}>हिंदी Hindi</span>
                <span className="tag" style={{borderColor: "#ccc", color:"#ccc"}}>తెలుగు Telugu</span>
            </div>

            <div className="vision-card">
              <p>
                "To contribute to sustainable chemical engineering solutions while building a personal brand that reflects both my technical expertise and creative edge."
              </p>
            </div>
          </FadeIn>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" style={{ textAlign: "center", padding: "8rem 5%" }}>
          <FadeIn>
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-grid">
              
              <div className="contact-card">
                <p className="text-content" style={{textAlign: "center", marginBottom: "2rem", width: "100%", margin: "0 auto 2rem"}}>
                  I'm always open to discussing new chemical engineering projects, creative collaborations, or career opportunities!
                </p>
                <div className="contact-links">
                  <a href="mailto:sandena.umesh@gmail.com" className="contact-btn">✉️ Email Me: sandena.umesh@gmail.com </a>
                  <a href="https://www.linkedin.com/in/sanden-umesh-012a50382" target="_blank" rel="noreferrer" className="contact-btn">💼 LinkedIn : Sandena Umesh </a>
                </div>
              </div>

              <Chatbot />
              
            </div>
          </FadeIn>
        </section>
        
        {/* Contact/Footer spacing */}
        <section style={{minHeight: "30vh", alignItems: "center", paddingTop: "5rem"}}>
            <p style={{color: "#666"}}>&copy; 2026 Sandena Umesh. All rights reserved.</p>
        </section>

      </main>
    </>
  );
}

const rootWrapper = document.getElementById('root');
if(rootWrapper) {
    const root = createRoot(rootWrapper);
    root.render(<App />);
}
