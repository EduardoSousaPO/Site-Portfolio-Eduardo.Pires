"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projetos" className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gray-500 mb-6">
            Projetos selecionados
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-[1.05] tracking-tight mb-6">
            Da{" "}
            <span className="italic font-medium">Vista ETF</span> a integrações
            sob NDA — produtos reais em produção.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
            Trabalhos selecionados que mostram o que já entreguei: SaaS,
            agentes com IA, integrações de e-commerce, ERPs e sites
            institucionais. Os projetos marcados como NDA são de clientes da
            FlowCode e estão descritos no nível permitido pelo contrato.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
