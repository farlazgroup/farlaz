# Publicar Farlaz en farlaz.com y activar el panel

Guía para seguir de principio a fin. Unos 40 minutos la primera vez, más el
tiempo de propagación del dominio.

**Orden importante:** publicas primero en una dirección provisional, lo revisas
todo, y solo al final tocas el dominio. Así farlaz.com no está caído ni un
minuto.

---

## Antes de empezar

Tres cosas que conviene resolver ahora:

**1. Cambia el email del formulario y el enlace de reservas.** En
`contact.html`, el botón «Ver disponibilidad» tiene `href="#"`. Pon tu enlace
de Calendly o del sistema de citas que uses.

**2. Revisa los tres documentos legales.** Privacidad, Términos y Aviso Legal
son borradores sólidos, no definitivos. En Términos falta indicar la
jurisdicción. Enséñaselos a un abogado antes de publicar.

**3. Decide si borras `originales/`.** Contiene tu logo sin procesar. No lo usa
ninguna página; puedes borrar la carpeta entera.

---

## Paso 1 · Crear el repositorio en GitHub

1. Entra en [github.com](https://github.com) y crea una cuenta si no la tienes.
2. Pulsa **New repository** (botón verde arriba a la derecha).
3. Nombre: `farlaz`. Déjalo **público** o privado, ambos funcionan.
4. **No marques** ninguna casilla de inicialización (ni README, ni .gitignore).
5. Pulsa **Create repository**.

Ahora sube los archivos. Sin usar la terminal:

6. En la página del repositorio recién creado, pulsa **uploading an existing file**.
7. Arrastra **el contenido** de la carpeta `farlaz` — no la carpeta en sí, sino
   todo lo que hay dentro: `index.html`, `assets`, `admin`, `content`, etc.
8. Espera a que suban y pulsa **Commit changes**.

> GitHub tiene un límite de 100 archivos por subida desde el navegador. Este
> sitio tiene unos 45, así que entra de una vez.

---

## Paso 2 · Conectar Netlify

1. Entra en [app.netlify.com](https://app.netlify.com) y regístrate **con tu
   cuenta de GitHub**. Esto importa: la autenticación del panel dependerá de
   esa conexión.
2. Pulsa **Add new site → Import an existing project**.
3. Elige **GitHub** y autoriza el acceso.
4. Selecciona el repositorio `farlaz`.
5. En la configuración de build, déjalo vacío:
   - Build command: *(en blanco)*
   - Publish directory: `.` *(un punto)*
6. Pulsa **Deploy**.

En un minuto tendrás una dirección tipo `random-name-123.netlify.app`.
**Ábrela y revisa el sitio entero**: las 12 páginas, el curso, las noticias,
el cambio de idioma y cómo se ve en tu móvil.

Si quieres una dirección provisional más presentable: **Site configuration →
Change site name**.

---

## Paso 3 · Activar el panel de administrador

El panel usa **Sveltia CMS**, que se autentica directamente contra GitHub.

> **Por qué no usamos Netlify Identity:** Netlify ha descontinuado Identity y
> Git Gateway, y ya no recomienda configurarlos en sitios nuevos. Sveltia CMS
> es el sustituto que funciona hoy. Es software libre y no cuesta nada.

1. Abre `admin/config.yml` **en GitHub** (navega hasta el archivo y pulsa el
   lápiz para editarlo).
2. Cambia esta línea:

   ```yaml
   repo: TU-USUARIO/farlaz        # <-- CAMBIAR ESTO
   ```

   Por tu usuario real, por ejemplo:

   ```yaml
   repo: luisfarrugia/farlaz
   ```

3. Comprueba que la rama coincide. GitHub suele usar `main`; si tu repositorio
   dice `master`, cámbialo también.
4. Pulsa **Commit changes**.
5. Espera un minuto a que Netlify vuelva a publicar y entra en
   **`tu-sitio.netlify.app/admin/`**.
6. Pulsa iniciar sesión y autoriza con GitHub.

Ya estás dentro. Puedes crear, editar y borrar artículos, y cada cambio se
guarda como un commit en tu repositorio y republica el sitio solo.

### Qué puedes editar desde el panel

**Ahora mismo:** los artículos de la sección Análisis — título, resumen,
fecha, categoría y minutos de lectura, en los dos idiomas.

**Todavía no:** las lecciones del curso y los textos fijos del sitio. Viven en
archivos JavaScript, que el panel no sabe editar. Se pueden migrar a un formato
que sí entienda; es un trabajo acotado y se puede hacer cuando quieras.

### Dar acceso a otra persona

Invítala a tu repositorio de GitHub con permiso de escritura:
**Settings → Collaborators → Add people**. Con eso ya puede entrar al panel.

---

## Paso 4 · Apuntar farlaz.com

**Hazlo solo cuando el sitio ya esté revisado y con tus contenidos reales.**

### 4.1 · Comprueba primero cómo tienes el dominio

Entra en tu panel de Squarespace, en la sección de dominios, y averigua una cosa:

- ¿El dominio está **registrado a tu nombre** de forma independiente?
- ¿O vino **incluido gratis** con el plan anual?

Esto importa porque **los dominios incluidos gratis con un plan suelen dejar de
ser gratuitos al cancelar la suscripción**. Si es tu caso, transfiere el dominio
a otro registrador antes de dar de baja el plan, o mantén el plan hasta
resolverlo. No canceles nada hasta tenerlo claro.

### 4.2 · Añadir el dominio en Netlify

1. En Netlify: **Domain management → Add a domain**.
2. Escribe `farlaz.com` y confirma que es tuyo.
3. Netlify te mostrará los registros DNS que necesitas.

### 4.3 · Cambiar el DNS en Squarespace

En Squarespace, en la configuración DNS de tu dominio, añade dos registros
personalizados:

| Tipo | Host | Valor |
|---|---|---|
| **A** | `@` | `75.2.60.5` |
| **CNAME** | `www` | `tu-sitio.netlify.app` |

Guarda y espera. La propagación tarda entre unos minutos y 24 horas.

### 4.4 · Certificado HTTPS

Netlify emite el certificado automáticamente en cuanto detecta que el DNS
apunta bien. Si en unas horas no aparece, entra en **Domain management → HTTPS**
y pulsa **Verify DNS configuration**.

> El certificado es obligatorio para el panel: Sveltia CMS solo funciona sobre
> HTTPS.

### 4.5 · Actualizar la dirección del panel

Cuando el dominio funcione, el panel pasa a estar en **`farlaz.com/admin/`**.

---

## Paso 5 · Cerrar Squarespace

Una vez que farlaz.com muestre el sitio nuevo y lleve unos días estable:

1. Comprueba que el dominio sigue siendo tuyo tras cancelar (paso 4.1).
2. Descarga cualquier contenido que quieras conservar del sitio antiguo.
3. Da de baja la suscripción.

---

## Resumen de costes

| Concepto | Coste |
|---|---|
| Alojamiento en Netlify | El plan gratuito cubre de sobra un sitio como este |
| GitHub | Gratis |
| Panel de edición (Sveltia CMS) | Gratis, software libre |
| Datos de mercado y noticias (TradingView) | Gratis con los widgets incrustados |
| Dominio farlaz.com | El único gasto fijo, anual |
| Formularios de contacto | Incluidos en el plan gratuito de Netlify, con límite mensual |

Los planes cambian con el tiempo: comprueba los límites vigentes antes de
comprometerte con algo.

---

## Si algo falla

**El sitio se ve sin estilos.** Falta la carpeta `assets` o se subió mal.
Comprueba en GitHub que existe `assets/css/style.css`.

**El panel dice que no encuentra el repositorio.** El campo `repo` en
`admin/config.yml` está mal escrito. Tiene que ser exactamente
`usuario/repositorio`, sin la URL completa.

**El panel carga en blanco.** Casi siempre es que estás entrando por HTTP en
lugar de HTTPS, o que la rama configurada no coincide con la real.

**Los cambios del panel no aparecen en la web.** Netlify tarda uno o dos
minutos en republicar. Mira el registro de despliegues en **Deploys**.

**El dominio no resuelve.** Puede tardar hasta 24 horas. Para comprobar el
estado, busca «DNS checker» y consulta tu dominio desde varias regiones.
