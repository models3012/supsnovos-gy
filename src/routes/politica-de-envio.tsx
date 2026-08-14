import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'

export const Route = createFileRoute('/politica-de-envio')({
  head: () => ({
    meta: [
      { title: 'Política de Envio | WS Suplementos' },
      { name: 'description', content: 'Prazos de processamento, frete grátis, rastreamento e condições de entrega para todo o Brasil.' },
      { property: 'og:title', content: 'Política de Envio | WS Suplementos' },
      { property: 'og:description', content: 'Frete grátis para todo o Brasil, rastreamento e prazos da WS Suplementos.' },
    ],
  }),
  component: Envio,
})

function Envio() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
      <SEO title="Política de Envio | WS Suplementos" description="Prazos, frete grátis e rastreamento de pedidos WS Suplementos." />
      <div className="bg-white rounded-[40px] border p-8 md:p-12 shadow-sm">
        <div className="mb-10 text-center md:text-left">
          <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Entrega para todo o Brasil</span>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mt-2">Política de Envio</h1>
          <div className="h-1.5 w-24 bg-orange-600 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="prose prose-slate max-w-none prose-headings:italic prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-slate-900 prose-p:leading-relaxed prose-p:font-medium">
          <p>A <strong>WS Suplementos</strong> tem o compromisso de garantir que sua compra chegue até você com a maior agilidade e segurança.</p>

          <hr className="my-10" />

          <h3>1. Frete e Cobertura</h3>
          <ul>
            <li><strong>Frete Grátis:</strong> Oferecemos frete grátis para todo o Brasil em todos os pedidos, sem valor mínimo.</li>
            <li><strong>Cobertura:</strong> Entregamos em todas as regiões via Correios e transportadoras parceiras.</li>
          </ul>

          <h3>2. Prazo de Envio e Entrega</h3>
          <p>O prazo total de entrega é composto por duas etapas:</p>

          <p><strong>A) Prazo de Processamento (Separação e Faturamento)</strong></p>
          <ul>
            <li><strong>Prazo:</strong> Processamento em até <strong>2 (dois) dias úteis</strong> após a confirmação do pagamento.</li>
            <li><strong>Exceção:</strong> Pagamentos via cartão de crédito ou Pix são confirmados mais rapidamente.</li>
          </ul>

          <p><strong>B) Prazo de Trânsito (Entrega)</strong></p>
          <ul>
            <li><strong>Cálculo:</strong> O prazo de entrega é exibido no carrinho de compras, após a inserção do CEP.</li>
          </ul>

          <h3>3. Rastreamento do Pedido</h3>
          <p>Assim que seu pedido for despachado, você receberá um e-mail com o <strong>código de rastreio</strong> e o link para acompanhar o status da entrega.</p>
          <ul>
            <li><strong>Atualização:</strong> O código pode levar até 24 horas úteis para ser atualizado no sistema da transportadora.</li>
          </ul>

          <h3>4. Condições e Tentativas de Entrega</h3>
          <ul>
            <li><strong>Dias de Entrega:</strong> De Segunda a Sexta-feira, das 8h às 18h.</li>
            <li><strong>Destinatário Ausente:</strong> Serão realizadas <strong>3 (três) tentativas de entrega</strong>. Caso não haja ninguém para receber, o pacote retornará à Central de Distribuição.</li>
            <li><strong>Reenvio:</strong> O custo do reenvio por ausência ou endereço incorreto será de responsabilidade do cliente.</li>
          </ul>

          <h3>5. Atenção ao Endereço</h3>
          <ul>
            <li><strong>Responsabilidade:</strong> É responsabilidade do cliente informar o endereço de entrega correto e completo.</li>
            <li><strong>Dados Incorretos:</strong> A WS Suplementos não se responsabiliza por extravio ou custos de reenvio causados por endereço incorreto.</li>
          </ul>

          <h3>6. Informações da Empresa</h3>
          <ul>
            <li><strong>Razão Social:</strong> Pharma Whey Suple LTDA</li>
            <li><strong>CNPJ:</strong> 61.544.860/0001-80</li>
            <li><strong>Inscrição Estadual (SP):</strong> 154.677.436.115</li>
            <li><strong>Endereço:</strong> Rua Alberto Jackson Byington, 96 – Jardim Chapadão, Campinas/SP – CEP 13070-063</li>
          </ul>

          <hr className="my-10" />
          <p className="text-sm text-slate-500 italic">Qualquer dúvida sobre o status ou prazo de sua entrega, entre em contato com nosso Fale Conosco.</p>
        </div>
      </div>
    </div>
  )
}
