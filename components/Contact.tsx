"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const links = [
  {
    href: "https://www.linkedin.com/in/eduardo-pires-5565a8145/",
    label: "LinkedIn",
    handle: "/eduardo-pires",
    icon: Linkedin,
    primary: true,
  },
  {
    href: "https://wa.me/5562991595338",
    label: "WhatsApp",
    handle: "(62) 9 9159-5338",
    icon: MessageCircle,
  },
  {
    href: "mailto:eduspires123@gmail.com",
    label: "E-mail",
    handle: "eduspires123@gmail.com",
    icon: Mail,
  },
  {
    href: "https://github.com/EduardoSousaPO",
    label: "GitHub",
    handle: "/EduardoSousaPO",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative py-24 sm:py-32 bg-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gray-400 mb-6">
            Vamos conversar
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.98] tracking-tight mb-8">
            Tem um projeto de{" "}
            <span className="italic font-medium">
              SaaS, agente de IA ou e-commerce
            </span>
            ?<br />
            Eu construo com você.
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-light leading-relaxed">
            Aceito projetos sob demanda em desenvolvimento full-stack (Next.js
            + Supabase), agentes com Anthropic Claude SDK / MCP, integrações
            de e-commerce (Shopify, Shopee, Nuvem Shop) e análise quantitativa
            com Python. Discovery, sprints por blocos e deploy em produção.
            Resposta em até 24 horas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-6 sm:p-7 rounded-sm border transition-colors ${
                l.primary
                  ? "bg-white text-gray-900 border-white hover:bg-gray-100"
                  : "bg-transparent border-gray-700 hover:border-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <l.icon className="w-5 h-5" strokeWidth={1.6} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] opacity-70">
                    {l.label}
                  </div>
                  <div className="text-sm sm:text-base font-medium mt-1">
                    {l.handle}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs uppercase tracking-[0.22em] text-gray-500"
        >
          <span>© 2026 Eduardo Sousa Pires Oliveira</span>
          <span>Goiânia · Brasil · Remoto</span>
        </motion.div>
      </div>
    </section>
  );
}
