import {
  Airplay,
  Briefcase,
  Car,
  CheckCircle2,
  Cpu,
  Gauge,
  Instagram,
  KeyRound,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
  Youtube,
} from 'lucide-react';

const whatsapp = 'https://wa.me/34632982646';
const maps = 'https://www.google.com/maps/search/?api=1&query=Av.+Andalucia+125+Bj,+Puente+de+Genave,+Jaen';

const strip = [
  { icon: KeyRound, title: 'Llaves y\nSmart Keys' },
  { icon: ShieldCheck, title: 'Inmovilizadores' },
  { icon: Cpu, title: 'ECU / TCU\nAirbag / Módulos' },
  { icon: Car, title: 'BMW · Mercedes\nAudi · VAG' },
  { icon: Microscope, title: 'Laboratorio\nelectrónico' },
  { icon: Truck, title: 'Servicio nacional\npor envío' },
];

const services = [
  { icon: KeyRound, title: 'Llaves y\nSmart Keys', text: 'Duplicado, pérdida total, mandos, programación y reparación.' },
  { icon: ShieldCheck, title: 'Inmovilizadores', text: 'Sincronización, adaptación, desactivación, recuperación de sistemas IMMO.' },
  { icon: Cpu, title: 'ECU / TCU /\nMódulos', text: 'Clonación, reparación, programación y venta de centralitas y módulos.' },
  { icon: Gauge, title: 'Mercedes\nEZS / ELV', text: 'Reparación, clonación y recuperación de sistemas Mercedes.' },
  { icon: Car, title: 'BMW\nCAS / FEM / BDC', text: 'Programación, clonación y diagnóstico avanzado de módulos BMW.' },
  { icon: Airplay, title: 'Airbag\nCrash Data', text: 'Reset crash, reparación de centralitas de airbag y pretensores.' },
];

const cases = [
  { car: 'BMW Serie 1', issue: 'No arranca', problem: 'FEM averiado', solution: 'Clonación y programación.', result: 'Vehículo operativo' },
  { car: 'Mercedes W204', issue: 'EZS bloqueado', problem: 'No gira llave', solution: 'Reparación electrónica del EZS.', result: 'Arranque recuperado' },
  { car: 'Opel Insignia', issue: 'Sin arranque', problem: 'Actualización en concesionario, ECU sin arranque.', solution: 'Diagnóstico y recuperación ECU.', result: 'Vehículo recuperado' },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Autokeys Remaps Pro">
          <span className="ak">AK</span>
          <span className="brandText"><b>Autokeys</b><em>Remaps Pro</em><small>Electrónica avanzada del automóvil</small></span>
        </a>
        <nav className="menu">
          <a className="active" href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#talleres">Talleres</a>
          <a href="#casos">Casos reales</a>
          <a href="#laboratorio">Laboratorio</a>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="socials"><Instagram size={16}/><span>TikTok</span><Youtube size={17}/><span>☏</span></div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroText">
          <h1><span>Autokeys</span><strong>Remaps Pro</strong></h1>
          <p className="subtitle">Electrónica avanzada del automóvil</p>
          <div className="redline" />
          <h2>Especialistas en resolver<br/>lo que otros <span>no pueden.</span></h2>
          <div className="heroButtons">
            <a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">Solicitar presupuesto<br/>por WhatsApp</a>
            <a className="btn secondary" href="#talleres"><Briefcase size={21}/> Soy taller /<br/>distribuidor</a>
          </div>
        </div>
        <div className="heroScene" aria-hidden="true">
          <div className="wallLogo"><span>AK</span><b>Autokeys</b><em>Remaps Pro</em></div>
          <div className="screen screenA" />
          <div className="screen screenB" />
          <div className="carGlow" />
          <div className="carBody">
            <div className="windshield" />
            <div className="headlight left" />
            <div className="headlight right" />
            <div className="grille" />
            <div className="wheel front" />
            <div className="wheel rear" />
          </div>
        </div>
      </section>

      <section className="serviceStrip">
        {strip.map(({ icon: Icon, title }) => <a href="#servicios" key={title}><Icon size={30}/><span>{title}</span></a>)}
      </section>

      <section id="nosotros" className="notWorkshop sectionSplit">
        <div className="copy">
          <h3><span>No somos</span> un taller convencional</h3>
          <p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p>
          <p className="red">Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos del automóvil.</p>
        </div>
        <div className="pcb"><div className="chip"/><span/><span/><span/><span/></div>
      </section>

      <section id="servicios" className="services">
        <h3>Nuestros <span>servicios</span></h3>
        <div className="cards">
          {services.map(({ icon: Icon, title, text }) => <article className="card" key={title}><div className="photo"><Icon size={54}/></div><h4>{title}</h4><p>{text}</p></article>)}
        </div>
      </section>

      <section id="talleres" className="proArea">
        <div>
          <h3>¿Eres taller?<br/><span>Trabajamos contigo.</span></h3>
          <p>File service, clonación de módulos, reparaciones electrónicas, programación de llaves, soporte técnico y servicios profesionales para talleres.</p>
          <a className="outlineBtn" href={whatsapp} target="_blank" rel="noreferrer">Solicitar alta como taller colaborador</a>
        </div>
        <div className="proIcons">
          <span><Truck/> Servicio nacional por envío</span><span><Phone/> Soporte técnico rápido</span><span><CheckCircle2/> Trabajos con garantía</span><span><Gauge/> Precios especiales para talleres</span>
        </div>
        <div className="caseBox"><b>AK</b><small>Autokeys Remaps Pro</small></div>
      </section>

      <section id="casos" className="cases">
        <h3>Casos <span>reales</span></h3>
        <div className="caseGrid">
          {cases.map((c) => <article className="caseCard" key={c.car}><div className="caseImage"><Car size={60}/></div><div><h4>{c.car}</h4><b>{c.issue}</b><p><span>Problema:</span> {c.problem}</p><p><span>Solución:</span> {c.solution}</p><p><span>Resultado:</span> {c.result}</p></div><button>+</button></article>)}
          <article className="contactCase"><h4>¿Tienes un caso complicado?</h4><p>Envíanos la información y estudiamos tu caso sin compromiso.</p><a href={whatsapp} target="_blank" rel="noreferrer">Contactar por WhatsApp</a></article>
        </div>
      </section>

      <section id="laboratorio" className="lab">
        <h3>Nuestro <span>laboratorio</span></h3>
        <div className="labGrid"><div className="labShot wide"/><div className="labShot microscope"/><div className="labShot autel"/><aside><p>Contamos con equipamiento profesional para el diagnóstico, reparación y programación de sistemas electrónicos del automóvil.</p><b>No cambiamos piezas por probar. Diagnosticamos y reparamos con criterio técnico.</b></aside></div>
      </section>

      <footer id="contacto" className="footer">
        <div><MapPin/><b>Autokeys Remaps Pro</b><small>Av. Andalucía 125 BJ<br/>Puente de Génave, Jaén</small></div>
        <div><Phone/><b>WhatsApp</b><a href={whatsapp} target="_blank" rel="noreferrer">632 982 646</a></div>
        <div><Mail/><b>Email</b><a href="mailto:info@autokeyspro.es">info@autokeyspro.es</a></div>
        <div><MapPin/><b>Ubicación</b><a href={maps} target="_blank" rel="noreferrer">Cómo llegar</a></div>
      </footer>
      <a className="floatingWhatsapp" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
    </main>
  );
}
