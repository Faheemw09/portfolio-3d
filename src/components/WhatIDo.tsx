import { useEffect, useRef, useState } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  const [activeContent, setActiveContent] = useState<string | null>(null);

  const handleClick = (container: HTMLDivElement, sectionId: string) => {
    // Toggle the active state of the clicked section
    setActiveContent(activeContent === sectionId ? null : sectionId);

    // Toggle active/inactive classes
    container.classList.toggle("what-content-active");
    container.classList.remove("what-sibling");

    // Toggle sibling sections
    if (container.parentElement) {
      const siblings = Array.from(container.parentElement.children);
      siblings.forEach((sibling) => {
        if (sibling !== container) {
          sibling.classList.remove("what-content-active");
          sibling.classList.toggle("what-sibling");
        }
      });
    }
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () =>
            handleClick(container, container.id)
          );
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () =>
            handleClick(container, container.id)
          );
        }
      });
    };
  }, [activeContent]);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
            id="develop"
            onClick={(e) => handleClick(e.currentTarget, "develop")}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Description</h4>
              <p>
                I specialize in building dynamic, full-stack web applications
                using the MERN stack.
              </p>
              <h5>Skillset & tools</h5>
              <div
                className={`what-content-flex ${
                  activeContent === "develop" ? "active" : ""
                }`}
              >
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">React</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">React Redux</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">Ant Design</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
            id="design"
            onClick={(e) => handleClick(e.currentTarget, "design")}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>DESIGN</h3>
              <h4>Description</h4>
              <p>
                I specialize in designing clean, user-friendly interfaces with
                modern tools.
              </p>
              <h5>Skillset & tools</h5>
              <div
                className={`what-content-flex ${
                  activeContent === "design" ? "active" : ""
                }`}
              >
                <div className="what-tags">Figma</div>
                <div className="what-tags">Postman</div>
                <div className="what-tags">GitHub</div>
                <div className="what-tags">Canva</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
