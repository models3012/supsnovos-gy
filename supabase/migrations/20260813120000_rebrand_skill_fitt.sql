-- Rebrand: Ultra Gym Supplements -> Skill Fitt Suplementos
-- As migrations anteriores gravaram o nome antigo em site_settings.store_name.
-- Este UPDATE corrige o registro ja existente no banco (as migrations antigas
-- sao historico aplicado e nao devem ser reescritas).

UPDATE public.site_settings
SET store_name = 'Skill Fitt Suplementos',
    updated_at = now()
WHERE store_name = 'Ultra Gym Supplements';
