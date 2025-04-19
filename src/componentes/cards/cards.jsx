import React from "react";

export function ProjectCard({ image, title, description, link }) {
  return (
    <div className="bg-[#0D0D0D] border border-[#420407] rounded-xl overflow-hidden shadow-lg max-w-md w-full mx-auto hover:-translate-y-2 hover:shadow-xl transition-transform duration-300">
      {/* Imagen */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={`Imagen de ${title}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-semibold text-[#DBBEA9] mb-3">{title}</h3>
        <p className="text-sm text-zinc-400 flex-1">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-5 py-2 rounded-md bg-[#420407] text-[#DBBEA9] text-sm font-medium text-center hover:bg-[#5e0a0c] transition-colors duration-300"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
}
