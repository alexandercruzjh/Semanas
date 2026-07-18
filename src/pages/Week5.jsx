import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/Guia_Practica_Semana_5.pdf'
import groupPdfUrl from '../assets/pdf/Semana 5 - P_grupal.pdf'

function Week5() {
  return (
    <WeekLayout currentWeek={5} eyebrow="Semana 5" title="Framework JS (React)">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Desarrollo de aplicaciones web modernas con React</h2>
            <p className="section-subtitle">
              Componentes, estado y arquitectura basada en componentes.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se trabajó con React, explorando conceptos
          fundamentales como componentes, props, estado y ciclo de vida. Se
          analizó cómo este framework permite construir interfaces dinámicas y
          reutilizables mediante una arquitectura basada en componentes.
        </p>
        <p>
          Adicionalmente, se desarrolló un trabajo grupal enfocado en HTML5,
          CSS3, XML, diseño responsivo y SEO, integrando los conocimientos
          adquiridos en un entorno colaborativo.
        </p>
      </section>

      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Ejercicio / Resultado</h2>
            <p className="section-subtitle">Evidencia de aprendizaje.</p>
          </div>
        </div>
        <h3 className="section-kicker">Ejercicio 1 Individual / Resultado</h3>
        <p>
          Como evidencia individual, se desarrolló un informe acompañado de
          una página web y repositorio en GitHub:
        </p>
        <p>
          <a
            className="doc-link"
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            Informe_Framework_JS.pdf
          </a>
        </p>
        <p className="muted">Ver Documento</p>
        <h3 className="section-kicker">Ejercicio 2 Grupal / Resultado</h3>
        <p>
          Como evidencia grupal, se elaboró un informe relacionado con HTML5,
          XML, CSS3, Flexbox/Grid, Diseño Responsivo y SEO:
        </p>
        <p>
          <a
            className="doc-link"
            href={groupPdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            Informe_Grupal_Semana05.pdf
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
          React transformó la forma de desarrollar aplicaciones web modernas
          gracias a su arquitectura basada en componentes.
        </p>
        <p>
          Esta actividad permitió comprender cómo React facilita la creación de
          interfaces complejas de manera modular y reutilizable. Además, el
          trabajo colaborativo fortaleció habilidades de comunicación,
          coordinación y gestión de proyectos, competencias esenciales en el
          desarrollo de software.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week5
