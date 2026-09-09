import { ArrowLeft, ChevronDown, Minus, Plus, ShieldCheck, Star, Truck } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useRoute } from "wouter";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductReviews } from "@/components/site/ProductReviews";
import { SiteLayout } from "@/components/site/SiteLayout";
import { findProduct, money, products } from "@/lib/catalog";
import { useReviews } from "@/contexts/ReviewsContext";
import { useShop } from "@/contexts/ShopContext";
import { toast } from "sonner";

export default function Product() {
  const [, params] = useRoute("/produto/:slug");
  const [, setLocation] = useLocation();
  const product = params?.slug ? findProduct(params.slug) : undefined;
  const { addToCart } = useShop();
  const { getReviews } = useReviews();
  const [quantity, setQuantity] = useState(1);
  const [openDetails, setOpenDetails] = useState("Ingredientes");
  if (!product) return <SiteLayout><div className="empty-state container"><h3>Produto não encontrado.</h3><Link href="/catalogo" className="button button-dark">Voltar ao catálogo</Link></div></SiteLayout>;
  const reviews = getReviews(product.id);
  const average = reviews.length ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 4.9;
  const add = () => { Array.from({ length: quantity }).forEach(() => addToCart(product)); toast.success("Pronto: seu ritual está na sacola."); setLocation("/checkout"); };
  return <SiteLayout><section className="product-detail container"><Link href="/catalogo" className="back-link"><ArrowLeft size={15} /> Voltar para a coleção</Link><div className="product-detail-grid"><div className="detail-image" style={{ backgroundColor: product.tone }}><span className="detail-note">{product.badge || "feito para ficar"}</span><img src={product.image} alt={product.name} /></div><div className="detail-copy"><p className="eyebrow">{product.categoryLabel} · {product.size}</p><h1>{product.name}</h1><a className="detail-rating" href="#avaliacoes"><span className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></span> {average.toFixed(1).replace(".", ",")} <u>{reviews.length || 128} avaliações</u></a><p className="detail-description">{product.description}</p><div className="detail-price"><strong>{money(product.price)}</strong>{product.compareAt && <><del>{money(product.compareAt)}</del><span>economize {money(product.compareAt - product.price)}</span></>}</div><p className="installment">ou 3x de {money(product.price / 3)} sem juros</p><div className="detail-actions"><div className="quantity"><button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Diminuir"><Minus size={15} /></button><span>{quantity}</span><button onClick={() => setQuantity((value) => value + 1)} aria-label="Aumentar"><Plus size={15} /></button></div><button className="button button-dark add-detail" onClick={add}>Adicionar à sacola <Plus size={17} /></button></div><div className="detail-perks"><div><Truck size={17} /><span><strong>Entrega cuidadosa</strong> para todo o Brasil</span></div><div><ShieldCheck size={17} /><span><strong>Compra protegida</strong> com checkout seguro</span></div></div><div className="accordion-list">{["Ingredientes", "Como usar", "Sustentabilidade"].map((title) => <div className={`accordion-row ${openDetails === title ? "open" : ""}`} key={title}><button onClick={() => setOpenDetails(openDetails === title ? "" : title)}>{title}<ChevronDown size={16} /></button>{openDetails === title && <p>{title === "Ingredientes" ? product.ingredients : title === "Como usar" ? "Aplique uma pequena quantidade na pele limpa. Respire fundo. Repita de manhã e à noite." : "Fórmula vegana, embalagem reciclável e produção em pequenos lotes para evitar desperdício."}</p>}</div>)}</div></div></div></section><ProductReviews productId={product.id} /><section className="section container related"><div className="section-heading"><div><p className="eyebrow">Você também pode gostar</p><h2>Mais um passo para o seu <em>ritual.</em></h2></div></div><div className="product-grid">{products.filter((item) => item.id !== product.id).slice(0, 4).map((item, index) => <ProductCard key={item.id} product={item} index={index} />)}</div></section></SiteLayout>;
}
