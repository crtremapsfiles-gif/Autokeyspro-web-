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
} from "lucide-react";

const whatsappUrl = "https://wa.me/34632982646";

const services = [
  { icon: KeyRound, title: "Llaves y Smart Keys", text: "Duplicado, pérdida total, mandos, programación y reparación." },
  { icon: ShieldCheck, title: "Inmovilizadores", text: "Sincronización, adaptación y recuperación de sistemas IMMO." },
  { icon: Cpu, title: "ECU / TCU / Módulos", text: "Clonación, reparación, programación y venta de centralitas." },
  { icon: Airplay, title: "Airbag Crash Data", text: "Lectura, reset crash, reparación de centralitas y pretensores." },
  { icon: Car, title: "BMW CAS / FEM / BDC", text: "Diagnóstico, programación y recuperación de sistemas BMW." },
  { icon: Wrench, title: "Mercedes EZS / ELV", text: "Reparación, clonación y recuperación de sistemas Mercedes." },
  { icon: Gauge, title: "Reprogramación ECU", text: "Soluciones electrónicas y software profesional a medida." },
  { icon: Box, title: "Servicio nacional", text: "Trabajos por envío para particulares, talleres y profesionales." },
];

const cases = [
  { title: "Seat León", problem: "Sin arranque", solution: "Bombín averiado, nueva llave y programación completa." },
  { title: "BMW X1", problem: "Trabajo sobre ECU", solution: "Intervención electrónica y vehículo operativo." },
  { title: "Mercedes W204", problem: "EZS bloqueado", solution: "Reparación y recuperación del sistema de arranque." },
];

const labItems = [
  "Microscopía y soldadura SMD",
  "Equipos de lectura y programación avanzados",
  "Diagnosis multimarca",
  "Entorno técnico especializado",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-akdark text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
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
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr]">
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
            <p className="mt-6 text-2xl font-black text-white">Todavía no está todo dicho...</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Especialistas en llaves, inmovilizadores, ECUs, módulos electrónicos y diagnosis avanzada. Soluciones para particulares y talleres.
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
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                <div className="h-40 bg-gradient-to-br from-zinc-800 via-black to-red-950 p-6">
                  <p className="text-3xl font-black uppercase">{item.title}</p>
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
            Contamos con laboratorio propio y equipamiento profesional para diagnosis, programación, reparación y recuperación de sistemas electrónicos del automóvil.
          </p>
          <ul className="mt-8 space-y-4">
            {labItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/85"><CheckCircle2 className="text-akred" /> {item}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["FLEX", "AUTEL", "ECU", "MICROSCOPIO"].map((item) => (
            <div key={item} className="flex h-44 items-end rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6">
              <p className="text-2xl font-black text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="talleres" className="border-y border-white/10 bg-black px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-black uppercase">¿Eres taller? <span className="text-akred">Trabajamos contigo</span></h2>
            <p className="mt-5 leading-8 text-white/70">
              Ofrecemos soluciones profesionales para talleres de toda España: file service, clonación, reparaciones electrónicas, programación de llaves e inmovilizadores.
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
        <h2 className="text-4xl font-black uppercase">Cuéntanos tu <span className="text-akred">caso</span></h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a href={whatsappUrl} className="flex items-center gap-4 rounded-2xl bg-green-600 p-6 font-black uppercase hover:bg-green-700">
            <Phone /> WhatsApp
          </a>
          <a href="mailto:info@autokeyspro.es" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-6 font-black uppercase hover:border-akred">
            <Mail /> Email
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-6 font-black uppercase">
            <MapPin className="text-akred" /> La Puerta de Segura, Jaén
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Autokeys Remaps Pro | Electrónica Avanzada del Automóvil</p>
          <p>Todavía no está todo dicho...</p>
        </div>
      </footer>
    </main>
  );
}
