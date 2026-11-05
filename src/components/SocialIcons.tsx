
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons">

        <a
          href="https://www.linkedin.com/in/aman-yadav-esg/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
          data-cursor="disable"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="mailto:amanydvv99@gmail.com"
          aria-label="Send me an email"
          title="Gmail"
          data-cursor="disable"
        >
          <SiGmail />
        </a>

      </div>
    </div>
  );
};

export default SocialIcons;
