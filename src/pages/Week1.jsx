import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/Infografía Funcionamiento de la WEB.pdf'

function Week1() {
  return (
    <WeekLayout currentWeek={1} eyebrow="Semana 1" title="Fundamentos Web">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Arquitectura, protocolos y funcionamiento de Internet</h2>
            <p className="section-subtitle">
              Fundamentos que explican el flujo cliente-servidor y DNS.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se estudiaron los principios fundamentales de
          Internet y de la World Wide Web, comprendiendo cómo interactúan los
          navegadores y servidores mediante los protocolos HTTP y HTTPS.
          También se analizó el recorrido que sigue una solicitud desde el
          cliente hasta el servidor, incluyendo el proceso de resolución de
          nombres de dominio a través de DNS.
        </p>
        <p>
          El análisis de estos conceptos permitió comprender la base técnica
          sobre la que funcionan las aplicaciones web modernas y la importancia
          de la infraestructura de red en el desarrollo full-stack y la
          seguridad informática.
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
          Como evidencia de aprendizaje, se desarrolló una infografía
          explicativa sobre el funcionamiento interno de la web:
        </p>
        <p>
          <a className="doc-link" href={pdfUrl} target="_blank" rel="noreferrer">
            Infografía Funcionamiento de la WEB.pdf
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
          Comprender el funcionamiento interno de la web es esencial antes de
          desarrollar cualquier aplicación.
        </p>
        <p>
          Esta actividad permitió fortalecer conocimientos fundamentales sobre
          el flujo de información en Internet, ayudando a entender cómo se
          comunican los distintos componentes de una arquitectura web. Además,
          facilitó reconocer la relevancia de optimizar el rendimiento y aplicar
          medidas de seguridad desde las capas más básicas de la red.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week1
