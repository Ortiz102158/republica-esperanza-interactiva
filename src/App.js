import React, { useState } from 'react';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const App = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 4000);
    } else {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white font-serif min-h-screen">
      <header id="inicio" className="bg-[#CE1126] border-b-4 border-[#009B3A] py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-black border-2 border-[#FEDD00] px-3 py-2 mb-3">
            <span className="text-[#CE1126] text-2xl mr-2">★</span>
            <span className="text-[#FEDD00] font-bold">MSR</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">REPÚBLICA DE ESPERANZA</h1>
          <div className="flex items-center justify-center gap-2 text-sm mt-1">
            📰 LA VERDAD QUE NADIE QUIERE CONTAR
          </div>
          <div className="text-xs mt-1">Editor: Alejandro Ortiz</div>
        </div>
      </header>

      <nav className="bg-[#009B3A] border-b-2 border-[#CE1126] py-2">
        <div className="container mx-auto px-4 text-center">
          {[
            { id: 'inicio', label: 'INICIO' },
            { id: 'nosotros', label: 'SOBRE NOSOTROS' },
            { id: 'valores', label: 'VALORES' },
            { id: 'internacional', label: 'INTERNACIONAL' },
            { id: 'diaspora', label: 'DIÁSPORA' },
            { id: 'derechos', label: 'DERECHOS HUMANOS' },
            { id: 'donaciones', label: 'DONACIONES' },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="bg-[#CE1126] text-white border-2 border-black px-3 py-1 mx-1 font-bold text-xs uppercase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="border-4 border-[#FEDD00] bg-[#222]">
            <div className="bg-gradient-to-r from-[#8b0000] to-[#006400] p-6 md:p-8 border-4 border-[#FEDD00]">
              <div className="text-[#CE1126] font-bold mb-2">¡LLAMADO A LA ACCIÓN!</div>
              <h2 className="text-2xl md:text-3xl text-[#FEDD00] font-bold mb-3">
                ¡ÚNETE A LA LUCHA POR UNA REPÚBLICA DEMOCRÁTICA, POPULAR Y REVOLUCIONARIA!
              </h2>
              <p>
                El Movimiento por la Salvación de la República convoca a todas las fuerzas populares a organizarse, resistir y construir el futuro que merecemos.
              </p>
            </div>
          </div>
        </section>

        <section id="nosotros" className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl text-[#FEDD00] border-b-4 border-[#CE1126] pb-1 mb-4">
            ✊ SOBRE NOSOTROS ✊
          </h2>
          <div className="bg-[#222] border-4 border-[#CE1126] p-6">
            <p className="mb-3">
              El <strong>Movimiento por la Salvación de la República (MSR)</strong> nace como respuesta a la crisis moral, política y económica que asfixia a nuestro pueblo.
            </p>
            <p>
              Inspirados en el pensamiento de Hostos, los restauradores y las luchas populares del siglo XX, nos proponemos construir una República que garantice la justicia, la soberanía y la dignidad humana.
            </p>
          </div>
        </section>

        <section id="valores" className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl text-[#009B3A] border-b-4 border-[#009B3A] pb-1 mb-4">
            🌱 NUESTROS VALORES 🌱
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Solidaridad', desc: 'Actuamos con empatía y compromiso con las luchas del pueblo trabajador, campesino y marginado.' },
              { title: 'Justicia Social', desc: 'Defendemos la redistribución de la riqueza, la educación y salud públicas, y los derechos de todos los sectores oprimidos.' },
              { title: 'Antiimperialismo', desc: 'Rechazamos toda forma de dominación extranjera y luchamos por la soberanía nacional en todos los ámbitos.' },
            ].map((val, i) => (
              <motion.div
                key={i}
                className="bg-[#222] border-4 border-[#009B3A] p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#FEDD00] text-xl font-bold mb-2">{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="internacional" className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl text-[#FEDD00] border-b-4 border-[#CE1126] pb-1 mb-4">
            🌍 INTERNACIONAL 🌍
          </h2>
          <div className="bg-[#222] border-4 border-[#FEDD00] p-6">
            <p>El mundo multipolar avanza. La lucha antiimperialista se fortalece en cada rincón del Sur Global.</p>
          </div>
        </section>

        <section id="diaspora" className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl text-[#FEDD00] border-b-4 border-[#CE1126] pb-1 mb-4">
            🌎 DIÁSPORA 🌎
          </h2>
          <div className="bg-[#222] border-4 border-[#FEDD00] p-6">
            <p className="mb-2">
              La diáspora dominicana constituye una de las fuerzas más dinámicas y solidarias de la nación. Se estima que más de <strong>2.5 millones de dominicanos y dominicanas</strong> viven en el exterior.
            </p>
            <p>
              El MSR reconoce a la diáspora como parte inseparable del pueblo dominicano.
            </p>
          </div>
        </section>

        <section id="derechos" className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl text-[#CE1126] border-b-4 border-[#009B3A] pb-1 mb-4">
            ⚖️ DERECHOS HUMANOS ⚖️
          </h2>
          <div className="bg-[#222] border-4 border-[#CE1126] p-6">
            <h3 className="text-[#FEDD00] text-center text-xl font-bold mb-3">Declaración Universal de Derechos Humanos</h3>
            <p>Todos los seres humanos nacen libres e iguales en dignidad y derechos.</p>
          </div>
        </section>

        <section id="donaciones" className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl text-[#FEDD00] border-b-4 border-[#CE1126] pb-1 mb-4">
            💰 DONACIONES 💰
          </h2>
          <div className="bg-[#222] border-4 border-[#FEDD00] p-6 text-center">
            <h3 className="text-[#FEDD00] text-xl font-bold mb-3">APOYA AL MSR</h3>
            <p className="mb-4">Tu donación nos permite mantener este sitio y difundir la verdad.</p>
            <a
              href="https://www.paypal.com/donate?business=pablo102158@gmail.com&item_name=República+de+Esperanza+-+MSR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#ffc439] text-[#003087] font-bold px-6 py-3 rounded hover:scale-105 transition-transform"
            >
              <ExternalLink className="mr-2" size={18} />
              Donar con PayPal
            </a>
          </div>
        </section>

        <section id="contacto" className="mb-12">
          <h2 className="flex items-center gap-2 text-2xl text-[#FEDD00] border-b-4 border-[#CE1126] pb-1 mb-4">
            ✉️ CONTACTO 📞
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#222] border-4 border-[#FEDD00] p-6">
              <h3 className="text-[#FEDD00] text-xl font-bold mb-4">Escríbenos</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-black border-2 border-gray-600 p-3 mb-3 text-white font-serif"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black border-2 border-gray-600 p-3 mb-3 text-white font-serif"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tu mensaje..."
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-black border-2 border-gray-600 p-3 mb-3 text-white font-serif"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-[#CE1126] text-white border-2 border-black py-3 font-bold uppercase"
                  whileHover={{ backgroundColor: '#ff3344' }}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
              {formStatus === 'success' && (
                <motion.div
                  className="mt-4 p-3 bg-green-900/30 border border-green-500 text-green-300 text-center rounded"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ¡Gracias! Tu mensaje ha sido recibido.
                </motion.div>
              )}
              {formStatus === 'error' && (
                <motion.div
                  className="mt-4 p-3 bg-red-900/30 border border-red-500 text-red-300 text-center rounded"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Por favor, completa todos los campos.
                </motion.div>
              )}
            </div>

            <div className="bg-[#222] border-4 border-[#009B3A] p-6">
              <h3 className="text-[#009B3A] text-xl font-bold mb-4">Únete a Nosotros</h3>
              <div className="flex items-center mb-3">
                <MapPin className="mr-2 text-[#009B3A]" size={18} />
                <span>Santo Domingo, República Dominicana</span>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="mr-2 text-[#009B3A]" size={18} />
                <span>contacto@republicaesperanza.org</span>
              </div>
              <div className="bg-black border-2 border-[#CE1126] p-3 mt-4">
                <p className="text-[#CE1126] italic">
                  "La esperanza no es un sentimiento, es una decisión política."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a3a0a] border-t-4 border-[#CE1126] py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xl font-bold mb-1">REPÚBLICA DE ESPERANZA</div>
          <p>© 2024 - Movimiento por la Salvación de la República (MSR)</p>
          <p className="text-[#CE1126] mt-1">¡LA VERDAD ESTÁ EN LAS SOMBRAS!</p>
        </div>
      </footer>
    </div>
  );
};
// Última actualización: forzar redeploy en Vercel
export default App;
