import React from "react";
import { ProjectCard } from "../componentes/cards/cards";

export default function Portfolio() {
  return (
    <div className="bg-negro min-h-screen py-16 px-6">
      <h2 className="text-3xl font-bold text-beige text-center mb-12">Mis Proyectos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <ProjectCard
          image="/proyectos/hotel.jpg"
          title="Landing Hotel"
          description="Landing page responsive para reservas de hotel con animaciones."
          link="https://github.com/tuusuario/proyecto1"
        />
        <ProjectCard
          image="/proyectos/dashboard.jpg"
          title="Dashboard Admin"
          description="Dashboard completo con visualización de datos y login seguro."
          link="https://tuweb.com/dashboard"
        />
        <ProjectCard
          image="/proyectos/clima.jpg"
          title="App Clima"
          description="App que consulta clima en tiempo real usando OpenWeather."
          link="https://clima-app.netlify.app"
        />
      </div>
    </div>
  );
}