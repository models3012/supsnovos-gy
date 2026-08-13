import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'

export const Route = createFileRoute('/sobre-nos')({
  head: () => ({
    meta: [
      { title: 'Sobre Nós | Skill Fitt Suplementos' },
      { name: 'description', content: 'Conheça a Skill Fitt Suplementos — missão, valores e compromisso com qualidade em suplementação esportiva no Brasil.' },
      { property: 'og:title', content: 'Sobre Nós | Skill Fitt Suplementos' },
      { property: 'og:description', content: 'Loja de suplementos com procedência garantida, entrega rápida e atendimento humanizado.' },
    ],
  }),
  component: SobreNos,
})

function SobreNos() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
      <SEO title="Sobre Nós | Skill Fitt Suplementos" description="Conheça a Skill Fitt Suplementos — missão, valores e informações corporativas." />
      <div className="bg-white rounded-[40px] border p-8 md:p-12 shadow-sm">
        <div className="mb-10 text-center md:text-left">
          <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Nossa História</span>
          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mt-2">Sobre Nós</h1>
          <div className="h-1.5 w-24 bg-orange-600 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="prose prose-slate max-w-none prose-headings:italic prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-slate-900 prose-p:leading-relaxed prose-p:font-medium">
          <p>A <strong>Skill Fitt</strong> é mais do que uma loja online de suplementos; somos um projeto dedicado a cuidar da saúde e do bem-estar de milhares de brasileiros. Nascemos com a missão de democratizar o acesso a suplementos e produtos de saúde com os melhores preços do mercado.</p>
          <p>Especializados em <strong>Suplementação Esportiva e Bem-estar</strong>, trabalhamos com uma ampla variedade de produtos que inclui Whey Protein, Creatina, Pré-Treinos, Vitaminas, Hipercalóricos e Acessórios, todos selecionados com rigor e procedência garantida.</p>
          <p className="italic text-orange-600">Nosso lema é: "Skill Fitt – Seu tempo de evoluir."</p>

          <h3>Nossa Missão e Valores</h3>
          <p><strong>Missão:</strong> Oferecer o melhor custo-benefício em suplementos e produtos de saúde, proporcionando atendimento de qualidade e preços acessíveis que garantam o cuidado com a saúde de cada cliente.</p>
          <p><strong>Valores:</strong></p>
          <ul>
            <li><strong>Qualidade:</strong> Compromisso com produtos de procedência garantida e dentro do prazo de validade.</li>
            <li><strong>Acessibilidade:</strong> Tornar suplementos e produtos de saúde acessíveis, mantendo preços justos e competitivos.</li>
            <li><strong>Inovação:</strong> Estar sempre atualizados com as novidades do mercado para oferecer o melhor aos nossos clientes.</li>
            <li><strong>Transparência:</strong> Garantir um relacionamento honesto e claro, desde a compra até o pós-venda.</li>
          </ul>

          <h3>Por Que Escolher a Skill Fitt?</h3>
          <ul>
            <li><strong>Procedência Garantida:</strong> Todos os produtos são adquiridos diretamente de distribuidores autorizados.</li>
            <li><strong>Melhor Custo-Benefício:</strong> Unimos qualidade, variedade e preços justos.</li>
            <li><strong>Envio Rápido:</strong> Oferecemos entrega rápida para todo o Brasil via Correios.</li>
            <li><strong>Flexibilidade de Pagamento:</strong> Facilitamos suas compras com opções de pagamento em até 12x ou à vista no Pix.</li>
            <li><strong>Atendimento Humanizado:</strong> Nossa equipe está pronta para atendê-lo de Segunda a Sexta, das 8h00 às 18h00.</li>
          </ul>

          <h3>Informações Corporativas</h3>
          <ul>
            <li><strong>Razão Social:</strong> Skil Fitt Suplementos LTDA</li>
            <li><strong>Nome Fantasia:</strong> Skill Fitt</li>
            <li><strong>CNPJ:</strong> 64.854.093/0001-02</li>
            <li><strong>Endereço:</strong> Avenida Luiz Tarquínio Pontes, 004 – Pitangueiras, Lauro de Freitas/BA – CEP 42701-450</li>
            <li><strong>Contato:</strong> contato@skillfit.online</li>
          </ul>

          <hr className="my-10" />
          <p className="italic">Agradecemos por fazer parte da nossa história. <strong>Evolua com a Skill Fitt!</strong></p>
        </div>
      </div>
    </div>
  )
}
