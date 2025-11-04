import React from 'react';
import './App.css';
import resumeData from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{resumeData.name}</h1>
        <p className="contact-info">
          <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a> | 
          <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a> | 
          <a href={resumeData.contact.portfolio_url} target="_blank" rel="noopener noreferrer">Portfolio</a> | 
          <a href={resumeData.contact.linkedin_url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </header>

      <section className="section">
        <h2>Professional Summary</h2>
        <p>{resumeData.summary}</p>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        {Object.entries(resumeData.technical_skills).map(([category, skills]) => (
          <div key={category}>
            <h3>{category.replace(/_/g, ' ')}:</h3>
            <p>{skills.join(', ')}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Soft Skills</h2>
        <p>{resumeData.soft_skills.join(', ')}</p>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        {resumeData.work_experience.map((job, index) => (
          <div key={index} className="job">
            <h3>{job.title} at {job.company}</h3>
            <p>{job.dates}</p>
            <ul>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education">
            <h3>{edu.degree} from {edu.institution}</h3>
            <p>{edu.dates} - {edu.details}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Projects</h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name} ({project.technologies.join(', ')})</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Open Source Contributions</h2>
        {resumeData.open_source_contributions.map((contribution, index) => (
          <div key={index} className="contribution">
            <h3>{contribution.project}</h3>
            <p>{contribution.description}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <h2>GitHub Stats</h2>
        <img src="https://github-profile-trophy.vercel.app/?username=piyushxcoder" alt="GitHub Profile Trophies" />
      </section>
    </div>
  );
}

export default App;