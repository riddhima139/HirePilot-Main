export default function Who() {
  return (
    <section className="who-sec">
      <div className="si">

        <div className="who-inner">

          {/* LEFT IMAGE */}
          <div className="who-img-col">
            <img
              className="who-main-img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Users"
            />

            <div className="who-overlay-card">
              <div className="woc-title">Success Rate by Group</div>

              <div className="mini-bar">
                <div className="mini-fill" style={{width:"88%"}}></div>
              </div>
              <div className="mini-lbl">
                <span>Students</span><span>88%</span>
              </div>

              <div className="mini-bar">
                <div className="mini-fill" style={{width:"74%"}}></div>
              </div>
              <div className="mini-lbl">
                <span>Graduates</span><span>74%</span>
              </div>

              <div className="mini-bar">
                <div className="mini-fill" style={{width:"91%"}}></div>
              </div>
              <div className="mini-lbl">
                <span>Switchers</span><span>91%</span>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="eyebrow">Who It's For</div>

            <h2 className="stitle" style={{textAlign:"left"}}>
              Built for every stage of your <em>career.</em>
            </h2>

            <p style={{color:"var(--muted)", fontSize:"0.9rem", lineHeight:"1.75"}}>
              Whether you're a fresher or a professional switching careers — HirePilot prepares you like a real coach.
            </p>

            <ul className="who-list">

              <li className="who-item">
                <div className="wico wi-b">🎓</div>
                <div>
                  <h5>College Students</h5>
                  <p>Prepare for campus placements and interviews.</p>
                </div>
              </li>

              <li className="who-item">
                <div className="wico wi-i">💼</div>
                <div>
                  <h5>Fresh Graduates</h5>
                  <p>Build confidence entering the job market.</p>
                </div>
              </li>

              <li className="who-item">
                <div className="wico wi-c">🔄</div>
                <div>
                  <h5>Career Switchers</h5>
                  <p>Transition into new roles with preparation.</p>
                </div>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}