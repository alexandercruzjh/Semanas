import WeekLayout from '../components/WeekLayout.jsx'

function Week11() {
  return (
    <WeekLayout currentWeek={11} eyebrow="Semana 11" title="Introducción a Django">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Arquitectura MTV, Vistas, Plantillas y Modelos en Django</h2>
            <p className="section-subtitle">
              Primeros pasos con el framework de desarrollo rápido de Python.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se introdujo Django, un framework web robusto y de alto nivel.
          Se comparó el patrón tradicional MVC (Modelo-Vista-Controlador) con el patrón MTV (Modelo-Template-Vista)
          propio de Django. Se estudió el proceso de instalación, la gestión de proyectos mediante la terminal,
          la estructura interna generada en la línea de comandos y las opciones de integración con servidores web.
        </p>
        <p>
          Se abordaron tres componentes fundamentales de la arquitectura:
          la gestión de URLs y creación de Vistas (tanto basadas en funciones como basadas en clases),
          el motor de Plantillas de Django (usando herencia de bloques, filtros y etiquetas personalizadas),
          y el ORM de Django para definir Modelos, tipos de campos de base de datos y realizar consultas (QuerySets).
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
          Como evidencia de aprendizaje, se desarrolló un proyecto base implementando vistas, plantillas
          y modelos con Django, disponible en el siguiente repositorio de GitHub:
        </p>
        <p>
          <a
            className="doc-link"
            href="https://github.com/alexandercruzjh/Django"
            target="_blank"
            rel="noreferrer"
          >
            Repositorio GitHub: Django
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
          Django promueve el principio DRY (Don't Repeat Yourself) y acelera el desarrollo
          gracias a sus herramientas integradas de ORM y enrutamiento.
        </p>
        <p>
          La estructura de plantillas con herencia modular facilita mantener una interfaz coherente.
          A su vez, comprender el funcionamiento de los QuerySets y el mapeo de base de datos a objetos
          permite interactuar de forma segura y eficiente con los modelos de datos de la aplicación.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week11
