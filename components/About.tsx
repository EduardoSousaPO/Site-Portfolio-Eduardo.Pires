"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Sobre mim
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Com experiência sólida em mercado financeiro, data science e
                inteligência artificial, atuo na construção de produtos digitais
                que resolvem problemas reais. Meu foco está em desenvolver SaaS,
                dashboards analíticos, automações inteligentes e agentes de IA
                que agregam valor ao negócio. Tenho perfil orientado a resultados,
                priorizando design limpo, código organizado e arquiteturas
                escaláveis. Integro conhecimentos de finanças quantitativas com
                desenvolvimento moderno, criando soluções que combinam análise de
                dados, automação e experiência do usuário de alta qualidade.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-square max-w-xs mx-auto lg:mx-0"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/images/freepik__eduportrait-of-a-distinguished-man-between-27-and-__76067.jpeg"
                alt="Eduardo Sousa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

