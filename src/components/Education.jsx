import React from "react";
import { Section, Card } from "./LayoutComponents";

const Education = ({ data }) => {
  return (
    <Section title="Educación">
      <div className="space-y-4">
        {data.map((edu, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <Card>
              <div className="flex flex-col md:flex-row justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600">{edu.institution}</p>
                </div>
                <span className="mt-2 md:mt-0 text-sm text-slate-500 font-mono border-l-2 border-gray-200 pl-3">
                  {edu.period}
                </span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
