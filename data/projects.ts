export type Project = {
  id: string;
  name: string;
  shortTagline: string;
  role: string;
  problem: string;
  solution: string;
  highlights: string[];
  features: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    ai_ml?: string[];
    devops?: string[];
    other?: string[];
  };
  githubUrl?: string;
  productionUrl?: string;
  isPrivate?: boolean;
  isCommercial?: boolean;
  isNda?: boolean;
  contextArea?: string;
};

export const projects: Project[] = [
  {
    id: "eficys",
    name: "Eficys",
    shortTagline: "SaaS para construção, análise e acompanhamento de carteiras globais de ETFs (rebrand de Vista ETF Curator)",
    role: "Founder · Software Engineer / Full-Stack Developer",
    problem:
      "Investidores precisam de ferramentas profissionais para construir e acompanhar carteiras globais de ETFs (EUA, Brasil, Europa) com pesquisa quantitativa, otimização e backtesting — soluções existentes são caras, fragmentadas ou superficiais.",
    solution:
      "Plataforma SaaS desenvolvida com Spec-Driven Development cobrindo onboarding, research (screeners e rankings), versionamento de carteiras, performance, otimização Markowitz, backtesting, simulações e assinaturas recorrentes. Rebranded de Vista ETF Curator para Eficys.",
    highlights: [
      "Pipelines de dados em Python para ingestão e processamento de preços e métricas",
      "Otimização de portfólios (Markowitz), backtesting e simulações de cenário",
      "Geração de análises e narrativas com IA",
      "Autenticação JWT, políticas RLS multi-tenant e rotinas automatizadas",
      "Stripe para assinaturas recorrentes e ledger auditável",
    ],
    features: [
      "Onboarding e paywall",
      "Research: screeners, rankings, comparações",
      "Otimização Markowitz e backtesting",
      "Versionamento e acompanhamento de carteiras",
      "Dashboards de performance e atribuição",
      "Assinaturas recorrentes via Stripe",
    ],
    techStack: {
      frontend: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query"],
      backend: ["Edge Functions (Deno)", "Hono"],
      database: ["Supabase (PostgreSQL)", "RLS"],
      ai_ml: ["Anthropic Claude SDK", "Pandas", "NumPy", "Markowitz"],
      devops: ["Vercel", "Stripe", "GitHub Actions"],
    },
    productionUrl: "https://www.eficys.com/",
    isCommercial: true,
    contextArea: "SaaS / Wealth Tech / Founder",
  },
  {
    id: "flowcode-fidelidade",
    name: "Plataforma de fidelidade & rede de indicados",
    shortTagline: "Programa de pontos B2C integrado ao Shopify, com motor de comissões e ledger auditável",
    role: "Desenvolvedor Full-Stack · FlowCode (cliente sob NDA)",
    problem:
      "Cliente do varejo/saúde precisava de programa de fidelidade integrado ao Shopify com rede de indicados multi-nível, motor de comissões e auditoria financeira — sem dependência de plataformas SaaS prontas e com regras de negócio próprias.",
    solution:
      "Plataforma B2C custom integrada ao Shopify Admin API com programa de pontos, rede de indicados multi-nível, motor de regras de comissionamento e ledger auditável — multi-tenant com Row Level Security.",
    highlights: [
      "Integração com Shopify Admin API e webhooks idempotentes",
      "Motor de regras de comissionamento e ledger auditável",
      "Conciliação de pedidos, estornos e cancelamentos",
      "Painel admin com auditoria, RBAC (JWT) e relatórios financeiros",
      "Modelagem multi-tenant com RLS no Supabase",
      "Feature flags para rollout progressivo",
    ],
    features: [
      "Programa de pontos e fidelidade",
      "Rede de indicados multi-nível",
      "Motor de comissões configurável",
      "Painel administrativo com RBAC",
      "Relatórios financeiros e auditoria",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Edge Functions (Deno)", "Webhooks idempotentes"],
      database: ["Supabase (PostgreSQL)", "RLS multi-tenant"],
      other: ["Shopify Admin API"],
      devops: ["Vercel"],
    },
    isPrivate: true,
    isNda: true,
    isCommercial: true,
    contextArea: "E-commerce / Fidelidade / NDA",
  },
  {
    id: "flowcode-shopee",
    name: "Integração Shopee Seller Center",
    shortTagline: "Sincronização de catálogo, preços e pedidos via Open Platform + scraping defensivo",
    role: "Engenheiro de Soluções · FlowCode (cliente sob NDA)",
    problem:
      "Seller Shopee precisava sincronizar catálogo, preços, estoque e pedidos com seu ERP, e ainda monitorar concorrência sem depender de soluções genéricas — com idempotência e auditoria.",
    solution:
      "Integração com Shopee Open Platform / Seller Center via OAuth, com sincronização incremental, pipeline de scraping defensivo para enriquecimento de catálogo e monitoramento, webhooks idempotentes e ledger auditável.",
    highlights: [
      "OAuth + sincronização incremental e idempotente de catálogo, preços e estoque",
      "Scraping defensivo (Puppeteer/Apify) com filas, retries e backoff exponencial",
      "Reconciliação de pedidos via webhooks idempotentes",
      "Ledger auditável e logs estruturados",
      "Modelagem multi-tenant com RLS, mídia em Azure Blob com signed URLs",
    ],
    features: [
      "Sincronização Shopee ↔ ERP",
      "Monitoramento de preço e posição da concorrência",
      "Reconciliação de pedidos e estornos",
      "Painel de jobs e observabilidade",
    ],
    techStack: {
      backend: ["Hono", "Edge Functions (Deno)"],
      database: ["Supabase (PostgreSQL)", "RLS"],
      other: ["Shopee Open Platform", "Puppeteer", "Apify", "Azure Blob"],
      devops: ["Vercel", "VPS Linux (PM2/Nginx)"],
    },
    isPrivate: true,
    isNda: true,
    isCommercial: true,
    contextArea: "E-commerce / Integração / NDA",
  },
  {
    id: "flowcode-erp-b2b",
    name: "ERP & catálogo B2B com CMS proprietário",
    shortTagline: "ERP industrial com CMS draft→preview→publish e migração progressiva de MySQL legado",
    role: "Desenvolvedor Full-Stack · FlowCode (cliente sob NDA)",
    problem:
      "Indústria com ERP em MySQL legado precisava de catálogo B2B moderno, CMS proprietário (draft→preview→publish) e site institucional com SEO técnico, sem rewrite arriscado do core.",
    solution:
      "ERP B2B com gestão de pedidos, catálogo e CMS proprietário versionado. Anti-corruption layer sobre o MySQL legado e migração progressiva para Supabase/PostgreSQL com domínio limpo, mantendo o sistema em produção.",
    highlights: [
      "Anti-corruption layer sobre MySQL legado",
      "Migração progressiva para Supabase/PostgreSQL",
      "CMS proprietário com versionamento e gestão de mídia",
      "Site institucional com SEO técnico e integração RD Station",
      "Deploy híbrido: Vercel + VPS Linux (PM2/Nginx) para serviços auxiliares",
    ],
    features: [
      "Gestão de pedidos B2B",
      "Catálogo com versionamento",
      "CMS draft → preview → publish",
      "Geração de leads (RD Station)",
      "SEO técnico no site institucional",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Hono", "Edge Functions (Deno)"],
      database: ["Supabase (PostgreSQL)", "MySQL (legado)"],
      other: ["RD Station", "Azure Blob"],
      devops: ["Vercel", "VPS Linux (PM2/Nginx)"],
    },
    isPrivate: true,
    isNda: true,
    isCommercial: true,
    contextArea: "ERP / B2B / NDA",
  },
  {
    id: "flowcode-agente-telegram",
    name: "Agente autônomo com interface em Telegram",
    shortTagline: "Agente conversacional multi-agente com Anthropic Claude SDK + MCP, scraping e relatórios",
    role: "Engenheiro de Soluções com IA · FlowCode (cliente sob NDA)",
    problem:
      "Cliente precisava de assistente conversacional capaz de acionar ferramentas (scraping, relatórios, agendamentos) com auditoria de decisões e controle de uso por usuário.",
    solution:
      "Agente conversacional via Telegram com orquestração multi-agente e Model Context Protocol (MCP) para acionamento de ferramentas, scraping de fontes públicas, geração de relatórios em PDF/Excel e disparos programados.",
    highlights: [
      "Anthropic Claude SDK + Model Context Protocol (MCP)",
      "Orquestração multi-agente com tool use",
      "Scraping público e geração de PDF/Excel",
      "Persistência em Supabase com auditoria de decisões",
      "Cron jobs e controle de uso por usuário",
    ],
    features: [
      "Conversa em linguagem natural via Telegram",
      "Acionamento de ferramentas via MCP",
      "Geração de relatórios sob demanda",
      "Disparos programados",
      "Histórico e auditoria",
    ],
    techStack: {
      backend: ["Node.js", "Edge Functions (Deno)"],
      database: ["Supabase (PostgreSQL)"],
      ai_ml: ["Anthropic Claude SDK", "MCP", "Multi-agent"],
      other: ["Telegram Bot API", "Puppeteer", "Apify"],
      devops: ["VPS Linux (PM2)", "Cron"],
    },
    isPrivate: true,
    isNda: true,
    isCommercial: true,
    contextArea: "IA / Agentes / NDA",
  },
  {
    id: "flowcode-saas-pagamento",
    name: "SaaS com onboarding, paywall e pagamentos",
    shortTagline: "Assinaturas Stripe + cobranças avulsas via PIX/cashin com ledger auditável",
    role: "Desenvolvedor Full-Stack · FlowCode (cliente sob NDA)",
    problem:
      "Cliente precisava lançar produto SaaS com onboarding, paywall, dashboards e cobrança recorrente — incluindo PIX e cashin para o público brasileiro, com auditoria financeira e idempotência.",
    solution:
      "SaaS completo com onboarding, paywall e dashboards de cliente, assinaturas recorrentes via Stripe e cobranças avulsas via PIX/cashin. Webhooks idempotentes, ledger auditável e conciliação de cobranças, estornos e mudanças de plano.",
    highlights: [
      "Onboarding, paywall e dashboards de cliente",
      "Stripe (assinaturas) + PIX/cashin (avulsos)",
      "Webhooks idempotentes com ledger auditável",
      "Autenticação JWT, RBAC e RLS multi-tenant",
      "Testes em Vitest e Playwright (E2E + smoke tests)",
    ],
    features: [
      "Onboarding e paywall",
      "Dashboards de cliente",
      "Assinaturas recorrentes",
      "Cobranças avulsas (PIX/cashin)",
      "Painel administrativo",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Edge Functions (Deno)"],
      database: ["Supabase (PostgreSQL)", "RLS"],
      other: ["Stripe", "PIX", "cashin"],
      devops: ["Vercel", "Vitest", "Playwright"],
    },
    isPrivate: true,
    isNda: true,
    isCommercial: true,
    contextArea: "SaaS / Pagamentos / NDA",
  },
  {
    id: "agente-ia-sdr",
    name: "Agente IA SDR",
    shortTagline: "Automação de prospecção e qualificação de leads com agentes de IA",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem:
      "Processos manuais de prospecção e qualificação consomem tempo da equipe de vendas e impedem escala.",
    solution:
      "Agente de IA autônomo que automatiza prospecção, qualificação e follow-up usando LLMs e integração com canais (WhatsApp, e-mail) e CRM.",
    highlights: [
      "Automação completa do pipeline de prospecção",
      "Integração com WhatsApp, e-mail e CRM",
      "Qualificação inteligente via LLM",
      "Orquestração de tarefas com LangChain",
    ],
    features: [
      "Prospecção automatizada",
      "Qualificação por IA",
      "Follow-up personalizado",
      "Dashboard de performance",
    ],
    techStack: {
      ai_ml: ["LangChain", "OpenAI", "Groq"],
      backend: ["Python", "FastAPI"],
      database: ["PostgreSQL"],
      other: ["WhatsApp API", "E-mail API"],
    },
    isPrivate: true,
    isCommercial: true,
    contextArea: "IA / Automação comercial",
  },
  {
    id: "site-ldc-capital",
    name: "Site LDC Capital",
    shortTagline: "Site institucional Next.js com Lighthouse 95+ e gestão de leads",
    role: "Desenvolvedor principal",
    problem:
      "Empresa de gestão patrimonial precisava de site institucional moderno, performático e otimizado para conversão.",
    solution:
      "Site em Next.js com SEO técnico, Lighthouse 95+, gestão de leads via Supabase, design system e blog com MDX.",
    highlights: [
      "Lighthouse 95+",
      "SEO técnico com structured data",
      "Captura de leads integrada",
      "Blog com MDX",
    ],
    features: [
      "Landing pages otimizadas",
      "Blog com categorias",
      "Formulário de leads",
      "FAQ interativo",
      "Download de materiais",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
      backend: ["Next.js API Routes", "Supabase"],
      database: ["Supabase (PostgreSQL)"],
      devops: ["Vercel"],
    },
    githubUrl: "https://github.com/EduardoSousaPO/site-ldc-capital",
    productionUrl: "https://www.ldccapital.com.br",
    contextArea: "Web / Finanças",
  },
  {
    id: "crm-ldc",
    name: "CRM LDC",
    shortTagline: "CRM full-stack com pipeline visual e automações",
    role: "Desenvolvedor principal",
    problem:
      "Gestão de leads e pipeline em planilhas dispersas dificultava produtividade da equipe.",
    solution:
      "CRM em Next.js + Supabase com autenticação, pipeline kanban, gestão de clientes, tarefas e relatórios analíticos.",
    highlights: [
      "Auth com Supabase",
      "Pipeline Kanban interativo",
      "Tarefas e lembretes",
      "Dashboards e relatórios",
    ],
    features: [
      "Gestão de clientes",
      "Pipeline Kanban",
      "Tarefas e atividades",
      "Histórico de interações",
      "Controle de acesso",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Supabase"],
      database: ["Supabase (PostgreSQL)"],
      devops: ["Vercel"],
    },
    contextArea: "SaaS B2B / CRM",
  },
  {
    id: "pires-advisor",
    name: "Pires Advisor",
    shortTagline: "Site profissional de consultoria financeira com blog integrado",
    role: "Desenvolvedor principal",
    problem:
      "Necessidade de site profissional para apresentar consultoria financeira, planejamento patrimonial e captar leads qualificados.",
    solution:
      "Site institucional em Next.js com seções de serviços, blog sobre finanças e formulários de contato.",
    highlights: [
      "Design profissional",
      "SEO otimizado",
      "Blog integrado",
      "Captura de leads",
    ],
    features: [
      "Apresentação de serviços",
      "Blog de finanças",
      "Formulário de contato",
      "Metodologia e experiência",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      devops: ["Vercel"],
    },
    contextArea: "Web / Finanças",
  },
  {
    id: "dividendos-ai",
    name: "Dividendos AI",
    shortTagline: "Análise inteligente de dividendos com IA e data science",
    role: "Desenvolvedor principal",
    problem:
      "Investidores em dividendos precisam de análises preditivas e de sustentabilidade — não apenas histórico.",
    solution:
      "Plataforma de análise de dividendos com modelos preditivos, análise de sustentabilidade e recomendações por perfil.",
    highlights: [
      "Modelos preditivos para dividendos futuros",
      "Análise de sustentabilidade",
      "Visualizações interativas",
      "Dados financeiros em tempo real",
    ],
    features: [
      "Histórico de dividendos",
      "Previsão de pagamentos",
      "Comparação entre empresas",
      "Alertas personalizados",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "FastAPI"],
      database: ["PostgreSQL"],
      ai_ml: ["Pandas", "NumPy", "Scikit-learn", "yfinance"],
    },
    contextArea: "IA / Finanças / Data Science",
  },
  {
    id: "loja-chuteiras",
    name: "Loja de Chuteiras (Nuvem Shop)",
    shortTagline: "E-commerce próprio operado ponta a ponta no segmento esportivo",
    role: "Founder & Operador",
    problem:
      "Validar prática operacional de e-commerce — funil, tráfego, fulfillment — para alimentar projetos B2B.",
    solution:
      "Loja temática na Nuvem Shop com customização de tema, catálogo, integrações de pagamento e operação ponta a ponta (cadastro, copy, fotografia, fulfillment, atendimento, tráfego).",
    highlights: [
      "Operação real de loja Nuvem Shop",
      "Visão prática de funil ponta a ponta",
      "SEO e tráfego pago",
      "Atendimento e pós-venda",
    ],
    features: [
      "Customização de tema",
      "Gestão de catálogo",
      "Pagamentos e fretes",
      "Métricas de conversão",
    ],
    techStack: {
      other: ["Nuvem Shop", "Pagamentos", "Redes sociais"],
    },
    contextArea: "E-commerce / Operação",
  },
  {
    id: "landing-page-engeloop",
    name: "Landing Page Engeloop",
    shortTagline: "Landing page Next.js otimizada para conversão",
    role: "Desenvolvedor principal",
    problem:
      "Empresa precisava de landing page profissional otimizada para conversão de leads.",
    solution:
      "Landing em Next.js com design moderno, animações suaves e formulários otimizados.",
    highlights: [
      "Design responsivo",
      "Otimizada para conversão",
      "Animações suaves",
      "SEO básico",
    ],
    features: [
      "Hero impactante",
      "Seções de benefícios",
      "Formulário de contato",
      "Depoimentos",
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      devops: ["Vercel"],
    },
    contextArea: "Web / Landing",
  },
];
