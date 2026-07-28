/* ==========================================================================
   Farlaz — NIVEL 4: Profesional  (módulos 13-16)
   ========================================================================== */

window.FARLAZ_COURSE = window.FARLAZ_COURSE || [];

/* ═══════════════════════════════════════════ MÓDULO 13 ═══ */
window.FARLAZ_COURSE.push({
  id: "derivados", num: "13", level: 4,
  es: {
    title: "Derivados",
    tagline: "Contratos cuyo valor depende de otra cosa",
    summary: "Opciones, futuros y swaps. Instrumentos diseñados para cubrir riesgos que en manos inexpertas los multiplican. Los explicamos con el respeto que merecen.",
    topics: ["Opciones", "Calls", "Puts", "Futuros", "Forwards", "Swaps", "Coberturas"],
    outcomes: [
      "Entender qué derecho y qué obligación crea cada contrato",
      "Distinguir cobertura de especulación",
      "Calcular el resultado de una opción al vencimiento",
      "Reconocer por qué el apalancamiento cambia el perfil de riesgo"
    ]
  },
  en: {
    title: "Derivatives",
    tagline: "Contracts whose value depends on something else",
    summary: "Options, futures and swaps. Instruments designed to hedge risk that, in inexperienced hands, multiply it. We explain them with the respect they deserve.",
    topics: ["Options", "Calls", "Puts", "Futures", "Forwards", "Swaps", "Hedging"],
    outcomes: [
      "Understand what right and obligation each contract creates",
      "Tell hedging from speculation",
      "Calculate an option's payoff at expiry",
      "Recognise why leverage changes the risk profile"
    ]
  },
  lessons: []
});

/* ═══════════════════════════════════════════ MÓDULO 14 ═══ */
window.FARLAZ_COURSE.push({
  id: "gestion-del-riesgo", num: "14", level: 4,
  es: {
    title: "Gestión del riesgo",
    tagline: "Medir lo que puede salir mal",
    summary: "Beta, alfa, Sharpe, drawdown, VaR. Las métricas que usa la industria para cuantificar el riesgo, qué capturan realmente y en qué situaciones fallan justo cuando más las necesitas.",
    topics: ["Riesgo sistemático", "Riesgo específico", "Beta", "Alpha", "Ratio de Sharpe", "Drawdown", "Value at Risk"],
    outcomes: [
      "Separar el riesgo que se puede diversificar del que no",
      "Interpretar beta y alfa sin sobreinterpretarlos",
      "Comparar carteras con el ratio de Sharpe",
      "Entender los límites del VaR"
    ]
  },
  en: {
    title: "Risk management",
    tagline: "Measuring what can go wrong",
    summary: "Beta, alpha, Sharpe, drawdown, VaR. The metrics the industry uses to quantify risk, what they actually capture, and where they fail precisely when you need them most.",
    topics: ["Systematic risk", "Specific risk", "Beta", "Alpha", "Sharpe ratio", "Drawdown", "Value at Risk"],
    outcomes: [
      "Separate diversifiable risk from the kind that isn't",
      "Interpret beta and alpha without over-reading them",
      "Compare portfolios using the Sharpe ratio",
      "Understand the limits of VaR"
    ]
  },
  lessons: [ 
    {
        id: "riesgo-volatilidad",
        minutes: 8,
        es: {
          title: "Riesgo, volatilidad y horizonte",
          body: [
            { p: "La industria financiera usa «riesgo» y «volatilidad» como sinónimos. No lo son, y confundirlos lleva a decisiones malas de forma sistemática." },
            { h: "Volatilidad es fluctuación. Riesgo es pérdida permanente." },
            { p: "La <strong>volatilidad</strong> mide cuánto oscila un precio alrededor de su tendencia. Es una medida estadística, simétrica y observable: incluye tanto las subidas bruscas como las caídas." },
            { p: "El <strong>riesgo</strong>, para un inversor, es la probabilidad de terminar con menos dinero del que necesitas cuando lo necesitas. Es asimétrico: una subida del 40% no compensa el riesgo de una caída del 40%, porque después de perder un 40% necesitas ganar un 67% solo para volver a empezar." },
            { table: {
              head: ["Caída sufrida", "Subida necesaria para recuperar"],
              rows: [
                ["-10%", "+11%"],
                ["-25%", "+33%"],
                ["-50%", "+100%"],
                ["-80%", "+400%"]
              ]
            }},
            { key: "Esta asimetría es la razón matemática por la que evitar pérdidas grandes importa más que capturar subidas grandes. No es prudencia moral: es aritmética." },
            { h: "El horizonte cambia qué es arriesgado" },
            { p: "Una cartera de acciones diversificada es muy volátil a un año y ha sido históricamente bastante fiable a veinte. Una cuenta remunerada no oscila nada a un año y, si la inflación supera al interés que paga, garantiza pérdida de poder adquisitivo a veinte." },
            { p: "Dicho de otro modo: para dinero que necesitas en seis meses, la bolsa es arriesgada y el depósito es seguro. Para dinero que necesitas en veinticinco años, la relación puede invertirse. El activo no es intrínsecamente arriesgado; lo es en relación con cuándo vas a necesitar el dinero." },
            { note: "Esto no es una promesa de que la bolsa siempre suba a largo plazo. Hay mercados que han tardado décadas en recuperar máximos, y el rendimiento pasado no garantiza el futuro. Es una afirmación más modesta: el plazo cambia el perfil de riesgo, y no tenerlo en cuenta es un error frecuente en ambas direcciones." },
            { h: "El riesgo que nadie mide" },
            { p: "Existe un tercer riesgo que no aparece en ninguna hoja de cálculo: el de tu propio comportamiento. Una cartera bien construida que abandonas en el peor momento rinde peor que una cartera mediocre que mantienes." },
            { p: "Por eso la pregunta práctica no es «¿cuál es la cartera óptima?» sino «¿cuál es la cartera óptima que voy a ser capaz de mantener cuando caiga un 30% y todos los titulares digan que esto no ha terminado?». Si la respuesta honesta es que no aguantarías, tu cartera tiene demasiado riesgo, aunque el modelo diga lo contrario." },
            { quiz: {
              q: "Tu cartera cae un 50%. ¿Qué rentabilidad necesitas para volver al punto de partida?",
              options: ["50%", "75%", "100%"],
              answer: 2,
              explain: "Si 100 se convierte en 50, necesitas duplicar esos 50 para volver a 100. Un +50% sobre 50 solo te lleva a 75. Esta asimetría es la razón por la que las pérdidas grandes cuestan tanto de reparar."
            }}
          ]
        },
        en: {
          title: "Risk, volatility and horizon",
          body: [
            { p: "The finance industry uses \"risk\" and \"volatility\" as synonyms. They aren't, and confusing them leads to bad decisions systematically." },
            { h: "Volatility is fluctuation. Risk is permanent loss." },
            { p: "<strong>Volatility</strong> measures how much a price swings around its trend. It is a statistical measure, symmetric and observable: it counts sharp rises as well as falls." },
            { p: "<strong>Risk</strong>, for an investor, is the probability of ending up with less money than you need, when you need it. It is asymmetric: a 40% gain doesn't offset the risk of a 40% loss, because after losing 40% you need to make 67% just to get back to where you started." },
            { table: {
              head: ["Loss suffered", "Gain needed to recover"],
              rows: [
                ["-10%", "+11%"],
                ["-25%", "+33%"],
                ["-50%", "+100%"],
                ["-80%", "+400%"]
              ]
            }},
            { key: "This asymmetry is the mathematical reason why avoiding large losses matters more than capturing large gains. It isn't moral prudence — it's arithmetic." },
            { h: "Horizon changes what counts as risky" },
            { p: "A diversified equity portfolio is highly volatile over one year and has historically been reasonably dependable over twenty. A savings account doesn't move at all over one year and, if inflation exceeds the interest it pays, guarantees a loss of purchasing power over twenty." },
            { p: "Put differently: for money you need in six months, equities are risky and the deposit is safe. For money you need in twenty-five years, that can invert. An asset isn't intrinsically risky; it is risky relative to when you'll need the money." },
            { note: "This is not a promise that equities always rise over the long run. Some markets have taken decades to recover previous highs, and past performance does not guarantee future results. It is a more modest claim: time horizon changes the risk profile, and ignoring it is a common error in both directions." },
            { h: "The risk nobody measures" },
            { p: "There is a third risk that appears on no spreadsheet: your own behaviour. A well-built portfolio you abandon at the worst moment performs worse than a mediocre one you keep." },
            { p: "So the practical question isn't \"what is the optimal portfolio?\" but \"what is the optimal portfolio I will actually hold when it falls 30% and every headline says this isn't over?\". If the honest answer is that you wouldn't hold, your portfolio carries too much risk, whatever the model says." },
            { quiz: {
              q: "Your portfolio falls 50%. What return do you need to get back to breakeven?",
              options: ["50%", "75%", "100%"],
              answer: 2,
              explain: "If 100 becomes 50, you need to double that 50 to return to 100. A +50% on 50 only gets you to 75. This asymmetry is why large losses are so costly to repair."
            }}
          ]
        }
      }
   ]
});

/* ═══════════════════════════════════════════ MÓDULO 15 ═══ */
window.FARLAZ_COURSE.push({
  id: "finanzas-corporativas", num: "15", level: 4,
  es: {
    title: "Finanzas corporativas",
    tagline: "Cómo se valora una empresa entera",
    summary: "WACC, CAPM y descuento de flujos. El método que usan los bancos de inversión para poner precio a una compañía, construido paso a paso y con sus debilidades a la vista.",
    topics: ["WACC", "CAPM", "Descuento de flujos", "Valoración de empresas", "Fusiones y adquisiciones", "Estructura de capital", "Emisión de deuda y acciones"],
    outcomes: [
      "Construir un descuento de flujos paso a paso",
      "Entender de dónde sale la tasa de descuento",
      "Ver por qué el valor terminal domina el resultado",
      "Hacer un análisis de sensibilidad y saber cuándo desconfiar"
    ]
  },
  en: {
    title: "Corporate finance",
    tagline: "How a whole company is valued",
    summary: "WACC, CAPM and discounted cash flow. The method investment banks use to price a company, built step by step with its weaknesses in plain sight.",
    topics: ["WACC", "CAPM", "DCF", "Company valuation", "Mergers and acquisitions", "Capital structure", "Issuing debt and equity"],
    outcomes: [
      "Build a discounted cash flow step by step",
      "Understand where the discount rate comes from",
      "See why terminal value dominates the result",
      "Run a sensitivity analysis and know when to distrust it"
    ]
  },
  lessons: [ 
    {
        id: "descuento-de-flujos",
        minutes: 12,
        es: {
          title: "Descuento de flujos paso a paso",
          body: [
            { p: "La idea de fondo es una sola: un negocio vale la suma de todo el dinero que va a generar en el futuro, traído a día de hoy. Traerlo a hoy es necesario porque mil euros dentro de diez años valen menos que mil euros ahora." },
            { h: "Los cinco pasos" },
            { p: "<strong>1. Proyecta el flujo de caja libre.</strong> Normalmente entre cinco y diez años. Necesitas estimar ingresos, márgenes, inversión en activos y variación de circulante. Aquí es donde se toman todas las decisiones importantes." },
            { p: "<strong>2. Elige una tasa de descuento.</strong> Refleja el riesgo del negocio y el coste de su financiación. Lo vemos en detalle en la próxima lección." },
            { p: "<strong>3. Descuenta cada flujo.</strong> El flujo del año <em>n</em> se divide entre (1 + tasa) elevado a <em>n</em>." },
            { p: "<strong>4. Calcula el valor terminal.</strong> El valor de todo lo que viene después del último año proyectado. Con la fórmula de perpetuidad: flujo del último año × (1 + g) ÷ (tasa − g), donde <em>g</em> es el crecimiento perpetuo." },
            { p: "<strong>5. Suma, resta la deuda neta y divide entre el número de acciones.</strong> El resultado es tu valor por acción." },
            { h: "Un ejemplo con números" },
            { p: "Empresa que genera 100 de flujo de caja libre, crece al 8% durante cinco años, tasa de descuento del 9% y crecimiento perpetuo del 2%." },
            { table: {
              head: ["Año", "Flujo", "Factor de descuento", "Valor actual"],
              rows: [
                ["1", "108", "1,09", "99"],
                ["2", "117", "1,19", "98"],
                ["3", "126", "1,30", "97"],
                ["4", "136", "1,41", "96"],
                ["5", "147", "1,54", "96"],
                ["<strong>Suma años 1-5</strong>", "", "", "<strong>486</strong>"]
              ]
            }},
            { p: "Valor terminal: 147 × 1,02 ÷ (0,09 − 0,02) = 2.142. Pero ese valor está en dinero del año 5, así que hay que traerlo a hoy: 2.142 ÷ 1,54 = <strong>1.391</strong>." },
            { p: "Valor total de la empresa: 486 + 1.391 = <strong>1.877</strong>. Si tiene 300 de deuda neta y 100 acciones, el valor por acción es (1.877 − 300) ÷ 100 = <strong>15,8</strong>." },
            { key: "Fíjate en la proporción: 1.391 de 1.877 es el 74% del valor total. Tres cuartas partes de tu valoración dependen de una fórmula de perpetuidad basada en dos supuestos, no de los cinco años que has proyectado con detalle." },
            { note: "Esa concentración en el valor terminal no es un fallo de tu modelo: es una propiedad matemática de cualquier descuento de flujos con horizonte finito. Conviene saberla antes de presentar un DCF como si fuera una medición precisa." },
            { h: "Para qué sirve entonces" },
            { p: "Un DCF no sirve para obtener un número exacto. Sirve para dos cosas más humildes y más útiles: obligarte a escribir tus supuestos, y hacer el ejercicio inverso." },
            { p: "El ejercicio inverso consiste en partir del precio de mercado y despejar qué crecimiento tendría que haber para justificarlo. Si te sale que la empresa debe crecer al 18% anual durante una década, ya no discutes sobre si está cara: discutes sobre si ese 18% es plausible. Esa conversación sí se puede tener con datos." }
          ]
        },
        en: {
          title: "Discounted cash flow, step by step",
          body: [
            { p: "The underlying idea is single: a business is worth the sum of all the cash it will generate in future, brought back to today. Bringing it back is necessary because a thousand euros in ten years is worth less than a thousand euros now." },
            { h: "The five steps" },
            { p: "<strong>1. Project free cash flow.</strong> Typically five to ten years. You need to estimate revenue, margins, capital expenditure and working capital movement. This is where every important decision gets made." },
            { p: "<strong>2. Choose a discount rate.</strong> It reflects the risk of the business and the cost of its funding. We cover this in detail next lesson." },
            { p: "<strong>3. Discount each cash flow.</strong> Year <em>n</em>'s flow is divided by (1 + rate) to the power of <em>n</em>." },
            { p: "<strong>4. Calculate terminal value.</strong> The value of everything after the last projected year. Using the perpetuity formula: final-year flow × (1 + g) ÷ (rate − g), where <em>g</em> is perpetual growth." },
            { p: "<strong>5. Add it up, subtract net debt, divide by share count.</strong> The result is your value per share." },
            { h: "A worked example" },
            { p: "A company generating 100 of free cash flow, growing 8% for five years, discount rate 9%, perpetual growth 2%." },
            { table: {
              head: ["Year", "Flow", "Discount factor", "Present value"],
              rows: [
                ["1", "108", "1.09", "99"],
                ["2", "117", "1.19", "98"],
                ["3", "126", "1.30", "97"],
                ["4", "136", "1.41", "96"],
                ["5", "147", "1.54", "96"],
                ["<strong>Sum years 1-5</strong>", "", "", "<strong>486</strong>"]
              ]
            }},
            { p: "Terminal value: 147 × 1.02 ÷ (0.09 − 0.02) = 2,142. But that sits in year-5 money, so it must come back to today: 2,142 ÷ 1.54 = <strong>1,391</strong>." },
            { p: "Total enterprise value: 486 + 1,391 = <strong>1,877</strong>. With 300 of net debt and 100 shares, value per share is (1,877 − 300) ÷ 100 = <strong>15.8</strong>." },
            { key: "Look at the proportion: 1,391 out of 1,877 is 74% of total value. Three quarters of your valuation rests on a perpetuity formula built on two assumptions, not on the five years you projected in detail." },
            { note: "That concentration in terminal value isn't a flaw in your model: it is a mathematical property of any finite-horizon discounted cash flow. Worth knowing before you present a DCF as though it were a precise measurement." },
            { h: "So what is it good for" },
            { p: "A DCF isn't for producing an exact number. It is for two humbler, more useful things: forcing you to write your assumptions down, and running the exercise in reverse." },
            { p: "The reverse exercise starts from the market price and solves for the growth required to justify it. If it turns out the company must grow 18% a year for a decade, you are no longer arguing about whether it's expensive: you are arguing about whether 18% is plausible. That conversation can be had with evidence." }
          ]
        }
      }
  , 
    {
        id: "tasa-y-valor-terminal",
        minutes: 10,
        es: {
          title: "Tasa de descuento y valor terminal",
          body: [
            { p: "Son los dos supuestos que deciden tu valoración, y curiosamente son los que menos tiempo recibe en la mayoría de modelos. Vamos a dárselo." },
            { h: "De dónde sale la tasa de descuento" },
            { p: "La tasa estándar es el coste medio ponderado del capital, o WACC. Combina lo que cuesta financiarse con deuda y lo que exigen los accionistas, ponderado por el peso de cada uno." },
            { p: "El coste de la deuda es fácil: es el tipo que la empresa paga por sus préstamos, ajustado porque los intereses desgravan." },
            { p: "El coste del capital propio es más discutible. La fórmula habitual es: tipo libre de riesgo + beta × prima de riesgo del mercado. El tipo libre de riesgo se toma del bono soberano a diez años. La prima de riesgo del mercado es el exceso de rentabilidad que los inversores exigen a la bolsa frente a ese bono. La beta mide cuánto se mueve la acción respecto al mercado." },
            { note: "La beta se calcula con datos históricos de precio. Es decir, estás usando la volatilidad pasada de la cotización como medida del riesgo futuro del negocio. Es una aproximación cuestionable y muchos inversores la sustituyen por un juicio cualitativo sobre el riesgo real de la empresa. No hay consenso, y conviene saber que no lo hay." },
            { h: "Cuánto pesa equivocarse" },
            { table: {
              head: ["Tasa de descuento", "Valor por acción del ejemplo anterior"],
              rows: [
                ["7%", "≈ 26,4"],
                ["8%", "≈ 20,0"],
                ["9%", "≈ 15,8"],
                ["10%", "≈ 12,8"],
                ["11%", "≈ 10,6"]
              ]
            }},
            { p: "Un punto porcentual de diferencia en la tasa cambia la valoración entre un 20% y un 30%. Y no existe forma objetiva de saber si la tasa correcta es 8% o 10%. Esta es la razón por la que dos analistas competentes pueden valorar la misma empresa con el doble de diferencia y ninguno estar haciendo trampa." },
            { h: "El crecimiento perpetuo" },
            { p: "Es el supuesto más peligroso porque parece inofensivo. <em>g</em> es la tasa a la que la empresa crecerá para siempre, literalmente. Y hay un límite lógico que no se puede cruzar: ninguna empresa puede crecer indefinidamente por encima de la economía en la que opera, porque acabaría siendo mayor que esa economía." },
            { key: "Regla dura: g nunca debe superar el crecimiento nominal de largo plazo de la economía, algo en el entorno del 2% al 3%. Si necesitas un 5% de crecimiento perpetuo para que la valoración te cuadre, el problema no es la valoración: es que la empresa no está barata." },
            { p: "Fíjate además en la fórmula: el denominador es (tasa − g). Cuando g se acerca a la tasa, ese denominador tiende a cero y el valor terminal se dispara al infinito. Un modelo con tasa del 8% y g del 7% no está valorando una empresa, está dividiendo por casi nada." },
            { quiz: {
              q: "Un analista usa una tasa de descuento del 8% y un crecimiento perpetuo del 6%. ¿Cuál es el problema principal?",
              options: [
                "El denominador (8%−6%) es tan pequeño que el valor terminal se dispara y el modelo pierde sentido",
                "La tasa de descuento es demasiado alta",
                "No hay problema, son valores normales"
              ],
              answer: 0,
              explain: "Con un denominador de solo 2 puntos, el valor terminal se multiplica hasta absorber prácticamente toda la valoración. Además, un 6% perpetuo implica que la empresa acabaría superando el tamaño de la economía mundial."
            }}
          ]
        },
        en: {
          title: "Discount rate and terminal value",
          body: [
            { p: "These are the two assumptions that decide your valuation, and curiously they get the least attention in most models. Let's give them some." },
            { h: "Where the discount rate comes from" },
            { p: "The standard rate is the weighted average cost of capital, or WACC. It combines what debt funding costs and what shareholders demand, weighted by how much of each the company uses." },
            { p: "The cost of debt is easy: the rate the company pays on its borrowings, adjusted because interest is tax-deductible." },
            { p: "The cost of equity is more contestable. The usual formula is: risk-free rate + beta × market risk premium. The risk-free rate comes from the ten-year sovereign bond. The market risk premium is the excess return investors demand from equities over that bond. Beta measures how much the stock moves relative to the market." },
            { note: "Beta is calculated from historical price data. In other words, you are using the past volatility of the quote as a measure of the future risk of the business. It is a questionable proxy, and many investors replace it with a qualitative judgement about the company's real risk. There is no consensus, and it's worth knowing there isn't." },
            { h: "How much being wrong costs" },
            { table: {
              head: ["Discount rate", "Value per share in the earlier example"],
              rows: [
                ["7%", "≈ 26.4"],
                ["8%", "≈ 20.0"],
                ["9%", "≈ 15.8"],
                ["10%", "≈ 12.8"],
                ["11%", "≈ 10.6"]
              ]
            }},
            { p: "One percentage point on the rate shifts the valuation by 20% to 30%. And there is no objective way to know whether the right rate is 8% or 10%. This is why two competent analysts can value the same company at double the difference without either one cheating." },
            { h: "Perpetual growth" },
            { p: "This is the most dangerous assumption because it looks harmless. <em>g</em> is the rate at which the company will grow forever, literally. And there is a logical ceiling you cannot cross: no company can grow indefinitely faster than the economy it operates in, because it would end up larger than that economy." },
            { key: "Hard rule: g should never exceed long-run nominal economic growth, somewhere around 2% to 3%. If you need 5% perpetual growth to make the valuation work, the problem isn't the valuation: it's that the company isn't cheap." },
            { p: "Note the formula too: the denominator is (rate − g). As g approaches the rate, that denominator tends to zero and terminal value explodes toward infinity. A model with an 8% rate and 7% g isn't valuing a company, it is dividing by almost nothing." },
            { quiz: {
              q: "An analyst uses an 8% discount rate and 6% perpetual growth. What is the main problem?",
              options: [
                "The denominator (8%−6%) is so small that terminal value explodes and the model stops meaning anything",
                "The discount rate is too high",
                "No problem, those are normal values"
              ],
              answer: 0,
              explain: "With a denominator of just 2 points, terminal value multiplies until it absorbs virtually the entire valuation. On top of that, 6% in perpetuity implies the company eventually outgrows the world economy."
            }}
          ]
        }
      }
  , 
    {
        id: "sensibilidad",
        minutes: 8,
        es: {
          title: "Sensibilidad: cuándo tirar tu modelo",
          body: [
            { p: "Un modelo que produce un único número transmite una precisión que no tiene. La solución no es hacer el modelo más complejo, es mostrar el rango." },
            { h: "La tabla de doble entrada" },
            { p: "Se cruzan los dos supuestos más influyentes —normalmente tasa de descuento y crecimiento perpetuo— y se calcula la valoración en cada combinación. Con el ejemplo del módulo:" },
            { table: {
              head: ["", "g = 1%", "g = 2%", "g = 3%"],
              rows: [
                ["<strong>Tasa 8%</strong>", "17,0", "20,0", "24,6"],
                ["<strong>Tasa 9%</strong>", "13,7", "15,8", "18,8"],
                ["<strong>Tasa 10%</strong>", "11,3", "12,8", "14,8"]
              ]
            }},
            { p: "El rango va de 11,3 a 24,6 con supuestos que cualquier analista razonable defendería. Eso no invalida el ejercicio: lo pone en su sitio. Si la acción cotiza a 9, está por debajo de todo el rango y el caso de inversión es sólido. Si cotiza a 19, está dentro del rango y no tienes ninguna conclusión." },
            { key: "Un DCF es útil cuando el precio de mercado queda claramente fuera del rango de escenarios razonables. Cuando queda dentro, el modelo te está diciendo honestamente que no sabe, y esa también es una respuesta valiosa." },
            { h: "Cuatro señales de que el modelo no sirve" },
            { ul: [
              "<strong>Necesitas supuestos heroicos para llegar al precio.</strong> Si solo cuadra con márgenes que la empresa nunca ha alcanzado, el modelo está justificando una conclusión previa.",
              "<strong>El valor terminal supera el 85% del total.</strong> Estás valorando una perpetuidad, no un negocio analizable.",
              "<strong>Pequeños cambios lo cambian todo.</strong> Si mover el margen medio punto altera la valoración un 40%, tu resultado depende del ruido.",
              "<strong>No puedes explicar el negocio en tres frases.</strong> Si no entiendes cómo gana dinero, ningún modelo va a arreglarlo."
            ]},
            { h: "El margen de seguridad" },
            { p: "Dado todo lo anterior, la práctica sensata es exigir una diferencia amplia entre tu estimación de valor y el precio que pagas. Si calculas 20 y el mercado pide 19, no tienes nada: tu error de estimación es mayor que la diferencia. Si el mercado pide 12, tienes espacio para equivocarte bastante y aun así salir bien." },
            { p: "El margen de seguridad no es pesimismo. Es el reconocimiento explícito de que tu modelo tiene una precisión limitada y de que preferirías que la incertidumbre juegue a tu favor." },
            { h: "Ejercicio final del módulo" },
            { p: "Elige una empresa cotizada que entiendas bien. Busca su flujo de caja libre del último año y su deuda neta. Construye el DCF más simple posible: cinco años de proyección, tres escenarios de crecimiento y tres tasas de descuento. No busques el número correcto; busca cuál es el escenario que el precio actual está asumiendo, y decide si te lo crees." }
          ]
        },
        en: {
          title: "Sensitivity: when to throw the model out",
          body: [
            { p: "A model that produces a single number conveys a precision it doesn't have. The fix isn't a more complex model, it's showing the range." },
            { h: "The two-way table" },
            { p: "Cross the two most influential assumptions — usually discount rate and perpetual growth — and compute the valuation at each combination. Using the module's example:" },
            { table: {
              head: ["", "g = 1%", "g = 2%", "g = 3%"],
              rows: [
                ["<strong>Rate 8%</strong>", "17.0", "20.0", "24.6"],
                ["<strong>Rate 9%</strong>", "13.7", "15.8", "18.8"],
                ["<strong>Rate 10%</strong>", "11.3", "12.8", "14.8"]
              ]
            }},
            { p: "The range runs from 11.3 to 24.6 on assumptions any reasonable analyst would defend. That doesn't invalidate the exercise: it puts it in proportion. If the stock trades at 9, it sits below the entire range and the investment case is solid. If it trades at 19, it sits inside the range and you have no conclusion." },
            { key: "A DCF is useful when the market price falls clearly outside the range of reasonable scenarios. When it falls inside, the model is honestly telling you it doesn't know — and that is a valuable answer too." },
            { h: "Four signs the model is worthless" },
            { ul: [
              "<strong>You need heroic assumptions to reach the price.</strong> If it only works with margins the company has never achieved, the model is justifying a conclusion you already had.",
              "<strong>Terminal value exceeds 85% of the total.</strong> You are valuing a perpetuity, not an analysable business.",
              "<strong>Small changes change everything.</strong> If moving margin by half a point shifts valuation 40%, your result depends on noise.",
              "<strong>You can't explain the business in three sentences.</strong> If you don't understand how it makes money, no model will fix that."
            ]},
            { h: "Margin of safety" },
            { p: "Given all of the above, the sensible practice is to demand a wide gap between your value estimate and the price you pay. If you calculate 20 and the market asks 19, you have nothing: your estimation error is larger than the gap. If the market asks 12, you have room to be quite wrong and still do fine." },
            { p: "Margin of safety isn't pessimism. It is the explicit acknowledgement that your model has limited precision and that you'd rather have uncertainty working in your favour." },
            { h: "Final module exercise" },
            { p: "Pick a listed company you understand well. Find its latest free cash flow and net debt. Build the simplest possible DCF: five projected years, three growth scenarios, three discount rates. Don't hunt for the right number; find out which scenario today's price is assuming, and decide whether you believe it." }
          ]
        }
      }
   ]
});

/* ═══════════════════════════════════════════ MÓDULO 16 ═══ */
window.FARLAZ_COURSE.push({
  id: "estrategias", num: "16", level: 4,
  es: {
    title: "Estrategias avanzadas de inversión",
    tagline: "Escuelas, factores y el enemigo interior",
    summary: "Value, growth, momentum, dividendos crecientes. Cada escuela con su lógica y sus periodos malos. Y el módulo termina donde termina de verdad la inversión: en la cabeza del inversor.",
    topics: ["Dividend Growth Investing", "Value Investing", "Growth Investing", "Momentum", "Factor Investing", "Dollar Cost Averaging", "Psicología del inversor", "Errores más comunes"],
    outcomes: [
      "Conocer la lógica de cada escuela de inversión",
      "Entender qué es un factor y cómo se explota",
      "Valorar cuándo conviene aportar de forma periódica",
      "Identificar tus propios sesgos antes de que te cuesten dinero"
    ]
  },
  en: {
    title: "Advanced investment strategies",
    tagline: "Schools, factors and the enemy within",
    summary: "Value, growth, momentum, dividend growth. Each school with its logic and its bad stretches. And the module ends where investing really ends: inside the investor's head.",
    topics: ["Dividend growth investing", "Value investing", "Growth investing", "Momentum", "Factor investing", "Dollar cost averaging", "Investor psychology", "Most common mistakes"],
    outcomes: [
      "Know the logic behind each school of investing",
      "Understand what a factor is and how it's harvested",
      "Judge when regular contributions make sense",
      "Identify your own biases before they cost you money"
    ]
  },
  lessons: []
});

/* ═══════════════════════════ ACADEMIA PREMIUM ═══════════════════════════
   No son módulos del curso abierto: es el catálogo de formación avanzada.
   Se muestra como una sección aparte en learn.html.
   ======================================================================= */

window.FARLAZ_PREMIUM = {
  es: {
    title: "Academia Farlaz",
    tagline: "Formación avanzada y herramientas profesionales",
    intro: "Programas de pago para quien ya domina los cuatro niveles y quiere trabajar con las herramientas que se usan en una mesa institucional. Con certificación al terminar cada bloque.",
    groups: [
      { name: "Herramientas", items: ["Bloomberg Terminal", "TradingView profesional", "Excel para finanzas", "Modelación financiera", "Python para finanzas"] },
      { name: "Mercados y activos", items: ["Macroeconomía global", "Criptomonedas y blockchain", "Bienes raíces", "Materias primas", "Divisas (Forex)"] },
      { name: "Carrera profesional", items: ["Banca de inversión", "Wealth Management", "Gestión de patrimonios", "IA aplicada a inversiones"] },
      { name: "Práctica", items: ["Casos reales: Apple, Berkshire Hathaway, BlackRock, NVIDIA", "Simulador de portafolios", "Certificaciones finales por módulo"] }
    ],
    cta: "Solicitar información"
  },
  en: {
    title: "Farlaz Academy",
    tagline: "Advanced training and professional tools",
    intro: "Paid programmes for those who have completed the four levels and want to work with the tools used on an institutional desk. Certification on completing each block.",
    groups: [
      { name: "Tools", items: ["Bloomberg Terminal", "TradingView professional", "Excel for finance", "Financial modelling", "Python for finance"] },
      { name: "Markets and assets", items: ["Global macroeconomics", "Cryptocurrencies and blockchain", "Real estate", "Commodities", "Foreign exchange"] },
      { name: "Career", items: ["Investment banking", "Wealth management", "Private wealth", "AI applied to investing"] },
      { name: "Practice", items: ["Real cases: Apple, Berkshire Hathaway, BlackRock, NVIDIA", "Portfolio simulator", "Final certification per module"] }
    ],
    cta: "Request information"
  }
};

/* Nombres de los cuatro niveles */
window.FARLAZ_LEVELS = {
  es: [
    { n: 1, name: "Fundamentos",  desc: "Empieza aquí si nunca has invertido. Sin nada por sabido." },
    { n: 2, name: "Inversiones",  desc: "Los instrumentos concretos: acciones, ETFs, bonos y fondos." },
    { n: 3, name: "Análisis",     desc: "Cómo se estudia una empresa y cómo se monta una cartera." },
    { n: 4, name: "Profesional",  desc: "Derivados, riesgo, valoración y escuelas de inversión." }
  ],
  en: [
    { n: 1, name: "Foundations",  desc: "Start here if you've never invested. Nothing assumed." },
    { n: 2, name: "Investments",  desc: "The actual instruments: equities, ETFs, bonds and funds." },
    { n: 3, name: "Analysis",     desc: "How a company is studied and how a portfolio is built." },
    { n: 4, name: "Professional", desc: "Derivatives, risk, valuation and schools of investing." }
  ]
};
