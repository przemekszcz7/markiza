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
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/683649875_1595579829233894_4824534407266987017_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0Zv_pN3ZKCQQ7kNvwEQfiK8&_nc_oc=AdomWi5NoWFSHBfl-m1kfOgg_JUoDvbv6eIZrTXES-mnoxVT_e-P7M_rnV4GRD_XeLQ&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=GveGEYHg6izDxn-Pe9-JbQ&_nc_ss=7b2a8&oh=00_Af2bQjuJmLAwrEfeMBcMEYU1cZpebHK1hruoeHXCjmIp5Q&oe=69F5088A",
    desc: "Lemonade Espresso to orzeźwiająca kawa z syropem cytrynowym i świeżą cytryną 🍋",
    title: "Lemonade Espresso"
  },
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/681260477_1594658669326010_2498717466957861456_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Zh81AClUxLkQ7kNvwEbflZ3&_nc_oc=AdoEajHzcXeWc2x9BJM1GKy7F-HBrXTWwZjNXNNdlKb65pUx7intm_fDxpZcyR5hvWo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=3ZeRW91bCTQd4EnfmBLnbA&_nc_ss=7b2a8&oh=00_Af0EFMLa3G_7LpXTscHYD9E4YKgq5ghbWRed_9el-CgQ8g&oe=69F51E07",
    desc: "Na zdjęciu gofr z konfiturą jagodową, bitą śmietaną oraz świeżymi owocami. 🍓To u Nas skomponujesz gofra takiego jak lubisz!",
    title: "Gofry z Owocami"
  },
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/682928931_1594589659332911_7032648028340143929_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=LhKD9-EtccUQ7kNvwHgCFFU&_nc_oc=AdqQZrczWIriurzEA8shIkukbKvP04NVYwh25jhI8Q3H9VogYzSe19xjk1fucvEbK-E&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=o-cTfuQycdEEoLJs7wrxgA&_nc_ss=7b2a8&oh=00_Af2mq8u1N8zPmn-_40a-dUWXcw55ZqtVqksVsQHppscJfg&oe=69F52466",
    desc: "Sernik na gorąco z Malinami 😋 Gorący sernik, sos malinowy i sos czekoladowy oraz gałki lodów waniliowych i świeże owoce idealnie umilą niedzielne popołudnie",
    title: "Sernik na gorąco"
  },
  {
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/679424369_1592785366180007_1638724006973957729_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=fI-SZwUMk_MQ7kNvwEdYaIg&_nc_oc=Adogum8C19js3E3TuBqEsjHrIotQaxv2LGS2eKmm4pqJxmYGbRay6_k5oO1ITtyjuyo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=rOahe7pQYSHjBYdBjRueCQ&_nc_ss=7b2a8&oh=00_Af25HvTQX7hhoNc6a7ba3yj2M9g9viEob7X2bZOO8F5jRQ&oe=69F5208C",
    desc: "Rogaliki Drożdżowe z Jagodą",
    title: "Rogaliki Drożdżowe"
  },
  {
    url: "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/678536988_1590885323036678_4262863280828019116_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=4byh5myejPUQ7kNvwFdJE5h&_nc_oc=Adq2PD5fRxhlA36epzgbCnsRv20YKuok4y_uG2OZ5Tfyp8CqopJGimfHGUWTnOvi1eA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=hfX_9TTFbvZRJUHFX_U-6A&_nc_ss=7b2a8&oh=00_Af3uaN38OC8bIRBDleEn7-OiF3zpcEWE5rT5OnsSIB8fQQ&oe=69F51CAB",
    desc: "W ofercie wiosennej pojawiła się również Nasza kultowa kawa mrożona Kawa mrożona jest na bazie jednej dawki espresso oraz mleka bez laktozy. Dodatkiem jest polewa czekoladowa i karmelowa, gałka loda waniliowego, bita śmietana oraz słodkie dodatki!😋",
    title: "Kawa Mrożona"
  },
  {
    url: "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/675038926_1590889396369604_8198700547446750299_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=pXzw29mkbNsQ7kNvwG_DHsE&_nc_oc=AdrbKdxrdAGq6r39h2PURFHW4sH6Ao6qaC7OOmGmCoJcZpa5zUpidbyopNSu6d4n0e4&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=iuvX6zSMyJY-7qndzQNQow&_nc_ss=7b2a8&oh=00_Af3Qm2uyS6KKJCxE_u8OyA9-7BDmo9ZzZNZyHJPZjFpYTw&oe=69F502F9",
    desc: "Nasze pyszne słodkości zapraszają!",
    title: "Słodkie Momenty"
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-coffee/20 z-10" />
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAG-l6ED5mMRiFckL7rGe-PDwM7UGjAR_3LKDUkdmky60Uv6Ji5CEfUDQPf8TlYriCjtbL5XCCyJSZp4V3AyYHatx2-YoY4RXrMPTsUnwfv-qFHPIIOZh-lG6n9pb1mzdaFHuslh=s2000"
            className="w-full h-full object-cover scale-105"
            alt="Kawiarnia Markiza"
          />
        </div>
        
        <div className="relative z-20 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-xs uppercase tracking-[0.3em] font-medium mb-6">
              Zapraszamy do Kawiarni Markiza
            </span>
            <h2 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
              Prawdziwe Lody<br />
              <span className="italic">100% Naturalne</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-12 font-light leading-relaxed">
              Zapraszamy na pyszne ciasta, kawę, koktajle, shaki, torty oraz lody własnej produkcji. Tradycyjny smak w sercu Trzebnicy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => scrollTo("gallery")}
                className="px-10 py-4 bg-white text-brand-coffee rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                Zobacz Galerię
              </button>
              <a 
                href="tel:797935378"
                className="flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-coffee transition-all"
              >
                <Phone size={18} /> 797 935 378
              </a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Featured Offers */}
      <section id="gallery" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-brand-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Nasza galeria</span>
              <h3 className="text-4xl md:text-5xl font-serif leading-tight">Wyjątkowe smaki, które zostają w pamięci.</h3>
            </div>
            <p className="md:max-w-xs text-sm text-brand-coffee/60 leading-relaxed">
              Każdego dnia przygotowujemy dla Państwa świeże wypieki i lody, dbając o najwyższą jakość składników.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {GALLERY_ITEMS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
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
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                      <ChevronRight />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                <p className="text-sm text-brand-coffee/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section id="announcements" className="py-32 bg-brand-soft-green/30 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 bg-white rounded-[3rem] border border-brand-coffee/5 shadow-2xl shadow-brand-soft-green/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-soft-green/50 blur-3xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Info size={14} /> Ogłoszenie
              </span>
              <h3 className="text-4xl md:text-5xl font-serif mb-6">Praca w Weekendy</h3>
              <p className="text-xl text-brand-coffee/80 mb-10 leading-relaxed font-light">
                ZATRUDNIĘ OSOBĘ DO PRACY <br className="hidden md:block"/>W WEEKENDY
              </p>
              <div className="inline-flex items-center gap-4 p-4 bg-brand-cream border border-brand-coffee/10 rounded-2xl">
                <Phone className="text-brand-accent" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-brand-coffee/50">Kontakt w sprawie pracy</p>
                  <p className="text-lg font-bold">603 262 837</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Grid */}
      <section id="hours" className="py-32 px-6 bg-brand-coffee text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-soft-green font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Kiedy nas odwiedzić?</span>
              <h3 className="text-5xl md:text-6xl font-serif mb-12">Godziny otwarcia</h3>
              
              <div className="space-y-4">
                {OPENING_HOURS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-brand-cream/10 group hover:border-brand-soft-green transition-colors">
                    <span className="text-lg font-serif">{item.day}</span>
                    <span className={idx >= 5 ? "font-bold text-brand-soft-green" : "opacity-70"}>{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-brand-cream/5 rounded-[2rem] border border-brand-cream/10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-brand-soft-green rounded-2xl flex items-center justify-center text-brand-coffee">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-1">Pyszne śniadania i desery</h4>
                    <p className="text-sm opacity-60">Zacznij dzień z naszą kawą i świeżymi rogalikami.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-[3rem] rotate-3" />
              <img 
                src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/675080680_1590056499786227_8770093856200927578_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Jd2X3y6tozQQ7kNvwHI6Ds0&_nc_oc=Adrh86TG3j1n93zUkfHNkXhKkPHnDIT8y7NYlFwtBY0lb9pLURo2LhGeYlMnPoePiEE&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ve75c3jiAJ2uqWcnpf5P0Q&_nc_ss=7b2a8&oh=00_Af0ox2tsm2OmMulhHThEM60e00gBOVjSXSWpx1Ymg_nyyg&oe=69F5024A" 
                className="absolute inset-0 w-full h-full object-cover rounded-[3rem] -rotate-3 hover:rotate-0 transition-transform duration-700"
                alt="Wnętrze Kawiarni Markiza"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-[2rem] text-brand-coffee shadow-2xl hidden md:block max-w-xs">
                <IceCream className="text-brand-accent mb-4" />
                <p className="font-serif italic text-lg leading-snug">"Nasze lody własnej produkcji to powrót do natury i prawdziwego smaku."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-4xl font-serif mb-8 text-brand-coffee">Znajdź nas w Trzebnicy</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                      <MapPin />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-brand-coffee/40 mb-1">Adres</p>
                      <p className="text-lg">ul. Ks. Dz. W. Bochenka 49,<br />Trzebnica 55-100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                      <Phone />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-brand-coffee/40 mb-1">Zadzwoń do nas</p>
                      <p className="text-lg font-bold">797 935 378</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
                      <Mail />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-brand-coffee/40 mb-1">Napisz e-mail</p>
                      <p className="text-lg border-b border-brand-coffee/20 pb-1">kawiarnia.markiza@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-blue-50 rounded-[2rem] border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Facebook /> Odwiedź nas na Facebooku
                </h4>
                <p className="text-blue-800/70 mb-8 text-sm">Bądź na bieżąco z naszymi nowościami, promocjami i ofertami sezonowymi.</p>
                <a 
                  href="https://www.facebook.com/kawiarnia.markiza" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-sm tracking-widest hover:bg-blue-700 transition-colors uppercase"
                >
                  Facebook <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 h-[500px] lg:h-auto min-h-[400px] map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d311.76724080504795!2d17.064846095756774!3d51.3085867145127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ff25bd15a4251%3A0x75319b161cfb7b!2sMarkiza!5e0!3m2!1spl!2spl!4v1777285980812!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
