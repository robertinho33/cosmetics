export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
  price: number;
  compareAt?: number;
  badge?: string;
  size: string;
  finish: string;
  ingredients: string;
  image: string;
  tone: string;
};

export const categories = [
  { name: "Rosto", count: "42 produtos", tone: "bg-[#ead9cc]" },
  { name: "Corpo", count: "28 produtos", tone: "bg-[#d7e1d7]" },
  { name: "Cabelos", count: "36 produtos", tone: "bg-[#ddd3e5]" },
  { name: "Rituais", count: "18 produtos", tone: "bg-[#f0dfbf]" },
];

export const products: Product[] = [
  {
    id: "serum-01",
    slug: "serum-aura",
    name: "Sérum Aura",
    category: "rosto",
    categoryLabel: "Rosto",
    description: "Niacinamida 10% + ácido hialurônico para devolver viço em 7 dias.",
    price: 89,
    compareAt: 112,
    badge: "Best-seller",
    size: "30 ml",
    finish: "Glow natural",
    ingredients: "Niacinamida, ácido hialurônico, chá verde",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=85",
    tone: "#d9c2ad",
  },
  {
    id: "cleanser-02",
    slug: "gel-nuvem",
    name: "Gel Nuvem",
    category: "rosto",
    categoryLabel: "Rosto",
    description: "Limpeza gentil que equilibra a barreira sem repuxar.",
    price: 62,
    badge: "Vegano",
    size: "150 ml",
    finish: "Pele confortável",
    ingredients: "Aveia coloidal, betaína, pantenol",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
    tone: "#e3d5c8",
  },
  {
    id: "cream-03",
    slug: "creme-horizonte",
    name: "Creme Horizonte",
    category: "rosto",
    categoryLabel: "Rosto",
    description: "Hidratação inteligente para a pele que acorda descansada.",
    price: 78,
    compareAt: 96,
    badge: "Novo",
    size: "50 g",
    finish: "Toque aveludado",
    ingredients: "Ceramidas, esqualano, manteiga de cupuaçu",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    tone: "#d4c1b6",
  },
  {
    id: "oil-04",
    slug: "oleo-calma",
    name: "Óleo Calma",
    category: "corpo",
    categoryLabel: "Corpo",
    description: "Óleo seco botânico com lavanda e semente de uva.",
    price: 74,
    badge: "Ritual noturno",
    size: "100 ml",
    finish: "Luminoso, sem grude",
    ingredients: "Semente de uva, jojoba, lavanda",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
    tone: "#cfd7c9",
  },
  {
    id: "balm-05",
    slug: "balsamo-sete-ondas",
    name: "Bálsamo Sete Ondas",
    category: "cabelos",
    categoryLabel: "Cabelos",
    description: "Pré-shampoo nutritivo para fios macios e couro cabeludo feliz.",
    price: 96,
    size: "200 g",
    finish: "Nutrição profunda",
    ingredients: "Babosa, óleo de pracaxi, argila branca",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=900&q=85",
    tone: "#d8c9b0",
  },
  {
    id: "mist-06",
    slug: "bruma-luz",
    name: "Bruma Luz",
    category: "rosto",
    categoryLabel: "Rosto",
    description: "Névoa hidratante para refrescar a pele ao longo do dia.",
    price: 58,
    badge: "Favorito da comunidade",
    size: "120 ml",
    finish: "Fresh glow",
    ingredients: "Água de rosas, aloe vera, beta-glucana",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85",
    tone: "#ead7d6",
  },
  {
    id: "mask-07",
    slug: "mascara-argila",
    name: "Máscara Argila",
    category: "rosto",
    categoryLabel: "Rosto",
    description: "Argila rosa e prebióticos para uma limpeza que respeita.",
    price: 69,
    size: "80 g",
    finish: "Pele renovada",
    ingredients: "Argila rosa, inulina, camomila",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    tone: "#e4c4bf",
  },
  {
    id: "body-08",
    slug: "polpa-corporal",
    name: "Polpa Corporal",
    category: "corpo",
    categoryLabel: "Corpo",
    description: "Manteiga corporal cítrica para ritual de presença.",
    price: 82,
    badge: "Edição solar",
    size: "250 g",
    finish: "Toque de seda",
    ingredients: "Manga, maracujá, vitamina E",
    image: "https://images.unsplash.com/photo-1556228852-80f89f2a7c40?auto=format&fit=crop&w=900&q=85",
    tone: "#e5cfaa",
  },
  {
    id: "set-09",
    slug: "duo-equilibrio",
    name: "Duo Equilíbrio",
    category: "rituais",
    categoryLabel: "Rituais",
    description: "A dupla essencial para começar uma rotina curta e consistente.",
    price: 139,
    compareAt: 167,
    badge: "-17%",
    size: "2 produtos",
    finish: "Rotina essencial",
    ingredients: "Sérum Aura + Gel Nuvem",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85",
    tone: "#d8cbbb",
  },
  {
    id: "balm-10",
    slug: "balsamo-labios",
    name: "Bálsamo Néctar",
    category: "rosto",
    categoryLabel: "Rosto",
    description: "Bálsamo nutritivo com acabamento translúcido e confortável.",
    price: 44,
    badge: "Vegano",
    size: "12 g",
    finish: "Brilho translúcido",
    ingredients: "Cera de arroz, óleo de pracaxi, cupuaçu",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
    tone: "#e1c5be",
  },
  {
    id: "shampoo-11",
    slug: "shampoo-botanico",
    name: "Shampoo Botânico",
    category: "cabelos",
    categoryLabel: "Cabelos",
    description: "Limpeza cremosa com ativos para devolver balanço aos fios.",
    price: 72,
    size: "300 ml",
    finish: "Leve e brilhante",
    ingredients: "Alecrim, ginseng, pantenol",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=900&q=85",
    tone: "#d1d9cc",
  },
  {
    id: "candle-12",
    slug: "vela-momento",
    name: "Vela Momento",
    category: "rituais",
    categoryLabel: "Rituais",
    description: "Madeira de cedro, folha de figo e 40 minutos só seus.",
    price: 88,
    badge: "Casa VELA",
    size: "180 g",
    finish: "Queima limpa",
    ingredients: "Cera vegetal, cedro, figo verde",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
    tone: "#d6c6af",
  },
];

const variantNames = ["edição botânica", "refil essencial", "mini ritual", "duo de viagem", "edição calma", "tamanho família"];
export const catalogProducts: Product[] = [
  ...products,
  ...Array.from({ length: 112 }, (_, index) => {
    const base = products[index % products.length];
    const suffix = variantNames[index % variantNames.length];
    return {
      ...base,
      id: `${base.id}-variant-${index + 1}`,
      slug: `${base.slug}-${index + 1}`,
      name: `${base.name} · ${suffix}`,
      badge: index % 11 === 0 ? "Edição limitada" : index % 7 === 0 ? "Vegano" : undefined,
      price: Math.max(34, base.price + ((index % 5) - 2) * 3),
    };
  }),
];

export const money = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

export const findProduct = (slug: string) => catalogProducts.find((product) => product.slug === slug);
