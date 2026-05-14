"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, ArrowRight, ShieldCheck, Sparkles, Droplets } from "lucide-react";
import ThreeCanvas from "@/components/ThreeCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background 3D Canvas */}
      <ThreeCanvas />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-skin-50/70 backdrop-blur-md border-b border-skin-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Dermanova Logo" className="h-12 w-auto mr-3" />
            <div className="flex flex-col">
              <div className="font-playfair text-xl sm:text-2xl font-bold tracking-widest text-brand-brown leading-none mb-1">
                DERMANOVA <span className="font-normal sm:text-xl">Skin Clinic</span>
              </div>
              <div className="text-[0.55rem] sm:text-[0.65rem] font-bold tracking-[0.2em] text-brand-brown/80 leading-none">
                SKIN | HAIR | LASER
              </div>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-skin-700">
            <a href="#about" className="hover:text-brand-brown transition-colors">About</a>
            <a href="#services" className="hover:text-brand-brown transition-colors">Services</a>
            <a href="#reviews" className="hover:text-brand-brown transition-colors">Reviews</a>
            <a href="#location" className="hover:text-brand-brown transition-colors">Location</a>
          </div>
          <button className="bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-skin-100 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-skin-800">5.0 Top Rated Dermatologist</span>
            </div>
            <h1 className="font-outfit text-5xl md:text-7xl font-bold text-skin-900 leading-tight mb-6">
              Reveal Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-brown to-primary-500">
                Natural Radiance
              </span>
            </h1>
            <p className="text-lg text-skin-700 mb-8 max-w-lg leading-relaxed">
              Expert dermatological care tailored to your unique skin. Experience advanced treatments in a modern, soothing environment.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-skin-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-skin-800 transition-all flex items-center justify-center group">
                Explore Treatments
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-skin-900 border border-skin-200 px-8 py-4 rounded-full font-semibold hover:bg-skin-50 transition-all flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* We can use a colored shape or image placeholder here */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-skin-300 to-skin-100" />
              <img 
                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-skin-100"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <ShieldCheck className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="font-bold text-skin-900">Certified</p>
                  <p className="text-sm text-skin-600">Expert Dermatologists</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features/About Section */}
      <section id="about" className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-3xl md:text-5xl font-bold text-skin-900 mb-4">Why Choose Dermanova?</h2>
            <p className="text-skin-600 max-w-2xl mx-auto">We combine advanced medical technology with a holistic approach to skin health, ensuring the best possible results for our patients.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Advanced Aesthetics", desc: "State-of-the-art treatments for glowing, youthful skin." },
              { icon: ShieldCheck, title: "Medical Dermatology", desc: "Expert diagnosis and treatment for all skin conditions." },
              { icon: Droplets, title: "Personalized Care", desc: "Custom skincare regimens designed just for you." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-skin-50 p-8 rounded-3xl border border-skin-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-skin-900 mb-3">{feature.title}</h3>
                <p className="text-skin-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-skin-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-3xl md:text-5xl font-bold text-brand-brown mb-4">Our Services</h2>
            <p className="text-skin-700 max-w-2xl mx-auto text-lg">Comprehensive dermatological and aesthetic treatments customized for your unique needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chemical Peels",
                items: ["Pimples", "Anti-Aging", "Underarm Pigmentation", "Neck Pigmentation", "Lip & Under Eye Pigmentation"],
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Regenerative Treatments",
                items: ["PRP", "GFC", "QR678", "Mesotherapy", "Exosomes", "Microneedling"],
                image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Lasers",
                items: ["Laser Hair Reduction", "Laser Toning", "Tattoo Removal", "Fractional RF", "MNRF (for Scars, Rejuvenation)", "Carbon Laser Peel", "Stretch Marks"],
                image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Cautery",
                items: ["Skin Tag Removal", "Wart Removal", "Mole Removal"],
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Additional Services",
                items: ["IV Glutathione", "Earlobe Repair", "BOTOX", "Fillers", "Skin Boosters"],
                image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-skin-200 hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-brown/20 mix-blend-multiply z-10 transition-opacity group-hover:opacity-0" />
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-outfit text-2xl font-bold text-brand-brown mb-4">{service.title}</h3>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start text-skin-700">
                        <span className="text-brand-brown mr-2 mt-1">•</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="text-brand-brown font-semibold flex items-center group-hover:text-amber-700 transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-brand-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div>
              <h2 className="font-outfit text-3xl md:text-5xl font-bold mb-4">Patient Stories</h2>
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-semibold text-skin-200">5.0 Overall Rating</span>
              </div>
            </div>
            <button className="mt-6 md:mt-0 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-colors font-medium border border-white/10 backdrop-blur-sm">
              Write a Review
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-3xl max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center font-bold text-xl">
                L
              </div>
              <div>
                <h4 className="font-bold text-lg">Lawrence E Benjamin</h4>
                <p className="text-sm text-skin-300">1 review • a week ago</p>
              </div>
            </div>
            <div className="flex text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-lg text-skin-100 leading-relaxed italic">
              "Exceptional service at Dermanova. The clinic is incredibly clean and modern. The dermatologist was very thorough in explaining my treatment plan. Highly recommend for anyone looking for professional skin care in Nemom!"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-skin-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-outfit text-3xl md:text-5xl font-bold text-skin-900 mb-6">Visit Our Clinic</h2>
              <p className="text-skin-700 text-lg mb-10">
                Conveniently located in Santhivila. We've designed our clinic to provide a relaxing and welcoming environment from the moment you walk in.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-skin-100">
                  <div className="bg-primary-50 p-3 rounded-xl mt-1">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-skin-900 mb-1">Address</h4>
                    <p className="text-skin-600">FX3X+QW5, Vellayani Punnamoodu Road,<br/>Santhivila, Nemom, Kerala 695020</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-skin-100">
                  <div className="bg-primary-50 p-3 rounded-xl mt-1">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-skin-900 mb-1">Hours</h4>
                    <p className="text-skin-600">Mon-Sat: 9:00 AM - 7:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] bg-skin-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white relative"
            >
              {/* Embed Google Map iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15785.1234!2d76.994!3d8.472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjgnMTkuMiJOIDc2wrA1OSczOC40IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold hover:bg-skin-50 transition-colors">
                  Save
                </button>
                <button className="bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold hover:bg-skin-50 transition-colors text-primary-600">
                  Directions
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-brand-brown text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <img src="/images/logo.png" alt="Dermanova Logo" className="h-14 w-auto mr-3 opacity-100" />
              <div className="flex flex-col">
                <div className="font-playfair text-2xl font-bold tracking-widest text-white leading-none mb-1">
                  DERMANOVA <span className="font-normal text-xl">Skin Clinic</span>
                </div>
                <div className="text-[0.65rem] font-bold tracking-[0.2em] text-white/80 leading-none">
                  SKIN | HAIR | LASER
                </div>
              </div>
            </div>
            <p className="max-w-md">Leading dermatology clinic in Nemom, Kerala. We combine expertise with advanced treatments for your optimal skin health.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#treatments" className="hover:text-primary-400 transition-colors">Treatments</a></li>
              <li><a href="#reviews" className="hover:text-primary-400 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
              <li><a href="/login" className="text-white/60 hover:text-white transition-colors pt-4 inline-block">Staff Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors border border-white/10 mb-4 w-full">
              Claim this business
            </button>
            <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors border border-white/10 w-full">
              Suggest an edit
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-sm text-center">
          &copy; {new Date().getFullYear()} Dermanova Skin Clinic. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
