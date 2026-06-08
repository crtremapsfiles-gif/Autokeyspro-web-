import { KeyRound, ShieldCheck, Cpu, Car, Microscope, PackageCheck, Wrench, Truck, Headphones, BadgeCheck, MapPin, Mail, Phone, MessageCircle, Instagram, Youtube, Navigation, Star, CircleDotDashed, Zap, Database, Copy, Cloud, Gauge } from "lucide-react";

const whatsapp = "https://wa.me/34632982646";
const maps = "https://www.google.com/maps/search/?api=1&query=Av.+Andaluc%C3%ADa+125+BJ,+Puente+de+G%C3%A9nave,+Ja%C3%A9n";

function TikTokIcon(){
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="svgIcon"><path fill="currentColor" d="M16.6 2c.2 1.8 1.2 3.5 2.7 4.5 1 .7 2 1 3.2 1v3.7c-2.2.1-4.2-.6-5.9-1.9v7.1c0 3.7-2.9 6.6-6.7 6.6-3.6 0-6.5-2.8-6.5-6.3 0-4.2 4-7.2 8-6.2v3.9c-1.5-.6-3.8.4-3.8 2.4 0 1.4 1.1 2.5 2.5 2.5 1.5 0 2.6-1.1 2.6-2.7V2h3.9Z"/></svg>
}

const strip = [
  {icon: KeyRound, title:"Llaves y", sub:"Smart Keys"},
  {icon: ShieldCheck, title:"Inmovilizadores", sub:"y seguridad"},
  {icon: Cpu, title:"ECU / TCU", sub:"Airbag / Módulos"},
  {icon: Car, title:"BMW · Mercedes", sub:"Audi · VAG"},
  {icon: Microscope, title:"Laboratorio", sub:"electrónico"},
  {icon: PackageCheck, title:"Servicio nacional", sub:"por envío"},
];

const services = [
  {icon: KeyRound, img:"https://images.unsplash.com/photo-1607001120253-a5157e9eac09?auto=format&fit=crop&w=600&q=80", title:"Llaves y Smart Keys", list:["Duplicado y pérdida total", "Mandos y smart keys", "Programación y reparación"]},
  {icon: ShieldCheck, img:"https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80", title:"Inmovilizadores", list:["IMMO OFF / ON", "Adaptaciones", "Sincronizaciones"]},
  {icon: Cpu, img:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80", title:"ECU / TCU / Módulos", list:["Lectura y escritura", "Clonación", "Reparación electrónica"]},
  {icon: Star, img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80", title:"Mercedes EZS / ELV", list:["Reparación y clonación", "Adaptación", "Recuperación"]},
  {icon: CircleDotDashed, img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80", title:"BMW CAS / FEM / BDC", list:["Programación avanzada", "Diagnóstico", "Recuperaciones"]},
  {icon: Zap, img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80", title:"Airbag Crash Data", list:["Lectura crash", "Reset crash", "Reparación de pretensores"]},
];

const realCases = [
  {brand:"BMW Serie 1", problem:"No arranca", solution:"FEM averiado · Clonación y programación", result:"Vehículo operativo", img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=700&q=80"},
  {brand:"Mercedes W204", problem:"EZS bloqueado", solution:"Reparación electrónica del sistema", result:"Arranque recuperado", img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=700&q=80"},
  {brand:"Opel Insignia", problem:"Sin arranque", solution:"Diagnóstico y recuperación ECU", result:"Vehículo recuperado", img:"https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=700&q=80"},
];

const shop = [
  {icon: Cloud, title:"File Service", text:"Archivos a medida para reprogramaciones."},
  {icon: Copy, title:"Clonación", text:"Clonación de ECUs y módulos."},
  {icon: Wrench, title:"Reparaciones", text:"Reparación electrónica especializada."},
  {icon: KeyRound, title:"Llaves e IMMO", text:"Programación de llaves e inmovilizadores."},
  {icon: Headphones, title:"Soporte técnico", text:"Atención profesional para talleres."},
  {icon: Truck, title:"Servicio nacional", text:"Trabajos por envío para toda España."},
];

export default function Home(){
 return <main>
  <header className="topbar">
    <a className="brand" href="#inicio" aria-label="Autokeys Remaps Pro"><span className="ak">AK</span><span className="brandText"><b>Autokeys</b><em>Remaps Pro</em><small>Electrónica avanzada del automóvil</small></span></a>
    <nav className="menu"><a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#talleres">Talleres</a><a href="#casos">Casos reales</a><a href="#laboratorio">Laboratorio</a><a href="#nosotros">Sobre nosotros</a><a href="#contacto">Contacto</a></nav>
    <div className="socials"><a href="https://instagram.com/autokeys.pro" target="_blank" aria-label="Instagram"><Instagram /></a><a href="https://www.tiktok.com/@autokeys.pro" target="_blank" aria-label="TikTok"><TikTokIcon /></a><a href="#" aria-label="YouTube"><Youtube /></a><a href={whatsapp} target="_blank" aria-label="WhatsApp"><MessageCircle /></a></div>
  </header>

  <section id="inicio" className="hero">
    <div className="heroBg" />
    <div className="heroGlow" />
    <div className="heroContent">
      <div className="heroText">
        <h1><span>Autokeys</span><strong>Remaps Pro</strong></h1>
        <p className="claim">Electrónica avanzada del automóvil</p>
        <div className="line" />
        <h2>Especialistas en resolver<br/>lo que otros <span>no pueden.</span></h2>
        <div className="actions"><a className="btn primary" href={whatsapp} target="_blank"><MessageCircle/>Solicitar presupuesto<br/><small>por WhatsApp</small></a><a className="btn dark" href="#talleres"><Headphones/>Soy taller /<br/><small>distribuidor</small></a></div>
      </div>
      <div className="carPanel"><div className="wallLogo"><span>AK</span><b>Autokeys</b><em>Remaps Pro</em></div><div className="carShadow"/></div>
    </div>
    <div className="serviceStrip">{strip.map(({icon:Icon,title,sub})=><a key={title} href="#servicios"><Icon/><span>{title}<small>{sub}</small></span></a>)}</div>
  </section>

  <section id="nosotros" className="splitSection">
    <div><h3><span>No somos</span> un taller convencional</h3><p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p><p className="redText">Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos del automóvil.</p></div>
    <div className="pcbPhoto" />
  </section>

  <section id="servicios" className="section"><h3>Nuestros <span>servicios</span></h3><div className="cards services">{services.map(({icon:Icon,img,title,list})=><article className="serviceCard" key={title}><img src={img} alt={title}/><div className="cardIcon"><Icon/></div><h4>{title}</h4>{list.map(x=><p key={x}>• {x}</p>)}</article>)}</div></section>

  <section id="talleres" className="proSection"><div><h3>¿Eres taller?<br/><span>Trabajamos contigo.</span></h3><p>File service, clonación de módulos, reparaciones electrónicas, programación de llaves, soporte técnico y servicio nacional para profesionales.</p><a className="btn outline" href={whatsapp} target="_blank">Solicitar alta como taller colaborador</a></div><div className="proGrid">{shop.map(({icon:Icon,title,text})=><div key={title}><Icon/><b>{title}</b><small>{text}</small></div>)}</div><div className="caseBox"><span>AK</span><b>Autokeys<br/>Remaps Pro</b></div></section>

  <section id="casos" className="section cases"><h3>Casos <span>reales</span></h3><div className="caseGrid">{realCases.map(c=><article key={c.brand}><img src={c.img} alt={c.brand}/><div><b>{c.brand}</b><p><span>Problema:</span> {c.problem}</p><p><span>Solución:</span> {c.solution}</p><p><span>Resultado:</span> {c.result}</p></div></article>)}<article className="ctaCase"><h4>¿Tienes un caso complicado?</h4><p>Envíanos la información y estudiamos tu caso sin compromiso.</p><a href={whatsapp} target="_blank"><MessageCircle/>Contactar por WhatsApp</a></article></div></section>

  <section id="laboratorio" className="labSection"><div><h3>Nuestro <span>laboratorio</span></h3><p>Equipamiento profesional para diagnóstico, reparación, clonación, programación y recuperación de sistemas electrónicos del automóvil.</p><p className="redText">No cambiamos piezas por probar. Diagnosticamos y reparamos con criterio técnico.</p></div><div className="labGrid"><div className="lab1"></div><div className="lab2"></div><div className="lab3"></div></div></section>

  <section id="contacto" className="contact"><h3>Cuéntanos tu <span>caso</span></h3><div className="contactGrid"><a className="whats" href={whatsapp} target="_blank"><MessageCircle/><b>WhatsApp</b><em>Respuesta rápida</em></a><a href="mailto:info@autokeyspro.es"><Mail/><b>info@autokeyspro.es</b><em>soporte y presupuestos</em></a><a href={maps} target="_blank"><Navigation/><b>Cómo llegar</b><em>Av. Andalucía 125 BJ · Puente de Génave, Jaén</em></a></div></section>

  <footer><div><b>Autokeys Remaps Pro</b><small>Av. Andalucía 125 BJ · Puente de Génave, Jaén</small></div><div><Phone/>632 982 646</div><div className="footerSocial"><Instagram/><TikTokIcon/><Youtube/><MessageCircle/></div></footer>
  <a className="floatWhats" href={whatsapp} target="_blank" aria-label="WhatsApp"><MessageCircle/></a>
 </main>
}
