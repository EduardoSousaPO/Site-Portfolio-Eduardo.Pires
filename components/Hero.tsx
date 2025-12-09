"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projetos");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Construo produtos digitais com{" "}
              <span className="font-medium">IA, dados e alta performance</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0 font-light">
              Desenvolvedor de soluções com IA | Profissional do mercado
              financeiro | Criador de SaaS e automações
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-900 text-white rounded-sm font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Ver projetos
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-sm font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Contato
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square max-w-lg mx-auto lg:mx-0"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/freepik__eduportrait-of-a-distinguished-man-between-27-and-__8789.jpeg"
                alt="Eduardo Sousa - Desenvolvedor de Produtos Digitais"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToProjects}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Scroll para projetos"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

