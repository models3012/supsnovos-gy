import React from 'react';
import { COMPANY } from '@/lib/company';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: any;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, schema }) => {
  return (
    <>
      {/* Só acrescenta a marca quando o título ainda não a contém — evita duplicação */}
      <title>{title.includes(COMPANY.name) ? title : `${title} | ${COMPANY.name}`}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};
