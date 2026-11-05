
import "./styles/MobileTools.css";

const toolCategories = [
  {
    title: "Data & Analysis",
    tools: ["Excel", "SQL", "Jamovi"],
  },
  {
    title: "AI & Automation",
    tools: [
      "Google Gemini",
      "Workato",
      "Google Apps Script",
      "Prompt Engineering",
    ],
  },
  {
    title: "Productivity & Design",
    tools: [
      "Google Workspace",
      "PowerPoint",
      "Canva",
    ],
  },
];

const MobileTools = () => {
  return (
    <section className="mobile-tools">
      <h2>
        My <span>Tools & Platforms</span>
      </h2>

      <div className="mobile-tools-grid">
        {toolCategories.map((category) => (
          <div className="mobile-tools-category" key={category.title}>
            <h3>{category.title}</h3>

            <div className="mobile-tools-tags">
              {category.tools.map((tool) => (
                <span className="mobile-tool-tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileTools;
