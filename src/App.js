// src/App.js
import React from 'react';

function App() {
  return (
    <article className="manifiesto-msr" style={{
      padding: '2rem 1.2rem',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: 1.7,
      fontFamily: '"Inter", system-ui, sans-serif',
      color: '#000',
    }}>
      {/* Logo (asegúrate de tenerlo en public/logo-msr.svg o similar) */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src="/logo-msr.svg"
          alt="Movimiento por la Salvación de la República"
          style={{ height: '90px', maxWidth: '180px', objectFit: 'contain' }}
        />
      </div>

      <header className="manifiesto-encabezado" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{
          fontSize: '1.9rem',
          fontWeight: '800',
          color: '#c62828',
          margin: 0,
          textTransform: 'uppercase',
          lineHeight: 1.3
        }}>
          ¡ÚNETE A LA LUCHA POR UNA REPÚBLICA DEMOCRÁTICA, POPULAR Y REVOLUCIONARIA!
        </h1>
        <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
          El <strong>Movimiento por la Salvación de la República (MSR)</strong> convoca a todas las fuerzas populares a organizarse, resistir y construir el futuro que merecemos.
        </p>
      </header>

      <section className="seccion sobre-nosotros" style={{ marginBottom: '2rem' }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2e7d32',
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1rem'
        }}>✊ SOBRE NOSOTROS ✊</h2>
        <p>
          El <strong>Movimiento por la Salvación de la República (MSR)</strong> nace como respuesta a la crisis moral, política y económica que asfixia a nuestro pueblo.
        </p>
        <p>
          Inspirados en el pensamiento de <strong>Hostos</strong>, los <strong>restauradores</strong> y las <strong>luchas populares del siglo XX</strong>, nos proponemos construir una República que garantice la <strong>justicia</strong>, la <strong>soberanía</strong> y la <strong>dignidad humana</strong>.
        </p>
      </section>

      <section className="seccion valores" style={{ marginBottom: '2rem' }}>
        <h2 style={{
          textAlign: 'center',
          color: '#2e7d32',
          fontSize: '1.5rem',
          fontWeight: '700',
          marginBottom: '1.2rem'
        }}>NUESTROS VALORES</h2>
        <ul style={{ paddingLeft: '1.4rem', lineHeight: 1.9 }}>
          <li><strong style={{ color: '#c62828' }}>Solidaridad</strong><br />Actuamos con empatía y compromiso con las luchas del pueblo trabajador, campesino y marginado.</li>
          <li><strong style={{ color: '#c62828' }}>Justicia Social</strong><br />Defendemos la redistribución de la riqueza, la educación y salud públicas, y los derechos de todos los sectores oprimidos.</li>
          <li><strong style={{ color: '#c62828' }}>Antiimperialismo</strong><br />Rechazamos toda forma de dominación extranjera y luchamos por la soberanía nacional en todos los ámbitos.</li>
        </ul>
      </section>

      <section className="seccion internacional" style={{ marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', color: '#2e7d32', fontSize: '1.5rem', fontWeight: '700' }}>INTERNACIONAL</h2>
        <p>El mundo multipolar avanza. La lucha antiimperialista se fortalece en cada rincón del <strong>Sur Global</strong>.</p>
      </section>

      <section className="seccion diaspora" style={{ marginBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', color: '#2e7d32', fontSize: '1.5rem', fontWeight: '700' }}>DIÁSPORA</h2>
        <p>La diáspora dominicana constituye una de las fuerzas más dinámicas y solidarias de la nación. Se estima que más de <strong>2.5 millones de dominicanos y dominicanas</strong> viven en el exterior.</p>
        <p>El MSR reconoce a la diáspora como <strong>parte inseparable del pueblo dominicano</strong>.</p>
      </section>

      <section className="seccion derechos-humanos" style={{ marginBottom: '2rem', textAlign: 'center', fontStyle: 'italic' }}>
        <h2 style={{ color: '#2e7d32', fontSize: '1.5rem', fontWeight: '700' }}>⚖️ DERECHOS HUMANOS ⚖️</h2>
        <p>“Todos los seres humanos nacen libres e iguales en dignidad y derechos.”</p>
        <p style={{ fontSize: '0.95rem', marginTop: '0.5rem' }}>— Declaración Universal de Derechos Humanos</p>
      </section>

      <section className="seccion donaciones" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: '#2e7d32', fontSize: '1.5rem', fontWeight: '700' }}>DONACIONES</h2>
        <p>Apóyanos para seguir construyendo la República que soñamos.</p>
      </section>

      <footer className="manifiesto-contacto" style={{
        textAlign: 'center',
        borderTop: '2px solid #2e7d32',
        paddingTop: '2rem'
      }}>
        <h2 style={{ color: '#2e7d32', fontSize: '1.5rem', fontWeight: '700' }}>✉️ CONTACTO</h2>
        <p>
          Escríbenos a: <a
            href="mailto:contacto@republicaesperanza.org"
            style={{ color: '#c62828', textDecoration: 'underline', fontWeight: '600' }}
          >
            contacto@republicaesperanza.org
          </a>
        </p>
        <p>Santo Domingo, República Dominicana</p>

        <div style={{ marginTop: '1.5rem', fontWeight: '800', color: '#c62828', fontSize: '1.2rem' }}>
          ¡ÚNETE A NOSOTROS!
        </div>

        <div style={{
          marginTop: '1.2rem',
          fontStyle: 'italic',
          color: '#2e7d32',
          fontSize: '1.15rem',
          fontWeight: '600'
        }}>
          “La esperanza no es un sentimiento, es una decisión política.”
        </div>
      </footer>
    </article>
  );
}

export default App;