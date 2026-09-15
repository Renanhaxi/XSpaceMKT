import type { PricingPlan } from '../types';

export const INITIAL_PLANS: PricingPlan[] = [
  {
    id: 'plan-start',
    name: 'Landing Page Start',
    tagline: 'Ideal para lançar produtos, campanhas de tráfego pago ou captar leads rápidos.',
    badge: 'Mais Rápido',
    popular: false,
    price: 'R$ 890',
    period: 'pagamento único ou em até 12x',
    features: [
      'Página única focada 100% em conversão de vendas',
      'Design exclusivo e moderno (sem modelos genéricos)',
      '100% Responsivo para Celular, Tablet e Computador',
      'Botões inteligentes de chamada direta para o WhatsApp',
      'Integração com Pixel do Meta / Google Ads',
      'Velocidade ultrarrápida (carregamento < 1.5s)',
      'Certificado de Segurança SSL gratuito',
      'Entrega expressa em até 5 a 7 dias úteis'
    ],
    ctaText: 'Escolher Plano Start',
    whatsappMessage: 'Olá xSpaceMKT! Gostaria de contratar o Plano Landing Page Start para a minha empresa.'
  },
  {
    id: 'plan-pro',
    name: 'Site Institucional Pro',
    tagline: 'O cartão de visitas digital de alto nível para empresas que buscam autoridade no mercado.',
    badge: 'Mais Recomendado',
    popular: true,
    price: 'R$ 1.690',
    period: 'pagamento único ou em até 12x',
    features: [
      'Site institucional completo com até 5 páginas',
      'Páginas: Início, Sobre, Serviços/Produtos, Galeria/Depoimentos e Contato',
      'Estrutura otimizada para o Google (SEO Avançado)',
      'Formulário de contato seguro com envio por e-mail e WhatsApp',
      'Painel intuitivo para você atualizar textos e fotos facilmente',
      'Layout sob medida com a identidade visual da sua marca',
      'Integração com Google Maps e Redes Sociais',
      'Hospedagem de alta velocidade e suporte por 30 dias após entrega'
    ],
    ctaText: 'Quero o Site Institucional Pro',
    whatsappMessage: 'Olá xSpaceMKT! Quero saber mais e contratar o Plano Site Institucional Pro!'
  },
  {
    id: 'plan-custom',
    name: 'E-commerce & Sistema Web',
    tagline: 'Plataforma robusta para vendas online ou sistemas sob medida para otimizar sua operação.',
    badge: 'Escala Total',
    popular: false,
    price: 'Sob Consulta',
    period: 'personalizado conforme o seu projeto',
    features: [
      'Loja virtual completa ou Sistema Web sob medida',
      'Catálogo de produtos com fotos, variações e controle de estoque',
      'Checkout transparente com PIX, Cartão e Boleto automático',
      'Cálculo de frete em tempo real (Correios, Melhor Envio, Jadlog)',
      'Painel administrativo completo com relatórios de vendas e clientes',
      'Área de clientes e controle de acessos por níveis',
      'Arquitetura segura contra invasões e fraudes',
      'Consultoria estratégica e suporte contínuo prioritário'
    ],
    ctaText: 'Solicitar Projeto Sob Medida',
    whatsappMessage: 'Olá xSpaceMKT! Gostaria de um orçamento para um E-commerce ou Sistema Web personalizado.'
  }
];
