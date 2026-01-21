import React from "react";

const Footer = ({ name }) => {
  return (
    <footer className="mt-20 py-8 border-t border-gray-200 text-center text-slate-500 text-sm">
      <p>
        © {new Date().getFullYear()} {name}. Todos los derechos reservados.
      </p>
      <p className="mt-2 text-xs text-slate-400">
        Diseñado con React & TailwindCSS
      </p>
    </footer>
  );
};

export default Footer;
