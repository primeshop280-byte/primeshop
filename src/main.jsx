import React from "react";
import { createRoot } from "react-dom/client";
import { Search, ShoppingBag, Menu, ArrowRight, Truck, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import "./styles.css";

const products = [
  { name: "Smart Gadget Pro", price: "R$ 89,90", old: "R$ 129,90", tag: "OFERTA", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85" },
  { name: "Luminária Galaxy", price: "R$ 79,90", old: "R$ 109,90", tag: "MAIS VENDIDO", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85" },
  { name: "Organizador Premium", price: "R$ 59,90", old: "R$ 89,90", tag: "NOVIDADE", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=85" },
  { name: "Acessório Smart", price: "R$ 69,90", old: "R$ 99,90", tag: "OFERTA", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85" }
];

function App() {
  return <div className="app">
    <div className="topbar">🚚 Frete rápido • Compra segura • Atendimento PrimeShop</div>
    <header>
      <button className="icon"><Menu size={22}/></button>
      <div className="logo"><span>PRIME</span><b>SHOP</b></div>
      <nav><a href="#inicio">Início</a><a href="#ofertas">Ofertas</a><a href="#novidades">Novidades</a><a href="#beneficios">Por que PrimeShop?</a></nav>
      <div className="actions"><button className="icon"><Search size={21}/></button><button className="bag"><ShoppingBag size={21}/><i>0</i></button></div>
    </header>

    <main id="inicio">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={15}/> SELEÇÃO PRIME</span>
          <h1>Produtos que<br/><em>merecem</em> estar<br/>na sua casa.</h1>
          <p>Descubra produtos úteis, modernos e desejados, selecionados para transformar pequenas escolhas em grandes achados.</p>
          <a className="cta" href="#ofertas">Explorar ofertas <ArrowRight size={18}/></a>
        </div>
        <div className="hero-art">
          <div className="orb orb1"></div><div className="orb orb2"></div>
          <div className="hero-card"><span>PRIME<br/><b>DROP</b></span></div>
          <div className="floating f1">NOVO</div><div className="floating f2">-30%</div>
        </div>
      </section>

      <section className="benefits" id="beneficios">
        <div><Truck/><span><b>Envio rápido</b><small>Para todo o Brasil</small></span></div>
        <div><ShieldCheck/><span><b>Compra segura</b><small>Pagamento protegido</small></span></div>
        <div><CreditCard/><span><b>Pagamento fácil</b><small>Pix e cartão</small></span></div>
      </section>

      <section className="products" id="ofertas">
        <div className="section-head"><div><span className="eyebrow">EM DESTAQUE</span><h2>Achados da semana</h2></div><a href="#ofertas">Ver todos <ArrowRight size={16}/></a></div>
        <div className="grid">{products.map((p) => <article className="product" key={p.name}>
          <div className="photo"><img src={p.image} alt={p.name}/><span>{p.tag}</span><button><ShoppingBag size={18}/></button></div>
          <div className="info"><h3>{p.name}</h3><div><del>{p.old}</del><strong>{p.price}</strong></div></div>
        </article>)}</div>
      </section>

      <section className="banner" id="novidades">
        <div><span className="eyebrow">PRIME DROP</span><h2>Descubra antes de todo mundo.</h2><p>Novos produtos, ofertas especiais e oportunidades selecionadas em um só lugar.</p><a className="cta light" href="#ofertas">Quero conhecer <ArrowRight size={18}/></a></div>
      </section>
    </main>

    <footer><div className="logo"><span>PRIME</span><b>SHOP</b></div><p>Curadoria de produtos para a vida real.</p><small>© 2026 PrimeShop. Todos os direitos reservados.</small></footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App />);