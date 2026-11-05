import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MSc in Sustainable Business Management</h4>
                <h5>Audencia Business School</h5>
              </div>
              <h3>2026–27</h3>
            </div>
            <p>
              Studying carbon accounting, LCA, materiality assessment and sustainability reporting through applied projects.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Global HSE Program & Training Developer Intern</h4>
                <h5>Air Liquide · Paris</h5>
              </div>
              <h3>Mar–Aug 2026</h3>
            </div>
            <p>
              Developed global HSE training content and supported safety initiatives, digital workflows and AI learning.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Management Intern</h4>
                <h5>EcoVadis · Paris</h5>
              </div>
              <h3>Sep 25–Mar 2026</h3>
            </div>
            <p>
              Improved Ecovadis ESG methodology, supporting ESMA-aligned governance and audit traceability.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master in Management</h4>
                <h5>Audencia Business School</h5>
              </div>
              <h3>2024–27</h3>
            </div>
            <p>
              Developed skills in strategy, project management and business transformation through international team projects.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Nagarro · India</h5>
              </div>
              <h3>Mar–Jul 2022</h3>
            </div>
            <p>
              Supported web development, strengthening coding, analytical thinking and technical problem-solving.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering in Computer Science</h4>
                <h5>Chandigarh University</h5>
              </div>
              <h3>2018–22</h3>
            </div>
            <p>
            Built a foundation in programming, databases, AI and data analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;