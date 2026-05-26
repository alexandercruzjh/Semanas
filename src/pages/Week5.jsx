import { Link } from 'react-router-dom'

function Week5() {
  return (
    <section className="week-page">
      <Link to="https://portafolio-demo-eight.vercel.app/" className="back-button">
        <svg className="back-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M14.5 5.5L8 12l6.5 6.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Volver al inicio
      </Link>

      <div className="week-layout">
        <div className="week-main">
          <header className="week-hero">
            <div>
              <p className="week-eyebrow">Semana 5</p>
              <h1>Framework JS (React)</h1>
            </div>
          </header>

          <section className="week-section">
            <div className="section-title">
              <span className="section-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M3 12h18M12 3a9 9 0 000 18M12 3a9 9 0 010 18M5 8h14M5 16h14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h2>Desarrollo de aplicaciones web modernas con React</h2>
                <p className="section-subtitle">
                  Componentes, estado y arquitectura basada en componentes.
                </p>
              </div>
            </div>
            <h3 className="section-kicker">Descripcion del Tema</h3>
            <p>
              Durante esta semana se trabajo con React, explorando conceptos
              fundamentales como componentes, props, estado y ciclo de vida. Se
              analizo como este framework permite construir interfaces dinamicas y
              reutilizables mediante una arquitectura basada en componentes.
            </p>
            <p>
              Adicionalmente, se desarrollo un trabajo grupal enfocado en HTML5,
              CSS3, XML, diseno responsivo y SEO, integrando los conocimientos
              adquiridos en un entorno colaborativo.
            </p>
          </section>

          <section className="week-section">
            <div className="section-title">
              <span className="section-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 3v6h6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h2>Ejercicio / Resultado</h2>
                <p className="section-subtitle">Evidencia de aprendizaje.</p>
              </div>
            </div>
            <h3 className="section-kicker">Ejercicio 1 Individual / Resultado</h3>
            <p>
              Como evidencia individual, se desarrollo un informe acompanado de
              una pagina web y repositorio en GitHub:
            </p>
            <p>
              <a
                className="doc-link"
                href="/pdf/Informe_Framework_JS.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Informe_Framework_JS.pdf
              </a>
            </p>
            <p className="muted">Ver Documento</p>
            <h3 className="section-kicker">Ejercicio 2 Grupal / Resultado</h3>
            <p>
              Como evidencia grupal, se elaboro un informe relacionado con HTML5,
              XML, CSS3, Flexbox/Grid, Diseno Responsivo y SEO:
            </p>
            <p>
              <a
                className="doc-link"
                href="/pdf/Informe_Grupal_Semana05.pdf"
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
              <span className="section-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M12 3a7 7 0 00-4 12.8V20a1 1 0 001 1h6a1 1 0 001-1v-4.2A7 7 0 0012 3z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 20h6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h2>Reflexion</h2>
                <p className="section-subtitle">Conclusiones y aprendizajes.</p>
              </div>
            </div>
            <p>
              React transformo la forma de desarrollar aplicaciones web modernas
              gracias a su arquitectura basada en componentes.
            </p>
            <p>
              Esta actividad permitio comprender como React facilita la creacion de
              interfaces complejas de manera modular y reutilizable. Ademas, el
              trabajo colaborativo fortalecio habilidades de comunicacion,
              coordinacion y gestion de proyectos, competencias esenciales en el
              desarrollo de software.
            </p>
          </section>
        </div>

        <aside className="week-aside">
          <div className="week-nav-card">
            <p className="week-nav-title">Navegacion por semanas</p>
            <div className="week-nav-list">
              <Link to="/semana-1" className="week-nav-item">
                <span className="week-nav-label">Semana 1</span>
                <span className="week-nav-subtitle">Fundamentos Web</span>
              </Link>
              <Link to="/semana-2" className="week-nav-item">
                <span className="week-nav-label">Semana 2</span>
                <span className="week-nav-subtitle">Diseño de Interfaces (UI/UX)</span>
              </Link>
              <Link to="/semana-3" className="week-nav-item">
                <span className="week-nav-label">Semana 3</span>
                <span className="week-nav-subtitle">Bootstrap y Tailwind CSS</span>
              </Link>
              <Link to="/semana-4" className="week-nav-item">
                <span className="week-nav-label">Semana 4</span>
                <span className="week-nav-subtitle">JavaScript y TypeScript</span>
              </Link>
              <Link
                to="/semana-5"
                className="week-nav-item is-active"
                aria-current="page"
              >
                <span className="week-nav-label">Semana 5</span>
                <span className="week-nav-subtitle">Framework JS (React)</span>
              </Link>
              <Link to="/semana-6" className="week-nav-item">
                <span className="week-nav-label">Semana 6</span>
                <span className="week-nav-subtitle">Framework JS: Eventos y Consumo de APIs</span>
              </Link>
              <Link to="/semana-7" className="week-nav-item">
                <span className="week-nav-label">Semana 7</span>
                <span className="week-nav-subtitle">React Hooks</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Week5
