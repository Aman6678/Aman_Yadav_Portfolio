import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2 className="greeting-line" aria-label="Hello! I'm">
  <span className="greeting-cycle">
    <span>Hello!</span>
    <span>Bonjour!</span>
    <span>Namaste!</span>
  </span>
  <span className="greeting-im">I'm</span>
</h2>
            <h1>
              AMAN
              <br />
              <span>YADAV</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Sustainability & ESG</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Decarbonisation</div>
              <div className="landing-h2-2">Data & Strategy</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI & Automation</div>
              <div className="landing-h2-info-1">CSRD.ESRS.GRI</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
