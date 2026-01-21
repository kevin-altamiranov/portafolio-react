import React from "react";
import { Section, Card } from "./LayoutComponents";

const Experience = ({ data }) => {
  return (
    <Section title="Experiencia">
      <div className="relative border-l border-gray-200 ml-3 space-y-8">
        {data.map((job, index) => (
          <div
            key={index}
            className="ml-6 relative"
            data-aos="fade-left"
            data-aos-delay={index * 100}
          >
            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-blue-500 bg-white" />
            <Card className="hover:translate-x-1 transition-transform">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {job.role}
                  </h3>
                  <h4 className="text-blue-600 font-medium">{job.company}</h4>
                </div>
                <span className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100 w-fit mt-2 md:mt-0">
                  {job.period}
                </span>
              </div>
              <p className="text-slate-600 mt-2 text-sm md:text-base leading-relaxed">
                {job.description}
              </p>
              {job.responsabilities && job.responsabilities.length > 0 && (
                <details className="group mt-3">
                  <summary className="list-none cursor-pointer inline-flex items-center gap-1 text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors focus:outline-none">
                    <span className="group-open:hidden">Ver más</span>
                    <span className="hidden group-open:inline">Ver menos</span>
                    <svg
                      className="w-4 h-4 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <ul className="list-disc text-slate-600 mt-2 text-sm md:text-base leading-relaxed space-y-1 ml-5">
                    {job.responsabilities.map((responsability, idx) => (
                      <li key={idx}>{responsability}</li>
                    ))}
                  </ul>
                </details>
              )}
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
