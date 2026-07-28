/* ==========================================================================
   Farlaz — Cuerpo de los artículos (1 de 2)
   Se emparejan con content/posts.json por 'slug'.
   ========================================================================== */

window.FARLAZ_ARTICLES = window.FARLAZ_ARTICLES || {};

/* ------------------------------------------------------------------- 01 */
window.FARLAZ_ARTICLES["leer-estado-de-resultados"] = {
  es: {
    author: "Luis Andrés Farrugia V.",
    disclosure: "El autor no mantiene posiciones en ninguna empresa mencionada. Este artículo es contenido educativo y no constituye recomendación de inversión.",
    body: [
      { p: "La cuenta de resultados es el documento que más gente dice haber leído y menos gente ha leído de verdad. Se mira la última línea, el beneficio neto, y se da por hecho que resume el año. Es justo al revés: la última línea es la menos informativa de todas." },
      { h: "Léela en el orden en que está escrita" },
      { p: "El documento tiene una lógica descendente. Arriba están los ingresos, y cada línea posterior resta un tipo de coste. Saltar directamente al final es como leer solo la última página de un informe: sabes cómo acaba pero no por qué." },
      { p: "Los cuatro niveles que importan, en orden: margen bruto, EBITDA, resultado de explotación y beneficio neto. Cada uno responde a una pregunta distinta sobre el negocio." },
      { h: "Margen bruto: ¿puede subir precios?" },
      { p: "Es la diferencia entre lo que cobras y lo que te cuesta producir lo que vendes. Si se mantiene estable o crece durante varios años seguidos mientras la empresa gana tamaño, es la mejor evidencia disponible de que tiene poder de fijación de precios." },
      { p: "Cuando se erosiona lentamente, un punto por año, casi siempre significa que ha entrado competencia y la empresa está defendiendo cuota con descuentos. Ese deterioro suele aparecer en los márgenes dos o tres años antes de que se note en el crecimiento de ingresos." },
      { h: "EBITDA: la cifra que más se manipula" },
      { p: "Beneficio antes de intereses, impuestos, depreciaciones y amortizaciones. Su utilidad legítima es comparar empresas con estructuras de deuda muy distintas, porque neutraliza el efecto de cómo está financiada cada una." },
      { p: "El problema es lo que excluye. Al quitar la amortización, el EBITDA finge que los activos no se desgastan. Para una empresa de software que apenas tiene activos físicos, la distorsión es pequeña. Para una empresa que reemplaza maquinaria o infraestructura de forma continua, el EBITDA describe un negocio que no existe: uno donde las máquinas duran eternamente y no hay que reponerlas." },
      { note: "Prueba rápida: compara el EBITDA con la inversión en activos fijos del mismo año. Si la empresa genera 200 de EBITDA pero necesita invertir 180 solo para mantener la operación, el EBITDA de 200 no representa dinero disponible para nadie." },
      { h: "Resultado de explotación: la cifra honesta" },
      { p: "El EBIT ya incorpora la amortización, así que refleja lo que cuesta de verdad mantener los activos productivos en marcha. Suele ser mejor punto de partida que el EBITDA para comparar la rentabilidad operativa entre empresas, incluso entre sectores distintos." },
      { h: "Beneficio neto: la cifra del titular" },
      { p: "Después del EBIT se restan los intereses de la deuda y los impuestos. Lo que queda es el beneficio neto, la cifra que aparece en las noticias y la que más ruido contiene." },
      { p: "Puede subir porque el negocio va mejor, pero también porque bajó el tipo impositivo ese año, porque se vendió un inmueble, porque se revirtió una provisión antigua o porque se refinanció deuda más barata. Ninguna de esas cuatro cosas te dice nada sobre la calidad del negocio, y las cuatro caben en la misma línea." },
      { key: "Si el beneficio neto sube mientras el resultado de explotación baja, tienes una divergencia que exige explicación. Casi siempre la respuesta está en las notas de la memoria, no en el resumen de resultados." },
      { h: "Cómo leerla en cinco minutos" },
      { ul: [
        "Coge tres años, no uno. Un año aislado no tiene contexto.",
        "Convierte todas las líneas a porcentaje sobre ingresos. Las tendencias saltan a la vista y desaparece el efecto del tamaño.",
        "Marca cualquier margen que se mueva más de dos puntos en un año y busca la explicación.",
        "Compara el crecimiento del beneficio con el del flujo de explotación. Si divergen mucho, la contabilidad va por delante de la caja."
      ]},
      { p: "Con eso ya sabes más sobre la empresa que la mayoría de quienes comentan sus resultados el día de la publicación." }
    ]
  },
  en: {
    author: "Luis Andrés Farrugia V.",
    disclosure: "The author holds no position in any company mentioned. This article is educational content and does not constitute investment advice.",
    body: [
      { p: "The income statement is the document most people claim to have read and fewest have actually read. They look at the bottom line, net income, and assume it summarises the year. It's the other way round: the bottom line is the least informative of them all." },
      { h: "Read it in the order it's written" },
      { p: "The document has a descending logic. Revenue sits at the top, and every line below subtracts a type of cost. Jumping to the end is like reading only the last page of a report: you know how it finishes but not why." },
      { p: "The four levels that matter, in order: gross margin, EBITDA, operating profit and net income. Each answers a different question about the business." },
      { h: "Gross margin: can it raise prices?" },
      { p: "It is the difference between what you charge and what it costs to produce what you sell. If it stays stable or grows across several consecutive years while the company gains scale, that is the best available evidence of pricing power." },
      { p: "When it erodes slowly, a point a year, it almost always means competition has arrived and the company is defending share with discounts. That deterioration typically shows in margins two or three years before it shows in revenue growth." },
      { h: "EBITDA: the most manipulated figure" },
      { p: "Earnings before interest, tax, depreciation and amortisation. Its legitimate use is comparing companies with very different debt structures, because it neutralises how each is financed." },
      { p: "The problem is what it excludes. By removing depreciation, EBITDA pretends assets don't wear out. For a software company with barely any physical assets, the distortion is small. For a company continuously replacing machinery or infrastructure, EBITDA describes a business that doesn't exist: one where machines last forever and never need replacing." },
      { note: "Quick test: compare EBITDA against the same year's capital expenditure. If the company generates 200 of EBITDA but must invest 180 just to keep operating, that 200 doesn't represent money available to anyone." },
      { h: "Operating profit: the honest figure" },
      { p: "EBIT already includes depreciation, so it reflects what it genuinely costs to keep productive assets running. It is usually a better starting point than EBITDA for comparing operating profitability across companies, even across sectors." },
      { h: "Net income: the headline figure" },
      { p: "After EBIT come interest on debt and tax. What remains is net income, the number that appears in the news and the one carrying the most noise." },
      { p: "It can rise because the business improved, but also because the tax rate fell that year, because a building was sold, because an old provision was reversed, or because debt was refinanced more cheaply. None of those four tells you anything about business quality, and all four fit on the same line." },
      { key: "If net income rises while operating profit falls, you have a divergence demanding explanation. The answer is almost always in the notes to the accounts, not in the results summary." },
      { h: "How to read it in five minutes" },
      { ul: [
        "Take three years, not one. A single year has no context.",
        "Convert every line to a percentage of revenue. Trends jump out and the size effect disappears.",
        "Flag any margin moving more than two points in a year and find the explanation.",
        "Compare profit growth with operating cash flow growth. If they diverge sharply, the accounting is running ahead of the cash."
      ]},
      { p: "With that, you already know more about the company than most of the people commenting on its results the day they're published." }
    ]
  }
};

/* ------------------------------------------------------------------- 02 */
window.FARLAZ_ARTICLES["tipos-de-interes-y-valoracion"] = {
  es: {
    author: "Luis Andrés Farrugia V.",
    disclosure: "Contenido educativo. No constituye asesoramiento de inversión ni una previsión sobre la evolución de los tipos de interés.",
    body: [
      { p: "Cuando un banco central mueve tipos, la reacción se nota en cosas que aparentemente no tienen relación: acciones tecnológicas, precios inmobiliarios, oro, divisas. La conexión no es misteriosa. Es aritmética." },
      { h: "El tipo de interés es el precio del tiempo" },
      { p: "Todo activo financiero es una promesa de dinero futuro. Una acción promete beneficios futuros; un bono, cupones futuros; un inmueble en alquiler, rentas futuras. Para saber cuánto vale hoy esa promesa hay que descontarla, y la tasa a la que se descuenta depende del tipo de interés sin riesgo." },
      { p: "Cuando el tipo libre de riesgo sube, el denominador de todos esos cálculos sube a la vez. Y como el denominador es común a todos los activos, todos se recalculan hacia abajo simultáneamente. De ahí que en semanas de subidas de tipos parezca que cae todo a la vez sin razón aparente." },
      { h: "Por qué unos activos sufren más que otros" },
      { p: "La clave está en cuándo llega el dinero prometido. Descontar afecta más a los flujos lejanos que a los cercanos, porque el factor de descuento se eleva a la potencia del número de años." },
      { table: {
        head: ["Flujo de 100 recibido en...", "Valor hoy al 4%", "Valor hoy al 7%", "Caída"],
        rows: [
          ["1 año", "96", "93", "-3%"],
          ["5 años", "82", "71", "-13%"],
          ["10 años", "68", "51", "-25%"],
          ["20 años", "46", "26", "-43%"]
        ]
      }},
      { p: "Fíjate en la última columna. La misma subida de tipos destruye un 3% del valor de un flujo a un año y un 43% de uno a veinte. No es que el mercado castigue arbitrariamente a unas empresas más que a otras: castiga a las que tienen sus beneficios más lejos en el tiempo." },
      { key: "Por eso una tecnológica que espera generar caja dentro de una década reacciona mucho más violentamente a los tipos que una eléctrica que ya la genera hoy. No es una cuestión de sector ni de moda: es dónde está situado el flujo en el eje del tiempo." },
      { h: "El segundo canal: el coste de la deuda" },
      { p: "Además del efecto de descuento, los tipos altos encarecen la financiación. Las empresas endeudadas pagan más intereses, lo que reduce directamente su beneficio neto. Y las que necesitan refinanciar en los próximos meses lo hacen a un coste superior al que tenían." },
      { p: "Este canal es más lento pero más tangible. No afecta a todas las empresas por igual: golpea a las apalancadas y a las que tienen vencimientos próximos, y deja casi indemnes a las que están en caja neta." },
      { h: "El tercer canal: la competencia del activo sin riesgo" },
      { p: "Si un bono soberano a diez años renta un 1,5%, comprar acciones parece razonable casi a cualquier precio. Si ese mismo bono renta un 5%, el listón sube: ahora una acción tiene que ofrecer una expectativa claramente superior al 5% para justificar el riesgo adicional." },
      { p: "Este efecto es psicológico y contable a la vez, y explica por qué las valoraciones agregadas del mercado tienden a comprimirse en entornos de tipos altos, incluso sin que los beneficios empresariales empeoren." },
      { note: "Nada de esto permite predecir qué harán los tipos ni cuándo. Lo que permite es entender qué parte de tu cartera es más sensible a ese movimiento, que es una pregunta bastante más útil y con respuesta verificable." },
      { h: "La aplicación práctica" },
      { p: "Mira tu cartera y clasifica cada posición según dos criterios: cuándo llega el grueso de los beneficios que justifican su precio, y cuánta deuda tiene la empresa. Las posiciones que puntúan alto en ambas —beneficios lejanos y mucha deuda— son las que más sufrirán si los tipos suben." },
      { p: "No es un argumento para venderlas. Es un argumento para saber que las tienes, y para no sorprenderte cuando el mercado las reprecia todas a la vez." }
    ]
  },
  en: {
    author: "Luis Andrés Farrugia V.",
    disclosure: "Educational content. Not investment advice, and not a forecast of interest rate movements.",
    body: [
      { p: "When a central bank moves rates, the reaction shows up in things that seem unrelated: technology stocks, property prices, gold, currencies. The connection isn't mysterious. It's arithmetic." },
      { h: "An interest rate is the price of time" },
      { p: "Every financial asset is a promise of future money. A share promises future profits; a bond, future coupons; a rented property, future rents. To know what that promise is worth today you discount it, and the rate you discount at depends on the risk-free interest rate." },
      { p: "When the risk-free rate rises, the denominator in all those calculations rises at once. And because the denominator is common to every asset, they all reprice downward simultaneously. Hence weeks when rates rise and everything seems to fall together for no visible reason." },
      { h: "Why some assets suffer more" },
      { p: "The key is when the promised money arrives. Discounting hits distant flows harder than near ones, because the discount factor is raised to the power of the number of years." },
      { table: {
        head: ["100 received in...", "Value today at 4%", "Value today at 7%", "Fall"],
        rows: [
          ["1 year", "96", "93", "-3%"],
          ["5 years", "82", "71", "-13%"],
          ["10 years", "68", "51", "-25%"],
          ["20 years", "46", "26", "-43%"]
        ]
      }},
      { p: "Look at the last column. The same rate rise destroys 3% of the value of a one-year flow and 43% of a twenty-year one. The market isn't arbitrarily punishing some companies more than others: it is punishing those whose profits sit further out in time." },
      { key: "This is why a technology company expecting to generate cash a decade from now reacts far more violently to rates than a utility already generating it today. It isn't about sector or fashion: it's where the cash flow sits on the time axis." },
      { h: "The second channel: cost of debt" },
      { p: "Beyond the discounting effect, high rates make funding more expensive. Indebted companies pay more interest, directly reducing net income. And those needing to refinance in coming months do so at a higher cost than before." },
      { p: "This channel is slower but more tangible. It doesn't hit every company equally: it strikes the leveraged and those with near maturities, and leaves net-cash businesses largely untouched." },
      { h: "The third channel: competition from the risk-free asset" },
      { p: "If a ten-year sovereign bond yields 1.5%, buying equities looks reasonable at almost any price. If that same bond yields 5%, the bar rises: a share now has to offer an expectation clearly above 5% to justify the extra risk." },
      { p: "This effect is psychological and arithmetic at once, and explains why aggregate market valuations tend to compress in high-rate environments even without corporate profits deteriorating." },
      { note: "None of this lets you predict what rates will do or when. What it does let you do is understand which part of your portfolio is most sensitive to that move — a considerably more useful question, and one with a verifiable answer." },
      { h: "Putting it to work" },
      { p: "Look at your portfolio and classify each position on two criteria: when the bulk of the profits justifying its price arrives, and how much debt the company carries. Positions scoring high on both — distant profits and heavy debt — are the ones that will suffer most if rates rise." },
      { p: "That isn't an argument to sell them. It's an argument to know you hold them, and not to be surprised when the market reprices them all at once." }
    ]
  }
};

/* ------------------------------------------------------------------- 03 */
window.FARLAZ_ARTICLES["senales-de-alarma-balance"] = {
  es: {
    author: "Luis Andrés Farrugia V.",
    disclosure: "Contenido educativo con ejemplos genéricos. No se refiere a ninguna empresa concreta ni constituye una acusación sobre ninguna compañía cotizada.",
    body: [
      { p: "Los problemas contables casi nunca aparecen de golpe. Se acumulan durante trimestres en partidas que nadie mira, hasta que un día se convierten en un ajuste de valoración, una ampliación de capital de urgencia o un profit warning. Estas siete señales suelen ser visibles bastante antes." },
      { h: "1. Las existencias crecen más rápido que las ventas" },
      { p: "Si los ingresos suben un 8% y el inventario un 25%, la empresa está produciendo más de lo que consigue vender. Las opciones que le quedan son rebajar precios, lo que comprime el margen, o deteriorar el inventario, lo que genera una pérdida contable. Ambas llegan con retraso respecto a la señal." },
      { h: "2. Las cuentas por cobrar crecen más rápido que los ingresos" },
      { p: "Significa que la empresa está concediendo plazos de pago cada vez más largos. A veces es una estrategia comercial deliberada; con más frecuencia es la forma de sostener un crecimiento que el mercado ya no da de forma natural. El indicador a seguir son los días de cobro: si pasan de 45 a 70 en dos años, hay una historia detrás." },
      { h: "3. Se capitalizan gastos que antes se llevaban a resultados" },
      { p: "Capitalizar significa registrar un desembolso como activo en el balance en lugar de como gasto del ejercicio. El efecto inmediato es que el beneficio de este año sube, porque el coste se reparte en varios años futuros." },
      { p: "Hay casos perfectamente legítimos, como el desarrollo de software que va a generar ingresos durante años. Se convierte en señal de alarma cuando el criterio cambia justo en un año difícil, o cuando el activo capitalizado crece mucho más rápido que los ingresos que supuestamente va a producir." },
      { h: "4. El fondo de comercio nunca se deteriora" },
      { p: "Una empresa que ha hecho ocho adquisiciones en una década, estadísticamente, ha acertado en unas y fallado en otras. Si el fondo de comercio del balance sigue intacto año tras año pese a que varios negocios adquiridos rinden por debajo de lo prometido, hay una pérdida esperando a ser reconocida." },
      { key: "El deterioro de fondo de comercio no cuesta caja, pero destruye patrimonio neto de golpe y suele arrastrar consigo la confianza en la dirección que hizo esas compras." },
      { h: "5. La deuda se refinancia siempre a corto plazo" },
      { p: "Una empresa sana casa el plazo de su deuda con el de sus activos: si compra una fábrica que durará veinte años, la financia a largo. Cuando ves los vencimientos concentrados en los próximos doce meses, renovándose una y otra vez, la empresa está dependiendo de que el mercado de crédito siga abierto. Funciona hasta el trimestre en que deja de funcionar." },
      { h: "6. Cambian los criterios contables o el auditor" },
      { p: "Alargar la vida útil estimada de los activos reduce la amortización anual y sube el beneficio sin que nada real haya mejorado. Modificar el criterio de reconocimiento de ingresos puede adelantar ventas de ejercicios futuros al actual." },
      { p: "Un cambio de auditor sin motivo claro es más serio todavía, especialmente si el auditor saliente había formulado salvedades. La memoria está obligada a explicar estos cambios; el problema es que casi nadie lee esa sección." },
      { h: "7. El beneficio ajustado se separa del contable" },
      { p: "Casi todas las empresas presentan una versión «ajustada» de sus resultados, excluyendo partidas que consideran no recurrentes. Es una práctica aceptada y con frecuencia útil." },
      { p: "Deja de serlo cuando los mismos conceptos extraordinarios reaparecen cada ejercicio. Una reestructuración durante cinco años consecutivos no es extraordinaria: es cómo funciona la empresa. Si la diferencia entre beneficio contable y ajustado se ensancha año tras año, la dirección está entrenando al mercado a mirar solo la cifra que le conviene." },
      { note: "Ninguna de estas señales prueba nada por sí sola. Todas tienen explicaciones inocentes posibles, y muchas empresas perfectamente sanas mostrarán alguna en algún momento. Lo que importa es la acumulación: tres o más apareciendo a la vez, en la misma dirección y durante varios trimestres." },
      { h: "Cómo revisarlo en la práctica" },
      { p: "Descarga los estados financieros de los últimos tres ejercicios y construye una tabla con seis filas: ingresos, existencias, cuentas por cobrar, beneficio neto, flujo de explotación y deuda neta. Calcula la variación porcentual anual de cada una." },
      { p: "Si las seis se mueven en direcciones coherentes, probablemente no haya nada raro. Cada divergencia que encuentres es una pregunta concreta que la memoria anual debería responder. Si no la responde, ya sabes algo importante sobre esa empresa." }
    ]
  },
  en: {
    author: "Luis Andrés Farrugia V.",
    disclosure: "Educational content using generic examples. It refers to no specific company and makes no allegation about any listed business.",
    body: [
      { p: "Accounting problems almost never appear all at once. They build over quarters in line items nobody watches, until one day they become a write-down, an emergency share issue or a profit warning. These seven signals are usually visible well before that." },
      { h: "1. Inventory growing faster than sales" },
      { p: "If revenue rises 8% and inventory rises 25%, the company is producing more than it can sell. Its remaining options are cutting prices, which compresses margin, or writing inventory down, which books a loss. Both arrive well after the signal does." },
      { h: "2. Receivables growing faster than revenue" },
      { p: "It means the company is granting ever-longer payment terms. Sometimes that's a deliberate commercial strategy; more often it's how growth is sustained once the market stops providing it naturally. The metric to watch is days sales outstanding: if it moves from 45 to 70 in two years, there's a story behind it." },
      { h: "3. Costs capitalised that used to be expensed" },
      { p: "Capitalising means recording an outlay as a balance-sheet asset rather than as a cost of the year. The immediate effect is that this year's profit rises, because the cost is spread across future years." },
      { p: "There are perfectly legitimate cases, such as software development that will generate revenue for years. It becomes a red flag when the policy changes precisely in a difficult year, or when the capitalised asset grows much faster than the revenue it is supposed to produce." },
      { h: "4. Goodwill never impaired" },
      { p: "A company that made eight acquisitions in a decade has, statistically, got some right and some wrong. If balance-sheet goodwill remains intact year after year despite several acquired businesses underperforming what was promised, a loss is waiting to be recognised." },
      { key: "A goodwill impairment costs no cash, but it destroys equity at a stroke and usually takes with it confidence in the management that made those purchases." },
      { h: "5. Debt always refinanced short-term" },
      { p: "A healthy company matches the term of its debt to the term of its assets: buy a factory that will last twenty years, fund it long. When maturities cluster in the next twelve months and roll over repeatedly, the company depends on credit markets staying open. It works until the quarter it doesn't." },
      { h: "6. Accounting policies or the auditor change" },
      { p: "Extending the estimated useful life of assets reduces annual depreciation and lifts profit without anything real improving. Changing revenue recognition policy can pull future sales into the current year." },
      { p: "An auditor change with no clear reason is more serious still, especially if the outgoing auditor had raised qualifications. The annual report is required to explain these changes; the problem is that almost nobody reads that section." },
      { h: "7. Adjusted profit drifting from reported profit" },
      { p: "Almost every company presents an \"adjusted\" version of results, excluding items it deems non-recurring. It is an accepted and often useful practice." },
      { p: "It stops being useful when the same exceptional items reappear every year. Restructuring across five consecutive years isn't exceptional: it's how the company operates. If the gap between reported and adjusted profit widens year after year, management is training the market to look only at the figure that suits it." },
      { note: "None of these signals proves anything alone. All have possible innocent explanations, and plenty of perfectly healthy companies will show one at some point. What matters is accumulation: three or more appearing together, pointing the same way, across several quarters." },
      { h: "How to check in practice" },
      { p: "Download three years of financial statements and build a table with six rows: revenue, inventory, receivables, net income, operating cash flow and net debt. Calculate the annual percentage change for each." },
      { p: "If all six move in coherent directions, there is probably nothing odd. Every divergence you find is a concrete question the annual report should answer. If it doesn't answer it, you've already learned something important about that company." }
    ]
  }
};
