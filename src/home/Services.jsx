import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./services.scss";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const services = [
    {
      number: "01.",
      name: "Leescoach",
      description:
        "We delve deep into understanding your target audience and competitive landscape. With this insight, we craft compelling brand stories, defining your values and messaging.",
    },
    {
      number: "02.",
      name: "Schrijver",
      description:
        "User experience is at the heart of what we do in Rethink studio. Our UI/UX design services focus on creating intuitive, visually appealing interfaces that captivate users.",
    },
    {
      number: "03.",
      name: "Illustrator",
      description:
        "Using cutting-edge technologies and industry best practices, we build responsive, high-performance websites that not only look stunning but also function flawlessly.",
    },
  ];
  useEffect(() => {
    gsap.fromTo(
      ".animate-hr",
      { width: "0%" }, // Initial state
      {
        width: "100%", // Final state
        duration: 3, // Duration in seconds
        ease: "power4.out", // Easing function for a smoother animation
        scrollTrigger: {
          trigger: ".animate-hr",
          start: "top 80%", // Start animation when the top of the element hits 80% of the viewport height
          end: "top 30%", // End animation when the top of the element hits 30% of the viewport height
          scrub: false, // Synchronize animation with scroll, with a 1-second delay
        },
      }
    );

    const ourText = new SplitType("h3.service-text", { types: "chars" });
    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        y: "100%",
        opacity: 1,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "h3.service-text",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="service-container">
      <div className="service-header">
        <hr className="animate-hr"></hr>
        <h3 className="service-text">Services</h3>
      </div>
      <div className="service-main">
        {services.map((service, i) => (
          <>
            {i === 0 && <hr></hr>}
            <div className="service-sub-container" key={i}>
              <p className="sub-number">{service.number}</p>

              <p className="sub-name">{service.name}</p>

              <p className="sub-description">{service.description}</p>
            </div>
            {i + 1 !== services.length && <hr></hr>}
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
