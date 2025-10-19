import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeSection, setActiveSection] = useState('inicio');

  // Referencias a cada sección
  const inicioRef = useRef(null);
  const sobreNosotrosRef = useRef(null);
  const valoresRef = useRef(null);
  const teologiaLiberacionRef = useRef(null);
  const internacionalRef = useRef(null);
  const diasporaRef = useRef(null);
  const derechosHumanosRef = useRef(null);
  const colaboracionRef = useRef(null);
  const donacionesRef = useRef(null);

  const sections = {
    inicio: inicioRef,
    sobreNosotros: sobreNosotrosRef,
    valores: valoresRef,
    teologiaLiberacion: teologiaLiberacionRef,
    internacional: internacionalRef,
    diaspora: diasporaRef,
    derechosHumanos: derechosHumanosRef,
    colaboracion: colaboracionRef,
    donaciones: donacionesRef
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionKey) => {
    const ref = sections[sectionKey];
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const [key, ref] of Object.entries(sections)) {
        if (!ref?.current) continue;
        try {
          const { offsetTop, offsetHeight } = ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(key);
            break;
          }
        } catch (err) {
          console.warn(`Sección ${key} no accesible:`, err);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // === ARTÍCULO DE ACTUALIDAD - ALEJANDRO ORTIZ ===
  const articuloActualidadAlejandroOrtiz = [
    "ACTUALIDAD Y COYUNTURA",
    "",
    "Por: Alejandro Ortiz",
    "",
    "La geopolítica mundial entre 2014 y 2025 ha sido testigo de una profunda transformación en el orden internacional, marcada por la transición de un sistema unipolar liderado por Estados Unidos hacia un mundo multipolar caracterizado por tensiones crecientes entre grandes potencias, la reconfiguración de alianzas y la emergencia de nuevos actores globales. Este período ha estado dominado por conflictos regionales, rivalidades estratégicas, crisis económicas y sociales, y desafíos globales como el cambio climático y la pandemia de COVID-19. A continuación, se analizan los principales eventos y tendencias que han definido esta década crítica.",
    "",
    "---",
    "El inicio del declive unipolar (2014-2016)",
    "El año 2014 marcó un punto de inflexión en la geopolítica global con la anexión de Crimea por parte de Rusia, como respuesta al golpe de Estado en Ucrania, patrocinado por la OTAN y EEUU, un evento que resucitó tensiones reminiscentes de la Guerra Fría. La respuesta occidental, liderada por Estados Unidos y la Unión Europea, incluyó sanciones económicas y el fortalecimiento de la OTAN en Europa del Este, lo que profundizó la división entre Occidente y Rusia.",
    "Simultáneamente, el ascenso del Estado Islámico (ISIS) en Siria e Irak planteó un desafío al liderazgo internacional liderado por Estados Unidos a intervenir militarmente, mientras que Rusia aprovechó la oportunidad para consolidar su influencia en Siria apoyando al régimen de Bashar al-Assad. Estos eventos subrayaron la complejidad de los conflictos contemporáneos, donde intereses nacionales, ideologías y dinámicas regionales se entrelazaban.",
    "En paralelo, el Brexit en 2016 representó un golpe significativo para la Unión Europea, exponiendo divisiones internas y debilitando su capacidad de proyectar poder político y económico. Mientras tanto, la elección de Donald Trump como presidente de Estados Unidos introdujo un enfoque más nacionalista y unilateral en la política exterior estadounidense, cuestionando el compromiso de Washington con alianzas tradicionales y acuerdos multilaterales como el Acuerdo de París sobre el clima.",
    "",
    "---",
    "El surgimiento de un mundo multipolar (2017-2020)",
    "La segunda mitad de la década estuvo marcada por el fortalecimiento de China como una superpotencia global. Bajo el liderazgo de Xi Jinping, China lanzó iniciativas ambiciosas como la Franja y la Ruta (BRI), que buscaba expandir su influencia económica y política en Asia, África y Europa. Al mismo tiempo, Pekín intensificó sus reclamos territoriales en el Mar de China Meridional, generando tensiones con países vecinos y Estados Unidos. La guerra comercial entre China y Estados Unidos, iniciada bajo la administración Trump, simbolizó la creciente rivalidad entre ambas potencias, que abarcaba no solo el ámbito económico, sino también tecnológico y militar.",
    "La pandemia de COVID-19, declarada en 2020, exacerbó las tensiones globales. La gestión de la crisis por parte de Pekín fue vista como un ejemplo de eficiencia autoritaria, mientras que las democracias occidentales enfrentaron críticas por su respuesta fragmentada y descoordinada. La pandemia también aceleró la digitalización de la economía y la sociedad, aumentando la dependencia de tecnologías desarrolladas por empresas chinas como Huawei, lo que generó preocupaciones sobre seguridad y espionaje.",
    "En América Latina, África y partes de Asia, la competencia entre China y Estados Unidos por la influencia económica y política se intensificó. China ofreció préstamos y ayuda humanitaria durante la pandemia, mientras que Estados Unidos intentó contrarrestar esta influencia mediante iniciativas como el \"Build Back Better World\" (B3W). Sin embargo, la percepción de muchos países en desarrollo fue que ambas potencias priorizaban sus propios intereses sobre el bienestar local.",
    "",
    "---",
    "Crisis y realineamientos (2021-2025)",
    "La guerra genocida de Ucrania contra el Donbás y Donetsk, más el incumplimiento de los acuerdos de Minsk por parte de Ucrania y los garantes, provocó la Operación Militar Especial que condujo a la invasión rusa de Ucrania en febrero de 2022. Esto marcó otro hito en la geopolítica global. Esta guerra no solo devastó a Ucrania, sino que también polarizó aún más el sistema. Occidente impuso sanciones sin precedentes a Rusia, mientras que países como China, India y varias naciones del Sur Global adoptaron posiciones más equilibradas o neutrales. La guerra también aceleró la transición hacia un orden energético más diversificado, con Europa reduciendo su dependencia del gas ruso y cambiando a EE.UU. como su principal proveedor energético.",
    "Durante este período, las tensiones entre China y Estados Unidos alcanzaron niveles récord. La visita de Nancy Pelosi a Taiwán en 2022 provocó una escalada militar en el Estrecho de Taiwán, mientras que las restricciones estadounidenses a la exportación de semiconductores avanzados a China intensificaron la carrera tecnológica. En respuesta, China fortaleció sus vínculos con Rusia y otros países no alineados con Occidente, formando un bloque informal conocido como el \"BRICS+\".",
    "En Medio Oriente, el acuerdo entre Israel y varios países árabes mediado por Estados Unidos en 2020 (los Acuerdos de Abraham) alteró las dinámicas regionales, aunque las tensiones entre Irán y Arabia Saudita persistieron. El colapso de Afganistán tras la retirada estadounidense en 2021 dejó un vacío de poder que fue rápidamente ocupado por los talibanes, destacando los límites del intervencionismo occidental.",
    "Finalmente, la crisis climática y la transición energética emergieron como temas centrales en la agenda global. Las conferencias climáticas anuales (COP) revelaron las dificultades de lograr consensos entre países desarrollados y en desarrollo, mientras que la competencia por recursos críticos como litio, cobalto y tierras raras adquirió una dimensión estratégica.",
    "",
    "---",
    "Perspectivas hacia 2025",
    "Para 2025, el mundo se encuentra en una encrucijada. La era de la hegemonía estadounidense ha dado paso a un sistema multipolar donde China, Rusia, la Unión Europea, India y otras potencias regionales compiten por influencia. Sin embargo, esta multipolaridad no ha traído estabilidad; por el contrario, ha incrementado la incertidumbre y el riesgo de confrontaciones directas.",
    "Las democracias liberales enfrentan desafíos internos y externos, desde el auge del populismo hasta la erosión de las instituciones multilaterales. Por su parte, las potencias emergentes han demostrado una notable capacidad de adaptación, utilizando tecnología y propaganda para consolidar su poder.",
    "En este contexto, la cooperación internacional sigue siendo esencial para abordar desafíos globales como el cambio climático, la seguridad alimentaria y la proliferación nuclear. Sin embargo, la falta de confianza entre las grandes potencias dificulta la construcción de soluciones colectivas. El futuro dependerá de la habilidad de los líderes mundiales para navegar este complejo panorama y encontrar puntos de convergencia en medio de la divergencia.",
    "",
    "---",
    "Conclusión",
    "La geopolítica entre 2014 y 2025 ha sido testigo de cambios fundamentales que han redefinido el orden global. Desde la reunificación de Crimea hasta la guerra en Ucrania, pasando por la pandemia de COVID-19 y la rivalidad entre China y Estados Unidos, estos años han estado marcados por la volatilidad y la incertidumbre. A medida que nos acercamos a 2025, queda claro que el mundo está entrando en una nueva era de competencia estratégica y realineamientos políticos. La pregunta clave es si las naciones podrán superar sus diferencias y trabajar juntas para enfrentar los desafíos compartidos, o si el mundo seguirá fragmentándose en bloques rivales."
  ];

  const declaracionPalestina = [
    "🌍 ¡ALTO AL GENOCIDIO EN PALESTINA! EXIGIMOS JUSTICIA Y SOBERANÍA",
    "",
    "Mientras el mundo mira en silencio, el pueblo palestino enfrenta uno de los asedios más brutales de la historia reciente. Bombardeos indiscriminados, desplazamientos forzados, bloqueo de ayuda humanitaria y destrucción de infraestructura son crímenes de lesa humanidad que no pueden seguir normalizándose.",
    "",
    "El Movimiento Social Revolucionario (MSR) se suma a la voz global que exige:",
    "",
    "• Cese inmediato de las agresiones militares israelíes.",
    "• Levantamiento total del bloqueo a Gaza.",
    "• Reconocimiento del Estado palestino con fronteras de 1967 y capital en Jerusalén Este.",
    "• Boicot, desinversión y sanciones (BDS) contra empresas cómplices del apartheid.",
    "",
    "La libertad de Palestina es inseparable de la lucha antiimperialista mundial. ¡No somos neutrales: estamos con el pueblo palestino!"
  ];

  const declaracionVenezuela = [
    "🇻🇪 VENEZUELA: DEFENDER LA SOBERANÍA POPULAR FRENTE AL CERCO IMPERIAL",
    "",
    "Nuevamente, potencias extranjeras intentan imponer su agenda mediante sanciones económicas, campañas mediáticas y presión diplomática contra la Revolución Bolivariana. Estas medidas no solo violan el derecho internacional, sino que afectan directamente al pueblo venezolano, limitando el acceso a medicinas, alimentos y recursos básicos.",
    "",
    "El MSR rechaza toda forma de injerencia y respalda el derecho inalienable del pueblo venezolano a:",
    "",
    "• Autodeterminación sin condicionamientos externos.",
    "• Desarrollar su modelo económico y social en paz.",
    "• Contar con el apoyo solidario de los pueblos del mundo frente al bloqueo.",
    "",
    "La verdadera democracia no se impone con decretos imperiales, sino que florece desde la organización popular. ¡Manos fuera de Venezuela!",
    "",
    "Publicado: 3 de abril de 2025 | MSR - Frente Antiimperialista Latinoamericano"
  ];

  const articuloTabacoCompleto = [
    "TABACO Y CIGARRO SON DOMINICANOS",
    "Por: Ing. Francisco Matos Mancebo",
    "",
    "Junto con el conuco y el casabe, el tabaco constituye la herencia económica más importante que nos dejaron los taínos. Es hasta hace relativamente pocos años que se vino a aclarar el uso del tabaco por parte de nuestros indígenas.",
    "",
    "Los cronistas explicaron cómo la principal ceremonia mágico/religiosa de los taínos consistía en un acto en el cual el hechicero inhalaba por la nariz unas drogas alucinógenas que lo “montaban” para usar el “argot” criollo, y ponían en contacto con sus dioses para recibir de ellos el oráculo sagrado. Por muchos años, varios investigadores creyeron que la droga utilizada en esta ceremonia, llamada de la “cohoba”, lo era el tabaco, cuando, en realidad, lo que se utilizaba era la piptadenia peregrina. Para inhalar la cohoba se utilizaba un instrumento en forma de “y”, dos de cuyos orificios se colocaban en las fosas nasales y por el otro se soplaba para empujar la droga.",
    "",
    "Representaciones de este inhalador existen en cerámica y huesos, así como en el arte rupestre de nuestras cavernas.",
    "",
    "El tabaco era utilizado por los taínos simplemente para fumarlo, aunque también para curar. Fue en el primer viaje del Almirante, en 1492, cuando los europeos contemplaron, asombrados, el uso de esas hierbas que hacían brotar humo por boca y nariz.",
    "",
    "---",
    "PRIMERAS REFERENCIAS HISTÓRICAS",
    "Siguiendo un orden cronológico, la primera cita que hacen los descubridores sobre el tabaco ocurre apenas un par de días después de haberse descubierto la primera isla de San Salvador, cuando el Almirante explica cómo, en una pequeña canoa, encontró a un indio y en la misma se localizaron “unas hojas secas que deben ser cosas muy apreciadas entre ellos porque ya me trajeron en San Salvador de ellas”.",
    "",
    "Luego, en Cuba, el Almirante explica cómo los indios andaban con “ciertas hierbas para tomar sus sahumerios, que son unas hierbas secas metidas en una cierta hoja, seca también, a manera de mosquete hecho de papel de los que hacen los muchachos la Pascua del Espíritu Santo y encendida por la una parte, por la otra chupan, o sorben, o reciben con el resuello para adentro aquel humo, con lo cual se adormecen las carnes y casi emborracha y así disque no sienten el cansancio. Estos mosquetes o como los llamaremos, llaman ellos tabacos.”",
    "",
    "Fray Bartolomé de las Casas amplía el asunto cuando afirma: “En esta Isla Española y en las comarcanas tenían otra manera de hierba como propias lechugas y éstas secaban al sol y al fuego y hacían de unas hojas de árbol secas un rollete, como se hace un mosquete de papel y metían dentro un poco de aquella hierba y encendían el mosquete por una parte y por la otra sorbían o atraían el humo hacia dentro en el pecho, lo cual les causaban un adormecimiento en las carnes y en todo el cuerpo de manera que ni sentían hambre ni cansancio y estos mosquetes llamaban tabaco, la media sílaba luenga”.",
    "",
    "Unos sesenta años después del Descubrimiento visitó la Española el milanés Girolano Benzoni, quien afirmó que, con relación al tabaco: “Cuando esas hojas están en sazón, las cogen de la mata, las atan en manojos y las suspenden cerca del fuego en su hogar hasta que están bien secas y cuando desean usarlas toman una hoja de la espiga de su grano y poniendo una de aquellas otras dentro de estas, las enrollan juntas como en un canuto; entonces le pegan fuego por un extremo y poniéndose el otro en la boca, aspiran a través de eso, con lo cual el humo así aspirado penetra en la boca, la garganta y la cabeza y lo retienen así tanto como pueden, porque haciéndolo encuentran cierto placer y tanto se llenan con ese humo cruel que pierden el sentido. Y algunos hay que toman tanto humo que caen a tierra como si fueran muertos y permanecen la mayor parte del día o de la noche sin sentido.”",
    "",
    "El viajero Benzoni incluyó en su obra un muy interesante dibujo que mostraba cómo en la Isla Española, el tabaco también era utilizado por los indios para curar a los enfermos, ya que el hechicero se ponía un tabaco en la boca y soplaba el humo sobre la cara del paciente. Esta práctica mágica/religiosa se ha mantenido en nuestro país, pues, pasando como costumbre de los esclavos en sus ritos religiosos, en el vodú y otras prácticas de nuestra religiosidad popular, el oficiante siempre tiene un tabaco en la boca y cubre con su humo a varios de los participantes.",
    "",
    "El uso del tabaco era, pues, múltiple. Por un lado, se utilizaba para adormecer el cuerpo y dar placer; por otro, como elemento auspiciador de la mejoría de los enfermos vía el hechicero.",
    "",
    "---",
    "ADOPCIÓN POR COLONIZADORES Y ESCRIBIDOS",
    "Los españoles a su llegada a nuestra isla rápidamente adoptaron el uso del tabaco. Para 1540, el Padre Las Casas señala como un hecho notable el haber conocido “un español casado y honrado, en esta isla que usó tomar los tabacos y el humo de ellos, como los tomaban los indios y decía que por el gran provecho que sentía, por ninguna cosa los dejaría”.",
    "",
    "Pero fueron realmente los esclavos africanos los que con mayor entusiasmo adoptaron la costumbre de fumar el tabaco. El propio Benzoni explica cómo a los esclavos, el tabaco “les quita el cansancio”.",
    "",
    "Oviedo, en 1546, agrega que: “Al presente muchos negros de los que están en esta ciudad (de Santo Domingo) y en la isla toda, han tomado la misma costumbre, crían en las haciendas y heredades de sus amos esta hierba y toman las mismas ahumadas o tabacos porque dicen que, cuando dejan de trabajar y tomar el tabaco se les quita el cansancio”.",
    "",
    "El padre Bernabé Cobo, jesuita, explica cómo “la costumbre se les pegó a los españoles de los indios de la Isla Española, en la cual los caciques y más principales usaban tomarlo de esta manera; metían sus hojas después de secas y curadas en unos palillos huecos curiosamente labrados para este efecto y encendíanlo por una parte y por otra bebían el humo”.",
    "",
    "Vemos pues, como tanto el esclavo africano como el español colonizador rápidamente adoptaron la costumbre de fumar tabaco, por lo que se puede decir, sin lugar a dudas, que el tabaco fue el regalo de América más universalmente aceptado por la humanidad y fue precisamente desde La Española, centro irradiador de la colonización, desde donde el tabaco fue llevado a Europa y África.",
    "",
    "— Ing. Francisco Matos Mancebo"
  ];

  const articuloNeoliberalismo = [
    "NEOLIBERALISMO: CAUSAS Y CONSECUENCIAS PARA LA HUMANIDAD",
    "",
    "El neoliberalismo es una corriente económica, política y social que surgió en el siglo XX como una reacción al socialismo y en particular contra el movimiento obrero por ser la base de sustentación del mismo. La atomización de la clase obrera permitió una lucha potencializada contra los países socialistas y evitó el surgimiento de nuevos Estados obreros, socialistas y democracias populares. La tesis de lucha contra el intervencionismo estatal y las políticas keynesianas se presentó como despojo de las conquistas del movimiento que predominó tras la Segunda Guerra Mundial. Se caracteriza por la defensa del libre mercado, la privatización de los servicios públicos, la reducción del papel del Estado en la economía y la promoción de la globalización.",
    "",
    "---",
    "CAUSAS DEL NEOLIBERALISMO",
    "1. Crisis del Estado de Bienestar (Keynesianismo)",
    "En las décadas de 1970 y 1980, muchos países enfrentaron crisis económicas derivadas de la corrupción, rapina imperialista y los préstamos colonizantes. Esto hizo colapsar el modelo keynesiano, que implicaba fuerte intervencionismo estatal, política sobre la economía, altos niveles de gasto público y subsidios. Esto generó inflación elevada, déficits fiscales y estanflación. El neoliberalismo fue presentado como alternativa.",
    "2. Influencia de las Escuelas Económicas Neoliberales",
    "Pensadores como Friedrich von Hayek, Milton Friedman y Ludwig von Mises desarrollaron teorías que criticaban el intervencionismo estatal y defendían el libre mercado.",
    "3. Globalización Económica",
    "La expansión del comercio internacional y la integración financiera mundial crearon un entorno propicio para políticas neoliberales. El FMI y el Banco Mundial promovieron reformas estructurales basadas en principios neoliberales.",
    "4. Revolución Tecnológica y Financiera",
    "La digitalización y la desregulación financiera permitieron la creación de mercados globales de capital, facilitando la acumulación de riqueza en manos de unos pocos.",
    "5. Políticas de Gobiernos Clave",
    "Líderes como Margaret Thatcher y Ronald Reagan implementaron políticas neoliberales en los años 80, consolidando este modelo como paradigma dominante.",
    "",
    "---",
    "CONSECUENCIAS DEL NEOLIBERALISMO",
    "Aspectos Negativos:",
    "• Desigualdad Social: El 1% más rico posee casi dos tercios de la riqueza global generada desde 2020 (Oxfam).",
    "• Precarización Laboral: Flexibilización laboral ha llevado a empleos inseguros, mal remunerados y sin derechos.",
    "• Erosión del Estado de Bienestar: Privatización de salud, educación y servicios básicos ha limitado el acceso de las clases populares.",
    "• Impacto Ambiental: Prioriza crecimiento económico sobre sostenibilidad, acelerando la explotación de recursos naturales.",
    "• Deuda y Dependencia: Países en desarrollo adoptaron políticas neoliberales bajo presión del FMI, generando dependencia y pérdida de soberanía.",
    "• Crisis Financieras Recurrentes: Desregulación financiera provocó burbujas especulativas como la de 2008.",
    "• Polarización Política y Social: Ha alimentado movimientos reivindicativos y tensiones sociales.",
    "",
    "---",
    "IMPACTO EN LA HUMANIDAD",
    "El neoliberalismo ha tenido un impacto profundo y ambivalente: ha permitido avances tecnológicos y cierta reducción de pobreza en algunas regiones, pero ha profundizado desigualdades, precarizado el trabajo y puesto en peligro el planeta.",
    "",
    "CONCLUSIÓN",
    "El neoliberalismo es un modelo económico controvertido. Para el futuro de la humanidad, es fundamental explorar alternativas que prioricen la justicia social, la equidad y la protección del medio ambiente. Modelos como la economía solidaria, el decrecimiento y el bienestar común están ganando relevancia como respuestas a los desafíos del neoliberalismo.",
    "",
    "— Movimiento por la Salvación de la República (MSR)"
  ];

  const articuloDeudaDependencia = [
    "DEUDA Y DEPENDENCIA EN PAÍSES EN DESARROLLO: UN ANÁLISIS GLOBAL",
    "",
    "La deuda externa y la dependencia económica han sido temas centrales en el análisis del desarrollo de los países en desarrollo. Estos fenómenos perpetúan estructuras de desigualdad global y limitan la soberanía nacional.",
    "",
    "---",
    "LA DEUDA EXTERNA",
    "Se refiere al dinero que un país debe a acreedores extranjeros. Causas:",
    "• Herencia colonial: economías débiles tras la independencia.",
    "• Políticas neoliberales: programas de ajuste del FMI/Banco Mundial.",
    "• Crisis globales: pandemia, crisis financieras.",
    "• Dependencia de exportaciones primarias: volatilidad de precios.",
    "",
    "Impactos:",
    "• Limitación del gasto público en salud, educación e infraestructura.",
    "• Aumento de la pobreza por medidas de austeridad.",
    "• Fuga de capitales y malversación.",
    "",
    "---",
    "DEPENDENCIA ECONÓMICA",
    "Concepto desarrollado por Prebisch y Gunder Frank: integración subordinada en la economía global.",
    "Manifestaciones:",
    "• Exportan materias primas baratas, importan manufacturas caras.",
    "• Inversión extranjera en sectores extractivos sin externalidades positivas.",
    "• Dependencia tecnológica.",
    "",
    "Ciclo de dependencia: Exportación primaria → Baja industrialización → Dependencia de importaciones → Acumulación de deuda → Subdesarrollo.",
    "",
    "---",
    "DIMENSIÓN GLOBAL",
    "• FMI y Banco Mundial imponen condiciones que priorizan el pago de deuda sobre el bienestar social.",
    "• Deuda odiosa: contraída por dictaduras (ej. Argentina 1976-1983, Sudáfrica apartheid).",
    "• Movimientos globales exigen cancelación de deuda (Campaña Jubileo).",
    "",
    "---",
    "CONSECUENCIAS PARA EL SUR GLOBAL",
    "• Sobrecarga fiscal: el servicio de la deuda consume presupuestos nacionales.",
    "• Dependencia externa: condicionamientos políticos y transferencia de riqueza.",
    "• Vulnerabilidad económica: efecto bola de nieve.",
    "• Impacto social: aumento de pobreza, desigualdad y migración forzada.",
    "• Pérdida de soberanía: privatización forzada e interferencia política.",
    "",
    "---",
    "PROPUESTAS",
    "• Reestructuración justa de la deuda.",
    "• Financiamiento alternativo (bonos verdes, cooperación Sur-Sur).",
    "• Regulación financiera global.",
    "• Diversificación económica.",
    "• Justicia climática: responsabilidad histórica de países desarrollados.",
    "",
    "CONCLUSIÓN",
    "La deuda y la dependencia son consecuencias de estructuras económicas globales desiguales. Solo mediante reformas sistémicas, solidaridad internacional y justicia social será posible construir un mundo más equitativo.",
    "",
    "— MSR - Frente Antiimperialista Latinoamericano"
  ];

  const articuloMovimientoObrero = [
    "EL MOVIMIENTO OBRERO EN LOS ÚLTIMOS 30 O 40 AÑOS: TRANSFORMACIONES, DESAFÍOS Y RESISTENCIAS",
    "",
    "El movimiento obrero ha sido una fuerza central en la configuración de las relaciones laborales y los derechos sociales. En las últimas décadas, ha enfrentado transformaciones profundas debido a la globalización, la digitalización, la desindustrialización y las reformas neoliberales.",
    "",
    "---",
    "EROSIÓN DEL PODER OBRERO TRADICIONAL",
    "Las políticas neoliberales de los años 80 y 90 priorizaron desregulación, privatización y flexibilización laboral. La desindustrialización en EE.UU., Reino Unido y Alemania debilitó a los sindicatos industriales. En América Latina, las crisis y los ajustes del FMI erosionaron el poder obrero, reemplazando empleos formales por trabajo precario e informal.",
    "",
    "---",
    "NUEVAS FORMAS DE TRABAJO Y PRECARIZACIÓN",
    "La economía de plataformas (Uber, Deliveroo, Amazon) ha creado empleos sin seguridad social ni vínculos contractuales. Esto ha desafiado las formas tradicionales de sindicalización, pero también ha generado nuevas formas de organización mediante redes digitales y sindicatos alternativos.",
    "",
    "---",
    "LUCHAS EN EL SUR GLOBAL",
    "En China, millones de migrantes rurales han protagonizado huelgas por mejores salarios. En India, sindicatos como CITU y BMS lideran movilizaciones masivas. En América Latina, protestas en Chile (2019) y Brasil demuestran el resurgimiento de la lucha obrera contra el neoliberalismo.",
    "",
    "---",
    "ROL DE LA MUJER E INTERSECCIONALIDAD",
    "Las mujeres han ganado protagonismo en sectores como cuidado, educación y trabajo doméstico. Las luchas laborales se entrelazan con demandas por justicia racial, derechos de inmigrantes y protección ambiental, ampliando la base del movimiento.",
    "",
    "---",
    "DESAFÍOS FUTUROS",
    "La automatización y la inteligencia artificial amenazan millones de empleos. Sin embargo, la pandemia reveló la importancia de los trabajadores esenciales, y la sindicalización crece en empresas como Starbucks y Amazon.",
    "",
    "CONCLUSIÓN",
    "El movimiento obrero no es una reliquia del pasado; es una fuerza viva que evoluciona. Su historia reciente enseña que, pese a los desafíos, la solidaridad y la organización siguen siendo herramientas poderosas para la justicia social y la dignidad laboral.",
    "",
    "— Movimiento por la Salvación de la República (MSR)"
  ];

  const declaracionUniversal = [
    "Preámbulo",
    "Considerando que la libertad, la justicia y la paz en el mundo tienen por base el reconocimiento de la dignidad intrínseca y de los derechos iguales e inalienables de todos los miembros de la familia humana;",
    "Considerando que el desconocimiento y el menosprecio de los derechos humanos han originado actos de barbarie ultrajantes para la conciencia de la humanidad, y que se ha proclamado, como la aspiración más elevada del hombre, el advenimiento de un mundo en que los seres humanos, liberados del temor y de la miseria, disfruten de la libertad de palabra y de la libertad de creencias;",
    "Considerando esencial que los derechos humanos sean protegidos por un régimen de Derecho, a fin de que el hombre no se vea compelido al supremo recurso de la rebelión contra la tiranía y la opresión;",
    "Considerando también esencial promover el desarrollo de relaciones amistosas entre las naciones;",
    "Considerando que los pueblos de las Naciones Unidas han reafirmado en la Carta su fe en los derechos fundamentales del hombre, en la dignidad y el valor de la persona humana y en la igualdad de derechos de hombres y mujeres, y se han declarado resueltos a promover el progreso social y a elevar el nivel de vida dentro de un concepto más amplio de la libertad;",
    "Considerando que los Estados Miembros se han comprometido a asegurar, en cooperación con la Organización de las Naciones Unidas, el respeto universal y efectivo a los derechos y libertades fundamentales del hombre, y",
    "Considerando que una concepción común de estos derechos y libertades es de la mayor importancia para el pleno cumplimiento de dicho compromiso,",
    "",
    "Artículo 1",
    "Todos los seres humanos nacen libres e iguales en dignidad y derechos y, dotados como están de razón y conciencia, deben comportarse fraternalmente los unos con los otros.",
    "",
    "Artículo 2",
    "Toda persona tiene todos los derechos y libertades proclamados en esta Declaración, sin distinción alguna de raza, color, sexo, idioma, religión, opinión política o de cualquier otra índole, origen nacional o social, posición económica, nacimiento o cualquier otra condición.",
    "Además, no se hará distinción alguna fundada en la condición política, jurídica o internacional del país o territorio de cuya jurisdicción dependa una persona, tanto si se trata de un país independiente, como de un territorio bajo administración fiduciaria, no autónomo o sometido a cualquier otra limitación de soberanía.",
    "",
    "Artículo 3",
    "Todo individuo tiene derecho a la vida, a la libertad y a la seguridad de su persona.",
    "",
    "Artículo 4",
    "Nadie estará sometido a esclavitud ni a servidumbre; la esclavitud y la trata de esclavos están prohibidas en todas sus formas.",
    "",
    "Artículo 5",
    "Nadie será sometido a torturas ni a penas o tratos crueles, inhumanos o degradantes.",
    "",
    "Artículo 6",
    "Todo ser humano tiene derecho, en todas partes, al reconocimiento de su personalidad jurídica.",
    "",
    "Artículo 7",
    "Todos son iguales ante la ley y tienen, sin distinción, derecho a igual protección de la ley. Todos tienen derecho a igual protección contra toda discriminación que infrinja esta Declaración y contra toda provocación a tal discriminación.",
    "",
    "Artículo 8",
    "Toda persona tiene derecho a un recurso efectivo, ante los tribunales nacionales competentes, que la ampare contra actos que violen sus derechos fundamentales reconocidos por la constitución o por la ley.",
    "",
    "Artículo 9",
    "Nadie podrá ser arbitrariamente detenido, preso ni desterrado.",
    "",
    "Artículo 10",
    "Toda persona tiene derecho, en condiciones de plena igualdad, a ser oída públicamente y con justicia por un tribunal independiente e imparcial, para la determinación de sus derechos y obligaciones o para el examen de cualquier acusación contra ella en materia penal.",
    "",
    "Artículo 11",
    "1. Toda persona acusada de delito tiene derecho a que se presuma su inocencia mientras no se pruebe su culpabilidad, conforme a la ley y en juicio público en el que se le hayan asegurado todas las garantías necesarias para su defensa.",
    "2. Nadie será condenado por actos u omisiones que en el momento de cometerse no fueron delictivos según el derecho nacional o internacional. Tampoco se impondrá pena más grave que la aplicable en el momento de la comisión del delito.",
    "",
    "Artículo 12",
    "Nadie será objeto de injerencias arbitrarias en su vida privada, su familia, su domicilio o su correspondencia, ni de ataques a su honra o a su reputación. Toda persona tiene derecho a la protección de la ley contra tales injerencias o ataques.",
    "",
    "Artículo 13",
    "1. Toda persona tiene derecho a circular libremente y a elegir su residencia en el territorio de un Estado.",
    "2. Toda persona tiene derecho a salir de cualquier país, incluso del propio, y a regresar a su país.",
    "",
    "Artículo 14",
    "1. En caso de persecución, toda persona tiene derecho a buscar asilo, y a disfrutar de él, en cualquier país.",
    "2. Este derecho no podrá ser invocado contra una acción judicial realmente originada por delitos comunes o por actos contrarios a los propósitos y principios de las Naciones Unidas.",
    "",
    "Artículo 15",
    "1. Toda persona tiene derecho a una nacionalidad.",
    "2. A nadie se privará arbitrariamente de su nacionalidad ni del derecho a cambiar de nacionalidad.",
    "",
    "Artículo 16",
    "1. Los hombres y las mujeres, a partir de la edad núbil, tienen derecho, sin restricción alguna por motivos de raza, nacionalidad o religión, a casarse y fundar una familia; y disfrutarán de iguales derechos en cuanto al matrimonio, durante el matrimonio y en caso de disolución del matrimonio.",
    "2. Solo mediante libre y pleno consentimiento de los futuros esposos podrá contraerse el matrimonio.",
    "3. La familia es el elemento natural y fundamental de la sociedad y tiene derecho a la protección de la sociedad y del Estado.",
    "",
    "Artículo 17",
    "1. Toda persona tiene derecho a la propiedad, individual y colectivamente.",
    "2. Nadie será privado arbitrariamente de su propiedad.",
    "",
    "Artículo 18",
    "Toda persona tiene derecho a la libertad de pensamiento, de conciencia y de religión; este derecho incluye la libertad de cambiar de religión o de creencia, así como la libertad de manifestar su religión o su creencia, individual y colectivamente, tanto en público como en privado, por la enseñanza, la práctica, el culto y la observancia.",
    "",
    "Artículo 19",
    "Todo individuo tiene derecho a la libertad de opinión y de expresión; este derecho incluye el de no ser molestado a causa de sus opiniones, el de investigar y recibir informaciones y opiniones, y el de difundirlas, sin limitación de fronteras, por cualquier medio de expresión.",
    "",
    "Artículo 20",
    "1. Toda persona tiene derecho a la libertad de reunión y de asociación pacíficas.",
    "2. Nadie podrá ser obligado a pertenecer a una asociación.",
    "",
    "Artículo 21",
    "1. Toda persona tiene derecho a participar en el gobierno de su país, directamente o por medio de representantes libremente escogidos.",
    "2. Toda persona tiene el derecho de acceder, en condiciones de igualdad, a las funciones públicas de su país.",
    "3. La voluntad del pueblo es la base de la autoridad del poder público; esta voluntad se expresará mediante elecciones auténticas que habrán de celebrarse periódicamente, por sufragio universal e igual y por voto secreto u otro procedimiento equivalente que garantice la libertad del voto.",
    "",
    "Artículo 22",
    "Toda persona, como miembro de la sociedad, tiene derecho a la seguridad social, y a obtener, mediante el esfuerzo nacional y la cooperación internacional, habida cuenta de la organización y los recursos de cada Estado, la satisfacción de los derechos económicos, sociales y culturales, indispensables a su dignidad y al libre desarrollo de su personalidad.",
    "",
    "Artículo 23",
    "1. Toda persona tiene derecho al trabajo, a la libre elección de su trabajo, a condiciones equitativas y satisfactorias de trabajo y a la protección contra el desempleo.",
    "2. Toda persona tiene derecho, sin discriminación alguna, a igual salario por trabajo igual.",
    "3. Toda persona que trabaja tiene derecho a una remuneración equitativa y satisfactoria, que le asegure, así como a su familia, una existencia conforme a la dignidad humana y que será complementada, en caso necesario, por cualesquiera otros medios de protección social.",
    "4. Toda persona tiene derecho a fundar sindicatos y a sindicalizarse para la defensa de sus intereses.",
    "",
    "Artículo 24",
    "Toda persona tiene derecho al descanso, al disfrute del tiempo libre, a una limitación razonable de la duración del trabajo y a vacaciones periódicas pagadas.",
    "",
    "Artículo 25",
    "1. Toda persona tiene derecho a un nivel de vida adecuado que le asegure, así como a su familia, la salud y el bienestar, y en especial la alimentación, el vestido, la vivienda, la asistencia médica y los servicios sociales necesarios; tiene asimismo derecho a los seguros en caso de desempleo, enfermedad, invalidez, viudez, vejez u otros casos de pérdida de sus medios de subsistencia por circunstancias independientes de su voluntad.",
    "2. La maternidad y la infancia tienen derecho a cuidados y asistencia especiales. Todos los niños, nacidos de matrimonio o fuera de matrimonio, disfrutarán de la misma protección social.",
    "",
    "Artículo 26",
    "1. Toda persona tiene derecho a la educación. La educación debe ser gratuita, al menos en lo concerniente a la instrucción elemental y fundamental. La instrucción elemental será obligatoria. La instrucción técnica y profesional habrá de ser generalizada; el acceso a los estudios superiores será igual para todos, en función de los méritos respectivos.",
    "2. La educación tendrá por objeto el pleno desarrollo de la personalidad humana y el fortalecimiento del respeto a los derechos humanos y a las libertades fundamentales; favorecerá la comprensión, la tolerancia y la amistad entre todas las naciones y todos los grupos étnicos o religiosos; y promoverá el desarrollo de las actividades de las Naciones Unidas para el mantenimiento de la paz.",
    "3. Los padres tendrán derecho preferente a escoger el tipo de educación que habrá de darse a sus hijos.",
    "",
    "Artículo 27",
    "1. Toda persona tiene derecho a tomar parte libremente en la vida cultural de la comunidad, a gozar de las artes y a participar en el progreso científico y en los beneficios que de él resulten.",
    "2. Toda persona tiene derecho a la protección de los intereses morales y materiales que le correspondan por razón de las producciones científicas, literarias o artísticas de que sea autora.",
    "",
    "Artículo 28",
    "Toda persona tiene derecho a que se establezca un orden social y internacional en que los derechos y libertades proclamados en esta Declaración se hagan plenamente efectivos.",
    "",
    "Artículo 29",
    "1. Toda persona tiene deberes respecto a la comunidad, puesto que solo en ella puede desarrollar libre y plenamente su personalidad.",
    "2. En el ejercicio de sus derechos y en el disfrute de sus libertades, toda persona estará solamente sujeta a las limitaciones establecidas por la ley con el único fin de asegurar el reconocimiento y el respeto de los derechos y libertades de los demás, y de satisfacer las justas exigencias de la moral, del orden público y del bienestar general en una sociedad democrática.",
    "3. Estos derechos y libertades no podrán, en ningún caso, ser ejercidos en oposición a los propósitos y principios de las Naciones Unidas.",
    "",
    "Artículo 30",
    "Nada en esta Declaración podrá interpretarse en el sentido de que confiere derecho alguno al Estado, a un grupo o a una persona, para emprender y desarrollar actividades o realizar actos tendientes a la supresión de cualquiera de los derechos y libertades proclamados en esta Declaración."
  ];

  const articuloTeologiaLiberacion = [
    "FE, JUSTICIA Y LIBERACIÓN",
    "",
    "La Teología de Liberación surgió en los años 60 y 70 del siglo XX en el corazón de América Latina, impulsada por pensadores como Gustavo Gutiérrez (Perú), Leonardo Boff (Brasil), Jon Sobrino (El Salvador) y figuras pastorales como Monseñor Óscar Romero. Frente a una Iglesia que históricamente se alió con el poder colonial y oligárquico, estos teólogos se preguntaron: ¿qué significa anunciar el Reino de Dios en un continente marcado por la pobreza extrema, las dictaduras y la explotación imperialista?",
    "",
    "Su respuesta fue clara: la fe no puede ser neutral. Amar a Dios implica amar al prójimo oprimido. La salvación no es solo espiritual: es integral, histórica y colectiva. Por eso, la Teología de Liberación adopta el método de \"ver, juzgar y actuar\":",
    "",
    "• Ver la realidad con los ojos de los pobres.",
    "• Juzgarla a la luz del Evangelio y la justicia.",
    "• Actuar para transformarla.",
    "",
    "---",
    "UNA OPCIÓN PREFERENCIAL POR LOS POBRES",
    "Esta corriente teológica no busca fundar una nueva religión, sino recuperar el núcleo radical del mensaje de Jesús: liberación de los cautivos, justicia para los marginados, denuncia de los poderes opresores. Monseñor Romero lo expresó con claridad: “Si me matan, resucitaré en mi pueblo”.",
    "",
    "El Documento de Puebla (1979), de la Conferencia Episcopal Latinoamericana, afirmó que la Iglesia debe hacer una “opción preferencial por los pobres”, no por ideología, sino por fidelidad al Evangelio. Esta opción implica compromiso con la transformación de las estructuras injustas, no solo con la caridad asistencial.",
    "",
    "En República Dominicana, esta tradición se expresa en comunidades de base, en curas obreros, en pastores que acompañan luchas campesinas y en creyentes que entienden que la oración sin acción es hipocresía.",
    "",
    "---",
    "CONTRA EL FUNDAMENTALISMO Y EL NEOLIBERALISMO",
    "Hoy, la Teología de Liberación enfrenta nuevos desafíos: el auge del fundamentalismo religioso, aliado al capital; la mercantilización de la fe; y la instrumentalización de la espiritualidad para justificar la sumisión. Frente a esto, reafirma que:",
    "",
    "• Dios no está del lado del poder, sino del pueblo.",
    "• La esperanza no es pasiva: es revolucionaria.",
    "• La cruz no glorifica el sufrimiento, sino que lo denuncia.",
    "",
    "Por eso, el MSR abraza esta corriente como parte de su horizonte ético: porque creemos que la lucha por la justicia es un acto de fe en la humanidad y en el futuro.",
    "",
    "— Movimiento por la Salvación de la República (MSR)"
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-red-800 p-4 text-center sticky top-0 z-50">
        <div className="inline-block relative w-24 h-24 mb-2">
          <div className="absolute inset-0 bg-green-600"></div>
          <div 
            className="absolute bottom-0 left-0 right-0 h-full transform -rotate-45 origin-top-left"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          >
            <div className="w-full h-full bg-black"></div>
          </div>
          <div 
            className="absolute bottom-0 left-0 right-0 h-full transform -rotate-45 origin-top-left"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)' }}
          >
            <div className="w-full h-full bg-red-600"></div>
          </div>
          <div className="absolute top-2 left-2 text-red-600 text-4xl font-bold">★</div>
          <div className="absolute top-12 left-3 text-black font-bold text-sm">MSR</div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">REPÚBLICA DE ESPERANZA</h1>
        <p className="text-sm mt-2 flex items-center justify-center gap-2">
          <span>📰</span> LA VERDAD QUE NADIE QUIERE CONTAR
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-green-800 p-3 flex flex-wrap justify-center gap-2 sticky top-24 z-40">
        {[
          { key: 'inicio', label: 'INICIO' },
          { key: 'sobreNosotros', label: 'SOBRE NOSOTROS' },
          { key: 'valores', label: 'VALORES' },
          { key: 'teologiaLiberacion', label: 'TEOLOGÍA DE LIBERACIÓN' },
          { key: 'internacional', label: 'INTERNACIONAL' },
          { key: 'diaspora', label: 'DIÁSPORA' },
          { key: 'derechosHumanos', label: 'DERECHOS HUMANOS' },
          { key: 'colaboracion', label: 'COLABORACIÓN' },
          { key: 'donaciones', label: 'DONACIONES' }
        ].map(item => (
          <button 
            key={item.key}
            onClick={() => scrollToSection(item.key)}
            className={`px-3 py-1 text-xs md:text-sm font-bold rounded transition-colors ${
              activeSection === item.key 
                ? 'bg-yellow-500 text-black' 
                : 'bg-red-700 hover:bg-red-600'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section ref={sections.inicio} className="p-6 m-4 border-4 border-yellow-500 bg-gradient-to-r from-red-900 to-green-900">
        <h2 className="text-red-400 text-xs uppercase mb-2">¡LLAMADO A LA ACCIÓN!</h2>
        <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-4">
          ¡ÚNETE A LA LUCHA POR UNA REPÚBLICA DEMOCRÁTICA, POPULAR Y REVOLUCIONARIA!
        </h2>
        <p className="text-sm">
          El Movimiento por la Salvación de la República convoca a todas las fuerzas populares a organizarse, resistir y construir el futuro que merecemos.
        </p>
      </section>

      {/* Sobre Nosotros */}
      <section ref={sections.sobreNosotros} className="p-6 m-4 border-4 border-red-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          👊 SOBRE NOSOTROS 👊
        </h2>
        <div className="bg-gray-900 p-4 border border-red-500 mb-6">
          <p>
            El Movimiento por la Salvación de la República (MSR) nace como respuesta a la crisis moral, política y económica que asfixia a nuestro pueblo.
          </p>
          <p className="mt-2">
            Inspirados en el pensamiento de Hostos, los restauradores y las luchas populares del siglo XX, nos proponemos construir una República que garantice la justicia, la soberanía y la dignidad humana.
          </p>
        </div>

        {/* Consejo Directivo */}
        <div className="bg-gray-900 p-4 border border-yellow-500 mb-6">
          <h3 className="text-yellow-400 font-bold text-lg mb-3 text-center">CONSEJO DIRECTIVO</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Alejandro Ortiz", role: "Director General y Editor Jefe" },
              { name: "Dolores Ricart", role: "Secretaria de Organización y Movilización Popular" },
              { name: "Nelson Díaz", role: "Coordinador de Análisis Político y Coyuntura Internacional" }
            ].map((member, index) => (
              <div key={index} className="text-center p-3 border border-red-500 bg-black">
                <p className="font-bold text-green-400">{member.name}</p>
                <p className="text-sm text-gray-300 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-4 border border-red-500 mb-6 max-h-[700px] overflow-y-auto">
          {articuloMovimientoObrero.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-2 ${
                line.startsWith("EL MOVIMIENTO") 
                  ? "font-bold text-yellow-400 text-xl mt-4"
                  : line.startsWith("---")
                  ? "font-bold text-red-400 mt-4"
                  : line.startsWith("EROSIÓN") || line.startsWith("NUEVAS") || line.startsWith("LUCHAS") || line.startsWith("ROL") || line.startsWith("DESAFÍOS") || line.startsWith("CONCLUSIÓN")
                  ? "font-bold text-yellow-400 mt-3"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section ref={sections.valores} className="p-6 m-4 border-4 border-green-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          🌱 NUESTROS VALORES 🌱
        </h2>
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {[
            { title: 'Solidaridad', desc: 'Actuamos con empatía y compromiso con las luchas del pueblo trabajador, campesino y marginado.' },
            { title: 'Justicia Social', desc: 'Defendemos la redistribución de la riqueza, la educación y salud públicas, y los derechos de todos los sectores oprimidos.' },
            { title: 'Antiimperialismo', desc: 'Rechazamos toda forma de dominación extranjera y luchamos por la soberanía nacional en todos los ámbitos.' }
          ].map((val, i) => (
            <div key={i} className="bg-gray-900 p-4 border border-green-500">
              <h3 className="text-yellow-400 font-bold mb-2">{val.title}</h3>
              <p className="text-sm">{val.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-4 border border-green-500 mb-6 max-h-[700px] overflow-y-auto">
          {articuloNeoliberalismo.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-2 ${
                line.startsWith("NEOLIBERALISMO") 
                  ? "font-bold text-yellow-400 text-xl mt-4"
                  : line.startsWith("---")
                  ? "font-bold text-green-400 mt-4"
                  : line.startsWith("CAUSAS") || line.startsWith("CONSECUENCIAS") || line.startsWith("IMPACTO") || line.startsWith("CONCLUSIÓN")
                  ? "font-bold text-yellow-400 mt-3"
                  : line.startsWith("•")
                  ? "text-red-400 ml-4"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Teología de Liberación */}
      <section ref={sections.teologiaLiberacion} className="p-6 m-4 border-4 border-red-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          ✝️ TEOLOGÍA DE LIBERACIÓN ✝️
        </h2>
        <div className="bg-gray-900 p-4 border border-yellow-500 mb-6">
          <p>
            La Teología de Liberación no es una doctrina religiosa, sino una opción preferencial por los pobres. Nace en América Latina como respuesta evangélica a la opresión, la injusticia y la violencia estructural. Para el MSR, es una fuente ética y espiritual fundamental en la lucha por la justicia social.
          </p>
        </div>

        <div className="bg-gray-900 p-4 border border-red-500 mb-6 max-h-[800px] overflow-y-auto">
          {articuloTeologiaLiberacion.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-2 ${
                line.startsWith("FE, JUSTICIA") 
                  ? "font-bold text-yellow-400 text-xl mt-4"
                  : line.startsWith("---")
                  ? "font-bold text-red-400 mt-4"
                  : line.startsWith("UNA OPCIÓN") || line.startsWith("CONTRA EL")
                  ? "font-bold text-yellow-400 mt-3"
                  : line.startsWith("•")
                  ? "text-red-400 ml-4"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Internacional */}
      <section ref={sections.internacional} className="p-6 m-4 border-4 border-red-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          🌍 INTERNACIONAL 🌍
        </h2>
        <div className="bg-gray-900 p-4 border border-yellow-500 mb-6">
          <p>
            El mundo multipolar avanza. La lucha antiimperialista se fortalece en cada rincón del Sur Global.
          </p>
        </div>

        {/* Artículo de Actualidad - Alejandro Ortiz */}
        <div className="bg-gray-900 p-4 border border-red-500 mb-6 max-h-[800px] overflow-y-auto">
          {articuloActualidadAlejandroOrtiz.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-2 ${
                line.startsWith("ACTUALIDAD") 
                  ? "font-bold text-yellow-400 text-xl mt-4"
                  : line.startsWith("Por: Alejandro Ortiz")
                  ? "font-bold text-green-400 mt-2"
                  : line === "---"
                  ? "font-bold text-red-400 mt-4"
                  : line.startsWith("El inicio") || 
                    line.startsWith("El surgimiento") || 
                    line.startsWith("Crisis") || 
                    line.startsWith("Perspectivas") || 
                    line.startsWith("Conclusión")
                  ? "font-bold text-yellow-400 mt-3"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Deuda y Dependencia */}
        <div className="bg-gray-900 p-4 border border-red-500 mb-6 max-h-[700px] overflow-y-auto">
          {articuloDeudaDependencia.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-2 ${
                line.startsWith("DEUDA") 
                  ? "font-bold text-yellow-400 text-xl mt-4"
                  : line.startsWith("---")
                  ? "font-bold text-red-400 mt-4"
                  : line.startsWith("LA DEUDA") || line.startsWith("DEPENDENCIA") || line.startsWith("DIMENSIÓN") || line.startsWith("CONSECUENCIAS") || line.startsWith("PROPUESTAS") || line.startsWith("CONCLUSIÓN")
                  ? "font-bold text-yellow-400 mt-3"
                  : line.startsWith("•")
                  ? "text-red-400 ml-4"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Venezuela */}
        <div className="bg-gray-900 p-4 border border-red-500 mb-6 max-h-[400px] overflow-y-auto">
          {declaracionVenezuela.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-2 ${
                line.startsWith("🇻🇪 VENEZUELA") 
                  ? "font-bold text-yellow-400 text-xl mt-2"
                  : line.startsWith("•")
                  ? "text-red-400 ml-4"
                  : line.includes("MSR") || line.includes("antiimperialista") || line.includes("¡Manos fuera")
                  ? "font-bold"
                  : line.startsWith("Publicado")
                  ? "text-xs text-gray-400 mt-2 italic"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Palestina */}
        <div className="bg-gray-900 p-4 border border-red-500 mb-6 max-h-[400px] overflow-y-auto">
          {declaracionPalestina.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-2 ${
                line.startsWith("🌍 ¡ALTO") 
                  ? "font-bold text-yellow-400 text-xl mt-2"
                  : line.startsWith("•")
                  ? "text-red-400 ml-4"
                  : line.includes("MSR") || line.includes("antiimperialista")
                  ? "font-bold"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Diáspora */}
      <section ref={sections.diaspora} className="p-6 m-4 border-4 border-red-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          🌍 DIÁSPORA 🌍
        </h2>
        <div className="bg-gray-900 p-4 border border-yellow-500 mb-6">
          <p>
            La diáspora dominicana constituye una de las fuerzas más dinámicas y solidarias de la nación. Se estima que más de <strong>2.5 millones de dominicanos y dominicanas</strong> viven en el exterior.
          </p>
          <p className="mt-2">
            El MSR reconoce a la diáspora como parte inseparable del pueblo dominicano.
          </p>
        </div>

        <div className="bg-gray-900 p-4 border border-yellow-500 mb-6 max-h-[500px] overflow-y-auto">
          {[
            "LA DIÁSPORA DOMINICANA: NUESTRA EXTENSIÓN EN EL MUNDO",
            "",
            "Más de 2.5 millones de hermanos y hermanas viven fuera de nuestras fronteras. Lejos de ser una simple consecuencia de la exclusión económica, la diáspora es una expresión de la resistencia colectiva del pueblo dominicano.",
            "",
            "IMPACTO ECONÓMICO",
            "Las remesas enviadas por la diáspora sostienen millones de hogares y dinamizan la economía local. Este flujo no es caridad: es un acto de solidaridad familiar y comunitaria que mantiene viva la red social en tiempos de crisis.",
            "",
            "APORTES CIENTÍFICOS Y CULTURALES",
            "Dominicanos y dominicanas en el exterior destacan en universidades, laboratorios, artes y medios de comunicación alrededor del mundo. Su éxito no es individual: es el fruto de una cultura de esfuerzo y amor por el saber que nace en nuestros barrios y escuelas.",
            "",
            "UNA RELACIÓN DE DIGNIDAD",
            "El MSR exige:",
            "• Derecho al voto en el exterior",
            "• Creación de un Consejo Nacional de la Diáspora",
            "• Programas estatales de cooperación con la diáspora",
            "• Rechazo a toda política migratoria xenófoba",
            "",
            "La diáspora no es una 'comunidad en el extranjero': es el pueblo dominicano extendido en el mundo. Su lucha es nuestra lucha.",
            "",
            "— Movimiento por la Salvación de la República (MSR)"
          ].map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-2 ${
                line.startsWith("LA DIÁSPORA") 
                  ? "font-bold text-yellow-400 text-xl mt-4"
                  : line.startsWith("IMPACTO") || line.startsWith("APORTES") || line.startsWith("UNA RELACIÓN")
                  ? "font-bold text-yellow-400 mt-3"
                  : line.startsWith("•")
                  ? "text-red-400 ml-4"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Derechos Humanos */}
      <section ref={sections.derechosHumanos} className="p-6 m-4 border-4 border-green-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          ⚖️ DERECHOS HUMANOS ⚖️
        </h2>
        <div className="bg-gray-900 p-4 border border-red-500 mb-6">
          <p className="text-yellow-400 text-center mb-2">Declaración Universal de Derechos Humanos</p>
          <p className="text-sm text-center mb-4">
            Adoptada y proclamada por la Asamblea General de las Naciones Unidas en su Resolución 217 A (III), del 10 de diciembre de 1948
          </p>
          <div className="max-h-96 overflow-y-auto p-4 bg-black border border-gray-700">
            {declaracionUniversal.map((line, index) => (
              <p key={index} className={`text-sm mb-2 ${line.startsWith('Artículo') || line === 'Preámbulo' ? 'font-bold text-yellow-400 mt-4' : ''}`}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Colaboración */}
      <section ref={sections.colaboracion} className="p-6 m-4 border-4 border-green-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          ✍️ COLABORACIÓN ✍️
        </h2>
        <div className="bg-gray-900 p-4 border border-yellow-500 mb-6">
          <p>
            Espacio para voces aliadas, intelectuales, trabajadores y luchadores populares que contribuyen con análisis, propuestas y reflexiones desde sus trincheras.
          </p>
        </div>

        <div className="bg-gray-900 p-4 border border-green-500 mb-6 max-h-[700px] overflow-y-auto">
          {articuloTabacoCompleto.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm mb-3 ${
                line.startsWith("TABACO") 
                  ? "font-bold text-yellow-400 text-xl mt-4"
                  : line.startsWith("Por:") || line.startsWith("— Ing.")
                  ? "font-bold text-green-400 mt-2"
                  : line.startsWith("---") || 
                    line.startsWith("PRIMERAS") || 
                    line.startsWith("ADOPCIÓN")
                  ? "font-bold text-yellow-400 mt-4"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Donaciones */}
      <section ref={sections.donaciones} className="p-6 m-4 border-4 border-yellow-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          💰 DONACIONES 💰
        </h2>
        <div className="bg-gray-900 p-4 border border-yellow-500 text-center">
          <p className="text-yellow-400 font-bold mb-2">APOYA AL MSR</p>
          <p className="text-sm mb-4">
            Tu donación nos permite mantener este sitio y difundir la verdad.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 font-bold rounded">
            Donar con PayPal
          </button>
        </div>
      </section>

      {/* Contacto */}
      <section className="p-6 m-4 border-4 border-red-600">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          📧 CONTACTO 📞
        </h2>
        <form onSubmit={handleSubmit} className="bg-gray-900 p-4 border border-yellow-500">
          <label className="block mb-2 text-yellow-400">Escríbenos</label>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 bg-black border border-gray-600 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 bg-black border border-gray-600 text-white"
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje..."
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 bg-black border border-gray-600 text-white h-24"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-600 text-white py-2 font-bold"
          >
            ENVIAR MENSAJE
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 p-4 text-center">
        <div className="border-t border-red-600 pt-4">
          <p className="text-sm"><strong>Únete a Nosotros</strong></p>
          <p className="text-xs mt-1 flex items-center justify-center gap-1">
            <span>📍</span> Santo Domingo, República Dominicana
          </p>
          <p className="text-xs flex items-center justify-center gap-1">
            <span>✉️</span> contacto@republicaesperanza.org
          </p>
          <p className="text-red-400 mt-3 font-bold">
            "La esperanza no es un sentimiento, es una decisión política."
          </p>
        </div>
        <div className="mt-6">
          <p className="text-sm">© 2025 - Movimiento por la Salvación de la República (MSR)</p>
          <p className="text-red-400 text-xs mt-1">¡LA VERDAD ESTÁ EN LAS SOMBRAS!</p>
        </div>
      </footer>
    </div>
  );
};

export default App;