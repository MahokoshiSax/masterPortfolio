import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectLanguage from "../../components/projectLanguage/ProjectLanguage";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    
    // Combine all unique technologies from all work experiences
    const allTechs = ProjectsData.data
      .reduce((acc, project) => {
        project.languages.forEach(tech => {
          if (!acc.some(t => t.name === tech.name)) {
            acc.push(tech);
          }
        });
        return acc;
      }, []);

    // Sort technologies alphabetically by name
    allTechs.sort((a, b) => a.name.localeCompare(b.name));

    return (
      <div className="projects-main">
        <Header theme={theme} />
        
        {/* Header Section */}
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1 className="projects-heading-text" style={{ color: theme.text }}>
                  {projectsHeader.title}
                </h1>
                <p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Work Experience Section */}
        <div className="experience-section">
          <Fade bottom duration={2000} distance="40px">
            <h2 className="section-title" style={{ color: theme.text }}>Work Experience</h2>
            <div className="repo-cards-div-main">
              {ProjectsData.data
                .map((repo) => (
                  <div key={repo.id} className="experience-card">
                    <GithubRepoCard repo={repo} theme={theme} />
                  </div>
                ))}
            </div>
          </Fade>
        </div>

        {/* Tech Stack Section */}
        <ProjectLanguage theme={theme} languages={allTechs} />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
