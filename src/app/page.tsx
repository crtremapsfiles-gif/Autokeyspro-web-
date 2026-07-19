'use client';
import { useEffect } from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";
const phone = '632982646';
const whatsapp = `https://wa.me/34${phone}?text=Hola%20Autokeys%20Remaps%20Pro,%20quiero%20solicitar%20presupuesto`;
const maps = 'https://www.google.com/maps/search/?api=1&query=Av.+Andaluc%C3%ADa+125+BJ,+Puente+de+G%C3%A9nave,+Ja%C3%A9n';
const fileService = 'https://akcloud.es/login';
const akCloudRegister = 'https://akcloud.es/register';

const heroItems = [
  ['🔑', 'Llaves y\nSmart Keys'],
  ['🛡️', 'Inmovilizadores'],
  ['🧠', 'ECU / TCU\nAirbag / Módulos'],
  ['🚘', 'BMW · Mercedes\nAudi · VAG'],
  ['🔬', 'Laboratorio\nElectrónico'],
  ['📦', 'Servicio nacional\npor envío'],
];

const services = [
  { icon: '🔑', title: 'Llaves y Smart Keys', text: 'Duplicado, pérdida total, mandos, programación y reparación.' },
  { icon: '🛡️', title: 'Inmovilizadores', text: 'Sincronización, adaptación, recuperación y soluciones IMMO.' },
  { icon: '🧠', title: 'ECU / TCU / Módulos', text: 'Lectura, escritura, clonación, reparación y recuperación de centralitas.' },
  { icon: '⭐', title: 'Mercedes EZS / ELV', text: 'EZS, ELV, llaves y recuperación de sistemas Mercedes.' },
  { icon: '🔴', title: 'BMW CAS / FEM / BDC', text: 'Diagnóstico, programación avanzada y recuperación de módulos BMW.' },
  { icon: '💥', title: 'Airbag Crash Data', text: 'Crash Data, reset, reparación de centralitas airbag y pretensores.' },
];

const cases = [
  {
    car: 'BMW Serie 1 F20',
    problem: 'FEM averiado · no arranca',
    solution: 'Clonación y programación FEM',
    result: 'Vehículo recuperado',
  },
  {
    car: 'Mercedes W204',
    problem: 'EZS bloqueado · sin giro de llave',
    solution: 'Reparación electrónica del EZS',
    result: 'Arranque recuperado',
  },
  {
    car: 'Opel Insignia',
    problem: 'Sin arranque tras actualización',
    solution: 'Diagnóstico y recuperación ECU',
    result: 'Vehículo operativo',
  },
];

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoRepair',
            name: 'Autokeys Remaps Pro',
            url: 'https://autokeyspro.es',
            image: 'https://autokeyspro.es/og-image.png',
            telephone: '+34632982646',
            email: 'info@autokeyspro.es',
            description:
              'Laboratorio especializado en llaves, inmovilizadores, ECUs, módulos electrónicos, airbag y diagnosis avanzada para particulares y talleres.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Av. Andalucía, 125 BJ',
              addressLocality: 'Puente de Génave',
              addressRegion: 'Jaén',
              postalCode: '23350',
              addressCountry: 'ES',
            },
            sameAs: [
              'https://instagram.com/autokeys.pro',
              'https://tiktok.com/@autokeys.pro',
              'https://youtube.com/@autokeyspro',
            ],
          }),
        }}
      />
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
          <a href={fileService} target="_blank" rel="noopener noreferrer">File Service</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="socials" aria-label="Redes sociales">
          <a href="https://instagram.com/autokeys.pro" target="_blank"><FaInstagram /></a>
          <a href="https://tiktok.com/@autokeys.pro" target="_blank"><FaTiktok /></a>
          <a href="https://youtube.com/@autokeyspro" target="_blank"><FaYoutube /></a>
          <a href={whatsapp} target="_blank"><FaWhatsapp /></a>
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
              <a className="btn primary stackBtn" href={whatsapp} target="_blank" rel="noopener noreferrer">
                <span>☎ Solicitar presupuesto</span>
                <small>Por WhatsApp</small>
              </a>
              <a className="btn dark stackBtn" href="#talleres">
                <span>▣ Área profesional</span>
                <small>Talleres y distribuidores</small>
              </a>
              <a className="btn fileBtn stackBtn" href={fileService} target="_blank" rel="noopener noreferrer">
                <span>⚡ Acceso</span>
                <small>File Service</small>
              </a>
            </div>
          </div>
          <div className="scanOverlay">
            <span className="scanTag">Banco de pruebas · en vivo</span>
            <div className="scanPin p1"><span className="dot" /><span className="lbl">Módulo IMMO<small>Sincronizado</small></span></div>
            <div className="scanPin p2"><span className="dot" /><span className="lbl">ECU / TCU<small>Diagnóstico OK</small></span></div>
            <div className="scanPin p3"><span className="dot" /><span className="lbl">EZS / CAS / FEM<small>Verificado</small></span></div>
            <div className="scanPin p4"><span className="dot" /><span className="lbl">Airbag Crash Data<small>Sistema OK</small></span></div>
          </div>
        </div>
      </section>

      <section className="serviceStrip">
        {heroItems.map(([icon, label]) => (
          <a key={label} href="#servicios"><span>{icon}</span><b>{label}</b></a>
        ))}
      </section>

      <section className="statsBar reveal">
        <div><b>14+</b><span>Años de experiencia</span></div>
        <div><b>+6.500</b><span>Casos resueltos</span></div>
        <div><b>+9.870</b><span>Soluciones propias (WinOLS)</span></div>
      </section>

      <section className="notWorkshop reveal">
        <div>
          <h2><span>No somos</span> un taller convencional</h2>
          <p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p>
          <strong>Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos del automóvil.</strong>
        </div>
        <div className="pcb" />
      </section>

      <section id="servicios" className="section reveal">
        <h2>Nuestros <span>servicios</span></h2>
        <div className="cards services">
          {services.map((s) => (
            <article className="card serviceCard" key={s.title}>
              <div className="serviceIcon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="talleres" className="workshops reveal">
        <div>
          <h2>¿Eres taller?<br /><span>Trabajamos contigo.</span></h2>
          <p>File service, clonación de módulos, reparaciones electrónicas, programación de llaves, soporte técnico y servicio nacional para profesionales.</p>
          <div className="workshopActions">
            <a className="btn outline" href={akCloudRegister} target="_blank" rel="noopener noreferrer">Solicitar alta como taller colaborador</a>
            <a className="btn primary" href={fileService} target="_blank" rel="noopener noreferrer">Acceder al File Service</a>
          </div>
        </div>
        <div className="workshopGrid">
          <span>🚚<b>Servicio nacional por envío</b></span>
          <span>🎧<b>Soporte técnico profesional</b></span>
          <span>🛡️<b>Trabajos con garantía</b></span>
          <span>📈<b>Precios especiales para talleres</b></span>
        </div>
      </section>

      <section id="fileservice" className="fileServiceSection reveal">
        <div className="fileServicePanel">
          <div>
            <p className="eyebrow">Plataforma 24h para profesionales</p>
            <h2>File Service <span>profesional</span></h2>
            <p>Acceso directo para talleres y distribuidores: solicitudes online, soporte técnico y servicios de calibración electrónica.</p>
          </div>
          <div className="fileServicesList">
            <span>Stage 1</span>
            <span>Stage 2</span>
            <span>DPF OFF</span>
            <span>EGR OFF</span>
            <span>AdBlue OFF</span>
            <span>DTC OFF</span>
            <span>IMMO OFF</span>
            <span>Soporte técnico</span>
          </div>
          <a className="btn primary" href={fileService} target="_blank" rel="noopener noreferrer">Acceder a la plataforma</a>
        </div>
      </section>

      <section id="casos" className="section casesSection reveal">
        <h2>Casos <span>reales</span></h2>
        <div className="cards caseCards">
          {cases.map((c) => (
            <article className="caseCard" key={c.car}>
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

      <section id="laboratorio" className="lab equipmentLab reveal">
        <div className="labPhotos toolPhotos">
          <article className="labTool lab1">
            <div className="toolOverlay">
              <span>01</span>
              <h3>Autel IM608 Pro</h3>
              <p>Llaves · IMMO · codificación avanzada</p>
            </div>
          </article>
          <article className="labTool lab2">
            <div className="toolOverlay">
              <span>02</span>
              <h3>Magic Motorsport Flex</h3>
              <p>OBD · Bench · Boot · clonación ECU/TCU</p>
            </div>
          </article>
          <article className="labTool lab3">
            <div className="toolOverlay">
              <span>03</span>
              <h3>Alientech KESS3</h3>
              <p>Reprogramación profesional · Stage · optimización</p>
            </div>
          </article>
        </div>
        <div className="labText">
          <h2>Equipamiento <span>profesional</span></h2>
          <p>Herramientas de referencia para diagnosis, programación, lectura, escritura, clonación y recuperación de sistemas electrónicos del automóvil.</p>
          <strong>Autel IM608 Pro · Magic Motorsport Flex · Alientech KESS3. Tecnología profesional al servicio de cada diagnóstico.</strong>
        </div>
      </section>

      <footer id="contacto" className="reveal">
        <div className="footBox">
          <b>Autokeys Remaps Pro</b>
          <span>📍 Av. Andalucía 125 BJ, Puente de Génave, Jaén</span>
        </div>
        <div className="footBox"><b>WhatsApp</b><a href={whatsapp} target="_blank">632 982 646</a></div>
        <div className="footBox"><b>Email</b><a href="mailto:info@autokeyspro.es">info@autokeyspro.es</a></div>
        <div className="footBox"><b>File Service</b><a href={fileService} target="_blank" rel="noopener noreferrer">Acceso talleres 24h</a></div>
        <div className="footBox"><b>Ubicación</b><a href={maps} target="_blank">Cómo llegar</a></div>
      </footer>

      <a className="floatingWhatsapp" href={whatsapp} target="_blank" aria-label="WhatsApp" ><FaWhatsapp /></a>
    </main>
  );
}
