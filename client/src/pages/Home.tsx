import { ArrowDownRight, ArrowUpRight, Leaf, Recycle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "wouter";
import { ProductCard } from "@/components/site/ProductCard";
import { SiteLayout } from "@/components/site/SiteLayout";
import { categories, products } from "@/lib/catalog";

export default function Home() {
  return <SiteLayout>
    <section className="hero container">
      <div className="hero-copy"><p className="eyebrow fade-up">Skincare essencial · edição 06</p><h1 className="fade-up delay-1">O ritual que<br /><em>fica com você.</em></h1><p className="hero-description fade-up delay-2">Fórmulas honestas, sensoriais e feitas para acompanhar a vida real — da primeira luz ao último gole de chá.</p><div className="hero-actions fade-up delay-3"><Link href="/catalogo" className="button button-dark">Explorar a coleção <ArrowUpRight size={17} /></Link><Link href="/" className="text-link">Conheça a VELA <ArrowDownRight size={15} /></Link></div><div className="hero-proof"><div className="avatar-stack"><span>LP</span><span>MA</span><span>JC</span></div><div><div className="stars"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div><p>Mais de 12 mil rituais em andamento</p></div></div></div>
      <div className="hero-art"><div className="hero-orb"></div><img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1100&q=88" alt="Produtos VELA em um cenário solar" /><div className="hero-note"><span className="note-dot"></span><span>feito no Brasil<br /><strong>sem pressa</strong></span></div><div className="hero-vertical">BEAUTY / 2026</div></div>
    </section>

    <section className="trust-strip"><div><Leaf size={18} /><span>Ingredientes rastreáveis</span></div><div><Recycle size={18} /><span>Embalagens conscientes</span></div><div><ShieldCheck size={18} /><span>Compra protegida</span></div><div><Sparkles size={18} /><span>Não testado em animais</span></div></section>

    <section className="section container categories-section"><div className="section-heading"><div><p className="eyebrow">Por onde começar</p><h2>Um lugar para cada <em>momento.</em></h2></div><Link href="/catalogo" className="text-link">Ver tudo <ArrowUpRight size={15} /></Link></div><div className="category-grid">{categories.map((category, index) => <Link key={category.name} href={`/catalogo?category=${category.name.toLowerCase()}`} className={`category-card ${category.tone}`}><span className="category-number">0{index + 1}</span><div><h3>{category.name}</h3><p>{category.count}</p></div><ArrowUpRight size={18} className="category-arrow" /></Link>)}</div></section>

    <section className="section container bestsellers"><div className="section-heading"><div><p className="eyebrow">A comunidade escolheu</p><h2>Os essenciais <em>da semana.</em></h2></div><Link href="/catalogo" className="text-link">Ver catálogo <ArrowUpRight size={15} /></Link></div><div className="product-grid">{products.slice(0, 4).map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div></section>

    <section className="manifesto"><div className="container manifesto-inner"><div><p className="eyebrow light">Manifesto VELA</p><h2>Beleza não precisa<br /><em>gritar.</em></h2></div><div className="manifesto-copy"><p>A gente acredita em produtos que cabem na rotina, não em rotinas que cabem em produtos. Por isso criamos menos, melhor e com intenção.</p><Link href="/" className="light-link">Leia nossa história <ArrowUpRight size={15} /></Link></div><div className="manifesto-stamp">since<br /><strong>2018</strong></div></div></section>

    <section className="creator-cta container"><div className="creator-art"><img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85" alt="Texturas naturais e cosméticos" /><span className="creator-caption">textura, tempo<br />e presença.</span></div><div className="creator-copy"><p className="eyebrow">Para quem compartilha</p><h2>Seu ritual.<br /><em>Seu código.</em></h2><p>Indique seus favoritos, crie uma comunidade com intenção e ganhe 12% em cada pedido feito com seu cupom.</p><Link href="/influenciadores" className="button button-dark">Conhecer o programa <ArrowUpRight size={17} /></Link></div></section>
  </SiteLayout>;
}
