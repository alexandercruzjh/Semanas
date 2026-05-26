import { Link } from 'react-router-dom'

function Week6() {
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
              <p className="week-eyebrow">Semana 6</p>
              <h1>Framework JS: Eventos y Consumo de APIs</h1>
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
                <h2>Interaccion dinamica y comunicacion con servicios web</h2>
                <p className="section-subtitle">
                  Eventos en JavaScript y consumo de APIs REST.
                </p>
              </div>
            </div>
            <h3 className="section-kicker">Descripcion del Tema</h3>
            <p>
              En esta semana se estudiaron los eventos en JavaScript y su
              importancia para gestionar la interaccion del usuario dentro de
              aplicaciones web dinamicas. Asimismo, se trabajo con el consumo de
              APIs REST mediante herramientas como fetch y axios.
            </p>
            <p>
              Estos conocimientos permitieron comprender como integrar servicios
              externos y manipular datos en tiempo real dentro de aplicaciones
              modernas.
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
              Como evidencia de aprendizaje, se desarrollo un informe acompanado
              de una pagina web y repositorio en GitHub:
            </p>
            <p>
              <a
                className="doc-link"
                href="/pdf/Informe_Eventos_APIs.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Informe_Eventos_APIs.pdf
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
              La integracion de APIs es un elemento clave en el desarrollo de
              aplicaciones web actuales.
            </p>
            <p>
              Esta experiencia permitio comprender como los eventos mejoran la
              interaccion con el usuario y como las APIs REST posibilitan la
              conexion con servicios externos, ampliando considerablemente las
              capacidades de una aplicacion web.
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
              <Link to="/semana-5" className="week-nav-item">
                <span className="week-nav-label">Semana 5</span>
                <span className="week-nav-subtitle">Framework JS (React)</span>
              </Link>
              <Link
                to="/semana-6"
                className="week-nav-item is-active"
                aria-current="page"
              >
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

export default Week6
