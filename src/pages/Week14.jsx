import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/semana 14.pdf'

function Week14() {
  return (
    <WeekLayout currentWeek={14} eyebrow="Semana 14" title="Microservicios en Django">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Arquitectura de Microservicios, Docker, Kubernetes y Contenedores</h2>
            <p className="section-subtitle">
              Diseño, comunicación, despliegue, seguridad y escalado de microservicios.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se exploró la arquitectura de microservicios como alternativa a las arquitecturas monolíticas.
          Se analizó la configuración de la infraestructura y el diseño y construcción de un primer microservicio utilizando Django.
          Se profundizaron conceptos clave sobre la comunicación entre servicios (síncrona y asíncrona) y la gestión descentralizada de bases de datos.
        </p>
        <p>
          Además, se cubrieron los procesos de contenedorización con Docker y la orquestación de contenedores mediante Kubernetes.
          Por último, se abordó la protección de microservicios (autenticación distribuida y gateways), así como los esquemas de monitoreo,
          trazabilidad y escalado automático de instancias.
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
          Como evidencia de aprendizaje, se documentó el desarrollo y consumo práctico de los microservicios
          en el siguiente informe:
        </p>
        <p>
          <a className="doc-link" href={pdfUrl} target="_blank" rel="noreferrer">
            semana 14.pdf
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
          Transicionar de un monolito a microservicios ofrece grandes ventajas de escalabilidad y tolerancia a fallos,
          pero incrementa la complejidad del sistema y requiere una sólida estrategia de DevOps.
        </p>
        <p>
          Herramientas como Docker y Kubernetes facilitan que cada microservicio sea independiente en su entorno de ejecución.
          Aprender a intercomunicar y asegurar estos servicios de forma distribuida es indispensable para desarrollar
          plataformas modernas preparadas para altos volúmenes de tráfico.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week14
