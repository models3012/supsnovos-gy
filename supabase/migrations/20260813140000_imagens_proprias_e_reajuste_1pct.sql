-- 1) Imagens passam a ser servidas pelo proprio dominio.
--    As imagens foram baixadas para public/products/ e vao junto no deploy,
--    entao o site deixa de depender do host antigo do Lovable.
--    O feed do Merchant exige URL absoluta, por isso aqui fica o dominio completo.

UPDATE public.products
SET image_url = REPLACE(
      image_url,
      'https://bold-rush-s2acommerce.lovable.app/products/',
      'https://skillfit.online/products/'
    ),
    updated_at = now()
WHERE image_url LIKE 'https://bold-rush-s2acommerce.lovable.app/products/%';

UPDATE public.products
SET images = ARRAY(
      SELECT REPLACE(
               img,
               'https://bold-rush-s2acommerce.lovable.app/products/',
               'https://skillfit.online/products/'
             )
      FROM unnest(images) AS img
    ),
    updated_at = now()
WHERE array_to_string(images, ',') LIKE '%bold-rush-s2acommerce.lovable.app%';

-- 2) Reajuste de 1% nos precos, para nao ficarem identicos aos da origem.
--    ATENCAO: este UPDATE nao e idempotente — rodar duas vezes aplicaria 2,01%.
--    Migrations do Supabase sao registradas e executam uma unica vez, mas nao
--    reexecute este arquivo manualmente.
--    O mesmo reajuste ja foi aplicado em src/lib/products.ts, que abastece o site;
--    esta tabela abastece o feed do Google Merchant.

UPDATE public.products
SET price = ROUND(price * 1.01, 2),
    discount_price = CASE
      WHEN discount_price IS NOT NULL THEN ROUND(discount_price * 1.01, 2)
      ELSE NULL
    END,
    updated_at = now();
