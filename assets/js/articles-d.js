/* ==========================================================================
   Farlaz — Cuerpo de los artículos (4)
   ========================================================================== */

window.FARLAZ_ARTICLES = window.FARLAZ_ARTICLES || {};

(function () {
  var A = "Luis Andrés Farrugia V.";
  var DIS_ES = "Contenido educativo. Los números son un ejemplo construido para ilustrar el método y no constituyen recomendación de inversión ni asesoramiento personalizado.";
  var DIS_EN = "Educational content. The figures are a constructed example illustrating the method and do not constitute an investment recommendation or personalised advice.";
  var GEN_ES = "Contenido educativo. No constituye recomendación de inversión ni asesoramiento personalizado.";
  var GEN_EN = "Educational content. Not an investment recommendation or personalised advice.";

/* ------------------------------------------------------------------- 11 */
window.FARLAZ_ARTICLES["per-barato-caro"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "El PER (precio entre beneficio por acción) es el ratio de valoración más citado. Dice cuántos años de beneficios actuales estás pagando por la empresa. Un PER de 8 significa que pagas ocho veces lo que gana hoy. Suena barato, y a veces lo es. Pero el mercado rara vez regala nada sin motivo." },
      { h: "1. Beneficios en el pico del ciclo" },
      { p: "Las empresas cíclicas, como acereras, navieras, mineras o fabricantes de autos, ganan muchísimo en la parte alta del ciclo y poco o nada en la baja. Justo cuando sus beneficios están en máximos, su PER parece bajísimo. El mercado no está pagando por el beneficio de este año, sino por el que espera para los próximos, que será menor." },
      { key: "En las cíclicas, el PER suele verse más bajo justo cuando es peor momento para comprar, y más alto cuando los beneficios están hundidos." },
      { h: "2. Partidas extraordinarias" },
      { p: "Si una empresa vendió un edificio o una filial este año, su beneficio incluye una ganancia que no se repetirá. El PER calculado con ese beneficio está inflado a la baja. Revisa siempre si el beneficio contiene partidas no recurrentes y recalcula sin ellas." },
      { h: "3. La deuda que el PER no ve" },
      { p: "El PER mira solo el precio de las acciones. Dos empresas con el mismo PER pueden ser muy distintas si una no tiene deuda y la otra debe tres veces su valor en bolsa. Para comparar empresas con estructuras de financiación diferentes se usa EV/EBITDA o EV/EBIT, donde EV (valor de empresa) suma la deuda neta al valor de las acciones." },
      { table: {
        head: ["Ejemplo", "Empresa A", "Empresa B"],
        rows: [
          ["Valor en bolsa", "800", "800"],
          ["Beneficio neto", "100", "100"],
          ["PER", "8", "8"],
          ["Deuda neta", "0", "1.200"],
          ["Valor de empresa (EV)", "800", "2.000"]
        ]
      }},
      { p: "Con el mismo PER, comprar B significa asumir una deuda que pertenece, antes que a ti, a los acreedores." },
      { h: "4. Un negocio en declive" },
      { p: "Algunas empresas cotizan barato porque el mercado cree que sus beneficios van a bajar año tras año: un producto que la tecnología está dejando atrás o un sector que pierde clientes. Un PER bajo en un negocio que encoge puede seguir siendo caro." },
      { ul: [
        "Compara el PER con el de la propia empresa en los últimos diez años, no solo con otras empresas.",
        "Usa beneficios normalizados (la media de un ciclo completo) para cíclicas.",
        "Mira siempre la deuda junto al PER.",
        "Pregúntate qué tiene que pasar para que el mercado esté equivocado."
      ]},
      { note: "Un PER bajo no es una conclusión, es una pregunta: ¿por qué el mercado paga tan poco por esto?" }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "The P/E (price divided by earnings per share) is the most quoted valuation ratio. It tells you how many years of current earnings you're paying for the company. A P/E of 8 means paying eight times what it earns today. It sounds cheap, and sometimes it is. But the market rarely gives anything away without a reason." },
      { h: "1. Peak-cycle earnings" },
      { p: "Cyclical companies, such as steelmakers, shipping lines, miners or carmakers, earn a great deal at the top of the cycle and little or nothing at the bottom. Right when their earnings peak, their P/E looks tiny. The market isn't paying for this year's profit but for what it expects in the next few, which will be lower." },
      { key: "With cyclicals, the P/E tends to look lowest exactly when it's the worst time to buy, and highest when earnings have collapsed." },
      { h: "2. One-off items" },
      { p: "If a company sold a building or a subsidiary this year, its earnings include a gain that won't repeat. A P/E calculated on those earnings is artificially low. Always check whether earnings include non-recurring items and recalculate without them." },
      { h: "3. The debt the P/E can't see" },
      { p: "The P/E only looks at the share price. Two companies with the same P/E can be very different if one has no debt and the other owes three times its market value. To compare companies with different financing, use EV/EBITDA or EV/EBIT, where EV (enterprise value) adds net debt to the value of the shares." },
      { table: {
        head: ["Example", "Company A", "Company B"],
        rows: [
          ["Market value", "800", "800"],
          ["Net income", "100", "100"],
          ["P/E", "8", "8"],
          ["Net debt", "0", "1,200"],
          ["Enterprise value (EV)", "800", "2,000"]
        ]
      }},
      { p: "On the same P/E, buying B means taking on debt that belongs first to the creditors, and only then to you." },
      { h: "4. A business in decline" },
      { p: "Some companies trade cheaply because the market thinks their earnings will fall year after year: a product technology is leaving behind, or a sector losing customers. A low P/E on a shrinking business can still be expensive." },
      { ul: [
        "Compare the P/E with the company's own over the last ten years, not just with other companies.",
        "Use normalised earnings (the average over a full cycle) for cyclicals.",
        "Always look at debt alongside the P/E.",
        "Ask yourself what would have to happen for the market to be wrong."
      ]},
      { note: "A low P/E isn't a conclusion, it's a question: why is the market paying so little for this?" }
    ]
  }
};

/* ------------------------------------------------------------------- 12 */
window.FARLAZ_ARTICLES["curva-de-tipos-invertida"] = {
  es: {
    author: A, disclosure: GEN_ES,
    body: [
      { p: "La curva de rendimientos es un gráfico sencillo: en el eje horizontal, el plazo de los bonos del Tesoro de Estados Unidos (tres meses, dos años, diez años, treinta); en el vertical, cuánto rinde cada uno. Lo normal es que suba hacia la derecha: prestar a diez años debería pagar más que prestar a dos, porque inmovilizas el dinero más tiempo y asumes más incertidumbre." },
      { h: "Qué significa que se invierta" },
      { p: "A veces ocurre lo contrario: el bono a dos años rinde más que el de diez. Eso se llama curva invertida. Los plazos cortos reflejan sobre todo la tasa actual del banco central. Los largos reflejan lo que el mercado espera que pase con las tasas, la inflación y el crecimiento durante años." },
      { p: "Si el largo plazo rinde menos que el corto, el mercado está diciendo, en el fondo, que espera que las tasas bajen en el futuro. Y los bancos centrales suelen bajar tasas cuando la economía se debilita." },
      { key: "Una curva invertida no causa una recesión. Refleja que el mercado espera que la política monetaria actual sea demasiado restrictiva para sostenerse." },
      { h: "Por qué tiene fama" },
      { p: "En Estados Unidos, las recesiones de las últimas décadas fueron precedidas por una inversión de la curva. Eso le ha dado una reputación casi mística. Pero el historial también muestra los límites:" },
      { ul: [
        "El retraso entre la inversión y la recesión ha variado mucho, desde algunos meses hasta cerca de dos años.",
        "La curva puede pasar largos periodos invertida sin que llegue la recesión en el plazo que la gente espera.",
        "Hay factores técnicos, como las compras de bonos de los bancos centrales, que distorsionan los plazos largos y pueden cambiar lo que la señal significa."
      ]},
      { h: "Por qué importa aunque no tengas bonos" },
      { p: "Los bancos se financian a corto plazo y prestan a largo. Con la curva invertida, ese negocio se estrecha y tienden a prestar con más cautela. Además, las tasas de las hipotecas y de mucha deuda corporativa se fijan en función de los plazos largos." },
      { note: "Usa la curva como termómetro, no como reloj. Te dice cómo ve el mercado la política monetaria, no la fecha de la próxima recesión." },
      { p: "Si quieres seguirla, la referencia más habitual es el diferencial entre el bono a diez años y el de dos años. En la sección de Mercados tienes el calendario económico para ver cuándo salen los datos que la mueven." }
    ]
  },
  en: {
    author: A, disclosure: GEN_EN,
    body: [
      { p: "The yield curve is a simple chart: on the horizontal axis, the maturity of US Treasury bonds (three months, two years, ten years, thirty); on the vertical, what each one yields. Normally it slopes upward: lending for ten years should pay more than lending for two, because your money is tied up longer and you take on more uncertainty." },
      { h: "What it means when it inverts" },
      { p: "Sometimes the opposite happens: the two-year bond yields more than the ten-year. That's an inverted curve. Short maturities mainly reflect the central bank's current rate. Long ones reflect what the market expects rates, inflation and growth to do over years." },
      { p: "If the long end yields less than the short end, the market is essentially saying it expects rates to fall in future. And central banks usually cut rates when the economy weakens." },
      { key: "An inverted curve doesn't cause a recession. It reflects the market's expectation that current monetary policy is too tight to last." },
      { h: "Why it has a reputation" },
      { p: "In the United States, the recessions of recent decades were preceded by a curve inversion. That has given it an almost mystical standing. But the record also shows its limits:" },
      { ul: [
        "The lag between inversion and recession has varied widely, from a few months to nearly two years.",
        "The curve can stay inverted for long stretches without a recession arriving when people expect.",
        "Technical factors, such as central bank bond buying, distort long maturities and can change what the signal means."
      ]},
      { h: "Why it matters even if you own no bonds" },
      { p: "Banks fund themselves short-term and lend long-term. With an inverted curve, that business gets squeezed and they tend to lend more cautiously. Mortgage rates and much corporate borrowing are also priced off long maturities." },
      { note: "Use the curve as a thermometer, not a clock. It tells you how the market sees monetary policy, not the date of the next recession." },
      { p: "If you want to follow it, the most common reference is the spread between the ten-year and the two-year bond. The Markets section has the economic calendar so you can see when the data that move it are released." }
    ]
  }
};

/* ------------------------------------------------------------------- 13 */
window.FARLAZ_ARTICLES["bonos-precio-y-duracion"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Compras un bono nuevo de 100 dólares que paga un cupón del 5% al año durante diez años. Al día siguiente, las tasas del mercado suben y los bonos nuevos ya pagan un 6%. ¿Quién compraría tu bono al 5% por 100 si puede conseguir uno al 6% por lo mismo? Nadie. Para venderlo tendrás que bajar el precio hasta que su rendimiento iguale al del mercado." },
      { key: "El precio de un bono y su rendimiento se mueven en direcciones opuestas. Cuando suben las tasas, los bonos que ya existen valen menos. Cuando bajan, valen más." },
      { h: "Cuánto: depende del plazo" },
      { p: "El mismo cambio de tasas no afecta igual a todos los bonos. Cuantos más años de cupones quedan por cobrar, más pesa la diferencia entre lo que paga tu bono y lo que paga el mercado." },
      { table: {
        head: ["Bono con cupón del 5%", "Tasa de mercado 4%", "5%", "6%"],
        rows: [
          ["Vence en 2 años", "101,9", "100", "98,2"],
          ["Vence en 10 años", "108,1", "100", "92,6"],
          ["Vence en 30 años", "117,3", "100", "86,2"]
        ]
      }},
      { p: "Un punto de subida de tasas le cuesta casi un 2% al bono a dos años y casi un 14% al bono a treinta. Los bonos largos se mueven casi como acciones." },
      { h: "La duración" },
      { p: "Para no tener que hacer la tabla cada vez existe la duración, un número expresado en años que aparece en la ficha de cualquier fondo de bonos. Su uso práctico es una aproximación: por cada punto que suben las tasas, el precio cae más o menos tantos puntos porcentuales como años de duración." },
      { ul: [
        "Un fondo con duración 2 caerá alrededor de un 2% si las tasas suben un punto.",
        "Uno con duración 15 caerá alrededor de un 15%.",
        "La aproximación funciona bien para cambios pequeños y pierde precisión con movimientos grandes."
      ]},
      { note: "Si guardas el bono hasta el vencimiento y el emisor paga, recuperas los 100 pase lo que pase con las tasas. Las caídas de precio duelen sobre todo si necesitas vender antes o si tienes un fondo, que no vence nunca." },
      { h: "La otra cara" },
      { p: "Cuando las tasas bajan, todo funciona al revés y los bonos largos suben con fuerza. Por eso no hay un plazo correcto en abstracto. La pregunta útil es cuándo vas a necesitar el dinero y cuánta volatilidad puedes aguantar mientras tanto." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "You buy a new 100-dollar bond paying a 5% coupon a year for ten years. The next day, market rates rise and new bonds pay 6%. Who would buy your 5% bond for 100 when they can get a 6% one for the same price? Nobody. To sell it you'll have to lower the price until its yield matches the market's." },
      { key: "A bond's price and its yield move in opposite directions. When rates rise, existing bonds are worth less. When they fall, they're worth more." },
      { h: "By how much: it depends on maturity" },
      { p: "The same change in rates doesn't hit every bond equally. The more years of coupons left to collect, the more the gap between what your bond pays and what the market pays matters." },
      { table: {
        head: ["Bond with a 5% coupon", "Market rate 4%", "5%", "6%"],
        rows: [
          ["Matures in 2 years", "101.9", "100", "98.2"],
          ["Matures in 10 years", "108.1", "100", "92.6"],
          ["Matures in 30 years", "117.3", "100", "86.2"]
        ]
      }},
      { p: "A one-point rise in rates costs the two-year bond almost 2% and the thirty-year bond almost 14%. Long bonds move almost like shares." },
      { h: "Duration" },
      { p: "To avoid building the table every time, there's duration, a number in years that appears on the fact sheet of any bond fund. Its practical use is an approximation: for every point rates rise, the price falls by roughly as many percentage points as the duration in years." },
      { ul: [
        "A fund with a duration of 2 will fall about 2% if rates rise one point.",
        "One with a duration of 15 will fall about 15%.",
        "The approximation works well for small moves and loses accuracy with large ones."
      ]},
      { note: "If you hold the bond to maturity and the issuer pays, you get your 100 back whatever rates do. Price falls hurt mainly if you need to sell early, or if you own a fund, which never matures." },
      { h: "The other side" },
      { p: "When rates fall, everything works in reverse and long bonds rise sharply. That's why there's no right maturity in the abstract. The useful question is when you'll need the money and how much volatility you can stand in the meantime." }
    ]
  }
};

/* ------------------------------------------------------------------- 14 */
window.FARLAZ_ARTICLES["roe-y-apalancamiento-dupont"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "El ROE, rentabilidad sobre el patrimonio, mide cuánto beneficio genera una empresa por cada dólar que han puesto sus accionistas. Es uno de los ratios favoritos de los inversores de calidad, y con razón. El problema es que se puede subir de dos formas muy distintas: haciendo mejor el negocio o pidiendo más prestado." },
      { h: "La descomposición DuPont" },
      { p: "A principios del siglo XX, la empresa química DuPont popularizó una forma de partir el ROE en tres factores que se multiplican:" },
      { ul: [
        "Margen neto: beneficio entre ventas. ¿Cuánto se queda de cada dólar vendido?",
        "Rotación de activos: ventas entre activos. ¿Cuánto vende con lo que tiene?",
        "Apalancamiento: activos entre patrimonio. ¿Qué parte de lo que tiene está financiada con deuda?"
      ]},
      { table: {
        head: ["Ejemplo construido", "Empresa A", "Empresa B"],
        rows: [
          ["Margen neto", "10%", "5%"],
          ["Rotación de activos", "1,0", "1,0"],
          ["Apalancamiento", "1,5", "5,0"],
          ["<strong>ROE</strong>", "<strong>15%</strong>", "<strong>25%</strong>"]
        ]
      }},
      { p: "B presume de un ROE mucho mayor. Pero gana la mitad por cada venta y solo llega al 25% porque cuatro de cada cinco dólares de sus activos están financiados con deuda. Si sus ventas caen un poco, el margen del 5% puede desaparecer y la deuda seguirá ahí." },
      { key: "Un ROE alto construido con margen es una ventaja. Un ROE alto construido con deuda es un riesgo con buena presentación." },
      { h: "Qué mirar" },
      { ul: [
        "La tendencia de cada factor durante cinco años. Si el ROE sube pero el margen baja, la mejora viene de otro lado.",
        "Recompras de acciones con deuda: reducen el patrimonio y suben el ROE sin que el negocio cambie.",
        "Patrimonio muy pequeño o negativo por pérdidas antiguas: el ROE se dispara y deja de significar algo."
      ]},
      { note: "En bancos el apalancamiento alto es parte del modelo, así que el ROE se compara solo con otros bancos, nunca con empresas industriales." },
      { p: "El ROE no está mal. Está incompleto. Tres divisiones en una hoja de cálculo te dicen si lo que ves es calidad o ingeniería financiera." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "ROE, return on equity, measures how much profit a company generates for every dollar its shareholders have put in. It's one of quality investors' favourite ratios, and rightly so. The problem is that it can be raised in two very different ways: by running the business better or by borrowing more." },
      { h: "The DuPont breakdown" },
      { p: "In the early twentieth century the chemical company DuPont popularised a way of splitting ROE into three multiplied factors:" },
      { ul: [
        "Net margin: profit over sales. How much is kept from each dollar sold?",
        "Asset turnover: sales over assets. How much is sold with what it owns?",
        "Leverage: assets over equity. How much of what it owns is financed with debt?"
      ]},
      { table: {
        head: ["Constructed example", "Company A", "Company B"],
        rows: [
          ["Net margin", "10%", "5%"],
          ["Asset turnover", "1.0", "1.0"],
          ["Leverage", "1.5", "5.0"],
          ["<strong>ROE</strong>", "<strong>15%</strong>", "<strong>25%</strong>"]
        ]
      }},
      { p: "B boasts a much higher ROE. But it earns half as much per sale and only reaches 25% because four in every five dollars of its assets are debt-financed. If its sales dip a little, the 5% margin can vanish and the debt will still be there." },
      { key: "A high ROE built on margin is an advantage. A high ROE built on debt is a risk with good presentation." },
      { h: "What to check" },
      { ul: [
        "The trend in each factor over five years. If ROE rises while margin falls, the improvement is coming from somewhere else.",
        "Debt-funded share buybacks: they shrink equity and lift ROE without the business changing.",
        "Very small or negative equity from past losses: ROE shoots up and stops meaning anything."
      ]},
      { note: "For banks, high leverage is part of the model, so their ROE is only compared with other banks, never with industrial companies." },
      { p: "ROE isn't wrong. It's incomplete. Three divisions in a spreadsheet tell you whether what you're looking at is quality or financial engineering." }
    ]
  }
};

/* ------------------------------------------------------------------- 15 */
window.FARLAZ_ARTICLES["comisiones-de-fondos"] = {
  es: {
    author: A, disclosure: DIS_ES,
    body: [
      { p: "Un fondo que cobra un 1,5% anual no parece caro. Si el mercado sube un 6%, tú te quedas un 4,5%. La diferencia parece pequeña porque te la presentan como porcentaje de un solo año. Pero tú no inviertes un año." },
      { h: "El cálculo a treinta años" },
      { p: "Supongamos 10.000 dólares invertidos durante treinta años en una cartera que rinde un 6% anual antes de comisiones. Lo único que cambia es lo que cobra el producto:" },
      { table: {
        head: ["Comisión anual", "Valor a 30 años", "Diferencia frente a 0,2%"],
        rows: [
          ["0,2%", "54.271", "-"],
          ["1,0%", "43.219", "-11.052"],
          ["1,5%", "37.453", "-16.818"],
          ["2,0%", "32.434", "-21.837"]
        ]
      }},
      { p: "Con un 1,5% terminas con un 31% menos que con un 0,2%. Casi un tercio del resultado se queda por el camino, y el gestor lo cobra tanto los años que gana como los que pierde." },
      { key: "La comisión es la única parte de la rentabilidad que conoces con certeza antes de invertir. Por eso es la primera que conviene controlar." },
      { h: "Dónde se esconde lo que pagas" },
      { ul: [
        "TER o gastos corrientes: la comisión anual del fondo, ya descontada del valor liquidativo. No te llega una factura, por eso no se nota.",
        "Comisión de entrada o de salida: un porcentaje al comprar o al vender, habitual en fondos vendidos por bancos y aseguradoras.",
        "Comisión de éxito: un porcentaje de la rentabilidad por encima de una referencia.",
        "Comisiones del intermediario: custodia, compraventa y cambio de divisa, que se suman a las del fondo."
      ]},
      { h: "¿Vale la pena pagar más?" },
      { p: "A veces. Un gestor activo puede justificar su comisión si bate al índice de forma consistente después de costes. Los estudios que comparan fondos activos con sus índices de referencia muestran que, a horizontes largos, la mayoría no lo consigue. No es imposible, pero la carga de la prueba la tiene el fondo caro." },
      { note: "Antes de contratar un fondo, pide el documento de datos fundamentales y busca la cifra de gastos corrientes. Si quien te lo vende no sabe decírtela, ya tienes una respuesta." }
    ]
  },
  en: {
    author: A, disclosure: DIS_EN,
    body: [
      { p: "A fund charging 1.5% a year doesn't look expensive. If the market rises 6%, you keep 4.5%. The gap looks small because it's presented as a percentage of a single year. But you don't invest for one year." },
      { h: "The thirty-year calculation" },
      { p: "Take 10,000 dollars invested for thirty years in a portfolio returning 6% a year before fees. The only thing that changes is what the product charges:" },
      { table: {
        head: ["Annual fee", "Value after 30 years", "Gap versus 0.2%"],
        rows: [
          ["0.2%", "54,271", "-"],
          ["1.0%", "43,219", "-11,052"],
          ["1.5%", "37,453", "-16,818"],
          ["2.0%", "32,434", "-21,837"]
        ]
      }},
      { p: "At 1.5% you finish with 31% less than at 0.2%. Almost a third of the result is lost along the way, and the manager charges it in the years they make money and the years they lose it." },
      { key: "The fee is the only part of your return you know for certain before investing. That's why it's the first thing worth controlling." },
      { h: "Where what you pay is hidden" },
      { ul: [
        "TER or ongoing charges: the fund's annual fee, already deducted from its price. You never get an invoice, so you don't notice it.",
        "Entry or exit fees: a percentage on buying or selling, common in funds sold by banks and insurers.",
        "Performance fees: a share of the return above a benchmark.",
        "Broker charges: custody, dealing and currency conversion, added on top of the fund's own."
      ]},
      { h: "Is it worth paying more?" },
      { p: "Sometimes. An active manager can justify the fee by beating the index consistently after costs. Studies comparing active funds with their benchmarks show that, over long horizons, most don't manage it. It isn't impossible, but the burden of proof sits with the expensive fund." },
      { note: "Before signing up for a fund, ask for the key information document and find the ongoing charges figure. If the person selling it can't tell you, you already have an answer." }
    ]
  }
};

})();
