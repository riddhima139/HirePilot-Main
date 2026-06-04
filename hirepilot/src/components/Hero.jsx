import { useEffect, useRef } from "react";

export default function Hero() {
  const waveformRef = useRef(null);

  useEffect(() => {
    const wv = waveformRef.current;

    for (let i = 0; i < 30; i++) {
      const b = document.createElement("div");
      b.className = "wb";

      const h = Math.random() * 16 + 4;

      b.style.cssText = `--h:${h}px;--d:${0.4 + Math.random() * 0.7}s;height:4px;animation-delay:${Math.random() * 0.4}s`;

      wv.appendChild(b);
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      <div className="hero-inner">

        {/* LEFT */}
        <div>
          <div className="hero-badge">
            <div className="bp"><div className="bp-in"></div></div>
            AI-Powered Interview Prep
          </div>

          <h1>
            Ace every interview<br/>
            with your personal<br/>
            <span className="grad">AI Copilot.</span>
          </h1>

          <p className="hero-sub">
            HirePilot simulates real interviews and analyzes your speech, facial expressions, and confidence in real-time — then coaches you to land the job you deserve.
          </p>

          <div className="hero-acts">
            <a href="#cta" className="btn-blue">🚀 Start Mock Interview</a>
            <a href="#how" className="btn-ghost">How it works ↓</a>
          </div>

          <div className="hero-stats">
            <div className="hst"><div className="hst-v">360°</div><div className="hst-l">Analysis</div></div>
            <div className="hst"><div className="hst-v">Live</div><div className="hst-l">AI Feedback</div></div>
            <div className="hst"><div className="hst-v">10+</div><div className="hst-l">Job Roles</div></div>
            
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-vis">

          <div className="ftag ft1">
            <span style={{fontSize:"1.15rem"}}>🎙️</span>
            <div>
              <div className="ft-lbl">Speech Analysis</div>
              <div className="ft-sub">AI Listening…</div>
            </div>
          </div>

          <div className="ftag ft2">
            <div className="sring">
              <div className="sring-in">87%</div>
            </div>
            <div>
              <div className="ft-lbl">Confidence Score</div>
              <div className="ft-sub">Strong performance</div>
            </div>
          </div>

          <div className="hero-card">
            <img
              className="hc-img"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
              alt="Interview"
            />
            <div className="hc-overlay"></div>

            <div className="hc-body">
              <div className="hc-top">
                <div className="ai-badge">
                  <div className="ai-dot"></div>
                  Aria · AI Interviewer
                </div>

                <div className="score-row">
                  <span className="sc gn">Clarity 92%</span>
                  <span className="sc am">Depth 74%</span>
                </div>
              </div>

              <div className="waveform" ref={waveformRef}></div>

              <div className="hc-q">
                "Can you explain how you'd design a scalable distributed system and the trade-offs between consistency and availability?"
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}