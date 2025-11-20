import Image from 'next/image';
import { FeatureCard } from './components/FeatureCard';
import { MenuItem } from './components/MenuItem';
import { SectionHeading } from './components/SectionHeading';

const features = [
  {
    title: 'Traditioneller Drehspieß',
    description:
      'Unser Gyros wird täglich frisch auf dem Drehspieß gegrillt – knusprig, saftig und mit mediterranen Kräutern verfeinert.',
    icon: '🔥'
  },
  {
    title: 'Familienrezept aus Athen',
    description:
      'Die Marinade stammt aus dem Rezeptbuch von Familie Nikolaidis. Seit drei Generationen wird sie unverändert weitergegeben.',
    icon: '📜'
  },
  {
    title: 'Hausgemachte Beilagen',
    description:
      'Zaziki mit frischem Knoblauch, handgeschnittene Pommes und warme Pita aus dem eigenen Steinofen.',
    icon: '🥗'
  }
];

const menu = [
  {
    name: 'Gyros Pita Klassik',
    description: 'Schweinegyros, rote Zwiebeln, Tomaten, Zaziki & Gewürzpommes in fluffiger Pita.',
    price: '€8,90'
  },
  {
    name: 'Gyros Teller Agora',
    description: 'Große Portion Gyros mit Pommes, Bauernsalat und doppelt Zaziki.',
    price: '€13,50'
  },
  {
    name: 'Vegetarische Mezze-Platte',
    description: 'Gegrilltes Gemüse, Feta vom Fass, hausgemachter Hummus & Oliven.',
    price: '€11,20'
  }
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-gyros-sand to-white">
      <section className="relative isolate overflow-hidden pb-24 pt-16 sm:pt-24">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1604908177076-8c11fa3bb400?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-20" />
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <p className="inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-gyros-blue shadow-lg shadow-gyros-blue/10">
                Gyros Agora
              </p>
              <h1 className="text-4xl font-semibold text-gyros-blue sm:text-6xl">
                Möchten Sie ein original griechisches Gyros probieren? Zögern Sie nicht – kommen Sie direkt rein!
              </h1>
              <p className="max-w-2xl text-lg text-gyros-blue/80">
                Willkommen in Ihrem neuen Lieblingslokal für griechische Spezialitäten. Wir kombinieren traditionelle Rezepte mit moderner Gastfreundschaft – ganz ohne Kompromisse.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-gyros-blue px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-gyros-blue/30 transition hover:bg-gyros-clay"
                  href="#reservierung"
                >
                  Tisch reservieren
                </a>
                <a
                  className="rounded-full border border-gyros-blue/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gyros-blue transition hover:border-gyros-clay hover:text-gyros-clay"
                  href="#menue"
                >
                  Speisekarte ansehen
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative h-96 w-72 overflow-hidden rounded-[48px] border-8 border-white shadow-2xl shadow-gyros-blue/20">
                <Image
                  alt="Frisches griechisches Gyros"
                  className="object-cover"
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80"
                  fill
                  sizes="(max-width: 1024px) 18rem, 18rem"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-20" id="warum">
        <SectionHeading
          eyebrow="Warum Gyros Agora?"
          title="Originalität, die man schmeckt"
          description="Unser Gyros steht für echtes Griechenland: hochwertige Zutaten, perfekter Service und ein Ambiente wie im Urlaub."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title}>
              {feature.description}
            </FeatureCard>
          ))}
        </div>
      </section>

      <section className="bg-white/80 py-20" id="menue">
        <div className="section-container">
          <SectionHeading
            eyebrow="Speisekarte"
            title="Beliebte Klassiker"
            description="Frisch, aromatisch und mit Leidenschaft zubereitet. Alle Gerichte auch zum Mitnehmen."
          />
          <div className="grid gap-5">
            {menu.map((item) => (
              <MenuItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-20" id="reservierung">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Reservierung"
              title="Wir halten den Tisch für Sie frei"
              description="Ob spontanes Abendessen oder geplante Feier – reservieren Sie online oder rufen Sie uns an."
            />
            <div className="rounded-3xl bg-white/80 p-8 shadow-xl shadow-gyros-blue/10 backdrop-blur">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-gyros-blue" htmlFor="name">
                    Ihr Name
                  </label>
                  <input
                    className="rounded-xl border border-gyros-blue/20 bg-white px-4 py-3 text-sm text-gyros-blue outline-none transition focus:border-gyros-clay focus:ring-2 focus:ring-gyros-clay/40"
                    id="name"
                    name="name"
                    placeholder="Maria Papadopoulos"
                    type="text"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-gyros-blue" htmlFor="persons">
                    Personenanzahl
                  </label>
                  <input
                    className="rounded-xl border border-gyros-blue/20 bg-white px-4 py-3 text-sm text-gyros-blue outline-none transition focus:border-gyros-clay focus:ring-2 focus:ring-gyros-clay/40"
                    id="persons"
                    name="persons"
                    min={1}
                    placeholder="2"
                    type="number"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-gyros-blue" htmlFor="date">
                    Datum &amp; Uhrzeit
                  </label>
                  <input
                    className="rounded-xl border border-gyros-blue/20 bg-white px-4 py-3 text-sm text-gyros-blue outline-none transition focus:border-gyros-clay focus:ring-2 focus:ring-gyros-clay/40"
                    id="date"
                    name="date"
                    type="datetime-local"
                  />
                </div>
                <button
                  className="mt-2 rounded-full bg-gyros-clay px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-gyros-blue"
                  type="submit"
                >
                  Jetzt reservieren
                </button>
              </form>
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-3xl bg-white/80 p-10 shadow-xl shadow-gyros-blue/10 backdrop-blur">
              <h3 className="text-2xl font-semibold text-gyros-blue">Öffnungszeiten</h3>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-gyros-blue/80">
                <div>
                  <dt className="font-semibold text-gyros-blue">Montag – Donnerstag</dt>
                  <dd>11:30 – 22:00 Uhr</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gyros-blue">Freitag</dt>
                  <dd>11:30 – 23:30 Uhr</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gyros-blue">Samstag</dt>
                  <dd>12:00 – 23:30 Uhr</dd>
                </div>
                <div>
                  <dt className="font-semibold text-gyros-blue">Sonntag</dt>
                  <dd>12:00 – 21:30 Uhr</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-gyros-blue via-gyros-clay to-gyros-olive p-[1px] shadow-2xl shadow-gyros-blue/20">
              <div className="flex flex-col gap-6 rounded-[calc(1.5rem-2px)] bg-white/95 p-8">
                <h3 className="text-2xl font-semibold text-gyros-blue">So finden Sie uns</h3>
                <p className="text-sm text-gyros-blue/80">
                  Plaka-Platz 8, 50670 Köln · Direkt neben dem Mediapark · 0221 1234567
                </p>
                <div className="overflow-hidden rounded-2xl">
                  <iframe
                    title="Karte Gyros Agora"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.838803150052!2d6.94445!3d50.942415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2467a9644099%3A0x67afebd0e0a82c4!2sMediaPark%2C%2050670%20K%C3%B6ln!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                    className="h-60 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gyros-blue py-12 text-white">
        <div className="section-container flex flex-col items-center gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Gyros Agora</p>
          <p className="max-w-2xl text-base text-white/80">
            Authentisches Gyros, lebendige Atmosphäre und ein herzliches Team. Wir freuen uns auf Ihren Besuch!
          </p>
          <div className="flex gap-6 text-sm">
            <a className="transition hover:text-white" href="#warum">
              Über uns
            </a>
            <a className="transition hover:text-white" href="#menue">
              Speisekarte
            </a>
            <a className="transition hover:text-white" href="#reservierung">
              Reservieren
            </a>
          </div>
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Gyros Agora. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </main>
  );
}
