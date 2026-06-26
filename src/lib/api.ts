import { createServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";

export const getSiteSettings = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", "default")
    .single();
  
  if (error) throw error;
  return data;
});

export const getProducts = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name, slug)")
    .eq("is_active", true)
    .order("created_at", { ascending: false });
  
  if (error) throw error;
  return data;
});

export const getCategories = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");
  
  if (error) throw error;
  return data;
});
