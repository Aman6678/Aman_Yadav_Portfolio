
import {
  FiFeather,
  FiRefreshCcw,
  FiDatabase,
} from "react-icons/fi";


import "./styles/MobileTools.css";

const skillCategories = [
  {
    number: "01",
    title: "Sustainability & Reporting",
    description: "Understanding ESG performance",
    icon: FiFeather,
    skills: [
      "CSRD / ESRS",
      "GRI",
      "ESG Ratings",
      "Double Materiality",
    ],
  },
  {
    number: "02",
    title: "Carbon & Environment",
    description: "Measuring environmental impact",
    icon: FiRefreshCcw,
    skills: [
      "Life Cycle Assessment",
      "GHG Accounting",
      "Product Carbon Footprint",
      "Circular Economy",
    ],
  },
  {
    number: "03",
    title: "Data & Automation",
    description: "Turning information into better decisions",
    icon: FiDatabase,
    skills: [
      "Excel",
      "SQL",
      "Project Management",
      "AI and Automation",
      "Google Apps Script",
      "Microsoft Office",
      "Google Workspace",
    ],
  },
];

const MobileTools = () => {
  return (
    <section
      className="mobile-tools"
      aria-labelledby="skills-title"
    >
      <div className="mobile-tools-intro">
        <span className="mobile-tools-eyebrow">
          EXPERTISE / 01—03
        </span>

        <h2 id="skills-title">
          My <span>Skills &amp; Toolkit</span>
        </h2>

        <p>
          From sustainability reporting to environmental
          analysis and digital solutions.
        </p>
      </div>

      <div className="mobile-tools-grid">
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              className="mobile-tools-category"
              key={category.number}
            >
              <div className="mobile-tools-category-header">
                <div className="mobile-tools-category-title">
                  <Icon
                    className="mobile-tools-category-icon"
                    aria-hidden="true"
                  />

                  <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>

                <span className="mobile-tools-category-number">
                  {category.number}
                </span>
              </div>

              <div className="mobile-tools-tags">
                {category.skills.map((skill) => (
                  <div
                    className="mobile-tool-tag"
                    key={skill}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileTools;
