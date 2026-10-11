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
              Building applied sustainability expertise through real-world
              projects, technical coursework covering carbon
              management, circular economy, materiality, sustainability reporting and corporate climate action.
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
              Supported global HSE programs, risk-based training and safety harmonisation. 
              Contributed to the E&C website using Google Apps Script, combining coding with
               technical content management, and supported AI training across Google Workspace, 
               Gemini, prompt engineering and practical use cases.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Management Intern</h4>
                <h5>EcoVadis · Paris</h5>
              </div>
              <h3>Sep 2025–Mar 2026</h3>
            </div>
            <p>
              Worked at the intersection of sustainability methodology, ESG
              ratings and regulation, supporting ESMA-aligned governance and
              evidence traceability. Strengthened documentation and methodology
              tracking to help make rating processes more consistent, transparent
              and audit-ready.
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
              Built a broad foundation in strategy, project management and business transformation
               through applied company projects and international teamwork with mentors from EY and Capgemini.
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
              Worked on backend improvements and digital products, strengthening coding, problem-solving and data-driven thinking.
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
              Built foundations in programming, databases, AI, decision making and data analysis, shaping the technical perspective I now bring to
              sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;