import {
  KeyRound,
  ShieldCheck,
  Cpu,
  Airplay,
  Car,
  Wrench,
  Box,
  Gauge,
  Phone,
  Mail,
  MapPin,
  Truck,
  Microscope,
  CheckCircle2,
  MessageCircle,
  CircuitBoard,
  Zap,
  Shield,
} from "lucide-react";

const phone = "632 982 646";
const whatsappUrl = "https://wa.me/34632982646";
const address = "Av. Andalucía 125 BJ, Puente de Génave, Jaén";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Av.%20Andaluc%C3%ADa%20125%20BJ%2C%20Puente%20de%20G%C3%A9nave%2C%20Ja%C3%A9n";

const services = [
  { icon: KeyRound, title: "Llaves y Smart Keys", text: "Duplicado, pérdida total, mandos, programación y reparación." },
  { icon: ShieldCheck, title: "Inmovilizadores / IMMO", text: "Sincronización, adaptación y recuperación de sistemas inmovilizadores." },
  { icon: Cpu, title: "ECU / TCU / Módulos", text: "Clonación, reparación, programación y venta de centralitas y módulos." },
  { icon: Airplay, title: "Airbag Crash Data", text: "Lectura, reset crash, reparación de centralitas y pretensores." },
  { icon: Car, title: "BMW CAS / FEM / BDC", text: "Diagnóstico, programación y recuperación de sistemas BMW." },
  { icon: Wrench, title: "Mercedes EZS / ELV", text: "Reparación, clonación y recuperación de sistemas Mercedes." },
  { icon: Gauge, title: "Reprogramación ECU", text: "Soluciones electrónicas y software profesional a medida." },
  { icon: Box, title: "Servicio nacional", text: "Trabajos por envío para particulares, talleres y profesionales." },
];

const cases = [
  { title: "Seat León", problem: "Sin arranque", solution: "Bombín averiado, nueva llave y programación completa." },
  { title: "BMW Serie 1", problem: "FEM averiado", solution: "Clonación, programación y vehículo recuperado." },
  { title: "Mercedes W204", problem: "EZS bloqueado", solution: "Reparación electrónica y arranque restaurado." },
  { title: "Audi / VAG", problem: "Airbag Crash Data", solution: "Lectura, reset crash y sistema operativo." },
];

const labItems = [
  "Microscopía y soldadura SMD",
  "Equipos de lectura y programación avanzados",
  "Diagnosis multimarca y programación electrónica",
  "Entorno técnico especializado para ECUs, llaves y módulos",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-akdark text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="text-4xl font-black italic leading-none">
              <span className="text-white">A</span><span className="text-akred">K</span>
            </div>
            <div className="hidden leading-tight sm:block">
              <p className="font-black tracking-wide">AUTOKEYS</p>
              <p className="font-black text-akred">REMAPS PRO</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold uppercase tracking-wide text-white/80 lg:flex">
            <a href="#servicios" className="hover:text-akred">Servicios</a>
            <a href="#casos" className="hover:text-akred">Casos reales</a>
            <a href="#laboratorio" className="hover:text-akred">Laboratorio</a>
            <a href="#talleres" className="hover:text-akred">Para talleres</a>
            <a href="#contacto" className="hover:text-akred">Contacto</a>
          </nav>
          <a href={whatsappUrl} className="rounded-lg border border-akred px-4 py-2 text-sm font-black text-white hover:bg-akred">
            WhatsApp
          </a>
        </div>
      </header>

      <section id="inicio" className="hero-bg pt-28">
        <div className="mx-auto grid min-h-[780px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-akred/60 bg-akred/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-akred">
              <CircuitBoard size={18} /> Laboratorio técnico especializado
            </p>
            <h1 className="max-w-3xl text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl">
              Autokeys <span className="text-akred">Remaps</span> Pro
            </h1>
            <h2 className="mt-5 text-2xl font-bold uppercase tracking-wide text-white/90 sm:text-3xl">
              Electrónica Avanzada del Automóvil
            </h2>
            <p className="mt-6 max-w-3xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl">
              Especialistas en resolver <span className="text-akred">lo que otros no pueden.</span>
            </p>
            <p className="mt-4 text-xl font-black text-white/90">Todavía no está todo dicho...</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Llaves, inmovilizadores, ECUs, módulos electrónicos, airbag y diagnosis avanzada para particulares y talleres.
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white/65">
              BMW • Mercedes • Audi • VAG • PSA • Servicio nacional por envío
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={whatsappUrl} className="inline-flex items-center justify-center gap-3 rounded-xl bg-akred px-6 py-4 font-black uppercase shadow-2xl shadow-red-900/40 hover:bg-red-700">
                <MessageCircle /> Solicitar presupuesto
              </a>
              <a href="#talleres" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/5 px-6 py-4 font-black uppercase hover:bg-white/10">
                <Truck /> Soy taller / distribuidor
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/55 p-6 shadow-ak backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { Icon: KeyRound, text: "Llaves e IMMO" },
                { Icon: Cpu, text: "ECU y módulos" },
                { Icon: Microscope, text: "Laboratorio" },
                { Icon: Truck, text: "Servicio nacional" },
              ].map(({ Icon, text }) => (
                <div key={text} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Icon className="mb-4 text-akred" size={34} />
                  <p className="font-black uppercase">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-akgray py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <h2 className="text-3xl font-black uppercase"><span className="text-akred">No somos</span> un taller convencional</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
              En Autokeys Remaps Pro trabajamos donde la mecánica termina y comienza la electrónica avanzada del automóvil.
              Diagnosticamos, reparamos, clonamos, programamos y recuperamos sistemas electrónicos donde otros se detienen.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {["Diagnóstico profesional", "Equipamiento avanzado", "Resultados reales"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
                <CheckCircle2 className="text-akred" />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="grid-bg mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-center text-4xl font-black uppercase">Nuestros <span className="text-akred">servicios</span></h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-ak transition hover:-translate-y-1 hover:border-akred/70">
              <Icon size={38} className="text-akred" />
              <h3 className="mt-5 text-lg font-black uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="casos" className="bg-akgray px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black uppercase">Casos que otros dieron por <span className="text-akred">perdidos</span></h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {cases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                <div className="h-36 bg-gradient-to-br from-zinc-800 via-black to-red-950 p-6">
                  <p className="text-2xl font-black uppercase">{item.title}</p>
                </div>
                <div className="p-6">
                  <p className="font-black uppercase text-akred">{item.problem}</p>
                  <p className="mt-3 leading-7 text-white/70">{item.solution}</p>
                  <p className="mt-5 inline-flex items-center gap-2 font-black text-green-400"><CheckCircle2 size={20} /> Recuperado</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="laboratorio" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="text-4xl font-black uppercase">Laboratorio de electrónica <span className="text-akred">avanzada</span></h2>
          <p className="mt-5 leading-8 text-white/70">
            Equipamiento profesional para diagnosis, programación, reparación y recuperación de sistemas electrónicos del automóvil.
          </p>
          <ul className="mt-8 space-y-4">
            {labItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/85"><CheckCircle2 className="text-akred" /> {item}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "FLEX", subtitle: "Lectura y programación" },
            { title: "AUTEL", subtitle: "Diagnosis y llaves" },
            { title: "ECU", subtitle: "Clonación y reparación" },
            { title: "MICROSCOPIO", subtitle: "Electrónica SMD" },
          ].map((item) => (
            <div key={item.title} className="flex h-44 flex-col justify-end rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
              <p className="text-2xl font-black text-white/90">{item.title}</p>
              <p className="mt-1 text-sm text-white/55">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="talleres" className="border-y border-white/10 bg-black px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-black uppercase">¿Eres taller? <span className="text-akred">Trabajamos contigo</span></h2>
            <p className="mt-5 leading-8 text-white/70">
              Soluciones profesionales para talleres de toda España: file service, clonación, reparaciones electrónicas, programación de llaves e inmovilizadores.
            </p>
            <a href={whatsappUrl} className="mt-8 inline-flex rounded-xl border border-akred px-6 py-4 font-black uppercase text-white hover:bg-akred">
              Solicitar colaboración
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["File Service", "Clonación", "Reparaciones", "Llaves e IMMO", "Soporte técnico", "Servicio nacional"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-center font-black uppercase">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-4xl font-black">Cuéntanos tu <span className="text-akred">caso</span></h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a href={whatsappUrl} className="flex min-h-40 items-center gap-5 rounded-2xl bg-green-600 p-7 hover:bg-green-700">
            <MessageCircle size={58} className="shrink-0" />
            <div>
              <p className="contact-card-title text-2xl">whatsapp</p>
              <p className="mt-2 text-sm font-bold italic text-white/85">respuesta rápida para presupuestos</p>
            </div>
          </a>
          <a href="mailto:info@autokeyspro.es" className="flex min-h-40 items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-7 hover:border-akred">
            <Mail size={46} className="shrink-0 text-akred" />
            <div>
              <p className="contact-card-title text-xl">info@autokeyspro.es</p>
              <p className="mt-2 text-sm font-bold italic text-white/65">soporte técnico y presupuestos</p>
            </div>
          </a>
          <a href={mapsUrl} target="_blank" className="map-card flex min-h-40 items-center gap-5 rounded-2xl border border-white/10 p-7 hover:border-akred">
            <MapPin size={48} className="shrink-0 text-akred" />
            <div>
              <p className="contact-card-title text-xl">av. andalucía 125 bj</p>
              <p className="mt-2 text-sm font-bold italic text-white/80">puente de génave, jaén</p>
              <p className="mt-3 inline-flex rounded-lg border border-akred/60 px-3 py-1 text-xs font-black uppercase text-akred">cómo llegar</p>
            </div>
          </a>
        </div>
      </section>

      <a href={whatsappUrl} aria-label="Abrir WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-600 shadow-2xl hover:bg-green-700">
        <MessageCircle size={34} />
      </a>

      <footer className="border-t border-white/10 bg-black px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Autokeys Remaps Pro | Electrónica Avanzada del Automóvil</p>
          <p className="font-bold italic lowercase">av. andalucía 125 bj, puente de génave, jaén</p>
        </div>
      </footer>
    </main>
  );
}
