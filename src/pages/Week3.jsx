import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/Informe Bootstrap y Tailwind.pdf'

function Week3() {
  return (
    <WeekLayout currentWeek={3} eyebrow="Semana 3" title="Bootstrap y Tailwind CSS">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Frameworks CSS para el desarrollo web moderno</h2>
            <p className="section-subtitle">
              Bootstrap y Tailwind CSS para interfaces responsivas.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se trabajó con Bootstrap y Tailwind CSS,
          analizando sus enfoques y metodologías para la construcción de
          interfaces responsivas.
        </p>
        <p>
          Bootstrap fue estudiado como un framework basado en componentes
          predefinidos y sistemas de rejilla, mientras que Tailwind CSS
          destacó por su enfoque basado en clases utilitarias y alta capacidad
          de personalización.
        </p>
        <p>
          El uso de ambos frameworks permitió comprender cómo acelerar el
          desarrollo de interfaces modernas y adaptables a distintos
          dispositivos.
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
            Informe_Bootstrap_Tailwind.pdf
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
          Los frameworks CSS facilitan el desarrollo de interfaces responsivas
          y optimizan los tiempos de implementación.
        </p>
        <p>
          Esta actividad permitió identificar las ventajas y limitaciones de
          Bootstrap y Tailwind CSS. Bootstrap demostró ser eficiente para
          desarrollos rápidos con componentes listos para usar, mientras que
          Tailwind CSS ofreció mayor flexibilidad y control sobre el diseño
          visual.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week3
