import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/S7 - Practica Cruz Cruz.pdf'

function Week7() {
  return (
    <WeekLayout currentWeek={7} eyebrow="Semana 7" title="React Hooks">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Gestión de estado y ciclo de vida en React</h2>
            <p className="section-subtitle">
              Hooks para componentes funcionales.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se trabajó con React Hooks, aprendiendo a manejar
          el estado y el ciclo de vida de componentes funcionales sin necesidad
          de utilizar clases.
        </p>
        <p>
          Se estudiaron Hooks fundamentales como useState y useEffect,
          comprendiendo cómo permiten desarrollar componentes más organizados,
          reutilizables y fáciles de mantener.
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
          una página web y repositorio en GitHub:
        </p>
        <p>
          <a
            className="doc-link"
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            Informe_React_Hooks.pdf
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
          Los Hooks simplifican la gestión de estado y la lógica de negocio en
          aplicaciones React.
        </p>
        <p>
          El desarrollo de esta actividad permitió comprender cómo los Hooks
          optimizan la creación de componentes funcionales y mejoran la
          organización del código. Además, se evidenció su importancia para
          desarrollar aplicaciones modernas más escalables y mantenibles.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week7
