/* ==========================================================================
   Farlaz — Cuerpo de los artículos (3)
   Se emparejan con content/posts.json por 'slug'.
   ========================================================================== */

window.FARLAZ_ARTICLES = window.FARLAZ_ARTICLES || {};

(function () {
  var A = "Luis Andrés Farrugia V.";
  var DIS_ES = "Contenido educativo. Los números son un ejemplo construido para ilustrar el método y no constituyen recomendación de inversión ni asesoramiento personalizado.";
  var DIS_EN = "Educational content. The figures are a constructed example illustrating the method and do not constitute an investment recommendation or personalised advice.";

/* ------------------------------------------------------------------- 06 */
window.FARLAZ_ARTICLES["interes-compuesto-empezar-pronto"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Todo el mundo ha oído que el interés compuesto es poderoso. Casi nadie lo ha calculado con un ejemplo propio, y por eso casi nadie actúa en consecuencia. Vamos a hacerlo con dos personas y una sola regla: las dos ahorran 200 dólares al mes y obtienen la misma rentabilidad, un 7% anual." },
      { h: "Ana empieza a los 20 y para a los 35" },
      { p: "Ana invierte 200 al mes durante quince años, de los 20 a los 35. Luego no aporta ni un dólar más: deja el dinero quieto hasta los 65. En total ha puesto 36.000 dólares de su bolsillo." },
      { h: "Bruno empieza a los 35 y no para hasta los 65" },
      { p: "Bruno arranca justo cuando Ana se detiene y aporta los mismos 200 al mes durante treinta años seguidos. Pone el doble que Ana: 72.000 dólares." },
      { table: {
        head: ["", "Años aportando", "Dinero aportado", "Valor a los 65"],
        rows: [
          ["Ana", "15 (20 a 35)", "36.000", "~514.500"],
          ["Bruno", "30 (35 a 65)", "72.000", "~244.000"]
        ]
      }},
      { p: "Ana termina con más del doble que Bruno habiendo aportado la mitad. No es un truco: es lo que pasa cuando el dinero tiene treinta años extra para generar rendimientos sobre sus propios rendimientos." },
      { key: "En el interés compuesto, el tiempo pesa más que la cantidad. Cada año que retrasas el inicio no se recupera aportando un poco más después." },
      { h: "Por qué la intuición falla" },
      { p: "Pensamos en línea recta. Si ahorro el doble, espero tener el doble. Pero el crecimiento compuesto es una curva: los últimos años aportan mucho más que los primeros. En el caso de Ana, la mayor parte del valor final se genera en la última década, cuando ella ya lleva veinte años sin aportar nada." },
      { p: "Una regla útil para estimarlo de cabeza es la regla del 72: divide 72 entre la rentabilidad anual y obtienes, aproximadamente, los años que tarda el dinero en duplicarse. Al 7%, unos diez años. Treinta años son tres duplicaciones: el dinero se multiplica por ocho." },
      { h: "Lo que este ejemplo no dice" },
      { ul: [
        "Un 7% anual constante no existe en la vida real. Hay años de +25% y años de -20%. La media de largo plazo de una cartera diversificada en acciones ha estado históricamente en ese entorno, pero no está garantizada.",
        "La inflación se come una parte. 514.500 dólares dentro de 45 años no comprarán lo que compran hoy.",
        "Las comisiones y los impuestos reducen la rentabilidad neta, y su efecto también se compone."
      ]},
      { note: "Si tienes 20 años y crees que 50 dólares al mes no sirven de nada, haz el cálculo. Sirven más que 200 al mes empezando a los 40." },
      { p: "La conclusión práctica no es que haya que invertir todo lo posible a los veinte. Es que empezar, aunque sea con poco, tiene un valor que no se recupera después. El mejor momento para empezar fue hace diez años. El segundo mejor es este mes." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "Everyone has heard that compound interest is powerful. Hardly anyone has worked it through with their own example, which is why hardly anyone acts on it. Let's do it with two people and one rule: both save 200 dollars a month and earn the same return, 7% a year." },
      { h: "Ana starts at 20 and stops at 35" },
      { p: "Ana invests 200 a month for fifteen years, from 20 to 35. After that she doesn't add another dollar: she leaves the money alone until 65. In total she has put in 36,000 dollars of her own." },
      { h: "Bruno starts at 35 and keeps going until 65" },
      { p: "Bruno begins exactly when Ana stops and puts in the same 200 a month for thirty straight years. He contributes twice as much as Ana: 72,000 dollars." },
      { table: {
        head: ["", "Years contributing", "Money put in", "Value at 65"],
        rows: [
          ["Ana", "15 (20 to 35)", "36,000", "~514,500"],
          ["Bruno", "30 (35 to 65)", "72,000", "~244,000"]
        ]
      }},
      { p: "Ana ends up with more than double Bruno's total having contributed half as much. It isn't a trick: it's what happens when money has thirty extra years to earn returns on its own returns." },
      { key: "With compound interest, time outweighs amount. Every year you delay starting can't be made up by contributing a bit more later." },
      { h: "Why intuition gets it wrong" },
      { p: "We think in straight lines. If I save twice as much, I expect twice as much. But compound growth is a curve: the final years contribute far more than the first. In Ana's case, most of the final value is generated in the last decade, when she hasn't contributed anything for twenty years." },
      { p: "A handy way to estimate it in your head is the rule of 72: divide 72 by the annual return and you get, roughly, the years it takes money to double. At 7%, about ten years. Thirty years means three doublings: the money grows eightfold." },
      { h: "What this example doesn't say" },
      { ul: [
        "A steady 7% a year doesn't exist in real life. There are +25% years and -20% years. The long-run average of a diversified equity portfolio has historically been around that level, but it isn't guaranteed.",
        "Inflation takes its share. 514,500 dollars in 45 years won't buy what it buys today.",
        "Fees and taxes reduce the net return, and their effect compounds too."
      ]},
      { note: "If you're 20 and think 50 dollars a month is pointless, run the numbers. It does more than 200 a month starting at 40." },
      { p: "The practical lesson isn't that you should invest everything you can at twenty. It's that starting, even small, has a value you can't recover later. The best time to start was ten years ago. The second best is this month." }
    ]
  }
};

/* ------------------------------------------------------------------- 07 */
window.FARLAZ_ARTICLES["inflacion-economia-dolarizada"] = {
  es: {
    author: A, disclosure: "Contenido educativo. No constituye recomendación de inversión ni asesoramiento personalizado.",
    body: [
      { p: "Panamá usa el dólar estadounidense como moneda de curso legal desde 1904. El balboa existe, pero solo en monedas y siempre a la par con el dólar. Eso tiene una consecuencia que pocos panameños se plantean: el país no tiene política monetaria propia." },
      { h: "Lo que un banco central puede hacer y Panamá no" },
      { p: "En Colombia, México o Chile, cuando la inflación se acelera, el banco central sube su tasa de referencia. El crédito se encarece, el consumo se enfría y los precios se moderan. Cuando la economía se frena, hace lo contrario. También puede dejar que la moneda se deprecie para ganar competitividad." },
      { p: "Panamá no tiene ninguna de esas palancas. No hay un banco central que fije tasas ni moneda que devaluar. Las tasas de interés que pagan los panameños dependen, en buena parte, de lo que decide la Reserva Federal en Washington, más un diferencial por el riesgo del país y de cada banco." },
      { key: "En una economía dolarizada, la política monetaria se importa. Las decisiones de la Fed se pensaron para Estados Unidos, no para Panamá, aunque Panamá viva con ellas." },
      { h: "Ventajas reales" },
      { ul: [
        "Estabilidad de precios: la inflación panameña ha sido históricamente baja y cercana a la estadounidense, muy lejos de los episodios de inflación alta de varios vecinos.",
        "Sin riesgo cambiario frente al dólar: tus ahorros no pierden valor por una devaluación, y endeudarse en dólares no es una apuesta contra tu propia moneda.",
        "Atractivo para la banca internacional y el comercio, que operan sin conversión."
      ]},
      { h: "Costes reales" },
      { ul: [
        "Si Panamá entra en recesión mientras Estados Unidos va bien, las tasas no bajan para ayudar. El ajuste recae en salarios, empleo y gasto público.",
        "Sin prestamista de última instancia clásico, la solidez del sistema bancario depende de su liquidez y de la regulación, no de un banco central que imprima dinero.",
        "La inflación importada sigue entrando: Panamá importa buena parte de lo que consume, así que el precio del petróleo o de los alimentos se transmite casi directamente."
      ]},
      { h: "Qué significa para tus ahorros" },
      { p: "Que la inflación sea baja no significa que sea cero. Una inflación del 2% anual reduce el poder de compra de tu dinero a la mitad en unos 35 años. Una cuenta de ahorro que paga menos que la inflación te hace perder poder adquisitivo cada año, aunque el saldo suba." },
      { note: "Comprueba la tasa real de tu ahorro: tasa de interés que te pagan menos inflación del año. Si sale negativa, ese dinero está perdiendo valor, despacio pero de forma constante." },
      { p: "La dolarización protege contra el gran riesgo latinoamericano, la devaluación. No protege contra el riesgo silencioso: dejar el dinero quieto durante años creyendo que guardarlo es lo mismo que conservarlo." }
    ]
  },
  en: {
    author: A, disclosure: "Educational content. Not an investment recommendation or personalised advice.",
    body: [
      { p: "Panama has used the US dollar as legal tender since 1904. The balboa exists, but only as coins and always at par with the dollar. That has a consequence few Panamanians stop to consider: the country has no monetary policy of its own." },
      { h: "What a central bank can do and Panama can't" },
      { p: "In Colombia, Mexico or Chile, when inflation picks up, the central bank raises its policy rate. Credit gets dearer, spending cools and prices ease. When the economy slows, it does the opposite. It can also let the currency weaken to regain competitiveness." },
      { p: "Panama has none of those levers. There is no central bank setting rates and no currency to devalue. The interest rates Panamanians pay depend largely on what the Federal Reserve decides in Washington, plus a spread for country and bank risk." },
      { key: "In a dollarised economy, monetary policy is imported. The Fed's decisions are made for the United States, not for Panama, even though Panama lives with them." },
      { h: "Real advantages" },
      { ul: [
        "Price stability: Panamanian inflation has historically been low and close to US inflation, far from the high-inflation episodes of several neighbours.",
        "No exchange-rate risk against the dollar: your savings don't lose value to a devaluation, and borrowing in dollars isn't a bet against your own currency.",
        "Appeal to international banking and trade, which operate without conversion."
      ]},
      { h: "Real costs" },
      { ul: [
        "If Panama enters recession while the US is doing well, rates don't fall to help. The adjustment lands on wages, jobs and public spending.",
        "With no classic lender of last resort, the banking system's strength depends on its liquidity and regulation, not on a central bank that can print money.",
        "Imported inflation still gets in: Panama imports much of what it consumes, so oil and food prices pass through almost directly."
      ]},
      { h: "What it means for your savings" },
      { p: "Low inflation isn't zero inflation. At 2% a year, inflation halves the purchasing power of your money in about 35 years. A savings account paying less than inflation loses you buying power every year, even as the balance goes up." },
      { note: "Check the real rate on your savings: the interest rate you're paid minus the year's inflation. If it's negative, that money is losing value, slowly but steadily." },
      { p: "Dollarisation protects against the great Latin American risk, devaluation. It doesn't protect against the quiet one: leaving money idle for years in the belief that keeping it is the same as preserving it." }
    ]
  }
};

/* ------------------------------------------------------------------- 08 */
window.FARLAZ_ARTICLES["flujo-de-caja-libre"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "El beneficio neto depende de decisiones contables: cuándo se reconoce un ingreso, a cuántos años se amortiza una máquina, qué provisión se dota. Son decisiones legítimas, pero son decisiones. La caja no se decide: entra o no entra en el banco." },
      { h: "Cómo se calcula" },
      { p: "La versión más usada es sencilla: flujo de caja operativo menos inversión en activos fijos (lo que en inglés se llama capex). Las dos cifras aparecen en el estado de flujos de efectivo." },
      { table: {
        head: ["Ejemplo construido", "Año 1", "Año 2", "Año 3"],
        rows: [
          ["Beneficio neto", "100", "120", "140"],
          ["Flujo de caja operativo", "110", "95", "80"],
          ["Inversión en activos fijos", "-40", "-55", "-70"],
          ["<strong>Flujo de caja libre</strong>", "<strong>70</strong>", "<strong>40</strong>", "<strong>10</strong>"]
        ]
      }},
      { p: "El beneficio de esta empresa sube un 40% en dos años. El flujo de caja libre cae un 86%. Una de las dos cifras está contando una historia incompleta, y casi nunca es la caja." },
      { h: "Tres razones por las que se separan" },
      { ul: [
        "Cuentas por cobrar que crecen más que las ventas: la empresa vende, pero no cobra. El beneficio lo registra; la caja todavía no lo ve.",
        "Inventario acumulándose: se produjo con dinero real algo que aún no se ha vendido.",
        "Inversión creciente para sostener el negocio: si cada año hace falta más capex para vender lo mismo, el beneficio sobreestima lo que el negocio genera de verdad."
      ]},
      { key: "Una empresa puede declarar beneficios durante años y quedarse sin caja. Lo contrario, generar caja durante años sin ser rentable, es mucho más raro." },
      { h: "Cómo usarlo" },
      { p: "Calcula la conversión de caja: flujo de caja libre dividido entre beneficio neto. En un negocio sano, a lo largo de varios años, suele rondar o superar el 80-100%. Si se mantiene muy por debajo durante tres o más años, hay que buscar la explicación en el balance." },
      { note: "Una caída puntual no es una alarma. Una empresa que invierte fuerte en una fábrica nueva tendrá un año de flujo libre bajo. Lo que importa es la tendencia y si la inversión acaba generando ingresos." },
      { p: "Mira también qué hace la empresa con el flujo libre: pagar deuda, repartir dividendos, recomprar acciones o comprar otras empresas. Ahí se ve cómo piensa la dirección sobre el capital que no es suyo." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "Net income depends on accounting choices: when revenue is recognised, over how many years a machine is depreciated, what provision is booked. They're legitimate choices, but they're choices. Cash isn't chosen: it either lands in the bank or it doesn't." },
      { h: "How it's calculated" },
      { p: "The most common version is simple: operating cash flow minus capital expenditure. Both figures appear in the cash flow statement." },
      { table: {
        head: ["Constructed example", "Year 1", "Year 2", "Year 3"],
        rows: [
          ["Net income", "100", "120", "140"],
          ["Operating cash flow", "110", "95", "80"],
          ["Capital expenditure", "-40", "-55", "-70"],
          ["<strong>Free cash flow</strong>", "<strong>70</strong>", "<strong>40</strong>", "<strong>10</strong>"]
        ]
      }},
      { p: "This company's profit rises 40% in two years. Its free cash flow falls 86%. One of the two figures is telling an incomplete story, and it's hardly ever the cash." },
      { h: "Three reasons they drift apart" },
      { ul: [
        "Receivables growing faster than sales: the company sells but doesn't collect. Profit records it; cash hasn't seen it yet.",
        "Inventory piling up: real money went into producing something not yet sold.",
        "Rising investment just to stand still: if every year needs more capex to sell the same amount, profit overstates what the business really generates."
      ]},
      { key: "A company can report profits for years and run out of cash. The reverse, generating cash for years without being profitable, is far rarer." },
      { h: "How to use it" },
      { p: "Work out cash conversion: free cash flow divided by net income. In a healthy business, across several years, it tends to sit around or above 80-100%. If it stays well below that for three years or more, look for the explanation in the balance sheet." },
      { note: "One weak year isn't an alarm. A company investing heavily in a new plant will have a year of low free cash flow. What matters is the trend, and whether the investment ends up producing revenue." },
      { p: "Also look at what the company does with its free cash flow: paying down debt, paying dividends, buying back shares or buying other companies. That's where you see how management thinks about capital that isn't theirs." }
    ]
  }
};

/* ------------------------------------------------------------------- 09 */
window.FARLAZ_ARTICLES["fondo-de-emergencia"] = {
  es: {
    author: A, disclosure: "Contenido educativo. No constituye recomendación de inversión ni asesoramiento personalizado.",
    body: [
      { p: "Antes de comprar una sola acción hay un paso que casi todo el mundo se salta: tener dinero disponible para cuando algo sale mal. Un despido, una reparación del carro, una emergencia médica. Sin ese colchón, cualquier imprevisto te obliga a vender inversiones en el peor momento o a endeudarte con la tarjeta." },
      { h: "Cuánto" },
      { p: "La referencia habitual es entre tres y seis meses de gastos esenciales. No de ingresos: de gastos. Alquiler o hipoteca, comida, transporte, servicios, seguros y pagos de deuda. Lo que necesitarías para vivir si mañana dejaras de cobrar." },
      { ul: [
        "Tres meses si tienes un empleo estable, ingresos de dos personas en casa y pocas obligaciones.",
        "Seis meses o más si eres independiente, tus ingresos varían mucho, tienes personas a cargo o trabajas en un sector con despidos frecuentes."
      ]},
      { key: "Si tus gastos esenciales son 1.200 dólares al mes, tu objetivo está entre 3.600 y 7.200. Ese número es tu primera meta financiera, antes que cualquier inversión." },
      { h: "Dónde" },
      { p: "El fondo de emergencia tiene tres requisitos, en este orden: que no pueda perder valor, que se pueda sacar rápido y que, si es posible, pague algo de interés. Una cuenta de ahorro separada de la cuenta del día a día o un depósito a plazo corto suelen cumplirlos." },
      { p: "No sirven las acciones, los fondos de renta variable ni las criptomonedas. Las emergencias tienen la mala costumbre de coincidir con las caídas del mercado: una recesión trae a la vez despidos y bolsas en rojo." },
      { h: "Por qué no es una inversión" },
      { p: "Muchos se resisten porque ese dinero \"no rinde\". Es verdad, y es correcto. Su función no es crecer, es evitar que tengas que tocar lo que sí está creciendo. Piénsalo como un seguro que pagas con el rendimiento que dejas de ganar." },
      { note: "Tenlo en una cuenta distinta de la que usas para gastar. Si lo ves cada día en el mismo saldo, acabará financiando cosas que no son emergencias." },
      { h: "Cómo construirlo" },
      { p: "No hace falta tenerlo completo antes de hacer nada más. Un sistema razonable: automatiza una transferencia mensual el día que cobras, prioriza llegar primero a un mes de gastos y luego ve subiendo. Si lo usas, la prioridad pasa a ser reponerlo." }
    ]
  },
  en: {
    author: A, disclosure: "Educational content. Not an investment recommendation or personalised advice.",
    body: [
      { p: "Before buying a single share there's a step almost everyone skips: having money available for when something goes wrong. A layoff, a car repair, a medical emergency. Without that cushion, any surprise forces you to sell investments at the worst moment or borrow on a credit card." },
      { h: "How much" },
      { p: "The usual benchmark is three to six months of essential expenses. Not income: expenses. Rent or mortgage, food, transport, utilities, insurance and debt payments. What you'd need to live on if your pay stopped tomorrow." },
      { ul: [
        "Three months if your job is stable, there are two incomes at home and you have few obligations.",
        "Six months or more if you're self-employed, your income varies a lot, you have dependants or you work in a sector with frequent layoffs."
      ]},
      { key: "If your essential spending is 1,200 dollars a month, your target is between 3,600 and 7,200. That number is your first financial goal, ahead of any investment." },
      { h: "Where" },
      { p: "An emergency fund has three requirements, in this order: it mustn't lose value, it must be quick to access and, if possible, it should pay some interest. A savings account kept separate from your everyday account, or a short-term deposit, usually ticks all three." },
      { p: "Shares, equity funds and cryptocurrencies don't qualify. Emergencies have a bad habit of coinciding with market falls: a recession brings layoffs and red screens at the same time." },
      { h: "Why it isn't an investment" },
      { p: "Many people resist because that money \"doesn't earn anything\". True, and that's correct. Its job isn't to grow; it's to stop you touching what is growing. Think of it as insurance you pay for with the return you forgo." },
      { note: "Keep it in a different account from the one you spend from. If you see it every day in the same balance, it will end up funding things that aren't emergencies." },
      { h: "How to build it" },
      { p: "You don't need it complete before doing anything else. A sensible system: automate a monthly transfer on payday, aim first for one month of expenses and then keep climbing. If you use it, refilling it becomes the priority." }
    ]
  }
};

/* ------------------------------------------------------------------- 10 */
window.FARLAZ_ARTICLES["etf-acumulacion-distribucion-domicilio"] = {
  es: {
    author: A, disclosure: "Contenido educativo, no asesoramiento fiscal. Las normas tributarias cambian y dependen de tu país de residencia: confirma tu caso con un profesional antes de decidir.",
    body: [
      { p: "Dos ETF pueden replicar exactamente el mismo índice, por ejemplo el S&P 500, y dejarte resultados distintos. La diferencia no está en las empresas que compran, sino en dónde está registrado el fondo y qué hace con los dividendos." },
      { h: "El domicilio: Estados Unidos o Irlanda" },
      { p: "Los ETF más conocidos están domiciliados en Estados Unidos. Existen versiones equivalentes domiciliadas en Irlanda o Luxemburgo, registradas bajo la normativa europea UCITS. Para un inversor que no es residente ni ciudadano estadounidense, esa diferencia tiene dos efectos fiscales importantes." },
      { h: "Efecto 1: la retención sobre dividendos" },
      { p: "Estados Unidos retiene un impuesto sobre los dividendos que paga a inversores extranjeros. La tasa general es del 30%, y solo baja si tu país tiene un convenio fiscal con Estados Unidos que la reduzca. Muchos países de la región no lo tienen." },
      { p: "Un ETF domiciliado en Irlanda también sufre retención al cobrar dividendos de empresas estadounidenses, pero gracias al convenio entre Irlanda y Estados Unidos suele ser del 15%, y Irlanda no añade otra retención al inversor final del fondo." },
      { table: {
        head: ["Dividendo de 100 (ejemplo)", "ETF de EE. UU., sin convenio", "ETF irlandés"],
        rows: [
          ["Retención", "30", "~15"],
          ["Te llega", "70", "~85"]
        ]
      }},
      { h: "Efecto 2: el impuesto de sucesiones" },
      { p: "Este es el que menos gente conoce. Si un extranjero no residente fallece con activos considerados estadounidenses, incluidos los ETF domiciliados allí, esos activos pueden quedar sujetos al impuesto federal de sucesiones por encima de un umbral bajo, de 60.000 dólares. Las tasas pueden llegar al 40%. Un ETF domiciliado en Irlanda no es, en general, un activo estadounidense a esos efectos." },
      { key: "Para un inversor latinoamericano con horizonte largo, el domicilio del ETF no es un detalle técnico. Puede pesar tanto como la comisión." },
      { h: "Acumulación o distribución" },
      { p: "Muchos ETF UCITS existen en dos versiones. La de distribución te paga los dividendos en efectivo. La de acumulación los reinvierte automáticamente dentro del fondo, sin que tú los cobres." },
      { ul: [
        "Acumulación: más cómoda para quien está construyendo patrimonio, porque el interés compuesto trabaja solo y no tienes que reinvertir a mano.",
        "Distribución: útil si vives de esos ingresos o quieres decidir tú dónde va cada dividendo.",
        "Fiscalmente, el tratamiento depende de tu país: en algunos se tributa igual aunque no cobres el dividendo. Verifícalo."
      ]},
      { note: "Antes de comprar un ETF, busca su ficha (el documento KID o factsheet) y comprueba tres datos: domicilio, si es de acumulación o distribución y su comisión anual total (TER)." },
      { p: "Nada de esto convierte a un ETF en mejor inversión que otro. Son dos envoltorios del mismo contenido. Pero el envoltorio decide cuánto de lo que gana el índice acaba siendo tuyo." }
    ]
  },
  en: {
    author: A, disclosure: "Educational content, not tax advice. Tax rules change and depend on where you live: confirm your situation with a professional before deciding.",
    body: [
      { p: "Two ETFs can track exactly the same index, say the S&P 500, and still leave you with different results. The difference isn't the companies they buy but where the fund is registered and what it does with dividends." },
      { h: "Domicile: the United States or Ireland" },
      { p: "The best-known ETFs are domiciled in the United States. There are equivalent versions domiciled in Ireland or Luxembourg, registered under the European UCITS rules. For an investor who is neither a US resident nor a US citizen, that difference has two important tax effects." },
      { h: "Effect 1: dividend withholding" },
      { p: "The US withholds tax on dividends paid to foreign investors. The default rate is 30%, and it only drops if your country has a tax treaty with the US that reduces it. Many countries in the region don't." },
      { p: "An Ireland-domiciled ETF also suffers withholding when it receives dividends from US companies, but thanks to the Ireland-US treaty it's usually 15%, and Ireland adds no further withholding for the fund's end investor." },
      { table: {
        head: ["Dividend of 100 (example)", "US ETF, no treaty", "Irish ETF"],
        rows: [
          ["Withheld", "30", "~15"],
          ["You receive", "70", "~85"]
        ]
      }},
      { h: "Effect 2: estate tax" },
      { p: "This is the one fewest people know about. If a non-resident foreigner dies holding assets regarded as US assets, including US-domiciled ETFs, those assets can fall under federal estate tax above a low threshold of 60,000 dollars. Rates can reach 40%. An Ireland-domiciled ETF is generally not a US asset for that purpose." },
      { key: "For a Latin American investor with a long horizon, an ETF's domicile isn't a technicality. It can weigh as much as the fee." },
      { h: "Accumulating or distributing" },
      { p: "Many UCITS ETFs come in two versions. The distributing one pays you dividends in cash. The accumulating one reinvests them automatically inside the fund, without you receiving them." },
      { ul: [
        "Accumulating: more convenient if you're building wealth, because compounding works on its own and you don't have to reinvest by hand.",
        "Distributing: useful if you live off that income or want to decide where each dividend goes.",
        "Tax treatment depends on your country: in some you're taxed the same even if you don't receive the dividend. Check."
      ]},
      { note: "Before buying an ETF, find its fact sheet or KID document and check three things: domicile, whether it accumulates or distributes, and its total annual fee (TER)." },
      { p: "None of this makes one ETF a better investment than another. They're two wrappers around the same contents. But the wrapper decides how much of what the index earns ends up being yours." }
    ]
  }
};

})();
