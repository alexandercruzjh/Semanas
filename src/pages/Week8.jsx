import WeekLayout from '../components/WeekLayout.jsx'

function Week8() {
  return (
    <WeekLayout currentWeek={8} eyebrow="Semana 8" title="Consolidado">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Evaluación y Consolidación de Competencias Frontend</h2>
            <p className="section-subtitle">
              Revisión general de la primera mitad del curso.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se llevó a cabo el proceso de consolidación de aprendizajes
          y evaluación intermedia. Se repasaron los conceptos clave abordados en las
          semanas anteriores: desde los fundamentos de la web (HTTP/DNS), el diseño de interfaces
          y la maquetación adaptable con Flexbox, Grid, Bootstrap y Tailwind CSS, hasta la
          lógica interactiva con JavaScript, TypeScript y el desarrollo modular con React y Hooks.
        </p>
        <p>
          Este hito permitió consolidar la base de desarrollo Frontend y asegurar la
          correcta asimilación de buenas prácticas de programación antes de iniciar la
          transición hacia tecnologías del lado del servidor (Backend).
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
          Como evidencia de aprendizaje, se recopilaron las calificaciones y se realizó
          una sesión de feedback personalizado sobre los laboratorios del 1 al 7.
        </p>
        <p className="muted">Evaluación Parcial Completada</p>
      </section>

      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Reflexión</h2>
            <p className="section-subtitle">Conclusiones y aprendizajes.</p>
          </div>
        </div>
        <p>
          Consolidar los conocimientos adquiridos es fundamental para construir una base
          técnica sólida que permita abordar con éxito retos más complejos.
        </p>
        <p>
          Esta semana de evaluación posibilitó identificar oportunidades de mejora,
          reforzar conceptos de arquitectura en componentes de React y comprender la importancia
          de escribir código limpio, documentado y escalable de cara a la segunda mitad
          del curso.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week8
