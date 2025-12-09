"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Contato
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-12 font-light max-w-2xl mx-auto">
            Disponível para projetos de desenvolvimento, IA e consultoria
            técnica.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="https://github.com/EduardoSousaPO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-sm hover:bg-white hover:border-gray-400 transition-colors duration-200"
            >
              <Github className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/eduardo-pires-5565a8145/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors duration-200 font-medium"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="mailto:contato@example.com"
              className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-sm hover:bg-white hover:border-gray-400 transition-colors duration-200"
            >
              <Mail className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-medium">E-mail</span>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-sm p-8 max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Conheça minha trajetória profissional
            </h3>
            <p className="text-base text-gray-700 mb-6 font-light leading-relaxed">
              Com mais de <span className="font-medium text-gray-900">10 anos de experiência</span> no mercado financeiro, atuei em grandes instituições como Santander Brasil, onde gerenciei carteiras de alta renda. Atualmente, atuo como Financial Advisor na Alocc Gestão Patrimonial e como Consultor de Investimentos CVM autônomo. Há <span className="font-medium text-gray-900">3 anos atuo como freelancer</span> desenvolvendo projetos sob demanda de web development, IA, machine learning, deep learning, análise quantitativa de ativos, sites comerciais e landing pages, além de fluxos de captação de leads, combinando expertise em finanças com desenvolvimento de soluções tecnológicas inovadoras.
            </p>
            <a
              href="https://www.linkedin.com/in/eduardo-pires-5565a8145/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-700 transition-colors"
            >
              Ver perfil completo no LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

