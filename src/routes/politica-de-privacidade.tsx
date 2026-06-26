import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'

export const Route = createFileRoute('/politica-de-privacidade')({
  head: () => ({
    meta: [
      { title: 'Política de Privacidade | Ultra Gym Supplements' },
      { name: 'description', content: 'Como a Ultra Gym Supplements LTDA coleta, utiliza, armazena, protege e compartilha suas informações pessoais — conforme a LGPD.' },
    ],
  }),
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
      <SEO title="Política de Privacidade | Ultra Gym Supplements" description="Esta Política de Privacidade descreve como a Ultra Gym Supplements LTDA coleta, utiliza e protege suas informações pessoais." />

      <div className="bg-white rounded-[40px] border p-8 md:p-12 shadow-sm">
        <div className="mb-10 text-center md:text-left">
           <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Conformidade LGPD</span>
           <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mt-2">Política de Privacidade</h1>
           <div className="h-1.5 w-24 bg-orange-600 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="prose prose-slate max-w-none prose-headings:italic prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-slate-900 prose-p:leading-relaxed prose-p:font-medium">
          <p>Esta Política de Privacidade ("Política") descreve como a <strong>Ultra Gym Supplements LTDA</strong>, inscrita no CNPJ <strong>53.320.355/0001-24</strong>, coleta, utiliza, armazena, protege e compartilha as informações pessoais de seus usuários.</p>
          <p>Esta Política está em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).</p>

          <hr className="my-10" />

          <h3>1. Controladora dos Dados Pessoais</h3>
          <ul>
            <li><strong>Empresa:</strong> Ultra Gym Supplements LTDA</li>
            <li><strong>CNPJ:</strong> 53.320.355/0001-24</li>
            <li><strong>Sede:</strong> Rua Olimpio Fortunato, 149 – São Miguel, Nova Ponte/MG – CEP 38160-000</li>
            <li><strong>Contato:</strong> contato@ultragym.net</li>
          </ul>

          <h3>2. Dados Coletados e Finalidades</h3>
          <p>Coletamos dados pessoais para finalidades específicas e legítimas:</p>
          <ul>
            <li><strong>Dados de Cadastro:</strong> Nome completo, CPF, E-mail, Telefone, Data de Nascimento — para criação de conta, identificação e comunicação.</li>
            <li><strong>Dados de Compra e Envio:</strong> Endereço de entrega, detalhes do pedido — para processamento e entrega dos produtos.</li>
            <li><strong>Dados de Pagamento:</strong> Informações de cartão de crédito (criptografadas), dados de transação PIX — para processamento do pagamento. <strong>Não armazenamos números completos de cartão.</strong></li>
            <li><strong>Dados de Navegação (Cookies):</strong> Endereço IP, localização, dispositivo, páginas visitadas — para análise de tráfego e melhoria da experiência.</li>
            <li><strong>Dados de Marketing:</strong> Preferências, e-mail para newsletter — para envio de promoções e novidades (mediante consentimento).</li>
          </ul>

          <h3>3. Compartilhamento de Dados Pessoais</h3>
          <p>A Ultra Gym somente compartilha seus dados quando estritamente necessário:</p>
          <ul>
            <li><strong>Transportadoras/Logística:</strong> Nome, CPF, Endereço e Telefone para efetuar a entrega.</li>
            <li><strong>Gateway de Pagamento:</strong> Dados de pagamento são enviados de forma criptografada para as instituições financeiras.</li>
            <li><strong>Plataformas de Marketing:</strong> Para envio de e-mail marketing, sempre mediante consentimento.</li>
            <li><strong>Autoridades Governamentais:</strong> Em cumprimento a ordens judiciais ou obrigações legais.</li>
          </ul>

          <h3>4. Segurança dos Dados</h3>
          <ul>
            <li><strong>Criptografia (SSL):</strong> Nosso site utiliza certificação SSL para criptografar toda a comunicação de dados.</li>
            <li><strong>Acesso Restrito:</strong> O acesso aos seus dados é limitado a funcionários autorizados.</li>
            <li><strong>Não Armazenamento:</strong> Não armazenamos dados sensíveis de pagamento.</li>
          </ul>

          <h3>5. Seus Direitos como Titular de Dados (LGPD)</h3>
          <p>Você pode, a qualquer momento, exercer os seguintes direitos:</p>
          <ol>
            <li><strong>Confirmação:</strong> Confirmar a existência de tratamento dos seus dados.</li>
            <li><strong>Acesso:</strong> Acessar os dados pessoais que mantemos sobre você.</li>
            <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou inexatos.</li>
            <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar o encerramento do tratamento de dados desnecessários.</li>
            <li><strong>Portabilidade:</strong> Requerer a portabilidade dos dados a outro fornecedor.</li>
            <li><strong>Revogação do Consentimento:</strong> Revogar o consentimento a qualquer momento.</li>
          </ol>

          <h3>6. Como Exercer Seus Direitos</h3>
          <p>Para exercer qualquer um dos direitos mencionados, entre em contato através do e-mail: <strong>contato@ultragym.net</strong>. Você também pode consultar a página <Link to="/meus-direitos-lgpd" className="text-orange-600 font-bold">Meus Direitos como Titular dos Dados</Link>.</p>

          <h3>7. Uso de Cookies</h3>
          <ul>
            <li><strong>O que são Cookies:</strong> Pequenos arquivos de texto armazenados em seu dispositivo para reconhecê-lo em futuras visitas.</li>
            <li><strong>Tipos:</strong> Utilizamos cookies essenciais, analíticos e de marketing.</li>
            <li><strong>Controle:</strong> Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.</li>
          </ul>

          <h3>8. Atualizações desta Política</h3>
          <p>Esta Política de Privacidade pode ser atualizada a qualquer momento. Quaisquer alterações significativas serão comunicadas em destaque em nosso site.</p>

          <hr className="my-10" />
          <p className="text-sm text-slate-500 italic">Última atualização: Abril/2026.</p>
        </div>
      </div>
    </div>
  )
}
