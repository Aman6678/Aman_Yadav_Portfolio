
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Certifications.css";




const certifications = [
  {
    id: "01",
    title: "EcoVadis Sustainability Analyst",
    issuer: "EcoVadis",
    image: "/images/certifications/ecovadis-analyst.webp",
    pdf: "/images/certifications/ecovadis-analyst.png",
  },
  {
    id: "02",
    title: "EcoVadis Solutions Practitioner",
    issuer: "EcoVadis",
    image: "/images/certifications/ecovadis-practitioner.webp",
    pdf: "/images/certifications/ecovadis-practitioner.png",
  },
  {
    id: "03",
    title: "Workato AI and Automation Level 2",
    issuer: "Workato",
    image: "/images/certifications/workato-automation.webp",
    pdf: "/images/certifications/workato-automation.png",
  },
  {
    id: "04",
    title: "Product Carbon Footprint",
    issuer: "EcoVadis",
    image: "/images/certifications/product-carbon-footprint.webp",
    pdf: "/images/certifications/product-carbon-footprint.png",
  },
  {
    id: "05",
    title: "Business Analysis Foundations",
    issuer: "LinkedIn Learning",
    image: "/images/certifications/business-analysis.webp",
    pdf: "/images/certifications/business-analysis.png",
  },
];




const Certifications = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
      () => {
        const distance = () =>
          Math.max(0, track.scrollWidth - section.clientWidth);

        if (distance() === 0) return;

        
const travelDistance = distance();
const holdDistance = Math.max(700, window.innerHeight);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: () => `+=${distance() + holdDistance}`,
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});

timeline
  .to(track, {
    x: () => -distance(),
    duration: travelDistance,
    ease: "none",
  })
  .to(track, {
    x: () => -distance(),
    duration: holdDistance,
    ease: "none",
  });

      }
    );

    return () => media.revert();
  }, []);
  return (
    <section className="certifications-section" ref={sectionRef}>
      <div className="certifications-heading section-container">
  <h2>
    My <span>Certifications</span>
  </h2>
</div>

      <div className="certifications-track" ref={trackRef}>
        {certifications.map((cert) => (
          <article className="certification-card" key={cert.id}>
            <div className="certification-number">
              {cert.id}
            </div>

            <div className="certification-content">
              <h3>{cert.title}</h3>
              {cert.issuer && <p>{cert.issuer}</p>}

              

<a
  href={cert.pdf}
  target="_blank"
  rel="noopener noreferrer"
  className="certificate-image-link"
  aria-label={`View ${cert.title} certificate`}
>
  <img
    className="certificate-image"
    src={cert.image}
    alt={`${cert.title} certificate`}
    loading="lazy"
    decoding="async"
  />
</a>


            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
