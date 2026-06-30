import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Search, ShoppingCart, Loader2, X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProdutoBling {
  id: number;
  nome: string;
  codigo: string;
  preco: number;
  precoCusto?: number;
  situacao: string;
  formato: string;
}

interface CartItem extends ProdutoBling {
  quantidade: number;
}

export default function Catalogo() {
  const [produtos, setProdutos] = useState<ProdutoBling[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    setLoading(true);
    setError("");
    try {
      const { data, error: invokeError } = await supabase.functions.invoke("bling-proxy", {
        body: { path: "produtos", pagina: 1, limite: 100 }
      });

      if (invokeError) throw new Error(invokeError.message);
      if (data && data.data) {
        // Filtrar apenas produtos ativos
        const ativos = data.data.filter((p: ProdutoBling) => p.situacao === 'A');
        setProdutos(ativos);
      } else {
        setProdutos([]);
      }
    } catch (err: any) {
      console.error("Erro ao buscar produtos:", err);
      setError("Falha ao carregar o catálogo. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const filteredProdutos = produtos.filter(p => 
    p.nome.toLowerCase().includes(search.toLowerCase()) || 
    (p.codigo && p.codigo.toLowerCase().includes(search.toLowerCase()))
  );

  const addToCart = (produto: ProdutoBling) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === produto.id);
      if (existing) {
        return prev.map(item => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item);
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantidade + delta;
        return newQ > 0 ? { ...item, quantidade: newQ } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantidade, 0);

  const sendOrderToWhatsApp = () => {
    const phoneNumber = "5511999999999"; // O usuário deve alterar isto depois
    let message = "*NOVO PEDIDO (ATACADO)*\\n\\n";
    cart.forEach(item => {
      message += `• ${item.quantidade}x ${item.nome} (Ref: ${item.codigo || 'N/A'}) - R$ ${(item.preco * item.quantidade).toFixed(2)}\\n`;
    });
    message += `\\n*TOTAL: R$ ${cartTotal.toFixed(2)}*\\n\\nAguardo retorno para finalizar!`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#c2a25f] selection:text-black font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-light tracking-widest text-[#c2a25f]">PÉROLA PRATAS</h1>
            <span className="hidden md:inline-block px-2 py-1 text-xs border border-white/20 rounded-full text-white/70">Catálogo Atacado</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input 
                type="text" 
                placeholder="Buscar produtos..." 
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-[#c2a25f]/50 transition-colors w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/5 rounded-full transition-colors group"
            >
              <ShoppingCart className="w-6 h-6 text-white/80 group-hover:text-white" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#c2a25f] text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Mobile Search */}
        <div className="relative md:hidden mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#c2a25f]/50 transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
            <Loader2 className="w-10 h-10 animate-spin text-[#c2a25f] mb-4" />
            <p className="text-sm tracking-widest uppercase">Conectando ao Bling...</p>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center max-w-md mx-auto">
            <p className="text-red-400 mb-4">{error}</p>
            <button onClick={fetchProdutos} className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-sm">
              Tentar Novamente
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProdutos.map((produto) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={produto.id}
                  className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.07] hover:border-white/20 transition-all flex flex-col"
                >
                  <div className="aspect-[4/5] bg-black/40 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60"></div>
                    <span className="text-white/20 text-xs uppercase tracking-widest z-0">Sem Imagem</span>
                  </div>
                  
                  <div className="p-5 relative z-20 flex-1 flex flex-col">
                    <p className="text-xs text-white/40 mb-2 uppercase tracking-wider">{produto.codigo || 'S/ Ref'}</p>
                    <h3 className="text-sm font-medium text-white/90 leading-tight mb-4 line-clamp-2 flex-1">
                      {produto.nome}
                    </h3>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="text-xs text-white/40">Preço Atacado</span>
                        <span className="text-lg font-light text-[#c2a25f]">
                          R$ {Number(produto.preco).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <button 
                        onClick={() => addToCart(produto)}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c2a25f] hover:text-black transition-colors"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProdutos.length === 0 && (
              <div className="col-span-full py-20 text-center opacity-50">
                <p>Nenhum produto encontrado.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-50 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-xl font-light">Seu Pedido</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full opacity-40">
                    <ShoppingCart className="w-16 h-16 mb-4" />
                    <p>Seu carrinho está vazio.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                      <div className="w-16 h-16 bg-black rounded-lg flex-shrink-0 border border-white/5 flex items-center justify-center">
                        <span className="text-[10px] text-white/20">Sem Imagem</span>
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-sm font-medium leading-tight mb-1 line-clamp-2">{item.nome}</h4>
                          <p className="text-xs text-[#c2a25f]">R$ {Number(item.preco).toFixed(2).replace('.', ',')}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3 bg-black rounded-full px-2 py-1 border border-white/10">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-[#c2a25f]"><Minus className="w-3 h-3" /></button>
                            <span className="text-xs font-medium w-4 text-center">{item.quantidade}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-[#c2a25f]"><Plus className="w-3 h-3" /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-300 uppercase tracking-wider">
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              {cart.length > 0 && (
                <div className="p-6 border-t border-white/10 bg-black/50">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-white/60">Total Estimado</span>
                    <span className="text-2xl font-light text-[#c2a25f]">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <button 
                    onClick={sendOrderToWhatsApp}
                    className="w-full py-4 bg-[#c2a25f] hover:bg-[#d4b472] text-black font-semibold rounded-xl uppercase tracking-widest text-sm transition-colors shadow-[0_0_20px_rgba(194,162,95,0.3)]"
                  >
                    Enviar Pedido pelo WhatsApp
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
