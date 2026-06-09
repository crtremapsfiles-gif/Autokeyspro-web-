const phone = '632982646';
const whatsapp = `https://wa.me/34${phone}?text=Hola%20Autokeys%20Remaps%20Pro,%20quiero%20solicitar%20presupuesto`;
const maps = 'https://www.google.com/maps/search/?api=1&query=Av.+Andaluc%C3%ADa+125+BJ,+Puente+de+G%C3%A9nave,+Ja%C3%A9n';

const heroItems = [
  ['🔑', 'Llaves y\nSmart Keys'],
  ['🛡️', 'Inmovilizadores'],
  ['🧠', 'ECU / TCU\nAirbag / Módulos'],
  ['🚘', 'BMW · Mercedes\nAudi · VAG'],
  ['🔬', 'Laboratorio\nElectrónico'],
  ['📦', 'Servicio nacional\npor envío'],
];

const services = [
  { icon: '🔑', title: 'Llaves y Smart Keys', img: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=900&q=80', text: 'Duplicado, pérdida total, mandos, programación y reparación.' },
  { icon: '🛡️', title: 'Inmovilizadores', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', text: 'Sincronización, adaptación, recuperación y soluciones IMMO.' },
  { icon: '🧠', title: 'ECU / TCU / Módulos', img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=900&q=80', text: 'Lectura, clonación, programación, reparación y venta de centralitas.' },
  { icon: '⭐', title: 'Mercedes EZS / ELV', img: 'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?auto=format&fit=crop&w=900&q=80', text: 'Reparación, clonación y recuperación de sistemas Mercedes.' },
  { icon: '🔴', title: 'BMW CAS / FEM / BDC', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80', text: 'Diagnóstico, programación avanzada y recuperación de módulos BMW.' },
  { icon: '💥', title: 'Airbag Crash Data', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80', text: 'Reset crash, reparación de centralitas airbag y pretensores.' },
];

const cases = [
  { car: 'BMW Serie 1', problem: 'FEM averiado · no arranca', solution: 'Clonación y programación', result: 'Vehículo recuperado', img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80' },
  { car: 'Mercedes W204', problem: 'EZS bloqueado', solution: 'Reparación electrónica del EZS', result: 'Arranque recuperado', img: 'https://images.unsplash.com/photo-1617814076668-4adcb5b2b652?auto=format&fit=crop&w=900&q=80' },
  { car: 'Opel Insignia', problem: 'Sin arranque tras actualización', solution: 'Diagnóstico y recuperación ECU', result: 'Vehículo operativo', img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=900&q=80' },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Autokeys Remaps Pro">
          <span className="ak">AK</span>
          <span><b>Autokeys</b><strong>Remaps Pro</strong><em>Electrónica avanzada del automóvil</em></span>
        </a>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#talleres">Talleres</a>
          <a href="#casos">Casos reales</a>
          <a href="#laboratorio">Laboratorio</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="socials" aria-label="Redes sociales">
          <a href="https://instagram.com/autokeys.pro" target="_blank">◎</a>
          <a href="https://tiktok.com/@autokeys.pro" target="_blank">♪</a>
          <a href="https://youtube.com" target="_blank">▶</a>
          <a href={whatsapp} target="_blank">☏</a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroShade" />
        <div className="heroContent">
          <div className="copy">
            <h1><span>Autokeys</span><strong>Remaps Pro</strong></h1>
            <p className="subtitle">Electrónica avanzada del automóvil</p>
            <div className="redline" />
            <h2>Especialistas en resolver<br />lo que otros <span>no pueden.</span></h2>
            <p className="lead">Llaves, inmovilizadores, ECUs, módulos electrónicos, airbag, diagnosis avanzada y recuperación de sistemas para particulares y talleres.</p>
            <div className="ctaRow">
              <a className="btn primary" href={whatsapp} target="_blank">☏ Solicitar presupuesto<br /><small>por WhatsApp</small></a>
              <a className="btn dark" href="#talleres">▣ Soy taller /<br /><small>distribuidor</small></a>
            </div>
          </div>
          <div className="carBadge">
            <span className="ak big">AK</span>
            <b>Autokeys</b>
            <strong>Remaps Pro</strong>
          </div>
        </div>
      </section>

      <section className="serviceStrip">
        {heroItems.map(([icon, label]) => (
          <a key={label} href="#servicios"><span>{icon}</span><b>{label}</b></a>
        ))}
      </section>

      <section className="notWorkshop">
        <div>
          <h2><span>No somos</span> un taller convencional</h2>
          <p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p>
          <strong>Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos del automóvil.</strong>
        </div>
        <div className="pcb" />
      </section>

      <section id="servicios" className="section">
        <h2>Nuestros <span>servicios</span></h2>
        <div className="cards services">
          {services.map((s) => (
            <article className="card serviceCard" key={s.title}>
              <div className="photo" style={{ backgroundImage: `url(${s.img})` }} />
              <div className="serviceIcon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="talleres" className="workshops">
        <div>
          <h2>¿Eres taller?<br /><span>Trabajamos contigo.</span></h2>
          <p>File service, clonación de módulos, reparaciones electrónicas, programación de llaves, soporte técnico y servicio nacional para profesionales.</p>
          <a className="btn outline" href={whatsapp} target="_blank">Solicitar alta como taller colaborador</a>
        </div>
        <div className="workshopGrid">
          <span>🚚<b>Servicio nacional por envío</b></span>
          <span>🎧<b>Soporte técnico profesional</b></span>
          <span>🛡️<b>Trabajos con garantía</b></span>
          <span>📈<b>Precios especiales para talleres</b></span>
        </div>
      </section>

      <section id="casos" className="section casesSection">
        <h2>Casos <span>reales</span></h2>
        <div className="cards caseCards">
          {cases.map((c) => (
            <article className="caseCard" key={c.car}>
              <div className="caseImg" style={{ backgroundImage: `url(${c.img})` }} />
              <div className="caseText">
                <h3>{c.car}</h3>
                <p><b>Problema:</b> {c.problem}</p>
                <p><b>Solución:</b> {c.solution}</p>
                <p className="ok">✅ {c.result}</p>
              </div>
            </article>
          ))}
          <article className="caseCta">
            <h3>¿Tienes un caso complicado?</h3>
            <p>Envíanos la información y estudiamos tu caso sin compromiso.</p>
            <a className="btn primary" href={whatsapp} target="_blank">Contactar por WhatsApp</a>
          </article>
        </div>
      </section>

      <section id="laboratorio" className="lab">
        <div className="labPhotos">
          <div className="lab1" />
          <div className="lab2" />
          <div className="lab3" />
        </div>
        <div className="labText">
          <h2>Nuestro <span>laboratorio</span></h2>
          <p>Equipamiento profesional para diagnosis, reparación y programación de sistemas electrónicos del automóvil.</p>
          <strong>No cambiamos piezas por probar. Diagnosticamos y reparamos con criterio técnico.</strong>
        </div>
      </section>

      <footer id="contacto">
        <div className="footBox">
          <b>Autokeys Remaps Pro</b>
          <span>📍 Av. Andalucía 125 BJ, Puente de Génave, Jaén</span>
        </div>
        <div className="footBox"><b>WhatsApp</b><a href={whatsapp} target="_blank">632 982 646</a></div>
        <div className="footBox"><b>Email</b><a href="mailto:info@autokeyspro.es">info@autokeyspro.es</a></div>
        <div className="footBox"><b>Ubicación</b><a href={maps} target="_blank">Cómo llegar</a></div>
      </footer>

      <a className="floatingWhatsapp" href={whatsapp} target="_blank" aria-label="WhatsApp">☏</a>
    </main>
  );
}
