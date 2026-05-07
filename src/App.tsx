/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Clock, 
  IceCream, 
  Coffee, 
  Cake, 
  Info,
  ChevronRight,
  ExternalLink,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const GALLERY_ITEMS = [
  {
    url: "https://iili.io/BZD7tp4.md.jpg",
    desc: "Lemonade Espresso to orzeźwiająca kawa z syropem cytrynowym i świeżą cytryną 🍋",
    title: "Lemonade Espresso"
  },
  {
    url: "https://iili.io/BZD7pQS.md.jpg",
    desc: "Na zdjęciu gofr z konfiturą jagodową, bitą śmietaną oraz świeżymi owocami. 🍓To u Nas skomponujesz gofra takiego jak lubisz!",
    title: "Gofry z Owocami"
  },
  {
    url: "https://iili.io/BZDY9C7.md.jpg",
    desc: "Sernik na gorąco z Malinami 😋 Gorący sernik, sos malinowy i sos czekoladowy oraz gałki lodów waniliowych i świeże owoce idealnie umilą niedzielne popołudnie",
    title: "Sernik na gorąco"
  },
  {
    url: "https://iili.io/BZD7bTl.md.jpg",
    desc: "Rogaliki Drożdżowe z Jagodą",
    title: "Rogaliki Drożdżowe"
  },
  {
    url: "https://iili.io/BZDY23u.md.jpg",
    desc: "W ofercie wiosennej pojawiła się również Nasza kultowa kawa mrożona Kawa mrożona jest na bazie jednej dawki espresso oraz mleka bez laktozy. Dodatkiem jest polewa czekoladowa i karmelowa, gałka loda waniliowego, bita śmietana oraz słodkie dodatki!😋",
    title: "Kawa Mrożona"
  },
  {
    url: "https://iili.io/BZDY3Yb.md.jpg",
    desc: "Nasze pyszne słodkości zapraszają!",
    title: "Słodkie Momenty"
  },
  {
    url: "https://iili.io/BZDYFvj.md.jpg",
    desc: "Torty na każdą okazję",
    title: "Nasze Wypieki"
  },
  {
    url: "https://iili.io/BZDYKyx.md.jpg",
    desc: "Idealne desery lodowe",
    title: "Lody Naturalne"
  },
  {
    url: "https://iili.io/BZDlhAJ.md.jpg",
    desc: "Latte z musem ze świeżych malin oraz syropem malinowym",
    title: "Latte Malinowe"
  }
];

const OPENING_HOURS = [
  { day: "Poniedziałek", hours: "12:00 - 19:00" },
  { day: "Wtorek", hours: "08:00 - 19:00" },
  { day: "Środa", hours: "08:00 - 19:00" },
  { day: "Czwartek", hours: "08:00 - 19:00" },
  { day: "Piątek", hours: "08:00 - 19:00" },
  { day: "Sobota", hours: "07:00 - 20:00" },
  { day: "Niedziela", hours: "09:00 - 20:00" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-coffee/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <h1 className="text-xl font-bold tracking-tight uppercase">
              Kawiarnia <span className="text-brand-accent">Markiza</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <button onClick={() => scrollTo("gallery")} className="hover:text-brand-accent transition-colors">Galeria</button>
            <button onClick={() => scrollTo("announcements")} className="hover:text-brand-accent transition-colors">Ogłoszenia</button>
            <button onClick={() => scrollTo("hours")} className="hover:text-brand-accent transition-colors">Godziny</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-brand-accent transition-colors px-6 py-2 border border-brand-coffee rounded-full hover:bg-brand-coffee hover:text-brand-cream transition-all">Kontakt</button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-cream pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-serif">
              <button onClick={() => scrollTo("gallery")}>Galeria</button>
              <button onClick={() => scrollTo("announcements")}>Ogłoszenia</button>
              <button onClick={() => scrollTo("hours")}>Godziny Otwarcia</button>
              <button onClick={() => scrollTo("contact")}>Kontakt</button>
              <a 
                href="https://www.facebook.com/kawiarnia.markiza" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-600 border-t pt-8"
              >
                <Facebook /> Facebook
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12">
        {/* Floating background elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-soft-green/20 blur-[100px] rounded-full"
        />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-coffee/20 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAG-l6ED5mMRiFckL7rGe-PDwM7UGjAR_3LKDUkdmky60Uv6Ji5CEfUDQPf8TlYriCjtbL5XCCyJSZp4V3AyYHatx2-YoY4RXrMPTsUnwfv-qFHPIIOZh-lG6n9pb1mzdaFHuslh=s2000"
            className="w-full h-full object-cover"
            alt="Kawiarnia Markiza"
          />
        </div>
        
        <div className="relative z-20 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ delay: 0.2, duration: 1 }}
              className="inline-block px-4 py-1 border border-white/30 rounded-full text-xs uppercase font-medium mb-6"
            >
              Zapraszamy do Kawiarni Markiza
            </motion.span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-6 md:mb-8 leading-tight">
              Prawdziwe Lody<br />
              <span className="italic">100% Naturalne</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-white/90 mb-10 md:mb-12 font-light leading-relaxed">
              Zapraszamy na pyszne ciasta, kawę, koktajle, shaki, torty oraz lody własnej produkcji. Tradycyjny smak w sercu Trzebnicy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("gallery")}
                className="px-10 py-4 bg-white text-brand-coffee rounded-full font-bold uppercase tracking-widest text-sm shadow-xl"
              >
                Zobacz Galerię
              </motion.button>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)", color: "#4a3728" }}
                whileTap={{ scale: 0.95 }}
                href="tel:797935378"
                className="flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-white rounded-full font-bold uppercase tracking-widest text-sm transition-all"
              >
                <Phone size={18} /> 797 935 378
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Offers */}
      <section id="gallery" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-xl">
              <span className="text-brand-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Nasza galeria</span>
              <h3 className="text-4xl md:text-5xl font-serif leading-tight">Wyjątkowe smaki, które zostają w pamięci.</h3>
            </div>
            <p className="md:max-w-xs text-sm text-brand-coffee/60 leading-relaxed">
              Każdego dnia przygotowujemy dla Państwa świeże wypieki i lody, dbając o najwyższą jakość składników.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
          >
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 }
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.url)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6 shadow-xl shadow-brand-coffee/5">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-coffee/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30"
                    >
                      <ChevronRight />
                    </motion.div>
                  </div>
                </div>
                <h4 className="text-xl font-serif mb-2 group-hover:text-brand-accent transition-colors">{item.title}</h4>
                <p className="text-sm text-brand-coffee/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Announcement Section */}
      <section id="announcements" className="py-32 bg-brand-soft-green/30 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="p-12 md:p-20 bg-white rounded-[3rem] border border-brand-coffee/5 shadow-2xl shadow-brand-soft-green/50 relative overflow-hidden"
          >
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 w-32 h-32 bg-brand-soft-green/50 blur-3xl -mr-10 -mt-10" 
            />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Info size={14} /> Ogłoszenie
              </span>
              <h3 className="text-4xl md:text-5xl font-serif mb-6">Praca w Weekendy</h3>
              <p className="text-xl text-brand-coffee/80 mb-10 leading-relaxed font-light">
                ZATRUDNIĘ OSOBĘ DO PRACY <br className="hidden md:block"/>W WEEKENDY
              </p>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-4 p-4 bg-brand-cream border border-brand-coffee/10 rounded-2xl cursor-pointer"
              >
                <Phone className="text-brand-accent animate-pulse" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-brand-coffee/50">Kontakt w sprawie pracy</p>
                  <p className="text-lg font-bold">603 262 837</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Grid */}
      <section id="hours" className="py-32 px-6 bg-brand-coffee text-brand-cream relative overflow-hidden">
        {/* Animated accent lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear", delay: i * 3 }}
              className="h-px w-1/2 bg-gradient-to-r from-transparent via-brand-soft-green to-transparent mt-[20vh]"
              style={{ top: `${i * 20}%` }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-soft-green font-bold uppercase tracking-[0.2em] text-xs mb-6 block"
              >
                Kiedy nas odwiedzić?
              </motion.span>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-serif mb-12"
              >
                Godziny otwarcia
              </motion.h3>
              
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="space-y-4"
              >
                {OPENING_HOURS.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 }
                    }}
                    className="flex justify-between items-center py-4 border-b border-brand-cream/10 group hover:border-brand-soft-green transition-colors"
                  >
                    <span className="text-lg font-serif group-hover:translate-x-2 transition-transform duration-300">{item.day}</span>
                    <span className={idx >= 5 ? "font-bold text-brand-soft-green" : "opacity-70"}>{item.hours}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 p-8 bg-brand-cream/5 rounded-[2rem] border border-brand-cream/10"
              >
                <div className="flex items-center gap-6">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-brand-soft-green rounded-2xl flex items-center justify-center text-brand-coffee"
                  >
                    <Clock size={32} />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-serif mb-1">Pyszne śniadania i desery</h4>
                    <p className="text-sm opacity-60">Zacznij dzień z naszą kawą i świeżymi rogalikami.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative aspect-square">
              <motion.div 
                animate={{ rotate: [3, 4, 3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-brand-accent/20 rounded-[3rem]" 
              />
              <motion.img 
                initial={{ scale: 1.1, rotate: -5 }}
                whileInView={{ scale: 1, rotate: -3 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src="https://iili.io/BZDlhAJ.md.jpg" 
                className="absolute inset-0 w-full h-full object-cover rounded-[3rem] hover:rotate-0 transition-transform duration-700"
                alt="Wnętrze Kawiarni Markiza"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-10 -right-10 bg-white p-8 rounded-[2rem] text-brand-coffee shadow-2xl hidden md:block max-w-xs"
              >
                <IceCream className="text-brand-accent mb-4" />
                <p className="font-serif italic text-lg leading-snug">"Nasze lody własnej produkcji to powrót do natury i prawdziwego smaku."</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section id="contact" className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-serif mb-8 text-brand-coffee">Znajdź nas w Trzebnicy</h3>
                <div className="space-y-8">
                  {[
                    { icon: <MapPin />, label: "Adres", value: <>ul. Ks. Dz. W. Bochenka 49,<br />Trzebnica 55-100</> },
                    { icon: <Phone />, label: "Zadzwoń do nas", value: "797 935 378" },
                    { icon: <Mail />, label: "Napisz e-mail", value: "kawiarnia.markiza@gmail.com" }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 transition-transform"
                    >
                      <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs uppercase font-bold text-brand-coffee/40 mb-1">{item.label}</p>
                        <p className={idx === 2 ? "text-lg border-b border-brand-coffee/20 pb-1" : "text-lg font-bold"}>
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 bg-blue-50 rounded-[2rem] border border-blue-100 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Facebook /> Odwiedź nas na Facebooku
                  </h4>
                  <p className="text-blue-800/70 mb-8 text-sm">Bądź na bieżąco z naszymi nowościami, promocjami i ofertami sezonowymi.</p>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.facebook.com/kawiarnia.markiza" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-sm tracking-widest hover:bg-blue-700 transition-colors uppercase shadow-lg shadow-blue-500/30"
                  >
                    Facebook <ExternalLink size={14} />
                  </motion.a>
                </div>
                {/* Decorative facebook icon background */}
                <Facebook className="absolute bottom-0 right-0 w-32 h-32 -mb-10 -mr-10 text-blue-200 opacity-20" />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 h-[500px] lg:h-auto min-h-[400px] map-container shadow-2xl shadow-brand-coffee/10"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311.76724080504795!2d17.064846095756774!3d51.3085867145127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ff25bd15a4251%3A0x75319b161cfb7b!2sMarkiza!5e0!3m2!1spl!2spl!4v1777285980812!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-20 border-t border-brand-coffee/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div>
              <p className="font-bold uppercase tracking-widest text-sm">Kawiarnia Markiza</p>
              <p className="text-[10px] text-brand-coffee/50 uppercase tracking-widest">Tradycja • Smak • Jakość</p>
            </div>
          </div>
          
          <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold text-brand-coffee/60">
            <button onClick={() => scrollTo("gallery")} className="hover:text-brand-accent">Galeria</button>
            <button onClick={() => scrollTo("announcements")} className="hover:text-brand-accent">Ogłoszenia</button>
            <button onClick={() => scrollTo("hours")} className="hover:text-brand-accent">Godziny</button>
          </div>

          <p className="text-[10px] text-brand-coffee/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Kawiarnia Markiza. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-brand-coffee/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                alt="Zoomed view"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-top-4 md:-right-12 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all font-bold"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
