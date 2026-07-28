# Farlaz — Documento de contexto del proyecto

Este documento existe para que cualquier conversación nueva de Claude pueda
continuar el trabajo sin empezar de cero. Contiene el estado del proyecto, las
decisiones tomadas y por qué, y lo que queda pendiente.

Última actualización: 27 de julio de 2026.

---

## 1. Qué es Farlaz

Plataforma de educación financiera e inteligencia de mercados dirigida a
Latinoamérica. Fundada y dirigida por **Luis Andrés Farrugia Villalaz**, con
sede en Panamá.

**Posicionamiento:** lo contrario de las cuentas de finanzas de redes sociales.
Nada de señales, promesas de rentabilidad ni recomendaciones personalizadas. Se
enseña el método, se publican los supuestos y se admite la incertidumbre.

**Público:** personas de habla hispana que empiezan a invertir, más una versión
en inglés para alcance internacional.

**Modelo:** el curso, los datos de mercado y el boletín son de acceso libre. Los
programas de formación en profundidad (Academia Farlaz) son de pago.

---

## 2. Estado actual

| Elemento | Estado |
|---|---|
| Sitio web | Construido y publicado en `farlaz.netlify.app` |
| Dominio farlaz.com | DNS ya apunta a Netlify; en propagación |
| Repositorio | GitHub, subido a mano desde el navegador |
| Panel de edición | Sveltia CMS en `/admin/`, pendiente de poner el usuario en `admin/config.yml` |
| Correo | Google Workspace en farlaz.com, registros MX/SPF/DKIM intactos |
| Sitio antiguo | Squarespace, a dar de baja cuando el nuevo lleve unos días estable |

---

## 3. Arquitectura técnica

Sitio **estático puro**: HTML, CSS y JavaScript sin framework, sin proceso de
build y sin dependencias que instalar. Decisión deliberada — dentro de cinco
años seguirá abriendo igual.

```
farlaz/
├── index.html            Portada
├── learn.html            Índice del curso (16 módulos en 4 niveles)
├── module.html           Lector de lecciones  → module.html?m=dinero
├── market.html           Mercados en vivo (TradingView)
├── news.html             Noticias financieras globales
├── insights.html         Índice de artículos, con filtros
├── article.html          Lector de artículos  → article.html?a=slug
├── about.html            Nosotros, valores, fundador y FAQ
├── contact.html          Formulario y contacto directo
├── privacy.html · terms.html · disclaimer.html
│
├── admin/                Panel Sveltia CMS
├── content/posts.json    Fichas de artículos (lo escribe el panel)
│
└── assets/
    ├── css/style.css          Todo el diseño
    └── js/
        ├── i18n.js            241 claves de interfaz, ES y EN
        ├── curriculum-1..5.js Los 16 módulos y sus 31 lecciones
        ├── articles-a/b.js    Cuerpo completo de los 5 artículos
        ├── posts.js           Fichas de artículos (respaldo sin servidor)
        ├── main.js            Idioma, navegación, filtros, formularios
        └── reader.js          Lector de curso y artículos
```

### Cómo funciona el bilingüe

No hay páginas duplicadas. Cada texto de interfaz lleva `data-i18n="clave"` en
el HTML y `main.js` lo sustituye desde `i18n.js`. El contenido largo (lecciones,
artículos) tiene objetos `es` y `en` paralelos dentro de su archivo de datos.

El idioma se detecta del navegador, se puede forzar con `?lang=en` y la elección
se guarda en el navegador del visitante.

**Regla:** cada vez que se añade una clave a `es` hay que añadirla también a
`en`. El sitio se verifica comprobando que ambos diccionarios tienen exactamente
las mismas claves.

### Cómo funciona el curso

`window.FARLAZ_COURSE` es un array de módulos. Cada módulo:

```js
{
  id: "dinero", num: "01", level: 1,
  es: { title, tagline, summary, topics: [...], outcomes: [...] },
  en: { ... },
  lessons: [ { id, minutes, es: {title, body}, en: {title, body} } ]
}
```

Si `lessons` está vacío, la web muestra el temario con la etiqueta «en
preparación» automáticamente. En cuanto se añade la primera lección, el módulo
pasa a estar activo sin tocar nada más.

**Bloques disponibles en `body`:**
`{h}` subtítulo · `{p}` párrafo · `{ul:[]}` lista · `{note}` aviso ·
`{key}` idea clave destacada · `{table:{head,rows}}` · `{quiz:{q,options,answer,explain}}`

El progreso del lector se guarda en `localStorage` del navegador. No hay cuentas
de usuario ni base de datos.

### Datos de mercado y noticias

Widgets incrustados de **TradingView**: cinta de cotizaciones, mapa de calor,
calendario económico, titulares en tiempo real y cotizaciones por grupos. Son
gratuitos, se actualizan solos y no requieren servidor, API ni mantenimiento.

---

## 4. Identidad visual

| Elemento | Valor |
|---|---|
| Fondo | `#04070B` casi negro, con superficies en `#0D141C` |
| Acento | Cian `#00C2FF` |
| Positivo / negativo | `#3DDC97` / `#FF5F6D` |
| Tipografía | Inter para texto, IBM Plex Mono para cifras y etiquetas |
| Logotipo | `assets/img/logo-farlaz.svg`, vectorial, 1,8 KB |

El logo se obtuvo trazando el original de neón: se separó el rótulo del fondo
gris midiendo el histograma (el cuerpo de la F tiene el canal rojo por debajo de
9; las letras están en 244-255), se detectaron las **dos piezas independientes**
del monograma por componentes conectados, y se trazaron como polígonos. El
resplandor no está quemado en el archivo: lo aplica el CSS con `drop-shadow`.

El hero lleva un skyline vectorial generado (`assets/img/skyline.svg`) con tres
capas de profundidad.

**Responsive:** cuatro puntos de ruptura — 1024 (menú a hamburguesa), 980
(índice del curso baja), 720 (columna de noticias baja), 560 (todo a una
columna). No hay versión móvil separada.

---

## 5. Voz y criterios editoriales

Esto es lo que distingue a Farlaz y conviene mantenerlo:

- **Nunca prometer rentabilidades.** Ni implícitamente.
- **Nunca dar recomendaciones personalizadas.** Farlaz no es asesor registrado.
- **Publicar los supuestos.** Cada cifra de ejemplo se identifica como ejemplo.
- **Admitir la incertidumbre.** Cuando un método falla, se dice cuándo falla.
- **Declarar conflictos de interés** en el propio artículo.
- **Nada de traducción automática.** Español e inglés se escriben por separado.
- **Tono:** directo, sin jerga innecesaria, sin motivación vacía. Se explica el
  mecanismo, no se vende el resultado.

Los ejemplos numéricos de las lecciones son **construidos**, no datos reales de
mercado, y el texto lo indica. Esto es deliberado: evita que el contenido caduque
y evita insinuar recomendaciones sobre empresas concretas.

---

## 6. Decisiones tomadas y por qué

**Estático en vez de WordPress o Squarespace.** El sitio anterior estaba en
Squarespace con varios errores (email mal escrito, enlaces a páginas plantilla,
erratas). Se rehízo desde cero en código propio: más rápido, sin cuota mensual y
sin depender de una plataforma.

**Sveltia CMS en vez de Decap + Netlify Identity.** Netlify descontinuó Identity
y Git Gateway y no los recomienda para sitios nuevos. Sveltia se autentica
directamente contra GitHub, es software libre y reutiliza la misma configuración.

**DNS en Squarespace, no en Netlify.** El dominio tiene Google Workspace. Mover
los nameservers a Netlify habría roto el correo. Se dejó el DNS donde estaba y
solo se cambiaron los registros A y CNAME de la web.

**Nivel 1 reescrito.** La primera versión del curso empezaba demasiado arriba.
Se rehízo con lenguaje verdaderamente inicial: qué es el dinero, presupuesto,
fondo de emergencia. Nada se da por sabido.

---

## 7. Lo que queda pendiente

**Contenido del curso.** 65 lecciones escritas. Los dieciséis módulos tienen ya
al menos una lección, así que ningún módulo muestra la etiqueta «en preparación».
Los cinco que faltaban —06 ETFs, 08 Fondos, 11 Análisis técnico, 13 Derivados y
16 Estrategias— se completaron con una lección por tema del temario.

Queda margen para densificar los módulos que solo tienen una o tres lecciones
frente a los seis o siete temas de su temario: **05 Acciones, 07 Bonos,
10 Análisis fundamental, 14 Gestión del riesgo y 15 Finanzas corporativas**.

**Configuración del panel.** En `admin/config.yml`, la línea `repo:` sigue
diciendo `TU-USUARIO/farlaz`. Hay que poner el usuario real de GitHub.

**Formulario de contacto.** No envía a ninguna parte. Para activarlo con
Netlify: en `contact.html`, cambiar `<form class="reveal" data-demo>` por
`<form class="reveal" name="contacto" method="POST" data-netlify="true">`.

**Enlace de reservas.** El botón «Ver disponibilidad» en Contacto tiene
`href="#"`. Falta el enlace de Calendly o equivalente.

**Revisión legal.** Privacidad, Términos y Aviso Legal son borradores sólidos
pero no definitivos. En Términos falta indicar la jurisdicción. Deben pasar por
un abogado que conozca la normativa de difusión de contenido financiero.

**Artículos.** Los cinco tienen texto completo, pero las fechas son de ejemplo.
Ajustarlas al publicar.

**Panel limitado.** Solo edita artículos. Las lecciones y los textos de interfaz
viven en archivos JavaScript que el CMS no lee. Se pueden migrar a JSON para
hacerlos editables desde el panel; es un trabajo acotado y aún no hecho.

---

## 8. Cómo trabajar en este proyecto

**Para añadir una lección:** abrir el `curriculum-N.js` correspondiente, copiar
un bloque `{ id, minutes, es, en }` completo dentro del array `lessons` del
módulo, y escribir el contenido en los dos idiomas. Aparece sola en el índice
lateral, en la navegación anterior/siguiente y en el contador de progreso.

**Para cambiar un texto de interfaz:** buscar la clave en `assets/js/i18n.js` y
editarla en `es` y en `en`.

**Para publicar cambios:** subir los archivos modificados al repositorio de
GitHub. Netlify republica solo en un par de minutos.

**Antes de dar algo por terminado**, conviene comprobar:
- que las claves de `i18n.js` cuadran en ambos idiomas
- que no hay enlaces internos rotos ni recursos ausentes
- que los `module.html?m=` apuntan a ids de módulo que existen
- que el sitio se ve bien a 390 px de ancho

---

## 9. Datos de referencia

- **Dominio:** farlaz.com, registrado en Squarespace, renovación vía Google
  Workspace, vence el 24 de julio de 2027
- **Correo:** contact@farlaz.com (Google Workspace)
- **LinkedIn:** linkedin.com/company/farlaz
- **Instagram:** @farlazgroup
- **IP de Netlify para el registro A:** 75.2.60.5
- **Subdominio de Netlify:** farlaz.netlify.app

Ojo con un detalle histórico: el sitio antiguo tenía el correo escrito como
`conact@farlaz.com`, sin la «t». Está corregido en el sitio nuevo, pero puede
seguir circulando en materiales antiguos.
