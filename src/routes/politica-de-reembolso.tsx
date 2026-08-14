import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'

export const Route = createFileRoute('/politica-de-reembolso')({
  head: () => ({
    meta: [
      { title: 'Política de Reembolso | WS Suplementos' },
      { name: 'description', content: 'Condições para restituição de valores em caso de cancelamento, arrependimento ou defeito do produto, conforme o CDC.' },
    ],
  }),
  component: RefundPolicy,
})

function RefundPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
      <SEO title="Política de Reembolso | WS Suplementos" description="Conheça as condições para a restituição de valores pagos em caso de cancelamento, desistência ou defeito do produto." />

      <div className="bg-white rounded-[40px] border p-8 md:p-12 shadow-sm">
        <div className="mb-10 text-center md:text-left">
           <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Código de Defesa do Consumidor</span>
           <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mt-2">Política de Reembolso e Restituição de Valores</h1>
           <div className="h-1.5 w-24 bg-orange-600 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="prose prose-slate max-w-none prose-headings:italic prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-slate-900 prose-p:leading-relaxed prose-p:font-medium">
          <p>Esta Política de Reembolso é parte integrante da nossa <strong>Política de Trocas e Devoluções</strong> e foi elaborada em conformidade com o Código de Defesa do Consumidor (Lei nº 8.078/90). Ela estabelece as condições para a restituição de valores pagos em caso de cancelamento, desistência (arrependimento) ou defeito do produto.</p>

          <hr className="my-10" />

          <h3>1. Condições para Reembolso</h3>
          <p>O reembolso dos valores pagos será processado somente após:</p>
          <ol>
            <li>O produto retornar à Central de Distribuição da WS Suplementos;</li>
            <li>A equipe de qualidade realizar a análise das condições do item;</li>
            <li>A solicitação de reembolso estar em conformidade com o prazo legal (7 dias para arrependimento, ou prazo estipulado para defeito).</li>
          </ol>
          <p><strong>O produto não pode apresentar sinais de uso, alteração ou violação.</strong></p>

          <h3>2. Prazo para Solicitação (Direito de Arrependimento)</h3>
          <p>Em casos de desistência da compra (<em>Direito de Arrependimento</em>):</p>
          <ul>
            <li>O cliente tem o prazo de <strong>7 (sete) dias corridos</strong>, a contar da data de recebimento do produto, para manifestar a vontade de devolver o item e solicitar o reembolso total.</li>
          </ul>

          <h3>3. Métodos de Reembolso</h3>
          <p>A restituição dos valores é realizada de acordo com a forma de pagamento original da compra:</p>

          <h4>A) Pagamento via Cartão de Crédito</h4>
          <ul>
            <li>O estorno é solicitado à operadora do cartão de crédito imediatamente após a aprovação da devolução.</li>
            <li>O prazo para que o valor retorne é de responsabilidade da administradora do cartão, podendo ocorrer na fatura atual ou na seguinte.</li>
            <li><em>Prazo Médio:</em> A WS Suplementos envia a solicitação em até <strong>30 dias</strong> após a aprovação da devolução.</li>
          </ul>

          <h4>B) Pagamento via PIX</h4>
          <ul>
            <li>O valor será restituído integralmente por meio de <strong>transferência bancária Pix</strong> para a conta do titular da compra (mesmo CPF).</li>
            <li>Não realizamos transferências para contas de terceiros.</li>
            <li><em>Prazo:</em> O depósito é efetuado em até <strong>30 dias</strong> após a aprovação da devolução e confirmação dos dados bancários.</li>
          </ul>

          <h4>C) Reembolso em Caso de Defeito ou Extravio</h4>
          <ul>
            <li>Caso o produto seja devolvido por comprovado defeito ou em caso de extravio confirmado pela transportadora, o cliente poderá optar pelo <strong>reembolso integral</strong> ou pela troca por um novo produto.</li>
          </ul>

          <h3>4. Frete e Custos Adicionais</h3>
          <ul>
            <li>Em casos de <strong>arrependimento</strong> ou <strong>defeito</strong> dentro do prazo legal, o valor do frete pago pelo cliente na compra (se houver) será restituído integralmente.</li>
            <li>Os custos de devolução do produto à WS Suplementos (logística reversa) serão arcados pela empresa, desde que a solicitação seja feita dentro do prazo legal.</li>
          </ul>

          <h3>5. Informações da Empresa</h3>
          <ul>
            <li><strong>Razão Social:</strong> Pharma Whey Suple LTDA</li>
            <li><strong>CNPJ:</strong> 61.544.860/0001-80</li>
            <li><strong>Inscrição Estadual (SP):</strong> 154.677.436.115</li>
            <li><strong>Endereço:</strong> Rua Alberto Jackson Byington, 96 – Jardim Chapadão, Campinas/SP – CEP 13070-063</li>
          </ul>

          <p>Em caso de dúvidas sobre o status do seu reembolso, entre em contato com nosso <strong>Fale Conosco</strong> informando o número do seu pedido.</p>
        </div>
      </div>
    </div>
  )
}
