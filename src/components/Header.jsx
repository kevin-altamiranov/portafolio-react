import React from "react";

const Header = ({ data }) => {
  const { name, profession, tagline, contact } = data;

  return (
    <header
      className="flex flex-col items-center text-center py-8 px-4 relative overflow-hidden"
      data-aos="fade-down"
    >
      <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm w-full max-w-4xl mx-auto">
        <h1 className="text-4xl tracking-tight mb-4 text-slate-900">
          <span className="bg-clip-text text-blue-600">{name}</span>
        </h1>
        {/* <h2 className="text-xl md:text-2xl text-slate-600 font-light mb-4 tracking-widest uppercase">
          {profession}
        </h2> */}
        <p className="text-slate-500 mb-8 italic">{tagline}</p>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-slate-600">
          <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 hover:border-blue-400 transition-colors">
            <i className="fas fa-phone"></i> {contact.phone}
          </span>
          <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 hover:border-blue-400 transition-colors">
            <i className="fas fa-envelope"></i> {contact.email}
          </span>
          <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 hover:border-blue-400 transition-colors">
            <i className="fas fa-location-dot"></i> {contact.location}
          </span>
        </div>

        {contact.socials && (
          <div className="mt-6 flex gap-4 justify-center">
            {contact.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110"
              >
                {social.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
