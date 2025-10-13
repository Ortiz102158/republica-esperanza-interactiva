import React, { useState } from 'react';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

// Estilos globales para replicar el diseño del MSR
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
    <div 
      className="min-h-screen"
      style={{
        backgroundColor: '#000000',
        color: 'white',
        fontFamily: 'Georgia, serif',
        lineHeight: '1.7'
      }}
    >
      {/* Header - fiel al original */}
      <header id="inicio" style={{ backgroundColor: '#CE1126', borderBottom: '4px solid #009B3A', padding: '1rem 0' }}>
        <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ 
            backgroundColor: '#000000', 
            border: '2px solid #FEDD00', 
            padding: '0.75rem', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '1rem' 
          }}>
            <span style={{ color: '#CE1126', fontSize: '1.5rem' }}>★</span>
            <span style={{ color: '#FEDD00', fontWeight: 'bold' }}>MSR</span>
          </div>
          <h1 style={{ 
            fontSize: '2.5rem', 
            textShadow: '0 0 10px rgba(255,255,255,0.5)' 
          }}>
            REPÚBLICA DE ESPERANZA
          </h1>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            fontSize: '1.1rem',
            marginTop: '0.5rem'
          }}>
            📰 LA VERDAD QUE NADIE QUIERE CONTAR
          </div>
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
            Editor: Alejandro Ortiz
          </div>
        </div>
      </header>

      {/* Navigation - fiel al original */}
      <nav style={{ backgroundColor: '#009B3A', borderBottom: '2px solid #CE1126', padding: '0.75rem 0' }}>
        <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
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
              style={{
                backgroundColor: '#CE1126',
                color: 'white',
                border: '2px solid #000000',
                padding: '0.5rem 0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                margin: '0 0.25rem',
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </nav>

      <main style={{ width: '90%', maxWidth: '1200px', margin: '2rem auto' }}>
        {/* Hero - fiel al original */}
        <section className="mb-12">
          <div style={{ 
            backgroundColor: '#222', 
            border: '4px solid #FEDD00',
            marginBottom: '3rem'
          }}>
            <div style={{ 
              background: 'linear-gradient(90deg, #8b0000, #006400)', 
              padding: '2rem', 
              border: '4px solid #FEDD00' 
            }}>
              <div style={{ color: '#CE1126', fontWeight: 'bold', marginBottom: '1rem' }}>
                ¡LLAMADO A LA ACCIÓN!
              </div>
              <h2 style={{ 
                fontSize: '2.2rem', 
                color: '#FEDD00', 
                marginBottom: '1rem' 
              }}>
                ¡ÚNETE A LA LUCHA POR UNA REPÚBLICA DEMOCRÁTICA, POPULAR Y REVOLUCIONARIA!
              </h2>
              <p>
                El Movimiento por la Salvación de la República convoca a todas las fuerzas populares a organizarse, resistir y construir el futuro que merecemos.
              </p>
            </div>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section id="nosotros" className="mb-12">
          <h2 style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '2rem 0 0.5rem',
            borderBottom: '4px solid #CE1126',
            fontSize: '2rem',
            color: '#FEDD00'
          }}>
            ✊ SOBRE NOSOTROS ✊
          </h2>
          <div style={{ 
            backgroundColor: '#222', 
            border: '4px solid #CE1126', 
            margin: '1rem 0', 
            padding: '1.5rem',
            transition: 'transform 0.3s ease'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              El <strong>Movimiento por la Salvación de la República (MSR)</strong> nace como respuesta a la crisis moral, política y económica que asfixia a nuestro pueblo.
            </p>
            <p>
              Inspirados en el pensamiento de Hostos, los restauradores y las luchas populares del siglo XX, nos proponemos construir una República que garantice la justicia, la soberanía y la dignidad humana.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section id="valores" className="mb-12">
          <h2 style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '2rem 0 0.5rem',
            borderBottom: '4px solid #009B3A',
            fontSize: '2rem',
            color: '#009B3A'
          }}>
            🌱 NUESTROS VALORES 🌱
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            marginTop: '2rem' 
          }}>
            {[
              { title: 'Solidaridad', desc: 'Actuamos con empatía y compromiso con las luchas del pueblo trabajador, campesino y marginado.' },
              { title: 'Justicia Social', desc: 'Defendemos la redistribución de la riqueza, la educación y salud públicas, y los derechos de todos los sectores oprimidos.' },
              { title: 'Antiimperialismo', desc: 'Rechazamos toda forma de dominación extranjera y luchamos por la soberanía nacional en todos los ámbitos.' },
            ].map((val, i) => (
              <motion.div
                key={i}
                style={{ 
                  backgroundColor: '#222', 
                  border: '4px solid #009B3A', 
                  padding: '1.5rem' 
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 style={{ color: '#FEDD00', marginBottom: '1rem', fontSize: '1.25rem' }}>{val.title}</h3>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Internacional */}
        <section id="internacional" className="mb-12">
          <h2 style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '2rem 0 0.5rem',
            borderBottom: '4px solid #CE1126',
            fontSize: '2rem',
            color: '#FEDD00'
          }}>
            🌍 INTERNACIONAL 🌍
          </h2>
          <div style={{ 
            backgroundColor: '#222', 
            border: '4px solid #FEDD00', 
            margin: '1rem 0', 
            padding: '1.5rem' 
          }}>
            <p>El mundo multipolar avanza. La lucha antiimperialista se fortalece en cada rincón del Sur Global.</p>
          </div>
        </section>

        {/* Diáspora */}
        <section id="diaspora" className="mb-12">
          <h2 style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '2rem 0 0.5rem',
            borderBottom: '4px solid #CE1126',
            fontSize: '2rem',
            color: '#FEDD00'
          }}>
            🌎 DIÁSPORA 🌎
          </h2>
          <div style={{ 
            backgroundColor: '#222', 
            border: '4px solid #FEDD00', 
            margin: '1rem 0', 
            padding: '1.5rem' 
          }}>
            <p style={{ marginBottom: '1rem' }}>
              La diáspora dominicana constituye una de las fuerzas más dinámicas y solidarias de la nación. Se estima que más de <strong>2.5 millones de dominicanos y dominicanas</strong> viven en el exterior.
            </p>
            <p>
              El MSR reconoce a la diáspora como parte inseparable del pueblo dominicano.
            </p>
          </div>
        </section>

        {/* Derechos Humanos */}
        <section id="derechos" className="mb-12">
          <h2 style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '2rem 0 0.5rem',
            borderBottom: '4px solid #009B3A',
            fontSize: '2rem',
            color: '#CE1126'
          }}>
            ⚖️ DERECHOS HUMANOS ⚖️
          </h2>
          <div style={{ 
            backgroundColor: '#222', 
            border: '4px solid #CE1126', 
            margin: '1rem 0', 
            padding: '1.5rem' 
          }}>
            <h3 style={{ color: '#FEDD00', textAlign: 'center', marginBottom: '1rem' }}>Declaración Universal de Derechos Humanos</h3>
            <p>Todos los seres humanos nacen libres e iguales en dignidad y derechos.</p>
          </div>
        </section>

        {/* Donaciones */}
        <section id="donaciones" className="mb-12">
          <h2 style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '2rem 0 0.5rem',
            borderBottom: '4px solid #CE1126',
            fontSize: '2rem',
            color: '#FEDD00'
          }}>
            💰 DONACIONES 💰
          </h2>
          <div style={{ 
            backgroundColor: '#222', 
            border: '4px solid #FEDD00', 
            padding: '1.5rem', 
            textAlign: 'center' 
          }}>
            <h3 style={{ color: '#FEDD00', marginBottom: '1rem' }}>APOYA AL MSR</h3>
            <p style={{ marginBottom: '1rem' }}>
              Tu donación nos permite mantener este sitio y difundir la verdad.
            </p>
            <a
              href="https://www.paypal.com/donate?business=pablo102158@gmail.com&item_name=República+de+Esperanza+-+MSR"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ffc439',
                color: '#003087',
                padding: '12px 24px',
                fontWeight: 'bold',
                textDecoration: 'none',
                borderRadius: '4px',
                display: 'inline-block',
                marginTop: '1rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              <ExternalLink style={{ marginRight: '8px' }} size={18} />
              Donar con PayPal
            </a>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mb-12">
          <h2 style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            margin: '2rem 0 0.5rem',
            borderBottom: '4px solid #CE1126',
            fontSize: '2rem',
            color: '#FEDD00'
          }}>
            ✉️ CONTACTO 📞
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '2rem', 
            marginTop: '2rem' 
          }}>
            <div style={{ 
              backgroundColor: '#222', 
              border: '4px solid #FEDD00', 
              padding: '1.5rem' 
            }}>
              <h3 style={{ color: '#FEDD00', marginBottom: '1rem' }}>Escríbenos</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    margin: '0.5rem 0',
                    backgroundColor: '#000000',
                    border: '2px solid #444',
                    color: 'white',
                    fontFamily: 'Georgia, serif'
                  }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    margin: '0.5rem 0',
                    backgroundColor: '#000000',
                    border: '2px solid #444',
                    color: 'white',
                    fontFamily: 'Georgia, serif'
                  }}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tu mensaje..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    margin: '0.5rem 0',
                    backgroundColor: '#000000',
                    border: '2px solid #444',
                    color: 'white',
                    fontFamily: 'Georgia, serif'
                  }}
                  required
                />
                <motion.button
                  type="submit"
                  style={{
                    backgroundColor: '#CE1126',
                    color: 'white',
                    border: '2px solid #000000',
                    padding: '0.75rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    width: '100%',
                    marginTop: '1rem',
                    textTransform: 'uppercase'
                  }}
                  whileHover={{ backgroundColor: '#ff3344' }}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
              {formStatus === 'success' && (
                <motion.div
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    marginTop: '1rem',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0, 155, 58, 0.3)',
                    color: '#009B3A',
                    border: '1px solid #009B3A'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ¡Gracias! Tu mensaje ha sido recibido.
                </motion.div>
              )}
              {formStatus === 'error' && (
                <motion.div
                  style={{
                    textAlign: 'center',
                    padding: '12px',
                    marginTop: '1rem',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(206, 17, 38, 0.3)',
                    color: '#CE1126',
                    border: '1px solid #CE1126'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Por favor, completa todos los campos.
                </motion.div>
              )}
            </div>
            <div style={{ 
              backgroundColor: '#222', 
              border: '4px solid #009B3A', 
              padding: '1.5rem' 
            }}>
              <h3 style={{ color: '#009B3A', marginBottom: '1rem' }}>Únete a Nosotros</h3>
              <p>📍 Santo Domingo, República Dominicana</p>
              <p>✉️ contacto@republicaesperanza.org</p>
              <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#000000', border: '2px solid #CE1126' }}>
                <p style={{ color: '#CE1126', fontStyle: 'italic' }}>
                  "La esperanza no es un sentimiento, es una decisión política."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ 
        backgroundColor: '#0a3a0a', 
        borderTop: '4px solid #CE1126', 
        padding: '2rem 0', 
        marginTop: '2rem' 
      }}>
        <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>REPÚBLICA DE ESPERANZA</div>
          <p>© 2024 - Movimiento por la Salvación de la República (MSR)</p>
          <p style={{ color: '#CE1126', marginTop: '0.5rem' }}>¡LA VERDAD ESTÁ EN LAS SOMBRAS!</p>
        </div>
      </footer>
    </div>
  );
};

export default App;