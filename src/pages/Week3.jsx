import { Link } from 'react-router-dom'

function Week3() {
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
              <p className="week-eyebrow">Semana 3</p>
              <h1>Bootstrap y Tailwind CSS</h1>
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
                <h2>Frameworks CSS para el desarrollo web moderno</h2>
                <p className="section-subtitle">
                  Bootstrap y Tailwind CSS para interfaces responsivas.
                </p>
              </div>
            </div>
            <h3 className="section-kicker">Descripcion del Tema</h3>
            <p>
              Durante esta semana se trabajo con Bootstrap y Tailwind CSS,
              analizando sus enfoques y metodologias para la construccion de
              interfaces responsivas.
            </p>
            <p>
              Bootstrap fue estudiado como un framework basado en componentes
              predefinidos y sistemas de rejilla, mientras que Tailwind CSS
              destaco por su enfoque basado en clases utilitarias y alta capacidad
              de personalizacion.
            </p>
            <p>
              El uso de ambos frameworks permitio comprender como acelerar el
              desarrollo de interfaces modernas y adaptables a distintos
              dispositivos.
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
            <h3 className="section-kicker">Entregable</h3>
            <p>
              Como evidencia de aprendizaje, se elaboro un informe acompanado de
              una pagina web y su respectivo repositorio en GitHub:
            </p>
            <p>
              <a
                className="doc-link"
                href="/pdf/Informe_Bootstrap_Tailwind.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Informe_Bootstrap_Tailwind.pdf
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
              Los frameworks CSS facilitan el desarrollo de interfaces responsivas
              y optimizan los tiempos de implementacion.
            </p>
            <p>
              Esta actividad permitio identificar las ventajas y limitaciones de
              Bootstrap y Tailwind CSS. Bootstrap demostro ser eficiente para
              desarrollos rapidos con componentes listos para usar, mientras que
              Tailwind CSS ofrecio mayor flexibilidad y control sobre el diseno
              visual.
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
              <Link
                to="/semana-3"
                className="week-nav-item is-active"
                aria-current="page"
              >
                <span className="week-nav-label">Semana 3</span>
                <span className="week-nav-subtitle">Bootstrap y Tailwind CSS</span>
              </Link>
              <Link to="/semana-4" className="week-nav-item">
                <span className="week-nav-label">Semana 4</span>
                <span className="week-nav-subtitle">JavaScript y TypeScript</span>
              </Link>
              <Link to="/semana-5" className="week-nav-item">
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

export default Week3
