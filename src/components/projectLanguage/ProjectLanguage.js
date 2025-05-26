import React from "react";
import { Fade } from "react-reveal";
import "./ProjectLanguage.css";

const ProjectLanguage = ({ theme, languages }) => {
  return (
    <div className="tech-stack-section">
      <Fade bottom duration={2000} distance="40px">
        <h2 className="section-title" style={{ color: theme.text }}>Tech Stack</h2>
        <div className="tech-stack-grid">
          <div className="tech-stack-card" style={{ backgroundColor: theme.cardBackground }}>
            <div className="tech-stack-icons">
              {languages.map((tech, index) => (
                <div key={index} className="tech-icon" title={tech.name}>
                  <span className="iconify" data-icon={tech.iconifyClass}></span>
                  <span className="tech-name" style={{ color: theme.text }}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ProjectLanguage; 