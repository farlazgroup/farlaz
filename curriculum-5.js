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
  lessons: [
    {
      id: "opciones",
      minutes: 9,
      es: {
        title: "Opciones: el derecho y la obligación",
        body: [
          { p: "Un derivado es un contrato cuyo valor depende del precio de otra cosa. No posees esa cosa: posees un acuerdo referido a ella. La opción es el derivado más importante de entender, porque es el único cuyo comprador y cuyo vendedor asumen riesgos de naturaleza distinta." },
          { h: "Los cuatro elementos de toda opción" },
          { ul: [
            "<strong>El subyacente.</strong> El activo al que se refiere el contrato: una acción, un índice, una divisa, una materia prima.",
            "<strong>El precio de ejercicio.</strong> El precio fijado al que se podrá comprar o vender el subyacente. También llamado strike.",
            "<strong>El vencimiento.</strong> La fecha en la que el contrato deja de existir. Una opción tiene fecha de caducidad, y ese es su rasgo más determinante.",
            "<strong>La prima.</strong> Lo que el comprador paga al vendedor por el contrato. Se paga siempre, se ejerza la opción o no."
          ]},
          { h: "La asimetría que lo define todo" },
          { p: "El comprador de una opción adquiere un <strong>derecho</strong>: puede ejercerlo o dejarlo pasar. Su pérdida máxima es la prima que pagó, y no puede perder más aunque el mercado se mueva de la forma más adversa imaginable." },
          { p: "El vendedor de una opción asume una <strong>obligación</strong>: si el comprador ejerce, tiene que cumplir. Su ganancia máxima es la prima que cobró, y su pérdida potencial puede ser muy superior a esa cantidad." },
          { key: "El comprador conoce su pérdida máxima el día que compra. El vendedor conoce su ganancia máxima el día que vende. Son posiciones opuestas y con perfiles de riesgo que no se parecen: vender opciones es cobrar poco muchas veces a cambio de poder perder mucho una vez." },
          { h: "De qué se compone la prima" },
          { table: {
            head: ["Componente", "Qué recoge", "Cómo evoluciona"],
            rows: [
              ["Valor intrínseco", "Lo que valdría la opción si venciera hoy", "Depende solo de la distancia entre el precio actual y el de ejercicio"],
              ["Valor temporal", "Lo que se paga por el tiempo que queda", "Se reduce cada día y se acelera al acercarse el vencimiento"]
            ]
          }},
          { p: "Además del tiempo, hay un factor que casi siempre sorprende a quien empieza: la volatilidad esperada del subyacente. Cuanto más se espera que oscile, más cara es la opción, porque aumenta la probabilidad de que llegue a interesar ejercerla. Esto significa que se puede acertar con la dirección del precio y aun así perder dinero, si la volatilidad esperada cae después de comprar." },
          { note: "Es la fuente de frustración más común entre quienes empiezan con opciones: acertaron el movimiento, pero la opción valía menos que cuando la compraron. El precio de una opción no depende únicamente de hacia dónde va el subyacente, sino también de cuánto tiempo queda y de cuánta oscilación descuenta el mercado." },
          { h: "Por qué el tiempo trabaja en contra del comprador" },
          { p: "Una opción es un activo que se consume. Cada día que pasa sin que el subyacente se mueva, el valor temporal disminuye y la opción vale un poco menos. El comprador necesita que el movimiento ocurra, que sea suficientemente grande y que ocurra antes de una fecha concreta. Las tres condiciones a la vez." },
          { p: "Esa es la razón de fondo por la que comprar opciones de forma sistemática no es una estrategia sencilla, aunque la pérdida esté acotada. La acotación de la pérdida no impide que las pérdidas pequeñas se acumulen una tras otra." },
          { h: "Advertencia previa al resto del módulo" },
          { p: "Los derivados son instrumentos legítimos, diseñados originalmente para transferir riesgo entre quienes lo tienen y quienes están dispuestos a asumirlo. También son el mecanismo con el que más rápido se pierde dinero cuando se usa sin entenderlo. Este módulo explica cómo funcionan; no propone operar con ellos. Farlaz no es asesor registrado ni emite recomendaciones." },
          { quiz: {
            q: "Un inversor compra una opción pagando una prima. El subyacente se mueve en su contra de forma extrema. ¿Cuál es su pérdida máxima?",
            options: [
              "La prima pagada, sin importar cuánto se mueva el subyacente",
              "La diferencia entre el precio de ejercicio y el precio final",
              "Ilimitada, porque el subyacente puede caer indefinidamente"
            ],
            answer: 0,
            explain: "El comprador tiene un derecho, no una obligación: si no le conviene ejercer, simplemente deja vencer el contrato. Lo pagado es lo perdido. Quien sí queda expuesto a una pérdida muy superior a lo cobrado es el vendedor de la opción."
          }}
        ]
      },
      en: {
        title: "Options: the right and the obligation",
        body: [
          { p: "A derivative is a contract whose value depends on the price of something else. You don't own that thing: you own an agreement referring to it. The option is the derivative most worth understanding, because it is the only one where buyer and seller take on risks of a different nature." },
          { h: "The four elements of every option" },
          { ul: [
            "<strong>The underlying.</strong> The asset the contract refers to: a share, an index, a currency, a commodity.",
            "<strong>The strike price.</strong> The fixed price at which the underlying may be bought or sold.",
            "<strong>The expiry.</strong> The date the contract ceases to exist. An option has a shelf life, and that is its most decisive feature.",
            "<strong>The premium.</strong> What the buyer pays the seller for the contract. It is paid regardless of whether the option is ever exercised."
          ]},
          { h: "The asymmetry that defines everything" },
          { p: "The buyer of an option acquires a <strong>right</strong>: they can exercise it or let it lapse. Their maximum loss is the premium paid, and they cannot lose more however adversely the market moves." },
          { p: "The seller of an option takes on an <strong>obligation</strong>: if the buyer exercises, they must deliver. Their maximum gain is the premium received, and their potential loss can be far larger than that amount." },
          { key: "The buyer knows their maximum loss on the day they buy. The seller knows their maximum gain on the day they sell. These are opposite positions with risk profiles that look nothing alike: selling options means collecting a little many times in exchange for the chance of losing a lot once." },
          { h: "What the premium is made of" },
          { table: {
            head: ["Component", "What it captures", "How it evolves"],
            rows: [
              ["Intrinsic value", "What the option would be worth if it expired today", "Depends only on the distance between current price and strike"],
              ["Time value", "What is paid for the time remaining", "Shrinks every day and accelerates as expiry approaches"]
            ]
          }},
          { p: "Beyond time, one factor nearly always surprises beginners: the expected volatility of the underlying. The more it is expected to swing, the dearer the option, because the chance of it becoming worth exercising rises. This means you can be right about direction and still lose money, if expected volatility falls after you buy." },
          { note: "It is the most common source of frustration among people starting with options: they called the move correctly, yet the option was worth less than when they bought it. An option's price doesn't depend only on where the underlying goes, but also on how much time is left and how much movement the market is pricing in." },
          { h: "Why time works against the buyer" },
          { p: "An option is an asset that decays. Every day that passes without the underlying moving, time value falls and the option is worth slightly less. The buyer needs the move to happen, to be large enough, and to happen before a specific date. All three at once." },
          { p: "That is the underlying reason why systematically buying options is not a simple strategy, even though the loss is capped. Capping the loss does nothing to stop small losses stacking up one after another." },
          { h: "A warning before the rest of the module" },
          { p: "Derivatives are legitimate instruments, designed originally to transfer risk from those holding it to those willing to take it. They are also the fastest mechanism for losing money when used without understanding. This module explains how they work; it does not propose trading them. Farlaz is not a registered adviser and issues no recommendations." },
          { quiz: {
            q: "An investor buys an option, paying a premium. The underlying moves extremely against them. What is their maximum loss?",
            options: [
              "The premium paid, however far the underlying moves",
              "The difference between the strike price and the final price",
              "Unlimited, because the underlying can fall indefinitely"
            ],
            answer: 0,
            explain: "The buyer holds a right, not an obligation: if exercising doesn't suit them, they simply let the contract lapse. What was paid is what is lost. The party exposed to a loss far larger than what they received is the option seller."
          }}
        ]
      }
    },
    {
      id: "calls",
      minutes: 8,
      es: {
        title: "Calls: el derecho a comprar",
        body: [
          { p: "Una call da a su comprador el derecho a comprar el subyacente a un precio fijado, hasta una fecha determinada. Quien la vende asume la obligación de entregarlo a ese precio si el comprador lo exige." },
          { h: "El resultado al vencimiento" },
          { p: "El cálculo es sencillo y conviene saber hacerlo. Al vencimiento, el valor de la call es la diferencia entre el precio del subyacente y el precio de ejercicio, si esa diferencia es positiva; y cero si es negativa. El resultado del comprador es ese valor menos la prima que pagó." },
          { table: {
            head: ["Precio al vencimiento", "Valor de la call", "Resultado del comprador", "Resultado del vendedor"],
            rows: [
              ["90", "0", "−5 (la prima)", "+5"],
              ["100", "0", "−5", "+5"],
              ["105", "5", "0 (punto de equilibrio)", "0"],
              ["120", "20", "+15", "−15"],
              ["150", "50", "+45", "−45"]
            ]
          }},
          { note: "Cifras construidas para ilustrar el mecanismo: precio de ejercicio 100, prima 5. No corresponden a ningún activo real ni a ninguna cotización concreta." },
          { key: "El punto de equilibrio del comprador no es el precio de ejercicio: es el precio de ejercicio más la prima. Que el subyacente supere el strike no significa ganar dinero, solo significa que la opción ha dejado de valer cero." },
          { h: "Las dos formas de vender una call" },
          { ul: [
            "<strong>Con el subyacente en cartera.</strong> Quien ya posee las acciones y vende una call sobre ellas cobra la prima y acepta desprenderse de sus acciones al precio de ejercicio si el mercado lo supera. Su riesgo no es de pérdida directa sino de renuncia: se queda fuera de la subida por encima del strike.",
            "<strong>Sin poseer el subyacente.</strong> Quien vende una call sin tener las acciones cobra la prima y queda obligado a entregar unas acciones que tendría que comprar al precio que haya. Como el precio de una acción no tiene techo teórico, la pérdida potencial tampoco lo tiene."
          ]},
          { p: "Esa segunda posición es la única de todo el curso en la que la pérdida no está acotada de ninguna forma. Aparece en muchos manuales presentada como una manera de generar ingresos, y es la operación que con más frecuencia arruina a quien no ha entendido el instrumento." },
          { h: "Para qué se utilizan las calls" },
          { p: "El uso legítimo más claro es reservar un precio. Una empresa que necesitará una materia prima dentro de seis meses puede comprar calls sobre ella y fijar así un coste máximo: si el precio se dispara, ejerce; si baja, deja vencer el contrato y compra en el mercado, habiendo perdido solo la prima. Ha comprado un seguro contra la subida." },
          { p: "El uso especulativo es distinto: comprar calls para aprovechar el apalancamiento. Con una prima pequeña se controla una cantidad grande de subyacente, lo que multiplica el resultado porcentual en las dos direcciones. Que la pérdida esté acotada a la prima no la hace pequeña: es habitual perder el cien por cien de lo invertido en una operación que en el subyacente habría sido una caída leve." },
          { quiz: {
            q: "Un inversor compra una call con precio de ejercicio 100 pagando una prima de 5. Al vencimiento el subyacente cotiza a 103. ¿Cuál es su resultado?",
            options: [
              "Pierde 2: la opción vale 3 y pagó 5 por ella",
              "Gana 3, porque el precio superó el de ejercicio",
              "No gana ni pierde, porque la opción termina con valor positivo"
            ],
            answer: 0,
            explain: "La opción vale 3 al vencimiento, así que recupera 3 de los 5 que pagó y pierde 2. Le conviene ejercer, porque recuperar algo es mejor que nada, pero la operación sigue siendo perdedora. El punto de equilibrio estaba en 105."
          }}
        ]
      },
      en: {
        title: "Calls: the right to buy",
        body: [
          { p: "A call gives its buyer the right to buy the underlying at a fixed price, up to a set date. Whoever sells it takes on the obligation to deliver at that price if the buyer demands it." },
          { h: "The payoff at expiry" },
          { p: "The arithmetic is simple and worth being able to do. At expiry, the call is worth the difference between the underlying's price and the strike, if that difference is positive, and zero if it is negative. The buyer's result is that value minus the premium paid." },
          { table: {
            head: ["Price at expiry", "Call value", "Buyer's result", "Seller's result"],
            rows: [
              ["90", "0", "−5 (the premium)", "+5"],
              ["100", "0", "−5", "+5"],
              ["105", "5", "0 (break-even)", "0"],
              ["120", "20", "+15", "−15"],
              ["150", "50", "+45", "−45"]
            ]
          }},
          { note: "Constructed figures to illustrate the mechanism: strike 100, premium 5. They correspond to no real asset and no actual quoted price." },
          { key: "The buyer's break-even is not the strike: it is the strike plus the premium. The underlying passing the strike doesn't mean making money, only that the option has stopped being worth zero." },
          { h: "The two ways to sell a call" },
          { ul: [
            "<strong>Holding the underlying.</strong> Someone who already owns the shares and sells a call on them collects the premium and accepts parting with those shares at the strike if the market goes above it. Their risk isn't direct loss but forgone gain: they miss the rise above the strike.",
            "<strong>Without owning the underlying.</strong> Someone selling a call without the shares collects the premium and is obliged to deliver shares they would have to buy at whatever price prevails. Since a share price has no theoretical ceiling, neither does the potential loss."
          ]},
          { p: "That second position is the only one in this entire course where the loss is capped in no way at all. It appears in many guides presented as a way to generate income, and it is the trade that most often ruins people who haven't understood the instrument." },
          { h: "What calls are used for" },
          { p: "The clearest legitimate use is reserving a price. A company that will need a raw material in six months can buy calls on it and fix a maximum cost: if the price spikes it exercises; if it falls it lets the contract lapse and buys in the market, having lost only the premium. It bought insurance against the rise." },
          { p: "Speculative use is different: buying calls to exploit the leverage. A small premium controls a large amount of underlying, which multiplies the percentage result in both directions. That the loss is capped at the premium doesn't make it small: losing one hundred per cent of the amount invested is routine on a move that in the underlying would have been a mild dip." },
          { quiz: {
            q: "An investor buys a call struck at 100 for a premium of 5. At expiry the underlying trades at 103. What is their result?",
            options: [
              "They lose 2: the option is worth 3 and they paid 5 for it",
              "They gain 3, because the price exceeded the strike",
              "They break even, because the option ends with positive value"
            ],
            answer: 0,
            explain: "The option is worth 3 at expiry, so they recover 3 of the 5 paid and lose 2. Exercising is still worthwhile, since recovering something beats nothing, but the trade is a loser. Break-even was at 105."
          }}
        ]
      }
    },
    {
      id: "puts",
      minutes: 8,
      es: {
        title: "Puts: el derecho a vender",
        body: [
          { p: "Una put da a su comprador el derecho a vender el subyacente a un precio fijado, hasta una fecha determinada. Es la figura simétrica de la call, y su uso más común no es especulativo sino de protección." },
          { h: "El resultado al vencimiento" },
          { table: {
            head: ["Precio al vencimiento", "Valor de la put", "Resultado del comprador"],
            rows: [
              ["120", "0", "−4 (la prima)"],
              ["100", "0", "−4"],
              ["96", "4", "0 (punto de equilibrio)"],
              ["80", "20", "+16"],
              ["60", "40", "+36"]
            ]
          }},
          { note: "Cifras construidas: precio de ejercicio 100, prima 4. No corresponden a ningún activo real." },
          { h: "La put como seguro" },
          { p: "Alguien que posee un activo y compra una put sobre él ha fijado un precio mínimo de venta. Si el activo se desploma, la pérdida queda limitada a la distancia entre el precio actual y el de ejercicio, más la prima pagada. La estructura es exactamente la de una póliza de seguro: se paga una prima, se cubre un siniestro, y si el siniestro no ocurre la prima no se recupera." },
          { key: "El coste del seguro es la parte que se olvida. Comprar protección de forma continuada tiene un precio recurrente que se descuenta del resultado todos los años, incluidos los años en que no pasa nada, que son la mayoría." },
          { h: "Por qué la protección es cara justo cuando se necesita" },
          { p: "El precio de una put depende de la volatilidad esperada. Cuando el mercado ya está cayendo y el miedo es alto, la volatilidad esperada se dispara y las puts se encarecen de forma notable. Comprar protección después de que empiece la caída suele costar varias veces lo que habría costado antes." },
          { p: "Es la misma lógica que en cualquier seguro: nadie vende barato un seguro contra incendios cuando ya se ve el humo. Quien quiere protegerse tiene que pagar la prima cuando parece innecesaria, que es precisamente cuando cuesta más justificarlo." },
          { h: "Vender puts" },
          { p: "El vendedor de una put cobra la prima y se obliga a comprar el subyacente al precio de ejercicio si el comprador ejerce. Su pérdida máxima ocurre si el subyacente cae a cero: tendría que comprar a 100 algo que no vale nada." },
          { p: "Se presenta a veces como una forma de comprar barato: si baja, adquieres el activo al precio que querías; si no baja, te quedas la prima. La descripción es correcta y omite lo esencial: acabas comprando precisamente en los escenarios en que el activo se ha deteriorado, y no compras en aquellos en los que la tesis estaba funcionando." },
          { note: "Una forma útil de verlo: vender puts es cobrar por asumir el riesgo de caída de otro. Es un negocio legítimo, es lo que hacen las aseguradoras, y funciona con capital suficiente, diversificación y precios adecuados. Con una posición concentrada y sin colchón, es la misma actividad sin ninguno de los elementos que la hacen viable." },
          { quiz: {
            q: "Un inversor con acciones compra puts para protegerse y durante tres años no hay ninguna caída relevante. ¿Cuál es el resultado de esa decisión?",
            options: [
              "Ha pagado las primas sin recibir nada a cambio, igual que en un seguro sin siniestro",
              "Ha perdido dinero por un error de planteamiento",
              "Recupera las primas al vencimiento porque las opciones no llegaron a ejercerse"
            ],
            answer: 0,
            explain: "La prima se paga por la cobertura, no por el resultado. Un seguro que no se usa no es un error: es el escenario esperado y deseable. Lo que sí conviene calcular por adelantado es cuánto resta al resultado ese coste repetido año tras año."
          }}
        ]
      },
      en: {
        title: "Puts: the right to sell",
        body: [
          { p: "A put gives its buyer the right to sell the underlying at a fixed price, up to a set date. It is the mirror image of a call, and its most common use is not speculative but protective." },
          { h: "The payoff at expiry" },
          { table: {
            head: ["Price at expiry", "Put value", "Buyer's result"],
            rows: [
              ["120", "0", "−4 (the premium)"],
              ["100", "0", "−4"],
              ["96", "4", "0 (break-even)"],
              ["80", "20", "+16"],
              ["60", "40", "+36"]
            ]
          }},
          { note: "Constructed figures: strike 100, premium 4. They correspond to no real asset." },
          { h: "The put as insurance" },
          { p: "Someone holding an asset who buys a put on it has fixed a minimum selling price. If the asset collapses, the loss is limited to the gap between the current price and the strike, plus the premium paid. The structure is exactly an insurance policy: you pay a premium, a claim is covered, and if no claim arises the premium is not returned." },
          { key: "The cost of insurance is the part people forget. Buying protection continuously carries a recurring price deducted from the result every year, including the years when nothing happens, which is most of them." },
          { h: "Why protection is expensive exactly when it is needed" },
          { p: "A put's price depends on expected volatility. When the market is already falling and fear is high, expected volatility spikes and puts become markedly dearer. Buying protection after the fall has started typically costs several times what it would have cost before." },
          { p: "It is the logic of any insurance: nobody sells cheap fire cover once the smoke is visible. Anyone wanting protection has to pay the premium when it looks unnecessary, which is precisely when it is hardest to justify." },
          { h: "Selling puts" },
          { p: "The seller of a put collects the premium and is obliged to buy the underlying at the strike if the buyer exercises. Their maximum loss occurs if the underlying goes to zero: they would have to pay 100 for something worth nothing." },
          { p: "It is sometimes presented as a way to buy cheaply: if it falls, you acquire the asset at the price you wanted; if it doesn't, you keep the premium. The description is accurate and omits the essential part: you end up buying precisely in the scenarios where the asset has deteriorated, and you don't buy in the ones where the thesis was working." },
          { note: "A useful way to see it: selling puts is being paid to take on someone else's downside risk. It is a legitimate business, it is what insurers do, and it works with enough capital, diversification and adequate pricing. With a concentrated position and no buffer, it is the same activity without any of the elements that make it viable." },
          { quiz: {
            q: "An investor holding shares buys puts for protection, and for three years no meaningful fall occurs. What is the result of that decision?",
            options: [
              "They paid the premiums and received nothing, exactly as with insurance and no claim",
              "They lost money through a flawed approach",
              "They recover the premiums at expiry because the options were never exercised"
            ],
            answer: 0,
            explain: "The premium buys the cover, not the outcome. Insurance that goes unused is not a mistake: it is the expected and desirable scenario. What is worth calculating in advance is how much that repeated cost subtracts from the result year after year."
          }}
        ]
      }
    },
    {
      id: "futuros",
      minutes: 8,
      es: {
        title: "Futuros",
        body: [
          { p: "Un futuro es un contrato para comprar o vender un activo en una fecha futura a un precio acordado hoy. A diferencia de la opción, aquí no hay derecho ni prima: las dos partes quedan obligadas. Quien compra tendrá que comprar y quien vende tendrá que vender, ocurra lo que ocurra." },
          { h: "Qué lo distingue de un acuerdo privado" },
          { ul: [
            "<strong>Está estandarizado.</strong> La cantidad, la calidad, la fecha y la forma de liquidación las fija el mercado, no las partes. Eso permite que los contratos sean intercambiables entre sí.",
            "<strong>Cotiza en un mercado organizado.</strong> Se puede cerrar la posición en cualquier momento vendiendo un contrato idéntico, sin necesidad de esperar al vencimiento.",
            "<strong>Hay una cámara de compensación en medio.</strong> Nadie depende de que la otra parte cumpla: la cámara se interpone entre ambas y garantiza la liquidación."
          ]},
          { h: "Las garantías y el ajuste diario" },
          { p: "Para operar un futuro no se paga el valor del contrato, sino un depósito de garantía que suele ser una fracción pequeña de ese valor. Con ese depósito se controla la totalidad del subyacente, y de ahí viene el apalancamiento." },
          { p: "Cada día, la cámara calcula la variación del contrato y abona o carga esa cantidad en la cuenta. No se espera al vencimiento para saber quién gana: el resultado se liquida a diario. Si el depósito cae por debajo del mínimo exigido, llega una reclamación de garantías adicionales que hay que atender de inmediato o la posición se cierra." },
          { key: "El apalancamiento no cambia el porcentaje que se mueve el activo: cambia lo que ese porcentaje representa sobre tu dinero. Un movimiento del 5% en el subyacente puede suponer un 50% del depósito. Y la reclamación de garantías llega en el peor momento posible, que es cuando la posición ya va en contra." },
          { h: "Ejemplo construido" },
          { table: {
            head: ["", "Valor del contrato", "Depósito", "Movimiento del subyacente", "Efecto sobre el depósito"],
            rows: [
              ["Posición compradora", "100.000", "10.000", "+5%", "+5.000 (+50%)"],
              ["Posición compradora", "100.000", "10.000", "−5%", "−5.000 (−50%)"],
              ["Posición compradora", "100.000", "10.000", "−10%", "−10.000 (depósito agotado)"]
            ]
          }},
          { note: "Cifras construidas para mostrar la mecánica del apalancamiento. Los porcentajes de garantía reales varían según el contrato, el mercado y las condiciones de volatilidad, y pueden elevarse sin previo aviso durante episodios de tensión." },
          { h: "Para qué existen" },
          { p: "Nacieron para que productores y compradores de materias primas pudieran fijar precios por adelantado. Un agricultor que vende su cosecha a futuro sabe cuánto va a ingresar y puede planificar; una industria que compra a futuro conoce su coste. Ninguno de los dos está apostando: los dos están eliminando incertidumbre de su negocio." },
          { p: "Hoy existen futuros sobre índices, tipos de interés, divisas y volatilidad, y una parte importante del volumen procede de participantes que no tienen ningún interés en el activo físico. Esa presencia aporta liquidez al mercado, que es lo que permite al agricultor encontrar contrapartida." },
          { quiz: {
            q: "¿Cuál es la diferencia fundamental entre comprar una call y comprar un futuro?",
            options: [
              "La call otorga un derecho con pérdida limitada a la prima; el futuro crea una obligación con pérdidas que pueden superar el depósito",
              "El futuro es más barato porque no hay que pagar prima",
              "La call vence y el futuro no tiene fecha de vencimiento"
            ],
            answer: 0,
            explain: "Ambos vencen, y el futuro no es barato: exige un depósito y liquida pérdidas a diario. La diferencia decisiva es la naturaleza del compromiso. El comprador de una call puede abandonar; el titular de un futuro no puede, y si el mercado se mueve en su contra tendrá que aportar más garantías o cerrar con pérdida."
          }}
        ]
      },
      en: {
        title: "Futures",
        body: [
          { p: "A future is a contract to buy or sell an asset on a future date at a price agreed today. Unlike an option, there is no right and no premium here: both parties are bound. The buyer will have to buy and the seller will have to sell, whatever happens." },
          { h: "What separates it from a private agreement" },
          { ul: [
            "<strong>It is standardised.</strong> Quantity, quality, date and settlement method are set by the exchange, not the parties. That is what makes contracts interchangeable.",
            "<strong>It trades on an organised market.</strong> A position can be closed at any time by trading an identical contract the other way, without waiting for expiry.",
            "<strong>A clearing house sits in the middle.</strong> Nobody depends on the other side performing: the clearing house steps between them and guarantees settlement."
          ]},
          { h: "Margin and daily settlement" },
          { p: "Trading a future doesn't require paying the contract's value, only a margin deposit that is usually a small fraction of it. That deposit controls the whole underlying, and that is where the leverage comes from." },
          { p: "Each day the clearing house calculates the contract's change and credits or debits that amount to the account. Nobody waits until expiry to find out who is winning: the result settles daily. If the deposit falls below the required minimum, a margin call arrives that must be met immediately or the position is closed out." },
          { key: "Leverage doesn't change the percentage the asset moves: it changes what that percentage represents against your money. A 5% move in the underlying can be 50% of the deposit. And the margin call arrives at the worst possible moment, which is when the position is already against you." },
          { h: "A constructed example" },
          { table: {
            head: ["", "Contract value", "Deposit", "Underlying move", "Effect on the deposit"],
            rows: [
              ["Long position", "100,000", "10,000", "+5%", "+5,000 (+50%)"],
              ["Long position", "100,000", "10,000", "−5%", "−5,000 (−50%)"],
              ["Long position", "100,000", "10,000", "−10%", "−10,000 (deposit wiped out)"]
            ]
          }},
          { note: "Constructed figures to show the mechanics of leverage. Real margin percentages vary by contract, by exchange and by volatility conditions, and can be raised without notice during stressed periods." },
          { h: "Why they exist" },
          { p: "They were created so commodity producers and buyers could fix prices in advance. A farmer selling the harvest forward knows what will come in and can plan; a manufacturer buying forward knows its cost. Neither is gambling: both are removing uncertainty from a business." },
          { p: "Today there are futures on indices, interest rates, currencies and volatility, and a large share of the volume comes from participants with no interest in the physical asset. That presence supplies liquidity to the market, which is what lets the farmer find a counterparty." },
          { quiz: {
            q: "What is the fundamental difference between buying a call and buying a future?",
            options: [
              "A call grants a right with loss capped at the premium; a future creates an obligation with losses that can exceed the deposit",
              "The future is cheaper because there is no premium to pay",
              "The call expires and the future has no expiry date"
            ],
            answer: 0,
            explain: "Both expire, and the future is not cheap: it requires margin and settles losses daily. The decisive difference is the nature of the commitment. A call buyer can walk away; a futures holder cannot, and if the market moves against them they must post more margin or close at a loss."
          }}
        ]
      }
    },
    {
      id: "forwards",
      minutes: 7,
      es: {
        title: "Forwards: el futuro hecho a medida",
        body: [
          { p: "Un forward es el mismo compromiso que un futuro —comprar o vender algo en una fecha concreta a un precio pactado hoy— pero acordado directamente entre dos partes, sin mercado organizado y sin cámara de compensación en medio." },
          { h: "Las diferencias que importan" },
          { table: {
            head: ["", "Futuro", "Forward"],
            rows: [
              ["Dónde se negocia", "Mercado organizado", "Acuerdo privado entre dos partes"],
              ["Condiciones", "Estandarizadas por el mercado", "A medida: importe, fecha y activo exactos"],
              ["Riesgo de contraparte", "Lo asume la cámara de compensación", "Lo asume cada parte frente a la otra"],
              ["Liquidación", "Diaria, con ajuste de garantías", "Al vencimiento, en un solo pago"],
              ["Salida anticipada", "Vendiendo un contrato idéntico", "Renegociando con la misma contraparte"]
            ]
          }},
          { key: "El forward compra precisión y paga con riesgo de contraparte. Si quien te debe el dinero no puede pagarlo el día del vencimiento, la cobertura que creías tener no existe. En un futuro ese riesgo lo absorbe la cámara; en un forward es tuyo." },
          { h: "El uso que explica su existencia" },
          { p: "Es el instrumento habitual de cobertura de divisa para empresas. Un importador que debe pagar una factura en dólares dentro de noventa días puede contratar hoy con su banco la compra de esos dólares a un tipo fijado. A partir de ese momento conoce su coste en moneda local, con independencia de lo que haga el tipo de cambio." },
          { p: "Ningún futuro estandarizado encaja con un importe irregular y una fecha concreta. El forward existe precisamente para eso: se ajusta al flujo real de caja de la empresa en lugar de obligarla a adaptarse al contrato." },
          { note: "En economías con historial de devaluaciones bruscas, esta cobertura tiene un valor evidente para cualquier negocio que compre en moneda extranjera y venda en moneda local. También tiene un precio, y ese precio recoge la diferencia de tipos de interés entre las dos monedas: cubrir una divisa con tipos muy altos frente a otra con tipos bajos resulta caro, y eso no es un abuso del banco sino aritmética." },
          { h: "Por qué el precio a plazo no es una previsión" },
          { p: "El tipo al que se contrata un forward de divisa no expresa lo que el banco cree que va a pasar. Se deduce de los tipos de interés de las dos monedas: si prestar en una renta más que prestar en la otra, el precio a plazo tiene que compensar esa diferencia, porque de lo contrario existiría una operación sin riesgo con beneficio garantizado." },
          { p: "Es una confusión frecuente. Que el mercado a plazo muestre una moneda más débil dentro de un año no significa que se espere una devaluación: significa que sus tipos de interés son más altos." },
          { h: "Cuándo falla" },
          { ul: [
            "<strong>Si la contraparte incumple.</strong> El riesgo no desaparece por estar documentado en un contrato.",
            "<strong>Si el flujo cubierto no se produce.</strong> Una empresa que cubre una venta que finalmente no ocurre se queda con una posición abierta que ya no cubre nada y sí genera resultado propio.",
            "<strong>Si hace falta salir antes.</strong> No hay mercado donde vender el contrato: hay que renegociar con la misma contraparte, en las condiciones que esta ofrezca."
          ]},
          { quiz: {
            q: "Una empresa contrata un forward para comprar divisa dentro de seis meses y el tipo de cambio acaba moviéndose a su favor. ¿Qué ha ocurrido?",
            options: [
              "Compra al tipo pactado, renunciando a la mejora: fijó su coste y eso incluye renunciar al escenario favorable",
              "Puede cancelar el contrato y comprar al tipo de mercado",
              "Ha cometido un error de cobertura que debería haber evitado"
            ],
            answer: 0,
            explain: "El forward obliga a las dos partes. Fijar un precio elimina la incertidumbre en ambas direcciones, no solo en la desfavorable. Una cobertura no busca acertar el tipo de cambio: busca que el resultado del negocio no dependa de él."
          }}
        ]
      },
      en: {
        title: "Forwards: the bespoke future",
        body: [
          { p: "A forward is the same commitment as a future — buy or sell something on a set date at a price agreed today — but arranged directly between two parties, with no organised market and no clearing house in between." },
          { h: "The differences that matter" },
          { table: {
            head: ["", "Future", "Forward"],
            rows: [
              ["Where it trades", "Organised exchange", "Private agreement between two parties"],
              ["Terms", "Standardised by the exchange", "Bespoke: exact amount, date and asset"],
              ["Counterparty risk", "Absorbed by the clearing house", "Each party carries it against the other"],
              ["Settlement", "Daily, with margin adjustments", "At expiry, in a single payment"],
              ["Early exit", "By trading an identical contract", "By renegotiating with the same counterparty"]
            ]
          }},
          { key: "A forward buys precision and pays with counterparty risk. If whoever owes you the money can't pay on the settlement date, the hedge you thought you had doesn't exist. In a future the clearing house absorbs that risk; in a forward it is yours." },
          { h: "The use that explains its existence" },
          { p: "It is the standard currency hedging instrument for companies. An importer facing a dollar invoice in ninety days can contract today with its bank to buy those dollars at a fixed rate. From that moment it knows its cost in local currency, whatever the exchange rate does." },
          { p: "No standardised future matches an irregular amount on a specific date. The forward exists precisely for that: it fits the company's real cash flow instead of forcing the company to fit the contract." },
          { note: "In economies with a history of abrupt devaluations, this hedge has obvious value for any business buying in foreign currency and selling in local currency. It also has a price, and that price reflects the interest rate difference between the two currencies: hedging a high-rate currency against a low-rate one is expensive, and that isn't the bank overcharging, it is arithmetic." },
          { h: "Why the forward price is not a forecast" },
          { p: "The rate at which a currency forward is struck doesn't express what the bank thinks will happen. It follows from the interest rates of the two currencies: if lending in one pays more than lending in the other, the forward price must offset that difference, because otherwise a risk-free trade with a guaranteed profit would exist." },
          { p: "This is a common confusion. A forward market showing a currency weaker in a year's time doesn't mean a devaluation is expected: it means its interest rates are higher." },
          { h: "Where it fails" },
          { ul: [
            "<strong>If the counterparty defaults.</strong> The risk doesn't disappear by being documented in a contract.",
            "<strong>If the hedged flow doesn't happen.</strong> A company hedging a sale that ultimately falls through is left with an open position that hedges nothing and does produce a result of its own.",
            "<strong>If you need to exit early.</strong> There is no market to sell the contract into: you renegotiate with the same counterparty, on whatever terms they offer."
          ]},
          { quiz: {
            q: "A company contracts a forward to buy currency in six months and the exchange rate ends up moving in its favour. What has happened?",
            options: [
              "It buys at the agreed rate, giving up the improvement: it fixed its cost, and that includes forgoing the favourable case",
              "It can cancel the contract and buy at the market rate",
              "It made a hedging error it should have avoided"
            ],
            answer: 0,
            explain: "A forward binds both sides. Fixing a price removes uncertainty in both directions, not just the adverse one. A hedge isn't trying to call the exchange rate: it is trying to make the business result independent of it."
          }}
        ]
      }
    },
    {
      id: "swaps",
      minutes: 8,
      es: {
        title: "Swaps: intercambiar flujos",
        body: [
          { p: "Un swap es un acuerdo para intercambiar una serie de pagos durante un período. No se intercambia el activo: se intercambian los flujos que ese activo genera. Es el derivado con más volumen del mundo y, paradójicamente, el que menos aparece en la conversación de un inversor particular, porque casi todo su uso es corporativo." },
          { h: "El caso más común: permuta de tipos de interés" },
          { p: "Una empresa tiene un préstamo a tipo variable y le preocupa que los tipos suban. Otra tiene un préstamo a tipo fijo y prefiere pagar variable. Acuerdan intercambiar los pagos de intereses: una pasa a pagar fijo y la otra variable, sin que ninguna toque el préstamo original con su banco." },
          { key: "El principal no cambia de manos: solo sirve para calcular los intereses. Por eso se le llama nocional. Los importes que se mueven son la diferencia entre lo que debe cada parte, no el capital." },
          { h: "Otros tipos habituales" },
          { ul: [
            "<strong>Swap de divisas.</strong> Se intercambian pagos denominados en monedas distintas. Lo usan empresas con ingresos en una moneda y deuda en otra, situación muy común en Latinoamérica.",
            "<strong>Swap de rendimiento total.</strong> Una parte paga el rendimiento completo de un activo y la otra paga un tipo de interés. Es el contrato con el que funcionan los ETFs de réplica sintética que vimos en el módulo de ETFs.",
            "<strong>Permuta de incumplimiento crediticio.</strong> Funciona como un seguro contra el impago de un emisor: se paga una cuota periódica y se cobra si el emisor incumple."
          ]},
          { h: "Por qué existen si parecen innecesarios" },
          { p: "La razón económica es que no todos los participantes acceden a los mismos mercados en las mismas condiciones. Una empresa puede tener financiación barata a tipo variable por su relación bancaria pero preferir la certeza del tipo fijo; otra puede estar en la situación inversa. El swap permite que cada una obtenga la estructura que quiere sin renunciar a la financiación que consiguió." },
          { p: "El swap de divisas resuelve un problema muy concreto y muy latinoamericano: una empresa que factura en moneda local y se ha endeudado en dólares tiene un desajuste que puede hundirla si la moneda se devalúa, aunque el negocio funcione perfectamente. El swap traslada ese desajuste a alguien dispuesto a asumirlo." },
          { h: "Dónde está el peligro" },
          { p: "El riesgo del swap no está en el nocional sino en la exposición acumulada frente a la contraparte a lo largo de la vida del contrato. Como se trata de acuerdos privados y de larga duración, una parte puede acumular un derecho de cobro considerable frente a otra que quizá no esté en condiciones de pagarlo cuando llegue el momento." },
          { note: "Las permutas de incumplimiento crediticio tuvieron un papel central en la crisis financiera de 2008 por esa razón: se vendió protección de forma masiva sin capital detrás para responder de ella. El problema no fue el instrumento, que cumple una función legítima, sino que el vendedor de la protección no podía atenderla si se producía el escenario cubierto." },
          { h: "Qué significa esto para un particular" },
          { p: "No vas a contratar un swap, pero sí conviene saber que existen por dos motivos. El primero es que aparecen dentro de productos que sí puedes comprar, como los ETFs sintéticos. El segundo es que las empresas en las que inviertes los usan, y su memoria anual explica qué riesgos tienen cubiertos y cuáles no. Esa información dice bastante sobre cómo se gestiona una compañía." },
          { quiz: {
            q: "En una permuta de tipos de interés sobre un nocional de un millón, ¿qué cantidad se intercambia realmente entre las partes?",
            options: [
              "Solo la diferencia entre los intereses que debe cada parte en cada fecha de pago",
              "El millón completo, al inicio y al vencimiento",
              "El millón completo únicamente si una de las partes incumple"
            ],
            answer: 0,
            explain: "El nocional es una referencia de cálculo, no un importe que cambie de manos. Por eso el riesgo de crédito de un swap es mucho menor que su nocional, aunque no sea cero: lo que está en juego es la diferencia de flujos acumulada, no el principal."
          }}
        ]
      },
      en: {
        title: "Swaps: exchanging flows",
        body: [
          { p: "A swap is an agreement to exchange a series of payments over a period. The asset isn't exchanged: the flows the asset generates are. It is the highest-volume derivative in the world and, paradoxically, the one that comes up least in a private investor's conversation, because almost all its use is corporate." },
          { h: "The commonest case: an interest rate swap" },
          { p: "One company has a floating rate loan and worries rates will rise. Another has a fixed rate loan and would rather pay floating. They agree to exchange the interest payments: one starts paying fixed and the other floating, without either touching the original loan with its bank." },
          { key: "The principal never changes hands: it exists only to calculate the interest. That is why it is called notional. The amounts that actually move are the difference between what each side owes, not the capital." },
          { h: "Other common types" },
          { ul: [
            "<strong>Currency swap.</strong> Payments denominated in different currencies are exchanged. Used by companies with revenue in one currency and debt in another, a very common situation across Latin America.",
            "<strong>Total return swap.</strong> One side pays the full return of an asset and the other pays an interest rate. It is the contract behind the synthetic replication ETFs covered in the ETF module.",
            "<strong>Credit default swap.</strong> Works like insurance against an issuer defaulting: a periodic fee is paid and a payout is received if the issuer fails."
          ]},
          { h: "Why they exist when they look unnecessary" },
          { p: "The economic reason is that not every participant accesses the same markets on the same terms. One company may have cheap floating rate funding thanks to its banking relationship but prefer the certainty of fixed; another may be in the opposite position. The swap lets each obtain the structure it wants without giving up the funding it secured." },
          { p: "The currency swap solves a very specific and very Latin American problem: a company billing in local currency that has borrowed in dollars carries a mismatch that can sink it if the currency devalues, even with the business working perfectly. The swap transfers that mismatch to someone willing to carry it." },
          { h: "Where the danger sits" },
          { p: "A swap's risk lies not in the notional but in the exposure accumulated against the counterparty over the contract's life. Because these are private, long-dated agreements, one side can build up a substantial claim against another that may not be in a position to pay when the time comes." },
          { note: "Credit default swaps played a central role in the 2008 financial crisis for exactly that reason: protection was sold en masse without the capital to stand behind it. The problem wasn't the instrument, which serves a legitimate function, but that the seller of protection couldn't honour it if the covered scenario arrived." },
          { h: "What this means for an individual" },
          { p: "You are not going to enter a swap, but knowing they exist matters for two reasons. The first is that they sit inside products you can buy, such as synthetic ETFs. The second is that the companies you invest in use them, and their annual report sets out which risks are hedged and which are not. That disclosure says a good deal about how a company is run." },
          { quiz: {
            q: "In an interest rate swap on a notional of one million, how much is actually exchanged between the parties?",
            options: [
              "Only the difference between the interest each side owes on each payment date",
              "The full million, at inception and at maturity",
              "The full million, but only if one party defaults"
            ],
            answer: 0,
            explain: "The notional is a calculation reference, not an amount that changes hands. That is why a swap's credit risk is far smaller than its notional, though not zero: what is at stake is the accumulated difference in flows, not the principal."
          }}
        ]
      }
    },
    {
      id: "coberturas",
      minutes: 8,
      es: {
        title: "Coberturas: la diferencia entre cubrir y apostar",
        body: [
          { p: "Los derivados se crearon para transferir riesgo. Cubrirse es usarlos para eliminar una incertidumbre que ya se tiene; especular es usarlos para asumir una que no se tenía. El instrumento puede ser exactamente el mismo, y desde fuera las dos operaciones son indistinguibles." },
          { h: "La prueba que separa una cosa de la otra" },
          { p: "Si el derivado desaparece de la ecuación, ¿queda una exposición al descubierto? Si la respuesta es sí, era una cobertura: el contrato estaba compensando un riesgo real del negocio o de la cartera. Si la respuesta es no, el contrato creaba la exposición en lugar de neutralizarla." },
          { table: {
            head: ["Situación", "Qué hace el derivado", "Qué es"],
            rows: [
              ["Exportador que cobrará en dólares y vende dólares a plazo", "Fija el ingreso en su moneda", "Cobertura"],
              ["Inversor con acciones que compra puts sobre su cartera", "Limita la pérdida en una caída", "Cobertura"],
              ["Alguien sin posición que compra calls sobre un índice", "Crea exposición alcista apalancada", "Especulación"],
              ["Empresa que cubre más volumen del que va a vender", "Cubre una parte y apuesta con el resto", "Las dos cosas a la vez"]
            ]
          }},
          { key: "Una cobertura bien hecha reduce la oscilación del resultado, no la mejora. Si una operación puede hacerte ganar más de lo que ganarías sin ella, no estás cubriendo: estás tomando una posición." },
          { h: "Lo que toda cobertura cuesta" },
          { ul: [
            "<strong>Renuncia al escenario favorable.</strong> Fijar un precio elimina la incertidumbre en las dos direcciones. Quien se cubre acepta no beneficiarse si el movimiento le habría venido bien.",
            "<strong>Prima o coste de financiación.</strong> Las opciones se pagan por adelantado; los futuros y forwards incorporan un coste implícito en el precio a plazo.",
            "<strong>Riesgo de base.</strong> Si el instrumento de cobertura no es exactamente el activo que se quiere cubrir, la protección es aproximada y puede fallar justo cuando más importa.",
            "<strong>Complejidad operativa.</strong> Garantías, vencimientos que hay que renovar y una contabilidad que se complica. Todo eso consume tiempo y atención."
          ]},
          { h: "Cuándo cubrirse es un error" },
          { p: "Cubrir de forma permanente una cartera de largo plazo suele destruir más valor del que protege: el coste recurrente se paga todos los años y las caídas que evita son, para un horizonte largo, oscilaciones que el propio plazo absorbe. La protección tiene sentido cuando el horizonte es corto, cuando el flujo cubierto es cierto o cuando una pérdida concreta resulta inasumible." },
          { note: "Hay un error todavía más frecuente que cubrir de más: cubrir con un instrumento que no se entiende. Una cobertura mal construida no reduce el riesgo, lo sustituye por otro distinto, normalmente menos visible. Si no sabes explicar qué pasa con tu posición en tres escenarios de precio, no tienes una cobertura: tienes dos posiciones abiertas." },
          { h: "Cierre del módulo" },
          { p: "Los derivados hacen posible que un agricultor conozca el precio de su cosecha, que un importador conozca su coste y que un fondo limite su pérdida máxima. Son infraestructura financiera útil y no hay nada oscuro en ellos." },
          { p: "También concentran una cantidad de riesgo desproporcionada respecto al dinero que exigen por adelantado, y eso los convierte en la vía más rápida para perder mucho más de lo previsto. Si en algún momento te planteas usarlos, la condición mínima es saber calcular el resultado de tu posición en varios escenarios antes de abrirla. Farlaz explica cómo funcionan estos instrumentos y no recomienda operar con ellos; no somos asesores registrados." },
          { quiz: {
            q: "Una empresa que exportará 100.000 dólares vende a plazo 300.000 dólares. ¿Cómo se describe esa operación?",
            options: [
              "Cubre un tercio de la exposición y especula con el resto",
              "Es una cobertura conservadora que protege mejor el negocio",
              "Es una cobertura estándar, porque el importe exacto nunca se conoce"
            ],
            answer: 0,
            explain: "Solo la parte que corresponde a un flujo real está cubriendo algo. Los 200.000 restantes crean una posición vendedora en divisa que no compensa nada y genera resultado propio, en cualquiera de las dos direcciones. Cubrir de más no es prudencia: es una apuesta añadida a la cobertura."
          }}
        ]
      },
      en: {
        title: "Hedging: the difference between covering and betting",
        body: [
          { p: "Derivatives were created to transfer risk. Hedging means using them to remove an uncertainty you already have; speculating means using them to take on one you didn't. The instrument can be exactly the same, and from outside the two trades are indistinguishable." },
          { h: "The test that separates them" },
          { p: "If the derivative vanished from the picture, would an uncovered exposure remain? If yes, it was a hedge: the contract was offsetting a real risk in the business or the portfolio. If no, the contract was creating the exposure rather than neutralising it." },
          { table: {
            head: ["Situation", "What the derivative does", "What it is"],
            rows: [
              ["Exporter due to receive dollars sells dollars forward", "Fixes the receipt in its own currency", "Hedge"],
              ["Investor holding shares buys puts on the portfolio", "Caps the loss in a fall", "Hedge"],
              ["Someone with no position buys calls on an index", "Creates leveraged upside exposure", "Speculation"],
              ["Company hedging more volume than it will sell", "Hedges part and bets with the rest", "Both at once"]
            ]
          }},
          { key: "A well-built hedge reduces the swing in the result, it doesn't improve it. If a trade can make you more than you would have made without it, you aren't hedging: you are taking a position." },
          { h: "What every hedge costs" },
          { ul: [
            "<strong>Giving up the favourable case.</strong> Fixing a price removes uncertainty in both directions. Whoever hedges accepts not benefiting if the move would have suited them.",
            "<strong>Premium or funding cost.</strong> Options are paid upfront; futures and forwards carry an implicit cost inside the forward price.",
            "<strong>Basis risk.</strong> If the hedging instrument isn't exactly the asset being hedged, the protection is approximate and can fail precisely when it matters most.",
            "<strong>Operational complexity.</strong> Margin, expiries that have to be rolled, and accounting that gets harder. All of it consumes time and attention."
          ]},
          { h: "When hedging is a mistake" },
          { p: "Permanently hedging a long-term portfolio usually destroys more value than it protects: the recurring cost is paid every year, and the falls it avoids are, over a long horizon, swings that the horizon itself absorbs. Protection makes sense when the horizon is short, when the hedged flow is certain, or when one specific loss would be unbearable." },
          { note: "There is an error even more common than over-hedging: hedging with an instrument you don't understand. A badly built hedge doesn't reduce risk, it replaces it with a different one, usually less visible. If you can't explain what happens to your position in three price scenarios, you don't have a hedge: you have two open positions." },
          { h: "Closing the module" },
          { p: "Derivatives are what let a farmer know the price of a harvest, an importer know its cost, and a fund cap its maximum loss. They are useful financial infrastructure and there is nothing shadowy about them." },
          { p: "They also concentrate an amount of risk far out of proportion to the money they demand upfront, which makes them the fastest route to losing much more than intended. If you ever consider using them, the minimum condition is being able to calculate your position's result across several scenarios before opening it. Farlaz explains how these instruments work and does not recommend trading them; we are not registered advisers." },
          { quiz: {
            q: "A company that will export 100,000 dollars sells 300,000 dollars forward. How would you describe that trade?",
            options: [
              "It hedges a third of the exposure and speculates with the rest",
              "It is a conservative hedge that protects the business better",
              "It is a standard hedge, since the exact amount is never known"
            ],
            answer: 0,
            explain: "Only the portion matching a real flow is hedging anything. The remaining 200,000 create a short currency position that offsets nothing and produces a result of its own, in either direction. Over-hedging isn't prudence: it is a bet added on top of the hedge."
          }}
        ]
      }
    }
  ]
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
  lessons: [
    {
      id: "dividend-growth",
      minutes: 8,
      es: {
        title: "Dividend Growth Investing",
        body: [
          { p: "Esta escuela no busca el dividendo más alto, sino el que crece de forma sostenida. La distinción es fundamental y explica por qué la estrategia funciona de forma tan distinta a lo que sugiere su nombre popular, invertir por dividendos." },
          { h: "Por qué la rentabilidad por dividendo alta es una señal ambigua" },
          { p: "La rentabilidad por dividendo es el dividendo dividido entre el precio. Ese cociente sube por dos motivos opuestos: porque la empresa aumenta el reparto, o porque el precio de la acción se hunde. El segundo caso es el más frecuente entre los primeros puestos de cualquier lista de mayores rentabilidades." },
          { key: "Un dividendo del 12% no es una promesa de cobrar el 12%. A menudo es el aviso de que el mercado espera un recorte del dividendo. Cuando el recorte llega, el inversor pierde el ingreso y el capital a la vez." },
          { h: "Qué se mira en su lugar" },
          { ul: [
            "<strong>El historial de incrementos.</strong> Una empresa que ha subido su dividendo cada año durante dos décadas ha demostrado capacidad de generar caja de forma consistente. El historial no garantiza el futuro, pero describe un negocio que ha funcionado a través de varios ciclos.",
            "<strong>El porcentaje del beneficio repartido.</strong> Si la empresa reparte casi todo lo que gana, no le queda margen para mantener el dividendo en un año malo ni para reinvertir en el negocio.",
            "<strong>La cobertura con flujo de caja libre.</strong> El beneficio contable puede sostener un dividendo sobre el papel; la caja es la que lo paga. Cuando el dividendo se financia con deuda, la situación es insostenible por definición.",
            "<strong>La deuda.</strong> Una empresa muy endeudada que reparte mucho está eligiendo contentar al accionista antes que asegurar su propia solvencia."
          ]},
          { h: "El atractivo real de la estrategia" },
          { p: "Un dividendo creciente proporciona un flujo que tiende a acompañar a la inflación, y hace que el resultado dependa menos de lo que haga la cotización. Además impone una disciplina útil: seleccionar empresas capaces de repartir caja creciente durante décadas descarta automáticamente a las que no ganan dinero." },
          { h: "Y sus límites" },
          { ul: [
            "<strong>Sesgo sectorial.</strong> Las empresas que reparten dividendos crecientes se concentran en unos pocos sectores maduros. La cartera resultante no está tan diversificada como parece.",
            "<strong>Ineficiencia fiscal.</strong> En muchos países el dividendo tributa en el año en que se cobra, mientras que la revalorización no tributa hasta la venta. Cobrar y reinvertir es peor que no cobrar, si el objetivo es acumular.",
            "<strong>Deja fuera a las mejores empresas jóvenes.</strong> Una compañía que reinvierte todo su beneficio a buena rentabilidad hace algo más valioso que repartirlo, y este filtro nunca la selecciona.",
            "<strong>El dividendo no es un derecho.</strong> Se puede recortar o suprimir en cualquier momento, y es lo primero que se recorta cuando el negocio se estrecha."
          ]},
          { note: "Un punto que genera confusión: el día que una empresa paga el dividendo, su cotización cae aproximadamente esa misma cantidad. El dividendo no es dinero adicional que aparece de la nada; es una parte del valor de la empresa que pasa de la caja de la compañía a la cuenta del accionista." },
          { quiz: {
            q: "Una empresa aparece en el primer puesto del listado de mayores rentabilidades por dividendo del mercado. ¿Qué conviene comprobar primero?",
            options: [
              "Si el precio se ha desplomado y el mercado anticipa un recorte del dividendo",
              "Cuántos años lleva cotizando en ese mercado",
              "Si el dividendo se paga trimestral o anualmente"
            ],
            answer: 0,
            explain: "La rentabilidad por dividendo tiene el precio en el denominador, así que se dispara cuando la acción cae. Encabezar esa lista suele indicar problemas conocidos por el mercado, no una oportunidad desapercibida. Lo primero es entender por qué está tan arriba."
          }}
        ]
      },
      en: {
        title: "Dividend growth investing",
        body: [
          { p: "This school doesn't look for the highest dividend but for the one that grows steadily. The distinction is fundamental and explains why the strategy works so differently from what its popular name, dividend investing, suggests." },
          { h: "Why a high dividend yield is an ambiguous signal" },
          { p: "Dividend yield is the dividend divided by the price. That ratio rises for two opposite reasons: because the company raised the payout, or because the share price collapsed. The second case is the more common one at the top of any highest-yield list." },
          { key: "A 12% yield is not a promise of receiving 12%. It is often a warning that the market expects the dividend to be cut. When the cut arrives, the investor loses the income and the capital at once." },
          { h: "What to look at instead" },
          { ul: [
            "<strong>The record of increases.</strong> A company that has raised its dividend every year for two decades has demonstrated consistent cash generation. The record doesn't guarantee the future, but it describes a business that has worked across several cycles.",
            "<strong>The share of earnings paid out.</strong> If the company distributes nearly everything it earns, no room is left to sustain the dividend in a bad year or to reinvest in the business.",
            "<strong>Free cash flow coverage.</strong> Accounting profit can support a dividend on paper; cash is what pays it. When the dividend is funded with debt, the situation is unsustainable by definition.",
            "<strong>Debt.</strong> A heavily indebted company paying out generously is choosing to please shareholders ahead of securing its own solvency."
          ]},
          { h: "The strategy's real appeal" },
          { p: "A growing dividend provides a flow that tends to keep pace with inflation, and makes the result depend less on what the share price does. It also imposes a useful discipline: selecting companies able to distribute growing cash for decades automatically excludes those that don't make money." },
          { h: "And its limits" },
          { ul: [
            "<strong>Sector bias.</strong> Companies with growing dividends cluster in a few mature sectors. The resulting portfolio is less diversified than it looks.",
            "<strong>Tax inefficiency.</strong> In many countries a dividend is taxed in the year received, while appreciation isn't taxed until sale. Receiving and reinvesting is worse than not receiving, if the goal is to accumulate.",
            "<strong>It excludes the best young companies.</strong> A company reinvesting all its earnings at high returns is doing something more valuable than paying them out, and this screen never selects it.",
            "<strong>A dividend isn't a right.</strong> It can be cut or scrapped at any moment, and it is the first thing cut when the business tightens."
          ]},
          { note: "A point that causes confusion: on the day a company pays its dividend, the share price falls by roughly that amount. The dividend isn't extra money appearing from nowhere; it is part of the company's value moving from the company's cash to the shareholder's account." },
          { quiz: {
            q: "A company tops the market's highest dividend yield list. What should be checked first?",
            options: [
              "Whether the price has collapsed and the market is anticipating a dividend cut",
              "How many years it has been listed on that market",
              "Whether the dividend is paid quarterly or annually"
            ],
            answer: 0,
            explain: "Dividend yield has price in the denominator, so it spikes when the share falls. Topping that list usually signals problems the market already knows about, not an unnoticed opportunity. The first job is understanding why it is so high."
          }}
        ]
      }
    },
    {
      id: "value-investing",
      minutes: 8,
      es: {
        title: "Value Investing",
        body: [
          { p: "La inversión en valor parte de una idea sencilla: una acción es una participación en un negocio, ese negocio tiene un valor que puede estimarse, y el precio de mercado se aleja de ese valor con más frecuencia de lo que cabría esperar. Comprar cuando el precio está muy por debajo de la estimación es toda la estrategia." },
          { h: "El margen de seguridad" },
          { p: "Es el concepto central y el que más se olvida. Estimar el valor de una empresa exige suposiciones sobre el futuro, y esas suposiciones serán inexactas. El margen de seguridad consiste en comprar con un descuento suficiente para que el resultado siga siendo aceptable aunque la estimación estuviera equivocada." },
          { key: "El margen de seguridad no es un descuento sobre el precio: es una protección contra el propio error de análisis. Quien lo entiende como una forma de ganar más ha invertido el propósito de la idea." },
          { h: "Lo que el valor no es" },
          { p: "Barato no significa con un múltiplo bajo. Una empresa cuyo beneficio va a caer a la mitad puede cotizar a un múltiplo aparentemente atractivo y ser cara respecto a lo que realmente va a ganar. El múltiplo es un punto de partida para preguntar, no una conclusión." },
          { p: "El error que da nombre a la trampa de valor es exactamente ese: comprar algo estadísticamente barato cuya baratura refleja un deterioro real del negocio. El sector desaparece, la tecnología cambia, el cliente principal se marcha. El precio bajo no era una oportunidad sino un diagnóstico." },
          { h: "Cómo distinguir una empresa infravalorada de una en declive" },
          { ul: [
            "<strong>¿Por qué está barata?</strong> Debe haber una explicación concreta: un problema temporal identificable, un sector fuera de moda, una venta forzada. Si no encuentras el motivo, probablemente no la has entendido.",
            "<strong>¿El problema es reversible?</strong> Un mal año se supera. La pérdida estructural de la razón de ser de un negocio, no.",
            "<strong>¿Aguanta mientras tanto?</strong> Una empresa endeudada puede tener razón sobre su futuro y no llegar a verlo. La solvencia determina si hay tiempo para que la tesis funcione.",
            "<strong>¿Qué tendría que ocurrir para que te equivocaras?</strong> Escribirlo antes de comprar es la única forma de reconocerlo después sin discutir contigo mismo."
          ]},
          { h: "Los años malos" },
          { p: "Esta escuela atraviesa períodos muy largos de comportamiento peor que el del mercado general. Es coherente con su propia lógica: comprar lo que nadie quiere significa, por definición, no tener lo que todo el mundo está comprando. Quien adopta el método aceptando solo la parte cómoda lo abandona precisamente en el peor momento." },
          { note: "Hay una crítica seria y vigente al método clásico: las métricas contables tradicionales miden mal a las empresas cuyo activo principal es intangible —marca, software, investigación—, porque esos gastos se restan del beneficio en lugar de figurar como inversión. Aplicar mecánicamente los criterios de hace ochenta años a la economía actual puede seleccionar sistemáticamente negocios en declive." },
          { quiz: {
            q: "Una empresa cotiza a un múltiplo muy bajo sobre sus beneficios del año pasado. ¿Qué hay que determinar antes de considerarla barata?",
            options: [
              "Si esos beneficios son sostenibles o el mercado anticipa que van a caer con fundamento",
              "Si su cotización ha bajado más que la del índice en los últimos meses",
              "Si el múltiplo es inferior al de las demás empresas del mismo sector"
            ],
            answer: 0,
            explain: "Un múltiplo relaciona el precio con un beneficio pasado. Si ese beneficio va a caer con claridad, la empresa no está barata: está correctamente valorada respecto a lo que va a ganar. Distinguir esos dos casos es el trabajo entero de la inversión en valor."
          }}
        ]
      },
      en: {
        title: "Value investing",
        body: [
          { p: "Value investing starts from a simple idea: a share is a stake in a business, that business has a value that can be estimated, and the market price wanders away from that value more often than you would expect. Buying when price sits well below the estimate is the entire strategy." },
          { h: "The margin of safety" },
          { p: "This is the central concept and the most forgotten one. Estimating a company's value requires assumptions about the future, and those assumptions will be inexact. A margin of safety means buying at a discount large enough that the outcome stays acceptable even if the estimate was wrong." },
          { key: "A margin of safety isn't a discount on the price: it is protection against your own analytical error. Anyone treating it as a way to earn more has inverted the purpose of the idea." },
          { h: "What value is not" },
          { p: "Cheap doesn't mean trading on a low multiple. A company whose earnings are about to halve can trade on an apparently attractive multiple and be expensive against what it will actually earn. The multiple is a starting point for asking questions, not a conclusion." },
          { p: "The error that gives the value trap its name is exactly that: buying something statistically cheap whose cheapness reflects real deterioration. The sector disappears, the technology shifts, the main customer leaves. The low price wasn't an opportunity but a diagnosis." },
          { h: "Telling an undervalued company from a declining one" },
          { ul: [
            "<strong>Why is it cheap?</strong> There must be a concrete explanation: an identifiable temporary problem, an unfashionable sector, a forced seller. If you can't find the reason, you probably haven't understood it.",
            "<strong>Is the problem reversible?</strong> A bad year passes. A business structurally losing its reason to exist does not.",
            "<strong>Can it hold out meanwhile?</strong> An indebted company can be right about its future and never get to see it. Solvency determines whether there is time for the thesis to work.",
            "<strong>What would have to happen for you to be wrong?</strong> Writing it down before buying is the only way to recognise it later without arguing with yourself."
          ]},
          { h: "The bad years" },
          { p: "This school goes through very long stretches of trailing the broad market. That is consistent with its own logic: buying what nobody wants means, by definition, not holding what everyone is buying. Anyone adopting the method while accepting only the comfortable part abandons it at precisely the worst moment." },
          { note: "There is a serious and current criticism of the classical method: traditional accounting metrics measure poorly those companies whose main asset is intangible — brand, software, research — because that spending is subtracted from profit rather than shown as investment. Applying eighty-year-old criteria mechanically to today's economy can systematically select declining businesses." },
          { quiz: {
            q: "A company trades on a very low multiple of last year's earnings. What must be established before calling it cheap?",
            options: [
              "Whether those earnings are sustainable, or the market has good reason to expect them to fall",
              "Whether its share price has fallen more than the index in recent months",
              "Whether the multiple is below that of other companies in the same sector"
            ],
            answer: 0,
            explain: "A multiple relates price to past earnings. If those earnings are clearly about to fall, the company isn't cheap: it is correctly priced against what it will earn. Distinguishing those two cases is the whole job of value investing."
          }}
        ]
      }
    },
    {
      id: "growth-investing",
      minutes: 8,
      es: {
        title: "Growth Investing",
        body: [
          { p: "La inversión en crecimiento busca empresas que aumentan sus ingresos y beneficios a un ritmo muy superior al de la economía, y acepta pagar un múltiplo alto por ellas. La apuesta es explícita: el crecimiento futuro justificará el precio de hoy." },
          { h: "La lógica que la sostiene" },
          { p: "Si una empresa duplica sus beneficios en cinco años, el múltiplo que pagaste al comprar se reduce a la mitad sin que la acción se haya movido. Con crecimientos altos y sostenidos, un precio que parecía exigente resulta razonable en retrospectiva. Todo depende de que el crecimiento sea real y duradero." },
          { key: "Pagar un múltiplo alto no es un error en sí mismo. El error es pagarlo sin haber definido qué ritmo de crecimiento hace falta para justificarlo, y durante cuántos años tendría que mantenerse." },
          { h: "Qué distingue al buen crecimiento" },
          { ul: [
            "<strong>De dónde viene.</strong> Crecer vendiendo más a más clientes no es lo mismo que crecer comprando empresas con deuda o bajando precios hasta perder margen.",
            "<strong>Cuánto capital consume.</strong> Un negocio que necesita invertir cantidades enormes para crecer genera menos valor que otro que crece sin apenas capital adicional.",
            "<strong>Si hay algo que lo proteja.</strong> Un crecimiento rápido sin barreras de entrada atrae competencia, y la competencia comprime los márgenes.",
            "<strong>Si llega al beneficio.</strong> Crecer en ingresos mientras las pérdidas aumentan solo tiene sentido si existe un camino identificable hacia la rentabilidad."
          ]},
          { h: "El riesgo específico de esta escuela" },
          { p: "Cuando el precio incorpora un crecimiento elevado durante muchos años, cualquier decepción se paga cara. No hace falta que la empresa vaya mal: basta con que crezca menos de lo previsto para que el múltiplo se contraiga y la caída sea muy superior a la del propio deterioro del negocio." },
          { p: "Ese es el mecanismo que hace tan violentas las correcciones en las compañías de crecimiento: se juntan una revisión a la baja del beneficio esperado y una contracción del múltiplo que el mercado está dispuesto a pagar. Los dos efectos se multiplican en lugar de sumarse." },
          { note: "Las empresas de crecimiento son además muy sensibles a los tipos de interés. Su valor depende de beneficios situados muy lejos en el futuro, y descontar ese futuro con un tipo más alto reduce el valor presente mucho más que en un negocio maduro que ya gana dinero hoy." },
          { h: "Crecimiento y valor no son opuestos" },
          { p: "La separación entre las dos escuelas es más de vocabulario que de fondo. El crecimiento es uno de los componentes del valor de cualquier empresa; no una categoría distinta. La pregunta útil sigue siendo la misma en ambos casos: qué estás pagando y qué estás recibiendo a cambio." },
          { quiz: {
            q: "Una empresa de crecimiento publica resultados con ingresos un 25% superiores, cuando el mercado esperaba un 35%. La acción cae un 30%. ¿Cómo se explica?",
            options: [
              "Se revisa a la baja el beneficio futuro esperado y además se contrae el múltiplo que el mercado paga",
              "Es una reacción irracional, porque crecer un 25% sigue siendo excelente",
              "Los inversores confundieron el dato con una caída de ingresos"
            ],
            answer: 0,
            explain: "El precio incorporaba una trayectoria concreta. Al reducirse la expectativa de crecimiento, baja tanto el beneficio proyectado como el múltiplo que se considera justificable. Los dos ajustes actúan a la vez y por eso la caída supera con mucho a la magnitud de la decepción."
          }}
        ]
      },
      en: {
        title: "Growth investing",
        body: [
          { p: "Growth investing looks for companies increasing revenue and profits far faster than the economy, and accepts paying a high multiple for them. The bet is explicit: future growth will justify today's price." },
          { h: "The logic behind it" },
          { p: "If a company doubles its profits in five years, the multiple you paid on purchase halves without the share moving at all. With high, sustained growth, a price that looked demanding turns out reasonable in hindsight. Everything depends on the growth being real and durable." },
          { key: "Paying a high multiple is not an error in itself. The error is paying it without having defined what growth rate is needed to justify it, and for how many years it would have to hold." },
          { h: "What separates good growth" },
          { ul: [
            "<strong>Where it comes from.</strong> Growing by selling more to more customers is not the same as growing by buying companies with debt or cutting prices until the margin disappears.",
            "<strong>How much capital it consumes.</strong> A business needing enormous investment to grow creates less value than one that grows with barely any additional capital.",
            "<strong>Whether anything protects it.</strong> Fast growth without barriers to entry attracts competition, and competition compresses margins.",
            "<strong>Whether it reaches profit.</strong> Growing revenue while losses widen only makes sense if there is an identifiable path to profitability."
          ]},
          { h: "The risk specific to this school" },
          { p: "When a price embeds high growth for many years, any disappointment is expensive. The company doesn't need to do badly: growing less than expected is enough for the multiple to contract and the fall to far exceed the deterioration in the business itself." },
          { p: "That is the mechanism that makes corrections in growth companies so violent: a downward revision to expected profits combines with a contraction in the multiple the market will pay. The two effects multiply rather than add." },
          { note: "Growth companies are also highly sensitive to interest rates. Their value depends on profits sitting far in the future, and discounting that future at a higher rate cuts present value far more than for a mature business already earning today." },
          { h: "Growth and value are not opposites" },
          { p: "The split between the two schools is more vocabulary than substance. Growth is one of the components of any company's value; not a separate category. The useful question stays the same in both cases: what are you paying, and what are you receiving for it?" },
          { quiz: {
            q: "A growth company reports revenue up 25% when the market expected 35%. The shares fall 30%. How is that explained?",
            options: [
              "Expected future profits are revised down and the multiple the market pays contracts as well",
              "It is an irrational reaction, because growing 25% is still excellent",
              "Investors mistook the figure for a fall in revenue"
            ],
            answer: 0,
            explain: "The price embedded a specific trajectory. When the growth expectation drops, both the projected profit and the multiple considered justifiable come down. The two adjustments act at once, which is why the fall far exceeds the size of the disappointment."
          }}
        ]
      }
    },
    {
      id: "momentum",
      minutes: 7,
      es: {
        title: "Momentum",
        body: [
          { p: "El momento es la observación de que los activos que han subido durante los últimos meses tienden a seguir subiendo durante un tiempo, y los que han caído tienden a seguir cayendo. Es incómodo porque contradice la intuición y porque no encaja bien con la idea de que el precio refleja toda la información disponible." },
          { h: "Qué se ha documentado" },
          { p: "Es uno de los efectos más estudiados de las finanzas empíricas. Se ha encontrado en distintos mercados, en distintos períodos y en distintas clases de activo, con la ventana habitual de doce meses excluyendo el más reciente. La persistencia de ese hallazgo es lo que lo distingue de casi cualquier otra regla de mercado." },
          { key: "Documentar un efecto en los datos no es lo mismo que poder aprovecharlo. Entre una cosa y otra están los costes de operar, los impuestos y la capacidad de sostener la estrategia durante sus períodos malos, que son severos." },
          { h: "Las explicaciones que se ofrecen" },
          { ul: [
            "<strong>Reacción insuficiente a las noticias.</strong> El mercado incorpora la información nueva de forma gradual en lugar de instantánea, y el precio tarda semanas en ajustarse del todo.",
            "<strong>Comportamiento gregario.</strong> Las subidas atraen atención, la atención atrae compradores y los compradores sostienen la subida durante un tiempo.",
            "<strong>Compensación por riesgo.</strong> Otra lectura sostiene que el momento remunera un riesgo real, y que ese riesgo se materializa en los desplomes ocasionales de la estrategia."
          ]},
          { h: "El problema que hace difícil aprovecharlo" },
          { p: "El momento exige rotar la cartera con frecuencia: lo que era ganador hace seis meses deja de serlo y hay que reemplazarlo. Esa rotación genera costes de operación e impacto fiscal en cada movimiento, y esos costes se llevan una parte considerable de la ventaja teórica documentada en los estudios." },
          { p: "Además, la estrategia sufre desplomes bruscos y concentrados. En los giros de mercado, los activos que más habían caído rebotan con violencia y la cartera de momento queda posicionada justo al revés. No son caídas graduales: son pérdidas rápidas y profundas concentradas en pocas semanas." },
          { note: "El momento es también la explicación teórica de por qué algunas reglas de seguimiento de tendencia del análisis técnico se han sostenido en pruebas largas. Ese es el punto de contacto entre el módulo 11 y la investigación académica, y también el límite: lo que tiene respaldo es el efecto agregado y sistemático, no la interpretación visual de un gráfico concreto." },
          { quiz: {
            q: "¿Por qué la ventaja teórica del momento es difícil de capturar en la práctica?",
            options: [
              "Porque exige rotar la cartera con frecuencia, y los costes y los desplomes bruscos consumen buena parte del efecto",
              "Porque el efecto solo se ha observado en un único mercado y en un único período",
              "Porque las plataformas no permiten operar con esa frecuencia"
            ],
            answer: 0,
            explain: "El efecto está bien documentado en muchos mercados. Lo que separa el resultado del estudio del resultado del inversor son las comisiones, la fiscalidad de cada rotación y la dificultad de mantener la estrategia después de una de sus caídas rápidas."
          }}
        ]
      },
      en: {
        title: "Momentum",
        body: [
          { p: "Momentum is the observation that assets which have risen over recent months tend to keep rising for a while, and those that have fallen tend to keep falling. It is uncomfortable because it contradicts intuition and because it sits badly with the idea that price reflects all available information." },
          { h: "What has been documented" },
          { p: "It is one of the most studied effects in empirical finance. It has been found across different markets, different periods and different asset classes, with the usual window being twelve months excluding the most recent one. The persistence of that finding is what sets it apart from almost any other market rule." },
          { key: "Documenting an effect in the data is not the same as being able to harvest it. Between the two sit trading costs, taxes, and the ability to hold the strategy through its bad stretches, which are severe." },
          { h: "The explanations offered" },
          { ul: [
            "<strong>Underreaction to news.</strong> The market absorbs new information gradually rather than instantly, and price takes weeks to adjust fully.",
            "<strong>Herding.</strong> Rises attract attention, attention attracts buyers, and buyers sustain the rise for a time.",
            "<strong>Compensation for risk.</strong> Another reading holds that momentum pays for a real risk, and that the risk shows up in the strategy's occasional crashes."
          ]},
          { h: "The problem that makes it hard to harvest" },
          { p: "Momentum requires rotating the portfolio frequently: what was a winner six months ago stops being one and has to be replaced. That rotation generates trading costs and a tax consequence on every move, and those costs absorb a substantial share of the theoretical edge documented in the studies." },
          { p: "The strategy also suffers abrupt, concentrated crashes. At market turns, the assets that had fallen most rebound violently and the momentum portfolio is positioned exactly the wrong way. These are not gradual declines: they are fast, deep losses packed into a few weeks." },
          { note: "Momentum is also the theoretical explanation for why some trend-following rules from technical analysis have held up in long tests. That is the point of contact between module 11 and academic research, and also the limit: what has support is the aggregate, systematic effect, not the visual interpretation of a particular chart." },
          { quiz: {
            q: "Why is momentum's theoretical edge hard to capture in practice?",
            options: [
              "Because it requires frequent portfolio rotation, and costs plus abrupt crashes consume much of the effect",
              "Because the effect has only been observed in one market and one period",
              "Because platforms don't allow trading at that frequency"
            ],
            answer: 0,
            explain: "The effect is well documented across many markets. What separates the study's result from the investor's result is commissions, the tax cost of each rotation, and the difficulty of sticking with the strategy after one of its rapid drawdowns."
          }}
        ]
      }
    },
    {
      id: "factor-investing",
      minutes: 8,
      es: {
        title: "Factor Investing",
        body: [
          { p: "Un factor es una característica compartida por un grupo de activos que explica parte de su comportamiento conjunto. La inversión por factores consiste en construir la cartera a partir de esas características en lugar de a partir de empresas concretas. En el módulo de ETFs vimos cómo se empaquetan; aquí vemos cómo se combinan y dónde está el límite." },
          { h: "De dónde surge la idea" },
          { p: "El punto de partida fue constatar que el comportamiento de una cartera se explica en buena medida por su exposición al mercado en conjunto. Investigaciones posteriores añadieron otras dimensiones —tamaño, valoración, rentabilidad, inversión, momento— que explicaban la parte que el mercado por sí solo no explicaba." },
          { key: "La consecuencia práctica es incómoda para la gestión activa. Buena parte de lo que parecía habilidad de un gestor resulta ser exposición a factores conocidos, que hoy se puede obtener por una comisión mínima a través de un producto indexado." },
          { h: "Cómo se combinan" },
          { p: "El argumento a favor de combinar varios factores es que sus períodos malos no coinciden. Cuando valor sufre, calidad puede sostenerse; cuando momento se desploma en un giro de mercado, otro factor puede amortiguarlo. Una cartera multifactorial busca una experiencia más estable que la de un factor aislado." },
          { p: "El argumento en contra es igual de serio: combinar factores diluye la exposición a cada uno, añade costes de operativa y aumenta la probabilidad de acabar con algo muy parecido al índice general, pero pagando bastante más por él." },
          { h: "El problema del zoo de factores" },
          { p: "Se han publicado cientos de factores en la literatura académica. Con suficientes variables y suficientes pruebas sobre los mismos datos históricos, encontrar correlaciones aparentes es inevitable. Solo un puñado ha resistido la comprobación con datos independientes, en otros países y en períodos posteriores a su publicación." },
          { note: "Existe además un fenómeno bien documentado: la rentabilidad de muchos factores se reduce de forma apreciable después de publicarse el estudio que los describe. Puede deberse a que el dinero que llega detrás elimina la ineficiencia, o a que el hallazgo original estaba sobreajustado a su muestra. Las dos explicaciones invitan a la misma prudencia." },
          { h: "Los criterios para tomarse un factor en serio" },
          { ul: [
            "<strong>Que tenga una explicación económica.</strong> Una razón por la que ese comportamiento debería existir y persistir, más allá de aparecer en los datos.",
            "<strong>Que se haya verificado fuera de la muestra original.</strong> En otros mercados, en otras décadas y después de haberse hecho público.",
            "<strong>Que sea implementable.</strong> Un factor cuya captura exige operar constantemente con valores poco líquidos no sobrevive a sus propios costes.",
            "<strong>Que puedas sostenerlo.</strong> Ningún factor sirve si se abandona tras tres años malos, porque esos tres años son parte del precio que se paga por la ventaja."
          ]},
          { h: "Qué queda en pie" },
          { p: "La inversión por factores es una forma disciplinada y transparente de apartarse del índice general, con reglas explícitas y costes conocidos. No es una vía para obtener mejores resultados sin asumir nada a cambio: lo que se asume es un comportamiento distinto al del mercado, que unos años juega a favor y otros en contra." },
          { quiz: {
            q: "¿Por qué se exige que un factor tenga una explicación económica y no solo respaldo estadístico?",
            options: [
              "Porque con suficientes pruebas sobre los mismos datos siempre aparecen correlaciones que no significan nada",
              "Porque los reguladores obligan a justificar teóricamente cada estrategia",
              "Porque los datos históricos de los mercados son poco fiables"
            ],
            answer: 0,
            explain: "Es el problema de las pruebas múltiples: examinando cientos de variables sobre una misma serie, algunas parecerán predictivas por puro azar. Una explicación económica plausible es lo que permite distinguir un mecanismo real de una coincidencia estadística."
          }}
        ]
      },
      en: {
        title: "Factor investing",
        body: [
          { p: "A factor is a characteristic shared by a group of assets that explains part of how they behave together. Factor investing means building the portfolio from those characteristics rather than from individual companies. The ETF module covered how they are packaged; here we look at how they are combined and where the limit sits." },
          { h: "Where the idea comes from" },
          { p: "The starting point was finding that a portfolio's behaviour is largely explained by its exposure to the market as a whole. Later research added other dimensions — size, valuation, profitability, investment, momentum — that explained the part the market alone did not." },
          { key: "The practical consequence is uncomfortable for active management. Much of what looked like a manager's skill turns out to be exposure to known factors, which today can be obtained for a minimal fee through an index product." },
          { h: "How they are combined" },
          { p: "The argument for combining several factors is that their bad stretches don't coincide. When value struggles, quality may hold up; when momentum crashes at a market turn, another factor can cushion it. A multifactor portfolio aims for a steadier experience than any single factor gives." },
          { p: "The argument against is just as serious: combining factors dilutes exposure to each one, adds trading costs, and raises the odds of ending up with something very close to the broad index while paying considerably more for it." },
          { h: "The factor zoo problem" },
          { p: "Hundreds of factors have been published in the academic literature. With enough variables and enough tests on the same historical data, finding apparent correlations is inevitable. Only a handful have survived checking against independent data, in other countries and in periods after publication." },
          { note: "There is also a well-documented phenomenon: the returns of many factors shrink appreciably after the study describing them is published. That may be because the money arriving afterwards removes the inefficiency, or because the original finding was overfitted to its sample. Both explanations point to the same caution." },
          { h: "The tests for taking a factor seriously" },
          { ul: [
            "<strong>It has an economic explanation.</strong> A reason why that behaviour should exist and persist, beyond showing up in the data.",
            "<strong>It has been verified outside the original sample.</strong> In other markets, other decades, and after becoming public.",
            "<strong>It is implementable.</strong> A factor whose capture requires constant trading in illiquid names doesn't survive its own costs.",
            "<strong>You can stick with it.</strong> No factor helps if it is abandoned after three bad years, because those three years are part of the price paid for the edge."
          ]},
          { h: "What holds up" },
          { p: "Factor investing is a disciplined, transparent way of departing from the broad index, with explicit rules and known costs. It is not a route to better results for nothing in return: what you take on is behaviour different from the market's, which some years works for you and other years against." },
          { quiz: {
            q: "Why must a factor have an economic explanation and not just statistical support?",
            options: [
              "Because with enough tests on the same data, correlations that mean nothing always appear",
              "Because regulators require every strategy to be theoretically justified",
              "Because historical market data is unreliable"
            ],
            answer: 0,
            explain: "This is the multiple testing problem: examine hundreds of variables against one series and some will look predictive by pure chance. A plausible economic explanation is what separates a real mechanism from a statistical coincidence."
          }}
        ]
      }
    },
    {
      id: "dollar-cost-averaging",
      minutes: 7,
      es: {
        title: "Dollar Cost Averaging",
        body: [
          { p: "Consiste en invertir una cantidad fija a intervalos regulares, con independencia del precio. Cuando el activo está caro, esa cantidad compra menos participaciones; cuando está barato, compra más. Es el método más recomendado a quien empieza, y conviene entender exactamente por qué." },
          { h: "El mecanismo" },
          { table: {
            head: ["Mes", "Precio", "Aportación", "Participaciones compradas"],
            rows: [
              ["1", "100", "300", "3,00"],
              ["2", "75", "300", "4,00"],
              ["3", "60", "300", "5,00"],
              ["4", "80", "300", "3,75"],
              ["Total", "", "1.200", "15,75"]
            ]
          }},
          { note: "Cifras construidas. El precio medio de los cuatro meses es 78,75, pero el coste medio por participación resulta de 1.200 dividido entre 15,75, es decir 76,19. La diferencia procede de haber comprado más unidades en los meses baratos, algo que ocurre de forma automática al mantener fija la aportación." },
          { key: "Ese efecto es real, pero es un subproducto. La razón principal para aportar de forma periódica no es aritmética: es que elimina la decisión de cuándo entrar, que es donde la mayoría de los inversores se hace daño." },
          { h: "Lo que la evidencia dice de verdad" },
          { p: "Cuando se compara invertir una suma disponible de golpe frente a repartirla en cuotas durante meses, la inversión inmediata obtiene mejor resultado en la mayoría de los períodos históricos analizados. La razón es sencilla: los mercados suben más veces de las que bajan, así que esperar suele significar comprar más caro." },
          { p: "Repartir la entrada reduce el arrepentimiento en el peor escenario, no mejora el resultado esperado. Es una decisión sobre cuánta incomodidad estás dispuesto a soportar, y decirlo con claridad es más honesto que presentarlo como una optimización." },
          { h: "Dónde sí es claramente superior" },
          { p: "Hay que distinguir dos situaciones que suelen confundirse. Si ya tienes una suma disponible, repartirla es una decisión psicológica. Si inviertes lo que vas ganando cada mes, no estás eligiendo nada: aportar de forma periódica es sencillamente la única forma posible de invertir un salario, y ahí la discusión no existe." },
          { ul: [
            "<strong>Automatiza el hábito.</strong> Lo que se ejecuta solo no depende de que te apetezca ese mes.",
            "<strong>Elimina la peor decisión.</strong> Intentar acertar el momento de entrada es donde se concentra buena parte del daño que se hace el inversor particular.",
            "<strong>Convierte las caídas en algo útil.</strong> Si sigues aportando, un mercado que baja te da más unidades por el mismo dinero.",
            "<strong>Reduce la probabilidad de rendirse.</strong> Una entrada única justo antes de una caída fuerte hace abandonar a mucha gente en el peor momento."
          ]},
          { h: "Lo que no hace" },
          { p: "No protege de las pérdidas. Si el activo cae de forma sostenida durante años, aportar cada mes significa acumular más unidades de algo que sigue perdiendo valor. El método resuelve el problema de cuándo entrar; no resuelve el de en qué se entra." },
          { quiz: {
            q: "¿Cuál es el principal argumento a favor de aportar de forma periódica?",
            options: [
              "Que elimina la decisión de acertar el momento de entrada y hace sostenible el hábito",
              "Que produce sistemáticamente mejores resultados que invertir la suma de golpe",
              "Que protege la cartera de las caídas del mercado"
            ],
            answer: 0,
            explain: "Comparado con invertir de golpe una suma disponible, repartir la entrada suele dar un resultado algo peor, porque los mercados tienden a subir con el tiempo. Su valor está en el comportamiento: automatiza, quita de en medio una decisión difícil y hace más probable que la persona siga invirtiendo."
          }}
        ]
      },
      en: {
        title: "Dollar cost averaging",
        body: [
          { p: "It means investing a fixed amount at regular intervals, regardless of price. When the asset is expensive, that amount buys fewer units; when it is cheap, it buys more. It is the method most often recommended to beginners, and it is worth understanding exactly why." },
          { h: "The mechanism" },
          { table: {
            head: ["Month", "Price", "Contribution", "Units bought"],
            rows: [
              ["1", "100", "300", "3.00"],
              ["2", "75", "300", "4.00"],
              ["3", "60", "300", "5.00"],
              ["4", "80", "300", "3.75"],
              ["Total", "", "1,200", "15.75"]
            ]
          }},
          { note: "Constructed figures. The average price across the four months is 78.75, but the average cost per unit is 1,200 divided by 15.75, that is 76.19. The gap comes from having bought more units in the cheap months, which happens automatically when the contribution is held fixed." },
          { key: "That effect is real, but it is a by-product. The main reason to contribute regularly isn't arithmetic: it is that it removes the decision of when to enter, which is where most investors hurt themselves." },
          { h: "What the evidence actually says" },
          { p: "When investing an available lump sum at once is compared with spreading it over months, immediate investment produces the better result across most historical periods studied. The reason is simple: markets rise more often than they fall, so waiting usually means buying higher." },
          { p: "Spreading the entry reduces regret in the worst case, it doesn't improve the expected result. It is a decision about how much discomfort you are willing to bear, and saying so plainly is more honest than presenting it as an optimisation." },
          { h: "Where it is clearly superior" },
          { p: "Two situations get confused here. If you already hold a lump sum, spreading it is a psychological decision. If you invest what you earn each month, you aren't choosing anything: regular contribution is simply the only possible way to invest a salary, and there the debate doesn't exist." },
          { ul: [
            "<strong>It automates the habit.</strong> What runs by itself doesn't depend on how you feel that month.",
            "<strong>It removes the worst decision.</strong> Trying to time the entry is where much of the damage private investors do to themselves is concentrated.",
            "<strong>It turns falls into something useful.</strong> If you keep contributing, a falling market hands you more units for the same money.",
            "<strong>It lowers the chance of giving up.</strong> A single entry just before a sharp fall makes many people quit at the worst possible moment."
          ]},
          { h: "What it doesn't do" },
          { p: "It doesn't protect against losses. If the asset falls steadily for years, contributing monthly means accumulating more units of something that keeps losing value. The method solves when to enter; it doesn't solve what to enter." },
          { quiz: {
            q: "What is the main argument for contributing regularly?",
            options: [
              "It removes the decision of timing the entry and makes the habit sustainable",
              "It systematically produces better results than investing a lump sum at once",
              "It protects the portfolio from market falls"
            ],
            answer: 0,
            explain: "Compared with investing an available lump sum at once, spreading the entry usually gives a slightly worse result, because markets tend to rise over time. Its value is behavioural: it automates, it takes a hard decision off the table, and it makes it more likely the person keeps investing."
          }}
        ]
      }
    },
    {
      id: "psicologia-del-inversor",
      minutes: 8,
      es: {
        title: "Psicología del inversor",
        body: [
          { p: "Todo lo anterior supone que quien invierte ejecuta su plan. En la práctica no ocurre así, y la diferencia entre el resultado de un fondo y el resultado medio de quienes invirtieron en él suele ser negativa: la gente entra después de las subidas y sale después de las caídas." },
          { h: "Los sesgos que más dinero cuestan" },
          { ul: [
            "<strong>Aversión a la pérdida.</strong> Perder duele más de lo que satisface ganar la misma cantidad. De ahí la tendencia a vender pronto lo que sube y mantener indefinidamente lo que baja, que es exactamente lo contrario de lo que conviene a una cartera.",
            "<strong>Sesgo de confirmación.</strong> Se busca información que respalde lo que ya se piensa y se descarta la que lo contradice. Tras comprar una acción, uno lee sobre ella de forma distinta a como leía antes.",
            "<strong>Exceso de confianza.</strong> Casi todo el mundo se considera mejor que la media al evaluar oportunidades. Este sesgo se traduce en más operaciones, más concentración y más costes.",
            "<strong>Anclaje.</strong> El precio al que compraste no significa nada para el mercado, pero condiciona todas tus decisiones posteriores sobre ese activo.",
            "<strong>Efecto rebaño.</strong> Cuando todo el mundo compra algo, resistirse exige una convicción que la mayoría no tiene, y la presión aumenta cuanto más sube."
          ]},
          { key: "Los sesgos no se corrigen conociéndolos. Saber que existen no impide caer en ellos: lo que ayuda es diseñar un sistema que no dependa de estar en buenas condiciones el día de la decisión." },
          { h: "La contabilidad mental" },
          { p: "Tendemos a separar el dinero en compartimentos y a tratarlo de forma distinta según su origen. La ganancia obtenida con una operación afortunada se arriesga con mucha más ligereza que el dinero ahorrado del salario, aunque valga exactamente lo mismo. Es la misma lógica que hace que en un casino se apueste distinto con las fichas ganadas." },
          { h: "Defensas que funcionan" },
          { ul: [
            "<strong>Escribir la tesis antes de comprar.</strong> Qué esperas, por qué, en qué plazo y qué te haría reconocer que estabas equivocado. Sin ese texto, la memoria reescribe el razonamiento a posteriori.",
            "<strong>Automatizar las aportaciones.</strong> Lo que no se decide cada mes no está expuesto al estado de ánimo de cada mes.",
            "<strong>Rebalancear con una regla.</strong> Fechas o umbrales fijados por adelantado obligan a hacer lo incómodo, que suele ser lo correcto.",
            "<strong>Mirar la cartera menos a menudo.</strong> Cuanto más frecuente es la consulta, más caídas se observan y más se activa la aversión a la pérdida, sin que la información adicional aporte nada."
          ]},
          { note: "Hay una asimetría que conviene tener presente: una decisión precipitada puede deshacer años de aportaciones disciplinadas, mientras que ninguna decisión brillante compensa el abandono del plan. Por eso la parte más rentable de la educación financiera no es aprender a elegir mejor, sino aprender a no hacer nada cuando no hay nada que hacer." },
          { quiz: {
            q: "¿Por qué el resultado medio de los inversores de un fondo suele ser inferior al resultado del propio fondo?",
            options: [
              "Porque tienden a entrar después de las subidas y a salir después de las caídas",
              "Porque las comisiones no están incluidas en el resultado publicado del fondo",
              "Porque los fondos calculan mal su rentabilidad histórica"
            ],
            answer: 0,
            explain: "El resultado del fondo asume permanencia durante todo el período. El del inversor depende de cuándo entró y cuándo salió. Como el dinero llega después de los buenos años y se marcha tras los malos, la experiencia media queda por debajo del producto en el que se invirtió."
          }}
        ]
      },
      en: {
        title: "Investor psychology",
        body: [
          { p: "Everything above assumes the investor executes the plan. In practice that isn't what happens, and the gap between a fund's return and the average return of the people who invested in it is usually negative: money arrives after the rises and leaves after the falls." },
          { h: "The biases that cost the most money" },
          { ul: [
            "<strong>Loss aversion.</strong> Losing hurts more than gaining the same amount satisfies. Hence the tendency to sell winners early and hold losers indefinitely, which is exactly the opposite of what serves a portfolio.",
            "<strong>Confirmation bias.</strong> You seek information supporting what you already think and discard what contradicts it. After buying a share, you read about it differently than you did before.",
            "<strong>Overconfidence.</strong> Almost everyone rates themselves above average at spotting opportunities. This bias translates into more trades, more concentration and more costs.",
            "<strong>Anchoring.</strong> The price you paid means nothing to the market, but it shapes every subsequent decision you make about that asset.",
            "<strong>Herding.</strong> When everyone is buying something, resisting takes a conviction most people don't have, and the pressure grows the higher it goes."
          ]},
          { key: "Biases aren't corrected by knowing about them. Being aware they exist doesn't stop you falling into them: what helps is designing a system that doesn't depend on being in good shape on the day of the decision." },
          { h: "Mental accounting" },
          { p: "We tend to file money into compartments and treat it differently depending on where it came from. A gain from a lucky trade is risked far more casually than money saved from a salary, even though it is worth exactly the same. It is the logic that makes people bet differently with chips they won at a casino." },
          { h: "Defences that work" },
          { ul: [
            "<strong>Write the thesis before buying.</strong> What you expect, why, over what horizon, and what would make you admit you were wrong. Without that text, memory rewrites the reasoning afterwards.",
            "<strong>Automate contributions.</strong> What isn't decided each month isn't exposed to each month's mood.",
            "<strong>Rebalance to a rule.</strong> Dates or thresholds set in advance force you to do the uncomfortable thing, which is usually the right one.",
            "<strong>Look at the portfolio less often.</strong> The more frequently you check, the more falls you observe and the more loss aversion is triggered, while the extra information adds nothing."
          ]},
          { note: "One asymmetry is worth holding on to: a single rash decision can undo years of disciplined contributions, while no brilliant decision compensates for abandoning the plan. That is why the most profitable part of financial education isn't learning to choose better, but learning to do nothing when there is nothing to do." },
          { quiz: {
            q: "Why is the average return of a fund's investors usually below the fund's own return?",
            options: [
              "Because they tend to buy after the rises and sell after the falls",
              "Because fees aren't included in the fund's published return",
              "Because funds calculate their historical returns incorrectly"
            ],
            answer: 0,
            explain: "A fund's return assumes you held throughout the period. An investor's return depends on when they entered and exited. Since money arrives after the good years and leaves after the bad ones, the average experience lands below the product invested in."
          }}
        ]
      }
    },
    {
      id: "errores-comunes",
      minutes: 8,
      es: {
        title: "Errores más comunes",
        body: [
          { p: "Cerramos el curso con la lista de fallos que más se repiten. No son errores de gente descuidada: son las conclusiones a las que lleva el razonamiento normal cuando no se ha visto antes el mecanismo que hay detrás." },
          { h: "Sobre las decisiones" },
          { ul: [
            "<strong>Empezar por el producto.</strong> Elegir en qué invertir antes de definir el plazo, el objetivo y cuánto se puede perder sin cambiar de plan. El orden correcto es el inverso.",
            "<strong>Invertir sin fondo de emergencia.</strong> Obliga a vender en el peor momento cuando aparece un gasto imprevisto, que es exactamente cuando el mercado suele estar caído.",
            "<strong>Confundir simple con seguro.</strong> Un producto fácil de entender puede perder mucho dinero. La comprensión reduce el riesgo de sorpresa, no el de pérdida.",
            "<strong>Buscar seguridad en la concentración.</strong> Conocer bien una empresa no protege de lo que le ocurra a esa empresa."
          ]},
          { h: "Sobre los costes y los impuestos" },
          { ul: [
            "<strong>Ignorar el coste porcentual.</strong> Una diferencia anual de un punto porcentual parece pequeña y se convierte en una parte muy considerable del resultado a lo largo de décadas.",
            "<strong>Operar demasiado.</strong> Cada movimiento tiene horquilla, comisión y, en muchos países, un impacto fiscal. La actividad se siente productiva y casi nunca lo es.",
            "<strong>Olvidar la fiscalidad hasta el final.</strong> Elegir entre acumulación y distribución, o entre dos domicilios de fondo, tiene consecuencias que no se pueden corregir después."
          ]},
          { h: "Sobre la información" },
          { ul: [
            "<strong>Seguir a alguien que gana dinero enseñando a invertir.</strong> Su incentivo es tu atención, no tu resultado. Es una pregunta legítima que puedes hacerte con cualquier fuente, incluida esta.",
            "<strong>Confundir un resultado con una prueba.</strong> Un acierto puede ser suerte y un fallo puede ser mala suerte. Solo el proceso repetido dice algo.",
            "<strong>Creer que hay información sin dueño.</strong> Cuando una idea llega a un particular, ya ha pasado por mucha gente con más medios y más rapidez."
          ]},
          { key: "El error más caro de todos no está en esta lista y no es técnico: es dejar de aportar. Ninguna selección brillante compensa años sin invertir, y ninguna equivocación de producto hace tanto daño como abandonar el plan." },
          { h: "Lo que has aprendido en dieciséis módulos" },
          { p: "Empezamos preguntando qué es el dinero y terminamos con derivados, factores y sesgos de comportamiento. El hilo que une todo el curso es una sola idea repetida: entender el mecanismo antes de aceptar la conclusión. Por qué sube un precio, de dónde sale un dividendo, qué obligación crea un contrato, qué cobra un fondo y por qué." },
          { p: "Nada de lo que has visto aquí te dice qué comprar. Ese no era el objetivo y no habría sido honesto intentarlo. Lo que sí tienes ahora es la capacidad de leer una ficha de producto, de reconocer una promesa imposible y de hacer las preguntas que separan una explicación de un argumento de venta." },
          { note: "Recordatorio final, y va en serio: Farlaz no es un asesor de inversión registrado y nada de este curso constituye una recomendación personalizada. Los ejemplos numéricos son construidos. Antes de tomar decisiones con tu dinero, consulta a un profesional que conozca tu situación concreta y la normativa de tu país." },
          { quiz: {
            q: "De todos los errores del módulo, ¿cuál tiende a tener el mayor coste acumulado?",
            options: [
              "Interrumpir las aportaciones o abandonar el plan tras una caída",
              "Elegir un fondo con una comisión algo superior a la del más barato",
              "Comprar un producto que no se entiende del todo"
            ],
            answer: 0,
            explain: "Los otros dos restan una parte del resultado y son corregibles. Dejar de invertir elimina el tiempo, que es el único componente que no se puede recuperar después. Por eso la constancia pesa más que la selección."
          }}
        ]
      },
      en: {
        title: "Most common mistakes",
        body: [
          { p: "We close the course with the failures that repeat most. These aren't the errors of careless people: they are the conclusions ordinary reasoning reaches when the underlying mechanism hasn't been seen before." },
          { h: "About decisions" },
          { ul: [
            "<strong>Starting with the product.</strong> Choosing what to invest in before defining the horizon, the goal and how much can be lost without changing plan. The right order is the reverse.",
            "<strong>Investing with no emergency fund.</strong> It forces selling at the worst moment when an unexpected expense appears, which is exactly when markets tend to be down.",
            "<strong>Confusing simple with safe.</strong> A product that is easy to understand can lose a great deal of money. Understanding reduces the risk of surprise, not the risk of loss.",
            "<strong>Seeking safety in concentration.</strong> Knowing one company well doesn't protect you from what happens to that company."
          ]},
          { h: "About costs and taxes" },
          { ul: [
            "<strong>Ignoring the percentage cost.</strong> An annual difference of one percentage point looks small and becomes a very substantial share of the result across decades.",
            "<strong>Trading too much.</strong> Every move carries a spread, a commission and, in many countries, a tax consequence. Activity feels productive and almost never is.",
            "<strong>Leaving tax until the end.</strong> Choosing between accumulating and distributing, or between two fund domiciles, has consequences that cannot be corrected afterwards."
          ]},
          { h: "About information" },
          { ul: [
            "<strong>Following someone who makes money teaching investing.</strong> Their incentive is your attention, not your result. It is a fair question to ask of any source, including this one.",
            "<strong>Mistaking an outcome for proof.</strong> A win can be luck and a loss can be bad luck. Only the repeated process says anything.",
            "<strong>Believing information has no owner.</strong> By the time an idea reaches a private investor, it has passed through many people with more resources and more speed."
          ]},
          { key: "The costliest mistake of all isn't on this list and isn't technical: it is stopping contributions. No brilliant selection compensates for years out of the market, and no product mistake does as much damage as abandoning the plan." },
          { h: "What you have learned across sixteen modules" },
          { p: "We began by asking what money is and we finish with derivatives, factors and behavioural biases. The thread running through the whole course is a single repeated idea: understand the mechanism before accepting the conclusion. Why a price rises, where a dividend comes from, what obligation a contract creates, what a fund charges and why." },
          { p: "Nothing here tells you what to buy. That was never the goal and attempting it wouldn't have been honest. What you do have now is the ability to read a product factsheet, recognise an impossible promise, and ask the questions that separate an explanation from a sales pitch." },
          { note: "A final reminder, and we mean it: Farlaz is not a registered investment adviser and nothing in this course constitutes personalised advice. The numerical examples are constructed. Before making decisions with your money, consult a professional who knows your specific situation and the rules of your country." },
          { quiz: {
            q: "Of all the mistakes in this module, which tends to carry the largest cumulative cost?",
            options: [
              "Interrupting contributions or abandoning the plan after a fall",
              "Choosing a fund with a fee slightly above the cheapest available",
              "Buying a product you don't fully understand"
            ],
            answer: 0,
            explain: "The other two subtract part of the result and are correctable. Stopping investing removes time, the one component that cannot be recovered later. That is why consistency matters more than selection."
          }}
        ]
      }
    }
  ]
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
