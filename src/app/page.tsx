import { KeyRound, ShieldCheck, Cpu, Airbag, Car, Wrench, Box, Gauge, Phone, Mail, MapPin } from "lucide-react";

const services = [
  { icon: KeyRound, title: "Llaves y Smart Keys", text: "Duplicado, pérdida total, mandos, programación y reparación." },
  { icon: ShieldCheck, title: "Inmovilizadores", text: "Sincronización, adaptación y recuperación de sistemas IMMO." },
  { icon: Cpu, title: "ECU / TCU / Módulos", text: "Clonación, reparación, programación y venta de centralitas." },
  { icon: Airbag, title: "Airbag Crash Data", text: "Lectura, reset crash, reparación de centralitas y pretensores." },
  { icon: Car, title: "BMW CAS / FEM / BDC", text: "Diagnóstico, programación y recuperación de sistemas BMW." },
  { icon: Wrench, title: "Mercedes EZS / ELV", text: "Reparación, clonación y recuperación de sistemas Mercedes." },
  { icon: Gauge, title: "Reprogramación ECU", text: "Soluciones electrónicas y software profesional a medida." },
  { icon: Box, title: "Servicio nacional", text: "Trabajos por envío para particulares, talleres y profesionales." },
];

const cases = [
  { title: "Seat León", problem: "Sin arranque", solution: "Bombín averiado, nueva llave y programación completa.", img: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&w=900&auto=format&fit=crop" },
  { title: "BMW X1", problem: "Trabajo sobre ECU", solution: "Intervención electrónica y vehículo operativo.", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=900&auto=format&fit=crop" },
  { title: "Mercedes W204", problem: "EZS bloqueado", solution: "Reparación y recuperación del sistema.", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=900&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <div className="brand"><div className="ak"><span>A</span><span className="red">K</span></div><div className="brandtext"><b>AUTOKEYS</b><b><span className="red">REMAPS</span> PRO</b><small>Electrónica avanzada del automóvil</small></div></div>
          <nav className="links"><a href="#servicios">Servicios</a><a href="#casos">Casos reales</a><a href="#laboratorio">Laboratorio</a><a href="#talleres">Para talleres</a><a href="#contacto">Contacto</a></nav>
          <a className="whatsapp" href="https://wa.me/34632982646" target="_blank">WhatsApp</a>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>AUTOKEYS<br/><span className="red">REMAPS</span> PRO</h1>
          <h2>Laboratorio de Electrónica Avanzada del Automóvil</h2>
          <h2 className="red">Todavía no está todo dicho...</h2>
          <p>Especialistas en llaves, inmovilizadores, ECUs, módulos electrónicos y diagnosis avanzada para particulares y talleres.</p>
          <div className="hero-actions"><a className="btn btn-red" href="https://wa.me/34632982646" target="_blank">Solicitar presupuesto</a><a className="btn btn-dark" href="#talleres">Soy taller / distribuidor</a></div>
          <div className="hero-strip"><div className="strip-item">Llaves y Smart Keys</div><div className="strip-item">Inmovilizadores</div><div className="strip-item">ECU / Airbag</div><div className="strip-item">BMW · Mercedes</div><div className="strip-item">Laboratorio electrónico</div><div className="strip-item">Servicio nacional</div></div>
        </div>
      </section>

      <section className="section">
        <div className="container intro">
          <div><h2><span className="red">No somos</span> un taller convencional</h2><p>En Autokeys Remaps Pro trabajamos donde la mecánica termina y comienza la electrónica avanzada del automóvil.</p><p><b className="red">Diagnosticamos, reparamos, clonamos, programamos y recuperamos</b> sistemas electrónicos complejos para particulares y talleres de toda España.</p></div>
          <div className="pcb" />
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="container"><h2 className="title">Nuestros <span>Servicios</span></h2><div className="services">{services.map(({icon:Icon,title,text})=><article className="card service" key={title}><Icon className="icon"/><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="section" id="casos">
        <div className="container"><h2 className="title">Casos que otros dieron por <span>perdidos</span></h2><div className="case-grid">{cases.map((c)=><article className="card case" key={c.title}><div className="case-img" style={{backgroundImage:`url(${c.img})`}}/><div className="case-body"><h3>{c.title}</h3><p><b className="red">Problema:</b> {c.problem}</p><p><b>Solución:</b> {c.solution}</p><p className="status">● RECUPERADO</p></div></article>)}</div></div>
      </section>

      <section className="section" id="laboratorio">
        <div className="container lab-grid"><div><h2>Laboratorio de Electrónica <span className="red">Avanzada</span></h2><p>Equipamiento profesional para diagnosis, programación, reparación y recuperación de sistemas electrónicos del automóvil.</p><ul className="lab-list"><li>✓ Microscopía y soldadura SMD</li><li>✓ Lectura y programación avanzada</li><li>✓ Diagnosis multimarca</li><li>✓ Entorno técnico especializado</li></ul></div><div className="gallery"><div style={{backgroundImage:"url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop')"}}/><div style={{backgroundImage:"url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop')"}}/><div style={{backgroundImage:"url('https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop')"}}/><div style={{backgroundImage:"url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop')"}}/></div></div>
      </section>

      <section className="section" id="talleres">
        <div className="container workshops"><div><h2>¿Eres taller? <span className="red">Trabajamos contigo</span></h2><p>Soluciones profesionales para talleres: file service, clonación de módulos, reparaciones electrónicas, llaves e IMMO, programación y servicio nacional por envío.</p><a className="btn btn-red" href="https://wa.me/34632982646" target="_blank">Solicitar colaboración</a></div><div className="benefits"><div className="card benefit">File Service</div><div className="card benefit">Clonación</div><div className="card benefit">Reparaciones</div><div className="card benefit">Servicio nacional</div></div></div>
      </section>

      <section className="section contact" id="contacto">
        <div className="container"><h2 className="title">Cuéntanos tu <span>caso</span></h2><div className="contact-grid"><div className="card contact-box"><Phone className="red"/><h3>WhatsApp</h3><p>632 982 646</p></div><div className="card contact-box"><Mail className="red"/><h3>Email</h3><p>info@autokeyspro.es</p></div><div className="card contact-box"><MapPin className="red"/><h3>Ubicación</h3><p>La Puerta de Segura, Jaén</p></div><div className="card contact-box"><Box className="red"/><h3>Servicio nacional</h3><p>Trabajos por envío a toda España</p></div></div></div>
      </section>

      <footer className="footer"><div className="container">© 2026 Autokeys Remaps Pro · Electrónica Avanzada del Automóvil · Todavía no está todo dicho...</div></footer>
    </main>
  );
}
