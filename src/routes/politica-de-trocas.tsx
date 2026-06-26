import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'

export const Route = createFileRoute('/politica-de-trocas')({
  head: () => ({
    meta: [
      { title: 'Política de Trocas e Devoluções | Ultra Gym Supplements' },
      { name: 'description', content: 'Regras de troca e devolução em conformidade com o Código de Defesa do Consumidor — prazos, condições e procedimentos.' },
      { property: 'og:title', content: 'Política de Trocas e Devoluções | Ultra Gym' },
      { property: 'og:description', content: 'Como solicitar troca ou devolução de produtos na Ultra Gym Supplements.' },
    ],
  }),
  component: Trocas,
})

function Trocas() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
      <SEO title="Política de Trocas e Devoluções | Ultra Gym Supplements" description="Regras de troca e devolução em conformidade com o CDC." />
      <div className="bg-white rounded-[40px] border p-8 md:p-12 shadow-sm">
        <div className="mb-10 text-center md:text-left">
          <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Conformidade CDC</span>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mt-2">Política de Trocas e Devoluções</h1>
          <div className="h-1.5 w-24 bg-orange-600 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="prose prose-slate max-w-none prose-headings:italic prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-slate-900 prose-p:leading-relaxed prose-p:font-medium">
          <p>Na <strong>Ultra Gym</strong>, nossa prioridade é sua satisfação. Caso necessite trocar ou devolver um produto, siga as regras abaixo, que estão em total conformidade com o Código de Defesa do Consumidor (<strong>Lei nº 8.078/90</strong>).</p>

          <hr className="my-10" />

          <h3>1. Condições Gerais</h3>
          <p>Para que qualquer solicitação de troca ou devolução seja aceita, o produto deve atender às seguintes condições:</p>
          <ul>
            <li>Estar dentro do prazo legal ou contratual estipulado para a solicitação.</li>
            <li>Estar acompanhado da <strong>Nota Fiscal (DANFE)</strong>.</li>
            <li>Estar com as embalagens e lacres intactos, fixados ao produto.</li>
            <li>Não apresentar indícios de uso, violação ou alteração.</li>
          </ul>

          <h3>2. Devolução por Arrependimento ou Desistência (Prazo Legal)</h3>
          <p>Você pode exercer o <strong>Direito de Arrependimento</strong> se, por qualquer motivo, o produto não atender às suas expectativas.</p>
          <ul>
            <li><strong>Prazo:</strong> O cliente tem até <strong>7 (sete) dias corridos</strong>, a contar da data de recebimento do produto, para formalizar a desistência.</li>
            <li><strong>Procedimento:</strong> Entre em contato com nosso Fale Conosco (e-mail ou WhatsApp) informando o número do pedido e a intenção de devolução. Enviaremos um código de postagem reversa para que o produto seja devolvido sem custos de frete.</li>
            <li>Após o recebimento e análise do produto em nossa Central, o valor será integralmente restituído de acordo com a nossa Política de Reembolso.</li>
          </ul>

          <h3>3. Troca por Produto Diferente</h3>
          <p>Caso deseje trocar por outro item disponível no site:</p>
          <ul>
            <li><strong>Prazo:</strong> Até <strong>7 (sete) dias corridos</strong> a contar do recebimento.</li>
            <li><strong>Custo do Frete:</strong> A primeira troca é gratuita. A partir da segunda troca, os custos de frete serão de responsabilidade do cliente.</li>
            <li><strong>Disponibilidade:</strong> Troca por produto de igual valor. Diferenças (a maior ou a menor) serão pagas ou restituídas.</li>
          </ul>

          <h3>4. Troca por Defeito ou Avaria</h3>
          <ul>
            <li><strong>Prazo:</strong> <strong>30 (trinta) dias corridos</strong> a contar do recebimento, conforme o CDC.</li>
            <li><strong>Defeito Comprovado:</strong> Troca por produto idêntico, crédito no site, ou restituição total. Todos os custos de frete são da Ultra Gym.</li>
            <li><strong>Não Constatado Defeito:</strong> O produto será reenviado com frete por conta do consumidor.</li>
          </ul>

          <h3>5. Como Solicitar sua Troca ou Devolução</h3>
          <ul>
            <li><strong>Contato:</strong> E-mail <strong>contato@ultragym.net</strong> ou WhatsApp <strong>(34) 99887-7665</strong>.</li>
            <li><strong>Informações:</strong> Informe o número do pedido, motivo da troca/devolução e código do produto (se aplicável).</li>
            <li><strong>Resposta:</strong> Nossa equipe responderá em até <strong>2 (dois) dias úteis</strong> com instruções detalhadas.</li>
          </ul>

          <h3>6. Informações da Empresa</h3>
          <ul>
            <li><strong>Razão Social:</strong> Ultra Gym Supplements LTDA</li>
            <li><strong>CNPJ:</strong> 53.320.355/0001-24</li>
            <li><strong>Endereço:</strong> Rua Olimpio Fortunato, 149 – São Miguel, Nova Ponte/MG – CEP 38160-000</li>
          </ul>

          <hr className="my-10" />
          <p className="text-sm text-slate-500 italic">Qualquer dúvida adicional, estamos à disposição em nossos canais de atendimento.</p>
        </div>
      </div>
    </div>
  )
}
