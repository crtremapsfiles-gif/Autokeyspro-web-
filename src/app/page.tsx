import {
  AirVent,
  BadgeCheck,
  Box,
  Car,
  Cpu,
  Headphones,
  Instagram,
  KeyRound,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  MonitorCog,
  ShieldCheck,
  Truck,
  Wrench,
  Youtube,
  Zap,
} from "lucide-react";

const whatsapp = "https://wa.me/34632982646";
const maps = "https://www.google.com/maps/search/?api=1&query=Av.+Andaluc%C3%ADa+125+BJ,+Puente+de+G%C3%A9nave,+Ja%C3%A9n";

const strip = [
  { icon: KeyRound, label: "Llaves y\nSmart Keys" },
  { icon: ShieldCheck, label: "Inmovilizadores" },
  { icon: Cpu, label: "ECU / TCU\nAirbag / Módulos" },
  { icon: Car, label: "BMW · Mercedes\nAudi · VAG" },
  { icon: Mic2, label: "Laboratorio\nElectrónico" },
  { icon: Truck, label: "Servicio nacional\npor envío" },
];

const services = [
  {
    icon: KeyRound,
    title: "Llaves y Smart Keys",
    bullets: ["Duplicado y pérdida total", "Mandos y smart keys", "Programación y reparación"],
    image: "url('https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=900&q=80')",
  },
  {
    icon: ShieldCheck,
    title: "Inmovilizadores",
    bullets: ["IMMO OFF / ON", "Adaptaciones", "Sincronizaciones"],
    image: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80')",
  },
  {
    icon: Cpu,
    title: "ECU / TCU / Módulos",
    bullets: ["Lectura y escritura", "Clonación", "Reparación electrónica"],
    image: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80')",
  },
  {
    icon: Car,
    title: "Mercedes EZS / ELV",
    bullets: ["Reparación y clonación", "Adaptación", "Recuperación"],
    image: "url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80')",
  },
  {
    icon: MonitorCog,
    title: "BMW CAS / FEM / BDC",
    bullets: ["Programación avanzada", "Diagnóstico", "Recuperaciones"],
    image: "url('https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=900&q=80')",
  },
  {
    icon: AirVent,
    title: "Airbag Crash Data",
    bullets: ["Lectura crash", "Reset crash", "Reparación pretensores"],
    image: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80')",
  },
];

const cases = [
  { car: "BMW Serie 1", problem: "FEM averiado", solution: "Clonación y programación", result: "Vehículo operativo", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80" },
  { car: "Mercedes W204", problem: "EZS bloqueado", solution: "Reparación electrónica del EZS", result: "Arranque recuperado", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80" },
  { car: "Opel Insignia", problem: "Actualización en concesionario", solution: "Diagnóstico y recuperación ECU", result: "Vehículo recuperado", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=900&q=80" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="logo" href="#inicio" aria-label="Autokeys Remaps Pro">
          <span className="ak">AK</span>
          <span><b>AUTOKEYS</b><em>REMAPS PRO</em><small>electrónica avanzada del automóvil</small></span>
        </a>
        <nav>
          <a className="active" href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#talleres">Talleres</a>
          <a href="#casos">Casos reales</a>
          <a href="#laboratorio">Laboratorio</a>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="socials" aria-label="Redes sociales">
          <a href="https://www.instagram.com/autokeys.pro" target="_blank" aria-label="Instagram"><Instagram /></a>
          <a href="https://www.tiktok.com/@autokeys.pro" target="_blank" aria-label="TikTok"><span className="tk">♪</span></a>
          <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube"><Youtube /></a>
          <a href={whatsapp} target="_blank" aria-label="WhatsApp"><MessageCircle /></a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-bg" />
        <div className="hero-shadow" />
        <div className="hero-content">
          <div className="hero-text">
            <h1><span>AUTOKEYS</span><strong>REMAPS PRO</strong></h1>
            <p className="subtitle">Electrónica avanzada del automóvil</p>
            <span className="red-line" />
            <h2>Especialistas en resolver<br />lo que otros <b>no pueden.</b></h2>
            <div className="cta-row">
              <a className="btn red" href={whatsapp} target="_blank"><MessageCircle /> Solicitar presupuesto<br/><small>por WhatsApp</small></a>
              <a className="btn dark" href="#talleres"><Headphones /> Soy taller /<br/><small>distribuidor</small></a>
            </div>
          </div>
          <div className="hero-car-card">
            <div className="wall-logo"><span>AK</span><b>Autokeys Remaps Pro</b></div>
          </div>
        </div>
      </section>

      <section className="feature-strip">
        {strip.map((item) => <article key={item.label}><item.icon /><span>{item.label}</span></article>)}
      </section>

      <section id="nosotros" className="not-normal">
        <div className="copy">
          <h2><b>No somos</b> un taller convencional</h2>
          <p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p>
          <strong>Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos del automóvil.</strong>
        </div>
        <div className="pcb-photo" />
      </section>

      <section id="servicios" className="services-section">
        <h2>Nuestros <b>servicios</b></h2>
        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-img" style={{ backgroundImage: s.image }} />
              <s.icon className="badge-icon" />
              <h3>{s.title}</h3>
              <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="talleres" className="workshops">
        <div>
          <h2>¿Eres taller?<br/><b>Trabajamos contigo.</b></h2>
          <p>File service, clonación de módulos, reparaciones electrónicas, programación de llaves, soporte técnico y servicio nacional para profesionales.</p>
          <a className="outline" href={whatsapp} target="_blank">Solicitar alta como taller colaborador</a>
        </div>
        <div className="workshop-items">
          {[
            [Truck, "Servicio nacional por envío"],
            [Headphones, "Soporte técnico rápido y profesional"],
            [BadgeCheck, "Trabajos con garantía"],
            [Zap, "Precios especiales para talleres"],
          ].map(([Icon, text]) => <article key={String(text)}>{typeof Icon !== "string" && <Icon />}<span>{String(text)}</span></article>)}
        </div>
        <div className="toolcase">AK<br/><span>Autokeys Remaps Pro</span></div>
      </section>

      <section id="casos" className="cases">
        <h2>Casos <b>reales</b></h2>
        <div className="case-grid">
          {cases.map((c) => (
            <article key={c.car} className="case-card">
              <img src={c.image} alt={c.car} />
              <div>
                <h3>{c.car}</h3>
                <p><b>Problema:</b> {c.problem}</p>
                <p><b>Solución:</b> {c.solution}</p>
                <p className="green"><b>Resultado:</b> {c.result}</p>
              </div>
            </article>
          ))}
          <article className="case-help">
            <h3>¿Tienes un caso complicado?</h3>
            <p>Envíanos la información y estudiamos tu caso sin compromiso.</p>
            <a href={whatsapp} target="_blank"><MessageCircle /> Contactar por WhatsApp</a>
          </article>
        </div>
      </section>

      <section id="laboratorio" className="lab">
        <h2>Nuestro <b>laboratorio</b></h2>
        <div className="lab-grid">
          <div className="lab-img big" />
          <div className="lab-img one" />
          <div className="lab-img two" />
          <div className="lab-copy">
            <p>Contamos con equipamiento profesional para diagnóstico, reparación y programación de sistemas electrónicos del automóvil.</p>
            <strong>No cambiamos piezas por probar. Diagnosticamos y reparamos con criterio técnico.</strong>
          </div>
        </div>
      </section>

      <footer id="contacto">
        <div className="foot-card"><MapPin /><span><b>Autokeys Remaps Pro</b><small>Av. Andalucía 125 BJ, Puente de Génave, Jaén</small></span></div>
        <div className="foot-card"><MessageCircle /><span><b>WhatsApp</b><small>632 982 646</small></span></div>
        <div className="foot-card"><Mail /><span><b>Email</b><small>info@autokeyspro.es</small></span></div>
        <a className="map-card" href={maps} target="_blank">Cómo llegar</a>
        <div className="footer-socials"><Instagram /><span>♪</span><Youtube /><MessageCircle /></div>
      </footer>
      <a className="floating-wa" href={whatsapp} target="_blank" aria-label="WhatsApp"><MessageCircle /></a>
    </main>
  );
}
