"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "FlowCode", label: "Full-Stack & Eng. de Soluções com IA" },
  { value: "Vista ETF", label: "Founder · plataforma SaaS de ETFs globais" },
  { value: "6+", label: "produtos em produção (SaaS · ERP · agentes)" },
  { value: "10 anos", label: "em finanças → hoje 100% em tecnologia" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-white">
      <header className="absolute top-0 left-0 right-0 z-10 border-b border-gray-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-5 flex items-center justify-between text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-700">
          <span className="font-medium">Eduardo Sousa Pires</span>
          <span className="hidden md:inline text-gray-500">
            Full-Stack · IA · Engenheiro de soluções
          </span>
          <button
            onClick={() => scrollTo("contato")}
            className="hover-line font-medium"
          >
            Contato
          </button>
        </div>
      </header>

      <div className="flex-1 flex items-center pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gray-500 mb-6">
                Disponível para projetos · 2026
              </p>

              <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-gray-900 leading-[0.95] mb-8 tracking-tight">
                Construo{" "}
                <span className="italic font-medium">SaaS, agentes</span>
                <br />
                e ERPs com IA,
                <br />
                Next.js e Supabase.
              </h1>

              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
                Desenvolvedor full-stack & engenheiro de soluções com IA na{" "}
                <span className="text-gray-900 font-medium">FlowCode</span>.
                Founder da{" "}
                <span className="text-gray-900 font-medium">Vista ETF</span>.
                Background sólido em mercado financeiro (Santander · BTG ·
                Itaú) que se traduz em produtos quantitativos e SaaS B2B.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <motion.button
                  onClick={() => scrollTo("projetos")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gray-900 text-white rounded-sm font-medium hover:bg-black transition-colors"
                >
                  Ver projetos
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
                <motion.button
                  onClick={() => scrollTo("expertise")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-gray-900 text-gray-900 rounded-sm font-medium hover:bg-gray-900 hover:text-white transition-colors"
                >
                  O que entrego
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/freepik__eduportrait-of-a-distinguished-man-between-27-and-__8789.jpeg"
                  alt="Eduardo Sousa Pires"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 bg-gray-900 text-white px-4 py-2 text-xs uppercase tracking-[0.2em]">
                Eduardo Sousa Pires
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 border-t border-gray-200 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-medium text-gray-900 mb-2 tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo("expertise")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-gray-700 transition-colors items-center gap-2 text-xs uppercase tracking-[0.22em]"
        aria-label="Scroll"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="inline-flex"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
        scroll
      </motion.button>
    </section>
  );
}
