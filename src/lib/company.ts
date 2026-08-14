/**
 * Dados cadastrais da empresa — fonte única de verdade.
 * Alterar aqui reflete em rodapé, políticas, SEO e integrações.
 */
export const COMPANY = {
  /** Nome fantasia exibido no site */
  name: "WS Suplementos",
  /** Marca dividida para o logotipo (WS + Suplementos) */
  nameParts: { prefix: "WS", suffix: "Suplementos" },
  legalName: "Pharma Whey Suple LTDA",
  legalNameUpper: "PHARMA WHEY SUPLE LTDA",
  cnpj: "61.544.860/0001-80",
  cnpjDigits: "61544860000180",
  /** Inscrição Estadual — SP */
  stateRegistration: "154.677.436.115",
  stateRegistrationUf: "SP",

  address: {
    street: "Rua Alberto Jackson Byington",
    number: "96",
    district: "Jardim Chapadão",
    city: "Campinas",
    state: "SP",
    zip: "13070-063",
    /** Linha completa usada em rodapé e páginas legais */
    full: "Rua Alberto Jackson Byington, 96 – Jardim Chapadão, Campinas/SP – CEP 13070-063",
    /** Versão curta para o bloco de atendimento */
    short: "Campinas - SP",
  },

  contact: {
    email: "contato@wsuplemento.site",
    dpoEmail: "dpo@wsuplemento.site",
    /** Formatado para exibição */
    phone: "(34) 99887-7690",
    /** Somente dígitos, com DDI — usado no link wa.me */
    whatsappDigits: "5534998877690",
    whatsappUrl: "https://wa.me/5534998877690",
    hours: "Segunda a Sexta, das 8h00 às 18h00",
  },

  domain: "wsuplemento.site",
  siteUrl: "https://wsuplemento.site",
  socialHandle: "@wsuplemento",
} as const;
