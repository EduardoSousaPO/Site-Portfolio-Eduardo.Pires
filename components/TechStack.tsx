"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function TechStack() {
  // Consolidar todas as tecnologias dos projetos
  const allTech = {
    frontend: new Set<string>(),
    backend: new Set<string>(),
    ai_ml: new Set<string>(),
    database: new Set<string>(),
    devops: new Set<string>(),
  };

  projects.forEach((project) => {
    project.techStack.frontend?.forEach((tech) =>
      allTech.frontend.add(tech)
    );
    project.techStack.backend?.forEach((tech) => allTech.backend.add(tech));
    project.techStack.ai_ml?.forEach((tech) => allTech.ai_ml.add(tech));
    project.techStack.database?.forEach((tech) => allTech.database.add(tech));
    project.techStack.devops?.forEach((tech) => allTech.devops.add(tech));
  });

  const categories = [
    {
      name: "Frontend",
      techs: Array.from(allTech.frontend).sort(),
      color: "bg-blue-50 text-blue-700",
    },
    {
      name: "Backend",
      techs: Array.from(allTech.backend).sort(),
      color: "bg-green-50 text-green-700",
    },
    {
      name: "IA/ML",
      techs: Array.from(allTech.ai_ml).sort(),
      color: "bg-purple-50 text-purple-700",
    },
    {
      name: "Dados",
      techs: Array.from(allTech.database).sort(),
      color: "bg-orange-50 text-orange-700",
    },
    {
      name: "Infra/DevOps",
      techs: Array.from(allTech.devops).sort(),
      color: "bg-gray-100 text-gray-700",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Tecnologias e ferramentas que utilizo para construir produtos
            digitais de alta qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-sm p-6"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-sm text-sm font-medium ${category.color}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

