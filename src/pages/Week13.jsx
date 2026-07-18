import WeekLayout from '../components/WeekLayout.jsx'

function Week13() {
  return (
    <WeekLayout currentWeek={13} eyebrow="Semana 13" title="Diseño de APIs RESTful">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Diseño y Construcción de APIs RESTful con Django REST Framework</h2>
            <p className="section-subtitle">
              Serialización, enrutamiento, paginación, filtros y seguridad en APIs.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se profundizó en la arquitectura REST y los principios para el diseño de interfaces de programación de aplicaciones
          (APIs) modernas, analizando conceptos avanzados como las APIs de Hipermedios y HATEOAS. Se utilizó Django REST Framework (DRF)
          para llevar a cabo la serialización de modelos y la conversión de diferentes fuentes de datos a formatos estándar como JSON.
        </p>
        <p>
          Se estudiaron e implementaron mecanismos esenciales en el desarrollo de APIs públicas y privadas, tales como el filtrado de búsquedas,
          la paginación de resultados y las políticas de límites de uso temporal (throttling). Asimismo, se configuraron ruteadores automáticos (Routers),
          conjuntos de vistas (ViewSets) y se abordaron aspectos de seguridad y compatibilidad en peticiones asíncronas, como la gestión de tokens CSRF
          y el intercambio de recursos de origen cruzado (CORS).
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
          Como evidencia de aprendizaje, se desarrolló una API RESTful interactiva integrada con Django y documentada
          en el siguiente repositorio de GitHub:
        </p>
        <p>
          <a
            className="doc-link"
            href="https://github.com/alexandercruzjh/s13-API"
            target="_blank"
            rel="noreferrer"
          >
            Repositorio GitHub: s13-API
          </a>
        </p>
        <p className="muted">Ver Código Fuente</p>
      </section>

      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Reflexión</h2>
            <p className="section-subtitle">Conclusiones y aprendizajes.</p>
          </div>
        </div>
        <p>
          Las APIs RESTful constituyen el estándar de facto para la comunicación entre aplicaciones desacopladas,
          permitiendo conectar backends de Django con clientes modernos hechos en React u otras plataformas.
        </p>
        <p>
          El uso de serializadores y ViewSets simplifica drásticamente el desarrollo de endpoints estandarizados. Además,
          comprender el flujo de CORS y la autenticación es vital para asegurar que la API se exponga correctamente y de forma
          controlada frente a solicitudes externas.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week13
