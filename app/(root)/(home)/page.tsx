"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  BanknotesIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { data } from "@/constants/SiteData";
import { appData } from "@/constants/appdata";
import { experience, projectList, socialLinks, stackLinks } from "@/constants/resume";

const networkNodes = [
  { label: "Wallet", x: "14%", y: "28%", delay: "0s" },
  { label: "KYC", x: "72%", y: "18%", delay: ".3s" },
  { label: "Switch", x: "48%", y: "50%", delay: ".6s" },
  { label: "Ledger", x: "18%", y: "76%", delay: ".9s" },
  { label: "Merchant", x: "78%", y: "72%", delay: "1.2s" },
];

const metrics = [
  { value: "10M+", label: "users scaled", icon: GlobeAltIcon },
  { value: "10+", label: "features shipped", icon: BoltIcon },
  { value: "4+ yrs", label: "product engineering", icon: CpuChipIcon },
  { value: "24/7", label: "payments mindset", icon: ShieldCheckIcon },
];

const paymentCapabilities = [
  "Microservice architecture",
  "API design and integrations",
  "Transactional reliability",
  "Secure, performant UI",
  "Batch schedulers and recovery",
  "Product ownership",
];

const featuredProjects = projectList.slice(0, 4);

const Landing = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeFlow, setActiveFlow] = useState(0);

  const currentRole = experience[0];
  const stackPreview = useMemo(
    () =>
      stackLinks.filter((item) =>
        ["React", "Nodejs", "Java", "Spring", "MongoDb", "MySQL", "TailwindCSS", "JavaScript"].includes(item.name)
      ),
    []
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveFlow((value) => (value + 1) % networkNodes.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="portfolio-shell">
      <section
        className="payment-hero"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
        style={
          {
            "--tilt-x": `${tilt.y}deg`,
            "--tilt-y": `${tilt.x}deg`,
          } as React.CSSProperties
        }
      >
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

        <div className="hero-copy">
          <div className="payment-pill">
            <SparklesIcon className="h-5 w-5" />
            <span>{appData.heroPill}</span>
          </div>

          <h1>
            {appData.heroName}
            <span> builds payment-grade digital systems.</span>
          </h1>

          <p className="hero-summary">
            Senior Software Engineer at TechM Comviva, shaping financial solutions with resilient APIs,
            microservices, secure product flows, and interfaces built for real users at scale.
          </p>

          <div className="hero-actions">
            <Link href={data.resumeLink} target="_blank" className="primary-action">
              <ArrowDownTrayIcon className="h-5 w-5" />
              {appData.downloadCV}
            </Link>
            <Link href={data.meetingLink} target="_blank" className="ghost-action">
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              {appData.scheduleMeeting}
            </Link>
          </div>

          <div className="contact-rail" aria-label="Contact links">
            <Link href={`mailto:${socialLinks.gmail}`}>{socialLinks.gmail}</Link>
            <Link href={socialLinks.linkedin} target="_blank">linkedin.com/in/bharatpaliwal231</Link>
            <Link href={socialLinks.github} target="_blank">github.com/bharatpaliwal-169</Link>
          </div>
        </div>

        <div className="payment-stage" aria-label="Interactive payment network visualization">
          <div className="terminal-card">
            <div className="terminal-topbar">
              <span />
              <span />
              <span />
              <strong>live-payment-flow</strong>
            </div>
            <div className="terminal-line">
              <span>auth.request</span>
              <strong>approved</strong>
            </div>
            <div className="terminal-line">
              <span>risk.check</span>
              <strong>clean</strong>
            </div>
            <div className="terminal-line">
              <span>settlement.batch</span>
              <strong>T+0</strong>
            </div>
          </div>

          <div className="payment-cube">
            <div className="cube-face cube-front">
              <BanknotesIcon className="h-12 w-12" />
              <span>Payments</span>
            </div>
            <div className="cube-face cube-back">APIs</div>
            <div className="cube-face cube-right">Scale</div>
            <div className="cube-face cube-left">UX</div>
            <div className="cube-face cube-top">Secure</div>
            <div className="cube-face cube-bottom">Reliable</div>
          </div>

          <div className="network-map">
            <div className="network-lines" />
            {networkNodes.map((node, index) => (
              <button
                key={node.label}
                type="button"
                className={`network-node ${activeFlow === index ? "is-active" : ""}`}
                style={{ left: node.x, top: node.y, animationDelay: node.delay }}
                onClick={() => setActiveFlow(index)}
                aria-label={`${node.label} payment node`}
              >
                <span>{node.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="metric-strip" aria-label="Portfolio highlights">
        {metrics.map((item) => (
          <div key={item.label} className="metric-tile">
            <item.icon className="h-6 w-6" />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="portfolio-section split-section">
        <div>
          <p className="section-kicker">Professional summary</p>
          <h2>Fintech engineering with product instincts.</h2>
          <p>
            I work across the stack, from React experiences to Java Spring Boot services, with an eye
            on uptime, clarity, security, and the everyday operations behind financial products.
          </p>
        </div>

        <div className="capability-grid">
          {paymentCapabilities.map((item) => (
            <div key={item} className="capability-card">
              <CheckCircleIcon className="h-5 w-5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Current lane</p>
            <h2>{currentRole.title}</h2>
          </div>
          <Link href="/experience" className="text-link">
            View timeline
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="experience-ledger">
          <div className="ledger-main">
            <span>{currentRole.companyName}</span>
            <strong>{currentRole.startDate}</strong>
          </div>
          {currentRole.points.map((point) => (
            <div key={point} className="ledger-row">
              <CodeBracketIcon className="h-5 w-5" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Build history</p>
            <h2>Projects that show the range.</h2>
          </div>
          <Link href="/projects" className="text-link">
            All projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className="project-card" style={{ "--card-index": index } as React.CSSProperties}>
              <div className="project-card-top">
                <span>0{index + 1}</span>
                <BanknotesIcon className="h-6 w-6" />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="stack-list">
                {project.stack.slice(0, 4).map((stack) => (
                  <span key={stack}>{stack}</span>
                ))}
              </div>
              <div className="project-actions">
                <Link href={project.githubUrl} target="_blank">Code</Link>
                <Link href={project.projectUrl} target="_blank">Live</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section stack-section">
        <div>
          <p className="section-kicker">Stack</p>
          <h2>Tools I use to move money-shaped products.</h2>
        </div>
        <div className="stack-marquee">
          {[...stackPreview, ...stackPreview].map((item, index) => (
            <span key={`${item.name}-${index}`}>{item.name}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
