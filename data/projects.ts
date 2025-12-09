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
  contextArea?: string;
};

export const projects: Project[] = [
  {
    id: "agente-ia-sdr",
    name: "Agente IA SDR",
    shortTagline: "Automação inteligente para desenvolvimento de vendas com IA",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem: "Processos manuais de prospecção e qualificação de leads consomem tempo valioso da equipe de vendas, reduzindo produtividade e escalabilidade.",
    solution: "Agente de IA autônomo que automatiza prospecção, qualificação de leads e follow-up usando LLMs e integração com ferramentas de CRM e comunicação.",
    highlights: [
      "Automação completa do pipeline de vendas com agentes de IA",
      "Integração com APIs de comunicação (WhatsApp, Email, CRM)",
      "Processamento de linguagem natural para qualificação inteligente de leads",
      "Sistema de orquestração de tarefas com LangChain",
      "Redução de 70%+ no tempo de prospecção manual"
    ],
    features: [
      "Prospecção automatizada de leads",
      "Qualificação inteligente usando IA",
      "Follow-up automático personalizado",
      "Integração com CRM",
      "Dashboard de métricas e performance"
    ],
    techStack: {
      ai_ml: ["LangChain", "OpenAI", "Groq"],
      backend: ["Python", "FastAPI"],
      database: ["PostgreSQL"],
      other: ["WhatsApp API", "Email API", "CRM Integration"]
    },
    productionUrl: "https://frontend-agente-qualificador.vercel.app",
    isPrivate: true,
    isCommercial: true,
    contextArea: "IA / Automação comercial"
  },
  {
    id: "saas-etf-curator",
    name: "VISTA ETF",
    shortTagline: "Plataforma SaaS para curadoria e análise inteligente de ETFs",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem: "Investidores e gestores precisam de ferramentas profissionais para análise, comparação e curadoria de ETFs, mas as soluções existentes são caras ou limitadas.",
    solution: "SaaS completo com análise quantitativa de ETFs, recomendações baseadas em IA, backtesting e ferramentas de gestão de portfólio para profissionais do mercado financeiro.",
    highlights: [
      "Análise quantitativa avançada de ETFs",
      "Recomendações personalizadas usando machine learning",
      "Backtesting de estratégias de investimento",
      "API robusta para integração com outras plataformas",
      "Dashboard interativo com visualizações de dados financeiros"
    ],
    features: [
      "Curadoria inteligente de ETFs",
      "Análise de performance e risco",
      "Comparação de produtos",
      "Alertas e notificações personalizadas",
      "Gestão de portfólios"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      backend: ["Node.js", "Python"],
      database: ["PostgreSQL", "Redis"],
      ai_ml: ["Pandas", "NumPy", "Scikit-learn"],
      devops: ["Vercel", "Docker"]
    },
    productionUrl: "https://www.vistaetf.com.br",
    isPrivate: true,
    isCommercial: true,
    contextArea: "Finanças / SaaS B2B"
  },
  {
    id: "site-ldc-capital",
    name: "Site LDC Capital",
    shortTagline: "Site institucional de alta performance com SEO otimizado",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem: "Empresa de gestão patrimonial precisava de site institucional moderno, performático e otimizado para conversão de leads qualificados.",
    solution: "Site institucional desenvolvido em Next.js com arquitetura otimizada para SEO, performance (Lighthouse 95+), integração com Supabase para gestão de leads e design system profissional.",
    highlights: [
      "Performance excepcional (Lighthouse Score 95+)",
      "SEO otimizado com metadata e structured data",
      "Sistema de gestão de leads integrado",
      "Design system completo e responsivo",
      "Blog com MDX para conteúdo dinâmico",
      "Formulários com validação e integração de APIs"
    ],
    features: [
      "Landing pages otimizadas para conversão",
      "Blog com sistema de categorias",
      "Formulário de captura de leads",
      "Carrossel de depoimentos",
      "FAQ interativo",
      "Download de materiais (e-books, guias)"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
      backend: ["Next.js API Routes", "Supabase"],
      database: ["Supabase (PostgreSQL)"],
      devops: ["Vercel"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/site-ldc-capital",
    productionUrl: "https://www.ldccapital.com.br",
    contextArea: "Desenvolvimento Web / Finanças"
  },
  {
    id: "crm-ldc",
    name: "CRM LDC",
    shortTagline: "Sistema completo de gestão de relacionamento com clientes",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem: "Gestão manual de clientes, leads e pipeline de vendas em planilhas e ferramentas desconectadas, dificultando acompanhamento e produtividade da equipe.",
    solution: "CRM completo desenvolvido em Next.js com autenticação, gestão de clientes, pipeline de vendas, automações e integração com ferramentas de comunicação.",
    highlights: [
      "Autenticação segura com Supabase Auth",
      "Pipeline de vendas visual e interativo",
      "Gestão completa de clientes e contatos",
      "Sistema de tarefas e lembretes",
      "Relatórios e dashboards analíticos",
      "Integração com APIs externas"
    ],
    features: [
      "Gestão de clientes e contatos",
      "Pipeline de vendas (Kanban)",
      "Sistema de tarefas e atividades",
      "Histórico de interações",
      "Relatórios e métricas",
      "Autenticação e controle de acesso"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Supabase"],
      database: ["Supabase (PostgreSQL)"],
      devops: ["Vercel"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/crm-ldc",
    productionUrl: "https://crm-ldc-capital.vercel.app",
    contextArea: "SaaS B2B / CRM"
  },
  {
    id: "ldc-capital-programs",
    name: "LDC Capital Programs",
    shortTagline: "Sistema de gestão de programas e produtos financeiros",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem: "Necessidade de gerenciar múltiplos programas de investimento, produtos financeiros e relacionamento com clientes de forma centralizada e eficiente.",
    solution: "Sistema completo para gestão de programas financeiros, produtos, clientes e operações, com interface administrativa e relatórios avançados.",
    highlights: [
      "Gestão centralizada de programas financeiros",
      "Interface administrativa completa",
      "Sistema de permissões e roles",
      "Relatórios e analytics avançados",
      "Integração com sistemas financeiros"
    ],
    features: [
      "Gestão de programas e produtos",
      "Cadastro de clientes",
      "Controle de operações",
      "Relatórios personalizados",
      "Dashboard administrativo"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Supabase"],
      database: ["Supabase (PostgreSQL)"],
      devops: ["Vercel"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/LDC-CAPITAL-PROGRAMS",
    contextArea: "Finanças / SaaS B2B"
  },
  {
    id: "gestor-tarefas-tdah",
    name: "FocusFlow - Gestor de Tarefas TDAH",
    shortTagline: "Aplicação web especializada para gestão de tarefas para pessoas com TDAH",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem: "Pessoas com TDAH enfrentam dificuldades com ferramentas de produtividade tradicionais que não consideram suas necessidades específicas de organização e foco.",
    solution: "Aplicação web desenvolvida em Flask com interface adaptada para TDAH, incluindo técnicas de Pomodoro, organização visual, lembretes e gamificação para aumentar engajamento.",
    highlights: [
      "Interface adaptada para necessidades de TDAH",
      "Técnica Pomodoro integrada",
      "Organização visual e intuitiva",
      "Sistema de gamificação",
      "Lembretes e notificações inteligentes"
    ],
    features: [
      "Gestão de tarefas com categorias",
      "Timer Pomodoro integrado",
      "Visualização de progresso",
      "Sistema de recompensas",
      "Lembretes personalizados",
      "Estatísticas de produtividade"
    ],
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Python", "Flask"],
      database: ["SQLite"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/gestor_tarefas_tdah",
    contextArea: "Produto Digital / Saúde"
  },
  {
    id: "landing-page-engeloop",
    name: "Landing Page Engeloop",
    shortTagline: "Landing page moderna e otimizada para conversão",
    role: "Desenvolvedor principal",
    problem: "Empresa precisava de landing page profissional, moderna e otimizada para conversão de visitantes em leads qualificados.",
    solution: "Landing page desenvolvida em Next.js com design moderno, animações suaves, formulários otimizados e integração com ferramentas de marketing.",
    highlights: [
      "Design moderno e responsivo",
      "Otimização para conversão",
      "Animações e interações suaves",
      "Performance otimizada",
      "SEO básico implementado"
    ],
    features: [
      "Hero section impactante",
      "Seções de benefícios e features",
      "Formulário de contato",
      "Depoimentos",
      "Call-to-action otimizado"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      devops: ["Vercel"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/landing_page_engeloop",
    productionUrl: "https://landing-page-engeloop.vercel.app",
    contextArea: "Desenvolvimento Web"
  },
  {
    id: "equilibri",
    name: "Equilibri",
    shortTagline: "Plataforma para equilíbrio e bem-estar",
    role: "Desenvolvedor principal",
    problem: "Necessidade de uma plataforma digital para gestão de bem-estar e equilíbrio pessoal.",
    solution: "Plataforma web desenvolvida para auxiliar usuários em sua jornada de bem-estar, com ferramentas de acompanhamento e métricas.",
    highlights: [
      "Interface intuitiva e moderna",
      "Sistema de acompanhamento personalizado",
      "Visualizações de dados e progresso"
    ],
    features: [
      "Gestão de objetivos",
      "Acompanhamento de progresso",
      "Métricas e estatísticas",
      "Interface responsiva"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes"],
      database: ["PostgreSQL"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/equilibri",
    productionUrl: "https://equilibri.vercel.app",
    contextArea: "Produto Digital"
  },
  {
    id: "donum-app",
    name: "Donum App",
    shortTagline: "Aplicativo para doações e impacto social",
    role: "Desenvolvedor principal",
    problem: "Facilitar conexão entre doadores e causas sociais de forma transparente e eficiente.",
    solution: "Aplicativo web desenvolvido para conectar doadores com organizações e causas, com sistema de transparência e acompanhamento de impacto.",
    highlights: [
      "Sistema de doações integrado",
      "Transparência e rastreabilidade",
      "Interface focada em experiência do usuário"
    ],
    features: [
      "Cadastro de organizações",
      "Sistema de doações",
      "Acompanhamento de impacto",
      "Perfis de usuários"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes"],
      database: ["PostgreSQL"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/donum-app",
    productionUrl: "https://donum-app.vercel.app",
    contextArea: "Produto Digital / Impacto Social"
  },
  {
    id: "seletor-a-es",
    name: "Seletor de Ações",
    shortTagline: "Ferramenta de seleção e análise",
    role: "Desenvolvedor principal",
    problem: "Necessidade de ferramenta para seleção e análise de dados de forma eficiente.",
    solution: "Aplicação web desenvolvida para seleção, filtragem e análise de dados com interface intuitiva e funcionalidades avançadas.",
    highlights: [
      "Interface de seleção intuitiva",
      "Filtros avançados",
      "Visualização de resultados"
    ],
    features: [
      "Seleção e filtragem de dados",
      "Análise de resultados",
      "Exportação de dados",
      "Interface responsiva"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes"],
      database: ["PostgreSQL"]
    },
    contextArea: "Ferramenta / Análise de Dados"
  },
  {
    id: "site-larissa",
    name: "Site Larissa",
    shortTagline: "Site personalizado para cliente",
    role: "Desenvolvedor principal",
    problem: "Cliente precisava de site pessoal/profissional moderno e responsivo para apresentar seus serviços.",
    solution: "Site personalizado desenvolvido em Next.js com design moderno, otimizado para performance e SEO.",
    highlights: [
      "Design personalizado e moderno",
      "Performance otimizada",
      "Responsivo e acessível"
    ],
    features: [
      "Páginas de apresentação",
      "Portfólio de trabalhos",
      "Formulário de contato",
      "Blog (opcional)"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      devops: ["Vercel"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/site-larissa",
    productionUrl: "https://site-larissa-6gnv.vercel.app",
    contextArea: "Desenvolvimento Web"
  },
  {
    id: "pires-advisor",
    name: "Pires Advisor",
    shortTagline: "Site profissional de consultoria financeira e planejamento patrimonial",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem: "Necessidade de um site profissional moderno para apresentar serviços de consultoria financeira, planejamento patrimonial e assessoria de investimentos de forma clara e impactante.",
    solution: "Site institucional desenvolvido em Next.js com design elegante, seções de serviços, blog sobre finanças e investimentos, e integração com formulários de contato para captação de leads qualificados.",
    highlights: [
      "Design profissional e elegante",
      "Performance otimizada para SEO",
      "Blog integrado para conteúdo sobre finanças",
      "Formulários de contato otimizados",
      "Responsivo e acessível"
    ],
    features: [
      "Apresentação de serviços profissionais",
      "Blog sobre finanças e investimentos",
      "Formulário de contato",
      "Seções sobre metodologia e experiência",
      "Design moderno e profissional"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      devops: ["Vercel"]
    },
    productionUrl: "https://www.piresadvisor.com.br",
    contextArea: "Desenvolvimento Web / Finanças"
  },
  {
    id: "dividendos-ai",
    name: "Dividendos AI",
    shortTagline: "Análise inteligente de dividendos com IA e data science",
    role: "Desenvolvedor principal / Arquiteto da solução",
    problem: "Investidores em dividendos precisam de análises profundas e preditivas sobre pagamentos futuros, mas ferramentas existentes são limitadas a dados históricos.",
    solution: "Plataforma de análise de dividendos usando IA para previsão de pagamentos, análise de sustentabilidade e recomendações personalizadas baseadas em machine learning.",
    highlights: [
      "Modelos preditivos para dividendos futuros",
      "Análise de sustentabilidade usando múltiplos indicadores",
      "Processamento de dados financeiros em tempo real",
      "Visualizações interativas de dados",
      "Recomendações personalizadas baseadas em perfil do investidor"
    ],
    features: [
      "Análise histórica de dividendos",
      "Previsão de pagamentos futuros",
      "Análise de sustentabilidade",
      "Comparação entre empresas",
      "Alertas personalizados",
      "Dashboard com métricas avançadas"
    ],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Python", "FastAPI"],
      database: ["PostgreSQL"],
      ai_ml: ["Pandas", "NumPy", "Scikit-learn", "yfinance"],
      other: ["APIs financeiras"]
    },
    githubUrl: "https://github.com/EduardoSousaPO/dividendos-ai",
    contextArea: "IA / Finanças / Data Science"
  }
];

