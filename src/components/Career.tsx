import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container" id="experience">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Site Engineer</h4>
                <h5>M/S Radiant Engineering Works</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              As a Site Engineer at M/S Radiant Engineering Works, I was
              responsible for overseeing construction activities, ensuring that
              all work met quality standards, and managing project timelines and
              resources. I gained hands-on experience in site supervision and
              effective project management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer - I</h4>
                <h5>Digrowfa Pvt Ltd</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              As a Software Developer at Digrowfa Pvt Ltd, I worked on
              full-stack development using the MERN stack. I developed dynamic
              web applications, collaborated with cross-functional teams, and
              contributed to building scalable and efficient solutions for
              clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer - I</h4>
                <h5>HyperPad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently, I am working as a Software Developer at HyperPad, where
              I am focusing on developing cutting-edge software solutions. I am
              actively involved in creating high-performance applications and
              integrating AI-driven technologies into our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
