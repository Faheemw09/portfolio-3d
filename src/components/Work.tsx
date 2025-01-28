import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  const projects = [
    {
      title: "Hyperpad",
      image: "/images/stokns.png",
      description:
        "Hyperpad: is a user-friendly toolkit for creating and managing tokens, featuring secure transactions with Phantom Wallet and easy multi-sender operations for efficient token management.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Web3",
        "Tailwind",
        "Ant Design",
      ],
      githubLink: "https://github.com/Faheemw09/hyperpad",
      deployedLink: "https://stonkspad.vercel.app/",
    },
    {
      title: "CodeMorpher-Code-Converter",
      image: "/images/frontcm.png",
      description:
        "CodeMorpher: Streamlined code conversion, real-time debugging, and automated quality checks for efficient development.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Node"],
      githubLink: "https://github.com/Faheemw09/code_converter_app/tree/master",
      deployedLink: "https://code-converter-frontend-three.vercel.app/",
    },
    {
      title: "GreatMeals-Food-Delivery",
      image: "/images/gmfont.png",
      description:
        "GreatMeals: India's premier food app, offering diverse, convenient culinary experiences, with an extensive restaurant selection and food delivery.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Chakra UI"],
      githubLink:
        "https://github.com/Faheemw09/quirky-taste-6442-greatMeals/tree/main",
      deployedLink: "https://greatmeals-com.vercel.app",
    },
    {
      title: "StyleZilla-Ecommerce",
      image:
        "https://user-images.githubusercontent.com/112753481/233257037-8671b675-6ea0-44f1-868f-b2c9d00bfd89.png",
      description:
        "StyleZilla: Elevating Your Style with Premium Clothing and Styling Products in an Exclusive E-Commerce Experience.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/SagarN21/urbane-look-6820",
      deployedLink: "https://stylezillajs201.netlify.app/",
    },
    {
      title: "Amazonn-Ecommerce-app",
      image:
        "https://user-images.githubusercontent.com/110039298/238872683-0589b85c-698b-425c-91fc-460d10a0a1c3.png",
      description:
        "Amazonn: India's leading online retail powerhouse, providing unmatched growth, convenience, and an extensive product range.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      githubLink: "https://github.com/Faheemw09/envious-cactus-6437",
      deployedLink: "https://amazonn-ten.vercel.app/",
    },
  ];
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{`0${index + 1}`}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>

                <p>{project.techStack.join(", ")}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
