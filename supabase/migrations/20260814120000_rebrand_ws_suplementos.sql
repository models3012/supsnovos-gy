-- Rebrand: Skill Fitt Suplementos -> WS Suplementos (Pharma Whey Suple LTDA)
-- As migrations anteriores gravaram nomes de marcas antigas em site_settings.store_name.
-- Este UPDATE corrige o registro ja existente no banco (as migrations antigas
-- sao historico aplicado e nao devem ser reescritas).

UPDATE public.site_settings
SET store_name = 'WS Suplementos',
    updated_at = now()
WHERE store_name IN ('Skill Fitt Suplementos', 'Ultra Gym Supplements');
