/* ==========================================================================
   Farlaz — NIVEL 1 (cont.): módulos 03-04
   ========================================================================== */

window.FARLAZ_COURSE = window.FARLAZ_COURSE || [];

/* ═══════════════════════════════════════════ MÓDULO 03 ═══ */
window.FARLAZ_COURSE.push({
  id: "economia", num: "03", level: 1,
  es: {
    title: "Economía para inversores",
    tagline: "Las cuatro cifras que mueven todos los mercados",
    summary: "No necesitas ser economista, pero sí entender qué significan el PIB, la inflación, los tipos y el desempleo cuando salen en las noticias. Son las variables que explican por qué suben o bajan tus inversiones.",
    topics: ["Oferta y demanda", "PIB", "Inflación", "Tasas de interés", "Desempleo", "Ciclos económicos"],
    outcomes: [
      "Leer una noticia macroeconómica y entender qué implica",
      "Explicar cómo los tipos de interés afectan al precio de los activos",
      "Situar dónde estamos dentro de un ciclo económico",
      "Distinguir qué datos mueven mercados y cuáles son ruido"
    ]
  },
  en: {
    title: "Economics for investors",
    tagline: "The four figures that move every market",
    summary: "You don't need to be an economist, but you do need to know what GDP, inflation, rates and unemployment mean when they hit the news. They're the variables that explain why your investments rise or fall.",
    topics: ["Supply and demand", "GDP", "Inflation", "Interest rates", "Unemployment", "Economic cycles"],
    outcomes: [
      "Read a macro headline and understand what it implies",
      "Explain how interest rates affect asset prices",
      "Locate where we are in an economic cycle",
      "Tell market-moving data from noise"
    ]
  },
  lessons: [
    {
      id: "oferta-y-demanda", minutes: 6,
      es: { title: "Oferta y demanda", body: [
        { p: "Es el mecanismo más básico de la economía y, aun así, el que más se olvida al invertir. Todo precio —el del pan, el de una casa, el de una acción— sale del encuentro entre lo que hay disponible y lo que la gente quiere." },
        { h: "Las dos fuerzas" },
        { ul: [
          "<strong>Demanda.</strong> Cuánto quiere comprar la gente a cada precio. Cuanto más caro, menos compran.",
          "<strong>Oferta.</strong> Cuánto están dispuestos a vender los productores a cada precio. Cuanto más caro, más producen."
        ]},
        { p: "El precio se asienta donde ambas se cruzan. Si sube la demanda y la oferta no puede seguirle el ritmo, el precio sube hasta que suficiente gente desiste. Si hay exceso de oferta, baja hasta que aparecen compradores." },
        { h: "Por qué esto importa en bolsa" },
        { p: "Una acción no tiene un precio «correcto» esperando a ser descubierto. Tiene el precio al que el último comprador y el último vendedor se pusieron de acuerdo. Si mañana muchos quieren comprar y pocos vender, sube; da igual lo que digan los fundamentales ese día." },
        { key: "A corto plazo el precio lo fija el flujo de compradores y vendedores. A largo plazo lo fija lo que el negocio produce. Confundir los dos plazos es el origen de la mayoría de los errores de un inversor novato." },
        { h: "Elasticidad: por qué unos precios se disparan y otros no" },
        { p: "La elasticidad mide cuánto cambia la cantidad demandada cuando cambia el precio. Si sube el precio de la gasolina un 20%, la gente sigue echando gasolina casi igual: la demanda es <strong>inelástica</strong>. Si sube un 20% el precio de una marca concreta de refresco, mucha gente cambia de marca: es <strong>elástica</strong>." },
        { p: "Para un inversor esto se traduce en una pregunta muy concreta: <strong>¿esta empresa puede subir precios sin perder clientes?</strong> Las que pueden defienden sus márgenes cuando suben los costes. Las que no, los ven desaparecer." },
        { note: "Este concepto reaparecerá en el módulo de estados financieros bajo otro nombre: margen bruto. Un margen bruto estable durante años es la huella que deja una demanda inelástica." }
      ]},
      en: { title: "Supply and demand", body: [
        { p: "It's the most basic mechanism in economics and, even so, the one most often forgotten when investing. Every price — bread, a house, a share — emerges from the meeting of what's available and what people want." },
        { h: "The two forces" },
        { ul: [
          "<strong>Demand.</strong> How much people want to buy at each price. The dearer it is, the less they buy.",
          "<strong>Supply.</strong> How much producers will sell at each price. The dearer it is, the more they make."
        ]},
        { p: "Price settles where the two cross. If demand rises and supply can't keep up, price rises until enough people drop out. If supply is excessive, it falls until buyers appear." },
        { h: "Why this matters in markets" },
        { p: "A share doesn't have a \"correct\" price waiting to be discovered. It has the price the last buyer and last seller agreed on. If tomorrow many want to buy and few to sell, it rises — regardless of what the fundamentals say that day." },
        { key: "In the short run, price is set by the flow of buyers and sellers. In the long run, by what the business produces. Confusing the two timeframes is the origin of most beginner errors." },
        { h: "Elasticity: why some prices spike and others don't" },
        { p: "Elasticity measures how much quantity demanded changes when price changes. If petrol rises 20%, people fill up almost the same: demand is <strong>inelastic</strong>. If one brand of soft drink rises 20%, many switch brands: that's <strong>elastic</strong>." },
        { p: "For an investor this becomes a very concrete question: <strong>can this company raise prices without losing customers?</strong> Those that can defend their margins when costs rise. Those that can't watch them vanish." },
        { note: "This idea returns in the financial statements module under another name: gross margin. A stable gross margin across years is the fingerprint left by inelastic demand." }
      ]}
    },
    {
      id: "pib-y-desempleo", minutes: 7,
      es: { title: "PIB y desempleo", body: [
        { p: "Son las dos cifras que resumen la salud de una economía. Salen en las noticias cada trimestre y cada mes, y conviene saber qué miden de verdad y qué no." },
        { h: "PIB: todo lo que produce un país" },
        { p: "El Producto Interior Bruto es el valor de todos los bienes y servicios finales producidos dentro de un país en un periodo. Si el PIB crece un 3%, la economía produjo un 3% más que el año anterior." },
        { p: "Dos matices que casi nadie explica y que cambian la lectura:" },
        { ul: [
          "<strong>Nominal frente a real.</strong> El PIB nominal incluye la subida de precios. Si la producción no cambió pero todo subió un 5%, el PIB nominal crece un 5% sin que se haya producido ni un tornillo más. El PIB real descuenta la inflación, y es el que hay que mirar.",
          "<strong>No mide bienestar.</strong> Una catástrofe que obliga a reconstruir edificios eleva el PIB. Que suba no significa automáticamente que la gente viva mejor."
        ]},
        { h: "Desempleo: quién cuenta y quién no" },
        { p: "La tasa de desempleo es el porcentaje de la población activa que busca trabajo y no lo encuentra. La trampa está en «población activa»: si alguien se desanima y deja de buscar, sale de la estadística y la tasa <em>baja</em>, sin que nadie haya encontrado empleo." },
        { p: "Por eso los analistas miran también la <strong>tasa de participación</strong>, que indica qué porcentaje de la población en edad de trabajar está dentro del mercado laboral. Una tasa de paro que baja mientras cae la participación no es una buena noticia." },
        { key: "Ningún dato macro se interpreta solo. Siempre hay una segunda cifra que cambia el significado de la primera, y quien la ignora acaba leyendo los titulares al revés." },
        { h: "Por qué le importan al mercado" },
        { p: "Porque el banco central los vigila. Una economía muy fuerte con paro muy bajo suele generar inflación, y eso empuja al banco central a subir tipos. Y los tipos, como veremos en la próxima lección, mueven el precio de todos los activos." },
        { p: "De ahí una paradoja que desconcierta a mucha gente: a veces un dato de empleo excelente hace caer la bolsa. No es irracional. El mercado no celebra la buena noticia; anticipa que traerá tipos más altos." },
        { quiz: {
          q: "El PIB nominal crece un 6% y la inflación fue del 6%. ¿Cuánto creció la economía en términos reales?",
          options: ["Prácticamente nada", "Un 6%", "Un 12%"],
          answer: 0,
          explain: "El crecimiento nominal se explica entero por la subida de precios. En términos reales la producción se quedó plana: se produjo lo mismo, solo que más caro."
        }}
      ]},
      en: { title: "GDP and unemployment", body: [
        { p: "These are the two figures that summarise an economy's health. They hit the news every quarter and every month, and it's worth knowing what they really measure and what they don't." },
        { h: "GDP: everything a country produces" },
        { p: "Gross Domestic Product is the value of all final goods and services produced within a country over a period. If GDP grows 3%, the economy produced 3% more than the year before." },
        { p: "Two caveats almost nobody explains, and they change the reading:" },
        { ul: [
          "<strong>Nominal versus real.</strong> Nominal GDP includes price rises. If output didn't change but everything rose 5%, nominal GDP grows 5% without a single extra screw being made. Real GDP strips out inflation, and that's the one to watch.",
          "<strong>It doesn't measure wellbeing.</strong> A disaster requiring buildings to be rebuilt raises GDP. A rise doesn't automatically mean people live better."
        ]},
        { h: "Unemployment: who counts and who doesn't" },
        { p: "The unemployment rate is the share of the labour force looking for work and not finding it. The catch is \"labour force\": if someone gives up and stops looking, they leave the statistic and the rate <em>falls</em>, without anyone finding a job." },
        { p: "That's why analysts also watch the <strong>participation rate</strong>, showing what share of working-age people are in the labour market. A falling unemployment rate alongside falling participation isn't good news." },
        { key: "No macro figure is read alone. There's always a second number that changes the meaning of the first, and whoever ignores it ends up reading headlines backwards." },
        { h: "Why markets care" },
        { p: "Because the central bank watches them. A very strong economy with very low unemployment tends to generate inflation, and that pushes the central bank to raise rates. And rates, as we'll see next lesson, move the price of every asset." },
        { p: "Hence a paradox that puzzles many people: sometimes an excellent employment figure makes markets fall. It isn't irrational. The market isn't celebrating the good news; it's anticipating the higher rates that follow." },
        { quiz: {
          q: "Nominal GDP grows 6% and inflation was 6%. How much did the economy grow in real terms?",
          options: ["Practically nothing", "6%", "12%"],
          answer: 0,
          explain: "The nominal growth is entirely explained by rising prices. In real terms output was flat: the same was produced, only at higher prices."
        }}
      ]}
    },
    {
      id: "tasas-de-interes", minutes: 8,
      es: { title: "Tasas de interés", body: [
        { p: "Si solo pudieras seguir una variable económica en toda tu vida como inversor, elige esta. El tipo de interés es el precio del dinero en el tiempo, y por eso afecta al valor de absolutamente todo." },
        { h: "Quién los fija y por qué" },
        { p: "El banco central fija el tipo de referencia con un objetivo principal: mantener la inflación bajo control, normalmente cerca del 2% anual." },
        { ul: [
          "<strong>Inflación alta →  suben tipos.</strong> Encarecer el crédito frena el consumo y la inversión, y con ello la presión sobre los precios.",
          "<strong>Economía débil →  bajan tipos.</strong> Abaratar el crédito estimula el gasto y la contratación."
        ]},
        { p: "Es un péndulo, y funciona con retraso: una subida de tipos tarda meses en notarse en la economía real. Por eso los bancos centrales se equivocan con frecuencia, unas veces frenando de más y otras tarde." },
        { h: "Los tres caminos por los que llegan a tus inversiones" },
        { p: "<strong>1. El descuento.</strong> Cualquier activo vale la suma de lo que producirá en el futuro, traído a hoy. El tipo de interés es la tasa con la que se hace esa conversión. Si sube, todo el dinero futuro vale menos hoy, y los precios se ajustan a la baja." },
        { table: {
          head: ["100 que recibes dentro de…", "Valen hoy al 3%", "Valen hoy al 7%", "Caída"],
          rows: [
            ["1 año", "97", "93", "−4%"],
            ["5 años", "86", "71", "−17%"],
            ["10 años", "74", "51", "−31%"],
            ["20 años", "55", "26", "−53%"]
          ]
        }},
        { p: "Fíjate en la última columna: la misma subida de tipos destruye un 4% del valor de un flujo cercano y más de la mitad de uno lejano. Por eso las empresas que prometen beneficios dentro de una década caen mucho más que las que ya los generan hoy." },
        { p: "<strong>2. El coste de la deuda.</strong> Las empresas endeudadas pagan más intereses, lo que reduce directamente su beneficio. Las que están en caja neta apenas lo notan." },
        { p: "<strong>3. La competencia del activo sin riesgo.</strong> Si un bono del Estado renta un 1,5%, comprar acciones parece razonable casi a cualquier precio. Si ese mismo bono renta un 5%, el listón sube: la acción tiene que ofrecer bastante más para compensar su riesgo." },
        { key: "Cuando suben los tipos no es que los inversores se pongan pesimistas. Es que la aritmética cambia para todos los activos a la vez, y los precios se recalculan." },
        { note: "Nada de esto sirve para predecir qué harán los tipos ni cuándo. Sirve para saber qué parte de tu cartera es más sensible si se mueven, que es una pregunta con respuesta verificable." }
      ]},
      en: { title: "Interest rates", body: [
        { p: "If you could follow only one economic variable for your whole investing life, pick this one. The interest rate is the price of money over time, which is why it affects the value of absolutely everything." },
        { h: "Who sets them and why" },
        { p: "The central bank sets the benchmark rate with one main aim: keeping inflation under control, usually near 2% a year." },
        { ul: [
          "<strong>High inflation → raise rates.</strong> Making credit dearer slows consumption and investment, and with them pressure on prices.",
          "<strong>Weak economy → cut rates.</strong> Cheaper credit stimulates spending and hiring."
        ]},
        { p: "It's a pendulum, and it works with a lag: a rate rise takes months to show in the real economy. Which is why central banks frequently get it wrong, sometimes braking too hard and sometimes too late." },
        { h: "The three paths to your investments" },
        { p: "<strong>1. Discounting.</strong> Any asset is worth the sum of what it will produce in future, brought back to today. The interest rate is the rate used for that conversion. If it rises, all future money is worth less today, and prices adjust downward." },
        { table: {
          head: ["100 received in…", "Worth today at 3%", "Worth today at 7%", "Fall"],
          rows: [
            ["1 year", "97", "93", "−4%"],
            ["5 years", "86", "71", "−17%"],
            ["10 years", "74", "51", "−31%"],
            ["20 years", "55", "26", "−53%"]
          ]
        }},
        { p: "Look at the last column: the same rate rise destroys 4% of a near cash flow and over half of a distant one. That's why companies promising profits a decade out fall far more than those already generating them today." },
        { p: "<strong>2. Cost of debt.</strong> Indebted companies pay more interest, directly reducing profit. Those in net cash barely notice." },
        { p: "<strong>3. Competition from the risk-free asset.</strong> If a government bond yields 1.5%, buying equities looks reasonable at almost any price. If that same bond yields 5%, the bar rises: the share has to offer considerably more to compensate its risk." },
        { key: "When rates rise it isn't that investors turn pessimistic. It's that the arithmetic changes for every asset at once, and prices are recalculated." },
        { note: "None of this predicts what rates will do or when. It tells you which part of your portfolio is most sensitive if they move — a question with a verifiable answer." }
      ]}
    },
    {
      id: "ciclos-economicos", minutes: 7,
      es: { title: "Ciclos económicos", body: [
        { p: "Las economías no crecen en línea recta. Se aceleran, se recalientan, se frenan y se recuperan, una y otra vez. Reconocer en qué fase estamos no permite predecir el futuro, pero sí entender por qué unos sectores van bien mientras otros sufren." },
        { h: "Las cuatro fases" },
        { table: {
          head: ["Fase", "Qué ocurre", "Suele comportarse bien"],
          rows: [
            ["Expansión", "Crece el empleo, sube el consumo, hay optimismo", "Acciones cíclicas, industria, tecnología"],
            ["Pico", "La economía va al máximo; aparece la inflación", "Materias primas, energía"],
            ["Contracción", "Cae el consumo, sube el paro, se retrae el crédito", "Bonos de calidad, consumo básico, salud"],
            ["Recuperación", "El banco central baja tipos, vuelve el crédito", "Acciones sensibles a tipos, small caps"]
          ]
        }},
        { note: "La tercera columna describe tendencias históricas generales, no una regla. En cada ciclo hay excepciones importantes y ningún patrón se repite igual. No la uses como guía de compra." },
        { h: "Sectores cíclicos y defensivos" },
        { p: "<strong>Cíclicos:</strong> automoción, construcción, viajes, lujo, banca. Su demanda depende de que la gente se sienta con dinero. En expansión disparan sus beneficios; en recesión los ven desplomarse." },
        { p: "<strong>Defensivos:</strong> alimentación, suministros básicos, salud. La gente sigue comiendo, encendiendo la luz y comprando medicamentos aunque la economía vaya mal. Crecen menos en los buenos años y aguantan mucho mejor en los malos." },
        { key: "Un negocio cíclico en su mejor momento parece barato porque sus beneficios están en máximos. Es justo entonces cuando más caro está en realidad. En el módulo de análisis fundamental veremos por qué los múltiplos engañan tanto en estos sectores." },
        { h: "La advertencia importante" },
        { p: "Identificar la fase del ciclo es fácil mirando hacia atrás y muy difícil en tiempo real. Las recesiones se declaran oficialmente meses después de haber empezado. Cuando la noticia llega, el mercado ya lleva tiempo reaccionando." },
        { p: "Por eso intentar entrar y salir según el ciclo funciona mucho peor de lo que parece sobre el papel. La utilidad práctica de este conocimiento no es acertar el momento, sino <strong>entender por qué tu cartera se comporta como se comporta</strong> y no sorprenderte cuando el sector que va bien deja de ir bien." },
        { note: "Con esto cierras el Nivel 1. Ya sabes qué es el dinero, cómo ordenarlo y qué fuerzas mueven la economía. En el Nivel 2 pasamos a los instrumentos concretos en los que puedes invertir." }
      ]},
      en: { title: "Economic cycles", body: [
        { p: "Economies don't grow in a straight line. They accelerate, overheat, slow and recover, again and again. Recognising which phase we're in doesn't let you predict the future, but it does explain why some sectors thrive while others struggle." },
        { h: "The four phases" },
        { table: {
          head: ["Phase", "What happens", "Tends to do well"],
          rows: [
            ["Expansion", "Employment grows, consumption rises, optimism", "Cyclical stocks, industrials, technology"],
            ["Peak", "Economy at full stretch; inflation appears", "Commodities, energy"],
            ["Contraction", "Consumption falls, unemployment rises, credit tightens", "Quality bonds, staples, healthcare"],
            ["Recovery", "Central bank cuts rates, credit returns", "Rate-sensitive stocks, small caps"]
          ]
        }},
        { note: "The third column describes broad historical tendencies, not a rule. Every cycle has important exceptions and no pattern repeats identically. Don't use it as a buying guide." },
        { h: "Cyclical and defensive sectors" },
        { p: "<strong>Cyclical:</strong> autos, construction, travel, luxury, banking. Their demand depends on people feeling flush. In expansions their profits surge; in recessions they collapse." },
        { p: "<strong>Defensive:</strong> food, utilities, healthcare. People keep eating, keep the lights on and buy medicines even when the economy struggles. They grow less in good years and hold up far better in bad ones." },
        { key: "A cyclical business at its best moment looks cheap because its profits are at a peak. That's precisely when it's actually most expensive. In the fundamental analysis module we'll see why multiples mislead so badly in these sectors." },
        { h: "The important caveat" },
        { p: "Identifying the phase is easy looking backwards and very hard in real time. Recessions are officially declared months after they began. By the time the news arrives, the market has been reacting for a while." },
        { p: "Which is why trying to move in and out with the cycle works far worse than it looks on paper. The practical value of this knowledge isn't timing, it's <strong>understanding why your portfolio behaves as it does</strong> and not being surprised when the sector that was working stops working." },
        { note: "That closes Level 1. You now know what money is, how to order it, and what forces move the economy. Level 2 moves on to the specific instruments you can invest in." }
      ]}
    }
  ]
});

/* ═══════════════════════════════════════════ MÓDULO 04 ═══ */
window.FARLAZ_COURSE.push({
  id: "mercados", num: "04", level: 1,
  es: {
    title: "Mercados financieros",
    tagline: "Dónde y cómo se compran los activos",
    summary: "Antes de invertir conviene saber qué pasa exactamente cuando pulsas «comprar»: quién está al otro lado, qué papel juega el bróker y por qué una orden se ejecuta al precio que se ejecuta.",
    topics: ["Bolsa de valores", "Exchanges", "Brókeres", "Salidas a bolsa (IPO)", "Liquidez", "Creadores de mercado"],
    outcomes: [
      "Explicar qué ocurre cuando envías una orden de compra",
      "Elegir un bróker sabiendo qué mirar",
      "Entender qué es una salida a bolsa y sus riesgos",
      "Interpretar la horquilla de precios y el volumen"
    ]
  },
  en: {
    title: "Financial markets",
    tagline: "Where and how assets are bought",
    summary: "Before investing it helps to know exactly what happens when you press \"buy\": who's on the other side, what the broker does, and why an order fills at the price it fills.",
    topics: ["Stock exchanges", "Exchanges", "Brokers", "IPOs", "Liquidity", "Market makers"],
    outcomes: [
      "Explain what happens when you send a buy order",
      "Choose a broker knowing what to look at",
      "Understand what an IPO is and its risks",
      "Interpret the bid-ask spread and volume"
    ]
  },
  lessons: [
    {
      id: "bolsa-y-brokers", minutes: 8,
      es: { title: "La bolsa y el bróker", body: [
        { p: "Una bolsa de valores es un mercado organizado donde se compran y venden participaciones de empresas. Su función real no es «hacer que suban los precios», sino algo más humilde y más importante: reunir compradores y vendedores bajo reglas conocidas por todos." },
        { h: "Los dos mercados que conviven" },
        { ul: [
          "<strong>Mercado primario.</strong> La empresa emite acciones nuevas y recibe el dinero. Ocurre en la salida a bolsa y en las ampliaciones de capital. Es la única vez que el dinero llega a la empresa.",
          "<strong>Mercado secundario.</strong> Los inversores se compran y venden acciones entre ellos. Es lo que ves todos los días. Cuando compras una acción de una gran empresa, el dinero va al inversor que te la vendió, no a la compañía."
        ]},
        { key: "Esto sorprende a mucha gente: comprar acciones en bolsa no financia a la empresa. La financiaste quien puso el dinero en la emisión original; tú solo estás heredando su posición." },
        { h: "Qué hace un bróker" },
        { p: "Tú no puedes operar directamente en una bolsa: hace falta ser miembro del mercado. El bróker es el intermediario autorizado que envía tu orden y custodia tus valores." },
        { p: "Al elegir uno, hay cuatro cosas que mirar y en este orden:" },
        { ul: [
          "<strong>Regulación.</strong> Que esté supervisado por un organismo serio y que tus valores estén segregados de los del bróker. Si el bróker quiebra, tus acciones siguen siendo tuyas.",
          "<strong>Comisiones.</strong> No solo la de compraventa: mira también custodia, cambio de divisa, cobro de dividendos y traspaso de cartera.",
          "<strong>Acceso a mercados.</strong> Que cubra las bolsas y productos que te interesan.",
          "<strong>Fiscalidad.</strong> Si te entrega los datos listos para tu declaración o te toca reconstruirlo a mano."
        ]},
        { h: "Cómo se ejecuta tu orden" },
        { p: "Cuando envías una orden, entra en el <strong>libro de órdenes</strong>: una lista de todas las compras y ventas pendientes ordenadas por precio. Hay dos formas básicas de enviarla." },
        { table: {
          head: ["Tipo de orden", "Qué hace", "Ventaja", "Riesgo"],
          rows: [
            ["A mercado", "Compra al mejor precio disponible ahora", "Se ejecuta seguro", "No sabes el precio exacto de antemano"],
            ["Limitada", "Compra solo hasta un precio que tú fijas", "Controlas el precio", "Puede no ejecutarse nunca"]
          ]
        }},
        { note: "Para empezar, la orden limitada es más prudente en valores poco negociados, donde una orden a mercado puede ejecutarse bastante peor de lo que esperabas. En valores muy líquidos la diferencia es mínima." }
      ]},
      en: { title: "The exchange and the broker", body: [
        { p: "A stock exchange is an organised market where shares in companies are bought and sold. Its real function isn't \"making prices go up\", but something humbler and more important: bringing buyers and sellers together under rules everyone knows." },
        { h: "The two markets that coexist" },
        { ul: [
          "<strong>Primary market.</strong> The company issues new shares and receives the money. This happens at the IPO and at capital raises. It's the only time money reaches the company.",
          "<strong>Secondary market.</strong> Investors buy and sell shares among themselves. This is what you see every day. When you buy a share in a large company, the money goes to the investor who sold it to you, not the company."
        ]},
        { key: "This surprises many people: buying shares on an exchange doesn't fund the company. It was funded by whoever put money into the original issue; you're simply inheriting their position." },
        { h: "What a broker does" },
        { p: "You can't trade directly on an exchange: that requires membership. The broker is the authorised intermediary that routes your order and holds your securities." },
        { p: "When choosing one, four things matter, in this order:" },
        { ul: [
          "<strong>Regulation.</strong> Supervised by a serious authority, with your securities segregated from the broker's own. If the broker fails, your shares remain yours.",
          "<strong>Fees.</strong> Not just dealing: check custody, currency conversion, dividend collection and portfolio transfer.",
          "<strong>Market access.</strong> That it covers the exchanges and products you care about.",
          "<strong>Tax reporting.</strong> Whether it hands you the figures ready for your return or you reconstruct them by hand."
        ]},
        { h: "How your order is filled" },
        { p: "When you send an order, it enters the <strong>order book</strong>: a list of all pending buys and sells sorted by price. There are two basic ways to send it." },
        { table: {
          head: ["Order type", "What it does", "Advantage", "Risk"],
          rows: [
            ["Market", "Buys at the best price available now", "Fills for certain", "You don't know the exact price beforehand"],
            ["Limit", "Buys only up to a price you set", "You control the price", "May never fill"]
          ]
        }},
        { note: "To start with, a limit order is safer in thinly traded securities, where a market order can fill considerably worse than expected. In highly liquid securities the difference is minimal." }
      ]}
    },
    {
      id: "liquidez-y-market-makers", minutes: 7,
      es: { title: "Liquidez y creadores de mercado", body: [
        { p: "Cuando pulsas «comprar» y la orden se ejecuta al instante, hay alguien al otro lado dispuesto a venderte. En muchos casos ese alguien no es otro inversor: es un creador de mercado." },
        { h: "La horquilla" },
        { p: "En cualquier activo hay dos precios simultáneos: el <strong>precio de compra</strong> (lo máximo que alguien paga ahora) y el <strong>precio de venta</strong> (lo mínimo que alguien acepta). La diferencia se llama horquilla o <em>spread</em>." },
        { table: {
          head: ["Activo", "Compra", "Venta", "Horquilla", "Qué indica"],
          rows: [
            ["Gran empresa cotizada", "100,00", "100,02", "0,02%", "Muy líquido"],
            ["Empresa mediana", "48,10", "48,25", "0,31%", "Líquido"],
            ["Empresa pequeña", "12,40", "12,85", "3,6%", "Poco líquido"]
          ]
        }},
        { p: "La horquilla es un coste real aunque no aparezca en ninguna factura. Si compras a 12,85 y vendes al instante a 12,40, has perdido un 3,6% sin que el precio se haya movido." },
        { key: "Los costes de operar no son solo las comisiones. En valores poco negociados, la horquilla puede costarte más que todas las comisiones del año juntas." },
        { h: "Qué hace un creador de mercado" },
        { p: "Es una entidad que se compromete a poner precios de compra y venta de forma continua. Gracias a ellos puedes vender aunque en ese instante no haya ningún inversor queriendo comprar." },
        { p: "No lo hacen por altruismo: ganan precisamente la horquilla. Compran ligeramente por debajo y venden ligeramente por encima, miles de veces al día. A cambio, el mercado funciona." },
        { h: "Cómo se mide la liquidez" },
        { ul: [
          "<strong>Volumen.</strong> Cuántos títulos se negocian al día. Poco volumen es señal de alerta.",
          "<strong>Horquilla.</strong> Cuanto más estrecha, más líquido.",
          "<strong>Profundidad.</strong> Cuánto dinero hay en el libro cerca del precio actual. Un activo puede parecer líquido y hundirse en cuanto llega una orden algo grande."
        ]},
        { note: "Regla práctica: si tu orden representa una parte apreciable del volumen diario de ese valor, tú mismo vas a mover el precio en tu contra. Es un problema que afecta sobre todo a valores muy pequeños." },
        { quiz: {
          q: "Compras una acción poco líquida a 12,85 y el precio de compra en ese momento es 12,40. Si te arrepintieras y vendieras de inmediato, ¿qué pasaría?",
          options: [
            "Perderías un 3,5% aunque el precio no se haya movido",
            "Recuperarías exactamente lo que pagaste",
            "Ganarías la diferencia entre ambos precios"
          ],
          answer: 0,
          explain: "Compras al precio de venta y vendes al de compra. Esa diferencia, la horquilla, es un coste inmediato que asumes al entrar y que en valores poco líquidos es considerable."
        }}
      ]},
      en: { title: "Liquidity and market makers", body: [
        { p: "When you press \"buy\" and the order fills instantly, someone on the other side is willing to sell to you. In many cases that someone isn't another investor: it's a market maker." },
        { h: "The spread" },
        { p: "Every asset has two simultaneous prices: the <strong>bid</strong> (the most anyone will pay now) and the <strong>ask</strong> (the least anyone will accept). The difference is the spread." },
        { table: {
          head: ["Asset", "Bid", "Ask", "Spread", "What it signals"],
          rows: [
            ["Large listed company", "100.00", "100.02", "0.02%", "Highly liquid"],
            ["Mid-size company", "48.10", "48.25", "0.31%", "Liquid"],
            ["Small company", "12.40", "12.85", "3.6%", "Illiquid"]
          ]
        }},
        { p: "The spread is a real cost even though it appears on no invoice. If you buy at 12.85 and sell instantly at 12.40, you've lost 3.6% without the price moving at all." },
        { key: "Trading costs aren't just commissions. In thinly traded securities, the spread can cost you more than every commission of the year combined." },
        { h: "What a market maker does" },
        { p: "It's a firm that commits to quoting bid and ask prices continuously. Thanks to them you can sell even when no investor happens to want to buy at that instant." },
        { p: "They don't do it out of altruism: the spread is precisely their earnings. They buy slightly below and sell slightly above, thousands of times a day. In exchange, the market functions." },
        { h: "How liquidity is measured" },
        { ul: [
          "<strong>Volume.</strong> How many shares trade per day. Low volume is a warning.",
          "<strong>Spread.</strong> The narrower, the more liquid.",
          "<strong>Depth.</strong> How much money sits in the book near the current price. An asset can look liquid and collapse the moment a slightly large order arrives."
        ]},
        { note: "Practical rule: if your order is an appreciable share of that security's daily volume, you will move the price against yourself. It's a problem affecting very small companies above all." },
        { quiz: {
          q: "You buy an illiquid share at 12.85 while the bid is 12.40. If you changed your mind and sold immediately, what would happen?",
          options: [
            "You'd lose about 3.5% even though the price hasn't moved",
            "You'd get back exactly what you paid",
            "You'd gain the difference between the two prices"
          ],
          answer: 0,
          explain: "You buy at the ask and sell at the bid. That difference, the spread, is an immediate cost you take on entry, and in illiquid securities it's considerable."
        }}
      ]}
    },
    {
      id: "ipos", minutes: 6,
      es: { title: "Salidas a bolsa", body: [
        { p: "Una salida a bolsa, o IPO por sus siglas en inglés, es el momento en que una empresa privada pasa a cotizar y cualquiera puede comprar sus acciones. Suelen venir rodeadas de expectación, y esa expectación merece una mirada fría." },
        { h: "Por qué sale a bolsa una empresa" },
        { ul: [
          "<strong>Para captar capital.</strong> Emite acciones nuevas y recibe dinero para crecer o pagar deuda.",
          "<strong>Para dar salida a los socios iniciales.</strong> Fundadores y fondos que entraron años antes venden parte de su participación.",
          "<strong>Para ganar visibilidad</strong> y poder pagar a sus empleados con acciones que tienen precio de mercado."
        ]},
        { h: "La asimetría que conviene tener presente" },
        { p: "En una IPO, quien vende conoce la empresa mucho mejor que quien compra. Los fundadores y los fondos han vivido el negocio por dentro durante años; tú tienes un folleto y unas semanas para leerlo." },
        { p: "Además, el momento de salir lo eligen ellos. Nadie saca una empresa a bolsa cuando cree que el mercado la pagaría barata." },
        { key: "Esto no significa que todas las IPO sean malas. Significa que el punto de partida no es neutral: quien tiene la información decide cuándo vender y a qué precio de referencia." },
        { h: "Qué mirar antes de entrar" },
        { ul: [
          "<strong>El folleto.</strong> Aburrido y largo, pero es el único documento donde la empresa está legalmente obligada a contar sus riesgos. La sección de factores de riesgo es la más útil de todas.",
          "<strong>Quién vende.</strong> Si la mayor parte del dinero va a los socios que salen en lugar de a la empresa, la operación es una desinversión disfrazada de crecimiento.",
          "<strong>El periodo de bloqueo.</strong> Los socios iniciales suelen tener prohibido vender durante unos meses. Cuando ese plazo vence, puede aparecer una oleada de ventas.",
          "<strong>Si gana dinero.</strong> Muchas empresas salen a bolsa en pérdidas. Puede estar justificado, pero exige entender cuándo y cómo espera ser rentable."
        ]},
        { note: "Una alternativa prudente para un inversor que empieza: esperar dos o tres trimestres. Tendrás resultados públicos como empresa cotizada, habrá pasado el periodo de bloqueo y el precio se habrá alejado del entusiasmo inicial. Te perderás algunas subidas y te ahorrarás bastantes sustos." }
      ]},
      en: { title: "Initial public offerings", body: [
        { p: "An IPO is the moment a private company starts trading publicly and anyone can buy its shares. They usually arrive surrounded by excitement, and that excitement deserves a cold look." },
        { h: "Why a company goes public" },
        { ul: [
          "<strong>To raise capital.</strong> It issues new shares and receives money to grow or repay debt.",
          "<strong>To give early backers an exit.</strong> Founders and funds who came in years earlier sell part of their stake.",
          "<strong>To gain visibility</strong> and be able to pay employees in shares that have a market price."
        ]},
        { h: "The asymmetry worth keeping in mind" },
        { p: "In an IPO, the seller knows the company far better than the buyer. Founders and funds have lived the business from the inside for years; you have a prospectus and a few weeks to read it." },
        { p: "What's more, they choose the timing. Nobody floats a company when they think the market would pay too little." },
        { key: "This doesn't mean every IPO is bad. It means the starting point isn't neutral: the side with the information decides when to sell and at what reference price." },
        { h: "What to check before going in" },
        { ul: [
          "<strong>The prospectus.</strong> Dull and long, but it's the only document where the company is legally required to state its risks. The risk factors section is the most useful part of all.",
          "<strong>Who's selling.</strong> If most of the money goes to exiting shareholders rather than the company, the deal is a divestment dressed as growth.",
          "<strong>The lock-up period.</strong> Early holders are usually barred from selling for a few months. When that expires, a wave of selling can appear.",
          "<strong>Whether it makes money.</strong> Many companies float while lossmaking. That can be justified, but it requires understanding when and how profitability is expected."
        ]},
        { note: "A prudent alternative for a beginner: wait two or three quarters. You'll have public results as a listed company, the lock-up will have passed, and the price will have drifted away from the initial excitement. You'll miss some rallies and spare yourself a fair number of shocks." }
      ]}
    }
  ]
});
