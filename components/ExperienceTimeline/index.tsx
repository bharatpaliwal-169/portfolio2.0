"use client";

import { experience } from "@/constants/resume";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

type ExperienceItem = (typeof experience)[number];

const ExperienceCard = ({
  item,
  index,
  inView,
}: {
  item: ExperienceItem;
  index: number;
  inView: boolean;
}) => {
  const isLeft = index % 2 === 0;
  const animationClass = isLeft ? "timeline-card-anim-left" : "timeline-card-anim";

  return (
    <article className="relative grid gap-4 pl-12 md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] md:gap-0 md:pl-0">
      <div
        className={[
          "relative md:py-7",
          isLeft ? "md:col-start-1 md:pr-8" : "md:col-start-3 md:pl-8",
        ].join(" ")}
      >
        <div
          className={[
            "group relative overflow-hidden rounded-xl border border-white/12 bg-white/[0.075] p-5 text-left shadow-[0_24px_70px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-200/45 hover:bg-white/[0.095] md:p-6",
            isLeft ? "md:text-right" : "md:text-left",
            inView ? animationClass : "opacity-0",
          ].join(" ")}
          style={{
            animationDelay: inView ? `${index * 0.11}s` : undefined,
            animationFillMode: "forwards",
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent opacity-70" />
          <div
            className={[
              "mb-4 flex flex-wrap items-center gap-2",
              isLeft ? "md:justify-end" : "md:justify-start",
            ].join(" ")}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/20 bg-emerald-300/10 px-3 py-1 text-[0.78rem] font-bold text-emerald-100">
              <CalendarDaysIcon className="h-4 w-4" />
              {item.startDate}
            </span>
            {/* <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/15 bg-sky-300/10 px-3 py-1 text-[0.78rem] font-bold text-sky-100">
              <BriefcaseIcon className="h-4 w-4" />
              Role {index + 1}
            </span> */}
          </div>

          <h2 className="text-[1.35rem] font-extrabold leading-tight text-brand-white md:text-[1.55rem]">
            {item.title}
          </h2>
          <p className="mt-2 text-[0.95rem] font-semibold text-emerald-100/75">
            {item.companyName}
          </p>

          <ul className="mt-5 space-y-3">
            {item.points.map((point, pointIndex) => (
              <li
                key={`${item.title}-${pointIndex}`}
                className={[
                  "flex gap-2.5 text-[0.92rem] leading-6 text-emerald-50/72",
                  isLeft ? "md:flex-row-reverse" : "",
                ].join(" ")}
              >
                <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-none text-emerald-200" />
                <span>{point.trim()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute left-3 top-6 z-10 md:static md:col-start-2 md:flex md:items-center md:justify-center">
        <div className="timeline-dot flex h-7 w-7 items-center justify-center rounded-full border-4 border-[#071612] bg-gradient-to-br from-emerald-200 to-sky-300 text-[#06120f] shadow-[0_0_0_8px_rgba(143,255,224,0.08),0_18px_40px_rgba(0,0,0,0.3)] md:h-8 md:w-8">
          <BriefcaseIcon className="h-4 w-4" strokeWidth={2.5} />
        </div>
      </div>
    </article>
  );
};

const ExperienceTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative mx-auto w-full max-w-5xl">
      <div
        className="absolute bottom-8 left-6 top-8 w-px origin-top rounded-full bg-gradient-to-b from-emerald-200/80 via-sky-200/45 to-transparent md:left-1/2 md:-translate-x-1/2"
        style={{
          animation: inView ? "timeline-line-draw 0.9s ease-out forwards" : "none",
          opacity: inView ? 1 : 0,
        }}
      />

      <div className="space-y-2 md:space-y-0">
        {experience.map((item, index) => (
          <ExperienceCard
            key={`${item.companyName}-${item.title}`}
            item={item}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
