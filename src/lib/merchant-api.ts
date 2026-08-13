import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const generateMerchantFeed = createServerFn({ method: "GET" }).handler(async () => {
  const { data: products, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("is_active", true);
  
  if (error) throw error;

  const feed = products.map(p => ({
    id: p.id,
    title: p.name,
    description: p.description,
    link: `https://skillfit.online/produto/${p.slug}`,
    image_link: p.image_url,
    price: `${p.price} BRL`,
    availability: p.stock_quantity > 0 ? "in stock" : "out of stock",
    brand: p.brand || "Skill Fitt"
  }));

  return feed;
});
