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
  lessons: []
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
  lessons: []
});
