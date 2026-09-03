(function () {
  "use strict";

  var STORAGE_KEY = "funes_lang";
  var DEFAULT_LANG = "en";

  var translations = {

    /* ============================== ENGLISH ============================== */
    en: {
      "meta.title": `Funes — the private AI assistant that remembers`,
      "meta.description": `Funes is an AI assistant that runs on your own computer, remembers what matters, and never sends your clients' files to somebody else's cloud. Built for law firms, medical and mental-health practices, and anyone who works under confidentiality.`,
      "meta.ogDescription": `An AI assistant with a real memory that runs on hardware you own. Your clients' files never leave the building.`,

      "nav.what": `What it does`,
      "nav.privacy": `Privacy`,
      "nav.who": `Who it's for`,
      "nav.faq": `Questions`,
      "nav.cta": `Book a demo`,

      "hero.h1": `The AI assistant that remembers your work — and <em>never leaves your office</em>`,
      "hero.sub": `Funes runs on a computer you own. It remembers your clients, your cases, your ongoing matters — and every single thing it knows is visible to you, editable by you, and deletable by you. Nothing is uploaded. Nothing is used to train anybody's model.`,
      "hero.ctaPrimary": `Book a demo`,
      "hero.ctaSecondary": `See what it does`,
      "hero.note": `A 30-minute call. We'll show you Funes running on real hardware.`,
      "hero.trust1": `Runs on your own machine`,
      "hero.trust2": `Works with no internet at all`,
      "hero.trust3": `You can read everything it remembers`,
      "hero.trust4": `Delete anything, any time`,

      "shot.bar": `Funes — running on the machine in your own office`,
      "shot.imgAlt": `The Funes interface: a conversation on the left, and a panel on the right listing everything Funes remembers, each item with its source and date, and a box to teach it a new fact.`,
      "shot.caption": `On the right: everything Funes remembers about you. Search it, add to it, delete any line of it. There is no other copy.`,

      "problem.eyebrow": `The problem`,
      "problem.h2": `Most AI assistants ask you to hand over the one thing you can't hand over`,
      "problem.lead": `Confidential work and public AI services are a bad fit. You are asked to paste privileged material into a service you don't control, run by a company you have no contract with, on servers in a country you didn't choose.`,
      "problem.card1.h3": `It goes somewhere else`,
      "problem.card1.p": `Every question, every document, every name leaves your building and lands on hardware you have never seen. What happens to it afterwards is a policy page that can change next quarter.`,
      "problem.card2.h3": `It forgets you anyway`,
      "problem.card2.p": `You explain your practice, your clients, your way of working — and the next conversation starts from nothing. The context you rebuild every morning is thrown away every night.`,
      "problem.card3.h3": `You can't see what it kept`,
      "problem.card3.p": `When an assistant does remember something, you usually can't inspect it, correct it, or make it forget. You are trusting a black box with material you are professionally obliged to protect.`,

      "what.eyebrow": `What Funes does`,
      "what.h2": `An assistant that learns your practice and stays inside it`,
      "what.lead": `Everything below is in Funes 4, working today. No waiting list, no beta, no features that exist only on this page.`,
      "what.tagNew": `New in 4`,

      "what.card1.h3": `It actually remembers`,
      "what.card1.p": `Tell Funes something on Monday and it knows it in March. Before every answer it recalls what's relevant — the client, the matter, the way you like things written — and tells you what it recalled.`,
      "what.card2.h3": `Its memory is in plain sight`,
      "what.card2.p": `One panel lists everything it knows, in ordinary sentences, each tagged with where it came from. Search it. Correct it. Teach it a fact directly. Delete a line and it is gone.`,
      "what.card3.h3": `It forgets on purpose`,
      "what.card3.p": `Left alone, an assistant's memory turns into clutter. Funes tidies itself up: near-duplicates get merged into one clear note, and stale chatter it never needed again is dropped. What you taught it deliberately is never thrown away.`,
      "what.card4.h3": `It reads your documents`,
      "what.card4.p": `Drag in a PDF, a photo of a form, a set of notes — Funes reads it and you can ask about it straight away. The file stays in your own folder on your own disk.`,
      "what.card5.h3": `Conversations you can come back to`,
      "what.card5.p": `Every conversation is kept and listed, so you can reopen last week's thread exactly where it stopped — or delete the whole conversation in one click when it's no longer needed. <span class="tag-new">New in 4</span>`,
      "what.card6.h3": `An account for each person`,
      "what.card6.p": `Everyone in the practice gets their own login — and their own memories, conversations, files and reminders. One colleague simply cannot see another's. That separation is built into how Funes stores things, not into a screen that could be worked around. <span class="tag-new">New in 4</span>`,
      "what.card7.h3": `You decide who can do what`,
      "what.card7.p": `An administrator decides which assistants and which abilities each person gets. The powerful ones — running commands, reaching out to the network — are switched off until you decide otherwise. <span class="tag-new">New in 4</span>`,
      "what.card8.h3": `Reminders and routines`,
      "what.card8.p": `"Remind me every weekday at 8pm." "Every Monday, summarise what moved last week." Funes keeps a schedule and does the work on time, whether or not you have the browser open.`,
      "what.card9.h3": `Research, when you ask for it`,
      "what.card9.p": `Need something looked up? Funes can search and read the web and come back with a summary and its sources. It only goes online for the questions where you want it to.`,
      "what.card10.h3": `Reachable where you already are`,
      "what.card10.p": `Beyond the browser, Funes can answer over WhatsApp and help with your inbox — including reading a document somebody sends you. Each connection is optional, and off until you turn it on.`,
      "what.card11.h3": `Upload a whole project at once`,
      "what.card11.p": `Drop a folder of files — a case archive, a manuscript, a set of client documents — and they all land in your workspace in one go. Every file is available from that point on, across every conversation, without uploading again. <span class="tag-new">New in 4</span>`,
      "what.card12.h3": `Specialists you never have to pick`,
      "what.card12.p": `You always talk to Funes. Behind it sit specialists — a researcher, an assistant for files and routine jobs — and Funes hands the work over and comes back with the answer. No menu of robots to choose from.`,
      "what.card13.h3": `Assistants shaped to your practice`,
      "what.card13.p": `Describe the helper you want — "one that drafts intake summaries the way I write them" — and Funes builds it with you, in conversation. No technical work on your side.`,

      "privacy.eyebrow": `Privacy and control`,
      "privacy.h2": `Six plain facts about where your information goes`,
      "privacy.lead": `Not a policy. Not a promise about a data centre you'll never visit. This is simply how Funes is built.`,
      "privacy.step1.h3": `It runs on your hardware`,
      "privacy.step1.p": `Funes is installed on a machine in your office — one computer is enough for a small practice. There is no account to create with us, and no service you depend on to keep working.`,
      "privacy.step2.h3": `It can work with no internet at all`,
      "privacy.step2.p": `Paired with a language model running on that same machine, Funes never sends a word anywhere. You can unplug the network cable and keep working. If you'd rather use a big cloud model for its extra power, that's a choice you make explicitly — and it's the only thing that ever sends text outside.`,
      "privacy.step3.h3": `Everything it knows is one file`,
      "privacy.step3.p": `All the memory lives in a single file on your disk. Backing it up is copying a file. Moving to a new computer is copying a file. Destroying everything is deleting a file — and that's genuinely the end of it.`,
      "privacy.step4.h3": `Nothing is hidden from you`,
      "privacy.step4.p": `There is no invisible profile being built. Open the memory panel and read the lot, in sentences you can understand, with the date and the source of each one.`,
      "privacy.step5.h3": `Colleagues are properly separated`,
      "privacy.step5.p": `Each person's memories, conversations, documents and reminders belong to that person alone. A partner cannot read an associate's notes, and a shared computer doesn't mean a shared record.`,
      "privacy.step6.h3": `The risky abilities start switched off`,
      "privacy.step6.p": `Funes can be given real power — running commands, reaching into your systems. None of it is on by default. Each capability is something you deliberately grant, to the people you choose.`,
      "privacy.fineprint": `Funes is a tool for keeping confidential material under your own roof and your own control. It supports the obligations you already work under — professional secrecy, client confidentiality, data protection — but no software makes you compliant on its own, and we won't pretend otherwise. Happy to talk through the specifics of your situation with you and your advisor.`,

      "who.eyebrow": `Who it's for`,
      "who.h2": `Built for people whose work is confidential by default`,
      "who.lead": `If handing your files to a third party is not an option — legally, ethically, or because it simply feels wrong — Funes was made for you.`,
      "who.aud1.h3": `Law firms and solo practitioners`,
      "who.aud1.p": `Privilege doesn't survive a trip through somebody else's servers. Funes keeps case context, remembers the parties and the state of each matter, reads the bundle you drop in, and stays entirely within your office.`,
      "who.aud1.said": `In practice: each fee earner's notes stay their own, and every line Funes keeps is one you can read and delete.`,
      "who.aud2.h3": `Small medical practices`,
      "who.aud2.p": `Patient information belongs in the practice. Funes helps with notes, summaries, letters and follow-ups without any of it leaving the premises — and each clinician's record stays separate from the next.`,
      "who.aud2.said": `In practice: no portal, no third-party processor, no new agreement to sign with anybody.`,
      "who.aud3.h3": `Therapists and mental-health professionals`,
      "who.aud3.p": `Session material is about as sensitive as information gets. Funes remembers what you need it to remember, and forgets exactly what you tell it to — and the whole record sits on your own machine, not in a subscription you can't audit.`,
      "who.aud3.said": `In practice: you can show a client, on screen, everything the assistant holds about them.`,
      "who.aud4.h3": `Accountants, notaries and advisors`,
      "who.aud4.p": `Financial and personal detail, year after year, for the same clients. Funes carries that history between conversations so you're not re-explaining a client's situation every time you sit down with it.`,
      "who.aud4.said": `In practice: it remembers last year's arrangement without you digging out last year's file.`,
      "who.aud5.h3": `Consultancies and small firms`,
      "who.aud5.p": `Client work under NDA, internal strategy, unreleased numbers. Everyone gets their own assistant with their own memory, and none of it is anywhere but the office.`,
      "who.aud5.said": `In practice: six people, one machine, six genuinely separate assistants.`,
      "who.aud6.h3": `Writers and researchers`,
      "who.aud6.p": `A book, a thesis, a long report — anything written over months. Funes remembers your style decisions, your outline, your editor's requirements, and applies them consistently from the first chapter to the last. Upload your whole manuscript and it reviews each chapter against your own rules.`,
      "who.aud6.said": `In practice: it remembers "no em-dashes, Chicago 16th, 3,000 words per chapter" and checks every draft against those rules without being told again.`,
      "who.aud7.h3": `Anyone who simply prefers it this way`,
      "who.aud7.p": `You don't need a regulator to justify keeping your own material to yourself. Funes is for people who'd rather their assistant lived at home.`,
      "who.aud7.said": `In practice: an assistant that works for you, rather than one you are working for.`,

      "quote.text": `"I have more memories than all mankind since the world began."`,
      "quote.cite": `Jorge Luis Borges, <em>Funes the Memorious</em> — the story Funes takes its name from. In it, remembering everything is a curse. Which is why forgetting, here, is a feature you control.`,

      "faq.eyebrow": `Questions`,
      "faq.h2": `The things people ask us first`,
      "faq.q1": `Do our files really never leave the building?`,
      "faq.a1": `With a language model running on your own machine, yes — literally nothing is sent out, and Funes keeps working with the network unplugged. Some practices prefer to use a large cloud model for the extra capability; in that setup, whatever you put in front of Funes — your questions, and anything you paste or attach — is sent to that provider, and nothing goes anywhere else. It's your decision, it's a single setting, and we'll walk you through the trade-off honestly before you choose.`,
      "faq.q2": `Is our data used to train anything?`,
      "faq.a2": `No. Funes learns about your work in its own memory file, on your own disk, and that memory is used to answer your questions. It isn't sent anywhere, pooled with anyone else's, or used to improve a model.`,
      "faq.q3": `What hardware do we need?`,
      "faq.a3": `For a small practice, one reasonably modern computer that stays switched on. If you want everything running locally, a machine with a decent graphics card makes the assistant noticeably quicker. We'll tell you exactly what your situation needs before you spend anything.`,
      "faq.q4": `Do we need someone technical on staff?`,
      "faq.a4": `No. We install it, connect it to what you use, set up the accounts, and show your team how it works. Day to day, it's a page in your browser.`,
      "faq.q5": `What if a client asks us to delete everything?`,
      "faq.a5": `You open the memory panel, search their name, and delete what's there. You can also delete an entire conversation. Because everything lives on your machine, there's no other copy sitting somewhere waiting to be purged — when it's deleted, it's deleted.`,
      "faq.q6": `What happens to our data if we stop working with you?`,
      "faq.a6": `Nothing. It's already yours, on your machine, in one file. There is nothing for us to hand back and nothing for us to keep.`,
      "faq.q7": `Can it work in our language?`,
      "faq.a7": `Yes. Funes speaks whatever the underlying model speaks — we routinely run it in Spanish and English.`,

      "closing.eyebrow": `Next step`,
      "closing.h2": `See it running before you decide anything`,
      "closing.lead": `Half an hour, no obligation, no sales deck. We show you Funes working, you tell us about your practice, and we tell you honestly whether it fits.`,
      "closing.cta": `Book a demo`,

      "contact.nameLabel": `Your name`,
      "contact.emailLabel": `Email`,
      "contact.orgLabel": `Practice or firm`,
      "contact.orgOptional": `(optional)`,
      "contact.messageLabel": `What would you want Funes to help with?`,
      "contact.hint": `Please don't include client details in this form — it's an ordinary web form, not Funes. A sentence about the kind of work is plenty.`,
      "contact.formSubject": `Funes — demo request`,
      "contact.submit": `Send`,

      "footer.made": `Funes is made by Julio R.M..`,
      "footer.rights": `&copy; 2026 - All rights reserved.`,

      "ty.title": `Thank you — Funes`,
      "ty.description": `Your message reached us. We'll be in touch shortly.`,
      "ty.back": `Back to Funes`,
      "ty.h1": `Thank you — your message is with us`,
      "ty.sub": `We read every one of these ourselves. Expect a reply within one working day, from a person, proposing a time for a half-hour look at Funes.`,
      "ty.made": `Funes is made by Auto²ML.`,
      "ty.rights": `&copy; 2026 Auto²ML. All rights reserved.`
    },

    /* ======================== SPANISH (Argentina, voseo, formal register) ======================== */
    es: {
      "meta.title": `Funes — el asistente de IA privado que recuerda`,
      "meta.description": `Funes es un asistente de IA que corre en tu propia computadora, recuerda lo que importa y nunca envía los archivos de tus clientes a la nube de otra empresa. Pensado para estudios jurídicos, consultorios médicos y de salud mental, y cualquiera que trabaje bajo confidencialidad.`,
      "meta.ogDescription": `Un asistente de IA con memoria real que corre en hardware de tu propiedad. Los archivos de tus clientes nunca salen de tu oficina.`,

      "nav.what": `Qué hace`,
      "nav.privacy": `Privacidad`,
      "nav.who": `Para quién es`,
      "nav.faq": `Preguntas`,
      "nav.cta": `Solicitar una demo`,

      "hero.h1": `El asistente de IA que recuerda tu trabajo — y <em>nunca sale de tu oficina</em>`,
      "hero.sub": `Funes corre en una computadora que es tuya. Recuerda a tus clientes, tus casos, tus asuntos en curso — y absolutamente todo lo que sabe es visible para vos, editable por vos y eliminable por vos. No se sube nada a ningún lado. Nada se usa para entrenar el modelo de nadie.`,
      "hero.ctaPrimary": `Solicitar una demo`,
      "hero.ctaSecondary": `Ver qué hace`,
      "hero.note": `Una llamada de 30 minutos. Te mostramos Funes funcionando sobre hardware real.`,
      "hero.trust1": `Corre en tu propia máquina`,
      "hero.trust2": `Funciona sin conexión a internet`,
      "hero.trust3": `Podés leer todo lo que recuerda`,
      "hero.trust4": `Eliminá lo que quieras, cuando quieras`,

      "shot.bar": `Funes — corriendo en la máquina de tu propia oficina`,
      "shot.imgAlt": `La interfaz de Funes: una conversación a la izquierda y, a la derecha, un panel con todo lo que Funes recuerda, cada dato con su fuente y su fecha, y un campo para enseñarle un hecho nuevo.`,
      "shot.caption": `A la derecha: todo lo que Funes recuerda sobre vos. Buscalo, agregá información, eliminá cualquier línea. No existe otra copia.`,

      "problem.eyebrow": `El problema`,
      "problem.h2": `La mayoría de los asistentes de IA te pide entregar lo único que no podés entregar`,
      "problem.lead": `El trabajo confidencial y los servicios públicos de IA no combinan bien. Se te pide pegar material privilegiado en un servicio que no controlás, operado por una empresa con la que no tenés contrato, en servidores de un país que no elegiste.`,
      "problem.card1.h3": `La información va a otro lado`,
      "problem.card1.p": `Cada pregunta, cada documento, cada nombre sale de tu oficina y termina en un hardware que nunca viste. Lo que pasa con eso después depende de una página de políticas que puede cambiar el trimestre que viene.`,
      "problem.card2.h3": `De todos modos, se olvida de vos`,
      "problem.card2.p": `Explicás tu práctica, tus clientes, tu manera de trabajar — y la próxima conversación arranca de cero. El contexto que reconstruís cada mañana se descarta cada noche.`,
      "problem.card3.h3": `No podés ver qué guardó`,
      "problem.card3.p": `Cuando un asistente sí recuerda algo, generalmente no podés inspeccionarlo, corregirlo ni hacer que lo olvide. Estás confiando en una caja negra material que estás profesionalmente obligado a proteger.`,

      "what.eyebrow": `Qué hace Funes`,
      "what.h2": `Un asistente que aprende tu práctica y se queda dentro de ella`,
      "what.lead": `Todo lo que sigue está en Funes 4, funcionando hoy. Sin lista de espera, sin beta, sin funciones que existan solamente en esta página.`,
      "what.tagNew": `Nuevo en la 4`,

      "what.card1.h3": `Realmente recuerda`,
      "what.card1.p": `Le contás algo a Funes un lunes y lo sabe en marzo. Antes de cada respuesta, recupera lo relevante — el cliente, el asunto, cómo te gusta que se escriban las cosas — y te dice qué recordó.`,
      "what.card2.h3": `Su memoria está a la vista`,
      "what.card2.p": `Un panel lista todo lo que sabe, en oraciones comunes, cada una etiquetada con su origen. Buscala. Corregila. Enseñale un dato directamente. Borrá una línea y desaparece.`,
      "what.card3.h3": `Se olvida a propósito`,
      "what.card3.p": `Dejada a su suerte, la memoria de un asistente se llena de ruido. Funes se ordena sola: los casi duplicados se fusionan en una nota clara, y la charla vieja que ya no sirve se descarta. Lo que le enseñaste a propósito nunca se tira.`,
      "what.card4.h3": `Lee tus documentos`,
      "what.card4.p": `Arrastrá un PDF, la foto de un formulario, un conjunto de notas — Funes los lee y podés preguntarle al respecto de inmediato. El archivo se queda en tu propia carpeta, en tu propio disco.`,
      "what.card5.h3": `Conversaciones a las que podés volver`,
      "what.card5.p": `Cada conversación queda guardada y listada, así podés reabrir el hilo de la semana pasada justo donde quedó — o eliminar la conversación entera con un clic cuando ya no la necesitás. <span class="tag-new">Nuevo en la 4</span>`,
      "what.card6.h3": `Una cuenta para cada persona`,
      "what.card6.p": `Cada integrante de la práctica tiene su propio ingreso — y sus propias memorias, conversaciones, archivos y recordatorios. Un colega simplemente no puede ver los de otro. Esa separación está integrada en cómo Funes guarda las cosas, no en una pantalla que se pueda esquivar. <span class="tag-new">Nuevo en la 4</span>`,
      "what.card7.h3": `Vos decidís quién puede hacer qué`,
      "what.card7.p": `Un administrador decide qué asistentes y qué capacidades tiene cada persona. Las más poderosas — ejecutar comandos, salir a la red — están apagadas hasta que decidas lo contrario. <span class="tag-new">Nuevo en la 4</span>`,
      "what.card8.h3": `Recordatorios y rutinas`,
      "what.card8.p": `"Recordame todos los días hábiles a las 20." "Todos los lunes, resumime qué se movió la semana pasada." Funes mantiene una agenda y hace el trabajo a tiempo, tengas o no el navegador abierto.`,
      "what.card9.h3": `Investigación, cuando la pedís`,
      "what.card9.p": `¿Necesitás averiguar algo? Funes puede buscar y leer en la web y volver con un resumen y sus fuentes. Solo se conecta para las preguntas en las que vos querés que lo haga.`,
      "what.card10.h3": `Accesible donde ya estás`,
      "what.card10.p": `Más allá del navegador, Funes puede responder por WhatsApp y ayudarte con tu casilla de correo — incluso leyendo un documento que alguien te mande. Cada conexión es opcional y está apagada hasta que la actives.`,
      "what.card11.h3": `Subí un proyecto entero de una vez`,
      "what.card11.p": `Soltá una carpeta de archivos — un legajo de caso, un manuscrito, un conjunto de documentos de un cliente — y todos llegan a tu espacio de trabajo de una sola vez. Cada archivo queda disponible a partir de ahí, en todas las conversaciones, sin volver a subirlo. <span class="tag-new">Nuevo en la 4</span>`,
      "what.card12.h3": `Especialistas que nunca tenés que elegir`,
      "what.card12.p": `Vos siempre hablás con Funes. Detrás hay especialistas — un investigador, un asistente para archivos y tareas de rutina — y Funes les deriva el trabajo y vuelve con la respuesta. Sin un menú de robots para elegir.`,
      "what.card13.h3": `Asistentes hechos a la medida de tu práctica`,
      "what.card13.p": `Describí el ayudante que querés — "uno que redacte resúmenes de admisión como los escribo yo" — y Funes lo construye con vos, conversando. Sin trabajo técnico de tu parte.`,

      "privacy.eyebrow": `Privacidad y control`,
      "privacy.h2": `Seis hechos concretos sobre a dónde va tu información`,
      "privacy.lead": `No es una política. No es una promesa sobre un centro de datos que nunca vas a visitar. Así está construido Funes, y punto.`,
      "privacy.step1.h3": `Corre en tu propio hardware`,
      "privacy.step1.p": `Funes se instala en una máquina de tu oficina — una sola computadora alcanza para una práctica chica. No hay que crear ninguna cuenta con nosotros, ni depender de ningún servicio nuestro para seguir funcionando.`,
      "privacy.step2.h3": `Puede funcionar sin ninguna conexión a internet`,
      "privacy.step2.p": `Combinado con un modelo de lenguaje que corre en esa misma máquina, Funes nunca manda una palabra a ningún lado. Podés desconectar el cable de red y seguir trabajando. Si preferís usar un modelo grande en la nube por su capacidad extra, esa es una decisión que tomás explícitamente — y es lo único que llega a enviar texto hacia afuera.`,
      "privacy.step3.h3": `Todo lo que sabe está en un solo archivo`,
      "privacy.step3.p": `Toda la memoria vive en un único archivo en tu disco. Hacer una copia de resguardo es copiar un archivo. Cambiar de computadora es copiar un archivo. Destruir todo es borrar un archivo — y eso es, genuinamente, el final del asunto.`,
      "privacy.step4.h3": `No hay nada oculto para vos`,
      "privacy.step4.p": `No se construye ningún perfil invisible. Abrís el panel de memoria y leés todo, en oraciones que se entienden, con la fecha y la fuente de cada una.`,
      "privacy.step5.h3": `Los colegas están correctamente separados`,
      "privacy.step5.p": `Las memorias, conversaciones, documentos y recordatorios de cada persona le pertenecen únicamente a ella. Un socio no puede leer las notas de un asociado, y compartir la computadora no implica compartir el registro.`,
      "privacy.step6.h3": `Las capacidades riesgosas arrancan apagadas`,
      "privacy.step6.p": `A Funes se le puede dar poder real — ejecutar comandos, acceder a tus sistemas. Nada de eso viene activado por defecto. Cada capacidad es algo que vos concedés deliberadamente, a las personas que elegís.`,
      "privacy.fineprint": `Funes es una herramienta para mantener material confidencial bajo tu propio techo y tu propio control. Sirve de apoyo a las obligaciones bajo las que ya trabajás — secreto profesional, confidencialidad con el cliente, protección de datos — pero ningún software te vuelve compliant por sí solo, y no vamos a pretender lo contrario. Con gusto conversamos los detalles de tu situación con vos y con tu asesor.`,

      "who.eyebrow": `Para quién es`,
      "who.h2": `Pensado para quienes trabajan, por defecto, bajo confidencialidad`,
      "who.lead": `Si entregarle tus archivos a un tercero no es una opción — por ley, por ética, o simplemente porque se siente mal — Funes está hecho para vos.`,
      "who.aud1.h3": `Estudios jurídicos y profesionales independientes`,
      "who.aud1.p": `El privilegio profesional no sobrevive un paso por los servidores de otro. Funes mantiene el contexto de cada caso, recuerda a las partes y el estado de cada asunto, lee la documentación que le cargás, y se queda enteramente dentro de tu oficina.`,
      "who.aud1.said": `En la práctica: las notas de cada profesional siguen siendo suyas, y cada línea que Funes guarda es una que vos podés leer y borrar.`,
      "who.aud2.h3": `Consultorios médicos pequeños`,
      "who.aud2.p": `La información del paciente le pertenece al consultorio. Funes ayuda con notas, resúmenes, cartas y seguimientos sin que nada de eso salga del lugar — y el registro de cada profesional queda separado del de los demás.`,
      "who.aud2.said": `En la práctica: sin portal, sin procesador externo, sin ningún acuerdo nuevo que firmar con nadie.`,
      "who.aud3.h3": `Terapeutas y profesionales de salud mental`,
      "who.aud3.p": `El material de una sesión es prácticamente lo más sensible que existe. Funes recuerda exactamente lo que necesitás que recuerde, y olvida exactamente lo que le indicás — y todo el registro queda en tu propia máquina, no en una suscripción que no podés auditar.`,
      "who.aud3.said": `En la práctica: podés mostrarle a un paciente, en pantalla, todo lo que el asistente tiene guardado sobre él.`,
      "who.aud4.h3": `Contadores, escribanos y asesores`,
      "who.aud4.p": `Detalles financieros y personales, año tras año, de los mismos clientes. Funes lleva esa historia de una conversación a otra, así no tenés que reexplicar la situación de un cliente cada vez que te sentás a trabajar con él.`,
      "who.aud4.said": `En la práctica: recuerda el acuerdo del año pasado sin que tengas que desenterrar el expediente del año pasado.`,
      "who.aud5.h3": `Consultoras y estudios pequeños`,
      "who.aud5.p": `Trabajo de clientes bajo NDA, estrategia interna, cifras aún no publicadas. Cada persona tiene su propio asistente con su propia memoria, y nada de eso está en ningún otro lado más que en la oficina.`,
      "who.aud5.said": `En la práctica: seis personas, una máquina, seis asistentes genuinamente separados.`,
      "who.aud6.h3": `Escritores e investigadores`,
      "who.aud6.p": `Un libro, una tesis, un informe extenso — cualquier cosa que se escriba a lo largo de meses. Funes recuerda tus decisiones de estilo, tu esquema, los requisitos de tu editor, y los aplica de manera consistente desde el primer capítulo hasta el último. Subí el manuscrito completo y Funes revisa cada capítulo contra tus propias reglas.`,
      "who.aud6.said": `En la práctica: recuerda "sin rayas largas, Chicago 16ª edición, 3.000 palabras por capítulo" y verifica cada borrador contra esas reglas sin que se lo repitas.`,
      "who.aud7.h3": `Cualquiera que simplemente lo prefiera así`,
      "who.aud7.p": `No hace falta ningún regulador para justificar que quieras quedarte con tu propio material. Funes es para quienes prefieren que su asistente viva en casa.`,
      "who.aud7.said": `En la práctica: un asistente que trabaja para vos, en lugar de uno para el que vos trabajás.`,

      "quote.text": `"Tengo más recuerdos yo solo que los que habrán tenido todos los hombres desde que el mundo es mundo."`,
      "quote.cite": `Jorge Luis Borges, <em>Funes el memorioso</em> — el cuento que le da nombre a Funes. Ahí, recordarlo todo es una maldición. Por eso, acá, olvidar es una función que vos controlás.`,

      "faq.eyebrow": `Preguntas`,
      "faq.h2": `Lo primero que nos preguntan`,
      "faq.q1": `¿Nuestros archivos realmente nunca salen de la oficina?`,
      "faq.a1": `Con un modelo de lenguaje corriendo en tu propia máquina, sí — literalmente no se envía nada, y Funes sigue funcionando con la red desconectada. Algunas prácticas prefieren usar un modelo grande en la nube por la capacidad extra; en ese esquema, todo lo que le mostrás a Funes — tus preguntas y cualquier cosa que pegues o adjuntes — se envía a ese proveedor, y nada más va a ningún otro lado. Es tu decisión, es una sola configuración, y te explicamos honestamente el compromiso antes de que elijas.`,
      "faq.q2": `¿Nuestros datos se usan para entrenar algo?`,
      "faq.a2": `No. Funes aprende sobre tu trabajo en su propio archivo de memoria, en tu propio disco, y esa memoria se usa para responder tus preguntas. No se envía a ningún lado, no se junta con la de nadie más, ni se usa para mejorar ningún modelo.`,
      "faq.q3": `¿Qué hardware necesitamos?`,
      "faq.a3": `Para una práctica chica, una computadora razonablemente moderna que quede encendida. Si querés que todo corra localmente, una placa de video decente hace que el asistente responda notablemente más rápido. Te decimos exactamente qué necesita tu situación antes de que gastes un peso.`,
      "faq.q4": `¿Necesitamos a alguien técnico en el equipo?`,
      "faq.a4": `No. Nosotros lo instalamos, lo conectamos a lo que ya usás, configuramos las cuentas y le mostramos a tu equipo cómo funciona. En el día a día, es una página en el navegador.`,
      "faq.q5": `¿Qué pasa si un cliente nos pide que borremos todo?`,
      "faq.a5": `Abrís el panel de memoria, buscás su nombre y borrás lo que hay. También podés borrar una conversación entera. Como todo vive en tu máquina, no hay otra copia dando vueltas esperando ser purgada — cuando se borra, se borra.`,
      "faq.q6": `¿Qué pasa con nuestros datos si dejamos de trabajar con ustedes?`,
      "faq.a6": `Nada. Ya es tuyo, está en tu máquina, en un solo archivo. No hay nada que nosotros tengamos que devolverte ni nada que nosotros nos quedemos.`,
      "faq.q7": `¿Puede funcionar en nuestro idioma?`,
      "faq.a7": `Sí. Funes habla lo que hable el modelo subyacente — lo corremos habitualmente en español y en inglés.`,

      "closing.eyebrow": `Próximo paso`,
      "closing.h2": `Vela funcionar antes de decidir nada`,
      "closing.lead": `Media hora, sin obligación, sin presentación de ventas. Te mostramos Funes funcionando, nos contás sobre tu práctica, y te decimos honestamente si encaja.`,
      "closing.cta": `Solicitar una demo`,

      "contact.nameLabel": `Tu nombre`,
      "contact.emailLabel": `Correo electrónico`,
      "contact.orgLabel": `Práctica o estudio`,
      "contact.orgOptional": `(opcional)`,
      "contact.messageLabel": `¿En qué te gustaría que te ayude Funes?`,
      "contact.hint": `Por favor, no incluyas datos de clientes en este formulario — es un formulario web común, no es Funes. Con una oración sobre el tipo de trabajo alcanza.`,
      "contact.formSubject": `Funes — solicitud de demo`,
      "contact.submit": `Enviar`,

      "footer.made": `Funes está hecho por Julio R.M..`,
      "footer.rights": `&copy; 2026 - Todos los derechos reservados.`,

      "ty.title": `Gracias — Funes`,
      "ty.description": `Tu mensaje nos llegó. Nos vamos a comunicar en breve.`,
      "ty.back": `Volver a Funes`,
      "ty.h1": `Gracias — tu mensaje ya está con nosotros`,
      "ty.sub": `Leemos cada uno de estos mensajes personalmente. Vas a recibir una respuesta dentro de un día hábil, de parte de una persona, proponiendo un horario para ver Funes durante media hora.`,
      "ty.made": `Funes está hecho por Auto²ML.`,
      "ty.rights": `&copy; 2026 Auto²ML. Todos los derechos reservados.`
    },

    /* ============================== 中文（简体，正式） ============================== */
    zh: {
      "meta.title": `Funes ——记忆长存的私有 AI 助手`,
      "meta.description": `Funes 是一款运行在您自己电脑上的 AI 助手，能记住重要信息，绝不会把客户文件发送到别人的云端。专为律师事务所、医疗机构、心理健康诊所以及一切需要恪守保密义务的从业者打造。`,
      "meta.ogDescription": `拥有真正记忆能力的 AI 助手，运行在您自己拥有的硬件上。客户文件绝不离开办公室。`,

      "nav.what": `功能介绍`,
      "nav.privacy": `隐私保护`,
      "nav.who": `适用对象`,
      "nav.faq": `常见问题`,
      "nav.cta": `预约演示`,

      "hero.h1": `记住您全部工作的 AI 助手 —— <em>永不离开您的办公室</em>`,
      "hero.sub": `Funes 运行在您自己拥有的电脑上。它记住您的客户、案件与正在处理的事务——它所知道的一切，您都能查看、编辑、删除。不上传任何数据，也绝不用于训练任何人的模型。`,
      "hero.ctaPrimary": `预约演示`,
      "hero.ctaSecondary": `了解具体功能`,
      "hero.note": `一通 30 分钟的电话。我们将向您展示 Funes 在真实硬件上的运行情况。`,
      "hero.trust1": `运行在您自己的设备上`,
      "hero.trust2": `完全离线也能使用`,
      "hero.trust3": `它所记住的一切您都可查看`,
      "hero.trust4": `随时删除任意内容`,

      "shot.bar": `Funes —— 运行在您自己办公室的设备上`,
      "shot.imgAlt": `Funes 界面：左侧为对话区，右侧面板列出 Funes 记住的全部内容，每条信息均标注来源与日期，并附有添加新信息的输入框。`,
      "shot.caption": `右侧：Funes 记住的关于您的一切信息。可以搜索、补充、删除任意一条，没有第二份副本。`,

      "problem.eyebrow": `问题所在`,
      "problem.h2": `大多数 AI 助手要求您交出唯一不能交出的东西`,
      "problem.lead": `保密工作与公共 AI 服务天生不合。您被要求把受保密义务保护的材料，粘贴进一个您无法掌控、与之没有合同关系、服务器位于您从未选择的国家的服务当中。`,
      "problem.card1.h3": `信息流向了别处`,
      "problem.card1.p": `每一个问题、每一份文件、每一个名字都会离开您的办公室，落到您从未见过的硬件上。之后会发生什么，取决于一份下个季度就可能修改的政策页面。`,
      "problem.card2.h3": `它照样会忘记您`,
      "problem.card2.p": `您解释了自己的业务、客户、工作方式——下一次对话却又从零开始。您每天早上重新搭建的上下文，每晚都被丢弃。`,
      "problem.card3.h3": `您无法看到它保留了什么`,
      "problem.card3.p": `即便助手确实记住了什么，您通常也无法查看、修正或让它遗忘。您把职业上有义务保护的材料，交给了一个黑箱。`,

      "what.eyebrow": `Funes 能做什么`,
      "what.h2": `一个能学习您的业务、并始终留在其中的助手`,
      "what.lead": `以下功能均已在 Funes 4 中实现，今天即可使用。没有等候名单，没有测试版，没有仅存在于本页面的功能。`,
      "what.tagNew": `4 版新增`,

      "what.card1.h3": `它真的会记住`,
      "what.card1.p": `周一告诉 Funes 的事，三月它依然记得。每次回答之前，它都会调取相关信息——客户、事务、您偏好的表达方式——并告知您它调取了什么。`,
      "what.card2.h3": `它的记忆一目了然`,
      "what.card2.p": `一个面板列出它所知道的一切，以平实的句子呈现，每一条都标注来源。搜索、修正、直接教它一个新事实。删除一行，它就消失了。`,
      "what.card3.h3": `它会主动遗忘`,
      "what.card3.p": `如果放任不管，助手的记忆会变得杂乱。Funes 会自我整理：近似重复的内容会合并为一条清晰的记录，不再需要的陈旧内容会被丢弃。您刻意教给它的内容，则绝不会被清除。`,
      "what.card4.h3": `它能读懂您的文件`,
      "what.card4.p": `拖入一份 PDF、一张表格照片或一组笔记——Funes 会读取内容，您可以立即就此提问。文件仍保存在您自己磁盘上的文件夹里。`,
      "what.card5.h3": `随时可以回顾的对话`,
      "what.card5.p": `每一次对话都会被保存并列出，您可以准确从上周中断的地方重新打开——也可以在不再需要时一键删除整段对话。<span class="tag-new">4 版新增</span>`,
      "what.card6.h3": `每人独立账户`,
      "what.card6.p": `团队中的每个人都拥有自己的登录账户——以及各自独立的记忆、对话、文件和提醒事项。同事之间彼此无法查看对方的内容。这种隔离内建于 Funes 存储数据的方式之中，而不是一个可以被绕过的界面开关。<span class="tag-new">4 版新增</span>`,
      "what.card7.h3": `由您决定谁能做什么`,
      "what.card7.p": `管理员可以决定每个人能使用哪些助手、拥有哪些权限。较为强大的能力——执行命令、访问网络——默认处于关闭状态，除非您另行开启。<span class="tag-new">4 版新增</span>`,
      "what.card8.h3": `提醒与例行任务`,
      "what.card8.p": `“每个工作日晚上 8 点提醒我。”“每周一，总结上周的进展。”无论浏览器是否打开，Funes 都会按计划、按时完成工作。`,
      "what.card9.h3": `按需进行的信息检索`,
      "what.card9.p": `需要查点什么？Funes 可以搜索并阅读网页，返回摘要及信息来源。只有在您需要的问题上，它才会联网。`,
      "what.card10.h3": `在您常用的地方即可触达`,
      "what.card10.p": `除了浏览器，Funes 还能通过 WhatsApp 回复，并协助处理您的邮箱——包括阅读他人发来的文件。每一项连接都是可选的，且默认关闭，直到您主动开启。`,
      "what.card11.h3": `一次性上传整个项目`,
      "what.card11.p": `拖入一整个文件夹——案件档案、书稿、一批客户文件——所有内容会一次性进入您的工作区。此后每一份文件在所有对话中都可直接使用，无需重复上传。<span class="tag-new">4 版新增</span>`,
      "what.card12.h3": `无需您挑选的专项助手`,
      "what.card12.p": `您始终只与 Funes 对话。它背后有多个专项助手——负责检索的、负责文件与日常事务的——Funes 会把工作交给合适的助手，再把结果带回给您。没有需要您挑选的“机器人菜单”。`,
      "what.card13.h3": `按您的业务量身定制的助手`,
      "what.card13.p": `描述您想要的助手——“一个能按我的写法起草接案摘要的助手”——Funes 会在对话中与您一起把它构建出来。您这边无需任何技术操作。`,

      "privacy.eyebrow": `隐私与掌控`,
      "privacy.h2": `关于您的信息去向的六个基本事实`,
      "privacy.lead": `这不是一份政策，也不是关于某个您永远不会去参观的数据中心的承诺。Funes 的设计本身就是如此。`,
      "privacy.step1.h3": `运行在您自己的硬件上`,
      "privacy.step1.p": `Funes 安装在您办公室的一台设备上——对小型机构而言，一台电脑就足够。无需向我们注册任何账户，也不依赖我们的任何服务才能继续运行。`,
      "privacy.step2.h3": `完全无需联网即可运行`,
      "privacy.step2.p": `与运行在同一台设备上的语言模型配合使用时，Funes 不会向任何地方发送任何一个字。您可以拔掉网线，继续正常工作。如果您更希望借助云端大模型获得更强能力，这是您需要明确做出的选择——也是唯一会把文本发送到外部的环节。`,
      "privacy.step3.h3": `它所知道的一切都在一个文件里`,
      "privacy.step3.p": `全部记忆都保存在您磁盘上的单一文件中。备份，就是复制一个文件；更换电脑，就是复制一个文件；彻底销毁，就是删除一个文件——而这确实就是终点。`,
      "privacy.step4.h3": `对您没有任何隐藏`,
      "privacy.step4.p": `不存在任何看不见的用户画像。打开记忆面板即可读到全部内容，语句清晰易懂，并标注每一条的日期与来源。`,
      "privacy.step5.h3": `同事之间被妥善隔离`,
      "privacy.step5.p": `每个人的记忆、对话、文件和提醒事项只属于本人。合伙人无法读取助理的笔记，共用一台电脑也不意味着共享记录。`,
      "privacy.step6.h3": `具有风险的能力默认关闭`,
      "privacy.step6.p": `Funes 可以被赋予真正强大的权限——执行命令、访问您的系统。这些权限默认全部关闭，每一项能力都需要您主动授予给您选定的人员。`,
      "privacy.fineprint": `Funes 是一款帮助您把保密材料留在自己掌控范围内的工具。它有助于支持您已承担的义务——职业保密、客户保密、数据保护——但没有任何软件能单靠自身让您自动合规，我们也不会假装如此。欢迎与您和您的顾问具体讨论您的情况。`,

      "who.eyebrow": `适用对象`,
      "who.h2": `为默认需要保密的从业者而设计`,
      "who.lead": `如果把文件交给第三方不是一个选项——无论出于法律、职业道德，还是单纯感觉不妥——Funes 正是为您而做的。`,
      "who.aud1.h3": `律师事务所与独立执业律师`,
      "who.aud1.p": `特权信息一旦经过他人的服务器，就不复存在。Funes 保留案件上下文，记住各方当事人及每个事务的进展，读取您导入的卷宗，并始终留在您的办公室内。`,
      "who.aud1.said": `实际效果：每位执业者的笔记各自独立，Funes 保留的每一行内容您都可以查看和删除。`,
      "who.aud2.h3": `小型医疗机构`,
      "who.aud2.p": `患者信息理应留在诊所内部。Funes 协助处理病历、摘要、信函和随访，全部内容不出诊所大门——且每位临床医生的记录相互独立。`,
      "who.aud2.said": `实际效果：无需门户网站，无需第三方处理商，无需与任何人另行签署协议。`,
      "who.aud3.h3": `心理治疗师与心理健康从业者`,
      "who.aud3.p": `会谈内容几乎是最敏感的信息类型。Funes 会记住您需要它记住的内容，也会准确遗忘您指示它遗忘的内容——整份记录留存在您自己的设备上，而非一个您无法审计的订阅服务里。`,
      "who.aud3.said": `实际效果：您可以在屏幕上向来访者展示助手关于其保存的全部信息。`,
      "who.aud4.h3": `会计师、公证人与顾问`,
      "who.aud4.p": `多年来关于同一批客户的财务与个人信息。Funes 会在不同对话之间延续这些历史，让您无需在每次沟通时重新解释客户的情况。`,
      "who.aud4.said": `实际效果：它记得去年商定的安排，您无需再翻出去年的档案。`,
      "who.aud5.h3": `咨询公司与小型事务所`,
      "who.aud5.p": `受保密协议约束的客户工作、内部战略、尚未公布的数据。每个人都拥有自己独立的助手与记忆，所有内容都只留在办公室内部。`,
      "who.aud5.said": `实际效果：六个人，一台设备，六个真正相互独立的助手。`,
      "who.aud6.h3": `作家与研究者`,
      "who.aud6.p": `一本书、一篇论文、一份长报告——任何需要历时数月完成的写作。Funes 记住您的风格取舍、写作大纲、编辑的要求，并从第一章到最后一章始终如一地贯彻执行。上传整份书稿，它会逐章按您自己的规则进行审阅。`,
      "who.aud6.said": `实际效果：它记得“不用破折号、芝加哥格式第 16 版、每章 3000 字”这样的要求，并在无需重复提醒的情况下，逐篇核对每份草稿。`,
      "who.aud7.h3": `单纯偏好如此的任何人`,
      "who.aud7.p": `您不需要监管机构的理由，才能选择把自己的材料留在身边。Funes 是为那些希望助手“住在家里”的人而做的。`,
      "who.aud7.said": `实际效果：一个为您工作的助手，而不是一个您要为之工作的助手。`,

      "quote.text": `“我一个人的记忆，比自有人类以来所有人加起来的还要多。”`,
      "quote.cite": `豪尔赫·路易斯·博尔赫斯，《博闻强记的富内斯》——Funes 名字的由来。在故事里，记住一切是一种诅咒。这正是为什么在这里，遗忘是一项由您掌控的功能。`,

      "faq.eyebrow": `常见问题`,
      "faq.h2": `大家最先问我们的问题`,
      "faq.q1": `我们的文件真的绝不会离开办公室吗？`,
      "faq.a1": `如果使用运行在您自己设备上的语言模型，答案是肯定的——确实不会发送出任何内容，即使拔掉网线，Funes 也能继续工作。有些机构出于更强能力的考虑，更愿意使用大型云端模型；在这种配置下，您提供给 Funes 的一切——您的提问，以及您粘贴或上传的任何内容——会被发送给该服务商，此外不会再发往任何其他地方。这是您自己的决定，只需一项设置即可切换，我们也会在您选择之前，如实向您说明其中的取舍。`,
      "faq.q2": `我们的数据会被用来训练什么模型吗？`,
      "faq.a2": `不会。Funes 把关于您工作的信息保存在它自己的记忆文件中，存放在您自己的磁盘上，这些记忆仅用于回答您的问题。它不会被发送到任何地方，不会与他人的数据汇总，也不会被用来改进任何模型。`,
      "faq.q3": `我们需要什么硬件？`,
      "faq.a3": `对于小型机构，一台性能尚可、能保持开机的电脑即可。如果希望完全本地运行，配备一块像样的显卡会让助手的响应明显更快。在您花任何钱之前，我们会准确告诉您具体情况需要什么样的配置。`,
      "faq.q4": `我们需要专门的技术人员吗？`,
      "faq.a4": `不需要。我们负责安装、与您现有的系统对接、设置账户，并向您的团队演示使用方法。日常使用中，它只是浏览器里的一个页面。`,
      "faq.q5": `如果客户要求我们删除所有信息该怎么办？`,
      "faq.a5": `打开记忆面板，搜索该客户的姓名，删除相关内容即可。您也可以删除整段对话。由于一切都保存在您自己的设备上，不存在等待清理的“另一份副本”——一旦删除，就是真正删除。`,
      "faq.q6": `如果我们停止与你们合作，我们的数据会怎样？`,
      "faq.a6": `不会怎样。它本就属于您，保存在您的设备上，存于一个文件之中。我们没有什么需要归还给您，也没有什么需要自己留存。`,
      "faq.q7": `它能用我们的语言工作吗？`,
      "faq.a7": `可以。Funes 使用底层模型所支持的任何语言——我们日常就会以中文与英文运行它。`,

      "closing.eyebrow": `下一步`,
      "closing.h2": `在做任何决定之前，先看它实际运行`,
      "closing.lead": `半小时时间，无任何义务，没有销售话术。我们向您展示 Funes 的实际运行，您向我们介绍您的业务，我们如实告诉您它是否合适。`,
      "closing.cta": `预约演示`,

      "contact.nameLabel": `您的姓名`,
      "contact.emailLabel": `电子邮箱`,
      "contact.orgLabel": `机构或事务所`,
      "contact.orgOptional": `（选填）`,
      "contact.messageLabel": `您希望 Funes 协助处理什么？`,
      "contact.hint": `请不要在此表单中填写任何客户相关信息——这只是一个普通的网页表单，并非 Funes 本身。简单一句话说明工作类型即可。`,
      "contact.formSubject": `Funes —— 演示申请`,
      "contact.submit": `发送`,

      "footer.made": `Funes 由 Julio R.M. 开发。`,
      "footer.rights": `&copy; 2026 —— 保留所有权利。`,

      "ty.title": `感谢您 —— Funes`,
      "ty.description": `我们已收到您的留言，很快会与您联系。`,
      "ty.back": `返回 Funes`,
      "ty.h1": `感谢您 —— 我们已收到您的留言`,
      "ty.sub": `每一条留言我们都会亲自阅读。您将在一个工作日内收到回复，由专人为您提议一个半小时的 Funes 演示时间。`,
      "ty.made": `Funes 由 Auto²ML 开发。`,
      "ty.rights": `&copy; 2026 Auto²ML —— 保留所有权利。`
    }
  };

  var htmlLangTag = { en: "en", es: "es-AR", zh: "zh-Hans" };

  function applyLang(lang) {
    if (!translations[lang]) lang = DEFAULT_LANG;
    var dict = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr"); // "attr:key"
      var parts = spec.split(":");
      var attr = parts[0];
      var key = parts[1];
      if (dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });

    document.documentElement.setAttribute("lang", htmlLangTag[lang] || lang);

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — ignore, in-memory state still works for this session */
    }
  }

  function detectInitialLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (e) {
      /* ignore */
    }
    var nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (nav.indexOf("es") === 0) return "es";
    if (nav.indexOf("zh") === 0) return "zh";
    return DEFAULT_LANG;
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(detectInitialLang());

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  });
})();
