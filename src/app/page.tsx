const whatsappUrl = 'https://wa.me/34632982646';
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Av.+Andaluc%C3%ADa+125+BJ,+Puente+de+G%C3%A9nave,+Ja%C3%A9n';

function Hotspot({
  href,
  label,
  style,
}: {
  href: string;
  label: string;
  style: React.CSSProperties;
}) {
  return (
    <a
      className="hotspot"
      href={href}
      aria-label={label}
      title={label}
      style={style}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    />
  );
}

export default function Home() {
  return (
    <main className="page">
      <div className="mockupWrap">
        <img
          src="/boceto-autokeys.jpg"
          alt="Autokeys Remaps Pro - web premium de electrónica avanzada del automóvil"
          className="mockup"
        />

        {/* Menú superior */}
        <Hotspot href="#inicio" label="Inicio" style={{ left: '40%', top: '2.5%', width: '5%', height: '3%' }} />
        <Hotspot href="#servicios" label="Servicios" style={{ left: '46%', top: '2.5%', width: '7%', height: '3%' }} />
        <Hotspot href="#talleres" label="Talleres" style={{ left: '54%', top: '2.5%', width: '7%', height: '3%' }} />
        <Hotspot href="#casos" label="Casos reales" style={{ left: '62%', top: '2.5%', width: '9%', height: '3%' }} />
        <Hotspot href="#laboratorio" label="Laboratorio" style={{ left: '72%', top: '2.5%', width: '9%', height: '3%' }} />
        <Hotspot href="#contacto" label="Contacto" style={{ left: '89%', top: '2.5%', width: '8%', height: '3%' }} />

        {/* Redes */}
        <Hotspot href="https://www.instagram.com/autokeys.pro" label="Instagram Autokeys" style={{ left: '91.5%', top: '.6%', width: '2.3%', height: '2%' }} />
        <Hotspot href="https://www.tiktok.com/@autokeys.pro" label="TikTok Autokeys" style={{ left: '94.2%', top: '.6%', width: '2.3%', height: '2%' }} />
        <Hotspot href="https://www.youtube.com/" label="YouTube Autokeys" style={{ left: '96.6%', top: '.6%', width: '2.3%', height: '2%' }} />

        {/* Botones principales */}
        <Hotspot href={whatsappUrl} label="Solicitar presupuesto por WhatsApp" style={{ left: '3%', top: '22%', width: '21.5%', height: '4%' }} />
        <Hotspot href="#talleres" label="Soy taller o distribuidor" style={{ left: '26%', top: '22%', width: '17%', height: '4%' }} />

        {/* Barra servicios */}
        <Hotspot href="#servicios" label="Llaves y Smart Keys" style={{ left: '2.5%', top: '28.2%', width: '14%', height: '4%' }} />
        <Hotspot href="#servicios" label="Inmovilizadores" style={{ left: '17.3%', top: '28.2%', width: '17%', height: '4%' }} />
        <Hotspot href="#servicios" label="ECU TCU Airbag y módulos" style={{ left: '35%', top: '28.2%', width: '17%', height: '4%' }} />
        <Hotspot href="#servicios" label="BMW Mercedes Audi VAG" style={{ left: '53%', top: '28.2%', width: '17%', height: '4%' }} />
        <Hotspot href="#laboratorio" label="Laboratorio electrónico" style={{ left: '70.5%', top: '28.2%', width: '15%', height: '4%' }} />
        <Hotspot href="#contacto" label="Servicio nacional por envío" style={{ left: '86%', top: '28.2%', width: '12%', height: '4%' }} />

        {/* Secciones invisibles para anclajes */}
        <span id="inicio" className="anchor" style={{ top: 0 }} />
        <span id="servicios" className="anchor" style={{ top: '44%' }} />
        <span id="talleres" className="anchor" style={{ top: '59%' }} />
        <span id="casos" className="anchor" style={{ top: '71%' }} />
        <span id="laboratorio" className="anchor" style={{ top: '84%' }} />
        <span id="contacto" className="anchor" style={{ top: '95%' }} />

        {/* Tarjetas servicios/casos/contacto */}
        <Hotspot href="#servicios" label="Ver servicio Llaves" style={{ left: '2.5%', top: '45%', width: '15%', height: '13%' }} />
        <Hotspot href="#servicios" label="Ver servicio Inmovilizadores" style={{ left: '18.2%', top: '45%', width: '15%', height: '13%' }} />
        <Hotspot href="#servicios" label="Ver servicio ECU" style={{ left: '34%', top: '45%', width: '15%', height: '13%' }} />
        <Hotspot href="#servicios" label="Ver Mercedes EZS ELV" style={{ left: '49.7%', top: '45%', width: '15%', height: '13%' }} />
        <Hotspot href="#servicios" label="Ver BMW CAS FEM BDC" style={{ left: '65.5%', top: '45%', width: '15%', height: '13%' }} />
        <Hotspot href="#servicios" label="Ver Airbag Crash Data" style={{ left: '81.3%', top: '45%', width: '15%', height: '13%' }} />

        <Hotspot href="#talleres" label="Solicitar alta como taller colaborador" style={{ left: '2.6%', top: '63.6%', width: '21%', height: '4%' }} />
        <Hotspot href={whatsappUrl} label="Contactar por WhatsApp" style={{ left: '83.2%', top: '76.5%', width: '13%', height: '5%' }} />
        <Hotspot href={whatsappUrl} label="WhatsApp" style={{ left: '43%', top: '94%', width: '14%', height: '4%' }} />
        <Hotspot href="mailto:info@autokeyspro.es" label="Enviar email" style={{ left: '58%', top: '94%', width: '18%', height: '4%' }} />
        <Hotspot href={mapsUrl} label="Cómo llegar" style={{ left: '2%', top: '92.8%', width: '25%', height: '5%' }} />

        <a className="floatingWhatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp Autokeys">WhatsApp</a>
      </div>
    </main>
  );
}
