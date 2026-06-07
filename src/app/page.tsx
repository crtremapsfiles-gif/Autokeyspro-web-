import { KeyRound, ShieldCheck, Cpu, Car, Microscope, Package, Briefcase, Truck, Headphones, BadgeCheck, TrendingUp, Plus, MapPin, Clock, Mail, Instagram, Youtube, Music2 } from "lucide-react";

const services = [
  { icon: KeyRound, title: "Llaves y Smart Keys", text: "Duplicado, pérdida total, mandos, programación y reparación." },
  { icon: ShieldCheck, title: "Inmovilizadores", text: "Sincronización, adaptación, desactivación, recuperación de sistemas IMMO." },
  { icon: Cpu, title: "ECU / TCU / Módulos", text: "Clonación, reparación, programación y venta de centralitas y módulos." },
  { icon: KeyRound, title: "Mercedes EZS / ELV", text: "Reparación, clonación y recuperación de sistemas EZS / ELV." },
  { icon: Car, title: "BMW CAS / FEM / BDC", text: "Programación, clonación y diagnóstico avanzado de módulos BMW." },
  { icon: ShieldCheck, title: "Airbag Crash Data", text: "Reset crash, reparación de centralitas de airbag y pretensores." },
];

const quickServices = [
  { icon: KeyRound, label: "Llaves y\nSmart Keys" },
  { icon: ShieldCheck, label: "Inmovilizadores" },
  { icon: Cpu, label: "ECU / TCU\nAirbag / Módulos" },
  { icon: Car, label: "BMW · Mercedes\nAudi · VAG" },
  { icon: Microscope, label: "Laboratorio\nElectrónico" },
  { icon: Package, label: "Servicio nacional\npor envío" },
];

const proItems = [
  { icon: Truck, title: "Servicio nacional por envío" },
  { icon: Headphones, title: "Soporte técnico rápido y profesional" },
  { icon: BadgeCheck, title: "Trabajos con garantía" },
  { icon: TrendingUp, title: "Precios especiales para talleres" },
];

const cases = [
  { title: "BMW Serie 1", problem: "FEM averiado", solution: "Clonación y programación.", result: "Vehículo operativo." },
  { title: "Mercedes W204", problem: "EZS bloqueado", solution: "Reparación electrónica del EZS.", result: "Arranque recuperado." },
  { title: "Opel Insignia", problem: "Actualización en concesionario, ECU sin arranque.", solution: "Diagnóstico y recuperación de ECU.", result: "Vehículo recuperado." },
];

function Logo() {
  return <div className="logo"><span className="ak"><b>A</b><b>K</b></span><div><strong>Autokeys</strong><em>Remaps Pro</em><small>Electrónica avanzada del automóvil</small></div></div>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Logo />
        <nav>
          <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#talleres">Talleres</a><a href="#casos">Casos reales</a><a href="#laboratorio">Laboratorio</a><a href="#nosotros">Sobre nosotros</a><a href="#contacto">Contacto</a>
        </nav>
        <div className="socials"><Instagram size={16}/><Music2 size={16}/><Youtube size={17}/><span>◉</span></div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroContent">
          <h1><span>Autokeys</span><strong>Remaps Pro</strong></h1>
          <p className="subtitle">Electrónica avanzada del automóvil</p>
          <div className="line" />
          <h2>Especialistas en resolver<br/>lo que otros <em>no pueden.</em></h2>
          <div className="actions">
            <a className="primary" href="https://wa.me/34632982646" target="_blank">Solicitar presupuesto<br/>por WhatsApp</a>
            <a className="secondary" href="#talleres">Soy taller /<br/>distribuidor</a>
          </div>
        </div>
        <div className="carPlate"><span>AK</span><small>Autokeys Remaps Pro</small></div>
      </section>

      <section className="quickbar">
        {quickServices.map(({icon:Icon,label}) => <div className="quick" key={label}><Icon size={32}/><span>{label}</span></div>)}
      </section>

      <section className="splitInfo">
        <div>
          <h3><span>No somos</span> un taller convencional</h3>
          <p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p>
          <p className="red">Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos del automóvil.</p>
        </div>
        <div className="pcb" />
      </section>

      <section id="servicios" className="section">
        <h3 className="sectionTitle">Nuestros <span>servicios</span></h3>
        <div className="cards services">
          {services.map(({icon:Icon,title,text}) => <article className="card" key={title}><div className="photo"><Icon size={52}/></div><Icon className="corner" size={28}/><h4>{title}</h4><p>{text}</p></article>)}
        </div>
      </section>

      <section id="talleres" className="talleres">
        <div className="tallerText"><h3>¿Eres taller?<br/><span>Trabajamos contigo.</span></h3><p>File service, clonación de módulos, reparaciones electrónicas, programación de llaves, soporte técnico y servicios por envío para profesionales.</p><a href="https://wa.me/34632982646" target="_blank">Solicitar alta como taller colaborador</a></div>
        <div className="proGrid">{proItems.map(({icon:Icon,title})=><div className="pro" key={title}><Icon size={28}/><span>{title}</span></div>)}</div>
        <div className="caseBox"><span>AK</span><small>Autokeys Remaps Pro</small></div>
      </section>

      <section id="casos" className="section casesWrap">
        <h3 className="casosTitle">Casos <span>reales</span></h3>
        <div className="caseGrid">
          {cases.map((c,i)=><article className="case" key={c.title}><div className={'caseImg img'+i}></div><h4>{c.title}<br/>{i===0?'No arranca':i===1?'EZS bloqueado':'Sin arranque'}</h4><p><b>Problema:</b> {c.problem}</p><p><b>Solución:</b> {c.solution}</p><p><b>Resultado:</b> {c.result}</p><Plus className="plus" size={24}/></article>)}
          <article className="case cta"><h4>¿Tienes un caso complicado?</h4><p>Envíanos la información y estudiamos tu caso sin compromiso.</p><a href="https://wa.me/34632982646" target="_blank">Contactar por WhatsApp</a></article>
        </div>
      </section>

      <section id="laboratorio" className="laboratorio">
        <h3>Nuestro <span>laboratorio</span></h3>
        <div className="labGrid"><div className="lab big"></div><div className="lab"></div><div className="lab"></div></div>
        <div className="labText"><p>Contamos con equipamiento profesional de última generación para el diagnóstico, reparación y programación de sistemas electrónicos del automóvil.</p><strong>No cambiamos piezas por probar. Diagnosticamos y reparamos con criterio técnico.</strong></div>
      </section>

      <footer id="contacto" className="footer">
        <div><MapPin size={28}/><h4>Autokeys Remaps Pro</h4><p>Av. Andalucía 125 BJ<br/>Puente de Génave, Jaén</p></div>
        <div><Clock size={28}/><h4>Horario</h4><p>Lunes a viernes<br/>9:00 - 14:00 | 16:00 - 20:00</p></div>
        <div><span className="wa">☎</span><h4>WhatsApp</h4><a href="https://wa.me/34632982646" target="_blank">Escríbenos</a></div>
        <div><Mail size={28}/><h4>Email</h4><p className="email">info@autokeyspro.es</p></div>
        <div><h4>Síguenos</h4><div className="socialFooter"><Instagram/><Music2/><Youtube/></div></div>
      </footer>
      <div className="legal">© 2026 Autokeys Remaps Pro | Electrónica Avanzada del Automóvil | Todos los derechos reservados</div>
    </main>
  );
}
