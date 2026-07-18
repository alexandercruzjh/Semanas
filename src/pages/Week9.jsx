import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/semana 9.pdf'

function Week9() {
  return (
    <WeekLayout currentWeek={9} eyebrow="Semana 9" title="Tecnología Web Backend">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Arquitectura y Tecnologías del Servidor (Server-Side)</h2>
            <p className="section-subtitle">
              Servidores web, ciclo de solicitud-respuesta y desarrollo backend.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se dio inicio al estudio de las tecnologías Backend,
          comprendiendo la arquitectura cliente-servidor desde la perspectiva del servidor.
          Se analizaron temas como el funcionamiento del Server-Side, la configuración
          de servidores web y la diferencia entre lenguajes interpretados y compilados.
        </p>
        <p>
          Además, se exploraron dos entornos clásicos e importantes en la historia
          de la web: el desarrollo de aplicaciones web con PHP y con JSP (JavaServer Pages),
          entendiendo cómo procesan datos y generan código HTML de manera dinámica en el servidor.
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
          Como evidencia de aprendizaje, se realizó el despliegue práctico de aplicaciones
          web backend utilizando PHP y JSP, documentado en la guía correspondiente:
        </p>
        <p>
          <a className="doc-link" href={pdfUrl} target="_blank" rel="noreferrer">
            semana 9.pdf
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
          Comprender el procesamiento del lado del servidor permite diseñar aplicaciones
          más seguras, centralizando la lógica de negocio y la gestión de datos.
        </p>
        <p>
          El desarrollo de este laboratorio brindó una perspectiva práctica sobre cómo
          los servidores web despachan recursos dinámicos e interactúan con peticiones HTTP.
          Comparar los enfoques de PHP y JSP fortaleció la capacidad para elegir la pila
          de tecnologías adecuada según los requerimientos del proyecto.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week9
