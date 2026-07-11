import Link from "next/link";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { projectList } from "@/constants/resume";

const Projects = () => {
  return (
    <section className="portfolio-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Projects</p>
          <h2>Experiments, products, and full-stack builds.</h2>
        </div>
      </div>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <article key={project.title} className="project-card" style={{ "--card-index": index % 4 } as React.CSSProperties}>
            <div className="project-card-top">
              <span>0{index + 1}</span>
              <CodeBracketIcon className="h-6 w-6" />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-list">
              {project.stack.map((stack) => (
                <span key={stack}>{stack}</span>
              ))}
            </div>
            <div className="project-actions">
              <Link href={project.githubUrl} target="_blank">Code</Link>
              <Link href={project.projectUrl} target="_blank" className="inline-flex items-center gap-1">
                Live
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
