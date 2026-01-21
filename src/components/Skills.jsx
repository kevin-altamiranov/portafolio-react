import React from "react";
import { Section } from "./LayoutComponents";

const Skills = ({ data }) => {
  return (
    <Section title="Habilidades">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data.map((skill, index) => (
          <div
            key={index}
            className="group p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <span className="text-slate-800 font-bold text-sm md:text-base group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div
                    key={step}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${
                      step <= Math.ceil(skill.level / 20)
                        ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                        : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.level}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
