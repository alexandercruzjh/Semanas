import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/semana 12.pdf'

function Week12() {
  return (
    <WeekLayout currentWeek={12} eyebrow="Semana 12" title="Gestión de formularios">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Formularios, Django Admin, Middleware y Sesiones</h2>
            <p className="section-subtitle">
              Validación de datos, administración del sistema y control de acceso.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se profundizaron los mecanismos avanzados de Django para el desarrollo de sistemas web backend robustos.
          Se estudió la creación, renderización y plantilla de formularios, así como el proceso crítico de validación y sanitización
          de datos de usuario utilizando validadores incorporados y limpiezas personalizadas (métodos clean).
        </p>
        <p>
          También se abordó la personalización del panel de administración (Django Admin), incluyendo el registro de modelos,
          la definición de campos calculados y formularios a medida en el panel. Por último, se analizó el funcionamiento del Middleware,
          la gestión de sesiones de usuario y las directivas de autenticación y autorización para restringir vistas e implementar
          políticas de seguridad.
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
          Como evidencia de aprendizaje, se desarrolló un sistema web backend completo con autenticación, formularios
          validados y administración personalizada, detallado en la siguiente guía:
        </p>
        <p>
          <a className="doc-link" href={pdfUrl} target="_blank" rel="noreferrer">
            semana 12.pdf
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
          La seguridad de las aplicaciones web depende fundamentalmente de una validación exhaustiva de los datos
          de entrada en el lado del servidor y del control estricto de las sesiones y permisos.
        </p>
        <p>
          Django proporciona un conjunto de herramientas sumamente potente mediante sus clases Form/ModelForm y su
          sistema de autenticación nativo, lo que reduce la posibilidad de vulnerabilidades comunes y acelera la
          creación de áreas de administración interna seguras.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week12
