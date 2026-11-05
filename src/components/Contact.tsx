
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        <h3>Contact</h3>

        <div className="contact-flex">

          {/* CONNECT SECTION */}
          <div className="contact-box">
            <h4>Connect</h4>

            <div className="contact-connect-links">

              <a
                href="www.linkedin.com/in/aman-yadav-esg/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                LinkedIn
                <MdArrowOutward />
              </a>

              <a
                href="mailto:amanydvv99@gmail.com"
                data-cursor="disable"
              >
                amanydvv99@gmail.com
                <MdArrowOutward />
              </a>

            </div>
          </div>

          {/* FOOTER CREDIT */}
          <div className="contact-box contact-credit">
            <h2>
              Designed and Developed
              <br />
              by <span>Aman Yadav</span>
            </h2>

            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
