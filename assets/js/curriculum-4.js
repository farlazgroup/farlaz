/* ==========================================================================
   Farlaz — NIVEL 3: Análisis  (módulos 09-12)
   ========================================================================== */

window.FARLAZ_COURSE = window.FARLAZ_COURSE || [];

/* ═══════════════════════════════════════════ MÓDULO 09 ═══ */
window.FARLAZ_COURSE.push({
  id: "estados-financieros", num: "09", level: 3,
  es: {
    title: "Estados financieros",
    tagline: "Leer lo que la empresa está obligada a contar",
    summary: "Los tres estados contables no son burocracia: son el único relato auditado que una empresa debe publicar sobre sí misma. Aquí aprendes a leerlos en el orden correcto y a detectar las señales que aparecen antes de que el mercado reaccione.",
    topics: ["Balance general", "Estado de resultados", "Flujo de caja", "Patrimonio", "Ratios básicos", "Interpretación conjunta"],
    outcomes: [
      "Recorrer una cuenta de resultados sabiendo qué mirar",
      "Interpretar un balance y calcular la deuda neta",
      "Explicar por qué la caja es más difícil de maquillar",
      "Reconocer siete señales de alarma habituales"
    ]
  },
  en: {
    title: "Financial statements",
    tagline: "Reading what a company is required to disclose",
    summary: "The three statements aren't bureaucracy: they're the only audited account a company must publish about itself. Here you learn to read them in the right order and spot the signals that appear before the market reacts.",
    topics: ["Balance sheet", "Income statement", "Cash flow statement", "Equity", "Basic ratios", "Reading them together"],
    outcomes: [
      "Walk an income statement knowing what to look at",
      "Interpret a balance sheet and calculate net debt",
      "Explain why cash is harder to massage",
      "Recognise seven common red flags"
    ]
  },
  lessons: [ 
    {
        id: "cuenta-de-resultados",
        minutes: 10,
        es: {
          title: "La cuenta de resultados, línea por línea",
          body: [
            { p: "La cuenta de resultados responde a una pregunta: ¿cuánto ganó la empresa durante un periodo? Se lee de arriba abajo, y cada línea que bajas resta algo. Vamos con un ejemplo inventado para tener números sobre los que hablar." },
            { table: {
              head: ["Concepto", "Importe", "% sobre ingresos"],
              rows: [
                ["Ingresos", "1.000", "100%"],
                ["Coste de ventas", "-600", "60%"],
                ["<strong>Margen bruto</strong>", "<strong>400</strong>", "<strong>40%</strong>"],
                ["Gastos de personal y estructura", "-220", "22%"],
                ["<strong>EBITDA</strong>", "<strong>180</strong>", "<strong>18%</strong>"],
                ["Amortizaciones", "-60", "6%"],
                ["<strong>Resultado de explotación (EBIT)</strong>", "<strong>120</strong>", "<strong>12%</strong>"],
                ["Gastos financieros", "-30", "3%"],
                ["Impuestos", "-23", "2,3%"],
                ["<strong>Beneficio neto</strong>", "<strong>67</strong>", "<strong>6,7%</strong>"]
              ]
            }},
            { h: "Qué mirar en cada nivel" },
            { p: "<strong>Ingresos.</strong> No basta con el crecimiento: pregunta de dónde viene. Vender un 10% más porque subiste precios un 10% es muy distinto de vender un 10% más porque tienes un 10% más de clientes. Lo primero se agota; lo segundo escala." },
            { p: "<strong>Margen bruto.</strong> Es la mejor aproximación al poder de fijación de precios. Un margen bruto estable o creciente durante años sugiere que la empresa puede subir precios sin perder clientes. Un margen bruto que se erosiona lentamente suele indicar competencia entrando en el sector." },
            { p: "<strong>EBITDA.</strong> Beneficio antes de intereses, impuestos, depreciaciones y amortizaciones. Es útil para comparar empresas con estructuras de deuda distintas, y es la cifra más manipulada del mundo corporativo." },
            { note: "El EBITDA excluye la amortización, es decir, el desgaste de los activos que la empresa necesita para operar. Para una consultora, esa exclusión es razonable. Para una empresa de telecomunicaciones que reemplaza infraestructura constantemente, el EBITDA describe un negocio que no existe. Charlie Munger lo llamaba «beneficio antes de las cosas de verdad»." },
            { p: "<strong>EBIT.</strong> Ya incluye la amortización, así que refleja el coste real de mantener los activos productivos. Suele ser mejor punto de partida que el EBITDA para comparar rentabilidad operativa." },
            { p: "<strong>Beneficio neto.</strong> La cifra del titular y, paradójicamente, la menos informativa por sí sola. Incluye partidas extraordinarias, efectos fiscales puntuales y decisiones contables. Un beneficio neto que sube mientras el EBIT baja merece una investigación inmediata." },
            { key: "Regla práctica: lee los porcentajes sobre ingresos de tres a cinco años seguidos, no las cifras absolutas de un año. Las tendencias de márgenes cuentan la historia; los importes sueltos no cuentan nada." },
            { quiz: {
              q: "Una empresa presenta EBITDA creciente durante tres años, pero su EBIT es plano. ¿Qué está pasando probablemente?",
              options: [
                "Las amortizaciones están creciendo: la empresa necesita cada vez más inversión en activos",
                "La empresa está ganando poder de fijación de precios",
                "Es imposible, ambas cifras se mueven siempre igual"
              ],
              answer: 0,
              explain: "La diferencia entre EBITDA y EBIT es exactamente la amortización. Si el primero crece y el segundo no, la amortización está absorbiendo la mejora, lo que suele indicar un negocio intensivo en capital presentándose con la métrica que mejor le sienta."
            }}
          ]
        },
        en: {
          title: "The income statement, line by line",
          body: [
            { p: "The income statement answers one question: how much did the company earn over a period? You read it top to bottom, and each line down subtracts something. Here is an invented example so we have numbers to talk about." },
            { table: {
              head: ["Item", "Amount", "% of revenue"],
              rows: [
                ["Revenue", "1,000", "100%"],
                ["Cost of sales", "-600", "60%"],
                ["<strong>Gross profit</strong>", "<strong>400</strong>", "<strong>40%</strong>"],
                ["Staff and overheads", "-220", "22%"],
                ["<strong>EBITDA</strong>", "<strong>180</strong>", "<strong>18%</strong>"],
                ["Depreciation & amortisation", "-60", "6%"],
                ["<strong>Operating profit (EBIT)</strong>", "<strong>120</strong>", "<strong>12%</strong>"],
                ["Interest expense", "-30", "3%"],
                ["Tax", "-23", "2.3%"],
                ["<strong>Net income</strong>", "<strong>67</strong>", "<strong>6.7%</strong>"]
              ]
            }},
            { h: "What to look at on each level" },
            { p: "<strong>Revenue.</strong> Growth alone isn't enough: ask where it came from. Selling 10% more because you raised prices 10% is very different from selling 10% more because you have 10% more customers. The first runs out; the second scales." },
            { p: "<strong>Gross margin.</strong> The best proxy for pricing power. A stable or rising gross margin over several years suggests the company can raise prices without losing customers. A slowly eroding gross margin usually signals competition entering the sector." },
            { p: "<strong>EBITDA.</strong> Earnings before interest, tax, depreciation and amortisation. Useful for comparing companies with different debt structures, and the single most manipulated figure in corporate life." },
            { note: "EBITDA excludes depreciation — the wear on the assets a company needs to operate. For a consultancy, that exclusion is reasonable. For a telecoms business constantly replacing infrastructure, EBITDA describes a company that doesn't exist. Charlie Munger called it \"earnings before the real stuff\"." },
            { p: "<strong>EBIT.</strong> This includes depreciation, so it reflects the true cost of maintaining productive assets. It is usually a better starting point than EBITDA for comparing operating profitability." },
            { p: "<strong>Net income.</strong> The headline figure and, paradoxically, the least informative on its own. It includes one-off items, tax effects and accounting choices. Net income rising while EBIT falls warrants immediate investigation." },
            { key: "Practical rule: read the percentages of revenue across three to five consecutive years, not the absolute figures of one. Margin trends tell the story; standalone amounts tell you nothing." },
            { quiz: {
              q: "A company reports rising EBITDA for three years, but flat EBIT. What is most likely happening?",
              options: [
                "Depreciation is growing: the business needs ever more asset investment",
                "The company is gaining pricing power",
                "Impossible — both figures always move together"
              ],
              answer: 0,
              explain: "The difference between EBITDA and EBIT is precisely depreciation. If the first grows and the second doesn't, depreciation is absorbing the improvement — usually a capital-intensive business presenting itself with the metric that flatters it most."
            }}
          ]
        }
      }
  , 
    {
        id: "balance",
        minutes: 9,
        es: {
          title: "El balance: qué tiene y qué debe",
          body: [
            { p: "Si la cuenta de resultados es una película de doce meses, el balance es una fotografía de un instante: el último día del periodo. Muestra lo que la empresa posee, lo que debe y lo que queda para los accionistas." },
            { p: "La identidad que lo gobierna es tan simple que resulta sospechosa: <strong>Activo = Pasivo + Patrimonio neto</strong>. Todo lo que tiene la empresa está financiado o bien con deuda o bien con dinero de los socios. No hay tercera opción." },
            { h: "El lado izquierdo: el activo" },
            { ul: [
              "<strong>Activo corriente.</strong> Lo que se convertirá en efectivo en menos de un año: caja, cuentas por cobrar de clientes, existencias.",
              "<strong>Activo no corriente.</strong> Lo que permanece: fábricas, maquinaria, licencias, y el fondo de comercio de adquisiciones pasadas."
            ]},
            { h: "El lado derecho: quién ha financiado eso" },
            { ul: [
              "<strong>Pasivo corriente.</strong> Deudas a menos de un año: proveedores, impuestos pendientes, préstamos que vencen pronto.",
              "<strong>Pasivo no corriente.</strong> Deuda a largo plazo.",
              "<strong>Patrimonio neto.</strong> Lo que queda para los accionistas si se vendiera todo el activo y se pagaran todas las deudas."
            ]},
            { h: "Las dos cuentas que se hacen siempre" },
            { p: "<strong>Deuda neta = deuda financiera total − caja.</strong> Una empresa con 500 de deuda y 400 de caja tiene una deuda neta de 100, y su situación es muy distinta de la de otra con 500 de deuda y 20 de caja. Es el primer número que calcula cualquier analista." },
            { p: "<strong>Deuda neta / EBITDA.</strong> Cuántos años de beneficio operativo haría falta para cancelar la deuda. Por debajo de 2 suele considerarse cómodo; por encima de 4 empieza a limitar la libertad de maniobra de la empresa. El umbral aceptable varía mucho por sector: una eléctrica regulada soporta más apalancamiento que una tecnológica cíclica." },
            { key: "El balance no te dice si un negocio es bueno. Te dice si tiene margen para sobrevivir a un año malo. Muchas empresas no quiebran por perder dinero, sino por quedarse sin caja mientras vencía un préstamo." },
            { h: "El fondo de comercio, la partida más tramposa" },
            { p: "Cuando una empresa compra otra pagando más de lo que valen sus activos identificables, la diferencia se registra como fondo de comercio. No es una fábrica ni una patente: es la justificación contable de un sobreprecio." },
            { p: "Si esa adquisición sale bien, el fondo de comercio permanece en el balance sin dar problemas. Si sale mal, la empresa está obligada a deteriorarlo, y ese día aparece una pérdida enorme que no cuesta ni un euro de caja pero destruye el patrimonio neto de golpe." },
            { note: "Cuando veas un fondo de comercio que representa una parte muy grande del activo total y que lleva años sin revisarse a la baja pese a que el negocio adquirido va peor de lo prometido, tienes una pérdida pendiente de reconocer. No sabes cuándo llegará, pero sabes que está ahí." }
          ]
        },
        en: {
          title: "The balance sheet: what it owns and what it owes",
          body: [
            { p: "If the income statement is a twelve-month film, the balance sheet is a photograph of one instant: the last day of the period. It shows what the company owns, what it owes, and what is left for shareholders." },
            { p: "The identity governing it is so simple it feels suspicious: <strong>Assets = Liabilities + Equity</strong>. Everything the company holds is financed either by debt or by owners' money. There is no third option." },
            { h: "The left side: assets" },
            { ul: [
              "<strong>Current assets.</strong> What turns into cash within a year: cash, receivables from customers, inventory.",
              "<strong>Non-current assets.</strong> What stays: factories, machinery, licences, and goodwill from past acquisitions."
            ]},
            { h: "The right side: who financed it" },
            { ul: [
              "<strong>Current liabilities.</strong> Debts due within a year: suppliers, tax payable, loans maturing soon.",
              "<strong>Non-current liabilities.</strong> Long-term debt.",
              "<strong>Equity.</strong> What remains for shareholders if every asset were sold and every debt repaid."
            ]},
            { h: "The two calculations everyone runs" },
            { p: "<strong>Net debt = total financial debt − cash.</strong> A company with 500 of debt and 400 of cash has net debt of 100, and is in a very different position from one with 500 of debt and 20 of cash. It is the first number any analyst computes." },
            { p: "<strong>Net debt / EBITDA.</strong> How many years of operating profit it would take to clear the debt. Below 2 is generally considered comfortable; above 4 starts constraining the company's freedom to act. The acceptable threshold varies enormously by sector: a regulated utility supports more leverage than a cyclical tech firm." },
            { key: "The balance sheet doesn't tell you whether a business is good. It tells you whether it has room to survive a bad year. Many companies fail not from losing money but from running out of cash while a loan came due." },
            { h: "Goodwill, the trickiest line" },
            { p: "When a company buys another and pays more than its identifiable assets are worth, the difference is booked as goodwill. It isn't a factory or a patent: it is the accounting justification for an overpayment." },
            { p: "If the acquisition works out, goodwill sits on the balance sheet causing no trouble. If it doesn't, the company must impair it, and on that day an enormous loss appears that costs no cash but destroys equity at a stroke." },
            { note: "When you see goodwill making up a very large share of total assets, unwritten-down for years despite the acquired business underperforming what was promised, you are looking at a loss waiting to be recognised. You don't know when it will land, but you know it's there." }
          ]
        }
      }
  , 
    {
        id: "flujo-de-caja",
        minutes: 9,
        es: {
          title: "El flujo de caja, el estado más difícil de maquillar",
          body: [
            { p: "Hay una frase muy repetida en el análisis financiero: «el beneficio es una opinión, la caja es un hecho». Es exagerada, pero apunta a algo real." },
            { p: "El beneficio depende de decisiones contables legítimas: en cuántos años amortizas una máquina, cuándo reconoces un ingreso, qué provisión dotas. La caja depende de si el dinero entró en la cuenta bancaria o no. Sigue habiendo margen de manipulación, pero es mucho más estrecho." },
            { h: "Los tres bloques" },
            { p: "<strong>Flujo de explotación.</strong> El dinero que genera el negocio haciendo lo que sabe hacer. Es el bloque que importa. Parte del beneficio neto, le suma la amortización (que restó pero no salió de caja) y ajusta por los cambios en el capital circulante." },
            { p: "<strong>Flujo de inversión.</strong> Lo que la empresa gasta en activos: maquinaria, instalaciones, adquisiciones. Casi siempre negativo en una empresa que crece." },
            { p: "<strong>Flujo de financiación.</strong> Movimientos con accionistas y bancos: emisión o amortización de deuda, dividendos, recompra de acciones." },
            { h: "El número que de verdad importa" },
            { p: "<strong>Flujo de caja libre = flujo de explotación − inversión en activos fijos.</strong> Es el dinero que sobra después de mantener el negocio en marcha. Es lo único con lo que se puede pagar un dividendo, recomprar acciones o reducir deuda sin pedir prestado." },
            { key: "Una empresa puede declarar beneficio durante años y tener flujo de caja libre negativo todo ese tiempo. Es una situación insostenible: en algún momento tendrá que emitir acciones nuevas o endeudarse, y las dos cosas te perjudican como accionista." },
            { h: "El capital circulante, donde se esconden las sorpresas" },
            { p: "El capital circulante es la diferencia entre lo que te deben los clientes más las existencias, y lo que debes a proveedores. Cuando crece, consume caja; cuando se reduce, la libera." },
            { p: "Imagina una empresa que reconoce una venta de 100 en diciembre, cobrará en abril. En la cuenta de resultados aparecen 100 de ingresos y el beneficio sube. En caja no ha entrado nada: el flujo de explotación refleja un aumento de cuentas por cobrar que resta esos 100." },
            { note: "Contrasta siempre el crecimiento del beneficio con el del flujo de explotación durante varios años. Si el beneficio crece al 20% anual y el flujo de explotación está plano, la empresa está vendiendo a crédito, acumulando existencias o reconociendo ingresos de forma agresiva. Cualquiera de las tres merece una explicación." },
            { quiz: {
              q: "Una empresa tiene beneficio neto de 50, amortización de 30 y su capital circulante ha aumentado en 90. ¿Cuál es aproximadamente su flujo de explotación?",
              options: ["170", "-10", "80"],
              answer: 1,
              explain: "50 + 30 − 90 = −10. La empresa declara beneficio pero está quemando caja, porque el crecimiento del circulante se ha comido el resultado y algo más. Es exactamente el patrón que precede a muchos problemas de liquidez."
            }}
          ]
        },
        en: {
          title: "Cash flow, the statement hardest to massage",
          body: [
            { p: "There is a well-worn line in financial analysis: \"profit is an opinion, cash is a fact\". It overstates the case, but it points at something real." },
            { p: "Profit depends on legitimate accounting choices: over how many years you depreciate a machine, when you recognise revenue, what provision you book. Cash depends on whether money arrived in the bank account. There is still room for manipulation, but it is far narrower." },
            { h: "The three blocks" },
            { p: "<strong>Operating cash flow.</strong> The money the business generates doing what it does. This is the block that matters. It starts from net income, adds back depreciation (which was deducted but never left the bank) and adjusts for changes in working capital." },
            { p: "<strong>Investing cash flow.</strong> What the company spends on assets: machinery, facilities, acquisitions. Almost always negative in a growing business." },
            { p: "<strong>Financing cash flow.</strong> Movements with shareholders and banks: issuing or repaying debt, dividends, buybacks." },
            { h: "The number that really matters" },
            { p: "<strong>Free cash flow = operating cash flow − capital expenditure.</strong> The money left over after keeping the business running. It is the only thing that can fund a dividend, a buyback or debt reduction without borrowing." },
            { key: "A company can report profits for years while running negative free cash flow the whole time. That is unsustainable: at some point it must issue new shares or take on debt, and both hurt you as a shareholder." },
            { h: "Working capital, where the surprises hide" },
            { p: "Working capital is the difference between what customers owe you plus inventory, and what you owe suppliers. When it grows it consumes cash; when it shrinks it releases cash." },
            { p: "Picture a company booking a sale of 100 in December, collectable in April. The income statement shows 100 of revenue and profit rises. No cash has arrived: operating cash flow reflects an increase in receivables that subtracts those 100." },
            { note: "Always compare profit growth against operating cash flow growth across several years. If profit grows 20% a year while operating cash flow is flat, the company is selling on credit, building inventory or recognising revenue aggressively. Any of the three deserves an explanation." },
            { quiz: {
              q: "A company has net income of 50, depreciation of 30, and working capital increased by 90. Roughly what is its operating cash flow?",
              options: ["170", "-10", "80"],
              answer: 1,
              explain: "50 + 30 − 90 = −10. The company reports profit but is burning cash, because working capital growth has consumed the entire result and more. This is exactly the pattern that precedes many liquidity problems."
            }}
          ]
        }
      }
  , 
    {
        id: "senales-de-alarma",
        minutes: 8,
        es: {
          title: "Siete señales de alarma",
          body: [
            { p: "Ninguna de estas señales demuestra por sí sola que haya un fraude o un problema grave. Lo que hacen es indicarte dónde mirar con más atención y qué preguntas hacerle a la memoria anual." },
            { h: "1. Las existencias crecen más rápido que las ventas" },
            { p: "Si las ventas suben un 8% y las existencias un 25%, la empresa está fabricando producto que no consigue colocar. Antes o después vendrá una rebaja de precios o un deterioro de inventario." },
            { h: "2. Las cuentas por cobrar crecen más rápido que los ingresos" },
            { p: "Significa que se está vendiendo a plazos cada vez más largos, normalmente para sostener el crecimiento. Es una forma de financiar a tus propios clientes, y termina en impagos o en un frenazo brusco de las ventas." },
            { h: "3. El flujo de explotación se separa del beneficio" },
            { p: "Ya lo vimos en la lección anterior. Es la señal más fiable de todas porque combina las dos anteriores en un solo número." },
            { h: "4. La deuda se refinancia sistemáticamente a corto plazo" },
            { p: "Una empresa sana financia activos de largo plazo con deuda de largo plazo. Cuando ves vencimientos concentrados en los próximos doce meses renovándose una y otra vez, la empresa depende de que los bancos sigan de buen humor." },
            { h: "5. El fondo de comercio no se ha deteriorado nunca" },
            { p: "Si la empresa ha hecho ocho adquisiciones en una década, la estadística dice que varias han salido mal. Un fondo de comercio intacto sugiere que la dirección se resiste a reconocerlo." },
            { h: "6. Cambios de criterio contable o de auditor" },
            { p: "Alargar la vida útil de los activos reduce la amortización y aumenta el beneficio sin que nada real haya mejorado. Un cambio de auditor sin explicación clara, sobre todo si el saliente había planteado salvedades, es una de las señales más serias que existen." },
            { h: "7. El beneficio ajustado se aleja del contable" },
            { p: "Casi todas las empresas presentan un beneficio «ajustado» excluyendo partidas que consideran extraordinarias. Es legítimo. Deja de serlo cuando los mismos gastos extraordinarios aparecen todos los años: una reestructuración anual durante cinco ejercicios no es extraordinaria, es el modelo de negocio." },
            { key: "Regla de oro: una señal aislada es ruido. Tres o más apareciendo a la vez, en la misma dirección y durante varios trimestres, es un patrón. Los problemas contables rara vez vienen solos." },
            { h: "Ejercicio" },
            { p: "Coge la última memoria anual de una empresa que conozcas como cliente. Busca sus estados financieros de los últimos tres años y calcula tres cosas: crecimiento de ingresos, crecimiento de existencias y crecimiento del flujo de explotación. Si las tres se mueven en la misma dirección y a ritmos parecidos, buena señal. Si divergen, ya tienes una pregunta concreta que investigar." }
          ]
        },
        en: {
          title: "Seven red flags",
          body: [
            { p: "None of these signals proves fraud or serious trouble on its own. What they do is tell you where to look harder and what questions to put to the annual report." },
            { h: "1. Inventory growing faster than sales" },
            { p: "If sales rise 8% and inventory rises 25%, the company is making product it can't shift. Sooner or later a price cut or an inventory write-down follows." },
            { h: "2. Receivables growing faster than revenue" },
            { p: "It means selling on ever-longer terms, usually to sustain growth. It is a way of financing your own customers, and it ends in bad debts or an abrupt sales slowdown." },
            { h: "3. Operating cash flow diverging from profit" },
            { p: "We covered this in the previous lesson. It is the most reliable signal of all because it combines the previous two into a single number." },
            { h: "4. Debt systematically refinanced short-term" },
            { p: "A healthy company funds long-term assets with long-term debt. When you see maturities bunched in the next twelve months, rolled over again and again, the company depends on banks staying in a good mood." },
            { h: "5. Goodwill never impaired" },
            { p: "If a company has made eight acquisitions in a decade, statistics say several went badly. Untouched goodwill suggests management is reluctant to admit it." },
            { h: "6. Changes in accounting policy or auditor" },
            { p: "Extending the useful life of assets reduces depreciation and raises profit without anything real improving. An auditor change with no clear explanation, especially if the outgoing one had raised qualifications, is among the most serious signals there is." },
            { h: "7. Adjusted profit drifting from reported profit" },
            { p: "Almost every company presents an \"adjusted\" profit excluding items it deems exceptional. That is legitimate. It stops being legitimate when the same exceptional costs appear every year: an annual restructuring across five consecutive years isn't exceptional, it's the business model." },
            { key: "Golden rule: one signal alone is noise. Three or more appearing together, pointing the same way, across several quarters, is a pattern. Accounting problems rarely travel alone." },
            { h: "Exercise" },
            { p: "Take the latest annual report of a company you know as a customer. Find three years of financial statements and calculate three things: revenue growth, inventory growth and operating cash flow growth. If all three move the same way at similar rates, good sign. If they diverge, you now have a concrete question to investigate." }
          ]
        }
      }
   ]
});

/* ═══════════════════════════════════════════ MÓDULO 10 ═══ */
window.FARLAZ_COURSE.push({
  id: "analisis-fundamental", num: "10", level: 3,
  es: {
    title: "Análisis fundamental",
    tagline: "Los ratios que de verdad se usan",
    summary: "PER, EV/EBITDA, ROE, margen neto. Qué compara cada ratio, cuándo es útil y —lo más importante— en qué situaciones miente de forma sistemática.",
    topics: ["P/E", "P/B", "PEG", "EV/EBITDA", "Margen neto", "ROE", "ROA", "Flujo de caja libre"],
    outcomes: [
      "Usar cada múltiplo sabiendo qué compara",
      "Detectar cuándo un múltiplo bajo es una trampa",
      "Calcular la rentabilidad sobre capital de una empresa",
      "Comparar dos empresas del mismo sector con criterio"
    ]
  },
  en: {
    title: "Fundamental analysis",
    tagline: "The ratios that actually get used",
    summary: "P/E, EV/EBITDA, ROE, net margin. What each ratio compares, when it's useful, and — most importantly — where it misleads systematically.",
    topics: ["P/E", "P/B", "PEG", "EV/EBITDA", "Net margin", "ROE", "ROA", "Free cash flow"],
    outcomes: [
      "Use each multiple knowing what it compares",
      "Spot when a low multiple is a trap",
      "Calculate return on capital for a company",
      "Compare two companies in the same sector with judgement"
    ]
  },
  lessons: [ 
    {
        id: "multiplos",
        minutes: 9,
        es: {
          title: "Múltiplos: rápidos, útiles y engañosos",
          body: [
            { p: "Un múltiplo es una división: precio entre alguna medida de resultado. Su virtud es la velocidad; su defecto es que comprime toda la complejidad de un negocio en un solo número y luego invita a compararlo con otro negocio distinto." },
            { h: "Los tres que se usan de verdad" },
            { table: {
              head: ["Múltiplo", "Fórmula", "Para qué sirve", "Dónde falla"],
              rows: [
                ["PER", "Precio / Beneficio por acción", "Comparar empresas maduras y rentables del mismo sector", "Inútil si hay pérdidas; distorsionado por la deuda y por partidas extraordinarias"],
                ["EV/EBITDA", "Valor de empresa / EBITDA", "Comparar empresas con estructuras de deuda distintas", "Ignora la inversión en activos, así que favorece a los negocios intensivos en capital"],
                ["P/B", "Precio / Valor contable", "Bancos, aseguradoras y empresas con muchos activos tangibles", "Sin sentido en empresas cuyo valor son intangibles no contabilizados"]
              ]
            }},
            { note: "El valor de empresa (EV) es la capitalización bursátil más la deuda neta. Responde a «cuánto costaría comprar el negocio entero», no solo sus acciones. Por eso se compara con EBITDA, que también es anterior a los intereses." },
            { h: "El error que comete casi todo el mundo" },
            { p: "«Esta empresa cotiza a PER 9 y su competidora a PER 22, así que está barata». Puede ser. También puede ser que la competidora crezca al triple, tenga márgenes mejores, menos deuda y un negocio más predecible; en ese caso el PER 9 no es una oportunidad, es un diagnóstico correcto del mercado." },
            { key: "Un múltiplo bajo no significa barato. Significa que el mercado espera poco. Tu trabajo es decidir si esa expectativa baja está justificada, y eso no se resuelve mirando el múltiplo: se resuelve mirando el negocio." },
            { h: "Los tres factores que justifican un múltiplo alto" },
            { ul: [
              "<strong>Crecimiento.</strong> Cuanto más crezca el beneficio, más vale cada unidad de beneficio actual.",
              "<strong>Rentabilidad del capital.</strong> Una empresa que reinvierte al 25% crea mucho más valor por cada euro retenido que otra que reinvierte al 6%.",
              "<strong>Previsibilidad.</strong> Un flujo estable merece un múltiplo mayor que uno cíclico, simplemente porque hay menos incertidumbre que descontar."
            ]},
            { p: "Si una empresa cotiza más cara que sus comparables y no gana en ninguno de los tres factores, tienes una señal de sobrevaloración. Si cotiza más barata y gana en los tres, tienes algo que merece una investigación seria." },
            { h: "Cuidado con los múltiplos cíclicos" },
            { p: "En el pico de un ciclo, una empresa cíclica presenta beneficios récord y por tanto un PER bajísimo, que parece una ganga justo antes del desplome. En el fondo del ciclo ocurre lo contrario: beneficios hundidos y PER altísimo, justo cuando la acción está barata." },
            { p: "Para negocios cíclicos —materias primas, automoción, construcción, química— los múltiplos sobre el beneficio de un solo año engañan de forma sistemática. Se usa el beneficio medio de un ciclo completo, no el del último ejercicio." },
            { quiz: {
              q: "Una minera de cobre cotiza a PER 4 tras dos años de precios récord del cobre. ¿Qué te dice ese múltiplo?",
              options: [
                "Que probablemente está en el pico del ciclo, no que esté barata",
                "Que está claramente infravalorada",
                "Que su gestión es excelente"
              ],
              answer: 0,
              explain: "El denominador del PER está inflado por unos beneficios excepcionales que el mercado no espera que se repitan. Un PER muy bajo en una cíclica en máximos suele ser una advertencia, no una oportunidad."
            }}
          ]
        },
        en: {
          title: "Multiples: fast, useful and misleading",
          body: [
            { p: "A multiple is a division: price over some measure of earnings. Its virtue is speed; its flaw is that it compresses all the complexity of a business into one number and then invites you to compare it with a different business." },
            { h: "The three that actually get used" },
            { table: {
              head: ["Multiple", "Formula", "What it's for", "Where it breaks"],
              rows: [
                ["P/E", "Price / Earnings per share", "Comparing mature, profitable companies in the same sector", "Useless with losses; distorted by debt and one-off items"],
                ["EV/EBITDA", "Enterprise value / EBITDA", "Comparing companies with different debt structures", "Ignores capital investment, so it flatters capital-intensive businesses"],
                ["P/B", "Price / Book value", "Banks, insurers and asset-heavy companies", "Meaningless where value sits in unrecorded intangibles"]
              ]
            }},
            { note: "Enterprise value (EV) is market capitalisation plus net debt. It answers \"what would it cost to buy the whole business\", not just its shares. That is why it pairs with EBITDA, which is also before interest." },
            { h: "The mistake nearly everyone makes" },
            { p: "\"This company trades at 9x and its competitor at 22x, so it's cheap\". Maybe. It may also be that the competitor grows three times faster, runs better margins, carries less debt and has a more predictable business; in which case 9x isn't an opportunity, it's the market diagnosing correctly." },
            { key: "A low multiple doesn't mean cheap. It means the market expects little. Your job is to decide whether that low expectation is justified, and that isn't settled by looking at the multiple: it's settled by looking at the business." },
            { h: "The three factors that justify a high multiple" },
            { ul: [
              "<strong>Growth.</strong> The faster earnings grow, the more each unit of current earnings is worth.",
              "<strong>Return on capital.</strong> A company reinvesting at 25% creates far more value per unit retained than one reinvesting at 6%.",
              "<strong>Predictability.</strong> A stable cash flow deserves a higher multiple than a cyclical one, simply because there is less uncertainty to discount."
            ]},
            { p: "If a company trades richer than its peers and wins on none of the three, you have a signal of overvaluation. If it trades cheaper and wins on all three, you have something worth serious investigation." },
            { h: "Beware cyclical multiples" },
            { p: "At a cycle peak, a cyclical company posts record profits and therefore a very low P/E that looks like a bargain right before the collapse. At the trough the opposite happens: crushed profits and a sky-high P/E, precisely when the stock is cheap." },
            { p: "For cyclical businesses — commodities, autos, construction, chemicals — multiples on a single year's earnings mislead systematically. Use average earnings across a full cycle, not the last reported year." },
            { quiz: {
              q: "A copper miner trades at 4x earnings after two years of record copper prices. What does that multiple tell you?",
              options: [
                "That it is probably at a cycle peak, not that it is cheap",
                "That it is clearly undervalued",
                "That its management is excellent"
              ],
              answer: 0,
              explain: "The denominator is inflated by exceptional earnings the market doesn't expect to repeat. A very low P/E on a cyclical at highs is usually a warning, not an opportunity."
            }}
          ]
        }
      }
   ]
});

/* ═══════════════════════════════════════════ MÓDULO 11 ═══ */
window.FARLAZ_COURSE.push({
  id: "analisis-tecnico", num: "11", level: 3,
  es: {
    title: "Análisis técnico",
    tagline: "Qué dice y qué no dice un gráfico",
    summary: "El análisis técnico estudia el precio y el volumen para intentar anticipar movimientos. Lo tratamos con honestidad: qué herramientas existen, cómo se leen y qué dice la evidencia sobre su fiabilidad.",
    topics: ["Velas japonesas", "Tendencias", "Soportes y resistencias", "RSI", "MACD", "Medias móviles", "Volumen"],
    outcomes: [
      "Leer un gráfico de velas correctamente",
      "Identificar tendencias, soportes y resistencias",
      "Interpretar los indicadores más usados",
      "Conocer los límites y las críticas al método"
    ]
  },
  en: {
    title: "Technical analysis",
    tagline: "What a chart says and what it doesn't",
    summary: "Technical analysis studies price and volume to try to anticipate moves. We treat it honestly: what tools exist, how to read them, and what the evidence says about their reliability.",
    topics: ["Candlesticks", "Trends", "Support and resistance", "RSI", "MACD", "Moving averages", "Volume"],
    outcomes: [
      "Read a candlestick chart correctly",
      "Identify trends, support and resistance",
      "Interpret the most-used indicators",
      "Know the limits and criticisms of the method"
    ]
  },
  lessons: [
    {
      id: "velas-japonesas",
      minutes: 8,
      es: {
        title: "Velas japonesas: cómo se lee un gráfico",
        body: [
          { p: "Antes de discutir si el análisis técnico funciona, hay que saber leer lo que muestra un gráfico. La vela es la forma más extendida de representar el precio y comprime cuatro datos de un período en una sola figura." },
          { h: "Los cuatro datos de una vela" },
          { ul: [
            "<strong>Apertura.</strong> El primer precio negociado del período.",
            "<strong>Cierre.</strong> El último. El cuerpo de la vela es la distancia entre apertura y cierre.",
            "<strong>Máximo y mínimo.</strong> Los extremos del período. Se dibujan como líneas finas por encima y por debajo del cuerpo, llamadas mechas o sombras.",
            "<strong>El color.</strong> Indica si el cierre quedó por encima o por debajo de la apertura. La convención de colores varía según la plataforma, así que conviene comprobarla."
          ]},
          { p: "El período depende del gráfico: una vela puede representar un minuto, un día, una semana o un mes. El mismo activo produce dibujos completamente distintos según ese ajuste, y ese es el primer motivo por el que dos personas pueden ver cosas opuestas en «el gráfico»." },
          { key: "Una vela resume lo que ocurrió, no lo que va a ocurrir. Es un instrumento de descripción. Todo lo que se construye encima es interpretación, y conviene mantener separadas las dos cosas." },
          { h: "Qué información añade la forma" },
          { table: {
            head: ["Aspecto", "Qué ocurrió durante el período", "Lectura habitual"],
            rows: [
              ["Cuerpo largo", "El precio se movió mucho y cerró lejos de donde abrió", "Una de las dos partes dominó la sesión"],
              ["Cuerpo muy corto", "Abrió y cerró casi igual, con recorrido intermedio", "Equilibrio o indecisión entre compradores y vendedores"],
              ["Mecha larga arriba", "Subió y devolvió lo subido antes del cierre", "Apareció oferta en la zona alta"],
              ["Mecha larga abajo", "Cayó y recuperó antes del cierre", "Apareció demanda en la zona baja"]
            ]
          }},
          { note: "La columna de la derecha es interpretación convencional, no un hecho. Una mecha larga superior también puede deberse a una orden grande ejecutada a mal precio, a un dato publicado a media sesión o a un vencimiento de derivados. La vela registra el rastro; la causa no está en el dibujo." },
          { h: "Los patrones y su problema" },
          { p: "La tradición ha nombrado decenas de combinaciones de velas: martillo, envolvente, estrella, doji. Son descripciones útiles para hablar de lo que pasó con vocabulario compartido. El problema empieza cuando se presentan como señales con probabilidad de acierto." },
          { p: "Con miles de activos y miles de sesiones, cualquier patrón aparece muchas veces. Recordar los casos en los que anticipó el movimiento y olvidar los demás produce una sensación de fiabilidad que no resiste el conteo sistemático. Cuando esos patrones se han evaluado con reglas fijas sobre series largas, los resultados son mucho más discretos de lo que sugiere la literatura divulgativa." },
          { h: "Cómo usarlas sin engañarse" },
          { p: "La vela sirve para ver el rastro de una negociación: dónde se concentró la actividad, si el movimiento se sostuvo hasta el cierre o se revirtió, si hubo un desplazamiento brusco entre sesiones. Es información real. Convertir eso en una predicción exige mucho más que reconocer una figura, y quien afirme lo contrario está vendiendo algo." },
          { quiz: {
            q: "Una vela diaria muestra un cuerpo pequeño con una mecha inferior muy larga. ¿Qué se puede afirmar con certeza?",
            options: [
              "Que durante la sesión el precio cayó bastante y recuperó antes del cierre",
              "Que el precio va a subir en las próximas sesiones",
              "Que los compradores han tomado el control del activo"
            ],
            answer: 0,
            explain: "Lo único que la vela documenta es el recorrido del precio dentro del período. Quién actuó, por qué motivo y qué hará después no está en el gráfico. Las otras dos respuestas son interpretaciones frecuentes, pero no se deducen del dibujo."
          }}
        ]
      },
      en: {
        title: "Candlesticks: how to read a chart",
        body: [
          { p: "Before arguing about whether technical analysis works, you need to be able to read what a chart shows. The candle is the most widespread way of representing price, and it compresses four figures from a period into a single shape." },
          { h: "The four figures in a candle" },
          { ul: [
            "<strong>Open.</strong> The first price traded in the period.",
            "<strong>Close.</strong> The last. The candle's body is the distance between open and close.",
            "<strong>High and low.</strong> The extremes of the period, drawn as thin lines above and below the body, called wicks or shadows.",
            "<strong>The colour.</strong> Shows whether the close finished above or below the open. Colour conventions vary by platform, so it is worth checking."
          ]},
          { p: "The period depends on the chart: one candle can represent a minute, a day, a week or a month. The same asset produces completely different pictures depending on that setting, which is the first reason two people can see opposite things in \"the chart\"." },
          { key: "A candle summarises what happened, not what will happen. It is a descriptive instrument. Everything built on top is interpretation, and the two are worth keeping apart." },
          { h: "What the shape adds" },
          { table: {
            head: ["Feature", "What happened during the period", "Conventional reading"],
            rows: [
              ["Long body", "Price moved a lot and closed far from where it opened", "One side dominated the session"],
              ["Very short body", "Opened and closed at nearly the same level, with movement in between", "Balance or indecision between buyers and sellers"],
              ["Long upper wick", "Rose and gave the rise back before the close", "Supply appeared at the higher levels"],
              ["Long lower wick", "Fell and recovered before the close", "Demand appeared at the lower levels"]
            ]
          }},
          { note: "The right-hand column is conventional interpretation, not fact. A long upper wick can equally come from a large order filled badly, from data released mid-session, or from a derivatives expiry. The candle records the trace; the cause is not in the drawing." },
          { h: "Patterns and their problem" },
          { p: "Tradition has named dozens of candle combinations: hammer, engulfing, star, doji. They are useful descriptions that let people discuss what happened in shared vocabulary. The trouble starts when they are presented as signals with a hit rate." },
          { p: "With thousands of assets and thousands of sessions, any pattern appears many times. Remembering the cases where it preceded the move and forgetting the rest produces a sense of reliability that doesn't survive systematic counting. When these patterns have been tested with fixed rules over long series, the results are far more modest than the popular literature suggests." },
          { h: "Using them without fooling yourself" },
          { p: "A candle shows the trace of trading: where activity concentrated, whether a move held into the close or reversed, whether there was an abrupt gap between sessions. That is real information. Turning it into a prediction takes far more than recognising a shape, and anyone claiming otherwise is selling something." },
          { quiz: {
            q: "A daily candle shows a small body with a very long lower wick. What can be stated with certainty?",
            options: [
              "That during the session the price fell substantially and recovered before the close",
              "That the price will rise over the coming sessions",
              "That buyers have taken control of the asset"
            ],
            answer: 0,
            explain: "All the candle documents is the path of the price within the period. Who acted, for what reason, and what they will do next is not in the chart. The other two answers are common interpretations, but they don't follow from the drawing."
          }}
        ]
      }
    },
    {
      id: "tendencias",
      minutes: 7,
      es: {
        title: "Tendencias",
        body: [
          { p: "Una tendencia es una dirección sostenida del precio a lo largo del tiempo. Es el concepto más antiguo del análisis técnico y también el más resbaladizo, porque solo se puede afirmar con seguridad cuando ya ha terminado." },
          { h: "La definición operativa" },
          { ul: [
            "<strong>Tendencia alcista.</strong> Cada máximo supera al anterior y cada retroceso se detiene por encima del retroceso previo.",
            "<strong>Tendencia bajista.</strong> Lo contrario: máximos y mínimos progresivamente más bajos.",
            "<strong>Rango lateral.</strong> El precio oscila entre dos niveles sin dirección definida. Es, con diferencia, la situación más frecuente."
          ]},
          { p: "Esta definición tiene la ventaja de ser verificable: no depende de cómo trace nadie una línea, sino de comparar máximos y mínimos sucesivos. Tiene el inconveniente de ser retrospectiva. Solo sabes que un máximo fue el último cuando el siguiente ya no lo superó." },
          { key: "El análisis de tendencia no anticipa el giro: lo confirma después. Quien lo utiliza acepta llegar tarde tanto a la entrada como a la salida a cambio de no discutirle la dirección al mercado." },
          { h: "El problema de la escala" },
          { p: "Un mismo activo puede estar en tendencia alcista en el gráfico mensual, en tendencia bajista en el semanal y lateral en el diario. Las tres afirmaciones son ciertas a la vez, porque describen escalas distintas. Cuando alguien dice «está en tendencia» sin precisar el plazo, la afirmación no es evaluable." },
          { note: "Esta ambigüedad explica buena parte del atractivo del método y buena parte de sus críticas. Con siete escalas temporales y varias formas de trazar la línea, casi siempre hay una combinación que confirma lo que uno ya pensaba. Fijar el plazo por adelantado, antes de mirar, es la única defensa contra eso." },
          { h: "Líneas de tendencia" },
          { p: "Trazar una recta que una los mínimos de un movimiento ascendente es la representación gráfica habitual. Es útil como resumen visual, pero conviene saber lo que es: una línea dibujada a mano cuya inclinación depende de qué puntos elija quien la traza. Dos analistas competentes pueden trazar dos líneas distintas sobre el mismo gráfico y ambas parecerán razonables." },
          { h: "Dónde falla" },
          { ul: [
            "<strong>Los rangos.</strong> Un método que sigue tendencias pierde dinero de forma sistemática cuando no hay tendencia, que es la mayor parte del tiempo. Las señales falsas se acumulan.",
            "<strong>Los giros bruscos.</strong> Una noticia inesperada invierte la dirección en una sesión, sin dar oportunidad de confirmar nada.",
            "<strong>La confirmación depende del ajuste.</strong> Ser más rápido en confirmar reduce el retraso pero multiplica las señales falsas. Ser más lento hace lo contrario. No hay ajuste que resuelva las dos cosas."
          ]},
          { h: "Qué se puede sostener con honestidad" },
          { p: "La persistencia de las tendencias es uno de los pocos efectos del análisis técnico que también ha sido documentado por la investigación académica, donde se estudia bajo el nombre de momento. Eso no valida el conjunto del método ni convierte cada línea trazada en información. Significa que la idea de fondo tiene respaldo, y que la implementación concreta es donde se gana o se pierde." },
          { quiz: {
            q: "¿Por qué un sistema que sigue tendencias suele acumular pérdidas en un mercado lateral?",
            options: [
              "Porque genera señales de entrada que se invierten enseguida, y cada una tiene su coste",
              "Porque en los rangos laterales no se puede operar",
              "Porque las tendencias solo existen en los gráficos de largo plazo"
            ],
            answer: 0,
            explain: "En un rango, el precio cruza repetidamente los niveles que el sistema interpreta como inicio de tendencia. Cada señal falsa implica entrar, salir y pagar el coste de ambas operaciones. Esas pérdidas pequeñas y repetidas son el precio que este enfoque paga a cambio de captar los movimientos grandes cuando aparecen."
          }}
        ]
      },
      en: {
        title: "Trends",
        body: [
          { p: "A trend is a sustained direction in price over time. It is the oldest idea in technical analysis and also the slipperiest, because it can only be asserted with confidence once it has ended." },
          { h: "The working definition" },
          { ul: [
            "<strong>Uptrend.</strong> Each high exceeds the previous one and each pullback stops above the previous pullback.",
            "<strong>Downtrend.</strong> The reverse: progressively lower highs and lows.",
            "<strong>Sideways range.</strong> Price oscillates between two levels with no defined direction. By some distance the most common state."
          ]},
          { p: "This definition has the advantage of being checkable: it doesn't depend on how anyone draws a line, only on comparing successive highs and lows. Its drawback is that it looks backwards. You only know a high was the last one once the next failed to exceed it." },
          { key: "Trend analysis doesn't anticipate the turn: it confirms it afterwards. Anyone using it accepts being late to both the entry and the exit in exchange for not arguing with the market about direction." },
          { h: "The scale problem" },
          { p: "The same asset can be in an uptrend on the monthly chart, a downtrend on the weekly and sideways on the daily. All three statements are true at once, because they describe different scales. When someone says \"it's trending\" without naming the timeframe, the claim can't be assessed." },
          { note: "That ambiguity explains much of the method's appeal and much of the criticism. With seven timeframes and several ways to draw the line, there is nearly always a combination confirming whatever you already thought. Fixing the timeframe in advance, before looking, is the only defence." },
          { h: "Trend lines" },
          { p: "Drawing a straight line joining the lows of a rising move is the usual graphical shorthand. It works as a visual summary, but it helps to know what it is: a hand-drawn line whose slope depends on which points the drawer picked. Two competent analysts can draw two different lines on the same chart and both will look reasonable." },
          { h: "Where it fails" },
          { ul: [
            "<strong>Ranges.</strong> A trend-following method loses money systematically when there is no trend, which is most of the time. False signals pile up.",
            "<strong>Sharp reversals.</strong> Unexpected news flips the direction within a session, giving no chance to confirm anything.",
            "<strong>Confirmation depends on the setting.</strong> Confirming faster cuts the lag but multiplies false signals. Confirming slower does the opposite. No setting solves both."
          ]},
          { h: "What can honestly be claimed" },
          { p: "Trend persistence is one of the few technical effects also documented in academic research, where it is studied under the name momentum. That doesn't validate the method as a whole, nor turn every drawn line into information. It means the underlying idea has support, and that the specific implementation is where it is won or lost." },
          { quiz: {
            q: "Why does a trend-following system usually accumulate losses in a sideways market?",
            options: [
              "Because it generates entry signals that reverse almost immediately, and each one carries a cost",
              "Because you cannot trade in a sideways range",
              "Because trends only exist on long-term charts"
            ],
            answer: 0,
            explain: "In a range, price repeatedly crosses the levels the system reads as the start of a trend. Every false signal means entering, exiting and paying for both trades. Those small repeated losses are the price this approach pays for catching the large moves when they do appear."
          }}
        ]
      }
    },
    {
      id: "soportes-y-resistencias",
      minutes: 7,
      es: {
        title: "Soportes y resistencias",
        body: [
          { p: "Un soporte es un nivel de precio en el que las caídas se han detenido varias veces. Una resistencia es el equivalente por arriba: un nivel donde las subidas se han frenado. Son los conceptos más usados del análisis técnico y los que más se confunden con una propiedad del activo." },
          { h: "Por qué podrían existir" },
          { p: "La explicación no es mística sino de comportamiento. En un nivel donde mucha gente compró, quien quedó atrapado al caer el precio suele querer salir sin pérdidas cuando vuelve allí, lo que genera oferta. Y quien se quedó fuera de una subida tiende a esperar una vuelta a ese mismo nivel para entrar, lo que genera demanda. Además, muchas órdenes automáticas se colocan en cifras redondas, lo que concentra actividad en niveles concretos." },
          { key: "Un soporte no sostiene el precio. Es una zona donde han aparecido compradores en el pasado, lo que hace algo más probable que vuelvan a aparecer. La diferencia entre esas dos frases es la diferencia entre entender el concepto y creer en él." },
          { h: "Cómo se usan en la práctica" },
          { ul: [
            "<strong>Como referencia, no como frontera.</strong> Son zonas de varios puntos porcentuales, no líneas exactas. Tratarlos como cifras precisas produce falsas rupturas constantes.",
            "<strong>Como punto de invalidación.</strong> Su uso más defendible: si compras apoyándote en un soporte y el precio lo pierde con claridad, tu razonamiento era incorrecto y conviene salir.",
            "<strong>Cuantos más toques, más relevante.</strong> Un nivel que ha frenado el precio cinco veces está más observado que uno que lo frenó una vez.",
            "<strong>Los papeles se intercambian.</strong> Cuando una resistencia se supera con claridad, es habitual que actúe después como soporte, y a la inversa."
          ]},
          { h: "El problema de fondo" },
          { p: "Estos niveles se identifican mirando hacia atrás, y en cualquier gráfico hay decenas de sitios donde el precio se detuvo alguna vez. Elegir cuáles cuentan es una decisión del analista. Eso hace que el método sea casi imposible de refutar: si el precio respeta el nivel, se confirma; si lo rompe, era una ruptura; si lo rompe y vuelve, era una ruptura falsa. Cualquier resultado encaja en el marco." },
          { note: "Una prueba honesta que puedes hacerte a ti mismo: marca los niveles en un gráfico tapando la parte derecha, apunta qué esperas, y solo entonces descubre lo que ocurrió. El resultado con el gráfico completo a la vista siempre es mejor que el resultado real, y esa diferencia es exactamente el sesgo del que hay que protegerse." },
          { h: "Dónde dejan de funcionar" },
          { p: "Ante un cambio real en el negocio o en el entorno, estos niveles no ofrecen resistencia alguna. Unos resultados muy por debajo de lo esperado, una operación corporativa o un movimiento brusco de tipos atraviesan cualquier soporte sin detenerse. El nivel refleja el comportamiento de quienes negociaron con la información anterior; cuando la información cambia, deja de describir nada." },
          { quiz: {
            q: "El precio de un activo pierde con claridad un soporte muy observado tras una noticia sobre la empresa. ¿Qué lectura es más razonable?",
            options: [
              "El nivel reflejaba comportamiento pasado y la nueva información lo ha dejado sin sentido",
              "El soporte era falso y hay que buscar el verdadero más abajo",
              "El precio volverá a ese nivel porque los soportes siempre se recuperan"
            ],
            answer: 0,
            explain: "Un soporte resume dónde han aparecido compradores mientras la información era una. Cuando la información cambia de forma sustancial, el comportamiento anterior deja de ser una guía. Ni el nivel era falso ni existe ninguna regla que obligue al precio a volver."
          }}
        ]
      },
      en: {
        title: "Support and resistance",
        body: [
          { p: "Support is a price level where falls have stopped several times. Resistance is the same thing above: a level where rises have stalled. They are the most used concepts in technical analysis and the ones most often mistaken for a property of the asset itself." },
          { h: "Why they might exist" },
          { p: "The explanation is behavioural, not mystical. At a level where many people bought, those left holding losses tend to want out at breakeven when price returns there, which creates supply. Those who missed a rise tend to wait for a return to that same level to enter, which creates demand. On top of that, many automated orders sit at round numbers, concentrating activity at specific levels." },
          { key: "Support does not hold the price up. It is an area where buyers have appeared before, which makes it somewhat more likely they appear again. The gap between those two sentences is the gap between understanding the concept and believing in it." },
          { h: "How they are used in practice" },
          { ul: [
            "<strong>As a reference, not a border.</strong> They are zones several percentage points wide, not exact lines. Treating them as precise figures produces constant false breaks.",
            "<strong>As an invalidation point.</strong> Their most defensible use: if you buy on the basis of a support and price clearly loses it, your reasoning was wrong and it is time to leave.",
            "<strong>More touches, more relevance.</strong> A level that has halted price five times is more widely watched than one that halted it once.",
            "<strong>The roles swap.</strong> When a resistance is clearly exceeded, it commonly acts as support afterwards, and vice versa."
          ]},
          { h: "The underlying problem" },
          { p: "These levels are identified looking backwards, and any chart has dozens of places where price once paused. Choosing which ones count is the analyst's decision. That makes the method almost impossible to refute: if price respects the level, it is confirmed; if it breaks, that was a breakout; if it breaks and returns, that was a false breakout. Every outcome fits the framework." },
          { note: "An honest test to run on yourself: mark the levels with the right-hand side of the chart covered, write down what you expect, and only then reveal what happened. Results with the full chart visible are always better than real results, and that gap is precisely the bias to guard against." },
          { h: "Where they stop working" },
          { p: "Faced with a real change in the business or the environment, these levels offer no resistance at all. Results far below expectations, a corporate transaction or a sharp move in rates go through any support without pausing. The level reflects the behaviour of people trading on the previous information; when the information changes, it describes nothing." },
          { quiz: {
            q: "A price clearly loses a heavily watched support after company news. What is the most reasonable reading?",
            options: [
              "The level reflected past behaviour and the new information has made it meaningless",
              "The support was false and the real one must be lower down",
              "Price will return to that level because supports always recover"
            ],
            answer: 0,
            explain: "A support summarises where buyers appeared while the information was one thing. When the information changes substantially, past behaviour stops being a guide. The level wasn't false, and no rule obliges price to come back."
          }}
        ]
      }
    },
    {
      id: "rsi",
      minutes: 7,
      es: {
        title: "RSI: el indicador peor interpretado",
        body: [
          { p: "El índice de fuerza relativa compara la magnitud de las subidas recientes con la de las bajadas recientes y devuelve un número entre 0 y 100. Se calcula sobre un número fijo de sesiones, habitualmente catorce, y es probablemente el indicador más utilizado y peor entendido del análisis técnico." },
          { h: "Qué mide exactamente" },
          { p: "Si en el período todas las sesiones fueron al alza, el valor se acerca a 100. Si todas fueron a la baja, se acerca a 0. Un valor intermedio indica un reparto equilibrado. Es una medida descriptiva del pasado inmediato, del mismo modo que una media de temperaturas describe la semana anterior." },
          { h: "El malentendido central" },
          { p: "La convención dice que por encima de 70 el activo está sobrecomprado y por debajo de 30 sobrevendido. De ahí mucha gente deduce que un valor alto es señal de venta. Es la lectura equivocada, y produce pérdidas de forma sistemática." },
          { key: "Un RSI alto significa que el activo ha subido con fuerza. Eso es exactamente lo que hace un activo que está en una tendencia alcista fuerte, y puede permanecer en niveles altos durante meses. Vender por ese motivo es apostar contra la tendencia usando como argumento la propia existencia de la tendencia." },
          { h: "Los usos que se sostienen mejor" },
          { ul: [
            "<strong>Como filtro de contexto.</strong> Saber si un movimiento reciente ha sido muy vertical ayuda a dimensionar el riesgo de entrar justo después.",
            "<strong>Como aviso de exceso en rangos.</strong> En un activo que lleva tiempo oscilando entre dos niveles, los extremos del indicador coinciden a menudo con los extremos del rango. Deja de funcionar en cuanto aparece una tendencia.",
            "<strong>Como observación de divergencias.</strong> Cuando el precio marca un máximo superior al anterior y el indicador no lo acompaña, el impulso del movimiento se está debilitando. Es una observación descriptiva y produce muchas señales que no llevan a ninguna parte."
          ]},
          { note: "El período de cálculo no es neutral. Con menos sesiones el indicador se vuelve más nervioso y alcanza los extremos continuamente; con más, apenas los toca. Ajustar ese número hasta que las señales pasadas parezcan buenas es la forma más común de engañarse con cualquier indicador." },
          { h: "El límite que comparten todos los indicadores" },
          { p: "El RSI se calcula a partir del precio. No incorpora ninguna información que no esté ya en el gráfico: es una transformación matemática de datos que ya tenías. Puede hacer visible algo que no se apreciaba a simple vista, pero no puede aportar información nueva, y por tanto no puede saber nada que el precio no sepa." },
          { quiz: {
            q: "Una acción en tendencia alcista sostenida mantiene el RSI por encima de 70 durante varias semanas. ¿Qué conclusión es correcta?",
            options: [
              "Que ha subido con fuerza de forma persistente, algo característico de una tendencia fuerte",
              "Que está sobrevalorada y va a corregir pronto",
              "Que el indicador está mal calculado, porque no debería superar 70 tanto tiempo"
            ],
            answer: 0,
            explain: "El indicador está haciendo justo lo que debe: registrar que las subidas han dominado. Las etiquetas de sobrecomprado y sobrevendido son convenciones, no diagnósticos de valoración. Un activo puede permanecer en esa zona durante meses mientras la tendencia continúa."
          }}
        ]
      },
      en: {
        title: "RSI: the most misread indicator",
        body: [
          { p: "The relative strength index compares the size of recent rises against recent falls and returns a number between 0 and 100. It is computed over a fixed number of sessions, usually fourteen, and it is probably the most used and least understood indicator in technical analysis." },
          { h: "What it actually measures" },
          { p: "If every session in the window was up, the value approaches 100. If every session was down, it approaches 0. A middling value means the two were balanced. It is a descriptive measure of the immediate past, in the same way an average of temperatures describes last week." },
          { h: "The central misunderstanding" },
          { p: "Convention says that above 70 an asset is overbought and below 30 oversold. Many people infer from this that a high reading is a sell signal. That is the wrong reading, and it loses money systematically." },
          { key: "A high RSI means the asset has risen strongly. That is exactly what an asset in a strong uptrend does, and it can stay at high readings for months. Selling for that reason is betting against the trend using the trend's own existence as the argument." },
          { h: "The uses that hold up better" },
          { ul: [
            "<strong>As context.</strong> Knowing whether a recent move has been very vertical helps size the risk of entering right afterwards.",
            "<strong>As an extreme marker in ranges.</strong> In an asset that has oscillated between two levels for a while, the indicator's extremes often coincide with the range's extremes. It stops working the moment a trend appears.",
            "<strong>As divergence observation.</strong> When price sets a higher high and the indicator doesn't follow, the move's momentum is fading. It is a descriptive observation and it produces many signals that lead nowhere."
          ]},
          { note: "The calculation window is not neutral. With fewer sessions the indicator becomes jumpy and hits the extremes constantly; with more, it barely reaches them. Tuning that number until past signals look good is the most common way to fool yourself with any indicator." },
          { h: "The limit every indicator shares" },
          { p: "RSI is computed from price. It carries no information that isn't already in the chart: it is a mathematical transformation of data you already had. It can make something visible that was hard to see, but it cannot add new information, and so it cannot know anything price doesn't know." },
          { quiz: {
            q: "A stock in a sustained uptrend keeps its RSI above 70 for several weeks. Which conclusion is correct?",
            options: [
              "That it has risen strongly and persistently, which is characteristic of a strong trend",
              "That it is overvalued and will correct soon",
              "That the indicator is miscalculated, since it shouldn't stay above 70 that long"
            ],
            answer: 0,
            explain: "The indicator is doing exactly its job: recording that rises have dominated. The overbought and oversold labels are conventions, not valuation diagnoses. An asset can sit in that zone for months while the trend continues."
          }}
        ]
      }
    },
    {
      id: "macd",
      minutes: 7,
      es: {
        title: "MACD",
        body: [
          { p: "El MACD es la diferencia entre dos medias móviles del precio, una rápida y otra lenta. A esa diferencia se le añade una media suavizada de sí misma, llamada línea de señal, y la distancia entre ambas se dibuja como un histograma. Es un indicador de segundo orden: no mide el precio, mide la relación entre dos resúmenes del precio." },
          { h: "Cómo se lee" },
          { ul: [
            "<strong>Por encima de cero.</strong> La media rápida está por encima de la lenta, lo que indica que el precio reciente supera al de referencia más largo.",
            "<strong>Cruce de la línea de señal.</strong> La lectura habitual como aviso de cambio de impulso. Es la que genera más operaciones y también más señales falsas.",
            "<strong>Histograma creciente.</strong> Las dos líneas se separan, es decir, el movimiento se está acelerando.",
            "<strong>Divergencia.</strong> El precio hace un nuevo máximo y el indicador no. Sugiere que el impulso se agota, sin decir cuándo ni cuánto."
          ]},
          { key: "El MACD deriva de medias móviles, y las medias móviles son promedios del pasado. Todo lo que muestra ha ocurrido ya. Se comporta bien describiendo movimientos amplios y sostenidos, y mal en cualquier otra circunstancia." },
          { h: "Dónde falla, que es donde más se usa" },
          { p: "En mercados sin dirección clara, las dos medias se cruzan continuamente y el indicador produce una sucesión de señales contradictorias. Quien opera cada cruce acumula muchas operaciones pequeñas y perdedoras, más el coste de cada una. Es el mismo problema de todos los métodos que siguen tendencias, agravado porque el MACD invita a operar con frecuencia." },
          { note: "Los parámetros habituales, doce, veintiséis y nueve períodos, proceden de una época en la que la semana bursátil tenía seis sesiones. Se mantienen por costumbre, no porque tengan una justificación teórica. Que sean los valores por defecto en todas las plataformas los hace muy observados, y eso es lo único que los distingue." },
          { h: "Qué evita el indicador" },
          { p: "Su virtud real es que impone una regla. Un cruce ocurre o no ocurre, y eso deja menos margen a la interpretación que trazar líneas a mano sobre un gráfico. No lo hace acertado, pero sí evaluable: se puede probar sobre datos históricos y contar cuántas veces funcionó, cosa que no puede hacerse con un método que depende del criterio de quien mira." },
          { quiz: {
            q: "¿Por qué el MACD produce tantas señales falsas en un mercado lateral?",
            options: [
              "Porque las dos medias se cruzan repetidamente cuando el precio oscila sin dirección",
              "Porque el indicador deja de calcularse en ausencia de tendencia",
              "Porque los parámetros por defecto son incorrectos para cualquier activo"
            ],
            answer: 0,
            explain: "El MACD mide la separación entre dos medias. Si el precio va y viene alrededor de un nivel, las dos medias se entrelazan y cada entrelazado produce un cruce. El indicador funciona exactamente como está diseñado; lo que ocurre es que su diseño supone que hay una tendencia que describir."
          }}
        ]
      },
      en: {
        title: "MACD",
        body: [
          { p: "MACD is the difference between two moving averages of price, one fast and one slow. A smoothed average of that difference, called the signal line, is added on top, and the distance between the two is drawn as a histogram. It is a second-order indicator: it doesn't measure price, it measures the relationship between two summaries of price." },
          { h: "How it is read" },
          { ul: [
            "<strong>Above zero.</strong> The fast average sits above the slow one, meaning recent price is above the longer reference.",
            "<strong>Signal line crossover.</strong> The usual reading as a warning of a momentum change. It generates the most trades and also the most false signals.",
            "<strong>Rising histogram.</strong> The two lines are separating, meaning the move is accelerating.",
            "<strong>Divergence.</strong> Price sets a new high and the indicator doesn't. It suggests momentum is fading, without saying when or by how much."
          ]},
          { key: "MACD derives from moving averages, and moving averages are averages of the past. Everything it shows has already happened. It describes broad sustained moves well, and everything else badly." },
          { h: "Where it fails, which is where it is used most" },
          { p: "In markets with no clear direction, the two averages cross constantly and the indicator produces a run of contradictory signals. Anyone trading every crossover accumulates many small losing trades plus the cost of each. It is the same problem every trend-following method has, made worse because MACD invites frequent trading." },
          { note: "The standard parameters, twelve, twenty-six and nine periods, come from an era when the trading week had six sessions. They persist out of habit, not because they have a theoretical justification. Being the default on every platform makes them widely watched, and that is the only thing that distinguishes them." },
          { h: "What the indicator avoids" },
          { p: "Its real virtue is that it imposes a rule. A crossover either happens or it doesn't, which leaves less room for interpretation than drawing lines on a chart by hand. That doesn't make it right, but it makes it testable: you can run it over historical data and count how often it worked, which is impossible for a method that depends on the judgement of whoever is looking." },
          { quiz: {
            q: "Why does MACD produce so many false signals in a sideways market?",
            options: [
              "Because the two averages cross repeatedly when price oscillates with no direction",
              "Because the indicator stops calculating in the absence of a trend",
              "Because the default parameters are wrong for every asset"
            ],
            answer: 0,
            explain: "MACD measures the gap between two averages. If price moves back and forth around a level, the two averages interweave and each interweaving produces a crossover. The indicator behaves exactly as designed; the issue is that its design assumes there is a trend to describe."
          }}
        ]
      }
    },
    {
      id: "medias-moviles",
      minutes: 7,
      es: {
        title: "Medias móviles",
        body: [
          { p: "Una media móvil es el precio medio de las últimas sesiones, recalculado cada día. Es la herramienta más simple del análisis técnico y también la más defendible, precisamente porque no pretende predecir nada: se limita a suavizar el ruido para dejar ver la dirección." },
          { h: "Simple o exponencial" },
          { p: "La media simple da el mismo peso a todas las sesiones del período. La exponencial da más peso a las recientes, con lo que reacciona antes a los cambios y también se equivoca antes ante un movimiento pasajero. Ninguna de las dos es superior: reaccionar rápido y filtrar ruido son objetivos opuestos, y elegir una es elegir a cuál de los dos renuncias." },
          { h: "El compromiso que define su uso" },
          { table: {
            head: ["Período", "Reacción a los cambios", "Señales falsas"],
            rows: [
              ["Corto (20 sesiones)", "Rápida", "Muchas"],
              ["Medio (50 sesiones)", "Intermedia", "Intermedias"],
              ["Largo (200 sesiones)", "Lenta", "Pocas"]
            ]
          }},
          { key: "No existe el período óptimo. Existe una elección entre llegar tarde y equivocarse a menudo, y cualquier ajuste es una posición en ese intercambio. Quien busca el número que resuelva ambas cosas está buscando algo que no existe." },
          { h: "Los usos habituales" },
          { ul: [
            "<strong>Como filtro de dirección.</strong> Comprobar si el precio está por encima o por debajo de una media larga antes de tomar cualquier decisión operativa.",
            "<strong>Como cruce.</strong> Cuando una media corta cruza a una larga se interpreta como cambio de régimen. Llega siempre tarde por construcción, ya que ambas son promedios del pasado.",
            "<strong>Como referencia dinámica.</strong> Algunos precios rebotan de forma recurrente en medias muy observadas. El efecto, cuando existe, se explica sobre todo porque mucha gente mira exactamente el mismo nivel."
          ]},
          { note: "Ese último punto tiene una implicación que conviene tener presente: parte del funcionamiento de estas herramientas depende de cuánta gente las usa. Es un mecanismo real, pero también frágil, porque desaparece si la atención se desplaza a otro sitio." },
          { h: "Lo que una media móvil nunca hace" },
          { p: "No anticipa. Por definición es un promedio de lo ya ocurrido, así que cualquier giro aparece en la media después de haber sucedido en el precio. Los sistemas basados en medias aceptan ese retraso a cambio de no tener que juzgar cada movimiento; renuncian a los primeros y últimos tramos de cada tendencia para no quedarse fuera de la parte central." },
          { quiz: {
            q: "¿Por qué una media móvil de 200 sesiones genera menos señales falsas que una de 20?",
            options: [
              "Porque promedia más datos, lo que amortigua los movimientos breves, a costa de reaccionar más tarde",
              "Porque los períodos largos son estadísticamente más fiables para predecir el precio",
              "Porque las medias largas solo se calculan cuando hay una tendencia definida"
            ],
            answer: 0,
            explain: "Promediar más sesiones diluye el efecto de cualquier movimiento aislado, de modo que la línea solo se mueve cuando el cambio es sostenido. Es exactamente el mismo motivo por el que tarda más en reflejar un giro real: no hay forma de tener una cosa sin la otra."
          }}
        ]
      },
      en: {
        title: "Moving averages",
        body: [
          { p: "A moving average is the average price of the last few sessions, recalculated each day. It is the simplest tool in technical analysis and also the most defensible, precisely because it claims to predict nothing: it just smooths the noise so direction can be seen." },
          { h: "Simple or exponential" },
          { p: "A simple average weights every session in the window equally. An exponential one weights recent sessions more, so it reacts faster to changes and also gets fooled faster by a passing move. Neither is superior: reacting quickly and filtering noise are opposing goals, and choosing one is choosing which to give up." },
          { h: "The trade-off that defines its use" },
          { table: {
            head: ["Window", "Reaction to changes", "False signals"],
            rows: [
              ["Short (20 sessions)", "Fast", "Many"],
              ["Medium (50 sessions)", "Intermediate", "Intermediate"],
              ["Long (200 sessions)", "Slow", "Few"]
            ]
          }},
          { key: "There is no optimal window. There is a choice between arriving late and being wrong often, and every setting is a position on that trade-off. Anyone hunting for the number that solves both is hunting for something that doesn't exist." },
          { h: "The common uses" },
          { ul: [
            "<strong>As a direction filter.</strong> Checking whether price sits above or below a long average before making any operational decision.",
            "<strong>As a crossover.</strong> When a short average crosses a long one it is read as a regime change. It is always late by construction, since both are averages of the past.",
            "<strong>As a dynamic reference.</strong> Some prices bounce repeatedly off heavily watched averages. The effect, where it exists, is mostly explained by many people looking at exactly the same level."
          ]},
          { note: "That last point carries an implication worth holding on to: part of how these tools work depends on how many people use them. It is a real mechanism, but a fragile one, because it disappears if attention moves elsewhere." },
          { h: "What a moving average never does" },
          { p: "It does not anticipate. By definition it averages what has already happened, so any turn shows up in the average after it happened in the price. Systems built on averages accept that lag in exchange for not having to judge every move; they give up the first and last stretch of each trend in order not to miss the middle." },
          { quiz: {
            q: "Why does a 200-session moving average generate fewer false signals than a 20-session one?",
            options: [
              "Because it averages more data, damping brief moves, at the cost of reacting later",
              "Because long windows are statistically more reliable at predicting price",
              "Because long averages are only calculated when a defined trend exists"
            ],
            answer: 0,
            explain: "Averaging more sessions dilutes the effect of any isolated move, so the line only shifts when the change is sustained. That is exactly why it also takes longer to reflect a genuine turn: there is no way to have one without the other."
          }}
        ]
      }
    },
    {
      id: "volumen",
      minutes: 8,
      es: {
        title: "Volumen y los límites del método",
        body: [
          { p: "El volumen es el número de títulos negociados en un período. A diferencia de todos los indicadores anteriores, no se calcula a partir del precio: es un dato independiente, y por eso aporta algo que las transformaciones del precio no pueden aportar." },
          { h: "Qué informa" },
          { ul: [
            "<strong>Cuánta participación hubo.</strong> Un movimiento con volumen alto implica que mucha gente actuó; con volumen bajo, que se movió con pocas órdenes y puede revertirse con la misma facilidad.",
            "<strong>Dónde se concentró la actividad.</strong> Los niveles con más volumen negociado marcan zonas donde muchos participantes tienen posiciones abiertas.",
            "<strong>Si hay algo ocurriendo.</strong> Un salto súbito del volumen sin noticia visible suele preceder a la publicación de información. No dice en qué dirección."
          ]},
          { key: "El volumen no tiene signo. Cada operación tiene un comprador y un vendedor: por cada título comprado hay uno vendido. La frase «entró mucho dinero comprador» describe una impresión, no una magnitud medible en el dato de volumen." },
          { h: "Las lecturas habituales y su fragilidad" },
          { p: "Se suele decir que una ruptura con volumen alto es más fiable que una con volumen bajo. Tiene lógica: más participación sugiere más convicción. Pero el volumen también se dispara en las capitulaciones y en los movimientos que se agotan de inmediato, de modo que la relación es mucho menos limpia de lo que sugiere la regla." },
          { note: "Hay además distorsiones estructurales. Una parte importante del volumen procede de operativa automatizada, de creación de mercado y de coberturas de derivados, actividad que no expresa ninguna opinión sobre el activo. El dato agregado mezcla intenciones muy distintas." },
          { h: "Los límites del análisis técnico en conjunto" },
          { p: "Cerramos el módulo con la parte que rara vez se cuenta. El análisis técnico tiene tres problemas estructurales que conviene conocer antes de decidir cuánto peso darle." },
          { ul: [
            "<strong>Falta de refutabilidad.</strong> Muchos conceptos admiten cualquier resultado como confirmación. Si una idea no puede fallar, tampoco puede demostrarse.",
            "<strong>Sobreajuste.</strong> Con suficientes indicadores, parámetros y escalas temporales siempre se encuentra una combinación que habría funcionado en el pasado. Encontrarla no dice nada sobre el futuro.",
            "<strong>Coste de operar.</strong> Estos métodos generan muchas operaciones, y cada una tiene horquilla, comisión y, en muchos países, impacto fiscal. Un sistema con ligera ventaja teórica puede ser perdedor después de costes."
          ]},
          { p: "La evidencia académica no es uniformemente negativa: los efectos de momento están bien documentados y algunas reglas sencillas de seguimiento de tendencia se han sostenido en pruebas largas. Lo que no encuentra respaldo es la parte más vendida, la de patrones interpretados a ojo con capacidad de anticipar movimientos concretos." },
          { h: "Qué queda en pie" },
          { p: "Saber leer un gráfico es una habilidad útil: permite ver qué ha pasado, dónde se ha negociado y con qué intensidad. Es información legítima que complementa al análisis del negocio. Lo que no es, y aquí lo decimos con claridad, es un método para saber lo que va a ocurrir. Farlaz no es asesor registrado y este módulo describe herramientas, no recomienda usarlas para operar." },
          { quiz: {
            q: "¿Por qué es incorrecto decir que en una sesión de subida «entró dinero comprador»?",
            options: [
              "Porque toda operación tiene comprador y vendedor: el volumen mide actividad, no dirección",
              "Porque el volumen se publica con retraso y no puede atribuirse a una sesión concreta",
              "Porque en las subidas solo hay compradores y por eso el precio sube"
            ],
            answer: 0,
            explain: "Cada título comprado fue vendido por alguien: las dos cantidades son idénticas por construcción. El precio sube porque los compradores aceptan pagar más, no porque haya más volumen de un lado. El volumen mide cuánta actividad hubo, sin decir hacia dónde."
          }}
        ]
      },
      en: {
        title: "Volume and the limits of the method",
        body: [
          { p: "Volume is the number of securities traded in a period. Unlike every indicator above, it isn't computed from price: it is independent data, and that is why it contributes something transformations of price cannot." },
          { h: "What it tells you" },
          { ul: [
            "<strong>How much participation there was.</strong> A move on high volume means many people acted; on low volume, it moved on few orders and can reverse just as easily.",
            "<strong>Where activity concentrated.</strong> Levels with the most volume traded mark areas where many participants hold positions.",
            "<strong>Whether something is happening.</strong> A sudden jump in volume with no visible news often precedes the release of information. It doesn't say in which direction."
          ]},
          { key: "Volume has no sign. Every trade has a buyer and a seller: for every security bought, one was sold. The phrase \"a lot of buying money came in\" describes an impression, not a quantity measurable in the volume figure." },
          { h: "The usual readings and their fragility" },
          { p: "It is often said that a breakout on high volume is more reliable than one on low volume. There is logic to it: more participation suggests more conviction. But volume also spikes in capitulations and in moves that exhaust immediately, so the relationship is far less clean than the rule suggests." },
          { note: "There are structural distortions too. A large share of volume comes from automated trading, market making and derivatives hedging, activity that expresses no view on the asset at all. The aggregate figure blends very different intentions." },
          { h: "The limits of technical analysis as a whole" },
          { p: "We close the module with the part rarely told. Technical analysis has three structural problems worth knowing before deciding how much weight to give it." },
          { ul: [
            "<strong>Lack of refutability.</strong> Many concepts accept any outcome as confirmation. If an idea cannot fail, it cannot be demonstrated either.",
            "<strong>Overfitting.</strong> With enough indicators, parameters and timeframes, there is always a combination that would have worked in the past. Finding it says nothing about the future.",
            "<strong>Trading costs.</strong> These methods generate many trades, and each carries a spread, a commission and, in many countries, a tax consequence. A system with a slight theoretical edge can be a loser after costs."
          ]},
          { p: "The academic evidence isn't uniformly negative: momentum effects are well documented and some simple trend-following rules have held up in long tests. What finds no support is the part sold hardest, the eyeballed patterns claimed to anticipate specific moves." },
          { h: "What is left standing" },
          { p: "Being able to read a chart is a useful skill: it lets you see what has happened, where trading occurred and how intensely. That is legitimate information and it complements analysis of the business. What it is not, and we say so plainly, is a method for knowing what will happen. Farlaz is not a registered adviser, and this module describes tools rather than recommending you trade with them." },
          { quiz: {
            q: "Why is it wrong to say that on an up day \"buying money came in\"?",
            options: [
              "Because every trade has a buyer and a seller: volume measures activity, not direction",
              "Because volume is published with a lag and can't be attributed to a specific session",
              "Because on up days there are only buyers, which is why the price rises"
            ],
            answer: 0,
            explain: "Every security bought was sold by someone: the two quantities are identical by construction. Price rises because buyers accept paying more, not because there is more volume on one side. Volume measures how much activity there was, without saying where it pointed."
          }}
        ]
      }
    }
  ]
});

/* ═══════════════════════════════════════════ MÓDULO 12 ═══ */
window.FARLAZ_COURSE.push({
  id: "portafolios", num: "12", level: 3,
  es: {
    title: "Construcción de portafolios",
    tagline: "Cuánto poner en cada cosa y cuándo reequilibrar",
    summary: "Elegir buenos activos es la mitad fácil. La otra mitad —cuánto asignar a cada uno, cuándo rebalancear y cómo evitar que los costes y tu propio comportamiento se coman el resultado— decide el desenlace.",
    topics: ["Diversificación", "Asignación de activos", "Correlación", "Riesgo", "Volatilidad", "Rebalanceo"],
    outcomes: [
      "Medir diversificación por correlación, no por número de posiciones",
      "Dimensionar una posición con método",
      "Aplicar una regla de rebalanceo y saber por qué funciona",
      "Cuantificar las tres fugas de rentabilidad"
    ]
  },
  en: {
    title: "Portfolio construction",
    tagline: "How much to put in each thing, and when to rebalance",
    summary: "Picking good assets is the easy half. The other half — how much to allocate to each, when to rebalance, and how to stop costs and your own behaviour eating the result — decides the outcome.",
    topics: ["Diversification", "Asset allocation", "Correlation", "Risk", "Volatility", "Rebalancing"],
    outcomes: [
      "Measure diversification by correlation, not position count",
      "Size a position with a method",
      "Apply a rebalancing rule and know why it works",
      "Quantify the three return leaks"
    ]
  },
  lessons: [ 
    {
        id: "diversificacion",
        minutes: 9,
        es: {
          title: "Diversificación real: correlación, no cantidad",
          body: [
            { p: "Tener veinte acciones no es estar diversificado. Si las veinte son bancos del mismo país, tienes una sola apuesta repartida en veinte recibos, y el día que suban los impagos caerán todas juntas." },
            { h: "Qué mide la correlación" },
            { p: "La correlación es un número entre −1 y +1 que indica cómo se mueven dos activos entre sí." },
            { ul: [
              "<strong>+1:</strong> se mueven exactamente igual. No hay diversificación alguna.",
              "<strong>0:</strong> se mueven de forma independiente. Diversificación plena.",
              "<strong>−1:</strong> se mueven en direcciones opuestas. Uno cubre al otro perfectamente."
            ]},
            { p: "La reducción de riesgo de una cartera no viene del número de posiciones, viene de que esas posiciones tengan correlaciones bajas entre sí. Diez activos con correlación 0,3 reducen mucho más la volatilidad que cincuenta con correlación 0,9." },
            { key: "La pregunta correcta no es «¿cuántas posiciones tengo?» sino «¿qué tendría que pasar en el mundo para que la mitad de mi cartera cayera a la vez?». Si encuentras un único suceso que las tumba todas, no estás diversificado." },
            { h: "Las dimensiones que sí diversifican" },
            { ul: [
              "<strong>Clase de activo.</strong> Renta variable, renta fija, inmobiliario, liquidez. Es la separación más eficaz.",
              "<strong>Geografía.</strong> Reduce el riesgo político y de divisa concentrado en un país.",
              "<strong>Sector.</strong> Tecnología, consumo básico, energía y banca responden a fuerzas distintas.",
              "<strong>Factor.</strong> Empresas grandes frente a pequeñas, valor frente a crecimiento, calidad frente a apalancamiento."
            ]},
            { h: "La trampa: las correlaciones no son estables" },
            { p: "Este es el punto que casi nunca se cuenta. Las correlaciones que mides en años tranquilos no son las que tendrás en una crisis. Cuando el mercado se estresa, muchos activos que parecían independientes empiezan a caer juntos, porque los inversores venden lo que pueden vender, no lo que quieren vender." },
            { note: "La diversificación funciona mejor precisamente cuando menos la necesitas y falla parcialmente cuando más falta te hace. No es un argumento para abandonarla —sigue siendo la única herramienta gratuita que existe para reducir riesgo— sino para no confiar en que te protegerá por completo." },
            { h: "Y la diversificación excesiva" },
            { p: "En el otro extremo, repartir el capital entre cincuenta posiciones que no puedes seguir tiene su propio coste. No puedes conocer bien cincuenta negocios, y cada posición pequeña queda tan diluida que un acierto no cambia el resultado de la cartera." },
            { p: "No hay un número mágico. Sí hay una prueba práctica: si no puedes explicar en dos frases por qué tienes cada posición, tienes demasiadas." },
            { quiz: {
              q: "¿Cuál de estas carteras está mejor diversificada?",
              options: [
                "6 activos: bolsa global, bonos, inmobiliario, oro, liquidez y bolsa emergente",
                "30 acciones tecnológicas de distintos países",
                "15 bancos de tres países diferentes"
              ],
              answer: 0,
              explain: "La primera tiene menos posiciones pero abarca clases de activo que responden a fuerzas económicas distintas. Las otras dos concentran el riesgo en un solo sector, aunque el número de posiciones parezca mayor."
            }}
          ]
        },
        en: {
          title: "Real diversification: correlation, not count",
          body: [
            { p: "Owning twenty stocks isn't diversification. If all twenty are banks in the same country, you hold one bet split across twenty receipts, and the day defaults rise they all fall together." },
            { h: "What correlation measures" },
            { p: "Correlation is a number between −1 and +1 describing how two assets move relative to each other." },
            { ul: [
              "<strong>+1:</strong> they move identically. No diversification at all.",
              "<strong>0:</strong> they move independently. Full diversification.",
              "<strong>−1:</strong> they move in opposite directions. One perfectly hedges the other."
            ]},
            { p: "A portfolio's risk reduction doesn't come from the number of positions, it comes from those positions having low correlations with each other. Ten assets at 0.3 correlation cut volatility far more than fifty at 0.9." },
            { key: "The right question isn't \"how many positions do I hold?\" but \"what would have to happen in the world for half my portfolio to fall at once?\". If you can find a single event that flattens them all, you aren't diversified." },
            { h: "The dimensions that actually diversify" },
            { ul: [
              "<strong>Asset class.</strong> Equities, fixed income, property, cash. The most effective separation.",
              "<strong>Geography.</strong> Reduces political and currency risk concentrated in one country.",
              "<strong>Sector.</strong> Technology, staples, energy and banking respond to different forces.",
              "<strong>Factor.</strong> Large versus small, value versus growth, quality versus leverage."
            ]},
            { h: "The trap: correlations aren't stable" },
            { p: "This is the part rarely told. The correlations you measure in calm years aren't the ones you'll get in a crisis. When markets stress, many assets that looked independent start falling together, because investors sell what they can sell, not what they want to sell." },
            { note: "Diversification works best precisely when you need it least, and partially fails when you need it most. That isn't an argument for abandoning it — it remains the only free tool for reducing risk — but for not trusting it to protect you completely." },
            { h: "And over-diversification" },
            { p: "At the other extreme, spreading capital across fifty positions you can't follow has its own cost. You cannot know fifty businesses well, and each small position is so diluted that a good call doesn't change the portfolio's outcome." },
            { p: "There is no magic number. There is a practical test: if you can't explain in two sentences why you hold each position, you hold too many." },
            { quiz: {
              q: "Which of these portfolios is better diversified?",
              options: [
                "6 assets: global equities, bonds, property, gold, cash and emerging equities",
                "30 technology stocks from different countries",
                "15 banks across three different countries"
              ],
              answer: 0,
              explain: "The first has fewer positions but spans asset classes responding to different economic forces. The other two concentrate risk in a single sector, however large the position count looks."
            }}
          ]
        }
      }
  , 
    {
        id: "dimensionar-posiciones",
        minutes: 8,
        es: {
          title: "Dimensionar posiciones",
          body: [
            { p: "Puedes acertar en la dirección de ocho de cada diez decisiones y aun así perder dinero, si las dos que fallan pesaban el triple que las demás. El tamaño de cada posición decide el resultado tanto como la selección." },
            { h: "Tres métodos, de menos a más elaborado" },
            { p: "<strong>Peso igual.</strong> Si tienes doce posiciones, un 8,3% cada una. Es simple, transparente y sorprendentemente difícil de batir. Evita el error más caro: concentrar demasiado en la idea que más te entusiasma, que suele ser también la que menos has cuestionado." },
            { p: "<strong>Peso por convicción, con techo.</strong> Tres niveles: posición estándar 5%, alta convicción 8%, exploratoria 2,5%. Y una regla dura: ninguna posición individual supera el 10% de la cartera, sin excepciones y sin importar lo segura que parezca." },
            { p: "<strong>Peso por volatilidad.</strong> Se asigna menos capital a los activos que oscilan más, de forma que cada posición aporte una cantidad parecida de riesgo. Requiere datos y mantenimiento, pero produce carteras más equilibradas de lo que aparenta el reparto por importe." },
            { h: "El criterio de Kelly y por qué no debes aplicarlo entero" },
            { p: "Existe una fórmula, el criterio de Kelly, que calcula el tamaño de apuesta que maximiza el crecimiento del capital a largo plazo, dadas una probabilidad de acierto y una relación entre ganancia y pérdida." },
            { p: "El problema práctico es que Kelly asume que conoces esas probabilidades con precisión. En inversión no las conoces: las estimas, y sueles estimarlas con exceso de optimismo. Aplicar Kelly completo con probabilidades sobreestimadas lleva a posiciones enormes y a ruinas ocasionales." },
            { key: "Quienes usan Kelly en la práctica aplican una fracción: la mitad o un cuarto del tamaño que indica la fórmula. Sacrificas algo de crecimiento teórico a cambio de reducir mucho la probabilidad de un desastre. Es un intercambio que casi siempre vale la pena." },
            { h: "Dos reglas que evitan la mayoría de los desastres" },
            { ul: [
              "<strong>Nunca pongas en una sola posición más de lo que puedes perder entero sin cambiar tus planes de vida.</strong> Da igual lo convincente que sea la tesis: las empresas quiebran, incluidas las que todo el mundo daba por seguras.",
              "<strong>El tamaño debe ser inversamente proporcional a tu incertidumbre.</strong> Si no entiendes del todo el negocio, esa es exactamente la posición que debe ser pequeña, no la que compensas con más capital para que la tesis funcione."
            ]},
            { note: "Un error habitual es aumentar una posición perdedora para «promediar a la baja». A veces es correcto, cuando la tesis sigue intacta y el precio ha caído por razones ajenas. Pero con demasiada frecuencia es una forma de no admitir un error, y convierte una pérdida moderada en una grande." }
          ]
        },
        en: {
          title: "Position sizing",
          body: [
            { p: "You can be right on eight of ten calls and still lose money, if the two that fail were sized three times larger than the rest. Position size decides the outcome as much as selection does." },
            { h: "Three methods, from simplest to most elaborate" },
            { p: "<strong>Equal weight.</strong> Twelve positions, 8.3% each. Simple, transparent and surprisingly hard to beat. It avoids the costliest error: over-concentrating in the idea that excites you most, which is usually also the one you've questioned least." },
            { p: "<strong>Conviction weight, with a cap.</strong> Three tiers: standard 5%, high conviction 8%, exploratory 2.5%. Plus one hard rule: no single position exceeds 10% of the portfolio, no exceptions, however certain it looks." },
            { p: "<strong>Volatility weight.</strong> Allocate less capital to assets that swing more, so each position contributes a similar amount of risk. It needs data and upkeep, but produces portfolios far more balanced than the headline allocation suggests." },
            { h: "The Kelly criterion, and why not to use it in full" },
            { p: "There is a formula, the Kelly criterion, that calculates the bet size maximising long-run capital growth, given a probability of being right and a ratio between gain and loss." },
            { p: "The practical problem is that Kelly assumes you know those probabilities precisely. In investing you don't: you estimate them, and you usually estimate them optimistically. Applying full Kelly to overstated probabilities produces enormous positions and occasional ruin." },
            { key: "Practitioners who use Kelly apply a fraction: half or a quarter of what the formula indicates. You sacrifice some theoretical growth in exchange for a large reduction in the chance of disaster. It is a trade almost always worth making." },
            { h: "Two rules that prevent most disasters" },
            { ul: [
              "<strong>Never put more into one position than you could lose entirely without changing your life plans.</strong> However convincing the thesis: companies fail, including ones everybody considered safe.",
              "<strong>Size should be inversely proportional to your uncertainty.</strong> If you don't fully understand the business, that is precisely the position that should be small — not the one you compensate with more capital to make the thesis work."
            ]},
            { note: "A common error is adding to a losing position to \"average down\". Sometimes that's right, when the thesis is intact and price fell for unrelated reasons. But too often it's a way of not admitting a mistake, and it turns a moderate loss into a large one." }
          ]
        }
      }
  , 
    {
        id: "rebalanceo",
        minutes: 7,
        es: {
          title: "Rebalanceo: comprar barato de forma sistemática",
          body: [
            { p: "Con el tiempo, los activos que suben pasan a pesar más en tu cartera y los que bajan pesan menos. Sin hacer nada, tu cartera se concentra sola en lo que más ha subido, que es justo cuando más caro está." },
            { h: "Cómo se deforma una cartera" },
            { table: {
              head: ["Activo", "Peso inicial", "Rentabilidad del periodo", "Peso final"],
              rows: [
                ["Renta variable", "60%", "+40%", "69%"],
                ["Renta fija", "30%", "+2%", "25%"],
                ["Liquidez", "10%", "0%", "6%"]
              ]
            }},
            { p: "Sin haber comprado ni vendido nada, tu cartera tiene ahora bastante más riesgo del que decidiste tener. Y ese aumento de riesgo llega justo después de una subida fuerte, es decir, en el peor momento posible." },
            { h: "Las dos reglas habituales" },
            { p: "<strong>Por calendario.</strong> Revisas una o dos veces al año en una fecha fija y devuelves los pesos a su objetivo. Es la regla más fácil de cumplir porque elimina el juicio del momento." },
            { p: "<strong>Por bandas.</strong> Rebalanceas solo cuando un activo se desvía más de un umbral, por ejemplo cinco puntos porcentuales de su peso objetivo. Genera menos operaciones y responde mejor a movimientos bruscos." },
            { key: "El rebalanceo te obliga mecánicamente a vender parte de lo que ha subido y comprar lo que ha bajado. Es lo contrario de lo que apetece hacer, y esa es exactamente su virtud: no depende de tu estado de ánimo." },
            { h: "Qué esperar de verdad" },
            { p: "Se suele vender el rebalanceo como una fuente de rentabilidad extra. Es una exageración. En algunos periodos añade rentabilidad y en otros la resta, sobre todo cuando un activo mantiene una tendencia alcista larga y tú vas recortándolo." },
            { p: "Lo que sí hace de forma fiable es <strong>controlar el riesgo</strong>: mantiene tu cartera en el perfil que elegiste en frío, en lugar de dejar que la deriven los mercados. Ese es el argumento sólido, y basta." },
            { note: "Rebalancear tiene costes: comisiones de operación y, en cuentas sujetas a tributación, impuestos sobre las plusvalías que realizas. Por eso rebalancear cada mes suele ser contraproducente. Una o dos veces al año, o por bandas amplias, captura casi todo el beneficio con una fracción del coste." },
            { h: "Un atajo que reduce el coste" },
            { p: "Si haces aportaciones periódicas, dirígelas al activo que se ha quedado por debajo de su peso objetivo. Rebalanceas comprando en lugar de vendiendo, con lo que no realizas plusvalías ni pagas impuestos por el ajuste. Es la forma más eficiente de mantener el rumbo." }
          ]
        },
        en: {
          title: "Rebalancing: buying low systematically",
          body: [
            { p: "Over time, assets that rise take up a larger share of your portfolio and those that fall take up less. Doing nothing, your portfolio concentrates itself into whatever has risen most — which is exactly when it is most expensive." },
            { h: "How a portfolio drifts" },
            { table: {
              head: ["Asset", "Starting weight", "Period return", "Ending weight"],
              rows: [
                ["Equities", "60%", "+40%", "69%"],
                ["Fixed income", "30%", "+2%", "25%"],
                ["Cash", "10%", "0%", "6%"]
              ]
            }},
            { p: "Without buying or selling anything, your portfolio now carries considerably more risk than you decided to take. And that increase arrives right after a strong rise — the worst possible moment." },
            { h: "The two usual rules" },
            { p: "<strong>By calendar.</strong> Review once or twice a year on a fixed date and return weights to target. It is the easiest rule to follow because it removes judgement about timing." },
            { p: "<strong>By bands.</strong> Rebalance only when an asset drifts beyond a threshold, say five percentage points from target. Fewer transactions, and it responds better to sharp moves." },
            { key: "Rebalancing mechanically forces you to sell some of what has risen and buy what has fallen. It is the opposite of what feels right, and that is precisely its virtue: it doesn't depend on your mood." },
            { h: "What to actually expect" },
            { p: "Rebalancing is often sold as a source of extra return. That overstates it. In some periods it adds return and in others it subtracts, particularly when one asset sustains a long uptrend and you keep trimming it." },
            { p: "What it reliably does is <strong>control risk</strong>: it keeps your portfolio in the profile you chose calmly, instead of letting markets drift it somewhere else. That is the solid argument, and it is enough." },
            { note: "Rebalancing has costs: trading commissions and, in taxable accounts, tax on the gains you realise. Which is why rebalancing monthly is usually counterproductive. Once or twice a year, or on wide bands, captures nearly all the benefit at a fraction of the cost." },
            { h: "A shortcut that cuts the cost" },
            { p: "If you contribute regularly, direct new money to whichever asset sits below its target weight. You rebalance by buying rather than selling, so you realise no gains and pay no tax on the adjustment. It is the most efficient way to hold course." }
          ]
        }
      }
  , 
    {
        id: "fugas-de-rentabilidad",
        minutes: 8,
        es: {
          title: "Costes, impuestos y comportamiento",
          body: [
            { p: "Entre la rentabilidad que produce un mercado y la que acaba en tu bolsillo hay tres agujeros. Ninguno es espectacular por separado; juntos explican buena parte de la diferencia entre lo que la gente espera ganar y lo que gana." },
            { h: "Primera fuga: los costes" },
            { p: "Ya vimos en el módulo 1 lo que hace una comisión del 1% compuesta durante treinta años. Añade a eso las comisiones de compraventa, los gastos de custodia y, si operas en divisa extranjera, el diferencial de cambio que casi nadie mira." },
            { p: "Es la única de las tres fugas que puedes cerrar casi por completo, y además sin acertar nada: basta con comparar y elegir lo barato." },
            { h: "Segunda fuga: los impuestos" },
            { p: "Cada vez que vendes con ganancia en una cuenta sujeta a tributación, se realiza una plusvalía y se paga impuesto sobre ella. El dinero que va a Hacienda ya no compone para ti." },
            { p: "De ahí que operar mucho tenga un coste fiscal además del coste de comisiones: no es solo que pagues antes, es que pierdes el crecimiento futuro de lo que has pagado. Dos carteras con la misma rentabilidad bruta pueden acabar bastante separadas solo por el número de operaciones." },
            { note: "La fiscalidad de las inversiones cambia mucho según el país, el tipo de cuenta y tu situación personal. Farlaz no da asesoramiento fiscal: consulta con un profesional autorizado en tu jurisdicción antes de tomar decisiones basadas en consideraciones tributarias." },
            { h: "Tercera fuga: el comportamiento" },
            { p: "Esta es la mayor de las tres y la única que no aparece en ningún extracto. Consiste en comprar después de las subidas, cuando el entusiasmo es máximo, y vender después de las caídas, cuando el miedo lo es. Se hace por razones que en el momento parecen sensatas." },
            { ul: [
              "<strong>Aversión a la pérdida.</strong> Duele más perder cien que la satisfacción de ganar cien, así que vendemos para dejar de sentirlo.",
              "<strong>Sesgo de confirmación.</strong> Buscamos información que respalde lo que ya tenemos en cartera y descartamos la que la contradice.",
              "<strong>Exceso de actividad.</strong> Hacer algo parece más responsable que no hacer nada, aunque la mayoría de las veces no hacer nada sea la decisión correcta."
            ]},
            { key: "La forma más eficaz de cerrar esta fuga no es tener más fuerza de voluntad, es tener reglas escritas antes de necesitarlas. Una política de inversión de una página, redactada en frío, vale más que cualquier análisis hecho en caliente." },
            { h: "Tu política de inversión en una página" },
            { p: "Escribe y guarda: tu objetivo y su plazo, la asignación por clase de activo, el peso máximo por posición, la regla de rebalanceo, qué tiene que ocurrir para que vendas algo, y qué tiene que ocurrir para que no vendas nada aunque el mercado caiga." },
            { p: "El último punto es el importante. Cuando llegue la caída —y llegará— no vas a estar en condiciones de pensar con claridad. Tu yo de hoy, tranquilo y con la cabeza fría, es la única persona capaz de tomar esa decisión bien. Déjala escrita." },
            { h: "Cierre del curso" },
            { p: "Has recorrido qué compras cuando compras un activo, cómo leer lo que la empresa dice de sí misma, cómo estimar lo que vale y cómo montar todo eso en una cartera que puedas sostener. Ninguna de estas herramientas predice el futuro. Lo que hacen es reducir la probabilidad de que te equivoques por razones evitables, que es la única ventaja realista que un inversor particular puede construir." }
          ]
        },
        en: {
          title: "Costs, taxes and behaviour",
          body: [
            { p: "Between the return a market produces and the return that reaches your pocket there are three leaks. None is dramatic alone; together they explain much of the gap between what people expect to earn and what they earn." },
            { h: "First leak: costs" },
            { p: "Module 1 showed what a 1% fee compounded over thirty years does. Add trading commissions, custody charges and, if you deal in foreign currency, the exchange spread almost nobody checks." },
            { p: "It is the only one of the three leaks you can close almost entirely, and without being right about anything: just compare and choose cheap." },
            { h: "Second leak: taxes" },
            { p: "Every time you sell at a gain in a taxable account, you realise a capital gain and pay tax on it. Money that goes to the tax authority no longer compounds for you." },
            { p: "So trading frequently carries a tax cost on top of the commission cost: it isn't just that you pay earlier, it's that you lose the future growth of what you paid. Two portfolios with identical gross returns can end up quite far apart purely on transaction count." },
            { note: "Investment taxation varies enormously by country, account type and personal circumstances. Farlaz does not provide tax advice: consult a licensed professional in your jurisdiction before making decisions on tax grounds." },
            { h: "Third leak: behaviour" },
            { p: "This is the largest of the three and the only one that appears on no statement. It consists of buying after rises, when enthusiasm peaks, and selling after falls, when fear does. It is done for reasons that feel sensible at the time." },
            { ul: [
              "<strong>Loss aversion.</strong> Losing a hundred hurts more than gaining a hundred pleases, so we sell to stop feeling it.",
              "<strong>Confirmation bias.</strong> We seek information supporting what we already hold and discount whatever contradicts it.",
              "<strong>Excess activity.</strong> Doing something feels more responsible than doing nothing, though most of the time doing nothing is the right call."
            ]},
            { key: "The most effective way to close this leak isn't more willpower, it's written rules made before you need them. A one-page investment policy, drafted calmly, is worth more than any analysis produced in the heat of the moment." },
            { h: "Your one-page investment policy" },
            { p: "Write down and keep: your objective and its horizon, your allocation by asset class, the maximum weight per position, your rebalancing rule, what must happen for you to sell something, and what must happen for you to sell nothing even as markets fall." },
            { p: "The last point is the important one. When the fall comes — and it will — you won't be in a state to think clearly. Your present self, calm and clear-headed, is the only person capable of making that decision well. Leave it in writing." },
            { h: "Course close" },
            { p: "You have covered what you buy when you buy an asset, how to read what a company says about itself, how to estimate what it's worth, and how to assemble all that into a portfolio you can hold. None of these tools predicts the future. What they do is lower the odds of being wrong for avoidable reasons, which is the only realistic edge a private investor can build." }
          ]
        }
      }
   ]
});
