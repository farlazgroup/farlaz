# Farlaz — sitio web

Sitio estático bilingüe (ES/EN) listo para publicar, con panel de edición.
Sin dependencias de build: son archivos HTML, CSS y JS que funcionan tal cual.

**Para publicarlo en farlaz.com, sigue `PUBLICAR.md`.**

---

## 1. Verlo ahora mismo

Haz doble clic en `index.html`. Se abre en el navegador y funciona todo:
navegación, selector de idioma, filtros, acordeón y los widgets de mercado.

> Al abrirlo así (protocolo `file://`) los artículos se cargan desde
> `assets/js/posts.js`. Una vez publicado en un servidor, se cargan desde
> `content/posts.json`, que es el archivo que edita el panel.

---

## 2. Qué contiene

```
farlaz/
├── index.html            Portada
├── learn.html            Índice del curso (16 módulos en 4 niveles)
├── module.html           Lector de lecciones  → module.html?m=dinero
├── news.html             Noticias financieras globales
├── market.html           Mercados en vivo (widgets de TradingView)
├── insights.html         Análisis, con filtros por categoría
├── article.html          Lector de artículos  → article.html?a=slug
├── about.html            Nosotros, valores, fundador y FAQ
├── contact.html          Formulario y contacto directo
├── privacy.html          Política de Privacidad
├── terms.html            Términos de Uso
├── disclaimer.html       Aviso Legal
│
├── content/posts.json    Fichas de los artículos (lo escribe el panel)
├── admin/                Panel de edición (Sveltia CMS)
│
├── assets/css/style.css  Todo el diseño
├── assets/js/i18n.js     Textos de la interfaz, en español e inglés
├── assets/js/curriculum-1..5.js  Los 16 módulos y sus lecciones
├── assets/js/articles-a/b.js Cuerpo completo de los cinco artículos
├── assets/js/posts.js    Fichas de artículos (respaldo sin servidor)
├── assets/js/reader.js   Lector de curso y artículos
├── assets/js/main.js     Lógica general del sitio
├── assets/img/           Logotipo, favicon, skyline e imagen social
│
├── netlify.toml          Cabeceras, caché y redirecciones
├── robots.txt
└── sitemap.xml
```

### El curso: 16 módulos en 4 niveles

| Nivel | Módulos | Estado |
|---|---|---|
| **1 · Fundamentos** | 01 Dinero y finanzas · 02 Finanzas personales · 03 Economía · 04 Mercados | **Completo** — 16 lecciones |
| **2 · Inversiones** | 05 Acciones · 06 ETFs · 07 Bonos · 08 Fondos | 2 lecciones; 06 y 08 en preparación |
| **3 · Análisis** | 09 Estados financieros · 10 Análisis fundamental · 11 Análisis técnico · 12 Portafolios | 9 lecciones; 11 en preparación |
| **4 · Profesional** | 13 Derivados · 14 Gestión del riesgo · 15 Finanzas corporativas · 16 Estrategias | 4 lecciones; 13 y 16 en preparación |

**31 lecciones escritas** de las ~100 que contempla el temario completo, todas
en español e inglés por separado. Los cinco módulos sin lecciones muestran su
temario completo con la etiqueta «en preparación», de forma que la web se
puede publicar hoy sin que parezca incompleta.

Cada lección admite párrafos, subtítulos, listas, tablas de datos, avisos,
«ideas clave» y preguntas de autocomprobación con respuesta razonada. El
progreso del lector se guarda en su propio navegador: no hace falta cuenta y
nadie más lo ve.

**Dónde está cada cosa:**

| Archivo | Contiene |
|---|---|
| `curriculum-1.js` | Módulos 01-02 con sus lecciones |
| `curriculum-2.js` | Módulos 03-04 con sus lecciones |
| `curriculum-3.js` | Módulos 05-08 (Nivel 2) |
| `curriculum-4.js` | Módulos 09-12 (Nivel 3) |
| `curriculum-5.js` | Módulos 13-16, Academia Premium y nombres de los niveles |

**Para editar una lección**, busca su `id` en el archivo correspondiente y
edita los bloques de `body`. Los bloques disponibles están documentados en la
cabecera de `curriculum-1.js`.

**Para añadir una lección**, copia un bloque `{ id, minutes, es, en }` completo
dentro del array `lessons` del módulo. Aparece sola en el índice lateral, en la
navegación anterior/siguiente y en el contador de progreso. En cuanto un módulo
tiene su primera lección, deja de mostrarse como «en preparación».

### Móvil

No hay una versión aparte: es el mismo sitio adaptándose. Cuatro puntos de
ruptura, del móvil pequeño al escritorio.

| Ancho | Qué cambia |
|---|---|
| **1024 px** | El menú pasa a hamburguesa. Con siete enlaces más el selector de idioma no cabía en tablet. |
| **980 px** | El índice lateral del curso baja debajo de la lección. Rejillas de cuatro columnas a dos. |
| **720 px** | La columna lateral de Noticias pasa debajo. Los widgets se limitan al 62% de la altura de pantalla. |
| **560 px** | Todo a una columna. Las cifras del hero pasan a rejilla de dos. Botones a ancho completo. Tablas con tipografía menor. |

Las tablas de datos de las lecciones no se comprimen: se desplazan en
horizontal dentro de su marco, que es más legible que apretar las columnas.

### Noticias globales

`news.html` reúne el flujo de titulares en tiempo real, el calendario
macroeconómico y cotizaciones de índices, cripto y divisas. Todo procede de
widgets de TradingView, así que se actualiza solo y no necesita servidor,
API ni mantenimiento. La portada incluye una versión reducida del mismo flujo.

---

## 3. Errores de la web actual que quedan corregidos

| Problema en farlaz.com | Estado aquí |
|---|---|
| Email `conact@farlaz.com` (falta la «t») en todas las páginas | Corregido a `contact@farlaz.com` |
| Privacidad, Términos y Aviso Legal apuntan a `/new-page`, `/new-page-1`, `/new-page-1-1` | Tres páginas reales, con redirección 301 desde las URLs viejas |
| El botón «Markets →» de la portada lleva a `/new-page` | Lleva a la página de mercados |
| «accesible» y «finacial» mal escritas en About | Corregidas |
| Frase cortada: «take control of their…» | Completada |
| El pie solo enlazaba Home y Market | Enlaza las ocho páginas |
| Logo con nombre de archivo `ChatGPT Image Jul 24…png` | Logotipo vectorial propio (SVG), nítido a cualquier tamaño |
| `og:image` servida por `http://` y `twitter:card` en `summary` | `https://` y `summary_large_image` |
| «Login Account» y carrito sin función | Eliminados |
| Newsletter prometía análisis semanales inexistentes | Sección de Análisis con estructura real |
| Solo inglés, con público objetivo latinoamericano | Bilingüe, con selector que recuerda la elección |

---

## 4. Lo que tienes que rellenar tú

Cinco cosas. Ninguna lleva más de diez minutos.

**1. Logotipo y foto: ya están puestos.** Se procesaron desde tus originales.

| Archivo | Qué es | Peso |
|---|---|---|
| `logo-farlaz.svg` | Lockup completo, vectorial. En el encabezado y el pie | 1,8 KB |
| `logo-mark.svg` | Solo el monograma, por si lo necesitas suelto | 0,4 KB |
| `favicon.svg` | Icono de la pestaña del navegador | 0,4 KB |
| `favicon-512.png` | Icono de respaldo para navegadores antiguos | 13 KB |
| `apple-touch-icon.png` | Icono al guardar la web en un iPhone | 4 KB |
| `founder-dark.jpg` / `@2x` | Tu foto, recortada a 4:5, con el fondo atenuado | 94 / 409 KB |
| `founder.jpg` / `@2x` | La misma foto con el fondo blanco original | 94 / 424 KB |

**El logo es vectorial.** Tu archivo original era un render de neón, así que sus
bordes nacían suaves y al ampliarlos se veían borrosos. Lo que hice fue separar
el rótulo del fondo gris midiendo el histograma —el cuerpo de la F tiene el canal
rojo por debajo de 9, las letras están en 244-255— y después trazar el contorno
resultante como polígonos. El monograma quedó en 20 vértices y las letras en
siete contornos.

El resultado se ve igual de nítido en la barra de navegación que en una valla
publicitaria, y pesa 1,8 KB. El resplandor no está quemado en el archivo: lo
aplica el CSS con `drop-shadow`, así que escala bien y reacciona al ratón.

Si algún día quieres cambiar el color de la marca, está en dos atributos `fill`
dentro de `logo-farlaz.svg`. El original sin tocar está en `originales/` —
puedes borrar esa carpeta antes de publicar, no la usa nadie.

Si prefieres la foto con el fondo blanco, en `about.html` cambia las dos
apariciones de `founder-dark` por `founder`.

**2. Destino del formulario de contacto.** Ahora mismo los formularios no envían
nada a ninguna parte. Si publicas en Netlify, basta con añadir `netlify` a la
etiqueta `<form>` en `contact.html` y quitar el atributo `data-demo`:

```html
<form name="contacto" method="POST" data-netlify="true">
```

Los mensajes te llegan al panel de Netlify. Para el boletín necesitarás un
servicio de correo aparte (Mailchimp, Buttondown, Beehiiv o similar): pega la
URL que te den en el atributo `action` del formulario y quita `data-demo`.

**3. Enlace de reservas.** En `contact.html`, el botón «Ver disponibilidad»
tiene `href="#"`. Pon ahí tu enlace de Calendly, Cal.com o el de Squarespace
Appointments que ya usas.

**4. Revisión legal.** Privacidad, Términos y Aviso Legal son borradores
sólidos, no documentos definitivos. En Términos falta indicar la jurisdicción.
Enséñaselos a un abogado que conozca la normativa de difusión de contenido
financiero en tu país antes de publicarlos.

**5. Revisa los contenidos y ponles tu firma.** Los cuatro módulos y los cinco
artículos están escritos completos, en los dos idiomas, y tratan materia
evergreen: no contienen datos de mercado que caduquen ni recomendaciones sobre
empresas concretas. Todos los ejemplos numéricos están construidos para
ilustrar el método y así se indica en el propio texto.

Aun así, salen publicados bajo tu nombre. Léelos antes de lanzar, ajusta lo que
no suene a ti y comprueba que estás de acuerdo con cada afirmación. Las fechas
de los artículos son de ejemplo: cámbialas por las reales cuando los publiques.

---

## 5. Publicarlo

### Opción rápida (arrastrar y soltar)

1. Entra en [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra la carpeta `farlaz` completa.
3. Ya tienes una URL pública. Sin cuenta, sin configuración.

Sirve para enseñárselo a alguien, pero sin repositorio no hay panel de edición.

### Opción completa (repositorio + panel)

1. Crea un repositorio en GitHub y sube el contenido de esta carpeta.
2. En Netlify: **Add new site → Import an existing project** y elígelo.
   No hay comando de build; el directorio a publicar es la raíz (`.`).
3. **Domain settings → Add custom domain → `farlaz.com`.** Netlify te dirá qué
   registros DNS crear. Ahí tendrás que apuntar el dominio desde donde lo
   tengas ahora (Squarespace) hacia Netlify.

> Cuando cambies el DNS, la web de Squarespace deja de verse en farlaz.com.
> Haz la migración cuando esta versión ya esté con tus contenidos reales.

---

## 6. Publicar y activar el panel

Todo el proceso está en **`PUBLICAR.md`**, paso a paso: repositorio, Netlify,
panel de administrador y dominio.

**Cambio importante respecto a la primera versión:** el panel ya no usa Netlify
Identity ni Git Gateway. Netlify los ha descontinuado y no los recomienda para
sitios nuevos. Ahora usa **Sveltia CMS**, que se autentica directamente contra
GitHub, es software libre y no cuesta nada. La configuración está en
`admin/config.yml` y solo hay que cambiar una línea: el nombre de tu
repositorio.

## 7. Cómo añadir un artículo a mano

Sin panel, edita `content/posts.json` y añade un bloque al principio de la lista:

```json
{
  "slug": "titulo-en-minusculas-con-guiones",
  "cat": "edu",
  "date": "2026-08-04",
  "minutes": 8,
  "es": { "title": "Título en español", "excerpt": "Resumen de dos líneas." },
  "en": { "title": "Title in English",  "excerpt": "Two-line summary." }
}
```

`cat` acepta `edu` (Educación), `res` (Investigación) o `mac` (Macro).

Las tarjetas enlazan a `insights.html#slug`. Cuando escribas los artículos
completos, crea una página por artículo y actualiza el enlace en `main.js`
(función `postCard`).

---

## 8. Notas técnicas

- **Sin build ni dependencias.** No hay npm, ni compilación, ni framework.
  Dentro de cinco años seguirá abriendo igual.
- **Idioma.** Se detecta del navegador, se puede forzar con `?lang=en` y la
  elección se guarda en el navegador del visitante.
- **Datos de mercado.** Widgets gratuitos de TradingView. Son la parte más
  pesada de la página; si alguna vez quieres acelerar `market.html`, cárgalos
  solo cuando el usuario haga scroll hasta ellos.
- **Accesibilidad.** Navegación por teclado, foco visible, textos alternativos
  y respeto por `prefers-reduced-motion`.
- **Rendimiento.** El único recurso externo en la portada, aparte del ticker,
  son las tipografías de Google. Si quieres cero dependencias externas,
  descárgalas y sírvelas desde `assets/`.
