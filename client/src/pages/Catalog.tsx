import { Filter, Grid2X2, List, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation } from "wouter";
import { ProductCard } from "@/components/site/ProductCard";
import { PageIntro, SiteLayout } from "@/components/site/SiteLayout";
import { categories, catalogProducts } from "@/lib/catalog";

export default function Catalog() {
  const [location, setLocation] = useLocation();
  const params = new URLSearchParams(location.split("?")[1] || "");
  const urlCategory = params.get("category") || "todos";
  const urlQuery = params.get("q") || "";
  const [category, setCategory] = useState(urlCategory);
  const [query, setQuery] = useState(urlQuery);
  const [sort, setSort] = useState("relevantes");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    const result = catalogProducts.filter((product) => (category === "todos" || product.category === category) && (!normalized || `${product.name} ${product.description} ${product.ingredients}`.toLowerCase().includes(normalized)));
    return [...result].sort((a, b) => sort === "menor-preco" ? a.price - b.price : sort === "maior-preco" ? b.price - a.price : sort === "novidades" ? (b.badge === "Novo" ? 1 : 0) - (a.badge === "Novo" ? 1 : 0) : 0);
  }, [category, query, sort]);
  const applyCategory = (value: string) => { setCategory(value); setLocation(value === "todos" ? "/catalogo" : `/catalogo?category=${value}`); };
  return <SiteLayout>
    <PageIntro eyebrow="A coleção VELA" title="Escolha o seu essencial." description="Do primeiro passo da rotina ao ritual completo: fórmulas sensoriais, transparentes e feitas para a vida real." />
    <section className="catalog-toolbar container"><div className="catalog-tabs"><button className={category === "todos" ? "selected" : ""} onClick={() => applyCategory("todos")}>Todos <span>124</span></button>{categories.map((item) => <button key={item.name} className={category === item.name.toLowerCase() ? "selected" : ""} onClick={() => applyCategory(item.name.toLowerCase())}>{item.name} <span>{item.name === "Rosto" ? 42 : item.name === "Corpo" ? 28 : item.name === "Cabelos" ? 36 : 18}</span></button>)}</div><div className="catalog-controls"><button className="filter-toggle" onClick={() => setFiltersOpen((value) => !value)}><SlidersHorizontal size={16} /> Filtros</button><label className="sort-label">Ordenar por <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="relevantes">Mais relevantes</option><option value="novidades">Novidades</option><option value="menor-preco">Menor preço</option><option value="maior-preco">Maior preço</option></select></label><button className="view-toggle active"><Grid2X2 size={17} /></button><button className="view-toggle"><List size={17} /></button></div></section>
    {filtersOpen && <div className="filter-panel container"><div className="filter-chip"><Filter size={14} /> Veganos <X size={13} /></div><div className="filter-chip">Até R$ 100 <X size={13} /></div><button onClick={() => setFiltersOpen(false)}>Aplicar filtros</button></div>}
    <section className="catalog-results container"><div className="results-head"><p><strong>{filtered.length}</strong> produtos {query && <>para <strong>“{query}”</strong></>}</p><div className="catalog-search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar produto" /></div></div>{filtered.length ? <div className="product-grid">{filtered.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div> : <div className="empty-state"><Search size={28} /><h3>Nada por aqui, ainda.</h3><p>Tente outra busca ou volte para ver todos os essenciais.</p><button className="button button-dark" onClick={() => { setQuery(""); applyCategory("todos"); }}>Limpar busca</button></div>}</section>
  </SiteLayout>;
}
