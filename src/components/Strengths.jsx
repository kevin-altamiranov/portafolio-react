import React from "react";
import { Section, Card } from "./LayoutComponents";

const Strengths = ({ data }) => {
  return (
    <Section title="Fortalezas">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
            <Card className="text-center group hover:bg-blue-50 transition-colors">
              <span className="text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">
                {item}
              </span>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Strengths;