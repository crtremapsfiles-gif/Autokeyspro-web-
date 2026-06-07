import { Airplay, BriefcaseBusiness, Car, Cpu, Gauge, KeyRound, Mail, MapPin, Microscope, Phone, ShieldCheck, Truck, Wrench, CheckCircle2, MessageCircle, Instagram, Youtube } from 'lucide-react';

const whatsapp = 'https://wa.me/34632982646';
const maps = 'https://www.google.com/maps/search/?api=1&query=Av+Andalucia+125+BJ+Puente+de+Genave+Jaen';

const services = [
  { icon: KeyRound, title: 'Llaves y Smart Keys', text: 'Duplicado, pérdida total, mandos, programación y reparación.' },
  { icon: ShieldCheck, title: 'Inmovilizadores', text: 'Sincronización, adaptación, recuperación y sistemas IMMO.' },
  { icon: Cpu, title: 'ECU / TCU / Módulos', text: 'Lectura, escritura, clonación, reparación y programación.' },
  { icon: Wrench, title: 'Mercedes EZS / ELV', text: 'Reparación, clonación, adaptación y recuperación.' },
  { icon: Gauge, title: 'BMW CAS / FEM / BDC', text: 'Programación, clonación y diagnóstico avanzado.' },
  { icon: Airplay, title: 'Airbag Crash Data', text: 'Reset crash, reparación de centralitas y pretensores.' },
];

const quick = [
  { icon: KeyRound, title: 'Llaves y Smart Keys' },
  { icon: ShieldCheck, title: 'Inmovilizadores' },
  { icon: Cpu, title: 'ECU / TCU Airbag / Módulos' },
  { icon: Car, title: 'BMW · Mercedes Audi · VAG' },
  { icon: Microscope, title: 'Laboratorio electrónico' },
  { icon: Truck, title: 'Servicio nacional por envío' },
];

const cases = [
  { car: 'BMW Serie 1', problem: 'FEM averiado', solution: 'Clonación y programación', result: 'Vehículo operativo' },
  { car: 'Mercedes W204', problem: 'EZS bloqueado', solution: 'Reparación electrónica', result: 'Arranque recuperado' },
  { car: 'Opel Insignia', problem: 'ECU sin arranque', solution: 'Diagnóstico y recuperación', result: 'Vehículo recuperado' },
];

const partners = ['File Service', 'Clonación', 'Reparaciones', 'Llaves e IMMO', 'Soporte técnico', 'Servicio nacional'];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Autokeys Remaps Pro">
          <span className="ak">AK</span>
          <span><b>Autokeys</b><em>Remaps Pro</em><small>Electrónica avanzada del automóvil</small></span>
        </a>
        <nav>
          <a href="#servicios">Servicios</a>
          <a href="#talleres">Talleres</a>
          <a href="#casos">Casos reales</a>
          <a href="#laboratorio">Laboratorio</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="top-whatsapp" href={whatsapp} target="_blank">WhatsApp</a>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-copy">
            <h1><span>Autokeys</span><strong>Remaps Pro</strong></h1>
            <h2>Electrónica avanzada del automóvil</h2>
            <p className="claim">Especialistas en resolver lo que otros <b>no pueden.</b></p>
            <p className="subclaim">Llaves, inmovilizadores, ECUs, módulos electrónicos, airbag, diagnosis avanzada y recuperación de sistemas para particulares y talleres.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsapp} target="_blank"><MessageCircle size={22}/> Solicitar presupuesto</a>
              <a className="btn btn-outline" href="#talleres"><BriefcaseBusiness size={22}/> Soy taller / distribuidor</a>
            </div>
            <p className="brands">BMW · Mercedes · Audi · VAG · Land Rover</p>
          </div>
          <div className="hero-car" aria-hidden="true">
            <div className="car-glow" />
            <div className="car-card">
              <div className="fake-car">
                <span className="headlight left" /><span className="headlight right" />
                <span className="grille" />
              </div>
              <div className="lab-lines" />
              <b>Laboratorio Autokeys</b>
            </div>
          </div>
        </div>
        <div className="quickbar">
          {quick.map((q) => <div className="quickitem" key={q.title}><q.icon size={28}/><span>{q.title}</span></div>)}
        </div>
      </section>

      <section className="not-taller">
        <div>
          <h2><span>No somos</span> un taller convencional</h2>
          <p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p>
          <p><b>Diagnosticamos, reparamos, clonamos, programamos y recuperamos</b> sistemas electrónicos del automóvil.</p>
        </div>
        <div className="pcb-panel"><span/><span/><span/></div>
      </section>

      <section id="servicios" className="section">
        <h2>Nuestros <span>servicios</span></h2>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.title}><service.icon size={42}/><h3>{service.title}</h3><p>{service.text}</p></article>)}
        </div>
      </section>

      <section id="talleres" className="partners">
        <div className="partners-copy">
          <h2>¿Eres taller? <span>Trabajamos contigo.</span></h2>
          <p>Soluciones profesionales para talleres de toda España: file service, clonación, reparaciones electrónicas, programación de llaves e inmovilizadores.</p>
          <a href={whatsapp} target="_blank" className="btn btn-outline">Solicitar colaboración</a>
        </div>
        <div className="partner-grid">{partners.map((p) => <div key={p}>{p}</div>)}</div>
      </section>

      <section id="casos" className="section cases-section">
        <div className="section-head"><h2>Casos <span>reales</span></h2><p>Los iremos actualizando con trabajos reales publicados en redes.</p></div>
        <div className="case-grid">
          {cases.map((c) => <article className="case-card" key={c.car}><div className="case-photo"><Car size={46}/></div><h3>{c.car}</h3><p><b>Problema:</b> {c.problem}</p><p><b>Solución:</b> {c.solution}</p><p className="ok"><CheckCircle2 size={18}/> {c.result}</p></article>)}
          <article className="case-card cta"><h3>¿Tienes un caso complicado?</h3><p>Envíanos la información y estudiamos tu caso sin compromiso.</p><a href={whatsapp} target="_blank" className="btn btn-primary"><MessageCircle size={20}/> Contactar</a></article>
        </div>
      </section>

      <section id="laboratorio" className="laboratory">
        <div className="lab-gallery"><div/><div/><div/></div>
        <div className="lab-copy"><h2>Nuestro <span>laboratorio</span></h2><p>Equipamiento profesional para diagnosis, programación, lectura, clonación y reparación electrónica.</p><ul><li>No cambiamos piezas por probar.</li><li>Diagnosticamos con criterio técnico.</li><li>Trabajamos sobre sistemas complejos del automóvil.</li></ul></div>
      </section>

      <section id="contacto" className="contact">
        <h2>Cuéntanos tu <span>caso</span></h2>
        <div className="contact-grid">
          <a className="contact-card whatsapp-card" href={whatsapp} target="_blank"><MessageCircle size={40}/><strong>whatsapp</strong><em>respuesta rápida</em></a>
          <a className="contact-card" href="mailto:info@autokeyspro.es"><Mail size={34}/><strong>info@autokeyspro.es</strong><em>soporte y presupuestos</em></a>
          <a className="contact-card map-card" href={maps} target="_blank"><MapPin size={34}/><strong>av. andalucía 125 bj</strong><em>puente de génave, jaén · cómo llegar</em></a>
        </div>
      </section>

      <footer>
        <div><b>Autokeys Remaps Pro</b><span>electrónica avanzada del automóvil</span></div>
        <div className="footer-icons"><Instagram size={20}/><Youtube size={20}/><MessageCircle size={20}/></div>
      </footer>
      <a className="float-whatsapp" href={whatsapp} target="_blank" aria-label="WhatsApp"><MessageCircle size={34}/></a>
    </main>
  );
}
