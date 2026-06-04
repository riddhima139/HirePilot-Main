export default function Features() {
  return (
    <section className="feat-sec">
      <div className="si">

        <div className="sh">
          <div className="eyebrow">Features</div>
          <h2 className="stitle">
            Powerful features for <em>real interview prep</em>
          </h2>
          <p className="sdesc">
            Everything you need to simulate, analyze, and improve your interview performance.
          </p>
        </div>

        <div className="feat-grid">

          <div className="fcard">
            <div className="fcard-body">
              <div className="fcard-ico fi-b">🎤</div>
              <h3>AI Mock Interviews</h3>
              <p>Practice with realistic AI-driven interview simulations tailored to your role.</p>
              <span className="fpill">Core</span>
            </div>
          </div>

          <div className="fcard">
            <div className="fcard-body">
              <div className="fcard-ico fi-i">🧠</div>
              <h3>Smart Feedback</h3>
              <p>Get instant feedback on your answers, confidence, and communication style.</p>
              <span className="fpill">AI Powered</span>
            </div>
          </div>

          <div className="fcard">
            <div className="fcard-body">
              <div className="fcard-ico fi-c">📊</div>
              <h3>Performance Analytics</h3>
              <p>Track your improvement with detailed analytics and scoring dashboards.</p>
              <span className="fpill">Insights</span>
            </div>
          </div>

          <div className="fcard">
            <div className="fcard-body">
              <div className="fcard-ico fi-o">⚡</div>
              <h3>Real-Time Coaching</h3>
              <p>Receive live suggestions and improvements while answering questions.</p>
              <span className="fpill">Live</span>
            </div>
          </div>

          <div className="fcard">
            <div className="fcard-body">
              <div className="fcard-ico fi-b">🎯</div>
              <h3>Role-Based Questions</h3>
              <p>Questions adapt based on your job role and experience level.</p>
              <span className="fpill">Adaptive</span>
            </div>
          </div>

          <div className="fcard">
            <div className="fcard-body">
              <div className="fcard-ico fi-i">🤖</div>
              <h3>AI Coach Chatbot</h3>
              <p>Ask questions and get guidance from your personal AI interview coach.</p>
              <span className="fpill">Assistant</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}