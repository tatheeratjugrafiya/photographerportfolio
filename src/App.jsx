import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Camera, Mail, Menu, X, ChevronRight } from 'lucide-react';
import { FaInstagram } from "react-icons/fa6";

// Local portfolio images
import bikesImg from './assets/bikes.jpeg';
import bikes2Img from './assets/bikes2.jpeg';
import bikes3Img from './assets/bikes3.jpeg';
import bikes4Img from './assets/bikes4.jpeg';
import bikes5Img from './assets/bikes5.jpeg';
import carsImg from './assets/cars.jpeg';
import coupleImg from './assets/couple.jpeg';
import couple1Img from './assets/couple1.jpeg';
import event1Img from './assets/event1.jpeg';
import event2Img from './assets/event2.jpeg';
import event3Img from './assets/event3.jpeg';
import event4Img from './assets/event4.jpeg';
import event5Img from './assets/event5.jpeg';
import event6Img from './assets/event6.jpeg';
import event7Img from './assets/event7.jpeg';
import event8Img from './assets/event8.jpeg';
import event9Img from './assets/event9.jpeg';
import event10Img from './assets/event10.jpeg';
import modelPhotoshootImg from './assets/modelphotoshoot.jpeg';
import hamzasprofilepicImg from './assets/Hamzasprofilepic.jpeg';

const portfolioImages = [
  { id: 1, url: coupleImg, category: 'Portrait', title: 'Golden Hour Couple' },
  { id: 2, url: couple1Img, category: 'Portrait', title: 'Forest Embrace' },
  { id: 3, url: modelPhotoshootImg, category: 'Fashion', title: 'Urban Elegance' },
  { id: 4, url: bikesImg, category: 'Automotive', title: 'Urban Cruiser' },
  // { id: 5, url: bikes2Img, category: 'Automotive', title: 'Urban Cruiser' },
  // { id: 6, url: bikes3Img, category: 'Automotive', title: 'Sunset Ride' },
  // { id: 7, url: bikes4Img, category: 'Automotive', title: 'Desert Biking' },
  // { id: 8, url: bikes5Img, category: 'Automotive', title: 'Mountain Trail Ride' },
  { id: 9, url: carsImg, category: 'Automotive', title: 'Classic Sports Car' },
  { id: 10, url: event1Img, category: 'Events', title: 'Wedding Reception Decor' },
  { id: 11, url: event2Img, category: 'Events', title: 'Grand Venue Setup' },
  { id: 12, url: event3Img, category: 'Events', title: 'Candlelit Dinner Event' },
  { id: 13, url: event4Img, category: 'Events', title: 'Wedding' },
  { id: 14, url: event5Img, category: 'Events', title: 'Babyshower' },
  { id: 15, url: event6Img, category: 'Events', title: 'Rustic Outdoor Reception' },
  // { id: 16, url: event7Img, category: 'Events', title: 'Cocktail Gala Setting' },
  // { id: 17, url: event8Img, category: 'Events', title: 'Table Settings & Details' },
  // { id: 18, url: event9Img, category: 'Events', title: 'Gala Lighting Setup' },
  { id: 19, url: event10Img, category: 'Events', title: 'Modern Reception Hall' },
];

const PhotographerPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const categories = [
    'All',
    // 'Portrait',
    // 'Landscape', // Commented down as no data exists for this filter in the new images
    'Fashion',
    'Events',
    'Automotive'
  ];

  const filteredImages = selectedCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Camera className="w-7 h-7 text-amber-700" strokeWidth={1.5} />
              <span className="font-serif text-2xl text-stone-900 tracking-tight">Hamza Riaz</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {['Work', 'About', 'Services', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  whileHover={{ y: -2 }}
                  className="text-stone-700 hover:text-amber-700 transition-colors font-light tracking-wide"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-stone-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-stone-200/50"
            >
              <div className="px-6 py-4 space-y-4">
                {['Work', 'About', 'Services', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-stone-700 hover:text-amber-700 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 bg-amber-100/60 rounded-full text-sm tracking-widest text-amber-900 font-light mb-8">
              VISUAL STORYTELLER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-stone-900 mb-8 leading-none tracking-tight"
          >
            Capturing
            <br />
            <span className="italic text-amber-800">Moments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-xl md:text-2xl text-stone-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Aspiring photographer specializing in editorial portraits,
            fashion photography, and cinematic landscapes
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, backgroundColor: '#78350f' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-amber-900 text-white rounded-full font-light tracking-wide flex items-center gap-2 shadow-lg shadow-amber-900/20"
            >
              View Portfolio
              <ChevronRight className="w-4 h-4" />
            </motion.button>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-stone-300 text-stone-900 rounded-full font-light tracking-wide hover:border-amber-700 hover:text-amber-700 transition-colors"
            >
              Get in Touch
            </motion.button> */}
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200/30 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-stone-200/40 to-transparent blur-3xl"
        />
      </section>

      {/* Portfolio Grid Section */}
      <section id="work" className="py-24 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6 tracking-tight">
              Selected <span className="italic text-amber-800">Works</span>
            </h2>
            <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
              A curated collection of my favorite captures from recent projects
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full font-light tracking-wide transition-all ${selectedCategory === category
                  ? 'bg-amber-900 text-white shadow-lg shadow-amber-900/20'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-amber-700'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group shadow-xl shadow-stone-900/10"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent flex flex-col justify-end p-8 transition-opacity"
                  >
                    <p className="text-amber-400 text-sm tracking-widest mb-2 font-light">
                      {image.category}
                    </p>
                    <h3 className="text-white text-2xl font-serif tracking-tight">
                      {image.title}
                    </h3>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-700 tracking-widest text-sm font-light mb-4 block">
                ABOUT ME
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8 tracking-tight">
                Creating Art Through the Lens
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-6 font-light">
                As an aspiring photographer, I am dedicated to capturing the beauty in everyday
                moments and transforming them into timeless visual memories.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light">
                Based in Hamilton, New Zealand, I am constantly exploring new perspectives,
                honing my craft, and learning the nuances of lighting and composition to create compelling stories.
              </p>
              <div className="flex gap-6">
                <motion.a
                  href="https://instagram.com/hamzariaz_photography"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 hover:bg-amber-900 hover:text-white transition-colors"
                >
                  <FaInstagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:Hriaz2k@gmail.com"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 hover:bg-amber-900 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="h-fit">
                <img
                  src={hamzasprofilepicImg}
                  alt="Hamza Riaz"
                  className="w-full h-full object-cover rounded-3xl -translate-y-[29px] bg-green-500"
                />
              </div>
              {/* <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-400 rounded-full blur-2xl opacity-50"
              /> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6 tracking-tight">
              What I <span className="italic text-amber-800">Offer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Portrait Photography',
                description: 'Professional headshots and personal branding sessions that capture your unique essence',
                icon: '📸'
              },
              {
                title: 'Fashion Editorial',
                description: 'Creative fashion photography for magazines, brands, and lookbooks',
                icon: '👗'
              },
              {
                title: 'Landscape & Travel',
                description: 'Breathtaking landscape photography and travel documentation',
                icon: '🌄'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-10 shadow-xl shadow-stone-900/5 hover:shadow-2xl hover:shadow-stone-900/10 transition-all border border-stone-100"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="font-serif text-2xl text-stone-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-amber-50 to-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl text-stone-900 mb-8 tracking-tight">
              Let's Create <span className="italic text-amber-800">Together</span>
            </h2>
            <p className="text-stone-600 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'd love to hear about your project
              and discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mb-12 text-stone-850 font-light tracking-wide">
              <a href="mailto:Hriaz2k@gmail.com" className="hover:text-amber-800 transition-colors flex items-center gap-2">
                <span className="text-stone-500">Email:</span> Hriaz2k@gmail.com
              </a>
              <a href="tel:02904301280" className="hover:text-amber-800 transition-colors flex items-center gap-2">
                <span className="text-stone-500">Phone:</span> 02904301280
              </a>
              <span className="flex items-center gap-2 text-stone-600">
                <span className="text-stone-500">Location:</span> Hamilton, New Zealand
              </span>
            </div>
            <motion.a
              href="mailto:Hriaz2k@gmail.com"
              whileHover={{ scale: 1.05, backgroundColor: '#78350f' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-amber-900 text-white rounded-full font-light tracking-wide text-lg shadow-xl shadow-amber-900/20"
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Camera className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
            <span className="font-serif text-xl tracking-tight">Hamza Riaz</span>
          </div>
          <p className="text-stone-400 font-light mb-6">
            © 2024 Hamza Riaz Photography. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/hamzariaz_photography" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">Behance</a>
            <a href="mailto:Hriaz2k@gmail.com" className="text-stone-400 hover:text-amber-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-stone-900/95 backdrop-blur-xl z-50 flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] cursor-default"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotographerPortfolio;