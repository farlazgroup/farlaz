/* ==========================================================================
   Farlaz — NIVEL 1: Fundamentos  (módulos 01-04)
   --------------------------------------------------------------------------
   Estructura de cada módulo:
     id, num, level, es/en: { title, tagline, summary, topics[], outcomes[] }
     lessons: [ { id, minutes, es/en: { title, body[] } } ]

   Bloques admitidos en 'body':
     {h}  subtítulo      {p}  párrafo        {ul} lista
     {note} aviso        {key} idea clave    {table:{head,rows}}
     {quiz:{q,options,answer,explain}}

   Si 'lessons' está vacío, la web muestra el temario y el estado
   «en preparación» automáticamente.
   ========================================================================== */

window.FARLAZ_COURSE = window.FARLAZ_COURSE || [];

/* ═══════════════════════════════════════════ MÓDULO 01 ═══ */
window.FARLAZ_COURSE.push({
  id: "dinero", num: "01", level: 1,
  es: {
    title: "Introducción al dinero y las finanzas",
    tagline: "Qué es el dinero y por qué pierde valor",
    summary: "El punto de partida absoluto. Si nunca has invertido y no sabes qué significa la mitad de las palabras que usa la gente de finanzas, empieza aquí. No damos nada por sabido.",
    topics: ["¿Qué es el dinero?", "Inflación", "Tipos de activos", "Riesgo y recompensa", "Interés simple y compuesto"],
    outcomes: [
      "Explicar por qué el dinero tiene valor",
      "Entender cómo la inflación te quita poder de compra",
      "Distinguir los grandes tipos de activos",
      "Calcular cuánto tarda en duplicarse un ahorro"
    ]
  },
  en: {
    title: "Introduction to money and finance",
    tagline: "What money is and why it loses value",
    summary: "The absolute starting point. If you've never invested and half the words finance people use mean nothing to you, start here. Nothing is assumed.",
    topics: ["What is money?", "Inflation", "Types of assets", "Risk and reward", "Simple vs compound interest"],
    outcomes: [
      "Explain why money has value",
      "Understand how inflation erodes your purchasing power",
      "Tell the major asset types apart",
      "Work out how long savings take to double"
    ]
  },
  lessons: [
    {
      id: "que-es-el-dinero", minutes: 6,
      es: { title: "¿Qué es el dinero?", body: [
        { p: "Un billete es un trozo de papel. No vale nada por sí mismo: no puedes comerlo, no abriga y no sirve para construir una casa. Sin embargo, puedes cambiarlo por comida, ropa o una casa. Entender por qué es el primer paso de toda la educación financiera." },
        { h: "El dinero es un acuerdo" },
        { p: "El dinero funciona porque todos aceptamos que funciona. Tú aceptas un billete a cambio de tu trabajo porque confías en que el panadero lo aceptará mañana a cambio de pan. En el momento en que esa confianza se rompe, el billete vuelve a ser papel. Eso no es teoría: ha pasado en varios países cuando la gente dejó de aceptar su propia moneda." },
        { h: "Las tres funciones que cumple" },
        { ul: [
          "<strong>Medio de intercambio.</strong> Evita que tengas que encontrar a alguien que quiera exactamente lo que tú tienes. Sin dinero, un panadero que necesita zapatos tendría que buscar un zapatero con hambre.",
          "<strong>Unidad de cuenta.</strong> Permite comparar cosas distintas. Un coche vale 40 panes o 400 zapatos es incómodo; decir que vale 20.000 es útil.",
          "<strong>Depósito de valor.</strong> Puedes trabajar hoy y gastar dentro de un año. Esta es la función que falla cuando hay inflación alta, y por eso nos importa tanto en este curso."
        ]},
        { key: "El dinero no es riqueza. Es un derecho sobre la riqueza que otros producen. Tener más billetes no crea más pan; solo cambia quién puede comprarlo." },
        { h: "De dónde sale el dinero" },
        { p: "Los bancos centrales emiten los billetes y monedas, pero eso es una parte pequeña. La mayor parte del dinero que circula lo crean los bancos comerciales cuando conceden préstamos: cuando te dan una hipoteca, no sacan el dinero de una caja fuerte, lo anotan en tu cuenta." },
        { p: "Esto suena raro la primera vez que lo oyes, pero tiene una consecuencia importantísima que veremos en el módulo de economía: la cantidad de dinero que existe cambia con el tiempo, y eso afecta a los precios de todo, incluidas tus inversiones." },
        { note: "No necesitas dominar la política monetaria para invertir bien. Pero sí necesitas saber que el dinero no es una constante fija, porque toda la lógica de invertir nace de ahí." }
      ]},
      en: { title: "What is money?", body: [
        { p: "A banknote is a piece of paper. It has no value in itself: you can't eat it, it won't keep you warm, and you can't build a house with it. Yet you can exchange it for food, clothes or a house. Understanding why is the first step in all financial education." },
        { h: "Money is an agreement" },
        { p: "Money works because we all accept that it works. You take a note in exchange for your labour because you trust the baker will take it tomorrow in exchange for bread. The moment that trust breaks, the note becomes paper again. That isn't theory: it has happened in several countries when people stopped accepting their own currency." },
        { h: "The three jobs it does" },
        { ul: [
          "<strong>Medium of exchange.</strong> It saves you from having to find someone who wants exactly what you have. Without money, a baker who needs shoes would have to find a hungry cobbler.",
          "<strong>Unit of account.</strong> It lets you compare unlike things. Saying a car is worth 40 loaves or 400 shoes is awkward; saying it costs 20,000 is useful.",
          "<strong>Store of value.</strong> You can work today and spend a year from now. This is the function that breaks under high inflation, and it's why it matters so much in this course."
        ]},
        { key: "Money isn't wealth. It's a claim on the wealth other people produce. Having more notes doesn't create more bread; it only changes who can buy it." },
        { h: "Where money comes from" },
        { p: "Central banks issue notes and coins, but that's a small share. Most circulating money is created by commercial banks when they lend: when you get a mortgage, they don't take the money out of a vault, they write it into your account." },
        { p: "It sounds strange the first time you hear it, but it has a consequence we'll return to in the economics module: the quantity of money in existence changes over time, and that affects the price of everything, including your investments." },
        { note: "You don't need to master monetary policy to invest well. But you do need to know money isn't a fixed constant, because the entire logic of investing starts there." }
      ]}
    },
    {
      id: "inflacion", minutes: 7,
      es: { title: "Inflación: el impuesto que nadie vota", body: [
        { p: "La inflación es la subida generalizada de los precios. Dicho de otro modo: con el mismo dinero compras menos que antes. Es el concepto más importante de todo este módulo, porque explica por qué guardar el dinero debajo del colchón es una decisión, no una ausencia de decisión." },
        { h: "Cómo se ve en la práctica" },
        { table: {
          head: ["Inflación anual", "Qué compran 1.000 dentro de 10 años", "Dentro de 20 años"],
          rows: [
            ["2%", "820", "673"],
            ["5%", "614", "377"],
            ["10%", "386", "149"]
          ]
        }},
        { p: "Con una inflación del 5% anual, guardar 1.000 en efectivo durante veinte años te deja con el poder de compra de 377. No has perdido billetes: sigues teniendo los mismos 1.000. Has perdido casi dos tercios de lo que puedes comprar con ellos." },
        { key: "El efectivo parado no es una posición neutra. Es una apuesta a que los precios no suban, y esa apuesta históricamente se pierde casi siempre." },
        { h: "Por qué suben los precios" },
        { ul: [
          "<strong>Más dinero persiguiendo los mismos bienes.</strong> Si se duplica el dinero en circulación y siguen existiendo los mismos panes, el precio del pan tiende a subir.",
          "<strong>Costes de producción.</strong> Si sube el petróleo, sube el transporte, y con él el precio de casi todo lo que se mueve en camión.",
          "<strong>Escasez.</strong> Cuando la demanda supera lo que se puede producir, el precio sube hasta que la demanda se ajusta.",
          "<strong>Expectativas.</strong> Si todos esperan inflación, los trabajadores piden subidas y las empresas suben precios por adelantado. La expectativa se cumple sola."
        ]},
        { h: "Rentabilidad nominal y rentabilidad real" },
        { p: "Esta distinción vale más que muchos cursos enteros. La <strong>rentabilidad nominal</strong> es el número que te dan: «este depósito paga un 4%». La <strong>rentabilidad real</strong> es lo que de verdad ganas después de descontar la inflación." },
        { p: "Si el depósito paga un 4% y la inflación es del 6%, tu rentabilidad real es de aproximadamente <strong>−2%</strong>. El banco no te ha engañado y tu saldo ha subido, pero puedes comprar menos que hace un año. Has perdido dinero mientras veías el número crecer." },
        { note: "Cada vez que alguien te presente una rentabilidad, pregunta si es nominal o real. Casi siempre es nominal, porque suena mejor." },
        { quiz: {
          q: "Un bono paga un 7% anual y la inflación del año fue del 9%. ¿Qué ha pasado con tu poder de compra?",
          options: [
            "Ha bajado aproximadamente un 2%",
            "Ha subido un 7%",
            "Se ha mantenido igual"
          ],
          answer: 0,
          explain: "Tienes un 7% más de dinero, pero todo cuesta un 9% más. La rentabilidad real es negativa: puedes comprar algo menos que antes, aunque tu saldo sea mayor."
        }}
      ]},
      en: { title: "Inflation: the tax nobody votes on", body: [
        { p: "Inflation is a general rise in prices. Put another way: the same money buys less than before. It's the most important idea in this module, because it explains why keeping cash under the mattress is a decision, not the absence of one." },
        { h: "What it looks like in practice" },
        { table: {
          head: ["Annual inflation", "What 1,000 buys in 10 years", "In 20 years"],
          rows: [
            ["2%", "820", "673"],
            ["5%", "614", "377"],
            ["10%", "386", "149"]
          ]
        }},
        { p: "At 5% a year, holding 1,000 in cash for twenty years leaves you with the buying power of 377. You haven't lost any notes: you still have the same 1,000. You've lost nearly two thirds of what they can buy." },
        { key: "Idle cash isn't a neutral position. It's a bet that prices won't rise, and historically that bet almost always loses." },
        { h: "Why prices rise" },
        { ul: [
          "<strong>More money chasing the same goods.</strong> Double the money in circulation with the same number of loaves and the price of bread tends to rise.",
          "<strong>Production costs.</strong> If oil rises, transport rises, and with it the price of almost everything that travels by lorry.",
          "<strong>Scarcity.</strong> When demand exceeds what can be produced, price rises until demand adjusts.",
          "<strong>Expectations.</strong> If everyone expects inflation, workers ask for raises and firms raise prices pre-emptively. The expectation fulfils itself."
        ]},
        { h: "Nominal versus real return" },
        { p: "This distinction is worth more than many whole courses. <strong>Nominal return</strong> is the number you're quoted: \"this deposit pays 4%\". <strong>Real return</strong> is what you actually earn after subtracting inflation." },
        { p: "If the deposit pays 4% and inflation is 6%, your real return is roughly <strong>−2%</strong>. The bank hasn't cheated you and your balance has grown, but you can buy less than a year ago. You lost money while watching the number rise." },
        { note: "Whenever someone quotes you a return, ask whether it's nominal or real. It's almost always nominal, because it sounds better." },
        { quiz: {
          q: "A bond pays 7% a year and inflation that year was 9%. What happened to your purchasing power?",
          options: [
            "It fell by roughly 2%",
            "It rose by 7%",
            "It stayed the same"
          ],
          answer: 0,
          explain: "You have 7% more money, but everything costs 9% more. The real return is negative: you can buy slightly less than before, even though your balance is larger."
        }}
      ]}
    },
    {
      id: "tipos-de-activos", minutes: 8,
      es: { title: "Tipos de activos", body: [
        { p: "Un activo es cualquier cosa que posees y que puede darte dinero en el futuro, ya sea por lo que produce o porque alguien te la comprará más cara. Casi todo lo invertible cabe en cinco familias." },
        { table: {
          head: ["Familia", "Qué es", "De dónde sale la ganancia", "Riesgo típico"],
          rows: [
            ["Efectivo", "Cuentas, depósitos, letras a corto", "Intereses", "Muy bajo, pero pierde con la inflación"],
            ["Renta fija", "Bonos de Estados y empresas", "Cupones + devolución del capital", "Bajo o medio"],
            ["Renta variable", "Acciones de empresas", "Dividendos + subida del precio", "Alto"],
            ["Inmobiliario", "Vivienda, locales, fondos del sector", "Alquileres + revalorización", "Medio, y poco líquido"],
            ["Materias primas", "Oro, petróleo, grano", "Solo cambio de precio", "Alto y muy variable"]
          ]
        }},
        { h: "La pregunta que ordena todo" },
        { p: "Ante cualquier activo, hazte una sola pregunta: <strong>¿produce algo por sí mismo, o solo puedo ganar si alguien me lo compra más caro?</strong>" },
        { p: "Una empresa produce beneficios. Un bono paga cupones. Un piso genera alquiler. Esos activos trabajan aunque nadie los compre. En cambio, el oro no produce nada: un lingote dentro de diez años sigue siendo el mismo lingote. Puede ser una inversión razonable por otras razones, pero tu única vía de ganancia es que otro pague más." },
        { key: "Ninguna de las dos categorías es mejor por definición. Lo peligroso es no saber en cuál estás, porque los activos que no producen nada dependen por completo del ánimo del mercado." },
        { h: "Liquidez: la propiedad que se olvida" },
        { p: "La liquidez es la facilidad para convertir algo en dinero sin perder valor en el intento. Una acción de una gran empresa se vende en segundos al precio de pantalla. Un piso puede tardar meses, y si tienes prisa, lo vendes más barato." },
        { p: "Es una propiedad que solo notas cuando la necesitas, y entonces ya es tarde. Por eso el dinero que puedes necesitar pronto no debería estar en activos ilíquidos, por buena que parezca la oportunidad." },
        { note: "Las criptomonedas no aparecen en la tabla como familia propia porque su comportamiento aún se discute. En el nivel avanzado hay un módulo dedicado. Para empezar, basta con saber que no producen flujo por sí mismas y que su volatilidad es muy superior a la de las cinco familias anteriores." }
      ]},
      en: { title: "Types of assets", body: [
        { p: "An asset is anything you own that can give you money in future, either through what it produces or because someone will buy it from you at a higher price. Almost everything investable fits into five families." },
        { table: {
          head: ["Family", "What it is", "Where the gain comes from", "Typical risk"],
          rows: [
            ["Cash", "Accounts, deposits, short bills", "Interest", "Very low, but loses to inflation"],
            ["Fixed income", "Government and corporate bonds", "Coupons + capital returned", "Low to medium"],
            ["Equities", "Shares in companies", "Dividends + price appreciation", "High"],
            ["Property", "Homes, commercial units, sector funds", "Rent + appreciation", "Medium, and illiquid"],
            ["Commodities", "Gold, oil, grain", "Price change only", "High and very variable"]
          ]
        }},
        { h: "The question that organises everything" },
        { p: "Faced with any asset, ask one thing: <strong>does it produce something by itself, or can I only gain if someone buys it from me for more?</strong>" },
        { p: "A company produces profits. A bond pays coupons. A flat generates rent. Those assets work whether or not anyone buys them. Gold, by contrast, produces nothing: a bar in ten years is still the same bar. It can be a reasonable holding for other reasons, but your only route to a gain is someone paying more." },
        { key: "Neither category is better by definition. What's dangerous is not knowing which one you're in, because assets that produce nothing depend entirely on market mood." },
        { h: "Liquidity: the forgotten property" },
        { p: "Liquidity is how easily you can turn something into cash without losing value in the process. Shares in a large company sell in seconds at the screen price. A flat can take months, and if you're in a hurry, you sell it cheaper." },
        { p: "It's a property you only notice when you need it, and by then it's too late. Which is why money you might need soon shouldn't sit in illiquid assets, however good the opportunity looks." },
        { note: "Cryptocurrencies don't appear as their own family here because their behaviour is still debated. There's a dedicated module at advanced level. To begin with, it's enough to know they produce no cash flow by themselves and their volatility far exceeds the five families above." }
      ]}
    },
    {
      id: "riesgo-y-recompensa", minutes: 7,
      es: { title: "Riesgo y recompensa", body: [
        { p: "Hay una regla que no admite excepciones: nadie te paga más sin pedirte algo a cambio. Si un producto ofrece más rentabilidad que otro, es porque conlleva más riesgo. Siempre. Cuando no encuentres el riesgo, no significa que no exista; significa que no lo has encontrado todavía." },
        { h: "Por qué existe la prima de riesgo" },
        { p: "Imagina que puedes prestar dinero a dos personas. Una es un Estado solvente que nunca ha dejado de pagar. La otra es una empresa recién creada. ¿A cuál le pides más interés?" },
        { p: "A la empresa, obviamente. Ese interés extra se llama <strong>prima de riesgo</strong>: es la compensación que exiges por la posibilidad de no recuperar tu dinero. No es un regalo del mercado, es el precio de una preocupación." },
        { key: "Rentabilidad alta no significa buena inversión. Significa que el mercado considera esa inversión peligrosa. Tu trabajo es juzgar si el peligro está bien pagado." },
        { h: "La escala, de menor a mayor riesgo" },
        { ul: [
          "Depósitos y letras del Tesoro a corto plazo",
          "Bonos de Estados solventes a largo plazo",
          "Bonos de empresas grandes y estables",
          "Bonos de empresas endeudadas (los llaman «alto rendimiento» y también «bonos basura»)",
          "Acciones de empresas grandes",
          "Acciones de empresas pequeñas o de países emergentes",
          "Derivados, apalancamiento y activos sin flujo propio"
        ]},
        { h: "La señal de alarma más fiable" },
        { p: "Si alguien te ofrece una rentabilidad alta y te dice que el riesgo es bajo o nulo, una de dos: no entiende lo que vende, o te está engañando. No hay tercera opción." },
        { p: "Presta especial atención a las promesas de rentabilidad fija y garantizada por encima de lo que paga la deuda pública. Ese es, casi sin excepción, el patrón de los fraudes financieros: prometer lo que los mercados no pueden dar." },
        { note: "Si estás valorando un producto y no consigues explicar en una frase de dónde sale el dinero que te van a pagar, no inviertas. La incapacidad de explicarlo no es falta de conocimientos técnicos: es la señal correcta." },
        { quiz: {
          q: "Un producto promete un 15% anual garantizado, sin riesgo, con retirada inmediata. ¿Qué conclusión es la más razonable?",
          options: [
            "Es una señal de alarma: nadie paga 15% sin riesgo",
            "Es una gran oportunidad y hay que entrar rápido",
            "Depende del país donde esté domiciliado"
          ],
          answer: 0,
          explain: "Si existiera un 15% sin riesgo, los grandes fondos lo comprarían todo hasta hundir esa rentabilidad. Que siga disponible para el público general indica que el riesgo existe y no te lo están contando."
        }}
      ]},
      en: { title: "Risk and reward", body: [
        { p: "One rule admits no exceptions: nobody pays you more without asking something in return. If a product offers a higher return than another, it carries more risk. Always. When you can't find the risk, it doesn't mean there isn't any; it means you haven't found it yet." },
        { h: "Why a risk premium exists" },
        { p: "Imagine you can lend money to two people. One is a solvent government that has never missed a payment. The other is a brand-new company. Which one do you charge more interest?" },
        { p: "The company, obviously. That extra interest is the <strong>risk premium</strong>: compensation for the chance you don't get your money back. It isn't a gift from the market, it's the price of a worry." },
        { key: "A high return doesn't mean a good investment. It means the market considers that investment dangerous. Your job is to judge whether the danger is well paid." },
        { h: "The scale, from lower to higher risk" },
        { ul: [
          "Deposits and short-term treasury bills",
          "Long-dated bonds from solvent governments",
          "Bonds from large, stable companies",
          "Bonds from indebted companies (called \"high yield\", also \"junk\")",
          "Shares in large companies",
          "Shares in small companies or emerging markets",
          "Derivatives, leverage and assets with no cash flow of their own"
        ]},
        { h: "The most reliable warning sign" },
        { p: "If someone offers you a high return and tells you the risk is low or nil, one of two things is true: they don't understand what they're selling, or they're deceiving you. There's no third option." },
        { p: "Pay particular attention to promises of fixed, guaranteed returns above what government debt pays. That is, almost without exception, the signature of financial fraud: promising what markets cannot deliver." },
        { note: "If you're weighing up a product and can't explain in one sentence where the money paying you comes from, don't invest. Being unable to explain it isn't a lack of technical knowledge: it's the correct signal." },
        { quiz: {
          q: "A product promises 15% a year, guaranteed, risk-free, withdraw any time. What's the most reasonable conclusion?",
          options: [
            "It's a warning sign: nobody pays 15% risk-free",
            "It's a great opportunity and you should move fast",
            "It depends which country it's domiciled in"
          ],
          answer: 0,
          explain: "If a risk-free 15% existed, large funds would buy all of it until that return collapsed. The fact that it's still available to the general public tells you the risk exists and isn't being disclosed."
        }}
      ]}
    },
    {
      id: "interes-compuesto", minutes: 7,
      es: { title: "Interés simple y compuesto", body: [
        { p: "El interés compuesto se explica mal casi siempre, porque se presenta como magia. No lo es. Es simplemente que los rendimientos generan rendimientos, y que ese efecto es lento durante años y luego brusco." },
        { h: "La diferencia con un ejemplo" },
        { p: "Inviertes 10.000 al 7% anual. Con <strong>interés simple</strong> ganas 700 cada año, siempre sobre los 10.000 iniciales. Con <strong>interés compuesto</strong>, el segundo año ganas el 7% de 10.700, el tercero el 7% de 11.449, y así sucesivamente." },
        { table: {
          head: ["Años", "Interés simple", "Interés compuesto", "Diferencia"],
          rows: [
            ["10", "17.000", "19.672", "+2.672"],
            ["20", "24.000", "38.697", "+14.697"],
            ["30", "31.000", "76.123", "+45.123"],
            ["40", "38.000", "149.745", "+111.745"]
          ]
        }},
        { p: "A diez años la diferencia es modesta. A cuarenta, el capital compuesto es casi cuatro veces el simple. La curva no crece en línea recta: se dispara al final." },
        { h: "La regla del 72" },
        { p: "Divide 72 entre la rentabilidad anual y obtienes, aproximadamente, los años que tarda tu dinero en duplicarse. Al 6% anual: 72 ÷ 6 = 12 años. Al 9%: ocho años. Es una aproximación, pero suficiente para hacer cuentas mentales." },
        { key: "El interés compuesto no recompensa la intensidad, recompensa la duración. Diez años al 12% terminan por debajo de treinta años al 7%. El tiempo es la variable que no se puede comprar ni acelerar." },
        { h: "Y ahora la mala noticia" },
        { p: "El mismo mecanismo funciona en tu contra con las comisiones. Una comisión anual del 1% no te cuesta un 1%: te cuesta un 1% compuesto durante todos los años que inviertas, aplicado sobre un capital que crece." },
        { table: {
          head: ["Escenario", "10.000 durante 30 años"],
          rows: [
            ["Rentabilidad bruta 7%, sin comisiones", "≈ 76.100"],
            ["Rentabilidad neta 6% (comisión 1%)", "≈ 57.400"],
            ["Rentabilidad neta 5% (comisión 2%)", "≈ 43.200"]
          ]
        }},
        { p: "Ese punto porcentual de diferencia se come cerca de una cuarta parte del resultado final. El 2% se lleva casi la mitad. Y la comisión se cobra siempre, gane o pierda el fondo." },
        { note: "Las cifras son cálculos sobre una rentabilidad constante, elegida como ejemplo. Los mercados reales no rinden lo mismo cada año y el resultado concreto sería distinto. Lo que no cambia es la dirección del efecto: el coste compuesto siempre es mucho mayor que el porcentaje anual del folleto." },
        { h: "Las dos conclusiones prácticas" },
        { p: "Primera: empezar pronto importa más que empezar con mucho. Alguien que aporta poco durante treinta años suele terminar por delante de alguien que aporta el triple durante quince." },
        { p: "Segunda: comparar comisiones de forma obsesiva es una de las poquísimas decisiones de inversión cuyo efecto es predecible. Una comisión menor es una rentabilidad mayor, garantizada, sin necesidad de acertar nada." }
      ]},
      en: { title: "Simple and compound interest", body: [
        { p: "Compounding is almost always explained badly, because it's presented as magic. It isn't. It's simply that returns generate returns, and that the effect is slow for years and then abrupt." },
        { h: "The difference, with an example" },
        { p: "You invest 10,000 at 7% a year. With <strong>simple interest</strong> you earn 700 every year, always on the original 10,000. With <strong>compound interest</strong>, in year two you earn 7% of 10,700, in year three 7% of 11,449, and so on." },
        { table: {
          head: ["Years", "Simple interest", "Compound interest", "Difference"],
          rows: [
            ["10", "17,000", "19,672", "+2,672"],
            ["20", "24,000", "38,697", "+14,697"],
            ["30", "31,000", "76,123", "+45,123"],
            ["40", "38,000", "149,745", "+111,745"]
          ]
        }},
        { p: "At ten years the gap is modest. At forty, the compounded capital is nearly four times the simple one. The curve doesn't grow in a straight line: it takes off at the end." },
        { h: "The rule of 72" },
        { p: "Divide 72 by the annual return and you get, roughly, the years it takes your money to double. At 6% a year: 72 ÷ 6 = 12 years. At 9%: eight years. An approximation, but good enough for mental arithmetic." },
        { key: "Compounding doesn't reward intensity, it rewards duration. Ten years at 12% ends up below thirty years at 7%. Time is the variable you can't buy or accelerate." },
        { h: "And now the bad news" },
        { p: "The same mechanism works against you through fees. A 1% annual fee doesn't cost you 1%: it costs you 1% compounded across every year you invest, applied to a growing balance." },
        { table: {
          head: ["Scenario", "10,000 over 30 years"],
          rows: [
            ["7% gross return, no fees", "≈ 76,100"],
            ["6% net return (1% fee)", "≈ 57,400"],
            ["5% net return (2% fee)", "≈ 43,200"]
          ]
        }},
        { p: "That single percentage point eats close to a quarter of the final result. Two points take almost half. And the fee is charged whether the fund gains or loses." },
        { note: "These figures assume a constant return, chosen as an example. Real markets don't return the same amount every year and the specific outcome would differ. What doesn't change is the direction of the effect: the compounded cost is always far larger than the annual percentage on the factsheet." },
        { h: "The two practical conclusions" },
        { p: "First: starting early matters more than starting large. Someone contributing a little for thirty years usually ends ahead of someone contributing three times as much for fifteen." },
        { p: "Second: comparing fees obsessively is one of the very few investment decisions whose effect is predictable. A lower fee is a higher return, guaranteed, without needing to be right about anything." }
      ]}
    }
  ]
});

/* ═══════════════════════════════════════════ MÓDULO 02 ═══ */
window.FARLAZ_COURSE.push({
  id: "finanzas-personales", num: "02", level: 1,
  es: {
    title: "Finanzas personales",
    tagline: "Ordenar tu dinero antes de invertirlo",
    summary: "Invertir sin haber ordenado tus finanzas es construir sobre arena. Este módulo cubre lo que hay que resolver antes de comprar tu primer activo: presupuesto, colchón, deudas y crédito.",
    topics: ["Presupuesto", "Fondo de emergencia", "Deuda buena y deuda mala", "Tarjetas de crédito", "Historial crediticio", "Ahorro inteligente"],
    outcomes: [
      "Montar un presupuesto que puedas sostener",
      "Calcular el fondo de emergencia que te corresponde",
      "Distinguir la deuda que construye de la que destruye",
      "Entender cómo se forma tu historial crediticio"
    ]
  },
  en: {
    title: "Personal finance",
    tagline: "Getting your money in order before investing it",
    summary: "Investing before sorting out your finances is building on sand. This module covers what to resolve before buying your first asset: budget, buffer, debt and credit.",
    topics: ["Budgeting", "Emergency fund", "Good debt vs bad debt", "Credit cards", "Credit history", "Smart saving"],
    outcomes: [
      "Build a budget you can actually sustain",
      "Work out the right size for your emergency fund",
      "Tell debt that builds from debt that destroys",
      "Understand how your credit history is formed"
    ]
  },
  lessons: [
    {
      id: "presupuesto", minutes: 7,
      es: { title: "El presupuesto", body: [
        { p: "Un presupuesto no es una lista de prohibiciones. Es un mapa de a dónde va tu dinero. La mayoría de la gente que cree saber en qué gasta se equivoca por bastante, y no por los gastos grandes: por los pequeños y repetidos." },
        { h: "El único paso que no puedes saltarte" },
        { p: "Antes de planificar nada, mide. Durante un mes completo, anota todo lo que sale de tu cuenta. Todo. No cambies tus hábitos ese mes: quieres una foto real, no una foto favorecedora." },
        { p: "Al final del mes, clasifica cada gasto en tres cubos: <strong>fijos</strong> (alquiler, préstamos, seguros), <strong>variables necesarios</strong> (comida, transporte, luz) y <strong>discrecionales</strong> (todo lo demás). El tercer cubo casi siempre sorprende." },
        { h: "Una regla de reparto para empezar" },
        { table: {
          head: ["Bloque", "Porcentaje orientativo", "Qué incluye"],
          rows: [
            ["Necesidades", "50%", "Vivienda, comida, transporte, servicios, seguros"],
            ["Deseos", "30%", "Ocio, restaurantes, suscripciones, viajes"],
            ["Ahorro e inversión", "20%", "Fondo de emergencia primero, después inversión"]
          ]
        }},
        { p: "Estos porcentajes son un punto de partida, no una ley. En ciudades con alquileres altos, el bloque de necesidades se come mucho más del 50%, y forzar la regla solo genera frustración. Lo importante no es clavar los números, es que el tercer bloque no sea cero." },
        { key: "Págate a ti primero. Transfiere el ahorro el día que cobras, no a final de mes con lo que sobre. Lo que sobra a final de mes es, casi siempre, nada." },
        { h: "Por qué fallan los presupuestos" },
        { ul: [
          "<strong>Son demasiado estrictos.</strong> Un presupuesto sin margen para caprichos se abandona en tres semanas, igual que las dietas imposibles.",
          "<strong>Olvidan los gastos anuales.</strong> El seguro del coche, la matrícula o las vacaciones no son imprevistos: son gastos conocidos que llegan de golpe. Divídelos entre doce y aparta esa cantidad cada mes.",
          "<strong>Requieren demasiado esfuerzo.</strong> Si tu método necesita veinte minutos diarios, no durará. Automatiza lo que puedas y revisa una vez al mes."
        ]},
        { note: "Un presupuesto que cumples al 80% durante años vale infinitamente más que uno perfecto que abandonas en marzo. Diseña para la constancia, no para la perfección." }
      ]},
      en: { title: "Budgeting", body: [
        { p: "A budget isn't a list of prohibitions. It's a map of where your money goes. Most people who think they know what they spend on are off by a fair margin — and not because of the big items, but the small repeated ones." },
        { h: "The one step you can't skip" },
        { p: "Before planning anything, measure. For a full month, record everything leaving your account. Everything. Don't change your habits that month: you want a real picture, not a flattering one." },
        { p: "At month end, sort each expense into three buckets: <strong>fixed</strong> (rent, loans, insurance), <strong>necessary variable</strong> (food, transport, utilities) and <strong>discretionary</strong> (everything else). The third bucket almost always surprises." },
        { h: "A starting split" },
        { table: {
          head: ["Block", "Indicative share", "What it covers"],
          rows: [
            ["Needs", "50%", "Housing, food, transport, utilities, insurance"],
            ["Wants", "30%", "Leisure, eating out, subscriptions, travel"],
            ["Saving and investing", "20%", "Emergency fund first, then investing"]
          ]
        }},
        { p: "These percentages are a starting point, not a law. In cities with high rents, needs eat far more than 50%, and forcing the rule only breeds frustration. What matters isn't hitting the numbers exactly, it's that the third block isn't zero." },
        { key: "Pay yourself first. Move your savings on payday, not at month end with whatever's left. What's left at month end is, almost always, nothing." },
        { h: "Why budgets fail" },
        { ul: [
          "<strong>They're too strict.</strong> A budget with no room for treats gets abandoned in three weeks, just like impossible diets.",
          "<strong>They forget annual costs.</strong> Car insurance, tuition or holidays aren't surprises: they're known costs that land all at once. Divide them by twelve and set that aside monthly.",
          "<strong>They take too much effort.</strong> If your method needs twenty minutes a day, it won't last. Automate what you can and review once a month."
        ]},
        { note: "A budget you follow 80% of the time for years is worth infinitely more than a perfect one you abandon in March. Design for consistency, not perfection." }
      ]}
    },
    {
      id: "fondo-de-emergencia", minutes: 6,
      es: { title: "El fondo de emergencia", body: [
        { p: "Es la cantidad de dinero líquido que te permite afrontar un imprevisto sin endeudarte y sin vender inversiones en mal momento. Es lo primero que hay que construir, antes de invertir un solo euro." },
        { h: "Por qué va antes que invertir" },
        { p: "Sin colchón, cualquier golpe —una avería, un mes sin ingresos, una urgencia médica— te obliga a una de dos cosas: pedir un crédito caro o vender tus inversiones. Y como los golpes suelen coincidir con las crisis económicas, venderías justo cuando los mercados están bajos." },
        { p: "Ese es el mecanismo por el que mucha gente que invirtió bien terminó perdiendo dinero: no se equivocaron eligiendo, se equivocaron no teniendo colchón." },
        { key: "El fondo de emergencia no es una inversión, es un seguro. No lo juzgues por su rentabilidad, júzgalo por las malas decisiones que te evita tomar." },
        { h: "Cuánto necesitas" },
        { table: {
          head: ["Tu situación", "Meses de gastos recomendados"],
          rows: [
            ["Empleo estable, sin dependientes", "3 a 4"],
            ["Empleo estable, con familia a tu cargo", "6"],
            ["Ingresos variables o autónomo", "6 a 12"],
            ["Sector inestable o único sueldo del hogar", "9 a 12"]
          ]
        }},
        { p: "Ojo al detalle: son meses de <strong>gastos</strong>, no de ingresos. Si gastas 1.500 al mes, cuatro meses son 6.000, aunque ganes 2.500." },
        { h: "Dónde guardarlo" },
        { p: "Tiene que cumplir tres condiciones: disponible en menos de 48 horas, sin riesgo de perder valor y separado de tu cuenta corriente para que no te lo gastes sin darte cuenta." },
        { p: "Eso descarta la bolsa, los fondos de riesgo y cualquier producto con penalización por retirada. Sirve una cuenta de ahorro remunerada, un depósito con liquidez o un fondo monetario. Que rente algo es deseable; que esté disponible es obligatorio." },
        { note: "Si tienes deudas con intereses muy altos, como el saldo aplazado de una tarjeta, la prioridad cambia: construye un colchón pequeño de un mes, ataca esa deuda con todo, y después completa el fondo. Ningún ahorro te paga lo que te cuesta esa deuda." }
      ]},
      en: { title: "The emergency fund", body: [
        { p: "This is the amount of liquid money that lets you absorb a shock without borrowing and without selling investments at a bad moment. It's the first thing to build, before investing a single euro." },
        { h: "Why it comes before investing" },
        { p: "Without a buffer, any blow — a breakdown, a month without income, a medical emergency — forces one of two things: expensive credit or selling your investments. And since shocks tend to coincide with economic downturns, you'd be selling exactly when markets are low." },
        { p: "That's the mechanism by which plenty of people who invested well ended up losing money: they didn't pick wrong, they went without a buffer." },
        { key: "An emergency fund isn't an investment, it's insurance. Don't judge it by its return, judge it by the bad decisions it stops you making." },
        { h: "How much you need" },
        { table: {
          head: ["Your situation", "Months of expenses recommended"],
          rows: [
            ["Stable job, no dependants", "3 to 4"],
            ["Stable job, family to support", "6"],
            ["Variable income or self-employed", "6 to 12"],
            ["Unstable sector or sole household income", "9 to 12"]
          ]
        }},
        { p: "Note the detail: months of <strong>expenses</strong>, not income. If you spend 1,500 a month, four months is 6,000, even if you earn 2,500." },
        { h: "Where to keep it" },
        { p: "It must meet three conditions: available within 48 hours, no risk of losing value, and separate from your current account so you don't spend it without noticing." },
        { p: "That rules out equities, risk funds and anything with a withdrawal penalty. A paying savings account, an accessible deposit or a money market fund all work. Earning something is desirable; being available is mandatory." },
        { note: "If you carry very high-interest debt, such as a revolving credit card balance, the priority changes: build a small one-month buffer, attack that debt with everything, then complete the fund. No savings account pays what that debt costs you." }
      ]}
    },
    {
      id: "deuda", minutes: 8,
      es: { title: "Deuda buena y deuda mala", body: [
        { p: "La deuda no es buena ni mala por sí misma. Es una herramienta que adelanta consumo o inversión a cambio de un coste. La pregunta correcta no es «¿debo endeudarme?» sino «¿lo que compro con esta deuda vale más que lo que me cuesta?»." },
        { h: "La regla que lo decide" },
        { p: "<strong>Deuda buena</strong> es la que financia algo que aumentará tus ingresos o tu patrimonio por encima de lo que pagas en intereses. <strong>Deuda mala</strong> es la que financia consumo que pierde valor mientras sigues pagándolo." },
        { table: {
          head: ["Tipo de deuda", "Coste típico", "¿Qué financia?", "Juicio"],
          rows: [
            ["Hipoteca sobre vivienda", "Bajo", "Un activo que puede revalorizarse", "Generalmente buena"],
            ["Préstamo de estudios", "Medio", "Capacidad de generar más ingresos", "Buena si el retorno es real"],
            ["Préstamo para un negocio", "Medio", "Un activo productivo", "Buena si el plan aguanta"],
            ["Financiación de coche", "Medio-alto", "Un bien que se deprecia", "Discutible"],
            ["Saldo aplazado de tarjeta", "Muy alto", "Consumo ya disfrutado", "Mala casi siempre"]
          ]
        }},
        { h: "Por qué la tarjeta es la peor de todas" },
        { p: "Cuando aplazas el pago de una tarjeta, el tipo de interés suele situarse muy por encima de cualquier otra deuda al consumo. Y funciona con interés compuesto en tu contra: los intereses del mes se suman al saldo y el mes siguiente generan más intereses." },
        { p: "El pago mínimo está diseñado para que esto dure. Pagando solo el mínimo, una deuda modesta puede tardar años en liquidarse y acabar costando más del doble de lo que compraste." },
        { key: "Cancelar una deuda al 20% es exactamente igual de rentable que encontrar una inversión que rinda un 20% garantizado. Con la diferencia de que la primera existe y la segunda no." },
        { h: "En qué orden pagar" },
        { p: "Hay dos métodos que funcionan y uno que no." },
        { ul: [
          "<strong>Avalancha.</strong> Pagas primero la deuda con el interés más alto. Matemáticamente es el que menos dinero te cuesta.",
          "<strong>Bola de nieve.</strong> Pagas primero la deuda más pequeña, sin importar el interés. Cuesta algo más, pero cancelar una deuda entera pronto motiva a seguir, y para muchas personas eso decide el resultado.",
          "<strong>Repartir un poco entre todas.</strong> Este es el que no funciona: alarga todas las deudas a la vez y no cierras ninguna."
        ]},
        { note: "Elige el método que vayas a mantener. La avalancha es superior sobre el papel, pero un plan que abandonas rinde cero. Sé honesto contigo mismo sobre qué te va a sostener." }
      ]},
      en: { title: "Good debt and bad debt", body: [
        { p: "Debt is neither good nor bad in itself. It's a tool that brings forward consumption or investment in exchange for a cost. The right question isn't \"should I borrow?\" but \"is what I'm buying with this debt worth more than what it costs me?\"." },
        { h: "The rule that decides" },
        { p: "<strong>Good debt</strong> funds something that will raise your income or your net worth by more than you pay in interest. <strong>Bad debt</strong> funds consumption that loses value while you're still paying for it." },
        { table: {
          head: ["Type of debt", "Typical cost", "What it funds", "Verdict"],
          rows: [
            ["Home mortgage", "Low", "An asset that may appreciate", "Generally good"],
            ["Student loan", "Medium", "Capacity to earn more", "Good if the return is real"],
            ["Business loan", "Medium", "A productive asset", "Good if the plan holds"],
            ["Car finance", "Medium-high", "A depreciating item", "Debatable"],
            ["Revolving card balance", "Very high", "Consumption already enjoyed", "Almost always bad"]
          ]
        }},
        { h: "Why the credit card is the worst of them" },
        { p: "When you carry a card balance, the interest rate usually sits far above any other consumer debt. And it compounds against you: this month's interest joins the balance and generates more interest next month." },
        { p: "The minimum payment is designed to make this last. Paying only the minimum, a modest debt can take years to clear and end up costing more than double what you bought." },
        { key: "Clearing a debt at 20% is exactly as profitable as finding an investment that returns a guaranteed 20%. With the difference that the first exists and the second doesn't." },
        { h: "What order to pay in" },
        { p: "Two methods work and one doesn't." },
        { ul: [
          "<strong>Avalanche.</strong> Pay the highest-interest debt first. Mathematically this costs you the least money.",
          "<strong>Snowball.</strong> Pay the smallest debt first, regardless of interest. It costs slightly more, but clearing a whole debt early is motivating, and for many people that decides the outcome.",
          "<strong>Spreading a bit across all of them.</strong> This is the one that doesn't work: it stretches every debt at once and closes none."
        ]},
        { note: "Pick the method you'll stick with. Avalanche is superior on paper, but a plan you abandon returns zero. Be honest with yourself about what will keep you going." }
      ]}
    },
    {
      id: "credito", minutes: 7,
      es: { title: "Tarjetas de crédito e historial crediticio", body: [
        { p: "Una tarjeta de crédito no es dinero tuyo: es un préstamo automático que se activa cada vez que la pasas. Usada bien, es una herramienta gratuita y útil. Usada mal, es la forma más cara de financiarse que existe para un particular." },
        { h: "Crédito y débito no son lo mismo" },
        { p: "Con una tarjeta de <strong>débito</strong>, el dinero sale de tu cuenta al instante. Si no lo tienes, la operación se rechaza. Con una de <strong>crédito</strong>, el banco paga por ti y tú le devuelves después." },
        { p: "La clave está en cómo devuelves. En la modalidad de <strong>pago total a fin de mes</strong>, devuelves todo lo gastado y no pagas intereses. En la modalidad <strong>aplazada o revolving</strong>, pagas una cuota fija y el resto genera intereses altos, mes tras mes." },
        { key: "Si usas tarjeta de crédito, configúrala en pago total a fin de mes y compruébalo. Muchas vienen configuradas en aplazado por defecto, y esa configuración es la que convierte una herramienta útil en una trampa cara." },
        { h: "Qué es el historial crediticio" },
        { p: "Es el registro de cómo has cumplido con tus obligaciones de pago. Bancos y financieras lo consultan antes de prestarte, y de él depende si te aprueban un crédito y a qué tipo de interés." },
        { p: "Los sistemas concretos varían mucho por país: algunos usan una puntuación numérica, otros funcionan con registros de impagos. Pero los factores que pesan son parecidos en todas partes." },
        { ul: [
          "<strong>Puntualidad en los pagos.</strong> Es el factor con más peso, y con diferencia. Un impago registrado tarda años en desaparecer.",
          "<strong>Nivel de endeudamiento.</strong> Usar de forma permanente casi todo el límite disponible se interpreta como tensión financiera, aunque pagues a tiempo.",
          "<strong>Antigüedad.</strong> Un historial largo y limpio vale más que uno corto y perfecto.",
          "<strong>Número de solicitudes recientes.</strong> Pedir varios créditos en poco tiempo enciende alarmas."
        ]},
        { h: "Por qué te conviene cuidarlo" },
        { p: "Un buen historial no es un premio moral: es dinero. La diferencia de tipo de interés entre un perfil bueno y uno regular, aplicada a una hipoteca a treinta años, se cuenta en decenas de miles." },
        { note: "En la mayoría de países tienes derecho a consultar gratuitamente qué información tienen sobre ti las entidades de información crediticia, y a exigir que corrijan errores. Merece la pena hacerlo al menos una vez: los errores son más frecuentes de lo que parece." }
      ]},
      en: { title: "Credit cards and credit history", body: [
        { p: "A credit card isn't your money: it's an automatic loan that activates every time you tap it. Used well, it's a free and useful tool. Used badly, it's the most expensive form of borrowing available to an individual." },
        { h: "Credit and debit aren't the same" },
        { p: "With a <strong>debit</strong> card, money leaves your account instantly. If you don't have it, the transaction is declined. With a <strong>credit</strong> card, the bank pays on your behalf and you repay later." },
        { p: "The key is how you repay. On <strong>full monthly repayment</strong>, you clear everything spent and pay no interest. On <strong>revolving</strong> terms, you pay a fixed instalment and the remainder accrues high interest, month after month." },
        { key: "If you use a credit card, set it to full monthly repayment and verify it. Many arrive set to revolving by default, and that setting is what turns a useful tool into an expensive trap." },
        { h: "What credit history is" },
        { p: "It's the record of how you've met your payment obligations. Banks and lenders consult it before lending, and it determines whether you're approved and at what rate." },
        { p: "The specific systems vary a lot by country: some use a numerical score, others work from default registers. But the factors that weigh are similar everywhere." },
        { ul: [
          "<strong>Payment punctuality.</strong> By far the heaviest factor. A registered default takes years to fall off.",
          "<strong>Level of borrowing.</strong> Permanently using almost all your available limit reads as financial strain, even if you pay on time.",
          "<strong>Length of history.</strong> A long clean record is worth more than a short perfect one.",
          "<strong>Recent applications.</strong> Several credit requests in a short period raise flags."
        ]},
        { h: "Why it pays to look after it" },
        { p: "A good record isn't a moral prize: it's money. The interest rate difference between a strong profile and a middling one, applied to a thirty-year mortgage, runs into tens of thousands." },
        { note: "In most countries you have the right to check for free what credit reference agencies hold about you, and to demand corrections. It's worth doing at least once: errors are more common than you'd think." }
      ]}
    }
  ]
});
