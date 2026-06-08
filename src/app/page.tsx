import { KeyRound, ShieldCheck, Cpu, Car, Microscope, Package, Phone, Mail, MapPin, Instagram, Youtube, Send, Wrench, CheckCircle, LockKeyhole, Gauge, BriefcaseBusiness, MessageCircle, Navigation } from 'lucide-react';

const whatsapp = 'https://wa.me/34632982646?text=Hola%20Autokeys%20Remaps%20Pro%2C%20quiero%20solicitar%20presupuesto';
const maps = 'https://www.google.com/maps/search/?api=1&query=Av.+Andaluc%C3%ADa+125+BJ%2C+Puente+de+G%C3%A9nave%2C+Ja%C3%A9n';
const fileService = '#talleres';

const quickServices = [
  { icon: KeyRound, text: 'Llaves y Smart Keys' },
  { icon: ShieldCheck, text: 'Inmovilizadores' },
  { icon: Cpu, text: 'ECU / TCU Airbag / Módulos' },
  { icon: Car, text: 'BMW · Mercedes Audi · VAG' },
  { icon: Microscope, text: 'Laboratorio electrónico' },
  { icon: Package, text: 'Servicio nacional por envío' },
];

const services = [
  { icon: KeyRound, title: 'Llaves y Smart Keys', text: 'Duplicado, pérdida total, mandos, programación y reparación.' },
  { icon: LockKeyhole, title: 'Inmovilizadores', text: 'Sincronización, adaptación, desactivación, recuperación de sistemas IMMO.' },
  { icon: Cpu, title: 'ECU / TCU / Módulos', text: 'Clonación, reparación, programación y venta de centralitas y módulos.' },
  { icon: Car, title: 'Mercedes EZS / ELV', text: 'Reparación, clonación y recuperación de sistemas EZS / ELV.' },
  { icon: Gauge, title: 'BMW CAS / FEM / BDC', text: 'Programación, clonación y diagnóstico avanzado de módulos BMW.' },
  { icon: ShieldCheck, title: 'Airbag Crash Data', text: 'Reset crash, reparación de centralitas de airbag y pretensores.' },
];

const cases = [
  { car: 'BMW Serie 1', fault: 'FEM averiado', fix: 'Clonación y programación', result: 'Vehículo operativo' },
  { car: 'Mercedes W204', fault: 'EZS bloqueado', fix: 'Reparación electrónica del EZS', result: 'Arranque recuperado' },
  { car: 'Opel Insignia', fault: 'Sin arranque', fix: 'Diagnóstico y recuperación ECU', result: 'Vehículo recuperado' },
];

export default function Home(){
  return <main>
    <header className="topbar">
      <a href="#inicio" className="brand" aria-label="Autokeys Remaps Pro inicio">
        <span className="ak">AK</span><span><b>AUTOKEYS</b><em>REMAPS PRO</em><small>ELECTRÓNICA AVANZADA DEL AUTOMÓVIL</small></span>
      </a>
      <nav>
        <a href="#inicio">Inicio</a><a href="#servicios">Servicios</a><a href="#talleres">Talleres</a><a href="#casos">Casos reales</a><a href="#laboratorio">Laboratorio</a><a href="#nosotros">Sobre nosotros</a><a href="#contacto">Contacto</a>
      </nav>
      <div className="social"><Instagram size={17}/><Send size={17}/><Youtube size={18}/><MessageCircle size={17}/></div>
    </header>

    <section id="inicio" className="hero">
      <div className="heroText">
        <h1><span>AUTOKEYS</span><strong>REMAPS PRO</strong></h1>
        <p className="subtitle">Electrónica avanzada del automóvil</p>
        <div className="redline" />
        <h2>Especialistas en resolver<br/>lo que otros <span>no pueden.</span></h2>
        <div className="heroActions">
          <a className="btn primary" href={whatsapp} target="_blank"><MessageCircle/>Solicitar presupuesto por WhatsApp</a>
          <a className="btn ghost" href="#talleres"><BriefcaseBusiness/>Soy taller / distribuidor</a>
        </div>
      </div>
      <div className="heroCar" aria-label="BMW negro en laboratorio de electrónica">
        <div className="wallLogo"><span>AK</span><b>AUTOKEYS</b><em>REMAPS PRO</em><small>electrónica avanzada del automóvil</small></div>
        <div className="carShape"><div className="light left"/><div className="light right"/><div className="plate">AK</div></div>
      </div>
    </section>

    <section className="quickbar">
      {quickServices.map((item)=>{const Icon=item.icon;return <a key={item.text} href="#servicios"><Icon/><span>{item.text}</span></a>})}
    </section>

    <section id="nosotros" className="splitSection pcb">
      <div><h3><span>No somos</span> un taller convencional</h3><p>En Autokeys Remaps Pro trabajamos sobre averías electrónicas, inmovilizadores, módulos, llaves y centralitas donde muchos talleres se detienen.</p><p className="accent">Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos del automóvil.</p></div>
      <div className="pcbImage"><span/></div>
    </section>

    <section id="servicios" className="section"><h3>Nuestros <span>servicios</span></h3><div className="serviceGrid">{services.map((s)=>{const Icon=s.icon;return <article className="serviceCard" key={s.title}><div className="servicePhoto"><Icon/></div><h4>{s.title}</h4><p>{s.text}</p></article>})}</div></section>

    <section id="talleres" className="workshop"><div><h3>¿Eres taller?<br/><span>Trabajamos contigo.</span></h3><p>File service, clonación de módulos, reparaciones electrónicas, programación de llaves, soporte técnico y servicios por envío para profesionales.</p><a className="btn outline" href={whatsapp} target="_blank"><BriefcaseBusiness/>Solicitar alta como taller colaborador</a></div><div className="workshopItems"><span><Package/>Servicio nacional por envío</span><span><MessageCircle/>Soporte técnico rápido</span><span><CheckCircle/>Trabajos con garantía</span><span><Gauge/>Precios especiales para talleres</span></div><div className="caseBox"><b>AK</b><em>Autokeys Remaps Pro</em></div></section>

    <section id="casos" className="cases"><h3>Casos <span>reales</span></h3><div className="caseGrid">{cases.map((c)=> <article key={c.car}><div className="casePhoto"><Car/></div><h4>{c.car}</h4><p><b>Problema:</b> {c.fault}</p><p><b>Solución:</b> {c.fix}</p><p className="result"><b>Resultado:</b> {c.result}</p><button aria-label={`Ver caso ${c.car}`}>+</button></article>)}<article className="contactCase"><h4>¿Tienes un caso complicado?</h4><p>Envíanos la información y estudiamos tu caso sin compromiso.</p><a href={whatsapp} target="_blank"><MessageCircle/>Contactar por WhatsApp</a></article></div></section>

    <section id="laboratorio" className="lab"><h3>Nuestro <span>laboratorio</span></h3><div className="labGrid"><div className="labPhoto wide"><span>AK</span></div><div className="labPhoto"><Microscope/></div><div className="labPhoto"><Cpu/></div><aside><p>Contamos con equipamiento profesional para el diagnóstico, reparación y programación de sistemas electrónicos del automóvil.</p><b>No cambiamos piezas por probar.</b><strong>Diagnosticamos y reparamos con criterio técnico.</strong></aside></div></section>

    <section id="contacto" className="contact"><h3>Cuéntanos tu <span>caso</span></h3><div className="contactCards"><a className="whats" href={whatsapp} target="_blank"><MessageCircle/><strong>WhatsApp</strong><em>respuesta rápida</em></a><a href="mailto:info@autokeyspro.es"><Mail/><strong>info@autokeyspro.es</strong><em>soporte y presupuestos</em></a><a href={maps} target="_blank"><Navigation/><strong>cómo llegar</strong><em>av. andalucía 125 bj, puente de génave, jaén</em></a></div></section>

    <footer><div><MapPin/> <span>Autokeys Remaps Pro · Av. Andalucía 125 BJ, Puente de Génave, Jaén</span></div><div><Phone/> <span>632 982 646</span></div><div><Mail/> <span>info@autokeyspro.es</span></div><div className="follow">Síguenos <Instagram/> <Send/> <Youtube/> <MessageCircle/></div></footer>
    <a className="floatWhatsapp" href={whatsapp} target="_blank" aria-label="Abrir WhatsApp"><MessageCircle/></a>
  </main>
}
