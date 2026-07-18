import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/Guia_Practica_Semana_4.pdf'

function Week4() {
  return (
    <WeekLayout currentWeek={4} eyebrow="Semana 4" title="JavaScript y TypeScript">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Lenguajes para el desarrollo web dinámico</h2>
            <p className="section-subtitle">
              JavaScript y TypeScript para interfaces interactivas.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          En esta semana se profundizó en JavaScript como lenguaje principal
          para la creación de páginas web interactivas, abordando temas como
          manipulación del DOM, manejo de eventos, asincronía y programación
          orientada a objetos.
        </p>
        <p>
          Asimismo, se introdujo TypeScript como una extensión de JavaScript
          que incorpora tipado estático, permitiendo mejorar la organización,
          escalabilidad y mantenibilidad del código en proyectos de mayor
          complejidad.
        </p>
      </section>

      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Ejercicio / Resultado</h2>
            <p className="section-subtitle">Evidencia de aprendizaje.</p>
          </div>
        </div>
        <h3 className="section-kicker">Entregable</h3>
        <p>
          Como evidencia de aprendizaje, se elaboró un informe acompañado de
          una página web y su respectivo repositorio en GitHub:
        </p>
        <p>
          <a
            className="doc-link"
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            Informe_JavaScript_Typescript.pdf
          </a>
        </p>
        <p className="muted">Ver Documento</p>
      </section>

      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Reflexión</h2>
            <p className="section-subtitle">Conclusiones y aprendizajes.</p>
          </div>
        </div>
        <p>
          JavaScript es la base de la interactividad en el desarrollo web
          moderno.
        </p>
        <p>
          El desarrollo de esta evidencia permitió comprender cómo JavaScript
          impulsa el comportamiento dinámico de las aplicaciones web. Además,
          TypeScript mostró su utilidad para mejorar la calidad del código y
          facilitar el mantenimiento de proyectos complejos mediante el uso de
          tipado estático.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week4
