export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  pixPrice: number;
  description: string;
  image: string;
  flavors?: string[];
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "haze-hardcore",
    name: "Pré-Treino Haze Hardcore 300g - Growth Supplements",
    brand: "Growth Supplements",
    price: 62.14,
    originalPrice: 90.00,
    pixPrice: 55.93,
    description: "Foco, energia e vasodilatação extrema. O pré-treino definitivo para treinos intensos.",
    image: "https://ultragym.net/products/dad8ff31ec43.webp",
    flavors: ["Frutas Roxas", "Limão", "Maçã Verde"],
    category: "pre-treino"
  },
  {
    id: "whey-concentrado-80",
    name: "Whey Protein Concentrado 80% 1Kg - Growth Supplements",
    brand: "Growth Supplements",
    price: 108.43,
    originalPrice: 172.11,
    pixPrice: 97.59,
    description: "Proteína de alta concentração com 24g de proteína por dose. Qualidade Growth Supplements com nota fiscal.",
    image: "https://ultragym.net/products/b7332e96d23f.webp",
    flavors: ["Chocolate", "Morango", "Baunilha", "Cookies & Cream"],
    category: "suplementos"
  },
  {
    id: "kit-whey-gourmet-800-creatina-250",
    name: "Kit Whey Gourmet 800g e Creatina Monohidratada 250g - Growth Supplements",
    brand: "Growth Supplements",
    price: 115.43,
    originalPrice: 210.88,
    pixPrice: 103.89,
    description: "Combo perfeito para ganho de massa e força. Whey Gourmet com sabor incrível e Creatina 100% pura.",
    image: "https://ultragym.net/products/631244c40623.webp",
    category: "kits"
  },
  {
    id: "kit-whey-gourmet-400-creatina-250",
    name: "Kit Whey Gourmet 400g e Creatina Monohidratada 250g - Growth Supplements",
    brand: "Growth Supplements",
    price: 76.93,
    originalPrice: 148.66,
    pixPrice: 69.24,
    description: "Combo econômico para iniciantes. Qualidade premium com o melhor custo-benefício.",
    image: "https://ultragym.net/products/58757c1b2903.webp",
    category: "kits"
  },
  {
    id: "kit-daily-whey-800-creatina-250",
    name: "Kit Daily Whey 800g e Creatina Monohidratada 250g - Growth Supplements",
    brand: "Growth Supplements",
    price: 87.43,
    originalPrice: 166.44,
    pixPrice: 78.69,
    description: "O suporte diário que seus músculos precisam para crescer e recuperar.",
    image: "https://ultragym.net/products/b295faee3c4a.webp",
    category: "kits"
  },
  {
    id: "kit-daily-whey-400-creatina-250",
    name: "Kit Daily Whey 400g e Creatina Monohidratada 250g - Growth Supplements",
    brand: "Growth Supplements",
    price: 71.32,
    originalPrice: 121.99,
    pixPrice: 64.19,
    description: "Nutrição essencial com economia máxima. Daily Whey + Creatina pura.",
    image: "https://ultragym.net/products/f40e14d9efe4.webp",
    category: "kits"
  },
  {
    id: "kit-whey-concentrado-1kg-creatina-250",
    name: "Kit Whey Protein Concentrado 1kg e Creatina Monohidratada 250g - Growth Supplements",
    brand: "Growth Supplements",
    price: 125.93,
    originalPrice: 227.55,
    pixPrice: 113.34,
    description: "O combo mais vendido da Growth. 1kg de Whey 80% e 250g de Creatina.",
    image: "https://ultragym.net/products/d064e4e2cd71.webp",
    category: "kits"
  },
  {
    id: "whey-crispy-400",
    name: "Whey Crispy 400g - Masterway Suplementos",
    brand: "Masterway Suplementos",
    price: 65.77,
    originalPrice: 125.26,
    pixPrice: 59.19,
    description: "Sabor e crocância em um shake proteico diferenciado.",
    image: "https://ultragym.net/products/65d04d6e395a.webp",
    category: "suplementos"
  },
  {
    id: "shake-proteico-cafe",
    name: "Shake Proteico 450g Sabor Café Cremoso - Masterway Suplementos",
    brand: "Masterway Suplementos",
    price: 79.74,
    originalPrice: 119.90,
    pixPrice: 71.77,
    description: "O sabor do café com a proteína que você precisa. Ideal para pré-treino matinal.",
    image: "https://ultragym.net/products/cb7d89f38429.webp",
    category: "suplementos"
  },
  {
    id: "barra-proteina-morango",
    name: "Barra de Proteína 45g Sabor Morango - Masterway Suplementos",
    brand: "Masterway Suplementos",
    price: 5.80,
    originalPrice: 7.63,
    pixPrice: 5.22,
    description: "Snack proteico prático e delicioso para qualquer hora do dia.",
    image: "https://ultragym.net/products/1b62014c59b0.webp",
    category: "barrinhas"
  },
  {
    id: "whey-zero-lactose",
    name: "Whey Protein Zero Lactose 910g - Masterway Suplementos",
    brand: "Masterway Suplementos",
    price: 136.50,
    originalPrice: 205.26,
    pixPrice: 122.85,
    description: "Proteína de alta qualidade para intolerantes à lactose.",
    image: "https://ultragym.net/products/59bba7cf27dd.webp",
    category: "suplementos"
  },
  {
    id: "creatina-monohidratada-250",
    name: "Creatina Monohidratada 250g - Growth Supplements",
    brand: "Growth Supplements",
    price: 89.90,
    originalPrice: 120.00,
    pixPrice: 80.91,
    description: "100% pura, auxilia no aumento da força e volume muscular.",
    image: "https://ultragym.net/products/farma_50e35d098594.webp",
    category: "creatina"
  },
  {
    id: "multivitaminico-120",
    name: "Multivitamínico 120 caps - Growth Supplements",
    brand: "Growth Supplements",
    price: 39.90,
    originalPrice: 55.00,
    pixPrice: 35.91,
    description: "Todas as vitaminas e minerais essenciais para atletas.",
    image: "https://ultragym.net/products/farma_90d878ade7a8.webp",
    category: "vitaminas"
  },
  {
    id: "hipercalorico-giga-mass",
    name: "Hipercalórico Giga Mass 3kg - Growth Supplements",
    brand: "Growth Supplements",
    price: 99.90,
    originalPrice: 140.00,
    pixPrice: 89.91,
    description: "Ganho de peso e massa com alta densidade energética.",
    image: "https://ultragym.net/products/farma_b567c67d8909.webp",
    category: "hipercaloricos"
  },
  {
    id: "regata-cavad-skull",
    name: "Regata Cavada Skull Hardcore - Ultra Gym",
    brand: "Ultra Gym Apparel",
    price: 49.90,
    originalPrice: 69.90,
    pixPrice: 44.91,
    description: "Regata de alta performance para treinos intensos. Tecido leve e respirável.",
    image: "https://ultragym.net/products/fem-outlet-29.webp",
    flavors: ["P", "M", "G", "GG"],
    category: "roupas"
  },
  {
    id: "camiseta-oversized-black",
    name: "Camiseta Oversized Black Edition - Ultra Gym",
    brand: "Ultra Gym Apparel",
    price: 79.90,
    originalPrice: 110.00,
    pixPrice: 71.91,
    description: "Estilo e conforto dentro e fora da academia. Modelagem oversized moderna.",
    image: "https://ultragym.net/products/fem-outlet-29.webp",
    flavors: ["M", "G", "GG", "XG"],
    category: "roupas"
  },
  {
    id: "bermuda-moletom-gym",
    name: "Bermuda de Moletom Training - Ultra Gym",
    brand: "Ultra Gym Apparel",
    price: 64.90,
    originalPrice: 89.00,
    pixPrice: 58.41,
    description: "Liberdade de movimento total para o seu treino de pernas.",
    image: "https://ultragym.net/products/fem-outlet-29.webp",
    flavors: ["P", "M", "G", "GG"],
    category: "roupas"
  },
  {
    id: "legging-high-waist",
    name: "Calça Legging High Waist - Ultra Gym Fem",
    brand: "Ultra Gym Apparel",
    price: 89.90,
    originalPrice: 129.00,
    pixPrice: 80.91,
    description: "Cintura alta e zero transparência. Alta compressão para treinos pesados.",
    image: "https://ultragym.net/products/fem-outlet-29.webp",
    flavors: ["P", "M", "G"],
    category: "roupas"
  }
];
