import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/Guia_Practica_Semana_6.pdf'

function Week6() {
  return (
    <WeekLayout currentWeek={6} eyebrow="Semana 6" title="Framework JS: Eventos y Consumo de APIs">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Interacción dinámica y comunicación con servicios web</h2>
            <p className="section-subtitle">
              Eventos en JavaScript y consumo de APIs REST.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          En esta semana se estudiaron los eventos en JavaScript y su
          importancia para gestionar la interacción del usuario dentro de
          aplicaciones web dinámicas. Asimismo, se trabajó con el consumo de
          APIs REST mediante herramientas como fetch y axios.
        </p>
        <p>
          Estos conocimientos permitieron comprender cómo integrar servicios
          externos y manipular datos en tiempo real dentro de aplicaciones
          modernas.
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
          Como evidencia de aprendizaje, se desarrolló un informe acompañado
          de una página web y repositorio en GitHub:
        </p>
        <p>
          <a
            className="doc-link"
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            Informe_Eventos_APIs.pdf
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
          La integración de APIs es un elemento clave en el desarrollo de
          aplicaciones web actuales.
        </p>
        <p>
          Esta experiencia permitió comprender cómo los eventos mejoran la
          interacción con el usuario y cómo las APIs REST posibilitan la
          conexión con servicios externos, ampliando considerablemente las
          capacidades de una aplicación web.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week6
