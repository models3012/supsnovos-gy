import { ShoppingCart, Plus, Minus, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-store";
import { Link } from "@tanstack/react-router";

export const CartSidebar = () => {
  const { items, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-600 text-[10px] font-bold text-white animate-in zoom-in">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="flex items-center gap-2 font-black italic uppercase tracking-tighter text-2xl">
            Seu Carrinho <span className="text-orange-600 text-sm">({totalItems} itens)</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <div className="bg-slate-50 p-6 rounded-full">
                <ShoppingCart className="h-12 w-12 text-slate-300" />
              </div>
              <p className="text-slate-500 font-bold uppercase italic text-sm tracking-tight">
                Seu carrinho está vazio
              </p>
              <Button asChild className="bg-orange-600 font-black uppercase italic rounded-full px-8 py-6">
                 <Link to="/">Começar a comprar</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="h-24 w-24 bg-slate-50 rounded-2xl p-2 border shrink-0 flex items-center justify-center">
                    <img src={item.image} alt={item.name} className="h-full w-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-[11px] font-black uppercase italic tracking-tight line-clamp-2 leading-tight">
                          {item.name}
                        </h4>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest italic">{item.brand}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-full px-2 py-1 bg-slate-50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-orange-600 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-black italic">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-orange-600 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black italic">R$ {(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-[10px] text-orange-600 font-bold italic">Pix: R$ {(item.pixPrice * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="flex-col sm:flex-col p-6 bg-slate-50 border-t gap-4">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm font-bold uppercase italic text-slate-500">
                <span>Subtotal</span>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-black uppercase italic tracking-tighter">
                <span>Total no Pix</span>
                <span className="text-orange-600">R$ {items.reduce((sum, item) => sum + item.pixPrice * item.quantity, 0).toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase italic text-right mt-1">
                Economia de R$ {(totalPrice - items.reduce((sum, item) => sum + item.pixPrice * item.quantity, 0)).toFixed(2)} no Pix
              </p>
            </div>
            <Link to="/checkout" className="w-full">
              <Button className="w-full bg-slate-950 hover:bg-orange-600 text-white font-black uppercase italic text-lg py-8 rounded-full shadow-xl transition-all">
                Finalizar Compra
              </Button>
            </Link>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
