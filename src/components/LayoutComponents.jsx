import React from "react";

export const Section = ({ title, children, className = "" }) => {
  return (
    <section className={`mb-8 ${className}`} data-aos="fade-up">
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-wide border-b border-gray-200 pb-2 inline-block">
          {title}
        </h2>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
};

export const Card = ({ children, className = "", noPadding = false }) => {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${noPadding ? "" : "p-6"} ${className}`}
    >
      {children}
    </div>
  );
};
