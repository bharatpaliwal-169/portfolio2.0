import Link from "next/link";
import {
  CalendarDaysIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { data } from "@/constants/SiteData";
import { socialLinks } from "@/constants/resume";

const links = [
  {
    label: "Schedule a call",
    href: data.meetingLink,
    detail: "Talk engineering, payments, products, or collaborations.",
    icon: CalendarDaysIcon,
  },
  {
    label: "Email",
    href: `mailto:${socialLinks.gmail}`,
    detail: socialLinks.gmail,
    icon: EnvelopeIcon,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    detail: "linkedin.com/in/bharatpaliwal231",
    icon: UserGroupIcon,
  },
  {
    label: "GitHub",
    href: socialLinks.github,
    detail: "github.com/bharatpaliwal-169",
    icon: CodeBracketIcon,
  },
];

const Connect = () => {
  return (
    <section className="portfolio-section split-section">
      <div>
        <p className="section-kicker">Connect</p>
        <h2>Let&apos;s build something payment-grade.</h2>
        <p>
          I&apos;m open to conversations around fintech platforms, product engineering, backend scale,
          frontend systems, and teams that care about shipping reliable software.
        </p>
      </div>

      <div className="capability-grid">
        {links.map((item) => (
          <Link key={item.label} href={item.href} target="_blank" className="capability-card">
            <item.icon className="h-6 w-6" />
            <span>
              <strong className="block text-emerald-50">{item.label}</strong>
              <small className="block text-emerald-50/60">{item.detail}</small>
            </span>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default Connect;
