"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowUpRight, Lock, Shield } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const techStackString = [
    ...(project.techStack.frontend || []),
    ...(project.techStack.backend || []),
    ...(project.techStack.ai_ml || []),
    ...(project.techStack.database || []),
    ...(project.techStack.other || []),
  ]
    .slice(0, 5)
    .join(" · ");

  const linkUrl = project.productionUrl || project.githubUrl;
  const showLink = !!(project.productionUrl || (project.githubUrl && !project.isPrivate));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.3) }}
      className="group bg-white rounded-sm border border-gray-200 p-7 sm:p-9 hover:border-gray-900 transition-colors duration-300 h-full flex flex-col"
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">
            <span>0{index + 1}</span>
            <span className="text-gray-300">·</span>
            <span>{project.contextArea}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2 tracking-tight">
            {project.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            {project.shortTagline}
          </p>
        </div>
        {project.isNda ? (
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-gray-700 bg-gray-100 px-2.5 py-1.5 rounded-sm whitespace-nowrap">
            <Shield className="w-3 h-3" />
            <span>NDA</span>
          </div>
        ) : project.isPrivate ? (
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-sm whitespace-nowrap">
            <Lock className="w-3 h-3" />
            <span>Privado</span>
          </div>
        ) : null}
      </div>

      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
        Papel
      </p>
      <p className="text-sm text-gray-700 mb-5 font-light">{project.role}</p>

      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
        Solução
      </p>
      <p className="text-sm text-gray-700 mb-5 font-light leading-relaxed flex-1">
        {project.solution}
      </p>

      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">
          Destaques
        </p>
        <ul className="space-y-1.5">
          {project.highlights.slice(0, 3).map((highlight, idx) => (
            <li
              key={idx}
              className="text-sm text-gray-600 font-light flex items-start gap-3 leading-relaxed"
            >
              <span className="mt-2 inline-block w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500 font-mono leading-relaxed flex-1">
            {techStackString}
          </p>
          {showLink && linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-gray-700 hover:text-gray-900 transition-colors"
              aria-label={`Visitar ${project.name}`}
            >
              Visitar
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        {project.isNda && (
          <p className="text-[11px] text-gray-500 mt-3 italic font-light">
            Cliente da FlowCode sob NDA — descrito no nível permitido pelo
            contrato. Demonstração disponível sob solicitação.
          </p>
        )}
      </div>
    </motion.div>
  );
}
