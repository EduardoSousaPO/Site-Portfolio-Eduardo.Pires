"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // Ordenar projetos: IA/automação primeiro, depois finanças/data science, depois outros
  const sortedProjects = [...projects].sort((a, b) => {
    const priorityOrder: { [key: string]: number } = {
      "IA / Automação comercial": 1,
      "IA / Finanças / Data Science": 2,
      "Finanças / SaaS B2B": 3,
      "Finanças / Data Science": 4,
      "SaaS B2B / CRM": 5,
      "Desenvolvimento Web / Finanças": 6,
      "Desenvolvimento Web": 7,
      "Produto Digital": 8,
      "Ferramenta / Análise de Dados": 9,
    };

    const aPriority = priorityOrder[a.contextArea || ""] || 10;
    const bPriority = priorityOrder[b.contextArea || ""] || 10;

    return aPriority - bPriority;
  });

  // Mover Dividendos AI para o final
  const dividendosProject = sortedProjects.find(p => p.id === "dividendos-ai");
  const otherProjects = sortedProjects.filter(p => p.id !== "dividendos-ai");
  const reorderedProjects = [...otherProjects];
  if (dividendosProject) {
    reorderedProjects.push(dividendosProject);
  }

  // Mostrar os 10 primeiros projetos mais relevantes
  const featuredProjects = reorderedProjects.slice(0, 10);

  return (
    <section id="projetos" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Projetos em destaque
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Seleção de projetos que demonstram capacidade técnica, pensamento de
            produto e integração de IA e dados ao negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

