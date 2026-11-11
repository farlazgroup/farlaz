/* ==========================================================================
   Farlaz — Cuerpo de los artículos (8)
   ========================================================================== */

window.FARLAZ_ARTICLES = window.FARLAZ_ARTICLES || {};

(function () {
  var A = "Luis Andrés Farrugia V.";
  var DIS_ES = "Contenido educativo. Los números son un ejemplo construido para ilustrar el método y no constituyen recomendación de inversión ni asesoramiento personalizado.";
  var DIS_EN = "Educational content. The figures are a constructed example illustrating the method and do not constitute an investment recommendation or personalised advice.";
  var GEN_ES = "Contenido educativo. No constituye recomendación de inversión ni asesoramiento personalizado.";
  var GEN_EN = "Educational content. Not an investment recommendation or personalised advice.";

/* ------------------------------------------------------------------- 31 */
window.FARLAZ_ARTICLES["opciones-sin-formulas"] = {
  es: {
    author: A, disclosure: "Contenido educativo. Las opciones son instrumentos complejos con los que se puede perder la totalidad de lo invertido, o más en el caso de vender opciones. Este artículo no constituye recomendación de inversión.",
    body: [
      { p: "Una opción es un contrato que te da un derecho, no una obligación: comprar o vender un activo a un precio fijado, hasta una fecha concreta. Por ese derecho pagas un precio, llamado prima. Si el derecho no te conviene, simplemente no lo ejerces y pierdes la prima. Ese es todo el concepto; el resto son detalles." },
      { h: "La call: derecho a comprar" },
      { p: "Una acción cotiza a 100. Compras una call con precio de ejercicio 110 que vence en tres meses y pagas una prima de 3 por acción. Estás apostando a que la acción superará 110 con margen suficiente antes del vencimiento." },
      { table: {
        head: ["Precio al vencimiento", "Valor de la call", "Resultado (tras pagar 3)"],
        rows: [
          ["95", "0", "-3"],
          ["105", "0", "-3"],
          ["113", "3", "0"],
          ["130", "20", "+17"]
        ]
      }},
      { p: "Tu pérdida máxima son los 3 que pagaste. La ganancia potencial no tiene techo. Pero fíjate en el caso de 105: la acción subió un 5% y tú perdiste el 100% de lo invertido, porque no llegó al precio de ejercicio a tiempo." },
      { h: "La put: derecho a vender" },
      { p: "Una put funciona al revés: te da derecho a vender a un precio fijado. Si tienes la acción a 100 y compras una put a 90, te aseguras de poder venderla a 90 pase lo que pase. Es, literalmente, un seguro contra caídas, y como todo seguro, si no ocurre el siniestro, la prima se pierde." },
      { key: "Comprar una opción limita tu pérdida a la prima, pero el tiempo juega en tu contra: cada día que pasa sin que el precio se mueva, la opción vale un poco menos." },
      { h: "Lo que determina la prima" },
      { ul: [
        "La distancia entre el precio actual y el de ejercicio.",
        "El tiempo hasta el vencimiento: más tiempo, más cara.",
        "La volatilidad esperada: cuanto más se espera que se mueva el activo, más cara.",
        "Las tasas de interés y los dividendos, con un efecto menor."
      ]},
      { h: "Quien está al otro lado" },
      { p: "Por cada comprador hay un vendedor que cobra la prima y asume la obligación. Vender opciones da ingresos frecuentes y pequeños a cambio de un riesgo de pérdida grande, que en algunos casos no tiene límite. Muchas estrategias que se venden como \"ingresos pasivos con opciones\" consisten en esto." },
      { note: "Las opciones tienen usos legítimos, sobre todo como cobertura. Pero son herramientas profesionales. Si no puedes explicar cuánto pierdes en cada escenario antes de entrar, todavía no es momento de usarlas." }
    ]
  },
  en: {
    author: A, disclosure: "Educational content. Options are complex instruments with which you can lose your entire investment, or more if you sell options. This article is not an investment recommendation.",
    body: [
      { p: "An option is a contract giving you a right, not an obligation: to buy or sell an asset at a set price, until a set date. You pay a price for that right, called the premium. If the right isn't worth using, you simply don't exercise it and lose the premium. That's the whole concept; the rest is detail." },
      { h: "The call: the right to buy" },
      { p: "A share trades at 100. You buy a call with a strike of 110 expiring in three months and pay a premium of 3 per share. You're betting the share will clear 110 by enough before expiry." },
      { table: {
        head: ["Price at expiry", "Value of the call", "Result (after paying 3)"],
        rows: [
          ["95", "0", "-3"],
          ["105", "0", "-3"],
          ["113", "3", "0"],
          ["130", "20", "+17"]
        ]
      }},
      { p: "Your maximum loss is the 3 you paid. The potential gain has no ceiling. But look at 105: the share rose 5% and you lost 100% of your money, because it didn't reach the strike in time." },
      { h: "The put: the right to sell" },
      { p: "A put works the other way: it gives you the right to sell at a set price. If you own the share at 100 and buy a put at 90, you're guaranteed to be able to sell at 90 whatever happens. It is literally insurance against a fall, and like any insurance, if nothing happens the premium is gone." },
      { key: "Buying an option caps your loss at the premium, but time works against you: every day the price doesn't move, the option is worth a little less." },
      { h: "What sets the premium" },
      { ul: [
        "The distance between the current price and the strike.",
        "Time to expiry: more time, more expensive.",
        "Expected volatility: the more the asset is expected to move, the dearer.",
        "Interest rates and dividends, with a smaller effect."
      ]},
      { h: "Who is on the other side" },
      { p: "For every buyer there's a seller who collects the premium and takes on the obligation. Selling options brings frequent small income in exchange for a risk of large losses, which in some cases have no limit. Many strategies sold as \"passive income with options\" amount to this." },
      { note: "Options have legitimate uses, especially as hedges. But they're professional tools. If you can't explain how much you lose in each scenario before going in, it isn't time to use them yet." }
    ]
  }
};

/* ------------------------------------------------------------------- 32 */
window.FARLAZ_ARTICLES["calidad-de-beneficios"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Dos empresas declaran un beneficio neto de 100. La primera cobró en efectivo prácticamente todo lo que vendió. La segunda registró las ventas, pero buena parte todavía no la ha cobrado, y además ha alargado la vida útil de sus máquinas para amortizar menos cada año. En la cuenta de resultados son idénticas. No lo son." },
      { h: "Los devengos" },
      { p: "La contabilidad registra ingresos y gastos cuando se generan, no cuando se cobran o se pagan. A esa diferencia entre beneficio y caja se le llama devengos. Son normales y necesarios, pero cuando crecen mucho, el beneficio depende cada vez más de estimaciones y menos de dinero real." },
      { p: "Una medida sencilla es el ratio de devengos: beneficio neto menos flujo de caja operativo, dividido entre los activos totales medios del año." },
      { table: {
        head: ["Ejemplo construido", "Empresa A", "Empresa B"],
        rows: [
          ["Beneficio neto", "100", "100"],
          ["Flujo de caja operativo", "115", "40"],
          ["Activos totales medios", "1.000", "1.000"],
          ["<strong>Ratio de devengos</strong>", "<strong>-1,5%</strong>", "<strong>+6,0%</strong>"]
        ]
      }},
      { key: "Un ratio de devengos bajo o negativo indica beneficios respaldados por caja. Uno alto y creciente indica que el beneficio se está apoyando en partidas que todavía no son dinero." },
      { h: "Lo que dice la investigación" },
      { p: "En 1996, el profesor Richard Sloan publicó un estudio que mostraba que las empresas con devengos altos tendían a tener peores resultados bursátiles en los años siguientes que las de devengos bajos. Su explicación: los inversores se fijan en el beneficio y no distinguen bien entre la parte que es caja y la que no. Desde entonces, la calidad de los beneficios es un factor clásico del análisis." },
      { h: "Señales concretas" },
      { ul: [
        "Cuentas por cobrar que crecen más rápido que las ventas.",
        "Cambios en políticas contables: vidas útiles más largas, menos provisiones.",
        "Beneficio \"ajustado\" que excluye cada año gastos supuestamente extraordinarios.",
        "Ingresos reconocidos por adelantado en contratos de varios años."
      ]},
      { note: "Ninguna de estas señales prueba nada por sí sola. Son preguntas para llevar a las notas del informe anual, que es donde las empresas explican sus estimaciones." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "Two companies report net income of 100. The first collected virtually everything it sold in cash. The second booked its sales but hasn't collected much of them yet, and it has also lengthened the useful life of its machines to depreciate less each year. On the income statement they're identical. They aren't." },
      { h: "Accruals" },
      { p: "Accounting records revenue and costs when they're earned or incurred, not when cash changes hands. The gap between profit and cash is called accruals. They're normal and necessary, but when they grow large, profit depends more and more on estimates and less on real money." },
      { p: "A simple measure is the accruals ratio: net income minus operating cash flow, divided by average total assets for the year." },
      { table: {
        head: ["Constructed example", "Company A", "Company B"],
        rows: [
          ["Net income", "100", "100"],
          ["Operating cash flow", "115", "40"],
          ["Average total assets", "1,000", "1,000"],
          ["<strong>Accruals ratio</strong>", "<strong>-1.5%</strong>", "<strong>+6.0%</strong>"]
        ]
      }},
      { key: "A low or negative accruals ratio means profits backed by cash. A high and rising one means profit is leaning on items that aren't money yet." },
      { h: "What the research says" },
      { p: "In 1996, Professor Richard Sloan published a study showing that companies with high accruals tended to have worse stock returns in subsequent years than those with low accruals. His explanation: investors focus on earnings and don't properly distinguish the part that is cash from the part that isn't. Since then, earnings quality has been a classic factor in analysis." },
      { h: "Concrete signs" },
      { ul: [
        "Receivables growing faster than sales.",
        "Changes in accounting policy: longer useful lives, smaller provisions.",
        "\"Adjusted\" earnings that exclude supposedly one-off costs every single year.",
        "Revenue recognised up front on multi-year contracts."
      ]},
      { note: "None of these signs proves anything on its own. They're questions to take to the notes of the annual report, where companies explain their estimates." }
    ]
  }
};

/* ------------------------------------------------------------------- 33 */
window.FARLAZ_ARTICLES["riesgo-de-secuencia"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Mientras ahorras y no sacas dinero, el orden de los años buenos y malos no cambia el resultado final. Si la cartera sube un 20% y luego cae un 10%, terminas igual que si primero cae un 10% y luego sube un 20%. La multiplicación es conmutativa. Pero en cuanto empiezas a retirar dinero, esa propiedad desaparece." },
      { h: "El ejemplo" },
      { p: "Dos personas se jubilan con 500.000 dólares y retiran 30.000 al año. Las dos obtienen exactamente las mismas rentabilidades durante diez años, con una media del 6%, pero en orden inverso: una tiene los años buenos al principio; la otra, al final." },
      { table: {
        head: ["Ejemplo construido", "Años buenos primero", "Años malos primero"],
        rows: [
          ["Capital inicial", "500.000", "500.000"],
          ["Retiro anual", "30.000", "30.000"],
          ["Rentabilidad media", "6%", "6%"],
          ["<strong>Capital tras 10 años</strong>", "<strong>~478.000</strong>", "<strong>~337.000</strong>"],
          ["Sin retiros, para comparar", "~813.000", "~813.000"]
        ]
      }},
      { p: "Sin retiros, las dos carteras terminan en el mismo sitio. Con retiros, la diferencia es de más de 140.000 dólares. La razón: quien sufre una caída al principio vende activos a precios bajos para vivir, y esas unidades ya no están cuando llega la recuperación." },
      { key: "El riesgo de secuencia es mayor en los años justo antes y justo después de empezar a retirar dinero. Es cuando más capital tienes expuesto y menos tiempo para recuperarte." },
      { h: "Cómo se gestiona" },
      { ul: [
        "Reducir gradualmente el riesgo en los años cercanos a la jubilación, no de golpe el día anterior.",
        "Tener entre uno y tres años de gastos en activos de bajo riesgo para no vender acciones en una caída.",
        "Retiros flexibles: gastar algo menos en los años malos tiene un efecto enorme a largo plazo.",
        "Mantener una parte en acciones: una jubilación puede durar treinta años, y la inflación también es un riesgo."
      ]},
      { note: "Este riesgo no aplica solo a la jubilación. Cualquier plan que dependa de retirar dinero periódicamente de una cartera, como pagar una universidad con lo invertido, tiene la misma vulnerabilidad." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "While you're saving and not withdrawing, the order of good and bad years doesn't change the end result. If the portfolio rises 20% then falls 10%, you end up in the same place as if it falls 10% and then rises 20%. Multiplication is commutative. But as soon as you start withdrawing money, that property disappears." },
      { h: "The example" },
      { p: "Two people retire with 500,000 dollars and withdraw 30,000 a year. Both get exactly the same returns over ten years, averaging 6%, but in reverse order: one has the good years first; the other, last." },
      { table: {
        head: ["Constructed example", "Good years first", "Bad years first"],
        rows: [
          ["Starting capital", "500,000", "500,000"],
          ["Annual withdrawal", "30,000", "30,000"],
          ["Average return", "6%", "6%"],
          ["<strong>Capital after 10 years</strong>", "<strong>~478,000</strong>", "<strong>~337,000</strong>"],
          ["No withdrawals, for comparison", "~813,000", "~813,000"]
        ]
      }},
      { p: "Without withdrawals, both portfolios finish in the same place. With withdrawals, the gap is more than 140,000 dollars. The reason: someone hit by a fall early on sells assets at low prices to live, and those units aren't there when the recovery comes." },
      { key: "Sequence risk is highest in the years just before and just after you start withdrawing. That's when you have the most capital exposed and the least time to recover." },
      { h: "How it's managed" },
      { ul: [
        "Reduce risk gradually in the years approaching retirement, not all at once the day before.",
        "Hold one to three years of spending in low-risk assets so you don't sell shares in a downturn.",
        "Flexible withdrawals: spending a bit less in bad years has a huge long-run effect.",
        "Keep a share in equities: a retirement can last thirty years, and inflation is a risk too."
      ]},
      { note: "This risk isn't only about retirement. Any plan that relies on drawing money regularly from a portfolio, such as paying for university from investments, has the same vulnerability." }
    ]
  }
};

/* ------------------------------------------------------------------- 34 */
window.FARLAZ_ARTICLES["riesgo-pais-y-diferenciales"] = {
  es: {
    author: A, disclosure: GEN_ES,
    body: [
      { p: "Cuando un país emergente emite deuda en dólares, los inversores le exigen un rendimiento mayor que el de un bono del Tesoro de Estados Unidos del mismo plazo. Esa diferencia es el diferencial soberano, o riesgo país. Se mide en puntos básicos: 100 puntos básicos equivalen a un punto porcentual." },
      { h: "Cómo se lee" },
      { p: "Si el Tesoro a diez años rinde un 4% y el bono de un país en dólares al mismo plazo rinde un 6,5%, su diferencial es de 250 puntos básicos. Ese 2,5% extra es lo que el mercado pide por asumir el riesgo de que ese país no pague, pague tarde o reestructure su deuda." },
      { p: "La referencia más usada para la región es la familia de índices EMBI de JP Morgan, que mide el diferencial medio de la deuda en dólares de cada país emergente." },
      { key: "El diferencial es una opinión del mercado, en tiempo real, sobre la solvencia de un país. Se mueve mucho más rápido que las calificaciones de las agencias." },
      { h: "Qué lo mueve" },
      { ul: [
        "Las finanzas públicas: déficit, nivel de deuda y capacidad de pagarla.",
        "La política: elecciones, reformas o crisis institucionales.",
        "Las materias primas, en países que dependen de exportarlas.",
        "El contexto global: cuando los inversores huyen del riesgo, los diferenciales de todos los emergentes suben a la vez, aunque nada haya cambiado dentro de cada país.",
        "Las calificaciones crediticias: perder el grado de inversión obliga a muchos fondos a vender, lo que puede ampliar el diferencial de golpe."
      ]},
      { h: "Por qué te afecta aunque no tengas bonos" },
      { p: "El costo de financiarse del Estado es el suelo del costo de financiarse de todos los demás. Si el diferencial de tu país sube, los bancos locales pagan más por su financiación externa, y eso termina en tasas más altas para hipotecas, préstamos de empresas y tarjetas. En una economía dolarizada como Panamá, donde no hay tasa de un banco central local que compense, ese canal pesa todavía más." },
      { note: "Para seguir el riesgo país de un vistazo, compara el rendimiento del bono del país en dólares con el del Tesoro estadounidense del mismo plazo. La diferencia, y sobre todo su tendencia, cuenta mucho." }
    ]
  },
  en: {
    author: A, disclosure: GEN_EN,
    body: [
      { p: "When an emerging country issues debt in dollars, investors demand a higher yield than on a US Treasury of the same maturity. That gap is the sovereign spread, or country risk. It's measured in basis points: 100 basis points equal one percentage point." },
      { h: "How to read it" },
      { p: "If the ten-year Treasury yields 4% and a country's ten-year dollar bond yields 6.5%, its spread is 250 basis points. That extra 2.5% is what the market asks for taking the risk that the country won't pay, will pay late or will restructure its debt." },
      { p: "The most widely used reference for the region is JP Morgan's EMBI family of indices, which tracks the average spread on each emerging country's dollar debt." },
      { key: "The spread is the market's real-time opinion of a country's creditworthiness. It moves much faster than agency ratings." },
      { h: "What moves it" },
      { ul: [
        "Public finances: deficits, debt levels and the capacity to service them.",
        "Politics: elections, reforms or institutional crises.",
        "Commodities, for countries that depend on exporting them.",
        "Global mood: when investors flee risk, spreads for every emerging market widen together, even if nothing has changed inside each country.",
        "Credit ratings: losing investment grade forces many funds to sell, which can widen the spread abruptly."
      ]},
      { h: "Why it affects you even without bonds" },
      { p: "The state's borrowing cost is the floor for everyone else's. If your country's spread rises, local banks pay more for their external funding, and that ends up as higher rates on mortgages, business loans and cards. In a dollarised economy like Panama, with no local central bank rate to offset it, that channel matters even more." },
      { note: "To track country risk at a glance, compare the yield on the country's dollar bond with the US Treasury of the same maturity. The gap, and above all its trend, says a lot." }
    ]
  }
};

/* ------------------------------------------------------------------- 35 */
window.FARLAZ_ARTICLES["ventaja-competitiva-roic"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "En la teoría económica, los beneficios extraordinarios atraen competencia, y la competencia los erosiona hasta que el negocio gana lo justo para cubrir su costo de capital. Una empresa con una ventaja competitiva real, lo que Warren Buffett llama un foso (moat), es la que consigue resistir ese proceso durante muchos años. La pregunta es cómo se ve eso en los números." },
      { h: "El ROIC" },
      { p: "La rentabilidad sobre el capital invertido mide cuánto beneficio operativo después de impuestos genera la empresa por cada dólar invertido en el negocio, sumando el que pusieron los accionistas y el que prestaron los acreedores." },
      { p: "ROIC = beneficio operativo después de impuestos ÷ (patrimonio + deuda neta). A diferencia del ROE, no se infla con deuda, porque la deuda está en el denominador." },
      { h: "La comparación que importa" },
      { p: "Un ROIC solo tiene sentido frente al costo del capital, que se suele estimar con el WACC (costo medio ponderado de capital). Si una empresa obtiene un 15% sobre su capital y ese capital le cuesta un 9%, cada dólar que reinvierte crea valor. Si obtiene un 7% con un costo del 9%, crecer destruye valor, aunque los beneficios suban." },
      { table: {
        head: ["Ejemplo construido", "Empresa A", "Empresa B"],
        rows: [
          ["ROIC medio a 10 años", "18%", "7%"],
          ["Costo del capital estimado", "9%", "9%"],
          ["Diferencial", "+9 puntos", "-2 puntos"],
          ["Efecto de crecer", "Crea valor", "Destruye valor"]
        ]
      }},
      { key: "Un ROIC alto un año puede ser suerte o ciclo. Un ROIC muy por encima del costo de capital durante una década casi siempre indica una ventaja que los competidores no han logrado copiar." },
      { h: "De dónde vienen los fosos" },
      { ul: [
        "Marca: clientes que pagan más por el nombre.",
        "Costos de cambio: dejar el producto es caro o incómodo, como en mucho software empresarial.",
        "Efectos de red: el producto vale más cuantos más usuarios tiene.",
        "Ventajas de costo: escala, ubicación o procesos que nadie iguala.",
        "Activos intangibles: patentes, licencias o concesiones."
      ]},
      { note: "Cuando mires el ROIC, mira también la estabilidad. Una empresa con un ROIC del 15% cada año durante diez años suele ser mejor señal que otra que alterna entre 30% y 0%." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "In economic theory, outsized profits attract competition, and competition erodes them until the business earns just enough to cover its cost of capital. A company with a real competitive advantage, what Warren Buffett calls a moat, is one that resists that process for many years. The question is what that looks like in the numbers." },
      { h: "ROIC" },
      { p: "Return on invested capital measures how much after-tax operating profit a company generates for every dollar invested in the business, counting both what shareholders put in and what lenders provided." },
      { p: "ROIC = after-tax operating profit ÷ (equity + net debt). Unlike ROE, it can't be inflated with debt, because debt sits in the denominator." },
      { h: "The comparison that matters" },
      { p: "ROIC only means something against the cost of capital, usually estimated with WACC (weighted average cost of capital). If a company earns 15% on its capital and that capital costs 9%, every dollar it reinvests creates value. If it earns 7% with a 9% cost, growth destroys value, even as profits rise." },
      { table: {
        head: ["Constructed example", "Company A", "Company B"],
        rows: [
          ["Average ROIC over 10 years", "18%", "7%"],
          ["Estimated cost of capital", "9%", "9%"],
          ["Spread", "+9 points", "-2 points"],
          ["Effect of growing", "Creates value", "Destroys value"]
        ]
      }},
      { key: "A high ROIC in one year can be luck or the cycle. A ROIC well above the cost of capital for a decade almost always points to an advantage competitors haven't managed to copy." },
      { h: "Where moats come from" },
      { ul: [
        "Brand: customers who pay more for the name.",
        "Switching costs: leaving the product is expensive or awkward, as with much enterprise software.",
        "Network effects: the product is worth more the more users it has.",
        "Cost advantages: scale, location or processes nobody matches.",
        "Intangible assets: patents, licences or concessions."
      ]},
      { note: "When you look at ROIC, look at its stability too. A company earning 15% every year for ten years is usually a better sign than one swinging between 30% and 0%." }
    ]
  }
};

})();
