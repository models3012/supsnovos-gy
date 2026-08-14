import { createFileRoute, Link } from '@tanstack/react-router'
import { SEO } from '@/components/seo/SEO'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-store'
import { ChevronLeft, CreditCard, ShieldCheck, Truck, Lock, MapPin, User, CheckCircle2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { trackBeginCheckout, trackPurchase, setEnhancedConversionData, setEcomm } from '@/lib/tracking'

export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
})

function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [isFinished, setIsFinished] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const ufRef = useRef<HTMLInputElement>(null);

  const totalPrice = getTotalPrice();
  const pixPrice = items.reduce((sum, item) => sum + item.pixPrice * item.quantity, 0);

  // begin_checkout — dispara 1x ao entrar com itens
  const beganRef = useRef(false);
  useEffect(() => {
    if (!beganRef.current && items.length > 0) {
      beganRef.current = true;
      trackBeginCheckout(
        items.map(i => ({
          id: i.id, name: i.name,
          brand: (i as any).brand, category: (i as any).category,
          price: i.price, quantity: i.quantity,
        })),
      );
    }
  }, [items.length]);


  if (isFinished) {
    return (
      <div className="container px-4 py-20 flex flex-col items-center text-center gap-6 animate-in fade-in zoom-in duration-500">
        <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
          <CheckCircle2 className="h-16 w-16" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Pedido Realizado!</h1>
        <p className="text-slate-500 font-bold uppercase italic max-w-md">
          Seu pedido foi processado com sucesso. Você receberá os detalhes da confirmação no seu e-mail em instantes.
        </p>
        <div className="bg-slate-50 border rounded-3xl p-8 w-full max-w-md flex flex-col gap-4 mt-4">
           <div className="flex justify-between font-bold uppercase italic text-xs text-slate-400">
              <span>Status</span>
              <span className="text-orange-600">Aguardando Pagamento</span>
           </div>
           <div className="h-px bg-slate-200 w-full" />
           <p className="text-sm font-medium text-slate-600">
              Caso tenha escolhido Pix, o código foi enviado para o seu WhatsApp e E-mail.
           </p>
        </div>
        <Button asChild className="bg-orange-600 font-black uppercase italic rounded-full px-12 py-8 mt-6">
           <Link to="/">Voltar para a Loja</Link>
        </Button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container px-4 py-20 text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter">Carrinho Vazio</h1>
        <p className="text-slate-500 font-bold uppercase italic">Adicione produtos para continuar com o checkout.</p>
        <Button asChild className="bg-orange-600 font-black uppercase italic rounded-full px-10 py-6">
           <Link to="/">Ver Suplementos</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO title="Checkout Seguro | WS Suplementos" description="Finalize sua compra com segurança na WS Suplementos." />
      
      <div className="container px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase text-slate-500 hover:text-orange-600 mb-8">
           <ChevronLeft className="h-4 w-4" /> Voltar para a loja
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Checkout Steps */}
          <div className="lg:col-span-2 flex flex-col gap-8">
             <div className="bg-white rounded-[40px] border p-8 md:p-12 shadow-sm flex flex-col gap-10">
                {/* Section 1: Information */}
                <div className="flex flex-col gap-8">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-black italic">1</div>
                      <h2 className="text-2xl font-black italic uppercase tracking-tighter">Dados Pessoais</h2>
                   </div>
                   <div className="grid md:grid-cols-2 gap-4">
                      <input ref={emailRef} placeholder="E-mail" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20" />
                      <input ref={cpfRef} placeholder="CPF" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20" />
                      <input ref={nameRef} placeholder="Nome Completo" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20 md:col-span-2" />
                      <input ref={phoneRef} placeholder="WhatsApp" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20" />
                   </div>
                </div>

                {/* Section 2: Delivery */}
                <div className="flex flex-col gap-8">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-black italic">2</div>
                      <h2 className="text-2xl font-black italic uppercase tracking-tighter">Entrega</h2>
                   </div>
                   <div className="grid md:grid-cols-3 gap-4">
                      <input ref={cepRef} placeholder="CEP" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20" />
                      <input ref={streetRef} placeholder="Rua" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20 md:col-span-2" />
                      <input placeholder="Número" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20" />
                      <input placeholder="Bairro" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20 md:col-span-2" />
                      <input ref={cityRef} placeholder="Cidade" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20 md:col-span-2" />
                      <input ref={ufRef} placeholder="UF" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm focus:ring-2 focus:ring-orange-600/20" />
                   </div>
                </div>


                {/* Section 3: Payment */}
                <div className="flex flex-col gap-8">
                   <div className="flex items-center gap-4">
                      <div className="h-10 w-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-black italic">3</div>
                      <h2 className="text-2xl font-black italic uppercase tracking-tighter">Pagamento</h2>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setPaymentMethod('pix')}
                        className={`flex flex-col items-center gap-3 p-6 rounded-3xl border-2 transition-all ${paymentMethod === 'pix' ? 'border-orange-600 bg-orange-50' : 'bg-slate-50 border-transparent hover:border-slate-200'}`}
                      >
                         <img src="https://logospng.org/download/pix/logo-pix-icone-512.png" className="h-8" alt="Pix" />
                         <span className="text-xs font-black uppercase italic">Pix (10% OFF)</span>
                      </button>
                      <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`flex flex-col items-center gap-3 p-6 rounded-3xl border-2 transition-all ${paymentMethod === 'card' ? 'border-orange-600 bg-orange-50' : 'bg-slate-50 border-transparent hover:border-slate-200'}`}
                      >
                         <CreditCard className={`h-8 w-8 ${paymentMethod === 'card' ? 'text-orange-600' : 'text-slate-400'}`} />
                         <span className="text-xs font-black uppercase italic">Cartão</span>
                      </button>
                   </div>

                   {paymentMethod === 'card' && (
                     <div className="grid md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        <input placeholder="Número do Cartão" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm md:col-span-2" />
                        <input placeholder="Nome no Cartão" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm md:col-span-2" />
                        <input placeholder="Validade (MM/AA)" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm" />
                        <input placeholder="CVV" className="h-14 bg-slate-50 border rounded-2xl px-6 font-bold text-sm" />
                     </div>
                   )}
                </div>
             </div>
          </div>

          {/* Order Summary */}
          <div className="flex flex-col gap-6">
             <div className="bg-slate-950 text-white rounded-[40px] p-8 md:p-10 shadow-2xl sticky top-24 flex flex-col gap-8">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter">Resumo do Pedido</h2>
                <div className="flex flex-col gap-4">
                   {items.map(item => (
                     <div key={item.id} className="flex justify-between gap-4 border-b border-white/10 pb-4">
                        <div className="flex flex-col gap-0.5">
                           <span className="text-[10px] font-black italic uppercase line-clamp-1">{item.name}</span>
                           <span className="text-[9px] font-bold text-slate-500 uppercase">Qtd: {item.quantity}</span>
                        </div>
                        <span className="text-xs font-black italic shrink-0 text-orange-500">R$ {(item.price * item.quantity).toFixed(2)}</span>
                     </div>
                   ))}
                </div>

                <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
                   <div className="flex justify-between text-slate-400 font-bold uppercase italic text-[10px]">
                      <span>Frete</span>
                      <span className="text-green-500">Grátis</span>
                   </div>
                   <div className="flex justify-between text-slate-400 font-bold uppercase italic text-[10px]">
                      <span>Subtotal</span>
                      <span>R$ {totalPrice.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between items-end mt-4">
                      <span className="text-sm font-black uppercase italic">Total</span>
                      <div className="flex flex-col items-end">
                        <span className="text-3xl font-black italic text-orange-600 leading-none">R$ {paymentMethod === 'pix' ? pixPrice.toFixed(2) : totalPrice.toFixed(2)}</span>
                        {paymentMethod === 'pix' && <span className="text-[10px] font-bold text-green-500 uppercase mt-1">Economia de R$ {(totalPrice - pixPrice).toFixed(2)}</span>}
                      </div>
                   </div>
                </div>

                <Button 
                  onClick={async () => {
                    const finalValue = paymentMethod === 'pix' ? pixPrice : totalPrice;
                    const transactionId = `WS-${Date.now()}`;
                    const [firstName, ...rest] = (nameRef.current?.value ?? '').trim().split(/\s+/);
                    await setEnhancedConversionData({
                      email: emailRef.current?.value,
                      phone: phoneRef.current?.value,
                      firstName,
                      lastName: rest.join(' '),
                      street: streetRef.current?.value,
                      city: cityRef.current?.value,
                      region: ufRef.current?.value,
                      postalCode: cepRef.current?.value,
                      country: 'BR',
                    });
                    trackPurchase({
                      transactionId,
                      value: finalValue,
                      items: items.map(i => ({
                        id: i.id, name: i.name,
                        brand: (i as any).brand, category: (i as any).category,
                        price: i.price, quantity: i.quantity,
                      })),
                    });
                    setIsFinished(true);
                    clearCart();
                  }}
                  className="w-full bg-white hover:bg-orange-600 text-slate-950 hover:text-white font-black uppercase italic text-xl py-8 rounded-full transition-all shadow-xl group"
                >
                   Finalizar Agora <CheckCircle2 className="ml-2 h-5 w-5 group-hover:scale-125 transition-transform" />
                </Button>


                <div className="flex flex-col items-center gap-4 pt-4">
                   <div className="flex items-center gap-2 opacity-50 grayscale">
                      <Lock className="h-3 w-3" />
                      <span className="text-[8px] font-black uppercase tracking-widest">Ambiente 100% Seguro</span>
                   </div>
                   <div className="flex gap-4 grayscale opacity-30">
                      <ShieldCheck className="h-6 w-6" />
                      <Truck className="h-6 w-6" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
