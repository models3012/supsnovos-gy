import { createFileRoute } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'

export const Route = createFileRoute('/termos-de-uso')({
  component: TermsOfUse,
})

function TermsOfUse() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8 max-w-4xl">
      <SEO title="Termos de Uso | Ultra Gym Supplements" description="Ao acessar este site, você concorda com nossos Termos de Uso. Leia atentamente as regras de utilização da plataforma." />
      
      <div className="bg-white rounded-[40px] border p-8 md:p-12 shadow-sm">
        <div className="mb-10 text-center md:text-left">
           <span className="text-orange-600 font-black italic uppercase tracking-widest text-xs">Condições de Uso</span>
           <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mt-2">Termos de Uso</h1>
           <div className="h-1.5 w-24 bg-orange-600 mt-6 mx-auto md:mx-0" />
        </div>

        <div className="prose prose-slate max-w-none prose-headings:italic prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-strong:text-slate-900 prose-p:leading-relaxed prose-p:font-medium">
          <p>Ao utilizar o site da <strong>Ultra Gym Supplements</strong>, você concorda com o cumprimento destes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>

          <hr className="my-10" />

          <h3>1. Uso de Licença</h3>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Ultra Gym Supplements, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
          <ul>
            <li>Modificar ou copiar os materiais;</li>
            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Ultra Gym Supplements;</li>
            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
          </ul>
          <p>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida pela Ultra Gym Supplements a qualquer momento.</p>

          <h3>2. Isenção de Responsabilidade</h3>
          <p>Os materiais no site da Ultra Gym Supplements são fornecidos 'como estão'. Ultra Gym Supplements não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>

          <h3>3. Limitações</h3>
          <p>Em nenhum caso a Ultra Gym Supplements ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Ultra Gym Supplements.</p>

          <h3>4. Precisão dos Materiais</h3>
          <p>Os materiais exibidos no site da Ultra Gym Supplements podem incluir erros técnicos, tipográficos ou fotográficos. Ultra Gym Supplements não garante que qualquer material em seu site seja preciso, completo ou atual. Ultra Gym Supplements pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.</p>

          <h3>5. Links</h3>
          <p>A Ultra Gym Supplements não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso pela Ultra Gym Supplements do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

          <hr className="my-10" />
          
          <p className="text-sm text-slate-500 italic">Estes termos são efetivos a partir de Junho de 2026.</p>
        </div>
      </div>
    </div>
  )
}