import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'

export const Route = createFileRoute('/meus-direitos-lgpd')({
  head: () => ({
    meta: [
      { title: 'Meus Direitos como Titular dos Dados (LGPD) | Skill Fitt Suplementos' },
      { name: 'description', content: 'Conheça e exerça gratuitamente os direitos garantidos pela LGPD sobre seus dados pessoais tratados pela Skill Fitt.' },
    ],
  }),
  component: LgpdRights,
})

const RIGHTS = [
  { title: 'Confirmação da existência de tratamento', body: 'Saber se a Skill Fitt trata dados pessoais sobre você. (Art. 18, I)' },
  { title: 'Acesso aos dados', body: 'Solicitar uma cópia dos dados pessoais que mantemos sobre você. (Art. 18, II)' },
  { title: 'Correção de dados', body: 'Pedir a correção de dados incompletos, inexatos ou desatualizados. (Art. 18, III)' },
  { title: 'Anonimização, bloqueio ou eliminação', body: 'Solicitar a remoção de dados desnecessários, excessivos ou tratados em desconformidade. (Art. 18, IV)' },
  { title: 'Portabilidade', body: 'Receber seus dados em formato estruturado para transferir a outro fornecedor. (Art. 18, V)' },
  { title: 'Eliminação após o consentimento', body: 'Pedir a exclusão dos dados tratados com base em consentimento, exceto hipóteses legais de retenção. (Art. 18, VI)' },
  { title: 'Informação sobre compartilhamentos', body: 'Saber com quais entidades públicas ou privadas compartilhamos seus dados. (Art. 18, VII)' },
  { title: 'Revogação do consentimento', body: 'Retirar seu consentimento a qualquer momento, de forma facilitada e gratuita. (Art. 18, IX)' },
]

function LgpdRights() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
      <SEO title="Meus Direitos como Titular dos Dados | Skill Fitt Suplementos" description="Conheça e exerça os direitos LGPD sobre seus dados pessoais — de forma gratuita e facilitada." />

      <div className="bg-white rounded-[40px] border p-8 md:p-12 shadow-sm">
        <div className="mb-10 text-center md:text-left">
          <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">LGPD — Lei 13.709/2018</span>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mt-2">Meus Direitos como Titular dos Dados</h1>
          <div className="h-1.5 w-24 bg-orange-600 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="prose prose-slate max-w-none prose-headings:italic prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-slate-900 prose-p:leading-relaxed prose-p:font-medium">
          <p>A <strong>Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)</strong> garante a você, titular dos dados pessoais, uma série de direitos sobre as informações que a Skill Fitt coleta e trata. Esta página explica cada um deles e como exercê-los — de forma <strong>gratuita</strong> e <strong>facilitada</strong>.</p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {RIGHTS.map((r) => (
              <div key={r.title} className="border rounded-2xl p-5 hover:border-orange-500/40 transition-colors">
                <h3 className="font-black italic uppercase text-sm tracking-tight">{r.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          <h3>Como exercer seus direitos</h3>
          <p>Para exercer qualquer um dos direitos acima, envie sua solicitação ao nosso <strong>Encarregado de Dados (DPO)</strong> pelos canais abaixo. Responderemos em até <strong>15 dias</strong> contados do recebimento.</p>

          <div className="not-prose bg-slate-50 border rounded-2xl p-6 my-6">
            <p className="text-xs font-black uppercase tracking-widest text-slate-500">Encarregado de Dados (DPO)</p>
            <a href="mailto:dpo@skillfit.online?subject=Solicita%C3%A7%C3%A3o%20LGPD%20-%20Titular%20de%20Dados" className="text-orange-600 font-black italic text-lg">dpo@skillfit.online</a>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Inclua na mensagem: seu nome completo, CPF, e-mail usado nas compras e qual direito deseja exercer. Podemos solicitar documentos adicionais para confirmar sua identidade antes de atender o pedido.
            </p>
          </div>

          <h3>Reclamação à ANPD</h3>
          <p>Caso entenda que seus direitos não foram respeitados, você também pode apresentar reclamação à <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer">Autoridade Nacional de Proteção de Dados (ANPD)</a>.</p>

          <h3>Gerenciar consentimento de cookies</h3>
          <p>Para revisar ou alterar suas preferências de cookies a qualquer momento, basta limpar os dados do site no seu navegador — o banner de consentimento aparecerá novamente. Em breve disponibilizaremos um botão dedicado de "Gerenciar cookies" diretamente nesta página.</p>
        </div>
      </div>
    </div>
  )
}
