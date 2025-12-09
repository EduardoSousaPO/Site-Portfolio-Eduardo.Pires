"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "Le Wagon",
      course: "Ciência de Dados e Inteligência Artificial",
      period: "Abril 2024 - Dezembro 2024",
      type: "Bootcamp",
      description: "Master the fundamental tools of Data Analysis, statistics, and Machine Learning and Deep Learning workflows",
      skills: [
        "Python", "SQL", "IA Generativa", "Machine Learning", "Deep Learning",
        "Big Data", "Dash", "Modelagem Preditiva", "Modelagem Estatística",
        "LLMs", "GitHub", "TensorFlow", "Jupyter", "RNN",
        "Back-end Development", "Data Engineering", "Pandas", "NumPy"
      ],
      highlight: true
    },
    {
      institution: "Pontifícia Universidade Católica de Goiás",
      course: "Bacharelado em Administração de Empresas",
      period: "Janeiro 2015 - Dezembro 2018",
      type: "Graduação"
    },
    {
      institution: "Insper",
      course: "Advanced Program Finance - APF",
      period: "Janeiro 2022 - 2023",
      type: "Pós-graduação",
      status: "Incompleto"
    },
    {
      institution: "Saint Paul Escola de Negócios",
      course: "Formação no Mercado de Derivativos Agrícolas",
      period: "Julho 2023",
      type: "Curso Especializado",
      topics: [
        "Administração de riscos de preços das commodities",
        "Mercado a Termo, Futuro e de Opções",
        "Papel da B3 no agro",
        "Derivativos agropecuários e a B3",
        "Contrato futuro de soja",
        "Operações de Hedge"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Formação Acadêmica
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Educação formal e especializações que fundamentam minha atuação em tecnologia, finanças e IA.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border border-gray-200 rounded-sm p-6 sm:p-8 ${
                item.highlight ? "bg-gray-50 border-gray-300 shadow-sm" : "bg-white"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  {item.highlight ? (
                    <Award className="w-8 h-8 text-gray-900" />
                  ) : (
                    <GraduationCap className="w-8 h-8 text-gray-600" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                      {item.course}
                    </h3>
                    {item.status && (
                      <span className="text-sm text-gray-500 italic">
                        {item.status}
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-700 font-medium mb-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{item.period}</p>
                  
                  {item.description && (
                    <p className="text-base text-gray-700 mb-4 font-light">
                      {item.description}
                    </p>
                  )}

                  {item.skills && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900 mb-3">
                        Tecnologias e Habilidades:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-sm text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.topics && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-900 mb-3">
                        Tópicos Abordados:
                      </p>
                      <ul className="space-y-1">
                        {item.topics.map((topic, topicIndex) => (
                          <li
                            key={topicIndex}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <span className="text-gray-400 mr-2">•</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

