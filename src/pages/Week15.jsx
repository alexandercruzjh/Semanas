import WeekLayout from '../components/WeekLayout.jsx'

function Week15() {
  return (
    <WeekLayout currentWeek={15} eyebrow="Semana 15" title="Sistema Académico Integral">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Proyecto Integrador Final: Sistema Académico Distribuido</h2>
            <p className="section-subtitle">
              Integración de Frontend, Backend, APIs y Arquitectura de Microservicios.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana final se llevó a cabo el desarrollo y consolidación del proyecto integrador:
          un Sistema Académico Integral. En este proyecto se consolidaron todos los conocimientos adquiridos a lo largo de las 15 semanas,
          abarcando desde el diseño responsivo de la interfaz de usuario hasta la orquestación distribuida del backend.
        </p>
        <p>
          El sistema implementa una arquitectura modular basada en microservicios independientes, comunicados a través de APIs RESTful,
          con bases de datos desacopladas para gestionar notas, usuarios, cursos y matrículas, ofreciendo una solución moderna, robusta y escalable.
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
          Como evidencia integradora final del curso, se desarrolló el código fuente completo del Sistema Académico Integral,
          disponible en el siguiente repositorio de GitHub:
        </p>
        <p>
          <a
            className="doc-link"
            href="https://github.com/SwodLore/sistema_academico_integral"
            target="_blank"
            rel="noreferrer"
          >
            Repositorio GitHub: sistema_academico_integral
          </a>
        </p>
        <p className="muted">Ver Código Fuente del Proyecto</p>
      </section>

      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Reflexión</h2>
            <p className="section-subtitle">Conclusiones y aprendizajes del curso.</p>
          </div>
        </div>
        <p>
          El desarrollo de un sistema de gran escala requiere una planificación rigurosa de la arquitectura de software
          y una correcta delimitación de responsabilidades entre el Frontend y el Backend.
        </p>
        <p>
          Este proyecto integrador demostró la viabilidad de utilizar microservicios independientes y APIs RESTful
          para resolver problemas complejos del mundo real. La experiencia adquirida en el diseño de interfaces responsivas,
          el manejo de estados con React, la implementación de servicios robustos con Django y el despliegue distribuido de contenedores
          forma el perfil ideal para un desarrollador full-stack moderno.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week15
