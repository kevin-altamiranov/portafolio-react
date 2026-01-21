import React from "react";
import { Section, Card } from "./LayoutComponents";

const Languages = ({ data }) => {
  return (
    <Section title="Idiomas">
      <div className="grid grid-cols-1 gap-4">
        {data.map((lang, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <Card className="flex justify-between items-center group">
              <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {lang.language}
              </span>
              <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-blue-700 font-medium">
                {lang.level}
              </span>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Languages;
