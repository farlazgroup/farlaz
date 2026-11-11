/* ==========================================================================
   Farlaz — Cuerpo de los artículos (6)
   ========================================================================== */

window.FARLAZ_ARTICLES = window.FARLAZ_ARTICLES || {};

(function () {
  var A = "Luis Andrés Farrugia V.";
  var DIS_ES = "Contenido educativo. Los números son un ejemplo construido para ilustrar el método y no constituyen recomendación de inversión ni asesoramiento personalizado.";
  var DIS_EN = "Educational content. The figures are a constructed example illustrating the method and do not constitute an investment recommendation or personalised advice.";
  var GEN_ES = "Contenido educativo. No constituye recomendación de inversión ni asesoramiento personalizado.";
  var GEN_EN = "Educational content. Not an investment recommendation or personalised advice.";

/* ------------------------------------------------------------------- 21 */
window.FARLAZ_ARTICLES["tarjeta-de-credito-pago-minimo"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Tienes 2.000 dólares de saldo en la tarjeta de crédito, con una tasa del 36% anual. Es un ejemplo, pero no exagerado: en la región hay muchas tarjetas en ese rango y algunas por encima. El estado de cuenta te ofrece pagar solo el mínimo. ¿Qué pasa si lo haces?" },
      { h: "Cómo se calcula el pago mínimo" },
      { p: "Cada banco tiene su fórmula, pero una muy común es: los intereses del mes más un 1% del saldo, con un mínimo fijo de unos 25 dólares. Con un 36% anual, los intereses son un 3% al mes. Así que de un pago mínimo de 80 dólares, unos 60 son intereses y solo 20 reducen la deuda." },
      { table: {
        head: ["Saldo de 2.000 al 36% anual", "Tiempo hasta pagarla", "Intereses totales"],
        rows: [
          ["Pago mínimo (intereses + 1%)", "~163 meses (casi 14 años)", "~4.670"],
          ["Pago fijo de 100 al mes", "31 meses", "~1.100"],
          ["Pago fijo de 200 al mes", "13 meses", "~415"]
        ]
      }},
      { p: "Pagando el mínimo, una deuda de 2.000 dólares se convierte en casi catorce años de pagos y más del doble en intereses que la deuda original. Y eso suponiendo que no vuelvas a usar la tarjeta." },
      { key: "El pago mínimo no está diseñado para que salgas de la deuda. Está diseñado para que la deuda dure lo máximo posible sin que dejes de pagar." },
      { h: "Por qué es la deuda más cara" },
      { p: "Ninguna inversión razonable te va a dar un 36% anual de forma sostenida. Por eso pagar la tarjeta es, en la práctica, la mejor \"inversión\" que tiene disponible quien carga saldo. Cada dólar que la amortiza te ahorra ese 36%, sin riesgo." },
      { h: "Cómo usarla sin pagar intereses" },
      { ul: [
        "Paga el saldo total cada mes. Casi todas las tarjetas tienen un periodo de gracia: si liquidas todo antes de la fecha de pago, no hay intereses sobre las compras.",
        "Si ya tienes saldo, fija un pago muy por encima del mínimo y automatízalo.",
        "Si tienes varias deudas, ataca primero la de tasa más alta mientras pagas el mínimo en las demás.",
        "Ojo con los avances de efectivo: suelen cobrar interés desde el primer día y una comisión aparte."
      ]},
      { note: "Antes de pensar en invertir, liquida cualquier saldo de tarjeta. No hay cartera que compense pagar un 36%." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "You have a 2,000-dollar balance on your credit card at 36% a year. It's an example, but not an exaggerated one: many cards in the region charge around that and some charge more. The statement offers you the option of paying only the minimum. What happens if you do?" },
      { h: "How the minimum payment works" },
      { p: "Every bank has its own formula, but a very common one is: the month's interest plus 1% of the balance, with a fixed floor of about 25 dollars. At 36% a year, interest is 3% a month. So of an 80-dollar minimum payment, about 60 is interest and only 20 reduces the debt." },
      { table: {
        head: ["Balance of 2,000 at 36% a year", "Time to pay it off", "Total interest"],
        rows: [
          ["Minimum payment (interest + 1%)", "~163 months (almost 14 years)", "~4,670"],
          ["Fixed 100 a month", "31 months", "~1,100"],
          ["Fixed 200 a month", "13 months", "~415"]
        ]
      }},
      { p: "Paying the minimum, a 2,000-dollar debt becomes almost fourteen years of payments and more than twice the original debt in interest. And that's assuming you never use the card again." },
      { key: "The minimum payment isn't designed to get you out of debt. It's designed to make the debt last as long as possible without you defaulting." },
      { h: "Why it's the most expensive debt" },
      { p: "No sensible investment will give you 36% a year consistently. That's why paying off the card is, in practice, the best \"investment\" available to anyone carrying a balance. Every dollar that reduces it saves you that 36%, risk-free." },
      { h: "How to use a card without paying interest" },
      { ul: [
        "Pay the full balance every month. Almost every card has a grace period: if you clear it all before the due date, there's no interest on purchases.",
        "If you already carry a balance, set a payment well above the minimum and automate it.",
        "If you have several debts, attack the highest rate first while paying the minimum on the others.",
        "Watch out for cash advances: they usually charge interest from day one plus a separate fee."
      ]},
      { note: "Before thinking about investing, clear any card balance. No portfolio makes up for paying 36%." }
    ]
  }
};

/* ------------------------------------------------------------------- 22 */
window.FARLAZ_ARTICLES["recompras-de-acciones"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Una empresa que genera más caja de la que necesita tiene varias opciones: invertir en el negocio, comprar otras empresas, pagar deuda, repartir dividendos o recomprar sus propias acciones. Las recompras se han vuelto muy populares, sobre todo en Estados Unidos. Se presentan casi siempre como una buena noticia. No siempre lo son." },
      { h: "Cómo funcionan" },
      { p: "La empresa compra acciones en el mercado y las amortiza. Hay menos acciones, así que cada una representa una parte mayor de la empresa. Si tienes 10 de 100 acciones y la empresa recompra 10, ahora tienes 10 de 90 sin haber hecho nada." },
      { h: "La variable que decide todo: el precio" },
      { p: "Supongamos una empresa que vale realmente 1.000 y tiene 100 acciones: 10 por acción. Usa caja para recomprar 10 acciones." },
      { table: {
        head: ["Ejemplo construido", "Recompra a 8", "Recompra a 15"],
        rows: [
          ["Caja gastada", "80", "150"],
          ["Valor que queda", "920", "850"],
          ["Acciones que quedan", "90", "90"],
          ["<strong>Valor por acción</strong>", "<strong>10,22</strong>", "<strong>9,44</strong>"]
        ]
      }},
      { p: "Recomprando por debajo de su valor, la empresa enriquece a los accionistas que se quedan. Recomprando por encima, les quita valor y se lo da a los que venden. Es exactamente lo mismo que pasa cuando tú compras una acción cara o barata." },
      { key: "Una recompra es una inversión de la empresa en sí misma. Como cualquier inversión, el precio de entrada decide si crea o destruye valor." },
      { h: "Señales de alerta" },
      { ul: [
        "Recompras financiadas con deuda en momentos de valoración alta.",
        "Recompras que coinciden con fuertes emisiones de acciones para pagar a directivos: el número total de acciones apenas baja.",
        "Empresas que recompran mucho cuando el precio está en máximos y dejan de hacerlo cuando cae, justo al revés de lo que convendría.",
        "Planes de remuneración ligados al beneficio por acción, que la recompra sube aunque el negocio no mejore."
      ]},
      { note: "Para juzgar una recompra, mira el número neto de acciones en circulación a cinco años y el precio medio al que se compraron. Muchas empresas lo publican en su informe anual." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "A company generating more cash than it needs has several options: invest in the business, buy other companies, pay down debt, pay dividends or buy back its own shares. Buybacks have become very popular, especially in the United States. They're almost always presented as good news. They aren't always." },
      { h: "How they work" },
      { p: "The company buys shares in the market and cancels them. There are fewer shares, so each represents a larger slice of the company. If you hold 10 of 100 shares and the company buys back 10, you now hold 10 of 90 without doing anything." },
      { h: "The variable that decides everything: price" },
      { p: "Take a company genuinely worth 1,000 with 100 shares: 10 per share. It uses cash to buy back 10 shares." },
      { table: {
        head: ["Constructed example", "Buyback at 8", "Buyback at 15"],
        rows: [
          ["Cash spent", "80", "150"],
          ["Value remaining", "920", "850"],
          ["Shares remaining", "90", "90"],
          ["<strong>Value per share</strong>", "<strong>10.22</strong>", "<strong>9.44</strong>"]
        ]
      }},
      { p: "Buying back below its value, the company enriches the shareholders who stay. Buying back above it, it takes value from them and hands it to those who sell. It's exactly what happens when you buy a share dear or cheap." },
      { key: "A buyback is a company investing in itself. Like any investment, the entry price decides whether it creates or destroys value." },
      { h: "Warning signs" },
      { ul: [
        "Debt-funded buybacks at high valuations.",
        "Buybacks alongside heavy share issuance to pay executives: the total share count barely falls.",
        "Companies that buy back heavily when the price is at highs and stop when it falls, exactly the wrong way round.",
        "Pay plans tied to earnings per share, which a buyback lifts even if the business doesn't improve."
      ]},
      { note: "To judge a buyback, look at the net share count over five years and the average price paid. Many companies publish it in their annual report." }
    ]
  }
};

/* ------------------------------------------------------------------- 23 */
window.FARLAZ_ARTICLES["aportaciones-periodicas-vs-unica"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Recibes 12.000 dólares y decides invertirlos en un fondo indexado. Tienes dos opciones: meterlo todo hoy o repartirlo en doce aportaciones de 1.000, una al mes. La segunda se llama promediar el costo, o DCA por sus siglas en inglés." },
      { h: "Lo que dicen los datos" },
      { p: "Como los mercados de acciones suben más años de los que bajan, el dinero que esperas fuera del mercado suele perderse parte de esa subida. Un estudio de Vanguard sobre mercados de Estados Unidos, Reino Unido y Australia encontró que invertir todo de golpe superó a repartirlo en doce meses en aproximadamente dos de cada tres periodos." },
      { h: "Dos escenarios" },
      { table: {
        head: ["Ejemplo construido (12.000)", "Todo de golpe", "1.000 al mes"],
        rows: [
          ["El precio cae primero y luego se recupera hasta 120", "14.400", "14.592"],
          ["El precio sube todo el año hasta 140", "16.800", "13.793"]
        ]
      }},
      { p: "Cuando el mercado cae al principio, repartir gana un poco: compras más unidades a precios bajos. Cuando sube de forma sostenida, que es lo que ocurre con más frecuencia, entrar de golpe gana por bastante más." },
      { key: "Matemáticamente, invertir todo de una vez gana la mayoría de las veces. Psicológicamente, repartir reduce el arrepentimiento si el mercado cae justo después." },
      { h: "Entonces, ¿por qué repartir?" },
      { p: "Porque la mejor estrategia es la que vas a mantener. Si invertir todo y ver una caída del 20% la semana siguiente te haría vender en pánico, repartir la entrada puede ser la opción racional para ti, aunque no sea la óptima en promedio. Pagas un pequeño coste esperado a cambio de dormir tranquilo." },
      { ul: [
        "Si el dinero ya lo tienes y tu horizonte es largo, entrar de golpe es, en promedio, lo más eficiente.",
        "Si la volatilidad te pone nervioso, repartir en un plazo corto (tres a seis meses) es un buen compromiso.",
        "Si inviertes de tu sueldo cada mes, eso no es una elección: ya estás promediando, y es una gran forma de construir patrimonio."
      ]},
      { note: "Lo que nunca funciona es esperar a \"que baje\" sin plan. Ese dinero suele quedarse fuera mucho más tiempo del previsto." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "You receive 12,000 dollars and decide to put it into an index fund. You have two options: invest it all today or split it into twelve contributions of 1,000, one a month. The second is called dollar-cost averaging, or DCA." },
      { h: "What the data says" },
      { p: "Because stock markets rise in more years than they fall, money waiting outside the market tends to miss some of that rise. A Vanguard study of the US, UK and Australian markets found that investing all at once beat spreading it over twelve months in roughly two out of three periods." },
      { h: "Two scenarios" },
      { table: {
        head: ["Constructed example (12,000)", "All at once", "1,000 a month"],
        rows: [
          ["Price falls first, then recovers to 120", "14,400", "14,592"],
          ["Price rises all year to 140", "16,800", "13,793"]
        ]
      }},
      { p: "When the market falls early, spreading wins slightly: you buy more units at low prices. When it rises steadily, which happens more often, going in at once wins by a wider margin." },
      { key: "Mathematically, investing everything at once wins most of the time. Psychologically, spreading it out reduces regret if the market falls straight afterwards." },
      { h: "So why spread it?" },
      { p: "Because the best strategy is the one you'll stick with. If investing it all and seeing a 20% drop the following week would make you panic-sell, spreading your entry may be the rational choice for you, even if it isn't optimal on average. You pay a small expected cost in exchange for sleeping well." },
      { ul: [
        "If you already have the money and a long horizon, going in at once is, on average, the most efficient.",
        "If volatility makes you nervous, spreading over a short period (three to six months) is a good compromise.",
        "If you invest from your salary each month, that isn't a choice: you're already averaging, and it's a great way to build wealth."
      ]},
      { note: "What never works is waiting for it to \"come down\" without a plan. That money usually stays out far longer than intended." }
    ]
  }
};

/* ------------------------------------------------------------------- 24 */
window.FARLAZ_ARTICLES["petroleo-y-latinoamerica"] = {
  es: {
    author: A, disclosure: GEN_ES,
    body: [
      { p: "Cuando el precio del petróleo sube, los titulares suelen hablar de \"Latinoamérica\" como si fuera un solo país. No lo es. Para algunas economías de la región el barril caro es una fuente de ingresos; para otras es una factura. Entender en qué lado está cada país es el primer paso para leer el dato." },
      { h: "Los exportadores" },
      { p: "Países como Colombia, Ecuador o Venezuela, y en distinta medida Brasil y México, venden petróleo al exterior. En varios de ellos, una parte importante de los ingresos del Estado depende directa o indirectamente del crudo. Cuando sube, entran más divisas, mejoran las cuentas públicas y la moneda local tiende a fortalecerse. Cuando cae, ocurre lo contrario, y a veces de golpe." },
      { h: "Los importadores" },
      { p: "Panamá, buena parte de Centroamérica y el Caribe, Chile o Uruguay compran casi todo el petróleo que consumen. Para ellos, un barril caro significa más gasto en importaciones, transporte más caro y presión sobre la inflación. En Panamá se nota con rapidez en el precio de la gasolina y en el costo de llevar mercancía de un lado a otro." },
      { key: "El mismo movimiento del petróleo puede ser una buena noticia en Bogotá y una mala en Ciudad de Panamá. No hay una lectura regional única." },
      { h: "Qué mirar como inversor" },
      { ul: [
        "La moneda: en los exportadores, el tipo de cambio suele moverse con el crudo. Si inviertes en sus activos desde dólares, esa correlación cuenta.",
        "Las empresas: petroleras, aerolíneas, transportistas y químicas reaccionan de forma opuesta al mismo precio.",
        "La deuda pública: en países muy dependientes del crudo, una caída prolongada del precio suele ampliar el diferencial de riesgo país.",
        "La inflación local: en los importadores, el petróleo es una de las vías más rápidas de inflación importada."
      ]},
      { note: "En nuestra sección de Mercados puedes seguir el precio del WTI en tiempo real. Pregúntate siempre: ¿para quién es buena esta noticia?" }
    ]
  },
  en: {
    author: A, disclosure: GEN_EN,
    body: [
      { p: "When the oil price rises, headlines tend to talk about \"Latin America\" as if it were one country. It isn't. For some economies in the region an expensive barrel is revenue; for others it's a bill. Knowing which side each country is on is the first step in reading the move." },
      { h: "The exporters" },
      { p: "Countries such as Colombia, Ecuador and Venezuela, and to different degrees Brazil and Mexico, sell oil abroad. In several of them, a large share of state revenue depends directly or indirectly on crude. When it rises, more foreign currency comes in, public finances improve and the local currency tends to strengthen. When it falls, the reverse happens, sometimes abruptly." },
      { h: "The importers" },
      { p: "Panama, much of Central America and the Caribbean, Chile and Uruguay buy almost all the oil they use. For them, an expensive barrel means a bigger import bill, dearer transport and pressure on inflation. In Panama it shows up quickly in fuel prices and the cost of moving goods around." },
      { key: "The same oil move can be good news in Bogotá and bad news in Panama City. There's no single regional reading." },
      { h: "What to watch as an investor" },
      { ul: [
        "The currency: in exporters, the exchange rate often moves with crude. If you invest in their assets from dollars, that correlation matters.",
        "Companies: oil producers, airlines, hauliers and chemical firms react in opposite ways to the same price.",
        "Government debt: in heavily oil-dependent countries, a prolonged price fall tends to widen the country risk spread.",
        "Local inflation: for importers, oil is one of the fastest routes for imported inflation."
      ]},
      { note: "You can follow the WTI price live in our Markets section. Always ask yourself: who is this news good for?" }
    ]
  }
};

/* ------------------------------------------------------------------- 25 */
window.FARLAZ_ARTICLES["apalancamiento-operativo"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Dos empresas venden 1.000 y ganan 100. Las dos aumentan sus ventas un 10%. Una gana 115; la otra, 190. No es magia ni mejor gestión: es la estructura de sus costes." },
      { h: "Costes fijos y variables" },
      { p: "Los costes variables crecen con cada venta: materia prima, comisiones, envíos. Los fijos no cambian aunque vendas más o menos: alquileres, salarios de plantilla, desarrollo de software, una fábrica. Cuanto mayor es la parte fija, más se amplifica cualquier cambio en las ventas." },
      { table: {
        head: ["Ejemplo construido", "Comercio (costes sobre todo variables)", "Software (costes sobre todo fijos)"],
        rows: [
          ["Costes variables", "85% de las ventas", "10% de las ventas"],
          ["Costes fijos", "50", "800"],
          ["Beneficio con ventas de 1.000", "100", "100"],
          ["Ventas +10% (1.100)", "115 (+15%)", "190 (+90%)"],
          ["Ventas -10% (900)", "85 (-15%)", "10 (-90%)"]
        ]
      }},
      { key: "El apalancamiento operativo funciona en las dos direcciones. Lo que hace que el beneficio casi se duplique con un 10% más de ventas también lo hace desaparecer con un 10% menos." },
      { h: "Cómo detectarlo" },
      { ul: [
        "Compara el crecimiento del beneficio operativo con el de las ventas durante varios años. Si el primero se mueve mucho más que el segundo, hay mucho apalancamiento.",
        "Mira el margen bruto: un margen bruto muy alto (70-90%) suele indicar costes variables bajos y, por tanto, mucho coste fijo por debajo.",
        "Observa qué pasó en el último año malo del sector. Ahí se ve la estructura real."
      ]},
      { h: "Por qué importa" },
      { p: "Explica por qué las acciones de empresas con muchos costes fijos se mueven tanto con pequeñas sorpresas en ventas, y por qué es peligroso valorarlas con el beneficio de un buen año. También explica por qué crecer en ventas puede valer muchísimo para un negocio de software y bastante menos para un distribuidor." },
      { note: "Una empresa con alto apalancamiento operativo y además mucha deuda tiene dos amplificadores en serie. En una recesión, esa combinación es la que más sufre." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "Two companies sell 1,000 and earn 100. Both grow sales by 10%. One earns 115; the other, 190. It isn't magic or better management: it's the structure of their costs." },
      { h: "Fixed and variable costs" },
      { p: "Variable costs grow with every sale: raw materials, commissions, shipping. Fixed costs don't change whether you sell more or less: rent, permanent staff, software development, a factory. The bigger the fixed share, the more any change in sales gets amplified." },
      { table: {
        head: ["Constructed example", "Retailer (mostly variable costs)", "Software (mostly fixed costs)"],
        rows: [
          ["Variable costs", "85% of sales", "10% of sales"],
          ["Fixed costs", "50", "800"],
          ["Profit on sales of 1,000", "100", "100"],
          ["Sales +10% (1,100)", "115 (+15%)", "190 (+90%)"],
          ["Sales -10% (900)", "85 (-15%)", "10 (-90%)"]
        ]
      }},
      { key: "Operating leverage works both ways. What makes profit almost double on 10% more sales also wipes it out on 10% less." },
      { h: "How to spot it" },
      { ul: [
        "Compare growth in operating profit with growth in sales over several years. If the first swings far more than the second, leverage is high.",
        "Look at gross margin: a very high gross margin (70-90%) usually means low variable costs and therefore a lot of fixed cost below.",
        "See what happened in the sector's last bad year. That's where the real structure shows."
      ]},
      { h: "Why it matters" },
      { p: "It explains why shares in companies with high fixed costs swing so much on small sales surprises, and why it's dangerous to value them on a good year's earnings. It also explains why sales growth can be worth a great deal to a software business and much less to a distributor." },
      { note: "A company with high operating leverage and lots of debt has two amplifiers in series. In a recession, that combination suffers most." }
    ]
  }
};

})();
