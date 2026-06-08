const whatsapp = 'https://wa.me/34632982646';
const maps = 'https://www.google.com/maps/search/?api=1&query=Av.+Andalucia+125+BJ+Puente+de+Genave+Jaen';

const services = [
  { icon: '🔑', title: 'Llaves y Smart Keys', text: 'Duplicado, pérdida total, mandos, programación y reparación.' },
  { icon: '🛡️', title: 'Inmovilizadores', text: 'Sincronización, adaptación, recuperación y sistemas IMMO.' },
  { icon: '⚙️', title: 'ECU / TCU / Módulos', text: 'Lectura, clonación, programación y reparación electrónica.' },
  { icon: '⭐', title: 'Mercedes EZS / ELV', text: 'Reparación, clonación y recuperación de sistemas Mercedes.' },
  { icon: '⭕', title: 'BMW CAS / FEM / BDC', text: 'Programación, diagnóstico avanzado y recuperación.' },
  { icon: '💥', title: 'Airbag Crash Data', text: 'Reset crash, reparación de centralitas y pretensores.' },
];

const cases = [
  { title: 'BMW Serie 1', issue: 'No arranca', solution: 'FEM averiado · vehículo recuperado', image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=900&q=80' },
  { title: 'Mercedes W204', issue: 'EZS bloqueado', solution: 'Sistema recuperado · arranque restaurado', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=80' },
  { title: 'Opel Insignia', issue: 'Sin arranque', solution: 'Diagnóstico ECU · vehículo operativo', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80' },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Autokeys Remaps Pro">
          <span className="ak">AK</span>
          <span><b>AUTOKEYS</b><em>REMAPS PRO</em><small>Electrónica avanzada del automóvil</small></span>
        </a>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#talleres">Talleres</a>
          <a href="#casos">Casos reales</a>
          <a href="#laboratorio">Laboratorio</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="social"><span>◎</span><span>♪</span><span>▶</span><span>☏</span></div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroShade" />
        <div className="container heroGrid">
          <div className="heroText">
            <h1><span>AUTOKEYS</span><strong>REMAPS PRO</strong></h1>
            <p className="sub">Electrónica avanzada del automóvil</p>
            <div className="line" />
            <h2>Especialistas en resolver<br />lo que otros <b>no pueden.</b></h2>
            <div className="actions">
              <a className="btn primary" href={whatsapp} target="_blank">☏ Solicitar presupuesto por WhatsApp</a>
              <a className="btn ghost" href="#talleres">▣ Soy taller / distribuidor</a>
            </div>
          </div>
          <div className="carStage">
            <div className="wallLogo"><span>AK</span><b>AUTOKEYS</b><em>REMAPS PRO</em></div>
          </div>
        </div>
      </section>

      <section className="serviceRail">
        <a href="#servicios">🔑<span>Llaves y<br/>Smart Keys</span></a>
        <a href="#servicios">🛡️<span>Inmovilizadores</span></a>
        <a href="#servicios">⚙️<span>ECU / TCU<br/>Airbag / Módulos</span></a>
        <a href="#servicios">🚗<span>BMW · Mercedes<br/>Audi · VAG</span></a>
        <a href="#laboratorio">🔬<span>Laboratorio<br/>electrónico</span></a>
        <a href="#contacto">📦<span>Servicio nacional<br/>por envío</span></a>
      </section>

      <section className="split pcb">
        <div className="container splitGrid">
          <div>
            <h2><b>No somos</b> un taller convencional</h2>
            <p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p>
            <p className="red">Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos del automóvil.</p>
          </div>
          <div className="pcbPhoto" />
        </div>
      </section>

      <section id="servicios" className="container section">
        <h2 className="center">Nuestros <b>servicios</b></h2>
        <div className="cards servicesCards">
          {services.map((s) => <article className="card" key={s.title}><div className="serviceIcon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p></article>)}
        </div>
      </section>

      <section id="talleres" className="talleres">
        <div className="container talleresGrid">
          <div>
            <h2>¿Eres taller?<br/><b>Trabajamos contigo.</b></h2>
            <p>File service, clonación de módulos, reparaciones electrónicas, programación de llaves, soporte técnico y servicio nacional para profesionales.</p>
            <a className="btn ghost" href={whatsapp} target="_blank">▣ Solicitar alta como taller colaborador</a>
          </div>
          <div className="tallerBullets">
            <span>🚚 Servicio nacional por envío</span><span>🎧 Soporte técnico rápido</span><span>🛡️ Trabajos con garantía</span><span>📈 Precios especiales para talleres</span>
          </div>
          <div className="caseBox"><span>AK</span><b>AUTOKEYS</b><em>REMAPS PRO</em></div>
        </div>
      </section>

      <section id="casos" className="container section casesSection">
        <h2>Casos <b>reales</b></h2>
        <div className="casesGrid">
          {cases.map((c) => <article className="case" key={c.title}><div className="caseImg" style={{ backgroundImage: `url(${c.image})` }} /><div><h3>{c.title}</h3><b>{c.issue}</b><p>{c.solution}</p><small>Resultado: vehículo recuperado.</small></div><a href={whatsapp} target="_blank">+</a></article>)}
          <article className="case ctaCase"><h3>¿Tienes un caso complicado?</h3><p>Envíanos la información y estudiamos tu caso sin compromiso.</p><a className="btn primary" href={whatsapp} target="_blank">☏ Contactar por WhatsApp</a></article>
        </div>
      </section>

      <section id="laboratorio" className="container lab">
        <h2>Nuestro <b>laboratorio</b></h2>
        <div className="labGrid">
          <div className="labImg big" />
          <div className="labImg microscope" />
          <div className="labImg diag" />
          <div className="labText"><p>Contamos con equipamiento profesional para diagnosis, reparación y programación de sistemas electrónicos del automóvil.</p><b>No cambiamos piezas por probar.<br/>Diagnosticamos y reparamos con criterio técnico.</b></div>
        </div>
      </section>

      <footer id="contacto" className="footer">
        <div className="container footerGrid">
          <div><h3>Autokeys Remaps Pro</h3><p><a href={maps} target="_blank">📍 av. andalucía 125 bj, puente de génave, jaén</a></p></div>
          <div><h3>Horario</h3><p>lunes a viernes<br/>9:00 - 14:00 | 16:00 - 20:00</p></div>
          <div><h3>WhatsApp</h3><p><a href={whatsapp} target="_blank">☏ escribirnos</a></p></div>
          <div><h3>Email</h3><p><a href="mailto:info@autokeyspro.es"><i><b>info@autokeyspro.es</b></i></a></p></div>
          <div><h3>Síguenos</h3><p>◎ ♪ ▶ ☏</p></div>
        </div>
        <small>© 2026 Autokeys Remaps Pro | Electrónica Avanzada del Automóvil</small>
      </footer>
      <a className="float" href={whatsapp} target="_blank">☏</a>
    </main>
  );
}
