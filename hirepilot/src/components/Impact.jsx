export default function Impact() {
  return (
    <section className="impact-sec">
      <div className="si">

        <div className="sh">
          <div className="eyebrow">Expected Outcome & Impact</div>
          <h2 className="stitle">
            Real impact for <em>real people</em>
          </h2>
          <p className="sdesc">
            Helping candidates grow, companies hire smarter, and making prep accessible.
          </p>
        </div>

        <div className="impact-grid">

          {/* CARD 1 */}
          <div className="icard">
            <img 
              className="icard-img"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
              alt="Students"
            />
            <div className="icard-body">
              <span className="ibadge ib-b">Students</span>
              <h3>Better Preparation</h3>
              <p>Improves employability and interview confidence — especially for students without access to expensive coaching. Levels the playing field for Tier 2 & 3 city students across India.</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="icard">
            <img 
              className="icard-img"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
              alt="Companies"
            />
            <div className="icard-body">
              <span className="ibadge ib-i">Companies</span>
              <h3>Smarter Hiring</h3>
              <p>Companies can automatically evaluate candidate communication skills before HR rounds — reducing hiring time, cost, and unconscious bias in recruitment.</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="icard">
            <img 
              className="icard-img"
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
              alt="Economy"
            />
            <div className="icard-body">
              <span className="ibadge ib-c">Economy</span>
              <h3>Accessible Prep</h3>
              <p>Eliminates the need for expensive coaching services costing ₹5,000–₹50,000/month. Makes world-class personalized preparation free and accessible to millions.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}