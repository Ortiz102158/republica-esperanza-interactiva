import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Users, Globe, Scale, Heart, Newspaper, Landmark, HandCoins, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [filterCategory, setFilterCategory] = useState('Todos');

  const sectionRefs = {
    hero: useRef(null),
    principios: useRef(null),
    valores: useRef(null),
    internacional: useRef(null),
    diaspora: useRef(null),
    derechos: useRef(null),
    articulos: useRef(null),
    actividades: useRef(null),
    donaciones: useRef(null),
    contacto: useRef(null)
  };

  // Artículos oficiales + colaboración externa
  const articles = [
    {
      id: "tabaco-cigarro-dominicanos",
      title: "Tabaco y Cigarro son dominicanos",
      author: "Ing. Francisco Matos Mancebo — Editor HLM / Humo Latino",
      date: "2025-04-06",
      category: "Soberanía Cultural",
      content: `El Diputado del Tabaco

Desde que el ser humano pasó de la vida nómada a la sedentaria inició un proceso de identificación, sistematización, clasificación y nominación de los elementos de su hábitat. Por tanto, podemos rastrear los primeros pasos de esa hierba santa (Nicotiana Tabacum) que hoy llamamos tabaco, desde que el ser humano la identificó y diferenció. Esta planta anual de la familia de las solanáceas, de acuerdo con investigaciones e inferencias científicas, es oriunda de América tropical y amazónica, más específicamente de Ecuador y Perú.

Cabe destacar que su producción no representa, en modo alguno, el peligro infernal para la salud que preconizan sus enemigos tendenciosos, pues se trata de un activo inapreciable y un regalo para la humanidad. Como todos los elementos de los reinos de la naturaleza –mineral, vegetal y animal– puede usarse para bienestar o malestar. Como activo de la modernidad es generador de riqueza, soporte de multinacionales y destino preferente de leyes impositivas, pero como producto de consumo es universal e inherente a la civilización.

Juzgo imprescindible aclarar que, aunque la planta de tabaco es originaria de Sudamérica, está comprobado que para la producción adecuada y efectiva de las hojas destinadas a la elaboración de cigarros premium, los mejores suelos están en las Antillas Mayores: Puerto Rico, Jamaica y básicamente la República Dominicana y Cuba. Estas dos últimas, las islas principales donde los colonizadores descubrieron su existencia y el uso que los «indios» le daban.

BREVE HISTORIA

A raíz del descubrimiento de América, los colonizadores españoles fueron los primeros en dar cuenta de la existencia del tabaco al viejo continente. Al llegar a las islas del Caribe, el 12 de octubre de 1492, en Guanahani –bautizada como San Salvador, hoy Bahamas–, tuvieron conocimiento de la existencia de la planta aromática, pues los nativos les presentaron “hojas secas que desprendían una fragancia peculiar”.

Su primera referencia sobre el tabaco fue un par de días después de descubrir la primera isla de San Salvador, cuando Cristóbal Colón explica cómo encontró a un indio en una pequeña canoa, y en ella llevaba “unas hojas secas que deben ser cosas muy apreciadas entre ellos, porque ya me trajeron en San Salvador de ellas”. El Almirante prosiguió su travesía y el 27 de octubre arribó a la isla de Cuba, que llamaron Juana, y en esa escala encontraron nuevamente tabaco. Está documentado que los marineros Rodrigo de Jerez y Luis de Torres, enviados a explorar tierra firme el 2 de noviembre, vieron por primera vez a los nativos fumar.

El “Diario de Colón” relata: “Hallaron los dos cristianos por el camino mucha gente que atravesaban a sus pueblos, mujeres y hombres, con un tizón en la mano y yerbas para tomar sus sahumerios, que acostumbraban”. Los enviados observaron a los nativos hacer rollos de hojas de palma y maíz “a la manera de un mosquetón de papel” con tabaco dentro, al que uno encendía de un lado y bebía el humo que echaba el otro.

Colón zarpó de Cuba y el 5 de diciembre arribó a Quisqueya, actual isla de Santo Domingo bautizada entonces como La Española, donde desembarcaron por fuerza el 24 de diciembre, tras encallar la carabela Santa María. Fueron bien acogidos por el cacique Guacanagarix, quien les ofreció albergue y dispuso ayuda para rescatar los restos de la embarcación y sus provisiones. Esto sucedió en la bahía de San Nicolás, donde construyeron su primer asentamiento en el Nuevo Mundo, el Fuerte de la Navidad, en alusión a la fecha citada.

Colón y sus hombres permanecieron en el cacicazgo de Marién hasta el 16 de enero de 1493, cuando emprendieron su regreso a España, dejando en el fuerte a 39 de sus compañeros. En la tripulación iba Alejandro de Jerez, quien llevó consigo hojas de tabaco secas y la costumbre de fumarlas: práctica vista en Cuba, pero aprendida en La Española, durante su convivencia amigable.

PRIMEROS INFORMES

El tabaco no ocupó un lugar destacado entre las exportaciones de productos dominicanos a Sevilla durante el siglo XVI, a pesar de que el término “tabaco” aparece como tal desde 1529, y desde La Española se producían las primeras noticias sobre la planta, de su uso por los colonizadores europeos y sus efectos de dependencia entre quienes lo consumían.

El andaluz (y sevillano) Fray Bartolomé Las Casas escribió: “españoles conocí yo en esta isla Española que lo acostumbraban tomar (el tabaco), que siendo reprendidos por ello diciéndoles que aquello era vicio, respondían que no era de su mano dejarlo; no sé qué sabor o provecho hallaban en ello”.

El Tabaco fue, sin duda, el cultivo más difundido de América desde antes de la llegada de los españoles. Hay evidencias de que era sembrado formalmente y domesticado en todo el continente, y aunque su origen se establece en la región amazónica –como se dijo antes–, pasó a los grupos del Orinoco en el sur de la actual Venezuela, y los Arahuacos lo trajeron a las islas del caribe.

Una vez aquí, los Tainos –asentados básicamente en la isla de Santo Domingo– fue el primer grupo que lo domesticó y convirtió en cultivo regular.

Los europeos se extrañaron mucho porque nunca habían visto a alguien echando humo por boca y nariz, pero no fue el único uso que encontraron entre los aborígenes. Además de aspirar el humo de las hojas secas en combustión, los indígenas también masticaban tabaco, lo aspiraban por la nariz, lo comían en una especie de ensalada, se bebía, lo untaban sobre el cuerpo para combatir enfermedades de la piel, y se usaba en gotas para los ojos y en enemas.

Tenía también usos rituales, como soplarlo sobre los guerreros antes de la lucha y esparcirlo en los campos antes de la siembra; era ofrenda para los dioses, se derramaba sobre las mujeres previo a una relación sexual; se untaba en el cuerpo de las embarazadas, y tanto hombres como mujeres lo consumían como narcótico.

EL VIEJO CONTINENTE

Tras regresar a España y continuar su práctica de fumar tabaco, la historia registra que Rodrigo de Jerez fue denunciado por vecinos y familiares, quienes asombrados al verlo echar chorros de humo todo el día provocaron su arresto por la Santa Inquisición, que lo encarceló durante siete años, ya que “solamente el Diablo podía hacer que un hombre vote humo por boca y nariz”.

En el viejo continente, el hábito de fumar y el uso del tabaco se fue generalizando gracias a los marinos, quienes lo masticaban y aspiraban su polvo. Pero se extendió de tal manera que algunos reyes adoptaron medidas radicales para impedir que la gente lo adoptara.

Prusia, por ejemplo, castigaba al fumador con una paliza, pero si insistía se le cortaba la nariz y finalmente, ante una situación de desobediencia, le degollaban. En Turquía se aplicaba la pena de muerte, y en la Inglaterra del siglo XVI no sólo se prohibió fumar, sino que entre los posibles castigos estaba también la pena capital.

No obstante, bastaron unos pocos años para que los Estados pasaran de las restricciones a fomentar la siembra y estimular el consumo con todos los medios a su alcance –propaganda incluida–, por lo que en toda Europa, Asia (incluyendo el Medio Oriente), África, etcétera, se introdujo el cultivo, sumándose a América entera países como Brasil, entonces colonia portuguesa.

El tabaco fue, es y será un viajero preferente en el carrusel del tiempo, que se ha ocupado de ubicarlo en lugares más respetables. Por tanto, durante su trayectoria histórica los gobiernos advirtieron que podía generar grandes riquezas y se reservaron su comercialización o lo grabaron con impuestos especiales.

EL TABACO ES DOMINICANO

Lo expuesto anteriormente nos ofrece la certidumbre de que los españoles aprendieron la práctica de enrollar hojas de tabaco y fumarlas en la isla de Santo Domingo, y desde aquí se llevaron a Europa incluso sus semillas (lo que se atribuye a Fray Ramón Pané, entre 1510 y 1512).

Resultado de distintas investigaciones, podemos afirmar que en Santo Domingo se estableció la primera plantación en 1533, y entre 1529 y 1531 se exportaron hojas a Sevilla, España. Por tales razones nos sentimos con todo derecho a decir que respecto del tabaco, como se le conoce hoy en día, todo empezó aquí, y por cuanto a su cultivo formal, procesamiento, comercialización y uso, es de origen dominicano.`
    },
    {
      id: "tabaco-industria",
      title: "El tabaco no es un vicio individual, es una estrategia de la industria",
      date: "2025-04-05",
      category: "Salud",
      content: `La industria tabacalera sigue lucrando con la salud de millones, especialmente en barrios populares y países del Sur Global. A través de publicidad engañosa, sabores atractivos para adolescentes y presión política, las grandes corporaciones como Philip Morris y British American Tobacco evaden regulaciones y expanden su mercado entre los más vulnerables.

En América Latina, el 80% de las muertes por cáncer de pulmón están vinculadas al tabaco, y los gastos en salud pública superan con creces los impuestos recaudados. El Movimiento Social Revolucionario (MSR) exige:
- Prohibición total de la publicidad, promoción y patrocinio de productos de tabaco.
- Impuestos progresivos que desincentiven el consumo y financien campañas de cesación.
- Apoyo a pequeños agricultores para transitar hacia cultivos alternativos sostenibles.

Defender la vida es luchar contra las corporaciones que la mercantilizan. ¡El humo del cigarro no es libertad: es opresión disfrazada de elección!`
    },
    {
      id: "palestina",
      title: "¡Alto al genocidio en Palestina! Exigimos justicia y soberanía",
      date: "2025-04-04",
      category: "Internacional",
      content: `Mientras el mundo mira en silencio, el pueblo palestino enfrenta uno de los asedios más brutales de la historia reciente. Bombardeos indiscriminados, desplazamientos forzados, bloqueo de ayuda humanitaria y destrucción de infraestructura son crímenes de lesa humanidad que no pueden seguir normalizándose.

El Movimiento Social Revolucionario (MSR) se suma a la voz global que exige:
- Cese inmediato de las agresiones militares israelíes.
- Levantamiento total del bloqueo a Gaza.
- Reconocimiento del Estado palestino con fronteras de 1967 y capital en Jerusalén Este.
- Boicot, desinversión y sanciones (BDS) contra empresas cómplices del apartheid.

La libertad de Palestina es inseparable de la lucha antiimperialista mundial. ¡No somos neutrales: estamos con el pueblo palestino!`
    },
    {
      id: "venezuela",
      title: "Venezuela: Defender la soberanía popular frente al cerco imperial",
      date: "2025-04-03",
      category: "Internacional",
      content: `Nuevamente, potencias extranjeras intentan imponer su agenda mediante sanciones económicas, campañas mediáticas y presión diplomática contra la Revolución Bolivariana. Estas medidas no solo violan el derecho internacional, sino que afectan directamente al pueblo venezolano, limitando el acceso a medicinas, alimentos y recursos básicos.

El MSR rechaza toda forma de injerencia y respalda el derecho inalienable del pueblo venezolano a:
- Autodeterminación sin condicionamientos externos.
- Desarrollar su modelo económico y social en paz.
- Contar con el apoyo solidario de los pueblos del mundo frente al bloqueo.

La verdadera democracia no se impone con decretos imperiales, sino que florece desde la organización popular. ¡Manos fuera de Venezuela!`
    }
  ];

  const categories = ['Todos', ...new Set(articles.map(a => a.category))];

  // Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = 'hero';

      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
      setScrollProgress((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openArticle = (article) => setSelectedArticle(article);
  const closeArticle = () => setSelectedArticle(null);

  const filteredArticles = filterCategory === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === filterCategory);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Barra de progreso */}
      <div 
        className="fixed top-0 left-0 h-1 bg-red-600 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Header */}
      <header className={`sticky top-0 z-40 ${darkMode ? 'bg-red-700' : 'bg-red-600'} shadow-lg`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 mr-4 flex-shrink-0">
              <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
                <rect width="100" height="100" fill="#009944" />
                <polygon points="0,100 100,0 100,100" fill="#000000" />
                <polygon points="0,100 100,0 100,100" fill="#FF0000" transform="translate(0, -10)" />
                <polygon points="20,30 25,20 30,30 40,30 45,20 50,30 60,30 65,20 70,30 75,35 80,30 75,40 70,45 65,40 60,50 50,50 40,50 35,40 30,45 25,40 20,35" fill="#FF0000" />
                <text x="20" y="60" fontSize="12" fontWeight="bold" fill="#000000" fontFamily="Arial, sans-serif">MSR</text>
              </svg>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
                República de la Esperanza
              </h1>
              <p className={`text-xs md:text-sm italic ${darkMode ? 'text-red-100' : 'text-red-200'}`}>
                Movimiento por la Salvación de la República
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-red-800 transition"
              aria-label={darkMode ? "Modo claro" : "Modo oscuro"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className="hidden md:flex justify-center space-x-3 py-2 uppercase text-xs md:text-sm font-semibold bg-red-800">
          {Object.keys(sectionRefs).map(sectionId => (
            <a 
              key={sectionId}
              href={`#${sectionId}`}
              className={`hover:text-yellow-300 transition ${activeSection === sectionId ? 'text-yellow-300 font-bold' : ''}`}
              onClick={(e) => e.preventDefault()}
            >
              {sectionId === 'hero' ? 'Inicio' : 
               sectionId === 'principios' ? 'Declaración de Principios' :
               sectionId === 'valores' ? 'Valores' :
               sectionId === 'internacional' ? 'Internacional' :
               sectionId === 'diaspora' ? 'Diáspora' :
               sectionId === 'derechos' ? 'Derechos Humanos' :
               sectionId === 'articulos' ? 'Artículos' :
               sectionId === 'actividades' ? 'Actividades' :
               sectionId === 'donaciones' ? 'Donaciones' : 'Contacto'}
            </a>
          ))}
        </nav>

        {mobileMenuOpen && (
          <nav className="md:hidden bg-red-800 py-4 px-4 space-y-2 text-sm font-semibold">
            {Object.keys(sectionRefs).map(sectionId => (
              <a 
                key={sectionId}
                href={`#${sectionId}`}
                className="block hover:text-yellow-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {sectionId === 'hero' ? 'Inicio' : 
                 sectionId === 'principios' ? 'Declaración de Principios' :
                 sectionId === 'valores' ? 'Valores' :
                 sectionId === 'internacional' ? 'Internacional' :
                 sectionId === 'diaspora' ? 'Diáspora' :
                 sectionId === 'derechos' ? 'Derechos Humanos' :
                 sectionId === 'articulos' ? 'Artículos' :
                 sectionId === 'actividades' ? 'Actividades' :
                 sectionId === 'donaciones' ? 'Donaciones' : 'Contacto'}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Botón flotante */}
      <a
        href="https://www.paypal.com/donate/?business=pablo102158@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg z-30 transition transform hover:scale-110"
        aria-label="Donar con PayPal"
      >
        <HandCoins size={24} />
      </a>

      {/* Hero */}
      <motion.section 
        ref={sectionRefs.hero}
        className={`py-12 md:py-16 text-center px-4 ${darkMode ? 'bg-gradient-to-r from-green-800 to-red-800' : 'bg-gradient-to-r from-green-700 to-red-700'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight px-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ¡ÚNETE A LA LUCHA POR UNA REPÚBLICA<br />
          <span className="text-yellow-400">DEMOCRÁTICA, POPULAR Y REVOLUCIONARIA!</span>
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg max-w-3xl mx-auto px-2"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          El Movimiento por la Salvación de la República convoca a todas las fuerzas populares a organizarse, resistir y construir el futuro que merecemos.
        </motion.p>
      </motion.section>

      {/* Declaración de Principios */}
      <motion.section 
        id="principios"
        ref={sectionRefs.principios}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <Landmark className="text-red-500 mr-3" size={28} /> DECLARACIÓN DE PRINCIPIOS
          </h2>
          <p className="text-lg mb-4">
            <strong>Del Movimiento Por la Salvación de la República (MSR)</strong>
          </p>
          <div className="space-y-4 text-base">
            {/* Contenido completo de la Declaración de Principios aquí */}
            <p>
              En este momento en donde todo parece necesitar nuevas definiciones, donde las aspiraciones y las esperanzas parecen inalcanzables para los pobres (obreros (as), campesinos (as), mujeres, dominico-haitianos (as), chiriperos (as), jóvenes, niños y niñas). Hombres y Mujeres que hemos soñados por más de dos décadas con una República Democrática, Popular, Revolucionaria, humana, Nos resistimos a dejar de soñar y luchar contra la desigualdad, el individualismo, la opresión del capitalismo salvaje, local e imperial.
            </p>
            <p>
              Por tal razón nos constituimos en una expresión política, democrática, revolucionaria, anti-imperialista, solidaria e internacionalista, con el nombre de Movimiento Por la Salvación de la República (MSR), que enarbole y rescate los aportes de las generaciones de luchadores (as) que nos precedieron y los que nos acompañaron en la lucha por alcanzar una República Democrática, Popular, Revolucionaria.
            </p>
            <p>
              MSR se propone lanzar una campaña permanente por una Republica que revierta el concepto nacionalista del chovinismo estrecho a una noción de Soberanía Popular, que extienda el concepto de Republica más allá de las fronteras territoriales hasta cubrir a los que se consideran parte del pueblo dominicano aún hallan nacido o vivan en el exterior.
            </p>
            <p>
              Creemos y abogamos por los valores fundamentales de La libertad solidaria y de La justicia. Lo hacemos conforme a nuestra concepción del hombre y de la mujer en la sociedad actual porque creemos que son seres libres. Pero esa libertad tiene una forma responsable de expresarse y un límite moral en función de la concepción ética que tenga La sociedad.
            </p>
            <p>
              La libertad no debe ser obstaculizada por las condiciones bajas que vive el ser humano. Por ello consideramos una tarea de nuestro Partido. Hacer oposición a la Opresión, a la Miseria, a la Dependencia, Luchar contra todas las limitaciones que impidan el libre desarrollo del pueblo dominicana y que se garanticen las condiciones materiales de la libertad.
            </p>
            <p>
              Creemos que es necesario. Como fuerza política popular y de masas tener conciencia de los graves problemas que afectan al mundo. Creemos en el trascendental compromiso de convertirnos en el Movimiento promotor de un nuevo orden social, que sea un proyecto histórico a la satisfacción de todos. Nuestras aspiraciones por la justicia nos llevan al diseño de una política operativa. Basada en los valores fundamentales de los fundadores, restauradores, Raza Inmortal, Minerva, Manolo, Amaury, Caamaño y otros/as héroes y mártires de nuestra república.
            </p>
            <p>
              Creemos que la educación y la salud deben ser derechos que correspondan en igualdad de condiciones a todos. El régimen político que aspiramos a construir. Necesitará de ciudadanos capacitados y preparados técnica, científica y culturalmente...
            </p>
            <p>
              Creemos que es importante que el sector público se haga cargo de la mayoría de los servicios colectivos y juegue un papel significativo en los sectores estratégicos de la industria. Las materias primas. La energía y el crédito.
            </p>
            <p>
              La política fiscal debe estar al servicio de tales objetivos al desarrollo económico, social para garantizar una justa distribución de las riqueza a todos/as los ciudadanos/as.
            </p>
            <p>
              Creemos en el principio universal de la <strong>Autodeterminación de los pueblos</strong>, de decidir las políticas necesarias para alcanzar su desarrollo.
            </p>
            <p>
              Nuestro Movimiento está comprometido con la defensa de los recursos naturales renovables y no renovables. Especialmente los bosques, los ríos, los yacimientos minerales, los cuales deben ser explotados y utilizados de manera racional.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Valores */}
      <motion.section 
        id="valores"
        ref={sectionRefs.valores}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-black' : 'bg-white'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">NUESTROS VALORES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className={`p-5 rounded-lg shadow-lg ${darkMode ? 'bg-red-900' : 'bg-red-100'}`}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="text-white mb-3" size={32} />
              <h3 className="text-xl font-bold mb-2">Solidaridad</h3>
              <p>Actuamos con empatía y compromiso con las luchas del pueblo trabajador, campesino y marginado.</p>
            </motion.div>
            <motion.div 
              className={`p-5 rounded-lg shadow-lg ${darkMode ? 'bg-red-900' : 'bg-red-100'}`}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Scale className="text-white mb-3" size={32} />
              <h3 className="text-xl font-bold mb-2">Justicia Social</h3>
              <p>Defendemos la redistribución de la riqueza, la educación y salud públicas, y los derechos de todos los sectores oprimidos.</p>
            </motion.div>
            <motion.div 
              className={`p-5 rounded-lg shadow-lg ${darkMode ? 'bg-red-900' : 'bg-red-100'}`}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Globe className="text-white mb-3" size={32} />
              <h3 className="text-xl font-bold mb-2">Antiimperialismo</h3>
              <p>Rechazamos toda forma de dominación extranjera y luchamos por la soberanía nacional en todos los ámbitos.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Internacional - TEXTO ÍNTEGRO */}
      <motion.section 
        id="internacional"
        ref={sectionRefs.internacional}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">INTERNACIONAL</h2>
          <h3 className="text-xl font-bold mb-4">ACTUALIDAD Y COYUNTURA</h3>
          
          <div className="space-y-6 text-base">
            {/* Contenido completo de Internacional aquí */}
            <p>
              La geopolítica mundial entre 2014 y 2025 ha sido testigo de una profunda transformación en el orden internacional, marcada por la transición de un sistema unipolar liderado por Estados Unidos hacia un mundo multipolar caracterizado por tensiones crecientes entre grandes potencias, la reconfiguración de alianzas y la emergencia de nuevos actores globales. Este período ha estado dominado por conflictos regionales, rivalidades estratégicas, crisis económicas y sociales, y desafíos globales como el cambio climático y la pandemia de COVID-19.
            </p>

            <div>
              <h4 className="font-bold text-lg mb-2">El inicio del declive unipolar (2014-2016)</h4>
              <p>
                El año 2014 marcó un punto de inflexión en la geopolítica global con la anexión de Crimea por parte de Rusia, como respuesta al golpe de Estado en Ucrania, patrocinado por la OTAN y EEUU, un evento que resucitó tensiones reminiscentes de la Guerra Fría. La respuesta occidental, liderada por Estados Unidos y la Unión Europea, incluyó sanciones económicas y el fortalecimiento de la OTAN en Europa del Este, lo que profundizó la división entre Occidente y Rusia.
              </p>
              <p className="mt-2">
                Simultáneamente, el ascenso del Estado Islámico (ISIS) en Siria e Irak planteó un desafío al internacional liderada por Estados Unidos a intervenir militarmente, mientras que Rusia aprovechó la oportunidad para consolidar su influencia en Siria apoyando al régimen de Bashar al-Assad. Estos eventos subrayaron la complejidad de los conflictos contemporáneos, donde intereses nacionales, ideologías y dinámicas regionales se entrelazaban.
              </p>
              <p className="mt-2">
                En paralelo, el Brexit en 2016 representó un golpe significativo para la Unión Europea, exponiendo divisiones internas y debilitando su capacidad de proyectar poder político y económico. Mientras tanto, la elección de Donald Trump como presidente de Estados Unidos introdujo un enfoque más nacionalista y unilateral en la política exterior estadounidense, cuestionando el compromiso de Washington con alianzas tradicionales y acuerdos multilaterales como el Acuerdo de París sobre el clima.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">El surgimiento de un mundo multipolar (2017-2020)</h4>
              <p>
                La segunda mitad de la década estuvo marcada por el fortalecimiento de China como una superpotencia global. Bajo el liderazgo de Xi Jinping, China lanzó iniciativas ambiciosas como la Franja y la Ruta (BRI), que buscaba expandir su influencia económica y política en Asia, África y Europa. Al mismo tiempo, Pekín intensificó sus reclamos territoriales en el Mar de China Meridional, generando tensiones con países vecinos y Estados Unidos. La guerra comercial entre China y Estados Unidos, iniciada bajo la administración Trump, simbolizó la creciente rivalidad entre ambas potencias, que abarcaba no solo el ámbito económico, sino también tecnológico y militar.
              </p>
              <p className="mt-2">
                La pandemia de COVID-19, declarada en 2020, exacerbó las tensiones globales. La gestión de la crisis por parte de Pekín fue vista como un ejemplo de eficiencia autoritaria, mientras que las democracias occidentales enfrentaron críticas por su respuesta fragmentada y descoordinada. La pandemia también aceleró la digitalización de la economía y la sociedad, aumentando la dependencia de tecnologías desarrolladas por empresas chinas como Huawei, lo que generó preocupaciones sobre seguridad y espionaje.
              </p>
              <p className="mt-2">
                En América Latina, África y partes de Asia, la competencia entre China y Estados Unidos por la influencia económica y política se intensificó. China ofreció préstamos y ayuda humanitaria durante la pandemia, mientras que Estados Unidos intentó contrarrestar esta influencia mediante iniciativas como el "Build Back Better World" (B3W). Sin embargo, la percepción de muchos países en desarrollo fue que ambas potencias priorizaban sus propios intereses sobre el bienestar local.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Crisis y realineamientos (2021-2025)</h4>
              <p>
                La guerra genocida de Ucrania contra el Dombás y Dotnek. Más el incumplimiento de los acuerdos de Minsk por parte de Ucrania y los garantes, provocó la Operación Militar Especial que condujo a la invasión Rusa de Ucrania en febrero de 2022. Esto marcó otro hito en la geopolítica global. Esta guerra no solo devastó a Ucrania, sino que también polarizó aún más el sistema.
              </p>
              <p className="mt-2">
                Occidente impuso sanciones sin precedentes a Rusia, mientras que países como China, India y varias naciones del Sur Global adoptaron posiciones más equilibradas o neutrales. La guerra también aceleró la transición hacia un orden energético más diversificado, con Europa reduciendo su dependencia del gas ruso y cambiando a USA como su principal proveedor energético.
              </p>
              <p className="mt-2">
                Durante este período, las tensiones entre China y Estados Unidos alcanzaron niveles récord. La visita de Nancy Pelosi a Taiwán en 2022 provocó una escalada militar en el Estrecho de Taiwán, mientras que las restricciones estadounidenses a la exportación de semiconductores avanzados a China intensificaron la carrera tecnológica. En respuesta, China fortaleció sus vínculos con Rusia y otros países no alineados con Occidente, formando un bloque informal conocido como el "BRICS+".
              </p>
              <p className="mt-2">
                En Medio Oriente, el acuerdo entre Israel y varios países árabes mediado por Estados Unidos en 2020 (los Acuerdos de Abraham) alteró las dinámicas regionales, aunque las tensiones entre Irán y Arabia Saudita persistieron. El colapso de Afganistán tras la retirada estadounidense en 2021 dejó un vacío de poder que fue rápidamente ocupado por los talibanes, destacando los límites del intervencionismo occidental.
              </p>
              <p className="mt-2">
                Finalmente, la crisis climática y la transición energética emergieron como temas centrales en la agenda global. Las conferencias climáticas anuales (COP) revelaron las dificultades de lograr consensos entre países desarrollados y en desarrollo, mientras que la competencia por recursos críticos como litio, cobalto y tierras raras adquirió una dimensión estratégica.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Neoliberalismo: Causas y Consecuencias</h4>
              <p>
                El neoliberalismo es una corriente económica que surgió como reacción al socialismo y al movimiento obrero. Se caracteriza por la defensa del libre mercado, la privatización de servicios públicos, la reducción del papel del Estado y la promoción de la globalización.
              </p>
              <p className="mt-2"><strong>Consecuencias:</strong></p>
              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Exacerbación de desigualdades sociales y económicas</li>
                <li>Precarización laboral</li>
                <li>Erosión del Estado de bienestar</li>
                <li>Impacto ambiental negativo</li>
                <li>Deuda y dependencia en países del Sur Global</li>
                <li>Crisis financieras recurrentes</li>
                <li>Polarización política y social</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">Deuda y Dependencia en el Sur Global</h4>
              <p>
                La deuda externa y la dependencia económica perpetúan estructuras de desigualdad global. Los países en desarrollo enfrentan limitación del gasto público, aumento de pobreza, y pérdida de soberanía debido a préstamos condicionados del FMI y Banco Mundial.
              </p>
              <p className="mt-2"><strong>Soluciones propuestas:</strong> reestructuración de deuda, financiamiento alternativo, regulación financiera global, diversificación económica y justicia climática.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">El Movimiento Obrero (1980-2025)</h4>
              <p>
                En las últimas décadas, el movimiento obrero ha enfrentado desindustrialización, precarización laboral y políticas neoliberales. Sin embargo, ha surgido nueva organización en la "gig economy", resistencia en el Sur Global, y mayor participación de mujeres con enfoque interseccional.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Diáspora */}
      <motion.section 
        id="diaspora"
        ref={sectionRefs.diaspora}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-black' : 'bg-white'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">DIÁSPORA</h2>
          <p className="text-lg mb-4">
            La diáspora dominicana constituye una de las fuerzas más dinámicas y solidarias de la nación. Se estima que más de <strong>2.5 millones de dominicanos y dominicanas</strong> viven en el exterior, principalmente en <strong>Estados Unidos, España, Puerto Rico, Italia y Canadá</strong>.
          </p>
          <p className="text-lg mb-4">
            Según el <strong>Banco Central de la República Dominicana</strong>, las remesas familiares enviadas por la diáspora superaron los <strong>USD 10,000 millones en 2023</strong>, representando alrededor del <strong>9% del PIB nacional</strong>.
          </p>
          <p className="text-lg mb-4">Más allá del dinero, la diáspora impulsa el desarrollo mediante:</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Inversiones productivas</strong>: Emprendimientos en turismo, agroindustria, tecnología y vivienda.</li>
            <li><strong>Transferencia de conocimientos</strong>: Profesionales que regresan o colaboran con instituciones locales.</li>
            <li><strong>Activismo cívico</strong>: Organizaciones comunitarias que defienden los derechos de los migrantes.</li>
          </ul>
          <p>
            El MSR reconoce a la diáspora como parte inseparable del pueblo dominicano y aboga por políticas públicas que protejan sus derechos y potencien su rol como agente de desarrollo soberano y popular.
          </p>
        </div>
      </motion.section>

      {/* Derechos Humanos */}
      <motion.section 
        id="derechos"
        ref={sectionRefs.derechos}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-6">
            <Scale className="text-red-500" size={48} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">⚖️ DERECHOS HUMANOS ⚖️</h2>
          <h3 className="text-lg font-bold mb-3">Declaración Universal de Derechos Humanos</h3>
          <p className="text-sm mb-4">Adoptada por la Asamblea General de las Naciones Unidas el 10 de diciembre de 1948</p>
          <blockquote className="text-xl italic border-l-4 border-red-600 pl-6 py-2 my-4">
            Considerando que la libertad, la justicia y la paz en el mundo tienen por base el reconocimiento de la dignidad intrínseca y de los derechos iguales e inalienables de todos los miembros de la familia humana.
          </blockquote>
          <div className="space-y-3 text-left max-w-2xl mx-auto">
            <p><strong>Artículo 1:</strong> Todos los seres humanos nacen libres e iguales en dignidad y derechos.</p>
            <p><strong>Artículo 3:</strong> Todo individuo tiene derecho a la vida, a la libertad y a la seguridad de su persona.</p>
            <p><strong>Artículo 25:</strong> Toda persona tiene derecho a un nivel de vida adecuado que le asegure la salud y el bienestar, y en especial la alimentación, el vestido, la vivienda y la asistencia médica.</p>
            <p><strong>Artículo 26:</strong> Toda persona tiene derecho a la educación. La educación debe ser gratuita, al menos en lo concerniente a la instrucción elemental y fundamental.</p>
          </div>
        </div>
      </motion.section>

      {/* Artículos */}
      <motion.section 
        id="articulos"
        ref={sectionRefs.articulos}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-black' : 'bg-white'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Newspaper className="text-red-500 mr-3" size={32} />
              <h2 className="text-2xl md:text-3xl font-bold">ARTÍCULOS</h2>
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                    filterCategory === category 
                      ? 'bg-red-600 text-white' 
                      : darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredArticles.map(article => (
              <motion.div 
                key={article.id} 
                className={`rounded-lg overflow-hidden shadow-xl cursor-pointer ${
                  darkMode ? 'bg-green-900' : 'bg-green-100'
                }`}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                onClick={() => openArticle(article)}
              >
                <div className="p-6">
                  <span className={`text-sm font-semibold ${
                    darkMode ? 'text-red-400' : 'text-red-600'
                  }`}>{article.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                  {article.author && <p className={`text-sm italic mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Por {article.author}</p>}
                  <p className={`line-clamp-3 ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {article.content.substring(0, 150)}...
                  </p>
                  <p className={`text-sm mt-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>{new Date(article.date).toLocaleDateString('es-ES')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Actividades Recientes */}
      <motion.section 
        id="actividades"
        ref={sectionRefs.actividades}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-green-900' : 'bg-green-100'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">ACTIVIDADES RECIENTES</h2>
          <div className="space-y-6">
            <motion.div 
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-black' : 'bg-white'
              }`}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl font-bold mb-2">Asamblea Nacional por la Soberanía Alimentaria</h3>
              <p className={`text-red-400`}>22 de mayo, 2024 — Santo Domingo</p>
              <p>Agricultores, economistas y comunidades debatieron soluciones a la crisis alimentaria.</p>
            </motion.div>
            <motion.div 
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-black' : 'bg-white'
              }`}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-xl font-bold mb-2">Campaña "Educación para Todos"</h3>
              <p className={`text-red-400`}>21 de mayo, 2024 — Barrios populares</p>
              <p>Brigadas de alfabetización y apoyo escolar en zonas marginadas.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Donaciones */}
      <motion.section 
        id="donaciones"
        ref={sectionRefs.donaciones}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-red-900' : 'bg-red-100'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-2xl text-center">
          <HandCoins className="text-yellow-300 mx-auto mb-4" size={48} />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">DONACIONES</h2>
          <p className="text-lg mb-6">
            El Movimiento por la Salvación de la República (MSR) depende del apoyo solidario de personas comprometidas con la justicia social y la soberanía popular.
          </p>
          <p className="text-lg mb-6">
            Tu donación nos permite mantener este sitio, difundir la verdad y organizar actividades por una República Democrática, Popular y Revolucionaria.
          </p>
          <div className="my-6 flex justify-center">
            <a
              href="https://www.paypal.com/donate/?business=pablo102158@gmail.com&no_recurring=0&item_name=Apoyo+al+MSR&currency_code=USD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
            >
              💰 Donar con PayPal
            </a>
          </div>
          <p className="text-yellow-300 font-semibold italic">
            ¡Cualquier aporte, por pequeño que sea, hace una gran diferencia!
          </p>
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section 
        id="contacto"
        ref={sectionRefs.contacto}
        className={`py-12 md:py-16 px-4 ${darkMode ? 'bg-black' : 'bg-white'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center">
            <Mail className="text-red-500 mr-3" size={28} /> ✉️ CONTACTO
          </h2>
          <div className="space-y-4 text-lg">
            <p><strong>Escríbenos</strong></p>
            <p><strong>Únete a Nosotros</strong></p>
            <p className="font-semibold">Santo Domingo, República Dominicana</p>
            <p className="flex items-center justify-center gap-2">
              <Mail size={20} /> contacto@republicaesperanza.org
            </p>
          </div>
          <div className="mt-10 italic text-xl text-yellow-300">
            “La esperanza no es un sentimiento, es una decisión política.”
          </div>
        </div>
      </motion.section>

      <footer className={`py-6 text-center text-sm ${
        darkMode ? 'bg-black text-gray-500' : 'bg-gray-100 text-gray-600'
      }`}>
        © {new Date().getFullYear()} Movimiento por la Salvación de la República. Todos los derechos reservados.
      </footer>

      {/* Modal de Artículo */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={`rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto border ${
              darkMode ? 'bg-gray-900 border-red-700' : 'bg-white border-red-500'
            }`}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
                    {selectedArticle.author && <p className={`italic mt-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Por {selectedArticle.author}</p>}
                    <p className={`mt-1 ${
                      darkMode ? 'text-red-400' : 'text-red-600'
                    }`}>{selectedArticle.category} • {new Date(selectedArticle.date).toLocaleDateString('es-ES')}</p>
                  </div>
                  <button onClick={closeArticle} className={`${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'
                  }`}>
                    <X size={24} />
                  </button>
                </div>
                <div className={`whitespace-pre-line ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {selectedArticle.content}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}