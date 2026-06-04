export default function Tech() {
  return (
    <section className="tech-sec">
      <div className="si">

        <div className="tech-inner">

          {/* LEFT */}
          <div>
            <div className="eyebrow">Technical Approach</div>

            <h2 className="stitle">
              Built with a <em>serious</em> stack.
            </h2>

            <p className="sdesc" style={{textAlign:"left"}}>
              Every component chosen for speed, accuracy, and the ability to ship in  without compromising quality.
            </p>

            <div className="tech-pills">

              <span className="tpill">⚛️ React.js</span>
              <span className="tpill">🎨 Tailwind CSS</span>
              <span className="tpill">🐍 Python FastAPI</span>
              <span className="tpill">🎤 OpenAI Whisper</span>
              <span className="tpill">👁️ OpenCV</span>
              <span className="tpill">🤖 LLM Chatbot</span>
              <span className="tpill">🧠 NLP Analysis</span>

            </div>
          </div>

          {/* RIGHT */}
          <div className="code-box">

            <div className="code-top">
              <div className="cdot" style={{background:"#FF5F56"}}></div>
              <div className="cdot" style={{background:"#FFBD2E"}}></div>
              <div className="cdot" style={{background:"#27C93F"}}></div>
              <div className="cfile">hirepilot_workflow.py</div>
            </div>

            <div className="code-body">

  <div>
    <span className="cf">user</span>
    <span className="cw">.select_role(</span>
    <span className="cs">"Software Engineer"</span>
    <span className="cw">)</span>
  </div>

  <div>
    <span className="cf">aria</span>
    <span className="cw">.generate_question()</span>
  </div>

  <div>
    <span className="cv">audio</span>
    <span className="cw"> → whisper.transcribe()</span>
  </div>

  <div>
    <span className="cv">face</span>
    <span className="cw"> → opencv.detect_emotion()</span>
  </div>

  <div>
    <span className="cv">text</span>
    <span className="cw"> → nlp.score_quality()</span>
  </div>

  <div>
    <span className="cf">aria</span>
    <span className="cw">.generate_followup(</span>
    <span className="cv">context</span>
    <span className="cw">)</span>
  </div>

  <div>
    <span className="cv">dashboard</span>
    <span className="cw">.render_report()</span>
  </div>

  <div>
    <span className="cv">coach</span>
    <span className="cw">.give_suggestions()</span>
  </div>

</div>

  
  
          </div>

        </div>

      </div>
    </section>
  );
}