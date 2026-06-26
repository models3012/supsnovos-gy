// Google Ads / GA4 / Enhanced Conversions / Remarketing Dinâmico
// Implementa todos os eventos da spec do ultragym.net

const ADS_ID = "AW-18088511561";
const PURCHASE_LABEL = "2J-rCMHtpqAcEMmQo7FD";
const PURCHASE_SEND_TO = `${ADS_ID}/${PURCHASE_LABEL}`;

type AnyItem = {
  id: string;
  name: string;
  brand?: string;
  category?: string;
  price: number;
  quantity?: number;
};

function gtag(...args: any[]) {
  if (typeof window === "undefined") return;
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push(arguments);
  if (typeof w.gtag === "function") w.gtag(...args);
}

async function sha256(value: string): Promise<string> {
  if (!value) return "";
  const normalized = value.trim().toLowerCase();
  if (typeof window === "undefined" || !window.crypto?.subtle) return "";
  const buf = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(normalized),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function toItems(items: AnyItem[]) {
  return items.map((it) => ({
    item_id: it.id,
    item_name: it.name,
    item_brand: it.brand,
    item_category: it.category,
    price: it.price,
    quantity: it.quantity ?? 1,
  }));
}

function totalValue(items: AnyItem[]) {
  return items.reduce((s, it) => s + it.price * (it.quantity ?? 1), 0);
}

/** Remarketing Dinâmico: ecomm_prodid / ecomm_pagetype / ecomm_totalvalue */
export function setEcomm(
  pagetype: "home" | "category" | "product" | "cart" | "checkout" | "purchase" | "other",
  items: AnyItem[] = [],
) {
  if (typeof window === "undefined") return;
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    ecomm_prodid: items.map((i) => i.id),
    ecomm_pagetype: pagetype,
    ecomm_totalvalue: totalValue(items),
  });
}

/** GA4: view_item */
export function trackViewItem(item: AnyItem) {
  gtag("event", "view_item", {
    currency: "BRL",
    value: item.price,
    items: toItems([item]),
  });
  setEcomm("product", [item]);
}

/** GA4: view_item_list (categoria/listagem) */
export function trackViewItemList(items: AnyItem[], listName?: string) {
  gtag("event", "view_item_list", {
    item_list_name: listName,
    items: toItems(items),
  });
  setEcomm("category", items);
}

/** GA4: add_to_cart */
export function trackAddToCart(item: AnyItem) {
  gtag("event", "add_to_cart", {
    currency: "BRL",
    value: item.price * (item.quantity ?? 1),
    items: toItems([item]),
  });
}

/** GA4: begin_checkout */
export function trackBeginCheckout(items: AnyItem[]) {
  gtag("event", "begin_checkout", {
    currency: "BRL",
    value: totalValue(items),
    items: toItems(items),
  });
  setEcomm("checkout", items);
}

/** Enhanced Conversions — envia email/telefone/nome/endereço hasheados (SHA-256) */
export async function setEnhancedConversionData(input: {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}) {
  const [sha256_email_address, sha256_phone_number] = await Promise.all([
    input.email ? sha256(input.email) : Promise.resolve(""),
    input.phone
      ? sha256(input.phone.replace(/\D/g, "").replace(/^/, "+55"))
      : Promise.resolve(""),
  ]);
  gtag("set", "user_data", {
    sha256_email_address: sha256_email_address || undefined,
    sha256_phone_number: sha256_phone_number || undefined,
    address: {
      first_name: input.firstName,
      last_name: input.lastName,
      street: input.street,
      city: input.city,
      region: input.region,
      postal_code: input.postalCode,
      country: input.country ?? "BR",
    },
  });
}

/** Google Ads Purchase Conversion + GA4 purchase */
export function trackPurchase(opts: {
  transactionId: string;
  items: AnyItem[];
  value?: number;
}) {
  const value = opts.value ?? totalValue(opts.items);

  // Google Ads conversion (com label do print)
  gtag("event", "conversion", {
    send_to: PURCHASE_SEND_TO,
    transaction_id: opts.transactionId,
    value,
    currency: "BRL",
  });

  // GA4 purchase
  gtag("event", "purchase", {
    transaction_id: opts.transactionId,
    currency: "BRL",
    value,
    items: toItems(opts.items),
  });

  setEcomm("purchase", opts.items);
}
