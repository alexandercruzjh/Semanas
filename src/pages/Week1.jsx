import { Link } from 'react-router-dom'
import pdfUrl from '../assets/pdf/Infografía Funcionamiento de la WEB.pdf'

function Week1() {
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
              <p className="week-eyebrow">Semana 1</p>
              <h1>Fundamentos Web</h1>
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
                <h2>Arquitectura, protocolos y funcionamiento de Internet</h2>
                <p className="section-subtitle">
                  Fundamentos que explican el flujo cliente-servidor y DNS.
                </p>
              </div>
            </div>
            <h3 className="section-kicker">Descripcion del Tema</h3>
            <p>
              Durante esta semana se estudiaron los principios fundamentales de
              Internet y de la World Wide Web, comprendiendo como interactuan los
              navegadores y servidores mediante los protocolos HTTP y HTTPS.
              Tambien se analizo el recorrido que sigue una solicitud desde el
              cliente hasta el servidor, incluyendo el proceso de resolucion de
              nombres de dominio a traves de DNS.
            </p>
            <p>
              El analisis de estos conceptos permitio comprender la base tecnica
              sobre la que funcionan las aplicaciones web modernas y la importancia
              de la infraestructura de red en el desarrollo full-stack y la
              seguridad informatica.
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
              Como evidencia de aprendizaje, se desarrollo una infografia
              explicativa sobre el funcionamiento interno de la web:
            </p>
            <p>
              <a className="doc-link" href={pdfUrl} target="_blank" rel="noreferrer">
                Infografia Funcionamiento de la WEB.pdf
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
              Comprender el funcionamiento interno de la web es esencial antes de
              desarrollar cualquier aplicacion.
            </p>
            <p>
              Esta actividad permitio fortalecer conocimientos fundamentales sobre
              el flujo de informacion en Internet, ayudando a entender como se
              comunican los distintos componentes de una arquitectura web. Ademas,
              facilito reconocer la relevancia de optimizar el rendimiento y aplicar
              medidas de seguridad desde las capas mas basicas de la red.
            </p>
          </section>
        </div>

        <aside className="week-aside">
          <div className="week-nav-card">
            <p className="week-nav-title">Navegacion por semanas</p>
            <div className="week-nav-list">
              <Link
                to="/semana-1"
                className="week-nav-item is-active"
                aria-current="page"
              >
                <span className="week-nav-label">Semana 1</span>
                <span className="week-nav-subtitle">Fundamentos Web</span>
              </Link>
              <Link to="/semana-2" className="week-nav-item">
                <span className="week-nav-label">Semana 2</span>
                <span className="week-nav-subtitle">Diseno de Interfaces (UI/UX)</span>
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

export default Week1
