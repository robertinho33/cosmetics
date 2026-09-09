import { ArrowRight, Check, Circle, HelpCircle, Package, Search, Truck } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { PageIntro, SiteLayout } from "@/components/site/SiteLayout";

const steps = [
  { title: "Pedido recebido", detail: "08 set · 10:42", done: true },
  { title: "Em preparação", detail: "08 set · 14:10", done: true },
  { title: "A caminho", detail: "Previsão: 10 set", done: true },
  { title: "Entregue", detail: "Aguardando chegada", done: false },
];

export default function Tracking() {
  const [code, setCode] = useState("VELA-25819");
  const [tracked, setTracked] = useState(true);
  return <SiteLayout><PageIntro eyebrow="Cuidado depois da compra" title="Acompanhe seu pedido." description="Da nossa bancada até a sua porta, você sabe exatamente onde o seu ritual está." /><section className="tracking-layout container"><div className="tracking-search"><p className="eyebrow">Código de rastreio</p><div className="tracking-input"><Search size={18} /><input value={code} onChange={(event) => setCode(event.target.value)} placeholder="Ex: VELA-25819" /><button onClick={() => setTracked(true)}>Acompanhar</button></div><p className="tracking-hint">Você encontra o código no e-mail de confirmação do pedido.</p></div>{tracked && <div className="tracking-card"><div className="tracking-card-head"><div><span className="status-pill"><span></span> Em trânsito</span><h2>Pedido {code || "VELA-25819"}</h2><p>Previsão de entrega: <strong>10 de setembro</strong></p></div><div className="tracking-icon"><Truck size={24} /></div></div><div className="tracking-progress"><div className="progress-line"><span></span></div>{steps.map((step) => <div className={`tracking-step ${step.done ? "done" : ""}`} key={step.title}><div className="step-dot">{step.done ? <Check size={13} /> : <Circle size={9} />}</div><div><strong>{step.title}</strong><span>{step.detail}</span></div></div>)}</div><div className="tracking-footer"><div><Package size={17} /><span>Enviado por <strong>Loggi · BR123456789</strong></span></div><button className="text-link">Ver detalhes <ArrowRight size={15} /></button></div></div>}<div className="tracking-help"><HelpCircle size={17} /><span>Precisa de ajuda com sua entrega?</span><Link href="/">Fale com o nosso cuidado <ArrowRight size={15} /></Link></div></section></SiteLayout>;
}
