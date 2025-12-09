"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ExternalLink, Lock } from "lucide-react";

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
  ]
    .slice(0, 4)
    .join(" · ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-sm border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
            {project.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 font-light mb-4">{project.shortTagline}</p>
        </div>
        {project.isPrivate && (
          <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
            <Lock className="w-3 h-3" />
            <span>Privado</span>
          </div>
        )}
      </div>

      <div className="mb-4 flex-1">
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-medium">Problema:</span> {project.problem}
        </p>
        <p className="text-sm text-gray-700 mb-4">{project.solution}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Destaques:
          </h4>
          <ul className="space-y-1">
            {project.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 font-mono">{techStackString}</p>
          {(project.productionUrl || (project.githubUrl && !project.isPrivate)) && (
            <a
              href={project.productionUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={`Visitar ${project.name}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        {project.isPrivate && (
          <p className="text-xs text-gray-500 mt-2 italic">
            Código privado no GitHub por se tratar de projeto
            comercial/confidencial (demonstração disponível sob solicitação).
          </p>
        )}
      </div>
    </motion.div>
  );
}

