// src/App.js
import React, { useState } from 'react';

const App = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'sobre-nosotros',
      title: '✊ SOBRE NOSOTROS ✊',
      content: (
        <>
          <p>
            El <strong>Movimiento por la Salvación de la República (MSR)</strong> nace como respuesta a la crisis moral, política y económica que asfixia a nuestro pueblo.
          </p>
          <p>
            Inspirados en el pensamiento de <strong>Hostos</strong>, los <strong>restauradores</strong> y las <strong>luchas populares del siglo XX</strong>, nos proponemos construir una República que garantice la <strong>justicia</strong>, la <strong>soberanía</strong> y la <strong>dignidad humana</strong>.
          </p>
        </>
      )
    },
    {
      id: 'valores',
      title: '🌱 NUESTROS VALORES',
      content: (
        <ul style={{ paddingLeft: '1.4rem', lineHeight: 1.8 }}>
          <li><strong>Solidaridad</strong><br />Actuamos con empatía y compromiso con las luchas del pueblo trabajador, campesino y marginado.</li>
          <li><strong>Justicia Social</strong><br />Defendemos la redistribución de la riqueza, la educación y salud públicas, y los derechos de todos los sectores oprimidos.</li>
          <li><strong>Antiimperialismo</strong><br />Rechazamos toda forma de dominación extranjera y luchamos por la soberanía nacional en todos los ámbitos.</li>
        </ul>
      )
    },
    {
      id: 'internacional',
      title: '🌍 INTERNACIONAL',
      content: (
        <p>
          El mundo multipolar avanza. La lucha antiimperialista se fortalece en cada rincón del <strong>Sur Global</strong>.
        </p>
      )
    },
    {
      id: 'diaspora',
      title: '🌐 DIÁSPORA',
      content: (
        <>
          <p>
            La diáspora dominicana constituye una de las fuerzas más dinámicas y solidarias de la nación. Se estima que más de <strong>2.5 millones de dominicanos y dominicanas</strong> viven en el exterior.
          </p>
          <p>
            El MSR reconoce a la diáspora como <strong>parte inseparable del pueblo dominicano</strong>.
          </p>
        </>
      )
    },
    {
      id: 'posiciones-internacionales',
      title: '✊ POSICIONES INTERNACIONALES',
      content: (
        <div style={{ lineHeight: 1.7 }}>
          <h3 style={{ color: '#c62828', fontSize: '1.3rem', margin: '1.2rem 0 0.8rem' }}>
            Solidaridad con Palestina
          </h3>
          <p>
            El Movimiento por la Salvación de la República (MSR) rechaza categóricamente el genocidio contra el pueblo palestino. Condenamos la ocupación sionista, el bloqueo a Gaza y la complicidad del imperialismo norteamericano y europeo. ¡Alza la voz, no eres neutral: <strong>¡Libertad para Palestina!</strong>
          </p>

          <h3 style={{ color: '#c62828', fontSize: '1.3rem', margin: '1.4rem 0 0.8rem' }}>
            Solidaridad con Venezuela
          </h3>
          <p>
            Defendemos la soberanía de la República Bolivariana de Venezuela frente a los intentos de injerencia, bloqueo y golpismo promovidos por el imperialismo. Apoyamos al pueblo venezolano en su lucha por la dignidad, la independencia y el socialismo bolivariano. <strong>¡Manos fuera de Venezuela!</strong>
          </p>

          <h3 style={{ color: '#2e7d32', fontSize: '1.3rem', margin: '1.4rem 0 0.8rem' }}>
            ACTUALIDAD Y COYUNTURA
          </h3>
          <p>
            En un mundo multipolar en ascenso, el Sur Global se rearticula frente a la crisis estructural del capitalismo. Desde América Latina hasta Asia y África, los pueblos construyen alternativas de integración soberana: BRICS+, ALBA, CELAC, Unión Africana. La lucha antiimperialista ya no es una opción: es la condición de nuestra supervivencia como naciones libres.
          </p>
        </div>
      )
    },
    {
      id: 'tabaco-dominicano',
      title: '🇨🇺 EL TABACO Y EL CIGARRO SON DOMINICANOS',
      content: (
        <div style={{ lineHeight: 1.7 }}>
          <p>
            El tabaco no es solo un cultivo: es historia, identidad y resistencia campesina. República Dominicana es el <strong>mayor productor mundial de tabaco de exportación</strong>, y sus cigarros puros son reconocidos como los mejores del mundo.
          </p>
          <p>
            Detrás de cada hoja curada en las vegas de Santiago, Tamboril y Mao, hay siglos de saber campesino, de lucha contra el monocultivo impuesto y de defensa de la tierra. El tabaco dominicano no pertenece a las transnacionales: pertenece al <strong>pueblo trabajador</strong> que lo siembra, lo cura y lo enrolla con dignidad.
          </p>
          <p>
            Rechazamos la mercantilización extrema y exigimos políticas públicas que protejan a los pequeños productores, promuevan el consumo responsable y defiendan el tabaco como <strong>patrimonio nacional</strong>.
          </p>
        </div>
      )
    },
    {
      id: 'derechos',
      title: '⚖️ DERECHOS HUMANOS ⚖️',
      content: (
        <div style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
          <h3 style={{ textAlign: 'center', fontWeight: '700', marginBottom: '1.2rem' }}>
            Declaración Universal de los Derechos Humanos
          </h3>
          <p><em>Adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948</em></p>

          <ol style={{ paddingLeft: '1.4rem', marginTop: '1.2rem' }}>
            <li>Todos los seres humanos nacen libres e iguales en dignidad y derechos y, dotados como están de razón y conciencia, deben comportarse fraternalmente los unos con los otros.</li>
            <li>Toda persona tiene todos los derechos y libertades proclamados en esta Declaración, sin distinción alguna de raza, color, sexo, idioma, religión, opinión política o de cualquier otra índole, origen nacional o social, posición económica, nacimiento o cualquier otra condición.</li>
            <li>Todo individuo tiene derecho a la vida, a la libertad y a la seguridad de su persona.</li>
            <li>Nadie estará sometido a esclavitud ni a servidumbre; la esclavitud y la trata de esclavos están prohibidas en todas sus formas.</li>
            <li>Nadie será sometido a torturas ni a penas o tratos crueles, inhumanos o degradantes.</li>
            <li>Toda persona tiene derecho, en todas partes, al reconocimiento de su personalidad jurídica.</li>
            <li>Todos son iguales ante la ley y tienen, sin distinción, derecho a igual protección de la ley.</li>
            <li>Toda persona tiene derecho a un recurso efectivo ante los tribunales nacionales competentes, que la ampare contra actos que violen sus derechos fundamentales.</li>
            <li>Nadie podrá ser arbitrariamente detenido, preso ni desterrado.</li>
            <li>Toda persona tiene derecho, en condiciones de plena igualdad, a ser oída públicamente y con justicia por un tribunal independiente e imparcial, para la determinación de sus derechos y obligaciones o para el examen de cualquier acusación contra ella en materia penal.</li>
            <li>Toda persona acusada de delito tiene derecho a que se presuma su inocencia mientras no se pruebe su culpabilidad.</li>
            <li>Nadie será objeto de injerencias arbitrarias en su vida privada, su familia, su domicilio o su correspondencia, ni de ataques a su honra o a su reputación.</li>
            <li>Toda persona tiene derecho a circular libremente y a elegir su residencia en el territorio de un Estado. También tiene derecho a salir de cualquier país, incluso del propio, y a regresar a su país.</li>
            <li>En caso de persecución, toda persona tiene derecho a buscar asilo y a disfrutar de él en cualquier país.</li>
            <li>Toda persona tiene derecho a una nacionalidad. Nadie será privado arbitrariamente de su nacionalidad ni del derecho a cambiarla.</li>
            <li>Todos los hombres y mujeres, a partir de la edad núbil, tienen derecho, sin restricción alguna por motivos de raza, nacionalidad o religión, a casarse y fundar una familia. Gozarán de iguales derechos en cuanto al matrimonio, durante el matrimonio y en caso de disolución del matrimonio.</li>
            <li>Toda persona tiene derecho a la propiedad, individual y colectivamente.</li>
            <li>Toda persona tiene derecho a la libertad de pensamiento, de conciencia y de religión.</li>
            <li>Toda persona tiene derecho a la libertad de opinión y de expresión.</li>
            <li>Toda persona tiene derecho a la libertad de reunión y de asociación pacíficas.</li>
            <li>Toda persona tiene derecho a participar en el gobierno de su país, directamente o por medio de representantes libremente escogidos. También tiene derecho de acceso, en condiciones de igualdad, a las funciones públicas de su país.</li>
            <li>Toda persona, como miembro de la sociedad, tiene derecho a la seguridad social, y a obtener, mediante el esfuerzo nacional y la cooperación internacional, la satisfacción de los derechos económicos, sociales y culturales indispensables a su dignidad y al libre desarrollo de su personalidad.</li>
            <li>Toda persona tiene derecho al trabajo, a la libre elección de su trabajo, a condiciones equitativas y satisfactorias de trabajo y a la protección contra el desempleo. Toda persona tiene derecho, sin discriminación alguna, a igual salario por trabajo igual.</li>
            <li>Toda persona tiene derecho a fundar sindicatos y a sindicalizarse para la defensa de sus intereses.</li>
            <li>Toda persona tiene derecho a un nivel de vida adecuado que le asegure, así como a su familia, la salud y el bienestar, y en especial la alimentación, el vestido, la vivienda, la asistencia médica y los servicios sociales necesarios.</li>
            <li>Toda persona tiene derecho a la educación. La instrucción elemental será obligatoria. La instrucción técnica y profesional habrá de ser generalizada; el acceso a los estudios superiores será igual para todos, en función de los méritos respectivos.</li>
            <li>Toda persona tiene derecho a tomar parte libremente en la vida cultural de la comunidad, a gozar de las artes y a participar en el progreso científico y en los beneficios que de él resulten.</li>
            <li>Toda persona tiene derecho a que se establezca un orden social y jurídico en el que los derechos y libertades proclamados en esta Declaración se hagan plenamente efectivos.</li>
            <li>Estos derechos y libertades no podrán ser ejercidos en oposición a los propósitos y principios de las Naciones Unidas.</li>
            <li>Nada en esta Declaración podrá interpretarse en el sentido de que confiere derecho alguno al Estado, a un grupo o a una persona, para emprender y desarrollar actividades o realizar actos tendientes a la supresión de cualquiera de los derechos y libertades proclamados en esta Declaración.</li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <div className="app-interactiva" style={{
      padding: '1.8rem 1.2rem',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: '"Inter", system-ui, sans-serif',
      color: '#000',
      lineHeight: 1.6
    }}>
      {/* LOGO */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img
          src="/logo-msr.svg"
          alt="Movimiento por la Salvación de la República"
          style={{ height: '100px', maxWidth: '180px', objectFit: 'contain' }}
        />
      </div>

      {/* TÍTULO PRINCIPAL */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
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
          El <strong>MSR</strong> convoca a todas las fuerzas populares a organizarse, resistir y construir el futuro que merecemos.
        </p>
      </header>

      {/* SECCIONES INTERACTIVAS */}
      {sections.map((section) => (
        <div key={section.id} style={{ marginBottom: '2rem' }}>
          <h2
            onClick={() => toggleSection(section.id)}
            style={{
              textAlign: 'center',
              color: '#2e7d32',
              fontSize: '1.5rem',
              fontWeight: '700',
              cursor: 'pointer',
              padding: '0.6rem',
              borderRadius: '4px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f9f9f9'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            {section.title}
            <span style={{ marginLeft: '8px', fontSize: '1rem' }}>
              {openSection === section.id ? '▲' : '▼'}
            </span>
          </h2>
          {openSection === section.id && (
            <div style={{
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#fdfdfd',
              borderRadius: '6px',
              animation: 'fadeIn 0.4s'
            }}>
              {section.content}
            </div>
          )}
        </div>
      ))}

      {/* DONACIONES CON PAYPAL */}
      <section style={{ textAlign: 'center', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '2px solid #2e7d32' }}>
        <h2 style={{ color: '#2e7d32', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.2rem' }}>💙 DONACIONES</h2>
        <p style={{ marginBottom: '1.5rem' }}>Apóyanos para seguir construyendo la República que soñamos.</p>

        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_blank"
          style={{ display: 'inline-block' }}
        >
          <input type="hidden" name="hosted_button_id" value="TU_ID_DE_BOTÓN_AQUÍ" />
          <input
            type="image"
            src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif"
            name="submit"
            alt="Donar con PayPal"
            style={{ height: '42px' }}
          />
          <img
            alt=""
            src="https://www.paypal.com/es_XC/i/scr/pixel.gif"
            width="1"
            height="1"
            style={{ display: 'none' }}
          />
        </form>
      </section>

      {/* CONTACTO Y FRASE FINAL */}
      <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={{ color: '#2e7d32', fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>✉️ CONTACTO</h2>
        <p>
          Escríbenos a: <a
            href="mailto:contacto@republicaesperanza.org"
            style={{ color: '#c62828', textDecoration: 'underline', fontWeight: '600' }}
          >
            contacto@republicaesperanza.org
          </a>
        </p>
        <p>Santo Domingo, República Dominicana</p>

        <div style={{ marginTop: '1.8rem', fontWeight: '800', color: '#c62828', fontSize: '1.25rem' }}>
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

      {/* Animación fadeIn */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;