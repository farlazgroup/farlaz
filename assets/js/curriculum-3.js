/* ==========================================================================
   Farlaz — NIVEL 2: Inversiones  (módulos 05-08)
   ========================================================================== */

window.FARLAZ_COURSE = window.FARLAZ_COURSE || [];

/* ═══════════════════════════════════════════ MÓDULO 05 ═══ */
window.FARLAZ_COURSE.push({
  id: "acciones", num: "05", level: 2,
  es: {
    title: "Acciones",
    tagline: "Qué compras exactamente cuando compras una acción",
    summary: "La renta variable es el instrumento con más recorrido y más riesgo. Aquí desmontamos qué representa una acción, cómo se clasifican las empresas y de dónde sale realmente la rentabilidad.",
    topics: ["Qué representa una acción", "Capitalización bursátil", "Dividendos", "Growth y Value", "Large, Mid y Small Cap", "Sectores"],
    outcomes: [
      "Explicar los derechos que da una acción",
      "Calcular e interpretar la capitalización bursátil",
      "Distinguir empresas de crecimiento y de valor",
      "Situar una empresa por tamaño y sector"
    ]
  },
  en: {
    title: "Equities",
    tagline: "What exactly you buy when you buy a share",
    summary: "Equity is the instrument with the most upside and the most risk. Here we unpack what a share represents, how companies are classified, and where returns actually come from.",
    topics: ["What a share represents", "Market capitalisation", "Dividends", "Growth and value", "Large, mid and small cap", "Sectors"],
    outcomes: [
      "Explain the rights a share confers",
      "Calculate and interpret market capitalisation",
      "Tell growth companies from value companies",
      "Place a company by size and sector"
    ]
  },
  lessons: [ 
    {
        id: "que-es-una-accion",
        minutes: 8,
        es: {
          title: "Qué es realmente una acción",
          body: [
            { p: "Una acción es una fracción de propiedad de una empresa. No es un billete de lotería, no es una apuesta sobre un gráfico y no es un número que sube o baja por voluntad propia. Si una empresa ha emitido 100 millones de acciones y tú tienes 100, posees una millonésima parte de ese negocio: de sus fábricas, sus marcas, sus contratos y sus deudas." },
            { h: "Qué te da esa propiedad" },
            { ul: [
              "<strong>Derecho sobre los beneficios residuales.</strong> Después de pagar a proveedores, empleados, acreedores y a Hacienda, lo que sobra pertenece a los accionistas. Puede repartirse como dividendo o reinvertirse en el negocio.",
              "<strong>Derecho de voto.</strong> Una acción, un voto, en la junta general. En la práctica tu millonésima parte no decide nada, pero el mecanismo importa: es lo que permite a los grandes inversores presionar a un consejo.",
              "<strong>Derecho residual en la liquidación.</strong> Si la empresa se disuelve, cobras el último, después de todos los acreedores. Por eso la acción es el instrumento con más riesgo de la estructura de capital."
            ]},
            { key: "Ser accionista es ser el último de la cola en el reparto. A cambio, tu parte no tiene techo: los acreedores cobran lo pactado y ni un euro más, tú te llevas todo lo que sobre." },
            { h: "Por qué se mueve el precio" },
            { p: "El precio de una acción es lo que el comprador marginal está dispuesto a pagar hoy por los beneficios futuros que espera de ese negocio. Esa frase tiene dos partes móviles, y conviene separarlas porque casi todo el ruido de mercado confunde una con otra." },
            { p: "La primera es el <strong>negocio</strong>: cuánto gana la empresa, cuánto crece, qué márgenes tiene, cuánto capital necesita para seguir creciendo. Se mueve despacio y se puede analizar." },
            { p: "La segunda es la <strong>expectativa</strong>: qué cree el mercado que va a pasar y a qué tasa descuenta ese futuro. Se mueve rápido, a veces varios puntos porcentuales en una sesión, y depende de tipos de interés, del apetito por el riesgo y del estado de ánimo colectivo." },
            { note: "Una empresa puede publicar unos resultados excelentes y caer un 8% ese mismo día. No es irracional: el mercado ya esperaba resultados excelentes y esperaba algo más. Lo que mueve el precio no es la noticia, es la diferencia entre la noticia y lo que estaba descontado." },
            { h: "El error de partida más común" },
            { p: "Mucha gente empieza preguntándose «¿esta acción va a subir?». Es la pregunta equivocada porque no tiene método de respuesta. La pregunta con la que sí se puede trabajar es: «¿qué tiene que ser cierto sobre este negocio para justificar el precio de hoy, y me parece razonable?»." },
            { p: "Si el precio actual implica que la empresa va a crecer al 20% anual durante una década, tu trabajo es evaluar si eso es plausible, no adivinar el cierre del viernes. Esa reformulación es la diferencia entre invertir y especular, y es lo que vamos a practicar en todo el curso." },
            { quiz: {
              q: "Una empresa anuncia que sus beneficios crecieron un 30%. La acción cae un 6% en la sesión. ¿Cuál es la explicación más probable?",
              options: [
                "El mercado esperaba un crecimiento aún mayor o vio algo preocupante en las previsiones",
                "Los inversores no entendieron los resultados",
                "El precio de las acciones no tiene relación con los beneficios"
              ],
              answer: 0,
              explain: "El precio ya incorporaba una expectativa. Si esa expectativa era de un 35% de crecimiento, un 30% real es una decepción aunque suene bien en el titular. Siempre hay que preguntarse contra qué se compara el dato."
            }}
          ]
        },
        en: {
          title: "What a share actually is",
          body: [
            { p: "A share is a fraction of ownership in a company. It is not a lottery ticket, not a bet on a chart, and not a number that rises and falls of its own accord. If a company has issued 100 million shares and you hold 100, you own one millionth of that business: its factories, its brands, its contracts and its debts." },
            { h: "What that ownership gives you" },
            { ul: [
              "<strong>A claim on residual profits.</strong> After suppliers, employees, creditors and the tax authority are paid, whatever is left belongs to shareholders. It can be paid out as a dividend or reinvested in the business.",
              "<strong>Voting rights.</strong> One share, one vote at the general meeting. In practice your millionth doesn't decide anything, but the mechanism matters: it is what lets large investors pressure a board.",
              "<strong>A residual claim in liquidation.</strong> If the company is wound up, you are paid last, after every creditor. That is why equity is the riskiest instrument in the capital structure."
            ]},
            { key: "Being a shareholder means standing last in the queue. In exchange, your share has no ceiling: creditors get what was agreed and not a cent more, you get everything left over." },
            { h: "Why the price moves" },
            { p: "A share price is what the marginal buyer will pay today for the future profits they expect from that business. That sentence has two moving parts, and it is worth separating them, because most market noise confuses one for the other." },
            { p: "The first is the <strong>business</strong>: how much the company earns, how fast it grows, what margins it runs, how much capital it needs to keep growing. This moves slowly and can be analysed." },
            { p: "The second is <strong>expectation</strong>: what the market believes will happen and the rate at which it discounts that future. This moves fast, sometimes several percentage points in a session, and depends on interest rates, risk appetite and collective mood." },
            { note: "A company can report excellent results and fall 8% the same day. That isn't irrational: the market already expected excellent results, and expected a bit more. What moves price is not the news, it is the gap between the news and what was already priced in." },
            { h: "The most common starting error" },
            { p: "Most people begin by asking \"will this stock go up?\". It is the wrong question because it has no method of answer. The workable question is: \"what has to be true about this business to justify today's price, and does that seem reasonable?\"." },
            { p: "If the current price implies the company will grow 20% a year for a decade, your job is to assess whether that is plausible, not to guess Friday's close. That reframing is the difference between investing and speculating, and it is what we practise throughout the course." },
            { quiz: {
              q: "A company announces profits grew 30%. The stock falls 6% that session. What is the most likely explanation?",
              options: [
                "The market expected even more growth, or saw something worrying in the guidance",
                "Investors misunderstood the results",
                "Share prices have no relationship to profits"
              ],
              answer: 0,
              explain: "The price already embedded an expectation. If that expectation was 35% growth, a real 30% is a disappointment however good the headline sounds. Always ask what the figure is being compared against."
            }}
          ]
        }
      }
   ]
});

/* ═══════════════════════════════════════════ MÓDULO 06 ═══ */
window.FARLAZ_COURSE.push({
  id: "etfs", num: "06", level: 2,
  es: {
    title: "ETFs",
    tagline: "Comprar cientos de empresas con una sola orden",
    summary: "El instrumento que más ha cambiado la inversión particular en las últimas dos décadas. Qué es un ETF, en qué se diferencia de un fondo tradicional y cómo leer la sopa de siglas de su nombre.",
    topics: ["Qué es un ETF", "UCITS y no UCITS", "De acumulación y de distribución", "ETFs indexados", "Smart Beta", "ETFs apalancados"],
    outcomes: [
      "Entender cómo replica un índice un ETF",
      "Descifrar el nombre completo de un ETF",
      "Elegir entre acumulación y distribución",
      "Reconocer por qué los ETFs apalancados no sirven para el largo plazo"
    ]
  },
  en: {
    title: "ETFs",
    tagline: "Buying hundreds of companies with a single order",
    summary: "The instrument that has changed private investing most over the past two decades. What an ETF is, how it differs from a traditional fund, and how to read the alphabet soup in its name.",
    topics: ["What an ETF is", "UCITS and non-UCITS", "Accumulating and distributing", "Index ETFs", "Smart beta", "Leveraged ETFs"],
    outcomes: [
      "Understand how an ETF tracks an index",
      "Decode an ETF's full name",
      "Choose between accumulating and distributing",
      "Recognise why leveraged ETFs don't work long term"
    ]
  },
  lessons: [
    {
      id: "que-es-un-etf",
      minutes: 9,
      es: {
        title: "Qué es un ETF",
        body: [
          { p: "Comprar las quinientas empresas de un índice bursátil por separado exigiría quinientas órdenes, quinientas comisiones y una cantidad de dinero que casi nadie tiene disponible. Un ETF resuelve ese problema de una forma sencilla: es un fondo que cotiza en bolsa como si fuera una acción, y comprar una sola participación te da una porción proporcional de todo lo que ese fondo contiene." },
          { h: "Fondo por dentro, acción por fuera" },
          { p: "Por dentro un ETF es un fondo de inversión ordinario: un patrimonio con una gestora que lo administra y un depositario que custodia los activos separados de su propio balance. Si la gestora quiebra, las acciones que hay dentro del fondo no forman parte de la masa concursal." },
          { p: "Por fuera se comporta como una acción. Cotiza durante toda la sesión, se compra y se vende con una orden de bolsa y el precio cambia minuto a minuto. Un fondo tradicional funciona distinto: tu orden se ejecuta una vez al día, al valor liquidativo de cierre, y no sabes el precio exacto hasta después." },
          { h: "El mecanismo que mantiene el precio pegado al valor" },
          { p: "Un ETF podría, en teoría, cotizar muy por encima o muy por debajo de lo que valen sus activos. No suele ocurrir, y la razón no es la buena voluntad de nadie: es un mecanismo llamado creación y reembolso." },
          { p: "Unos intermediarios autorizados pueden entregar a la gestora la cesta exacta de acciones del índice y recibir participaciones nuevas del ETF, o hacer la operación al revés. Si el ETF cotiza por encima de lo que valen sus activos, a esos intermediarios les compensa crear participaciones y venderlas, lo que empuja el precio hacia abajo. Si cotiza por debajo, compran participaciones y las canjean por las acciones, lo que empuja el precio hacia arriba." },
          { key: "Un ETF no sigue a su índice porque lo prometa en el folleto. Lo sigue porque, cuando se desvía, hay intermediarios que ganan dinero corrigiendo la desviación. Cuando ese mecanismo se atasca, el seguimiento se atasca con él." },
          { h: "Las tres formas de replicar un índice" },
          { table: {
            head: ["Método", "Cómo funciona", "Qué introduce"],
            rows: [
              ["Réplica física completa", "Compra todas las acciones del índice con el mismo peso que tienen en él", "Máxima transparencia. Cara si el índice es enorme o tiene valores poco líquidos"],
              ["Muestreo optimizado", "Compra una selección representativa que se comporta de forma parecida al conjunto", "Menor coste de operativa. A cambio, algo más de desviación frente al índice"],
              ["Réplica sintética", "No compra las acciones: firma un contrato de intercambio con un banco que se compromete a pagarle el rendimiento del índice", "Riesgo de contraparte. Si el banco incumple, lo que te protege es el colateral depositado"]
            ]
          }},
          { note: "La réplica sintética no es mala por definición. En algunos mercados de difícil acceso es la única forma barata de obtener exposición, y la normativa europea limita cuánto puede pesar la contraparte. Pero añade una dependencia que la réplica física no tiene, y conviene saber que está ahí antes de comprar." },
          { h: "Lo que pagas, aunque no aparezca en el extracto" },
          { ul: [
            "<strong>El coste corriente (TER).</strong> Se descuenta a diario del valor del fondo, no se cobra aparte. Nunca verás el apunte, pero está ahí todos los días.",
            "<strong>La horquilla.</strong> La diferencia entre el precio al que puedes comprar y aquel al que puedes vender en ese momento. Se paga entera en cada operación, así que penaliza a quien opera mucho.",
            "<strong>La diferencia de seguimiento.</strong> Lo que el ETF se queda por detrás del índice a lo largo de un año. Recoge el TER, los costes de operativa y, sobre todo, la fiscalidad de los dividendos que cobra el fondo. Es el dato honesto, y no coincide con el TER.",
            "<strong>Las comisiones de tu bróker.</strong> Ajenas al ETF, pero salen de tu bolsillo igual."
          ]},
          { note: "Ejemplo construido para ver la diferencia: un ETF con un TER del 0,20% que se queda un 0,35% por detrás de su índice en el año te está costando 0,35%, no 0,20%. La diferencia de seguimiento suele publicarse en la ficha del fondo, y es el número que conviene comparar." },
          { h: "Cuándo el envoltorio falla" },
          { p: "Un ETF es un envoltorio, no una protección. Envuelve lo que hay dentro, con sus virtudes y sus problemas." },
          { ul: [
            "<strong>No elimina el riesgo de mercado.</strong> Si el índice cae un 40%, el ETF cae un 40%. La diversificación reparte el riesgo entre empresas; no lo hace desaparecer.",
            "<strong>Cuando lo de dentro es ilíquido, el envoltorio no lo arregla.</strong> Un ETF de bonos de alto rendimiento puede cotizar lejos del valor de sus activos justo en los días de tensión, que son aquellos en los que te importa vender.",
            "<strong>Diversificado no significa repartido.</strong> Un índice ponderado por capitalización concentra en las mayores empresas. Comprar el índice completo puede dejarte con un tercio del dinero en un puñado de nombres del mismo sector.",
            "<strong>Los ETFs cierran.</strong> Si un producto nicho no reúne patrimonio suficiente, la gestora lo liquida, te devuelve el efectivo y te obliga a materializar la posición cuando a ella le conviene, no cuando a ti te conviene."
          ]},
          { quiz: {
            q: "Un ETF de réplica física completa sobre un índice de 500 empresas tiene un TER del 0,07%, pero durante el año se ha quedado un 0,25% por detrás del índice. ¿Qué explica mejor esa diferencia?",
            options: [
              "Costes de operativa y, sobre todo, retenciones fiscales sobre los dividendos que cobra el fondo",
              "La gestora está cobrando comisiones ocultas por encima del TER declarado",
              "Es un error de cálculo: la diferencia de seguimiento debe coincidir con el TER"
            ],
            answer: 0,
            explain: "El TER solo recoge la comisión de gestión. La diferencia de seguimiento incluye además lo que cuesta comprar y vender acciones dentro del fondo y los impuestos que se retienen sobre los dividendos antes de que lleguen al patrimonio. Por eso el TER es un dato incompleto y la diferencia de seguimiento es el dato útil."
          }}
        ]
      },
      en: {
        title: "What an ETF is",
        body: [
          { p: "Buying the five hundred companies in a stock index one by one would take five hundred orders, five hundred commissions and an amount of money almost nobody has lying around. An ETF solves that problem plainly: it is a fund that trades on an exchange like a share, and buying a single unit gives you a proportional slice of everything the fund holds." },
          { h: "A fund inside, a share outside" },
          { p: "Inside, an ETF is an ordinary investment fund: a pool of assets with a manager running it and a depositary holding the assets separately from its own balance sheet. If the manager goes under, the shares inside the fund are not part of the insolvency estate." },
          { p: "Outside, it behaves like a share. It trades throughout the session, you buy and sell with a stock exchange order, and the price changes minute by minute. A traditional fund works differently: your order is filled once a day at the closing net asset value, and you don't know the exact price until afterwards." },
          { h: "The mechanism that keeps price close to value" },
          { p: "An ETF could, in theory, trade far above or far below what its assets are worth. It usually doesn't, and the reason is not anyone's good intentions: it is a process called creation and redemption." },
          { p: "Authorised intermediaries can hand the manager the exact basket of index shares and receive newly issued ETF units, or run the trade in reverse. If the ETF trades above the value of its assets, those intermediaries profit by creating units and selling them, which pushes the price down. If it trades below, they buy units and swap them back for the shares, which pushes the price up." },
          { key: "An ETF doesn't track its index because the prospectus says so. It tracks because, whenever it drifts, somebody makes money closing the gap. When that mechanism jams, tracking jams with it." },
          { h: "The three ways to replicate an index" },
          { table: {
            head: ["Method", "How it works", "What it introduces"],
            rows: [
              ["Full physical replication", "Buys every share in the index at the same weight it carries there", "Maximum transparency. Expensive if the index is huge or holds illiquid names"],
              ["Optimised sampling", "Buys a representative selection that behaves much like the whole", "Lower trading costs. In exchange, a little more drift against the index"],
              ["Synthetic replication", "Doesn't buy the shares: signs a swap contract with a bank that undertakes to pay it the index return", "Counterparty risk. If the bank fails, what protects you is the collateral posted"]
            ]
          }},
          { note: "Synthetic replication isn't bad by definition. In some hard-to-reach markets it is the only cheap way to get exposure, and European rules cap how much weight a single counterparty can carry. But it adds a dependency physical replication doesn't have, and it is worth knowing it is there before you buy." },
          { h: "What you pay, even though it never shows on a statement" },
          { ul: [
            "<strong>The ongoing charge (TER).</strong> Deducted daily from the fund's value, not billed separately. You will never see the entry, but it happens every day.",
            "<strong>The spread.</strong> The gap between the price you can buy at and the price you can sell at right then. You pay it in full on every trade, so it punishes frequent dealing.",
            "<strong>Tracking difference.</strong> How far the ETF falls behind its index over a year. It picks up the TER, the trading costs and, above all, the tax withheld on the dividends the fund receives. This is the honest figure, and it does not equal the TER.",
            "<strong>Your broker's commissions.</strong> Nothing to do with the ETF, but they come out of your pocket all the same."
          ]},
          { note: "A constructed example to see the gap: an ETF with a 0.20% TER that ends the year 0.35% behind its index is costing you 0.35%, not 0.20%. Tracking difference is usually published in the fund factsheet, and it is the number worth comparing." },
          { h: "Where the wrapper fails" },
          { p: "An ETF is a wrapper, not a protection. It wraps whatever is inside, virtues and problems alike." },
          { ul: [
            "<strong>It does not remove market risk.</strong> If the index falls 40%, the ETF falls 40%. Diversification spreads risk across companies; it does not make risk disappear.",
            "<strong>When the contents are illiquid, the wrapper doesn't fix it.</strong> A high yield bond ETF can trade well away from the value of its assets precisely on the stressed days, which are the days you might need to sell.",
            "<strong>Diversified doesn't mean spread out.</strong> A market cap weighted index concentrates in the largest companies. Buying the whole index can leave a third of your money in a handful of names from the same sector.",
            "<strong>ETFs close.</strong> If a niche product fails to gather enough assets, the manager winds it up, returns the cash and forces you to realise the position on its timetable rather than yours."
          ]},
          { quiz: {
            q: "A fully physical ETF on a 500-company index charges a 0.07% TER, but over the year it ended 0.25% behind the index. What best explains the gap?",
            options: [
              "Trading costs and, mostly, tax withheld on the dividends the fund receives",
              "The manager is charging hidden fees on top of the stated TER",
              "It is a calculation error: tracking difference must equal the TER"
            ],
            answer: 0,
            explain: "The TER only covers the management fee. Tracking difference also includes what it costs to buy and sell shares inside the fund and the tax withheld on dividends before they reach the pool. That is why the TER is an incomplete figure and tracking difference is the useful one."
          }}
        ]
      }
    },
    {
      id: "ucits-y-domicilio",
      minutes: 9,
      es: {
        title: "UCITS y no UCITS: por qué el domicilio del fondo te afecta",
        body: [
          { p: "Dos ETFs pueden seguir exactamente el mismo índice, contener las mismas acciones en las mismas proporciones y aun así dejarte cantidades distintas de dinero al cabo de los años. La diferencia no está en lo que compran: está en dónde está domiciliado el fondo y bajo qué normativa se ha constituido." },
          { h: "Qué significa UCITS" },
          { p: "UCITS es el marco regulatorio europeo para fondos destinados al pequeño inversor. Un fondo que se acoge a él acepta una serie de reglas a cambio de poder venderse en toda la Unión Europea y en buena parte del mundo." },
          { ul: [
            "<strong>Límites de concentración.</strong> El fondo no puede apostar todo a un emisor. Existen topes por posición pensados para que un solo nombre no hunda el vehículo.",
            "<strong>Custodia separada.</strong> Un depositario independiente guarda los activos y vigila a la gestora. No es una garantía contra las pérdidas de mercado; es una protección contra el fraude y la quiebra de la gestora.",
            "<strong>Liquidez exigible.</strong> El fondo debe poder atender reembolsos con regularidad, lo que restringe cuánto puede invertir en activos difíciles de vender.",
            "<strong>Documentación normalizada.</strong> El documento de datos fundamentales resume costes, riesgo y estrategia en un formato comparable entre productos."
          ]},
          { note: "UCITS no es un sello de calidad ni un indicador de buenos resultados. Es un marco de reglas. Un ETF UCITS puede perder tanto dinero como cualquier otro; lo que la etiqueta acota es cómo está construido y qué información está obligado a publicar." },
          { h: "El domicilio no es dónde inviertes" },
          { p: "Es un punto que confunde a mucha gente. Un ETF domiciliado en Irlanda puede tener el cien por cien de su cartera en empresas estadounidenses. El domicilio no dice dónde va tu dinero: dice bajo qué jurisdicción vive el fondo y, sobre todo, qué tratamiento fiscal recibe antes de que el dinero llegue a ti." },
          { key: "La fiscalidad del fondo se aplica dentro del fondo, antes de tu declaración. No es algo que puedas corregir después ni algo que dependa de tu bróker. Se decide el día que eliges el producto." },
          { h: "Por qué le importa a un inversor latinoamericano" },
          { p: "Cuando una empresa estadounidense reparte dividendo, Estados Unidos retiene impuesto en origen. El tipo general para un no residente es del 30%, y solo baja si existe un convenio de doble imposición aplicable. Un fondo domiciliado en Irlanda se acoge al convenio entre Estados Unidos e Irlanda y soporta una retención del 15% sobre esos mismos dividendos." },
          { table: {
            head: ["Concepto", "ETF domiciliado en EE. UU.", "ETF UCITS domiciliado en Irlanda"],
            rows: [
              ["Retención estadounidense sobre dividendos", "30% para el no residente sin convenio aplicable", "15% soportado por el fondo, en virtud del convenio EE. UU.–Irlanda"],
              ["Retención del país del fondo al pagarte", "No aplica", "Irlanda no retiene sobre lo que paga a no residentes"],
              ["¿Se considera activo situado en EE. UU. a efectos del impuesto sucesorio?", "Sí", "Con carácter general, no"],
              ["Formulario W-8BEN ante el bróker", "Necesario para aplicar convenio, si lo hay", "Igualmente habitual al operar"]
            ]
          }},
          { p: "El segundo punto de la tabla es el que casi nadie mira. Estados Unidos grava la herencia de los activos situados en su territorio que pertenecen a no residentes, con una exención de apenas 60.000 dólares y tipos que llegan al 40%. Las acciones de sociedades estadounidenses y los fondos domiciliados allí entran en ese cómputo. Los fondos irlandeses que invierten en las mismas acciones, con carácter general, no." },
          { note: "En América Latina la situación no es uniforme. México, Chile y Venezuela tienen convenio de doble imposición en vigor con Estados Unidos; Panamá, Colombia, Perú, Argentina y Brasil no lo tienen. Comprueba el caso de tu país de residencia y consulta a un asesor fiscal antes de decidir: Farlaz no es asesor registrado y esto no es asesoramiento fiscal." },
          { h: "Lo que se paga a cambio" },
          { ul: [
            "<strong>Menos catálogo.</strong> Hay más ETFs domiciliados en Estados Unidos que UCITS, y algunas estrategias concretas solo existen allí.",
            "<strong>A veces más caro.</strong> El mismo índice suele tener un coste corriente algo mayor en versión UCITS, aunque la diferencia se ha ido estrechando.",
            "<strong>Menos volumen.</strong> Horquillas algo más anchas en los productos menos populares, lo que encarece cada operación.",
            "<strong>Restricciones cruzadas.</strong> Algunos brókeres solo ofrecen uno de los dos universos según dónde tengas la residencia."
          ]},
          { h: "Cuándo este razonamiento no aplica" },
          { p: "Si el ETF no contiene acciones estadounidenses, la comparación de retenciones pierde casi todo su sentido. Si tu país de residencia tiene convenio con Estados Unidos y grava además la renta mundial, el cálculo puede invertirse. Y en muchos casos lo que más pesa no es la retención estadounidense sino cómo tributa la ganancia en tu propio país, que es una cuestión distinta y personal." },
          { quiz: {
            q: "Un inversor residente en un país sin convenio con Estados Unidos compara dos ETFs sobre el mismo índice estadounidense. ¿Qué diferencia estructural pesa más a largo plazo?",
            options: [
              "La retención sobre dividendos dentro del fondo, 15% frente a 30%, más el tratamiento sucesorio",
              "Que uno cotice en euros y el otro en dólares",
              "Que el domiciliado en EE. UU. invierte en empresas estadounidenses y el irlandés en europeas"
            ],
            answer: 0,
            explain: "La divisa de cotización no cambia el riesgo de tipo de cambio, que depende de los activos subyacentes, y ambos ETFs contienen las mismas acciones estadounidenses: el domicilio no determina en qué se invierte. Lo que sí cambia es la retención que soporta el fondo antes de reinvertir y si el vehículo entra en el cómputo del impuesto sucesorio estadounidense."
          }}
        ]
      },
      en: {
        title: "UCITS and non-UCITS: why the fund's domicile reaches you",
        body: [
          { p: "Two ETFs can track exactly the same index, hold the same shares in the same proportions, and still leave you with different amounts of money after some years. The difference isn't in what they buy: it is where the fund is domiciled and under which rulebook it was set up." },
          { h: "What UCITS means" },
          { p: "UCITS is the European regulatory framework for funds sold to retail investors. A fund that adopts it accepts a set of rules in return for being distributable across the European Union and much of the world." },
          { ul: [
            "<strong>Concentration limits.</strong> The fund cannot stake everything on one issuer. Position caps exist so a single name cannot sink the vehicle.",
            "<strong>Separate custody.</strong> An independent depositary holds the assets and oversees the manager. It is not a guarantee against market losses; it is protection against fraud and against the manager's insolvency.",
            "<strong>Required liquidity.</strong> The fund must be able to meet redemptions regularly, which restricts how much it can hold in hard-to-sell assets.",
            "<strong>Standardised disclosure.</strong> The key information document summarises costs, risk and strategy in a format you can compare across products."
          ]},
          { note: "UCITS is not a quality mark or a signal of good results. It is a rulebook. A UCITS ETF can lose as much money as any other; what the label constrains is how it is built and what it must disclose." },
          { h: "Domicile is not where you invest" },
          { p: "This trips up a lot of people. An ETF domiciled in Ireland can hold one hundred per cent of its portfolio in US companies. Domicile doesn't tell you where your money goes: it tells you which jurisdiction the fund lives under and, crucially, what tax treatment it gets before the money ever reaches you." },
          { key: "Fund-level tax is applied inside the fund, before your tax return. You cannot correct it afterwards and it doesn't depend on your broker. It is settled the day you pick the product." },
          { h: "Why it matters to a Latin American investor" },
          { p: "When a US company pays a dividend, the United States withholds tax at source. The general rate for a non-resident is 30%, and it only drops where an applicable double taxation treaty exists. A fund domiciled in Ireland claims the US-Ireland treaty and bears 15% withholding on those same dividends." },
          { table: {
            head: ["Item", "US-domiciled ETF", "Irish-domiciled UCITS ETF"],
            rows: [
              ["US withholding on dividends", "30% for a non-resident with no applicable treaty", "15% borne by the fund under the US-Ireland treaty"],
              ["Withholding by the fund's own country when it pays you", "Not applicable", "Ireland does not withhold on payments to non-residents"],
              ["Counted as a US-situs asset for estate tax?", "Yes", "Generally not"],
              ["W-8BEN form with your broker", "Needed to claim treaty relief, where one exists", "Routinely required to trade anyway"]
            ]
          }},
          { p: "The second row is the one almost nobody checks. The United States taxes the estates of non-residents on assets situated there, with an exemption of just 60,000 dollars and rates reaching 40%. Shares in US corporations and funds domiciled there fall inside that count. Irish funds holding the very same shares, as a general rule, do not." },
          { note: "Latin America is not uniform here. Mexico, Chile and Venezuela have double taxation treaties in force with the United States; Panama, Colombia, Peru, Argentina and Brazil do not. Check your own country of residence and take advice from a tax professional before deciding: Farlaz is not a registered adviser and this is not tax advice." },
          { h: "What you give up in exchange" },
          { ul: [
            "<strong>A smaller catalogue.</strong> There are more US-domiciled ETFs than UCITS ones, and some specific strategies only exist there.",
            "<strong>Sometimes dearer.</strong> The same index often carries a slightly higher ongoing charge in UCITS form, though the gap has been narrowing.",
            "<strong>Less volume.</strong> Somewhat wider spreads on the less popular products, which makes each trade costlier.",
            "<strong>Cross-border restrictions.</strong> Some brokers offer only one of the two universes depending on where you are resident."
          ]},
          { h: "When this reasoning doesn't apply" },
          { p: "If the ETF holds no US shares, the withholding comparison loses nearly all its force. If your country of residence has a treaty with the United States and also taxes worldwide income, the arithmetic can flip. And in many cases what weighs most is not US withholding at all but how the gain is taxed at home, which is a separate and personal question." },
          { quiz: {
            q: "An investor resident in a country with no US treaty compares two ETFs on the same US index. Which structural difference matters most over the long run?",
            options: [
              "Dividend withholding inside the fund, 15% versus 30%, plus the estate tax treatment",
              "That one is quoted in euros and the other in dollars",
              "That the US-domiciled one invests in US companies and the Irish one in European companies"
            ],
            answer: 0,
            explain: "Quotation currency doesn't change currency risk, which comes from the underlying assets, and both ETFs hold the same US shares: domicile doesn't determine what is bought. What does change is the withholding the fund bears before reinvesting, and whether the vehicle counts towards US estate tax."
          }}
        ]
      }
    },
    {
      id: "acumulacion-y-distribucion",
      minutes: 7,
      es: {
        title: "De acumulación y de distribución",
        body: [
          { p: "El mismo ETF, sobre el mismo índice, de la misma gestora, suele existir en dos versiones. Una te ingresa los dividendos en la cuenta; la otra los reinvierte por dentro sin que veas nada. En las fichas aparecen como <strong>Dist</strong> y <strong>Acc</strong>, y la elección tiene consecuencias que se acumulan durante décadas." },
          { h: "Qué hace cada una" },
          { ul: [
            "<strong>De distribución (Dist).</strong> Cada trimestre o cada semestre el fondo reparte entre los partícipes los dividendos que ha cobrado. Recibes efectivo en la cuenta y el valor de la participación baja en la misma cuantía.",
            "<strong>De acumulación (Acc).</strong> El fondo compra más activos con esos dividendos. No recibes nada, no hay apunte y el valor de la participación sube reflejando ese dinero reinvertido."
          ]},
          { key: "Ninguna de las dos genera más dinero que la otra por sí misma. La diferencia no está en cuánto ganas, sino en cuándo pagas impuestos y en cuánta fricción tiene reinvertir." },
          { h: "Por qué suele ganar la de acumulación" },
          { p: "En muchas jurisdicciones el dividendo cobrado tributa en el año en que se cobra, mientras que el crecimiento del valor de la participación no tributa hasta que vendes. La versión de acumulación aplaza ese pago, y el dinero que no se va en impuestos sigue generando rendimiento." },
          { p: "Hay además una ventaja práctica: reinvertir a mano un dividendo pequeño obliga a lanzar una orden, pagar comisión y aceptar que rara vez alcanza para una participación entera, con lo que queda efectivo parado. La versión de acumulación hace esa reinversión dentro del fondo, sin comisión y sin importes mínimos." },
          { note: "Ejemplo construido para ilustrar el mecanismo, no una previsión: dos versiones del mismo índice, ambas con un 2% anual de dividendos, mantenidas veinte años. Si en la de distribución se pierde cada año un 15% del dividendo en impuestos y no se reinvierte el resto de inmediato, el capital final queda por debajo del de la versión de acumulación aunque el índice haya sido idéntico. La brecha no viene de mejores resultados: viene del aplazamiento fiscal y de la ausencia de comisiones de reinversión." },
          { h: "Cuándo tiene sentido la de distribución" },
          { ul: [
            "<strong>Si necesitas la renta.</strong> Alguien que vive de su cartera necesita cobros periódicos sin tener que vender participaciones, que es una operación con su propio coste y su propio impacto fiscal.",
            "<strong>Si tu país trata mejor el dividendo.</strong> En algunos regímenes existen exenciones o tipos reducidos sobre dividendos que no se aplican a la ganancia patrimonial.",
            "<strong>Si tu país grava igualmente la acumulación.</strong> Hay jurisdicciones que imputan una renta anual al partícipe de un fondo de acumulación aunque no haya cobrado nada. En ese caso la ventaja del aplazamiento desaparece.",
            "<strong>Si necesitas ver el flujo.</strong> Es un argumento psicológico, no financiero, pero a mucha gente le ayuda a no vender ver entrar dinero en la cuenta."
          ]},
          { h: "Dónde falla la regla" },
          { p: "La recomendación genérica de «elige siempre acumulación» circula mucho y es incorrecta como norma universal, porque depende por completo de la fiscalidad de tu país de residencia. Antes de decidir, hay dos cosas que comprobar: si tu jurisdicción imputa renta anual a los fondos de acumulación, y si aplica tipos distintos a dividendos y a ganancias de capital." },
          { note: "Cambiar de una versión a otra no es gratuito: en la mayoría de los casos supone vender un ETF y comprar otro, lo que materializa la ganancia acumulada y activa la tributación correspondiente. Conviene acertar al principio más que corregir a mitad de camino." },
          { quiz: {
            q: "¿Cuál es la razón principal por la que la versión de acumulación suele resultar más eficiente a largo plazo?",
            options: [
              "Aplaza el pago de impuestos y reinvierte sin comisiones ni importes mínimos",
              "Obtiene mejores resultados porque el gestor selecciona dónde reinvertir",
              "Cobra dividendos más altos que la versión de distribución"
            ],
            answer: 0,
            explain: "Ambas versiones siguen el mismo índice y reciben los mismos dividendos: el gestor no elige nada. La ventaja, cuando existe, es de fricción y de calendario fiscal. Y desaparece en los países que imputan una renta anual a los fondos de acumulación."
          }}
        ]
      },
      en: {
        title: "Accumulating and distributing",
        body: [
          { p: "The same ETF, on the same index, from the same manager, usually exists in two versions. One pays the dividends into your account; the other reinvests them internally without you seeing a thing. Factsheets label them <strong>Dist</strong> and <strong>Acc</strong>, and the choice compounds over decades." },
          { h: "What each one does" },
          { ul: [
            "<strong>Distributing (Dist).</strong> Every quarter or half year the fund pays out the dividends it has collected. Cash lands in your account and the unit price drops by the same amount.",
            "<strong>Accumulating (Acc).</strong> The fund buys more assets with those dividends. Nothing reaches you, there is no entry to see, and the unit price rises to reflect the money put back to work."
          ]},
          { key: "Neither version earns more than the other by itself. The difference is not how much you make, it is when you pay tax and how much friction reinvesting carries." },
          { h: "Why accumulating usually wins" },
          { p: "In many jurisdictions a dividend received is taxed in the year it is received, while the rise in the unit price is not taxed until you sell. The accumulating version defers that payment, and money not handed over in tax keeps working." },
          { p: "There is a practical edge too: reinvesting a small dividend by hand means placing an order, paying commission and accepting that it rarely stretches to a whole unit, leaving idle cash behind. The accumulating version does that reinvestment inside the fund, with no commission and no minimum size." },
          { note: "A constructed example to show the mechanism, not a forecast: two versions of the same index, both yielding 2% a year, held for twenty years. If the distributing one loses 15% of each dividend to tax and the rest isn't reinvested straight away, the final capital ends below the accumulating version even though the index was identical. The gap doesn't come from better performance: it comes from tax deferral and the absence of reinvestment costs." },
          { h: "When distributing makes sense" },
          { ul: [
            "<strong>If you need the income.</strong> Someone living off a portfolio needs regular cash without having to sell units, which is a transaction with its own cost and its own tax consequence.",
            "<strong>If your country treats dividends better.</strong> Some regimes grant exemptions or reduced rates on dividends that do not apply to capital gains.",
            "<strong>If your country taxes accumulation anyway.</strong> Some jurisdictions impute annual income to holders of accumulating funds even though nothing was received. There the deferral advantage vanishes.",
            "<strong>If you need to see the flow.</strong> A psychological argument rather than a financial one, but watching money arrive helps many people stay invested."
          ]},
          { h: "Where the rule breaks" },
          { p: "The blanket advice to \"always pick accumulating\" circulates widely and is wrong as a universal rule, because it depends entirely on the tax code where you are resident. Two things to check before deciding: whether your jurisdiction imputes annual income to accumulating funds, and whether it applies different rates to dividends and to capital gains." },
          { note: "Switching from one version to the other is not free: in most cases it means selling one ETF and buying another, which crystallises the accumulated gain and triggers the tax on it. Better to get this right at the outset than to correct it halfway." },
          { quiz: {
            q: "What is the main reason the accumulating version is often more efficient over the long run?",
            options: [
              "It defers tax and reinvests with no commissions and no minimum amounts",
              "It performs better because the manager chooses where to reinvest",
              "It collects higher dividends than the distributing version"
            ],
            answer: 0,
            explain: "Both versions track the same index and receive the same dividends: the manager chooses nothing. The advantage, where it exists, is friction and tax timing. And it disappears in countries that impute annual income to accumulating funds."
          }}
        ]
      }
    },
    {
      id: "etfs-indexados",
      minutes: 8,
      es: {
        title: "ETFs indexados: qué índice estás comprando en realidad",
        body: [
          { p: "«Compra un ETF indexado» es probablemente el consejo financiero más repetido de la última década. Suele darse como si existiera un único índice y una única forma de replicarlo. No es así: el índice es una decisión editorial tomada por una empresa, con reglas concretas, y esas reglas determinan qué acabas teniendo." },
          { h: "Un índice es una regla, no una fotografía del mercado" },
          { p: "Detrás de cada índice hay un proveedor que decide qué entra, qué sale, con qué peso y cada cuánto se revisa. Un comité aplica un reglamento publicado. Cuando una empresa se incorpora o abandona el índice, todos los fondos que lo replican compran o venden esas acciones prácticamente a la vez." },
          { h: "Cómo se reparte el peso" },
          { table: {
            head: ["Criterio de ponderación", "Cómo asigna el dinero", "Consecuencia"],
            rows: [
              ["Por capitalización", "Más peso a las empresas más grandes", "Sigue al mercado y apenas necesita operativa, pero concentra en los mayores valores"],
              ["Equiponderado", "El mismo peso a cada empresa del índice", "Más exposición a compañías pequeñas. Obliga a rebalancear, lo que encarece"],
              ["Por fundamentales", "Peso según ventas, beneficios o dividendos", "Se aleja del precio como criterio. Depende de qué métrica elija el proveedor"]
            ]
          }},
          { note: "La ponderación por capitalización tiene una propiedad incómoda: cuanto más sube una empresa, más peso tiene en tu cartera. No es un error de diseño, es la definición. Pero significa que compras más de lo que ya ha subido, y conviene saberlo en lugar de descubrirlo." },
          { h: "Índices que parecen lo mismo y no lo son" },
          { ul: [
            "<strong>Un índice mundial no es el mundo.</strong> Los índices globales más usados excluyen los mercados emergentes salvo que lo indiquen expresamente, y el peso de Estados Unidos supera con holgura la mitad del total.",
            "<strong>Con dividendos o sin ellos.</strong> Un índice de precio ignora los dividendos; uno de rentabilidad total los incorpora. Comparar el resultado de un ETF con un índice de precio hace que el ETF parezca mejor de lo que es.",
            "<strong>Neto o bruto.</strong> Las versiones de rentabilidad total pueden calcularse antes o después de retenciones fiscales. La ficha del ETF debería decir contra cuál se compara.",
            "<strong>El número no es el criterio.</strong> Dos índices con un número parecido de empresas pueden tener composiciones muy distintas según los filtros de liquidez y de capital flotante."
          ]},
          { key: "Indexarse no es renunciar a decidir. Es delegar la decisión en el reglamento de un proveedor de índices. La pregunta útil no es «¿indexado o no?», sino «¿a qué regla me estoy indexando y me parece razonable?»." },
          { h: "Lo que la indexación resuelve de verdad" },
          { p: "El argumento de fondo no es que el mercado sea perfecto. Es aritmético: el conjunto de todos los inversores obtiene, por definición, el rendimiento del mercado antes de costes. Después de costes, el inversor medio se queda por debajo. Un producto que replica el mercado con un coste muy bajo se sitúa, por construcción, por encima de esa media." },
          { p: "A eso se añade que el fondo indexado no depende de que un gestor concreto siga acertando, ni de que siga en la empresa. Elimina una fuente de incertidumbre que es difícil de evaluar desde fuera." },
          { h: "Cuándo la indexación no basta" },
          { ul: [
            "<strong>No protege de las caídas.</strong> Replicar el mercado significa replicarlo también cuando cae. Ningún índice tiene un mecanismo de defensa.",
            "<strong>Concentración disfrazada.</strong> Un índice muy ponderado por capitalización puede acabar con una parte muy grande del dinero en unas pocas empresas del mismo sector. La etiqueta dice diversificado; la cartera puede no estarlo.",
            "<strong>En mercados estrechos el problema se agrava.</strong> En algunos índices de países pequeños, un puñado de empresas representa la mayor parte del índice.",
            "<strong>El coste sigue existiendo.</strong> Hay ETFs indexados caros. La indexación no garantiza precio bajo; hay que mirarlo producto a producto."
          ]},
          { quiz: {
            q: "Un ETF replica un índice mundial ponderado por capitalización. ¿Qué afirmación describe mejor lo que tienes?",
            options: [
              "Una cartera muy diversificada por número de empresas, pero concentrada por peso en las mayores",
              "Una cartera con el mismo dinero repartido en cada empresa del mundo",
              "Una cartera protegida frente a caídas por estar repartida entre muchos países"
            ],
            answer: 0,
            explain: "La ponderación por capitalización asigna el dinero en proporción al tamaño, así que unos pocos nombres pueden concentrar una parte muy alta del total. Diversificar entre muchas empresas reduce el riesgo de que una sola te arruine, pero no elimina el riesgo de mercado ni el sesgo de concentración."
          }}
        ]
      },
      en: {
        title: "Index ETFs: which index you are actually buying",
        body: [
          { p: "\"Buy an index ETF\" is probably the most repeated piece of financial advice of the past decade. It is usually given as if there were one index and one way to replicate it. There isn't: an index is an editorial decision made by a company, with specific rules, and those rules determine what you end up owning." },
          { h: "An index is a rule, not a photograph of the market" },
          { p: "Behind every index sits a provider deciding what goes in, what comes out, at what weight and how often it is reviewed. A committee applies a published rulebook. When a company joins or leaves the index, every fund tracking it buys or sells those shares at practically the same moment." },
          { h: "How the weight is shared out" },
          { table: {
            head: ["Weighting rule", "How it allocates money", "Consequence"],
            rows: [
              ["Market capitalisation", "More weight to the largest companies", "Tracks the market and needs almost no dealing, but concentrates in the biggest names"],
              ["Equal weight", "The same weight to every company in the index", "More exposure to smaller companies. Requires rebalancing, which costs more"],
              ["Fundamental", "Weight based on sales, profits or dividends", "Moves away from price as the criterion. Depends on which metric the provider picks"]
            ]
          }},
          { note: "Capitalisation weighting has an uncomfortable property: the more a company rises, the more weight it carries in your portfolio. That is not a design flaw, it is the definition. But it means you hold more of whatever has already gone up, and it is better known than discovered." },
          { h: "Indices that look alike and aren't" },
          { ul: [
            "<strong>A world index is not the world.</strong> The most widely used global indices exclude emerging markets unless they say otherwise, and the United States comfortably exceeds half the total weight.",
            "<strong>With dividends or without.</strong> A price index ignores dividends; a total return index includes them. Comparing an ETF against a price index makes the ETF look better than it is.",
            "<strong>Net or gross.</strong> Total return versions can be calculated before or after tax withholding. The ETF factsheet should say which one it is measured against.",
            "<strong>The count is not the criterion.</strong> Two indices with a similar number of companies can hold very different portfolios depending on liquidity and free float screens."
          ]},
          { key: "Indexing is not giving up on deciding. It is delegating the decision to an index provider's rulebook. The useful question is not \"index or not?\" but \"which rule am I indexing to, and does it seem reasonable?\"." },
          { h: "What indexing genuinely solves" },
          { p: "The underlying argument is not that markets are perfect. It is arithmetic: all investors together earn, by definition, the market return before costs. After costs, the average investor lands below it. A product that replicates the market at a very low cost sits, by construction, above that average." },
          { p: "On top of that, an index fund doesn't depend on one particular manager continuing to be right, or continuing to work there. It removes a source of uncertainty that is hard to assess from outside." },
          { h: "Where indexing isn't enough" },
          { ul: [
            "<strong>It doesn't protect you from falls.</strong> Replicating the market means replicating it downwards too. No index has a defensive mechanism.",
            "<strong>Concentration in disguise.</strong> A heavily cap-weighted index can end up with a very large share of the money in a few companies from the same sector. The label says diversified; the portfolio may not be.",
            "<strong>Narrow markets make it worse.</strong> In some small-country indices, a handful of companies make up most of the index.",
            "<strong>Cost still exists.</strong> There are expensive index ETFs. Indexing guarantees no particular price; you have to check product by product."
          ]},
          { quiz: {
            q: "An ETF tracks a cap-weighted world index. Which statement best describes what you hold?",
            options: [
              "A portfolio spread across many companies by count, but concentrated by weight in the largest ones",
              "A portfolio with the same amount of money in every company in the world",
              "A portfolio protected against falls because it is spread across many countries"
            ],
            answer: 0,
            explain: "Cap weighting allocates money in proportion to size, so a few names can hold a very high share of the total. Spreading across many companies reduces the risk that one of them ruins you, but it removes neither market risk nor the concentration bias."
          }}
        ]
      }
    },
    {
      id: "smart-beta",
      minutes: 8,
      es: {
        title: "Smart Beta: indexar según una regla distinta",
        body: [
          { p: "El nombre es de marketing y conviene decirlo de entrada: no hay nada inteligente en el producto por el hecho de llamarse así. Un ETF de smart beta es simplemente un fondo indexado que sigue un índice construido con una regla distinta de la capitalización. Nada más, y nada menos." },
          { h: "De dónde viene la idea" },
          { p: "Décadas de investigación académica documentaron que ciertos grupos de acciones se han comportado históricamente de forma distinta al mercado en conjunto. A esas características se les llama factores. Si el efecto es sistemático, se puede escribir una regla que lo capture, y si se puede escribir una regla, se puede construir un índice y un ETF encima." },
          { h: "Los factores que más se comercializan" },
          { table: {
            head: ["Factor", "Qué selecciona", "Argumento habitual"],
            rows: [
              ["Valor", "Empresas baratas frente a sus beneficios o su patrimonio", "Compensación por asumir compañías en problemas o poco queridas"],
              ["Calidad", "Empresas rentables, poco endeudadas y con beneficios estables", "El mercado infravalora la persistencia de los buenos negocios"],
              ["Tamaño", "Empresas pequeñas frente a las grandes", "Mayor riesgo e iliquidez, presuntamente remunerados"],
              ["Momento", "Lo que más ha subido en los últimos meses", "Las tendencias tardan en agotarse por el comportamiento de los inversores"],
              ["Baja volatilidad", "Acciones que oscilan menos que el mercado", "El apetito por lo llamativo deja de lado lo aburrido"]
            ]
          }},
          { key: "Un factor no es una promesa. Es la descripción de un comportamiento observado en el pasado, con una explicación teórica que puede ser correcta, parcial o directamente equivocada." },
          { h: "Las tres cosas que se suelen callar" },
          { ul: [
            "<strong>Los factores pasan años sin funcionar.</strong> Un factor puede quedarse por detrás del mercado durante períodos muy largos. Quien lo compra esperando resultados rápidos suele abandonar justo antes de que el factor recupere, si es que recupera.",
            "<strong>Cuestan más.</strong> Filtrar y rebalancear obliga a operar, y operar tiene coste. El coste corriente de un producto de factor suele multiplicar varias veces el de un indexado amplio.",
            "<strong>La regla concreta importa más que el nombre.</strong> Dos ETFs etiquetados como valor pueden usar métricas distintas y acabar con carteras que se parecen poco. Hay que leer la metodología del índice, no la etiqueta del producto."
          ]},
          { h: "El problema del retrovisor" },
          { p: "Casi todos estos índices se lanzan con una serie histórica reconstruida hacia atrás. Es decir: la regla se diseña conociendo ya los datos y después se aplica a esos mismos datos. Un resultado histórico brillante calculado así dice bastante poco sobre el futuro." },
          { note: "Señal de alarma útil: cuando la única prueba que se ofrece de una estrategia es una simulación retrospectiva impecable, lo que estás viendo no es evidencia sino la regla que mejor encajaba con el pasado. Conviene preguntar cuánto tiempo lleva el índice publicándose en tiempo real." },
          { p: "Se añade un segundo problema. Cuando un factor se hace popular y entra mucho dinero, los precios de esas acciones suben y la ventaja que se pretendía capturar puede reducirse o desaparecer. El propio éxito del producto erosiona su razón de ser." },
          { h: "Cuándo puede tener sentido" },
          { p: "Como complemento de una cartera indexada amplia, con una parte acotada, entendiendo la regla concreta y aceptando de antemano que habrá años malos. No como sustituto del núcleo de la cartera ni como forma de mejorar los resultados a corto plazo." },
          { quiz: {
            q: "Un ETF de smart beta muestra una simulación histórica que supera al índice general durante quince años. ¿Cuál es la lectura más prudente?",
            options: [
              "Es una regla construida conociendo esos datos; hay que ver cuánto lleva publicándose en tiempo real",
              "Es una prueba sólida de que la estrategia seguirá superando al índice",
              "Confirma que la gestora tiene mejores analistas que la competencia"
            ],
            answer: 0,
            explain: "Una simulación retrospectiva se calcula aplicando la regla a los datos que se usaron para diseñarla. Cuantos más filtros incorpore, más fácil es que el resultado histórico sea excelente y no se repita. Lo relevante es el comportamiento desde que el índice se publica en tiempo real, y la coherencia económica del factor."
          }}
        ]
      },
      en: {
        title: "Smart beta: indexing to a different rule",
        body: [
          { p: "The name is marketing and it is worth saying so up front: nothing about a product becomes clever by being called clever. A smart beta ETF is simply an index fund tracking an index built on a rule other than market capitalisation. Nothing more, and nothing less." },
          { h: "Where the idea comes from" },
          { p: "Decades of academic research documented that certain groups of shares have historically behaved differently from the market as a whole. Those characteristics are called factors. If the effect is systematic, a rule can be written to capture it, and if a rule can be written, an index and an ETF can be built on top." },
          { h: "The factors most often sold" },
          { table: {
            head: ["Factor", "What it selects", "The usual argument"],
            rows: [
              ["Value", "Companies cheap against their earnings or book value", "Compensation for holding troubled or unloved businesses"],
              ["Quality", "Profitable, low-debt companies with stable earnings", "The market underrates how persistent good businesses are"],
              ["Size", "Smaller companies over larger ones", "Higher risk and illiquidity, supposedly rewarded"],
              ["Momentum", "Whatever has risen most over recent months", "Trends take time to exhaust because of how investors behave"],
              ["Low volatility", "Shares that swing less than the market", "Appetite for the exciting leaves the dull behind"]
            ]
          }},
          { key: "A factor is not a promise. It is a description of behaviour observed in the past, with a theoretical explanation that may be right, partly right, or simply wrong." },
          { h: "The three things usually left unsaid" },
          { ul: [
            "<strong>Factors go years without working.</strong> A factor can trail the market for very long stretches. Anyone who buys one expecting quick results tends to give up right before it recovers, if it recovers.",
            "<strong>They cost more.</strong> Screening and rebalancing means dealing, and dealing costs money. A factor product's ongoing charge is typically several times that of a broad index fund.",
            "<strong>The specific rule matters more than the name.</strong> Two ETFs both labelled value can use different metrics and end up with portfolios that barely overlap. Read the index methodology, not the product label."
          ]},
          { h: "The rear-view mirror problem" },
          { p: "Almost all these indices launch with a history reconstructed backwards. That is: the rule is designed already knowing the data, and then applied to that same data. A brilliant historical result computed that way says rather little about the future." },
          { note: "A useful warning sign: when the only evidence offered for a strategy is a flawless backtest, what you are looking at is not evidence but the rule that best fitted the past. Ask how long the index has been published in real time." },
          { p: "A second problem follows. When a factor becomes popular and money floods in, the prices of those shares rise and the very edge being chased can shrink or vanish. The product's own success erodes its reason to exist." },
          { h: "When it can make sense" },
          { p: "As a complement to a broad index portfolio, in a limited share, understanding the specific rule and accepting in advance that there will be bad years. Not as a substitute for the core of the portfolio, and not as a way to improve short-term results." },
          { quiz: {
            q: "A smart beta ETF shows a backtest beating the broad index over fifteen years. What is the prudent reading?",
            options: [
              "It is a rule built knowing that data; check how long it has been published in real time",
              "It is solid evidence the strategy will keep beating the index",
              "It confirms the manager has better analysts than its competitors"
            ],
            answer: 0,
            explain: "A backtest is computed by applying a rule to the data used to design it. The more screens it stacks, the easier it is for the historical result to be excellent and never repeat. What matters is behaviour since the index went live, and whether the factor has a coherent economic story."
          }}
        ]
      }
    },
    {
      id: "etfs-apalancados",
      minutes: 8,
      es: {
        title: "ETFs apalancados: por qué el doble no es el doble",
        body: [
          { p: "Un ETF apalancado promete multiplicar el movimiento diario de un índice: dos veces, tres veces, o el movimiento contrario en el caso de los inversos. La palabra decisiva de esa frase es <strong>diario</strong>, y es la que casi nadie lee." },
          { h: "Qué hace exactamente el producto" },
          { p: "El fondo se compromete a multiplicar por dos la variación del índice en cada sesión. Al cierre reajusta su exposición para volver a estar en el doble exacto respecto al nuevo nivel. Ese reajuste diario es la clave de todo lo que viene después." },
          { p: "Multiplicar el resultado de un día dos veces, y volver a hacerlo al día siguiente sobre una base distinta, no equivale a multiplicar por dos el resultado del período. La composición de rendimientos no funciona así." },
          { h: "El efecto en una tabla" },
          { table: {
            head: ["Día", "Índice", "Variación diaria", "ETF x2", "Variación del ETF"],
            rows: [
              ["Inicio", "100,0", "—", "100,0", "—"],
              ["Día 1", "90,0", "−10%", "80,0", "−20%"],
              ["Día 2", "99,0", "+11,1%", "97,8", "+22,2%"],
              ["Resultado", "−1,0%", "", "−2,2%", ""]
            ]
          }},
          { note: "Cifras construidas para ilustrar el mecanismo. El índice pierde un 1% en dos sesiones; el ETF apalancado pierde un 2,2%, no un 2%. La diferencia parece pequeña en dos días. Repetida durante meses en un mercado que sube y baja sin dirección clara, se convierte en una erosión considerable." },
          { key: "El apalancamiento diario no arrastra un error de cálculo: arrastra volatilidad. Cuanto más oscila el índice, más se aleja el ETF apalancado del múltiplo que su nombre sugiere, y siempre en contra del inversor cuando el mercado va y viene." },
          { h: "Lo que se paga por dentro" },
          { ul: [
            "<strong>El coste del apalancamiento.</strong> El fondo necesita financiación o derivados para duplicar la exposición, y eso tiene un precio que sube cuando suben los tipos de interés.",
            "<strong>La operativa diaria.</strong> Reajustar todas las sesiones implica comprar y vender constantemente dentro del fondo.",
            "<strong>El coste corriente.</strong> Muy superior al de un ETF indexado convencional.",
            "<strong>Todo ello se descuenta a diario</strong>, tanto si el índice sube como si baja."
          ]},
          { h: "Para qué está pensado y para qué no" },
          { p: "Son instrumentos diseñados para una posición táctica de muy corto plazo, normalmente de horas o de pocos días, en manos de alguien que vigila la posición de forma activa. Los propios folletos suelen advertirlo con claridad." },
          { p: "No están pensados para comprar y mantener. La afirmación de que «a largo plazo el mercado sube, así que con el doble subo el doble» es incorrecta por la mecánica que acabamos de ver, no por pesimismo sobre el mercado." },
          { note: "Los ETFs inversos comparten el mismo problema y añaden otro: una posición bajista mantenida tiene pérdida potencial creciente si el mercado sube, mientras que la ganancia máxima está acotada. El perfil de riesgo es asimétrico y juega en contra." },
          { h: "El resumen honesto" },
          { p: "No son productos defectuosos ni fraudulentos: hacen exactamente lo que su folleto dice. El problema es que lo que dicen y lo que la gente entiende que dicen son cosas distintas. Si en algún momento consideras usarlos, la prueba mínima es saber explicar por qué un x2 puede perder más del doble en un mercado lateral." },
          { quiz: {
            q: "Un índice cae un 10% y al día siguiente sube un 11,1%, quedando prácticamente donde empezó. ¿Qué le ocurre a un ETF x2 sobre ese índice?",
            options: [
              "Termina por debajo de su punto de partida, porque el reajuste diario penaliza la oscilación",
              "Termina prácticamente igual, ya que el índice ha vuelto a su nivel",
              "Termina por encima, porque la subida del 11,1% se multiplica por dos"
            ],
            answer: 0,
            explain: "El ETF pierde un 20% el primer día y gana un 22,2% sobre un capital ya reducido. Recuperar una caída exige una subida porcentual mayor, y el apalancamiento amplifica ese desajuste. Por eso la oscilación erosiona el resultado aunque el índice acabe donde empezó."
          }}
        ]
      },
      en: {
        title: "Leveraged ETFs: why double isn't double",
        body: [
          { p: "A leveraged ETF promises to multiply an index's daily move: twice, three times, or the opposite move in the case of inverse products. The decisive word in that sentence is <strong>daily</strong>, and it is the one almost nobody reads." },
          { h: "What the product actually does" },
          { p: "The fund undertakes to double the index's change within each session. At the close it resets its exposure to be exactly double again relative to the new level. That daily reset drives everything that follows." },
          { p: "Doubling one day's result, then doubling again the next day from a different base, is not the same as doubling the result for the period. Compounding does not work that way." },
          { h: "The effect in a table" },
          { table: {
            head: ["Day", "Index", "Daily change", "2x ETF", "ETF change"],
            rows: [
              ["Start", "100.0", "—", "100.0", "—"],
              ["Day 1", "90.0", "−10%", "80.0", "−20%"],
              ["Day 2", "99.0", "+11.1%", "97.8", "+22.2%"],
              ["Result", "−1.0%", "", "−2.2%", ""]
            ]
          }},
          { note: "Constructed figures to show the mechanism. The index loses 1% over two sessions; the leveraged ETF loses 2.2%, not 2%. Over two days the gap looks small. Repeated for months in a market that moves up and down without direction, it becomes serious erosion." },
          { key: "Daily leverage doesn't carry a calculation error: it carries volatility. The more the index swings, the further the leveraged ETF drifts from the multiple its name suggests, and always against the investor when the market goes back and forth." },
          { h: "What you pay inside" },
          { ul: [
            "<strong>The cost of leverage.</strong> The fund needs financing or derivatives to double its exposure, and that has a price which rises when interest rates rise.",
            "<strong>The daily dealing.</strong> Resetting every session means constant buying and selling inside the fund.",
            "<strong>The ongoing charge.</strong> Far above that of a conventional index ETF.",
            "<strong>All of it is deducted daily</strong>, whether the index rises or falls."
          ]},
          { h: "What they are for, and what they are not for" },
          { p: "These are instruments built for a very short-term tactical position, usually hours or a few days, held by someone watching it actively. The prospectuses themselves normally say so plainly." },
          { p: "They are not built to buy and hold. The claim that \"the market rises over the long run, so with double I rise double\" is wrong because of the mechanics just described, not out of pessimism about markets." },
          { note: "Inverse ETFs share the same problem and add another: a held short position has a growing potential loss if the market rises, while the maximum gain is capped. The risk profile is asymmetric and it works against you." },
          { h: "The honest summary" },
          { p: "These are not defective or fraudulent products: they do exactly what the prospectus says. The trouble is that what they say and what people understand them to say are different things. If you ever consider using one, the minimum test is being able to explain why a 2x can lose more than double in a sideways market." },
          { quiz: {
            q: "An index falls 10% and the next day rises 11.1%, ending practically where it started. What happens to a 2x ETF on that index?",
            options: [
              "It ends below its starting point, because the daily reset penalises the swing",
              "It ends practically level, since the index returned to its starting level",
              "It ends higher, because the 11.1% rise is doubled"
            ],
            answer: 0,
            explain: "The ETF loses 20% on day one and gains 22.2% on capital that has already shrunk. Recovering a fall requires a larger percentage rise, and leverage amplifies that mismatch. That is why swings erode the result even when the index finishes where it began."
          }}
        ]
      }
    }
  ]
});

/* ═══════════════════════════════════════════ MÓDULO 07 ═══ */
window.FARLAZ_COURSE.push({
  id: "bonos", num: "07", level: 2,
  es: {
    title: "Bonos",
    tagline: "Prestar dinero en lugar de poseer",
    summary: "La renta fija tiene fama de aburrida y de segura, y ninguna de las dos cosas es del todo cierta. Este módulo explica cómo funciona un bono y por qué su precio se mueve al revés que los tipos de interés.",
    topics: ["Bonos gubernamentales", "Bonos corporativos", "Cupón", "Rendimiento (yield)", "Duración", "Riesgo de crédito"],
    outcomes: [
      "Identificar las tres piezas de un bono",
      "Explicar la relación inversa entre precio y tipos",
      "Entender qué mide la duración",
      "Interpretar el diferencial de crédito"
    ]
  },
  en: {
    title: "Bonds",
    tagline: "Lending money instead of owning",
    summary: "Fixed income has a reputation for being dull and safe, and neither is entirely true. This module explains how a bond works and why its price moves opposite to interest rates.",
    topics: ["Government bonds", "Corporate bonds", "Coupon", "Yield", "Duration", "Credit risk"],
    outcomes: [
      "Identify the three parts of a bond",
      "Explain the inverse relationship between price and rates",
      "Understand what duration measures",
      "Interpret the credit spread"
    ]
  },
  lessons: [ 
    {
        id: "renta-fija",
        minutes: 9,
        es: {
          title: "Renta fija: prestar en vez de poseer",
          body: [
            { p: "Cuando compras un bono no eres dueño de nada: eres acreedor. Le prestas dinero a un Estado o a una empresa y a cambio recibes una promesa contractual de pagos. Esa diferencia entre ser dueño y ser acreedor lo cambia todo." },
            { h: "Las tres piezas de un bono" },
            { ul: [
              "<strong>Nominal.</strong> La cantidad que te devolverán al vencimiento. Normalmente 1.000 unidades monetarias.",
              "<strong>Cupón.</strong> El interés periódico. Un cupón del 4% sobre un nominal de 1.000 son 40 al año, pase lo que pase con el precio del bono en el mercado.",
              "<strong>Vencimiento.</strong> La fecha en que te devuelven el nominal y termina el contrato."
            ]},
            { p: "Fíjate en que el cupón es fijo. De ahí el nombre «renta fija»: los pagos no cambian. Lo que sí cambia, y mucho, es el precio al que ese bono se compra y se vende antes de vencer." },
            { h: "Por qué el precio va al revés que los tipos" },
            { p: "Esta es la relación que más cuesta interiorizar, y se entiende mejor con números que con definiciones." },
            { p: "Compras hoy un bono a 1.000 con un cupón del 3%. Te pagará 30 al año. Mañana el banco central sube tipos y los bonos nuevos, idénticos al tuyo, salen con un cupón del 5%: pagan 50 al año." },
            { p: "Nadie va a pagarte 1.000 por un papel que renta 30 cuando puede comprar otro que renta 50 por el mismo precio. Para que tu bono resulte atractivo, su precio tiene que bajar hasta que el rendimiento efectivo del comprador iguale al 5% del mercado. Tu bono no ha empeorado; el resto del mundo ha mejorado." },
            { table: {
              head: ["Tipos de mercado", "Cupón de tu bono", "Precio aproximado", "Qué te pasa"],
              rows: [
                ["3% → 5%", "3% fijo", "Baja hacia 940", "Pérdida si vendes ahora"],
                ["3% → 1%", "3% fijo", "Sube hacia 1.070", "Ganancia si vendes ahora"],
                ["3% → 3%", "3% fijo", "Se mantiene en 1.000", "Sin cambio"]
              ]
            }},
            { note: "Los precios de la tabla son ilustrativos y suponen un bono a cinco años. La magnitud real depende del plazo: cuanto más lejos está el vencimiento, más se mueve el precio ante el mismo cambio de tipos. A eso se le llama duración." },
            { key: "Si mantienes el bono hasta el vencimiento y el emisor no quiebra, cobras tu cupón y tu nominal, y las oscilaciones intermedias son irrelevantes. El riesgo de precio solo se materializa si necesitas vender antes." },
            { h: "Los dos riesgos que sí importan" },
            { p: "<strong>Riesgo de tipos:</strong> el que acabamos de ver. Afecta a todos los bonos, incluidos los del Estado más solvente del mundo." },
            { p: "<strong>Riesgo de crédito:</strong> que el emisor no pague. Es la razón por la que un bono corporativo de una empresa endeudada ofrece más cupón que un bono soberano. Ese exceso de rentabilidad se llama <em>spread</em> de crédito, y es literalmente el precio que el mercado pone a la probabilidad de impago." },
            { p: "Cuando alguien te ofrece «renta fija con alta rentabilidad y sin riesgo», está describiendo algo que no existe. El cupón elevado siempre está pagando por un riesgo: de crédito, de plazo, de liquidez o de divisa. Tu trabajo es identificar cuál." }
          ]
        },
        en: {
          title: "Fixed income: lending instead of owning",
          body: [
            { p: "When you buy a bond you own nothing: you are a creditor. You lend money to a government or a company and in exchange receive a contractual promise of payments. That difference between owner and creditor changes everything." },
            { h: "The three parts of a bond" },
            { ul: [
              "<strong>Face value.</strong> The amount returned to you at maturity. Usually 1,000 currency units.",
              "<strong>Coupon.</strong> The periodic interest. A 4% coupon on a 1,000 face value is 40 a year, whatever happens to the bond's market price.",
              "<strong>Maturity.</strong> The date the face value is returned and the contract ends."
            ]},
            { p: "Note that the coupon is fixed. Hence \"fixed income\": the payments don't change. What does change, considerably, is the price at which the bond trades before it matures." },
            { h: "Why price moves opposite to rates" },
            { p: "This is the relationship people struggle with most, and it lands better with numbers than with definitions." },
            { p: "You buy a bond today at 1,000 with a 3% coupon. It pays you 30 a year. Tomorrow the central bank raises rates and new bonds, identical to yours, are issued with a 5% coupon: they pay 50 a year." },
            { p: "Nobody will pay you 1,000 for paper yielding 30 when they can buy another yielding 50 at the same price. For your bond to be attractive, its price must fall until the buyer's effective yield matches the market's 5%. Your bond hasn't got worse; the rest of the world has got better." },
            { table: {
              head: ["Market rates", "Your coupon", "Approx. price", "What happens to you"],
              rows: [
                ["3% → 5%", "3% fixed", "Falls toward 940", "Loss if you sell now"],
                ["3% → 1%", "3% fixed", "Rises toward 1,070", "Gain if you sell now"],
                ["3% → 3%", "3% fixed", "Stays at 1,000", "No change"]
              ]
            }},
            { note: "The prices above are illustrative and assume a five-year bond. The real magnitude depends on term: the further away maturity is, the more price moves for the same rate change. That sensitivity is called duration." },
            { key: "If you hold to maturity and the issuer doesn't default, you collect your coupon and your face value, and the swings in between are irrelevant. Price risk only bites if you need to sell early." },
            { h: "The two risks that matter" },
            { p: "<strong>Rate risk:</strong> what we just covered. It affects every bond, including those of the most solvent government on earth." },
            { p: "<strong>Credit risk:</strong> that the issuer doesn't pay. It is why a corporate bond from an indebted company offers more coupon than a sovereign bond. That excess yield is called the credit <em>spread</em>, and it is literally the price the market puts on the probability of default." },
            { p: "When someone offers you \"fixed income with high returns and no risk\", they are describing something that doesn't exist. A high coupon is always paying for a risk: credit, term, liquidity or currency. Your job is to work out which one." }
          ]
        }
      }
   ]
});

/* ═══════════════════════════════════════════ MÓDULO 08 ═══ */
window.FARLAZ_COURSE.push({
  id: "fondos", num: "08", level: 2,
  es: {
    title: "Fondos de inversión",
    tagline: "Delegar la gestión: cuándo compensa y cuándo no",
    summary: "Desde los fondos indexados de coste mínimo hasta el capital riesgo. Qué hace cada vehículo, a quién va dirigido y qué comisiones se lleva por el camino.",
    topics: ["Fondos de gestión activa", "Fondos indexados", "Hedge funds", "Private Equity", "Venture Capital", "REITs"],
    outcomes: [
      "Distinguir gestión activa de gestión indexada",
      "Comparar el coste total de dos fondos",
      "Entender qué es un REIT y cómo tributa",
      "Saber qué vehículos no están pensados para un particular"
    ]
  },
  en: {
    title: "Investment funds",
    tagline: "Delegating management: when it pays and when it doesn't",
    summary: "From minimum-cost index funds to private equity. What each vehicle does, who it's for, and what fees it takes along the way.",
    topics: ["Actively managed funds", "Index funds", "Hedge funds", "Private equity", "Venture capital", "REITs"],
    outcomes: [
      "Tell active management from index tracking",
      "Compare the total cost of two funds",
      "Understand what a REIT is and how it's taxed",
      "Know which vehicles aren't designed for individuals"
    ]
  },
  lessons: [
    {
      id: "gestion-activa",
      minutes: 8,
      es: {
        title: "Fondos de gestión activa",
        body: [
          { p: "Un fondo de gestión activa contrata a alguien para que decida qué comprar y qué vender con el objetivo de superar a un índice de referencia. Es el modelo tradicional de la industria y, durante décadas, el único disponible para un particular. La pregunta no es si el gestor es competente, sino si su ventaja es lo bastante grande como para cubrir lo que cobra." },
          { h: "Por dónde salen las comisiones" },
          { table: {
            head: ["Concepto", "Cuándo se cobra", "Detalle que conviene mirar"],
            rows: [
              ["Comisión de gestión", "A diario, descontada del valor liquidativo", "No aparece como apunte. Es el coste principal"],
              ["Comisión de depositario", "A diario, junto a la anterior", "Pequeña, pero se suma al coste corriente"],
              ["Comisión de éxito", "Si se supera un umbral", "Comprobar si hay marca de agua: sin ella se puede cobrar dos veces por recuperar lo perdido"],
              ["Suscripción y reembolso", "Al entrar o al salir", "Menos frecuente hoy, pero sigue existiendo en algunos productos"]
            ]
          }},
          { key: "La comisión se cobra haya ganado o haya perdido el fondo. El gestor asume el riesgo de tu reputación, no el de tu dinero." },
          { h: "La aritmética previa a cualquier discusión" },
          { p: "Antes de mirar habilidad, hay una restricción que no depende de las opiniones. El conjunto de todos los inversores de un mercado obtiene, por definición, el rendimiento de ese mercado antes de costes: unos ganan lo que otros pierden y la suma es el índice. Después de comisiones, el conjunto queda por debajo. Por eso la gestión activa no puede superar al índice en promedio: matemáticamente le resta el coste." },
          { p: "Eso no impide que un gestor concreto lo supere. Lo que dice es que superarlo es un juego de suma cero antes de costes y de suma negativa después, y que el gestor tiene que generar valor suficiente para pagar su propia factura antes de aportarte nada." },
          { h: "Qué muestran los datos" },
          { p: "El informe SPIVA de S&P Dow Jones Indices compara fondos activos con sus índices de referencia. En el período de quince años cerrado en diciembre de 2024, ninguna de las veintidós categorías de renta variable estadounidense tuvo una mayoría de gestores que superara a su índice. En plazos de veinte años el porcentaje de fondos por debajo se acerca al noventa por ciento." },
          { note: "Estos estudios tienen una crítica metodológica legítima sobre cómo se agrupan las categorías y cómo se tratan los fondos que desaparecen. Aun aceptando esas objeciones, la dirección del resultado es consistente entre proveedores, países y períodos. No es un dato que dependa de quién lo publica." },
          { h: "El problema de la persistencia" },
          { p: "Suponiendo que quieras elegir un buen gestor, necesitas identificarlo por adelantado. El historial ayuda menos de lo que parece: los fondos que están en el primer cuartil de un período rara vez siguen ahí en el siguiente, y separar habilidad de suerte requiere series muy largas, más largas que la carrera de la mayoría de los gestores." },
          { h: "Cuándo la gestión activa tiene más sentido" },
          { ul: [
            "<strong>Mercados poco cubiertos.</strong> En segmentos pequeños o poco analizados hay más margen para que el análisis aporte algo.",
            "<strong>Cuando no existe un índice razonable.</strong> Hay activos donde replicar un índice es caro o inviable, y ahí la comparación cambia.",
            "<strong>Cuando el mandato no es batir al índice.</strong> Algunos fondos buscan menos oscilación o un perfil concreto, y evaluarlos contra un índice de bolsa no mide lo que hacen."
          ]},
          { p: "En todos esos casos sigue valiendo la misma prueba: cuánto cobra, contra qué se compara y durante cuánto tiempo lleva haciéndolo la misma persona." },
          { quiz: {
            q: "Un fondo activo ha superado a su índice un 1,5% anual antes de comisiones y cobra un 1,8% de coste corriente. ¿Qué ha recibido el partícipe?",
            options: [
              "Un resultado por debajo del índice, pese a que el gestor acertó",
              "Un resultado superior al índice, porque el gestor generó valor",
              "El mismo resultado que el índice, porque las comisiones se compensan"
            ],
            answer: 0,
            explain: "La habilidad del gestor y lo que llega al partícipe son cosas distintas. Un gestor puede acertar y aun así entregar menos que el índice si su comisión se lleva más de lo que aporta. Por eso el coste no es un detalle administrativo: es la primera barrera que hay que superar."
          }}
        ]
      },
      en: {
        title: "Actively managed funds",
        body: [
          { p: "An actively managed fund hires someone to decide what to buy and sell with the aim of beating a benchmark index. It is the industry's traditional model and, for decades, the only one available to an individual. The question is not whether the manager is competent, but whether their edge is large enough to cover what they charge." },
          { h: "Where the fees come from" },
          { table: {
            head: ["Charge", "When it is taken", "What to look at"],
            rows: [
              ["Management fee", "Daily, deducted from the net asset value", "Never shows as an entry. It is the main cost"],
              ["Depositary fee", "Daily, alongside the above", "Small, but it adds to the ongoing charge"],
              ["Performance fee", "When a threshold is beaten", "Check for a high water mark: without one you can be charged twice for recovering the same losses"],
              ["Entry and exit charges", "On subscription or redemption", "Less common now, but still present in some products"]
            ]
          }},
          { key: "The fee is charged whether the fund has won or lost. The manager carries reputational risk, not your capital risk." },
          { h: "The arithmetic that precedes any argument" },
          { p: "Before judging skill, there is a constraint that owes nothing to opinion. All investors in a market together earn, by definition, that market's return before costs: what some gain others lose, and the sum is the index. After fees, the group lands below it. That is why active management cannot beat the index on average: it subtracts its own cost." },
          { p: "None of which stops a particular manager beating it. What it says is that beating the index is a zero-sum game before costs and a negative-sum one after, and that the manager must add enough value to pay their own bill before adding anything to yours." },
          { h: "What the data shows" },
          { p: "The SPIVA report from S&P Dow Jones Indices compares active funds against their benchmarks. Over the fifteen-year period ending December 2024, not one of the twenty-two US equity categories had a majority of managers beating their index. Over twenty-year windows the share of funds falling short approaches ninety per cent." },
          { note: "These studies attract legitimate methodological criticism about how categories are grouped and how funds that disappear are treated. Even granting those objections, the direction of the finding is consistent across providers, countries and periods. It is not a result that depends on who publishes it." },
          { h: "The persistence problem" },
          { p: "Suppose you do want to pick a good manager. You have to identify them in advance. Track records help less than they appear to: funds in the top quartile of one period rarely stay there in the next, and separating skill from luck needs very long series, longer than most managers' careers." },
          { h: "Where active management makes more sense" },
          { ul: [
            "<strong>Thinly covered markets.</strong> In small or lightly researched segments there is more room for analysis to add something.",
            "<strong>Where no sensible index exists.</strong> Some assets are expensive or impractical to track, and there the comparison changes.",
            "<strong>Where the mandate isn't beating an index.</strong> Some funds target lower swings or a particular profile, and judging them against an equity index doesn't measure what they do."
          ]},
          { p: "In all those cases the same test still applies: what it charges, what it is measured against, and how long the same person has been doing it." },
          { quiz: {
            q: "An active fund beat its index by 1.5% a year before fees and charges a 1.8% ongoing cost. What did the investor receive?",
            options: [
              "A result below the index, even though the manager was right",
              "A result above the index, because the manager added value",
              "The same result as the index, because the fees cancel out"
            ],
            answer: 0,
            explain: "Manager skill and what reaches the investor are different things. A manager can be right and still deliver less than the index if the fee takes more than the skill adds. That is why cost is not an administrative detail: it is the first hurdle to clear."
          }}
        ]
      }
    },
    {
      id: "fondos-indexados",
      minutes: 7,
      es: {
        title: "Fondos indexados y su diferencia con un ETF",
        body: [
          { p: "Un fondo indexado tiene el mismo objetivo que un ETF indexado: replicar un índice al menor coste posible. Lo que cambia es el envoltorio, y ese detalle decide cuál de los dos encaja mejor con cómo inviertes." },
          { h: "Las diferencias que se notan" },
          { table: {
            head: ["", "Fondo indexado", "ETF indexado"],
            rows: [
              ["Precio de ejecución", "Valor liquidativo, una vez al día", "Precio de mercado, durante toda la sesión"],
              ["Horquilla de compraventa", "No existe", "Se paga en cada operación"],
              ["Aportación periódica", "Automatizable por importe exacto, admite fracciones", "Requiere orden y suele exigir participaciones enteras"],
              ["Comisión del bróker", "Habitualmente ninguna", "Una por cada compra y cada venta"],
              ["Catálogo disponible", "Más limitado, depende del comercializador", "Muy amplio"]
            ]
          }},
          { key: "Para quien aporta una cantidad fija cada mes y no piensa tocar la cartera, el fondo indexado suele ser más cómodo y más barato de operar. Para quien invierte importes grandes de forma esporádica, el ETF suele salir mejor." },
          { h: "El punto fiscal que cambia todo según el país" },
          { p: "En algunas jurisdicciones se puede trasladar el dinero de un fondo a otro sin tributar por la ganancia acumulada, mientras que vender un ETF para comprar otro sí genera un hecho imponible. Donde eso ocurre, la diferencia entre los dos envoltorios deja de ser de comodidad y pasa a ser relevante." },
          { note: "No es una regla universal ni mucho menos: depende por completo de la normativa del país de residencia y de cómo esté domiciliado el producto. Comprueba tu caso concreto con un asesor fiscal. Farlaz no es asesor registrado y esto no es asesoramiento fiscal." },
          { h: "Lo que hay que mirar en la ficha" },
          { ul: [
            "<strong>El coste corriente.</strong> Primer filtro, pero no el único.",
            "<strong>La diferencia de seguimiento.</strong> Cuánto se ha quedado por detrás del índice en los últimos años. Es el coste real.",
            "<strong>El índice exacto.</strong> Dos fondos con nombres casi idénticos pueden seguir índices con criterios distintos de inclusión.",
            "<strong>El patrimonio del fondo.</strong> Los vehículos muy pequeños tienen más probabilidad de acabar fusionados o liquidados."
          ]},
          { h: "Dónde falla" },
          { p: "El fondo indexado hereda todos los límites de la indexación: no protege de las caídas, concentra si el índice concentra y no distingue empresas caras de baratas. Y añade uno propio, que es la ejecución a ciegas: cuando das la orden no sabes a qué precio se ejecutará, porque se liquida al valor de cierre. En un día de mucha volatilidad esa incertidumbre es real." },
          { quiz: {
            q: "Alguien quiere aportar 150 unidades monetarias cada mes de forma automática a un índice mundial. ¿Qué envoltorio suele encajar mejor?",
            options: [
              "El fondo indexado, porque permite importes exactos sin comisión de bróker ni horquilla",
              "El ETF, porque cotiza en tiempo real y permite elegir el momento",
              "Es indiferente: el coste es idéntico en ambos casos"
            ],
            answer: 0,
            explain: "Con aportaciones pequeñas y repetidas, la comisión por operación y la horquilla del ETF pesan más que cualquier ventaja de ejecutar en tiempo real. Elegir el momento, además, no es una ventaja para quien invierte de forma periódica: es precisamente lo que este método evita."
          }}
        ]
      },
      en: {
        title: "Index funds and how they differ from an ETF",
        body: [
          { p: "An index fund has the same objective as an index ETF: track an index at the lowest possible cost. What differs is the wrapper, and that detail decides which of the two fits how you actually invest." },
          { h: "The differences you notice" },
          { table: {
            head: ["", "Index fund", "Index ETF"],
            rows: [
              ["Execution price", "Net asset value, once a day", "Market price, throughout the session"],
              ["Bid-offer spread", "None", "Paid on every trade"],
              ["Regular contributions", "Automatable to the exact amount, fractions allowed", "Needs an order and usually whole units"],
              ["Broker commission", "Usually none", "One on every buy and every sell"],
              ["Available range", "Narrower, depends on the distributor", "Very wide"]
            ]
          }},
          { key: "For someone paying in a fixed amount every month and leaving the portfolio alone, an index fund is usually simpler and cheaper to run. For someone investing large amounts occasionally, the ETF tends to come out ahead." },
          { h: "The tax point that changes everything by country" },
          { p: "In some jurisdictions money can be moved from one fund to another without paying tax on the accumulated gain, whereas selling one ETF to buy another does trigger a taxable event. Where that applies, the difference between the two wrappers stops being about convenience and starts to matter." },
          { note: "This is nowhere near a universal rule: it depends entirely on the rules where you are resident and on how the product is domiciled. Check your own situation with a tax adviser. Farlaz is not a registered adviser and this is not tax advice." },
          { h: "What to look at on the factsheet" },
          { ul: [
            "<strong>The ongoing charge.</strong> First filter, but not the only one.",
            "<strong>Tracking difference.</strong> How far behind the index it has finished in recent years. That is the real cost.",
            "<strong>The exact index.</strong> Two funds with near-identical names can track indices with different inclusion rules.",
            "<strong>Fund size.</strong> Very small vehicles are more likely to end up merged or wound up."
          ]},
          { h: "Where it falls short" },
          { p: "An index fund inherits every limitation of indexing: it doesn't protect you from falls, it concentrates if the index concentrates, and it makes no distinction between expensive and cheap companies. It adds one of its own, blind execution: when you place the order you don't know the price you will get, because it settles at the closing value. On a volatile day that uncertainty is real." },
          { quiz: {
            q: "Someone wants to pay 150 currency units a month automatically into a world index. Which wrapper usually fits better?",
            options: [
              "The index fund, because it takes exact amounts with no broker commission and no spread",
              "The ETF, because it trades in real time and lets you pick your moment",
              "It makes no difference: the cost is identical either way"
            ],
            answer: 0,
            explain: "With small, repeated contributions, the ETF's per-trade commission and spread weigh more than any benefit from real-time execution. Picking your moment isn't an advantage for a regular investor anyway: avoiding that decision is the whole point of the method."
          }}
        ]
      }
    },
    {
      id: "hedge-funds",
      minutes: 8,
      es: {
        title: "Hedge funds",
        body: [
          { p: "La traducción literal, fondo de cobertura, describe el origen del vehículo y no lo que hace hoy la mayoría. Nació como una estructura que compraba unas acciones y vendía otras en corto para quedar protegida de la dirección general del mercado. Hoy la etiqueta agrupa estrategias tan distintas entre sí que hablar de «los hedge funds» como categoría dice muy poco." },
          { h: "Qué los distingue de un fondo normal" },
          { ul: [
            "<strong>Pueden ponerse cortos.</strong> Ganan si un activo baja, no solo si sube.",
            "<strong>Pueden apalancarse.</strong> Operan con más dinero del que tienen, lo que amplifica el resultado en las dos direcciones.",
            "<strong>Usan derivados con libertad.</strong> Sin los límites que la normativa impone a los fondos destinados al público general.",
            "<strong>Restringen la salida.</strong> Períodos de permanencia, ventanas de reembolso trimestrales o anuales y avisos previos obligatorios.",
            "<strong>Restringen la entrada.</strong> Importes mínimos altos y, en casi todas las jurisdicciones, la exigencia de acreditar patrimonio o experiencia."
          ]},
          { h: "La estructura de comisiones" },
          { p: "El esquema tradicional se resume en dos cifras: una comisión fija anual sobre el patrimonio más una participación en los beneficios, habitualmente en el entorno del veinte por ciento. La presión competitiva ha reducido esos porcentajes en muchos casos, pero el diseño sigue siendo el mismo." },
          { key: "La comisión de éxito es una opción que el gestor tiene sobre tus resultados: participa en las ganancias y no participa en las pérdidas. Por eso importa tanto que exista una marca de agua que le obligue a recuperar lo perdido antes de volver a cobrar." },
          { h: "Por qué las estadísticas del sector engañan" },
          { p: "Los índices de hedge funds tienen dos problemas conocidos. El primero es que los fondos reportan sus datos de forma voluntaria, y quien va mal deja de reportar. El segundo es que muchos índices incorporan el historial de un fondo el día que empieza a reportar, incluidos sus primeros años buenos, mientras que los que fracasaron pronto nunca llegaron a aparecer." },
          { note: "El resultado es que el rendimiento medio publicado del sector está inflado por construcción. No porque nadie mienta, sino porque los que desaparecen dejan de contarse. Es el mismo sesgo que haría parecer segurísimo el paracaidismo si solo se encuestara a quienes aterrizan." },
          { h: "Qué es razonable esperar" },
          { p: "El argumento serio a favor de un hedge fund no es que gane más que la bolsa, sino que su resultado dependa de cosas distintas de las que mueven a la bolsa. Un activo que se comporta de forma diferente al resto de la cartera aporta algo aunque su rendimiento sea modesto. Ese es el papel que puede cumplir; superar al mercado no lo es." },
          { h: "Por qué esto raramente aplica a un particular" },
          { p: "El acceso está legalmente restringido en casi todos los países, los mínimos son elevados y el dinero queda inmovilizado durante períodos largos. Existen productos que ofrecen estrategias parecidas en formato accesible, pero suelen quedarse con las restricciones y las comisiones sin la parte que justificaba la estructura. Conocer cómo funcionan sirve sobre todo para entender de qué se habla, no para comprarlos." },
          { quiz: {
            q: "¿Por qué el rendimiento medio publicado de los índices de hedge funds tiende a estar sobrestimado?",
            options: [
              "Los fondos reportan voluntariamente y los que fracasan dejan de hacerlo o nunca llegan a entrar",
              "Los gestores declaran cifras falsas a los proveedores de índices",
              "Los índices se calculan sin descontar las comisiones de gestión"
            ],
            answer: 0,
            explain: "Es sesgo de supervivencia, no fraude. Cuando la muestra se construye con quienes siguen en pie y con el historial que traen consigo al incorporarse, el promedio refleja a los supervivientes y no al conjunto de quienes lo intentaron."
          }}
        ]
      },
      en: {
        title: "Hedge funds",
        body: [
          { p: "The literal name describes where the vehicle came from rather than what most of them do now. It began as a structure that bought some shares and sold others short, leaving it insulated from the market's overall direction. Today the label covers strategies so different from one another that talking about \"hedge funds\" as a category says very little." },
          { h: "What sets them apart from an ordinary fund" },
          { ul: [
            "<strong>They can go short.</strong> They profit when an asset falls, not only when it rises.",
            "<strong>They can use leverage.</strong> They trade with more money than they hold, which amplifies the outcome in both directions.",
            "<strong>They use derivatives freely.</strong> Without the limits regulation imposes on funds sold to the general public.",
            "<strong>They restrict the exit.</strong> Lock-up periods, quarterly or annual redemption windows and mandatory notice.",
            "<strong>They restrict the entrance.</strong> High minimums and, in nearly every jurisdiction, a requirement to prove wealth or experience."
          ]},
          { h: "The fee structure" },
          { p: "The traditional arrangement comes down to two numbers: a fixed annual fee on assets plus a share of the profits, customarily around twenty per cent. Competitive pressure has trimmed those percentages in many cases, but the design is unchanged." },
          { key: "A performance fee is an option the manager holds over your results: they share the gains and not the losses. That is why a high water mark, forcing them to recover losses before charging again, matters so much." },
          { h: "Why the industry statistics mislead" },
          { p: "Hedge fund indices carry two well-known problems. The first is that funds report their figures voluntarily, and those doing badly stop reporting. The second is that many indices absorb a fund's history on the day it starts reporting, good early years included, while the ones that failed early never appeared at all." },
          { note: "The result is that the sector's published average return is inflated by construction. Not because anyone lies, but because those who disappear stop being counted. It is the bias that would make parachuting look extremely safe if you only surveyed people who landed." },
          { h: "What it is reasonable to expect" },
          { p: "The serious argument for a hedge fund is not that it earns more than equities, but that its result depends on things other than what moves equities. An asset that behaves differently from the rest of the portfolio contributes something even when its return is modest. That is the role it can play; beating the market is not." },
          { h: "Why this rarely applies to an individual" },
          { p: "Access is legally restricted in nearly every country, minimums are high, and money is locked up for long periods. Products exist that offer similar strategies in an accessible format, but they tend to keep the restrictions and the fees without the part that justified the structure. Understanding how they work is mostly useful for following the conversation, not for buying them." },
          { quiz: {
            q: "Why does the published average return of hedge fund indices tend to be overstated?",
            options: [
              "Funds report voluntarily, and those that fail stop reporting or never enter at all",
              "Managers submit false figures to index providers",
              "The indices are calculated without deducting management fees"
            ],
            answer: 0,
            explain: "This is survivorship bias, not fraud. When the sample is built from those still standing, along with the history they bring with them on joining, the average reflects the survivors rather than everyone who tried."
          }}
        ]
      }
    },
    {
      id: "private-equity",
      minutes: 8,
      es: {
        title: "Private Equity",
        body: [
          { p: "Private equity significa capital privado: comprar empresas que no cotizan en bolsa, o sacar de bolsa a las que cotizan. El fondo toma el control, cambia la gestión, reorganiza el negocio y vende años después. Es un negocio de operar compañías, no de comprar y vender títulos." },
          { h: "Cómo está montada la operación" },
          { p: "La compra típica se financia con una parte de capital del fondo y una parte mucho mayor de deuda, que además se carga sobre la propia empresa adquirida. Si la empresa mejora, el capital propio se multiplica porque la deuda es fija y toda la mejora va al accionista. Si empeora, la deuda sigue siendo fija y se come primero el capital." },
          { key: "El apalancamiento no es un detalle de financiación en este negocio: es el motor del resultado. Las mismas cifras que multiplican la ganancia multiplican la pérdida, y la empresa comprada es la que carga con la deuda." },
          { h: "Cómo funciona el compromiso de dinero" },
          { ul: [
            "<strong>Te comprometes, no ingresas.</strong> Firmas un compromiso de aportación y el fondo va reclamando el dinero a medida que encuentra operaciones.",
            "<strong>Las llamadas de capital son obligatorias.</strong> Si no atiendes una, las penalizaciones son severas y pueden llegar a la pérdida de lo aportado.",
            "<strong>El dinero se inmoviliza.</strong> La vida de un fondo ronda la década, y el mercado secundario para vender antes existe pero funciona con descuento.",
            "<strong>Las comisiones se pagan desde el principio.</strong> Habitualmente sobre el compromiso total, no sobre lo efectivamente invertido."
          ]},
          { h: "La curva en J" },
          { p: "Los primeros años el fondo muestra pérdidas: ha cobrado comisiones, ha pagado los costes de las compras y todavía no ha vendido nada. El resultado solo aparece cuando empiezan las desinversiones. Esa forma es normal y esperada, pero explica por qué evaluar un fondo joven por su valoración provisional no significa nada." },
          { h: "Por qué las cifras de rentabilidad hay que leerlas con cuidado" },
          { p: "El sector se mide en tasa interna de retorno, que es sensible al calendario de los flujos. Adelantar una venta o usar financiación puente para retrasar las llamadas de capital mejora esa tasa sin que la empresa haya generado un céntimo más. Por eso conviene mirar también el múltiplo sobre el dinero invertido, que responde a la única pregunta que importa: cuánto se devolvió por cada unidad aportada." },
          { note: "Otro punto a tener en cuenta: las participaciones no cotizan, así que su valor entre compra y venta lo estima la propia gestora siguiendo una metodología. Esa valoración se mueve poco y con retraso, lo que hace que la cartera parezca más estable que una cotizada. Es una consecuencia de cómo se mide, no de que el negocio subyacente oscile menos." },
          { h: "Qué queda para un particular" },
          { p: "El acceso directo está reservado a inversores institucionales y grandes patrimonios. En los últimos años han aparecido vehículos que ofrecen exposición con importes menores; suelen añadir una capa adicional de comisiones y mantener las restricciones de liquidez. Antes de entrar en uno, la pregunta útil es qué recibes a cambio de renunciar a disponer de tu dinero durante años." },
          { quiz: {
            q: "Un fondo de capital privado presenta una tasa interna de retorno muy alta. ¿Qué dato conviene mirar además?",
            options: [
              "El múltiplo sobre el capital aportado, que no depende del calendario de los flujos",
              "La valoración provisional de las participaciones que aún no se han vendido",
              "El número de empresas que tiene actualmente en cartera"
            ],
            answer: 0,
            explain: "La tasa interna de retorno mejora si el dinero entra tarde y sale pronto, cosa que se puede gestionar con financiación puente. El múltiplo responde a cuánto se devolvió por cada unidad aportada, sin depender de las fechas, y por eso las dos cifras se leen juntas."
          }}
        ]
      },
      en: {
        title: "Private equity",
        body: [
          { p: "Private equity means buying companies that aren't listed, or taking listed ones private. The fund takes control, changes management, reorganises the business and sells years later. It is a business of operating companies, not of trading securities." },
          { h: "How the deal is put together" },
          { p: "The typical purchase is financed with some of the fund's own capital and a much larger slice of debt, which is loaded onto the acquired company itself. If the business improves, the equity multiplies because the debt is fixed and every improvement accrues to the owner. If it worsens, the debt stays fixed and eats the equity first." },
          { key: "Leverage is not a financing detail in this business: it is the engine of the result. The same figures that multiply the gain multiply the loss, and the company bought is the one carrying the debt." },
          { h: "How the money commitment works" },
          { ul: [
            "<strong>You commit, you don't pay in.</strong> You sign a commitment and the fund draws the money down as it finds deals.",
            "<strong>Capital calls are compulsory.</strong> Miss one and the penalties are severe, up to forfeiting what you already contributed.",
            "<strong>The money is locked up.</strong> A fund's life runs around a decade, and the secondary market for selling early exists but trades at a discount.",
            "<strong>Fees start immediately.</strong> Usually on the total commitment, not on what has actually been invested."
          ]},
          { h: "The J curve" },
          { p: "In the early years the fund shows losses: it has charged fees, paid deal costs and sold nothing yet. Results only appear once exits begin. That shape is normal and expected, but it explains why judging a young fund by its interim valuation means nothing." },
          { h: "Why return figures need care" },
          { p: "The industry measures itself in internal rate of return, which is sensitive to the timing of cash flows. Pulling an exit forward, or using bridge financing to delay capital calls, improves that rate without the company generating a cent more. So it is worth also looking at the multiple on invested capital, which answers the only question that matters: how much came back per unit put in." },
          { note: "Another point worth holding on to: the stakes don't trade, so their value between purchase and sale is estimated by the manager under a methodology. That valuation moves little and moves late, which makes the portfolio look steadier than a listed one. That is a consequence of how it is measured, not of the underlying business swinging less." },
          { h: "What is left for an individual" },
          { p: "Direct access is reserved for institutions and large private wealth. Recent years have brought vehicles offering exposure at smaller sizes; they typically add a further layer of fees and keep the liquidity restrictions. Before entering one, the useful question is what you receive in exchange for giving up access to your money for years." },
          { quiz: {
            q: "A private equity fund reports a very high internal rate of return. What else should you look at?",
            options: [
              "The multiple on invested capital, which doesn't depend on cash flow timing",
              "The interim valuation of the holdings not yet sold",
              "The number of companies currently in the portfolio"
            ],
            answer: 0,
            explain: "Internal rate of return improves when money goes in late and comes out early, something bridge financing can engineer. The multiple answers how much came back per unit contributed, regardless of dates, which is why the two figures are read together."
          }}
        ]
      }
    },
    {
      id: "venture-capital",
      minutes: 7,
      es: {
        title: "Venture Capital",
        body: [
          { p: "El capital riesgo financia empresas jóvenes que todavía no tienen beneficios y a menudo tampoco ingresos relevantes. A cambio recibe una parte de la propiedad. Es el extremo del espectro de riesgo: la mayoría de las apuestas no devuelven el dinero y el resultado depende de que unas pocas salgan extraordinariamente bien." },
          { h: "La aritmética que gobierna el negocio" },
          { p: "En una cartera típica de capital riesgo, la mayor parte de las participadas se cierran, se venden por poco o sobreviven sin llegar a nada. Una fracción pequeña devuelve varias veces lo invertido y, en el mejor de los casos, una sola devuelve más que todas las demás juntas. El fondo no busca acertar a menudo: busca que el acierto ocasional sea enorme." },
          { key: "En una distribución así, la media no describe a casi nadie. Un fondo que alcanza la rentabilidad media del sector puede haber perdido dinero en cuatro de cada cinco operaciones. La estrategia solo funciona si se aceptan de antemano muchos fracasos." },
          { h: "Las rondas y la dilución" },
          { p: "Una empresa financiada por capital riesgo levanta dinero varias veces: cada ronda emite acciones nuevas, valora la compañía más alto y reduce el porcentaje de los accionistas anteriores. Que te diluyan no es malo por sí mismo si la empresa vale mucho más; el problema aparece cuando la ronda se hace a una valoración inferior a la anterior, o con condiciones que dan preferencia de cobro a los nuevos inversores." },
          { note: "Un detalle poco intuitivo: la valoración anunciada en una ronda no es el valor de la empresa. Es el precio de un pequeño paquete de acciones con condiciones y protecciones particulares. Aplicar ese precio a todo el capital de la compañía sobreestima lo que valdría en una venta real." },
          { h: "Por qué el plazo es tan largo" },
          { ul: [
            "<strong>No hay mercado donde vender.</strong> Las acciones de una empresa privada no cotizan; salir exige encontrar comprador o esperar a una operación corporativa.",
            "<strong>La maduración lleva años.</strong> Entre la primera inversión y una venta o salida a bolsa suelen pasar entre siete y diez años, cuando ocurren.",
            "<strong>El resultado se concentra al final.</strong> Durante buena parte de la vida del fondo no hay nada que cobrar."
          ]},
          { h: "Qué debe saber un particular" },
          { p: "El acceso a los fondos con historial contrastado está prácticamente cerrado: se financian con inversores institucionales y con quienes ya estaban dentro. Lo que suele llegar al público general son plataformas de inversión colectiva en empresas jóvenes, donde el inversor no cuenta con el equipo de análisis, ni con la diversificación entre decenas de operaciones, ni con las protecciones contractuales que hacen viable la estrategia." },
          { p: "Nada de esto convierte al capital riesgo en una mala clase de activo. Lo que dice es que el rendimiento del sector no se puede replicar comprando dos o tres empresas jóvenes: sin la cartera amplia, lo que queda no es la estrategia sino la parte del riesgo que iba a compensarse con los aciertos." },
          { quiz: {
            q: "¿Por qué la diversificación es especialmente crítica en capital riesgo?",
            options: [
              "Porque el resultado depende de unas pocas participadas excepcionales y una cartera pequeña puede no incluir ninguna",
              "Porque las empresas jóvenes tienen todas el mismo nivel de riesgo",
              "Porque repartir el dinero reduce el porcentaje de empresas que fracasan"
            ],
            answer: 0,
            explain: "Repartir el dinero no evita ningún cierre: los fracasos ocurren igual. Lo que hace es aumentar la probabilidad de tener dentro alguna de las pocas operaciones que devuelven mucho, y en una distribución tan asimétrica ahí está todo el resultado."
          }}
        ]
      },
      en: {
        title: "Venture capital",
        body: [
          { p: "Venture capital funds young companies that have no profits yet and often no meaningful revenue either. In exchange it takes a share of ownership. It sits at the far end of the risk spectrum: most bets don't return the money, and the outcome depends on a few going extraordinarily well." },
          { h: "The arithmetic that governs the business" },
          { p: "In a typical venture portfolio, most holdings shut down, sell for little, or survive without amounting to anything. A small fraction returns several times what went in and, at best, a single one returns more than all the others combined. The fund isn't trying to be right often: it is trying to make the occasional hit enormous." },
          { key: "In a distribution like that, the average describes almost nobody. A fund landing on the sector's average return may have lost money on four deals out of five. The strategy only works if many failures are accepted upfront." },
          { h: "Rounds and dilution" },
          { p: "A venture-backed company raises money several times: each round issues new shares, values the company higher and shrinks the percentage held by earlier shareholders. Being diluted is not bad in itself if the company is worth far more; the problem arrives when a round prices below the previous one, or carries terms giving new investors first claim on the proceeds." },
          { note: "A counterintuitive detail: the valuation announced in a round is not the value of the company. It is the price of a small parcel of shares carrying particular terms and protections. Applying that price to the whole share count overstates what the business would fetch in a real sale." },
          { h: "Why the horizon is so long" },
          { ul: [
            "<strong>There is no market to sell into.</strong> Private company shares don't trade; exiting means finding a buyer or waiting for a corporate transaction.",
            "<strong>Maturing takes years.</strong> Seven to ten years typically pass between first investment and a sale or listing, when they happen at all.",
            "<strong>The result lands at the end.</strong> For much of the fund's life there is nothing to collect."
          ]},
          { h: "What an individual should know" },
          { p: "Access to funds with a proven record is effectively closed: they are financed by institutions and by whoever was already inside. What tends to reach the general public are crowdfunding platforms for young companies, where the investor has neither the diligence team, nor the spread across dozens of deals, nor the contractual protections that make the strategy viable." },
          { p: "None of this makes venture capital a bad asset class. What it says is that the sector's return can't be replicated by buying two or three young companies: without the broad portfolio, what remains isn't the strategy but the part of the risk that the winners were supposed to offset." },
          { quiz: {
            q: "Why is diversification especially critical in venture capital?",
            options: [
              "Because the result depends on a few exceptional holdings, and a small portfolio may contain none of them",
              "Because young companies all carry the same level of risk",
              "Because spreading the money reduces the percentage of companies that fail"
            ],
            answer: 0,
            explain: "Spreading money prevents no closures: the failures happen regardless. What it does is raise the chance of holding one of the rare deals that return a great deal, and in such a skewed distribution that is where the entire result sits."
          }}
        ]
      }
    },
    {
      id: "reits",
      minutes: 8,
      es: {
        title: "REITs: invertir en inmuebles sin comprar inmuebles",
        body: [
          { p: "Un REIT es una sociedad que posee y explota inmuebles en alquiler y cuyas acciones cotizan en bolsa. Comprar una acción de un REIT es comprar una participación en una cartera de edificios: oficinas, centros logísticos, viviendas, centros de datos o residencias, según el caso." },
          { h: "El trato que define la figura" },
          { p: "El régimen es un intercambio explícito. La sociedad se libra de tributar por sus beneficios a cambio de repartir entre sus accionistas la mayor parte del resultado del alquiler. Los porcentajes y los requisitos concretos varían según el país, pero la lógica es la misma en todos: se traslada la tributación de la sociedad al accionista." },
          { key: "Ese trato tiene una consecuencia estructural. Un REIT que reparte casi todo lo que gana no puede autofinanciar su crecimiento: para comprar más edificios tiene que emitir acciones nuevas o endeudarse. Por eso su capacidad de crecer depende de las condiciones del mercado de capitales." },
          { h: "Qué gana el inversor frente a comprar un piso" },
          { ul: [
            "<strong>Divisibilidad.</strong> Se entra con el importe de una acción en lugar de con una entrada y una hipoteca.",
            "<strong>Liquidez.</strong> Se vende en una sesión, no en meses.",
            "<strong>Diversificación.</strong> Un solo REIT posee decenas o cientos de inmuebles con inquilinos distintos.",
            "<strong>Gestión profesional.</strong> Sin obras, sin impagos que perseguir y sin trámites."
          ]},
          { h: "Y qué pierde" },
          { ul: [
            "<strong>Control.</strong> No decides qué se compra, qué se vende ni cómo se financia.",
            "<strong>Comportamiento bursátil.</strong> La acción cae en los pánicos de mercado aunque los inquilinos sigan pagando puntualmente.",
            "<strong>Coste de estructura.</strong> Hay una dirección, un consejo y unos gastos generales que se pagan con las rentas.",
            "<strong>Apalancamiento ajeno.</strong> El nivel de deuda lo decide la sociedad, y afecta a tu riesgo aunque tú no te hayas endeudado."
          ]},
          { h: "La sensibilidad a los tipos de interés" },
          { p: "Es el rasgo que más define su comportamiento. Cuando los tipos suben, el REIT sufre por dos vías: refinanciar su deuda le resulta más caro, y su reparto de rentas compite con una deuda pública que ahora paga más sin apenas riesgo. Por eso los REITs suelen comportarse peor en subidas rápidas de tipos, con independencia de cómo vaya el negocio inmobiliario." },
          { note: "Sobre la fiscalidad: los repartos de un REIT reciben en muchos países un tratamiento distinto al de un dividendo ordinario, y las retenciones en origen para un inversor extranjero pueden ser menos favorables que las de una acción normal. Depende del país del REIT y del tuyo. Consulta a un asesor fiscal antes de decidir; Farlaz no es asesor registrado." },
          { h: "Qué mirar antes de comprar" },
          { p: "El beneficio contable de un REIT dice poco porque la amortización de los inmuebles resta sin ser una salida de caja. El sector usa medidas de flujo de caja operativo para valorarlos. Junto a eso conviene mirar el nivel de deuda, el porcentaje ocupado, el vencimiento medio de los contratos de alquiler y en qué tipo de inmueble está concentrado: un REIT de oficinas y uno de centros de datos comparten estructura legal y casi nada más." },
          { quiz: {
            q: "¿Por qué un REIT que reparte la mayor parte de sus beneficios depende del mercado de capitales para crecer?",
            options: [
              "Porque al no retener beneficios debe emitir acciones o endeudarse para comprar nuevos inmuebles",
              "Porque los inquilinos exigen que la sociedad cotice en bolsa",
              "Porque la normativa le prohíbe pedir préstamos bancarios"
            ],
            answer: 0,
            explain: "El régimen fiscal exige repartir casi todo el resultado, así que apenas queda caja retenida para reinvertir. El crecimiento tiene que financiarse desde fuera, y eso encarece la expansión justo cuando los tipos suben o el mercado se cierra."
          }}
        ]
      },
      en: {
        title: "REITs: property investing without buying property",
        body: [
          { p: "A REIT is a company that owns and runs rental property and whose shares trade on an exchange. Buying a REIT share is buying a stake in a portfolio of buildings: offices, logistics centres, housing, data centres or care homes, depending on the case." },
          { h: "The bargain that defines the structure" },
          { p: "The regime is an explicit trade. The company escapes tax on its profits in exchange for distributing most of the rental result to its shareholders. The exact percentages and requirements vary by country, but the logic is the same everywhere: taxation shifts from the company to the shareholder." },
          { key: "That bargain has a structural consequence. A REIT paying out nearly everything it earns cannot self-finance its growth: to buy more buildings it must issue new shares or borrow. Its ability to grow therefore depends on conditions in the capital markets." },
          { h: "What the investor gains over buying a flat" },
          { ul: [
            "<strong>Divisibility.</strong> You enter with the price of one share rather than a deposit and a mortgage.",
            "<strong>Liquidity.</strong> You sell in a session, not over months.",
            "<strong>Diversification.</strong> A single REIT owns dozens or hundreds of properties with different tenants.",
            "<strong>Professional management.</strong> No repairs, no arrears to chase, no paperwork."
          ]},
          { h: "And what it loses" },
          { ul: [
            "<strong>Control.</strong> You don't decide what is bought, what is sold or how it is financed.",
            "<strong>Stock market behaviour.</strong> The share falls in market panics even while tenants keep paying on time.",
            "<strong>Structural cost.</strong> There is a management team, a board and overheads, all paid out of the rents.",
            "<strong>Someone else's leverage.</strong> The debt level is set by the company, and it affects your risk even though you borrowed nothing."
          ]},
          { h: "Sensitivity to interest rates" },
          { p: "This is the feature that shapes their behaviour most. When rates rise, a REIT is squeezed twice: refinancing its debt costs more, and its payout now competes with government bonds paying more at almost no risk. That is why REITs tend to fare badly in fast rate rises, regardless of how the property business itself is doing." },
          { note: "On tax: REIT distributions are treated differently from ordinary dividends in many countries, and withholding at source for a foreign investor can be less favourable than on a normal share. It depends on the REIT's country and on yours. Take advice from a tax professional before deciding; Farlaz is not a registered adviser." },
          { h: "What to check before buying" },
          { p: "A REIT's accounting profit says little, because property depreciation subtracts without being a cash outflow. The sector uses operating cash flow measures to value them instead. Alongside that, look at the debt level, the occupancy rate, the average remaining lease term and which property type it is concentrated in: an office REIT and a data centre REIT share a legal structure and almost nothing else." },
          { quiz: {
            q: "Why does a REIT paying out most of its profits depend on capital markets to grow?",
            options: [
              "Because retaining no earnings, it must issue shares or borrow to buy new properties",
              "Because tenants require the company to be listed",
              "Because regulation forbids it from taking bank loans"
            ],
            answer: 0,
            explain: "The tax regime requires distributing nearly all the result, so barely any cash is retained to reinvest. Growth has to be financed externally, which makes expansion dearer precisely when rates rise or markets close."
          }}
        ]
      }
    }
  ]
});
