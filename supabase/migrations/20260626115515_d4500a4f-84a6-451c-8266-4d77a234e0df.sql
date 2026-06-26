
ALTER TABLE public.site_settings
  ADD COLUMN IF NOT EXISTS pix_provider TEXT DEFAULT 'pix_static',
  ADD COLUMN IF NOT EXISTS pix_city TEXT,
  ADD COLUMN IF NOT EXISTS pix_holder TEXT,
  ADD COLUMN IF NOT EXISTS hide_pix_holder BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS speedmax_token TEXT,
  ADD COLUMN IF NOT EXISTS whatsapp_api_url TEXT,
  ADD COLUMN IF NOT EXISTS whatsapp_api_token TEXT,
  ADD COLUMN IF NOT EXISTS whatsapp_number TEXT,
  ADD COLUMN IF NOT EXISTS zoepay_enabled BOOLEAN DEFAULT false;

INSERT INTO public.site_settings (id, store_name, pix_discount_percent)
VALUES ('default', 'Ultra Gym Supplements', 10)
ON CONFLICT (id) DO NOTHING;

-- Tracking column on orders for SpeedMax
ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS tracking_code TEXT,
  ADD COLUMN IF NOT EXISTS speedmax_synced BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS source TEXT DEFAULT 'organic';

-- service_role full access for admin server fns
GRANT ALL ON public.site_settings TO service_role;
GRANT ALL ON public.orders TO service_role;
GRANT ALL ON public.order_items TO service_role;
