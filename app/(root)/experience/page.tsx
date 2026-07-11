import { socialLinks } from "@/constants/resume";
import Link from "next/link";
import { appData } from "@/constants/appdata";
import ExperienceTimeline from "@/components/ExperienceTimeline";

const Experience = () => {
  return (
    <section
      className="grid min-h-screen grid-cols-1 items-center gap-0 py-14 md:grid-cols-12 md:py-20"
    >
      <div className="col-span-12 mb-12 px-4 text-center md:mb-16">
        <h1 className="mb-3 text-3xl font-extrabold text-brand-white md:text-5xl">
          {appData.workExperience}
        </h1>
        <p className="mx-auto max-w-2xl text-[1rem] font-medium leading-7 text-emerald-50/70 md:text-[1.12rem]">
          {appData.workExDesp}
        </p>
      </div>

      <div className="relative col-span-12 px-4">
        <ExperienceTimeline />
      </div>

      <div className="col-span-12 mt-14 px-4 text-center">
        <h5 className="text-[1rem] text-emerald-50/65 md:text-[1.1rem]">
          {appData.linkedInDesp1}
          <span className="p-1">
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-200 underline-offset-4 hover:underline"
            >
              {appData.linkedIn}
            </Link>
          </span>
          {appData.linkedInDesp2}
        </h5>
      </div>
    </section>
  );
};

export default Experience;
