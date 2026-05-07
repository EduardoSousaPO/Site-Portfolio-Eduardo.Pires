"use client";

import { motion } from "framer-motion";
import {
  Bot,
  LineChart,
  Layers,
  ShoppingBag,
  Globe,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "IA aplicada & Agentes",
    bullets: [
      "Agentes autônomos com Anthropic Claude SDK e Model Context Protocol (MCP)",
      "Orquestração multi-agente, embeddings, GPT Vision e geração de narrativas",
      "Bots conversacionais (Telegram), scraping defensivo (Puppeteer/Apify)",
      "Engenharia assistida por IA — Claude Code, Cursor, Composer",
    ],
    proof: "Agente Telegram (NDA) · Agente IA SDR · Eficys",
  },
  {
    icon: Layers,
    title: "SaaS & ERPs full-stack",
    bullets: [
      "Next.js 14 · React 18 · TypeScript · Tailwind · shadcn/ui",
      "Hono, Express, Edge Functions (Deno) sobre Supabase (PostgreSQL/RLS)",
      "Onboarding, paywall, dashboards, RBAC com JWT, multi-tenant",
      "Migrações progressivas a partir de MySQL legado",
    ],
    proof: "Eficys · ERP B2B (NDA) · CRM LDC",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Pagamentos",
    bullets: [
      "Shopify Admin API, Shopee Open Platform, Nuvem Shop",
      "Stripe (assinaturas), PIX, cashin — webhooks idempotentes e ledger auditável",
      "Programas de fidelidade, rede de indicados, motor de comissões",
      "Operação prática de loja: catálogo, fulfillment, tráfego e SEO",
    ],
    proof: "Plataforma de fidelidade Shopify (NDA) · Integração Shopee (NDA)",
  },
  {
    icon: LineChart,
    title: "Data & análise quantitativa",
    bullets: [
      "Pipelines em Python (pandas/numpy) para preços, métricas e backtests",
      "Otimização de portfólios (Markowitz), screeners, rankings",
      "Modelagem em PostgreSQL/Supabase, rotinas automatizadas",
      "Visualizações financeiras e geração de análises com IA",
    ],
    proof: "Eficys · Dividendos AI · Magic Formula B3",
  },
  {
    icon: Globe,
    title: "Sites institucionais & DevOps",
    bullets: [
      "Sites em Next.js com SEO técnico e performance Lighthouse 95+",
      "Deploys em Vercel, Netlify e VPS Linux (PM2/Nginx/Let's Encrypt)",
      "Azure Blob com signed URLs, segregação de ambientes, feature flags",
      "CI/CD com GitHub, code review, smoke tests, Vitest e Playwright",
    ],
    proof: "Site LDC Capital · Pires Advisor · Engeloop",
  },
];

const timeline = [
  { year: "2015–2018", text: "PUC-GO · Bacharelado em Administração" },
  { year: "2017–2018", text: "Itaú Unibanco · Estagiário → Caixa" },
  { year: "2019–2021", text: "Santander · Select → Select High (Ultra renda)" },
  { year: "2021–2022", text: "BTG Pactual / Prosperidade · Partner Advisor" },
  { year: "2022–2023", text: "Insper · Advanced Program in Finance (APF)" },
  { year: "2023–2024", text: "GuiaInvest · Sócio & Financial Advisor Private" },
  { year: "2024", text: "Le Wagon · Bootcamp Ciência de Dados & IA" },
  {
    year: "Jan/2025–Jan/2026",
    text: "Eficys (ex-Vista ETF) · Founder & Full-Stack Engineer",
    highlight: true,
  },
  {
    year: "Dez/2025–hoje",
    text: "FlowCode · Desenvolvedor Full-Stack & Engenheiro de Soluções com IA",
    highlight: true,
  },
  {
    year: "Dez/2024–hoje",
    text: "Alocc Patrimonial + Consultor CVM · pano de fundo financeiro do meu trabalho em tech",
  },
];

const stackTicker = [
  "Next.js 14",
  "React 18",
  "TypeScript",
  "Tailwind",
  "shadcn/ui",
  "TanStack Query",
  "Zod",
  "Hono",
  "Express",
  "Edge Functions",
  "Supabase",
  "PostgreSQL",
  "RLS",
  "MySQL",
  "Anthropic Claude",
  "MCP",
  "Google GenAI",
  "LangChain",
  "Python",
  "Pandas",
  "Stripe",
  "PIX",
  "Shopify",
  "Shopee",
  "Nuvem Shop",
  "Vercel",
  "Netlify",
  "Azure Blob",
  "VPS Linux",
  "Vitest",
  "Playwright",
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-24 sm:py-32 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gray-500 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> O que entrego
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-[1.05] tracking-tight">
            Da{" "}
            <span className="italic font-medium">descoberta com o cliente</span>{" "}
            até a operação em produção. Construo SaaS, ERPs, agentes e
            integrações de e-commerce.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-8 max-w-2xl font-light leading-relaxed">
            Atuo ponta a ponta em produtos digitais com Next.js, Supabase e IA
            aplicada (Anthropic Claude SDK + MCP). Uso Spec-Driven Development
            e orquestração multi-agente para entregar com velocidade e
            qualidade — sprints por blocos, smoke tests, validação adversarial
            e deploy progressivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative bg-gray-50 hover:bg-gray-900 rounded-sm p-7 sm:p-9 transition-colors duration-500 border border-gray-200 hover:border-gray-900"
            >
              <div className="flex items-start justify-between mb-6">
                <s.icon
                  className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors duration-500"
                  strokeWidth={1.4}
                />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 group-hover:text-white transition-colors duration-500 mb-5 tracking-tight">
                {s.title}
              </h3>
              <ul className="space-y-2.5 mb-6">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm sm:text-[0.95rem] text-gray-700 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed font-light"
                  >
                    <span className="mt-2 inline-block w-1 h-1 rounded-full bg-gray-400 group-hover:bg-white flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500 group-hover:text-gray-400 transition-colors duration-500 font-medium">
                Em produção: {s.proof}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-gray-500 mb-4">
              Trajetória
            </p>
            <h3 className="text-3xl sm:text-4xl font-light text-gray-900 leading-[1.1] tracking-tight">
              Do banco de varejo à engenharia de produto com IA — sem perder o
              olhar de quem vive o negócio.
            </h3>
            <p className="text-base text-gray-600 mt-6 font-light leading-relaxed">
              Passei por Itaú, Santander e BTG antes de fundar a Eficys e
              entrar como engenheiro full-stack na FlowCode. O resultado: um
              dev que entende código, dado e cliente final — útil em fintech,
              wealth tech, e-commerce e qualquer produto onde regra de negócio
              e dinheiro andam juntos.
            </p>
          </motion.div>

          <motion.ol
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 relative border-l border-gray-200 pl-8 space-y-6"
          >
            {timeline.map((t) => (
              <li key={t.year + t.text} className="relative">
                <span
                  className={`absolute -left-[35px] top-2 w-2 h-2 rounded-full ${
                    t.highlight
                      ? "bg-gray-900 ring-4 ring-gray-200"
                      : "bg-gray-300"
                  }`}
                />
                <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                  {t.year}
                </div>
                <div
                  className={`text-base sm:text-lg ${
                    t.highlight
                      ? "text-gray-900 font-medium"
                      : "text-gray-700 font-light"
                  }`}
                >
                  {t.text}
                </div>
              </li>
            ))}
          </motion.ol>
        </div>

        <motion.a
          href="#contato"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 inline-flex items-center gap-2 text-gray-900 font-medium border-b border-gray-900 pb-1 hover:gap-3 transition-all"
        >
          Conversar sobre um projeto
          <ArrowUpRight className="w-4 h-4" />
        </motion.a>
      </div>

      <div className="relative mt-24 lg:mt-32 border-y border-gray-200 py-6 overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...stackTicker, ...stackTicker].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-400 tracking-tight uppercase flex items-center gap-12"
            >
              {tech}
              <span className="text-gray-300">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
