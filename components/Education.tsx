"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";

const education = [
  {
    institution: "Le Wagon",
    course: "Ciência de Dados e Inteligência Artificial",
    period: "Abr/2024 – Dez/2024",
    type: "Bootcamp",
    description:
      "Fundamentos de análise de dados, estatística e workflows de Machine Learning e Deep Learning aplicados a problemas reais.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Deep Learning",
      "RNN",
      "LLMs",
      "IA Generativa",
      "Modelagem Estatística",
      "Modelagem Preditiva",
      "Data Engineering",
      "Big Data",
      "Dash",
      "Jupyter",
      "GitHub",
    ],
    highlight: true,
  },
  {
    institution: "Insper",
    course: "Advanced Program in Finance (APF)",
    period: "Jan/2022 – 2023",
    type: "Pós-graduação",
    status: "Incompleto",
  },
  {
    institution: "Pontifícia Universidade Católica de Goiás",
    course: "Bacharelado em Administração de Empresas",
    period: "Jan/2015 – Dez/2018",
    type: "Graduação",
  },
  {
    institution: "Saint Paul Escola de Negócios",
    course: "Mercado de Derivativos Agrícolas",
    period: "Jul/2023",
    type: "Curso especializado",
    topics: [
      "Administração de risco de preços de commodities",
      "Mercado a termo, futuro e de opções",
      "Papel da B3 no agro",
      "Contrato futuro de soja",
      "Operações de Hedge",
    ],
  },
];

const certifications = [
  { name: "CEA — Especialista em Investimentos ANBIMA", year: "Jan/2023" },
  { name: "ANCORD — Agente Autônomo de Investimentos", year: "Set/2020" },
  { name: "CPA-20 ANBIMA", year: "Abr/2018" },
  { name: "USP (Poli) — Engenharia Econômica", year: "Ago/2018" },
  { name: "USP (Poli) — Matemática Financeira", year: "Jul/2018" },
  { name: "BM&FBovespa — Finanças e Investimento em Ações", year: "Out/2016" },
];

export default function Education() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gray-500 mb-6">
            Formação
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-[1.05] tracking-tight mb-6">
            <span className="italic font-medium">Ciência de dados</span> e
            finanças quantitativas como base do meu trabalho em produto.
          </h2>
        </motion.div>

        <div className="space-y-5 mb-20">
          {education.map((item, index) => (
            <motion.div
              key={item.course}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`border rounded-sm p-7 sm:p-9 ${
                item.highlight
                  ? "bg-gray-50 border-gray-300"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="flex-shrink-0">
                  {item.highlight ? (
                    <Award className="w-7 h-7 text-gray-900" strokeWidth={1.4} />
                  ) : (
                    <GraduationCap
                      className="w-7 h-7 text-gray-600"
                      strokeWidth={1.4}
                    />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 tracking-tight">
                      {item.course}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                        {item.type}
                      </span>
                      {item.status && (
                        <span className="text-xs text-gray-500 italic">
                          · {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 mb-1">
                    {item.institution}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">
                    {item.period}
                  </p>

                  {item.description && (
                    <p className="text-sm sm:text-base text-gray-700 mb-4 font-light leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.skills && (
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-sm text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.topics && (
                    <ul className="space-y-1.5 mt-2">
                      {item.topics.map((topic) => (
                        <li
                          key={topic}
                          className="text-sm text-gray-600 font-light flex items-start gap-3"
                        >
                          <span className="mt-2 inline-block w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gray-500 mb-6 flex items-center gap-2">
            <BadgeCheck className="w-4 h-4" /> Certificações & cursos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="border border-gray-200 rounded-sm p-5 hover:border-gray-900 transition-colors"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  {c.year}
                </div>
                <div className="text-sm font-medium text-gray-900 leading-snug">
                  {c.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
