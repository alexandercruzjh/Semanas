import { Link } from 'react-router-dom'

const weeksList = [
  { number: 1, label: 'Semana 1', subtitle: 'Fundamentos Web', path: '/semana-1' },
  { number: 2, label: 'Semana 2', subtitle: 'Diseño de Interfaces (UI/UX)', path: '/semana-2' },
  { number: 3, label: 'Semana 3', subtitle: 'Bootstrap y Tailwind CSS', path: '/semana-3' },
  { number: 4, label: 'Semana 4', subtitle: 'JavaScript y TypeScript', path: '/semana-4' },
  { number: 5, label: 'Semana 5', subtitle: 'Framework JS (React)', path: '/semana-5' },
  { number: 6, label: 'Semana 6', subtitle: 'Framework JS: Eventos y Consumo de APIs', path: '/semana-6' },
  { number: 7, label: 'Semana 7', subtitle: 'React Hooks', path: '/semana-7' },
  { number: 8, label: 'Semana 8', subtitle: 'Consolidado', path: '/semana-8' },
  { number: 9, label: 'Semana 9', subtitle: 'Tecnología Web Backend', path: '/semana-9' },
  { number: 10, label: 'Semana 10', subtitle: 'Lenguaje Python', path: '/semana-10' },
  { number: 11, label: 'Semana 11', subtitle: 'Introducción a Django', path: '/semana-11' },
  { number: 12, label: 'Semana 12', subtitle: 'Gestión de formularios', path: '/semana-12' },
  { number: 13, label: 'Semana 13', subtitle: 'Diseño de APIs RESTful', path: '/semana-13' },
  { number: 14, label: 'Semana 14', subtitle: 'Microservicios en Django', path: '/semana-14' },
  { number: 15, label: 'Semana 15', subtitle: 'Sistema Académico Integral', path: '/semana-15' },
]

export default function WeekLayout({ currentWeek, eyebrow, title, children }) {
  return (
    <section className="week-page">
      <Link to="https://portafolio-demo-eight.vercel.app/" className="back-button">
        Volver al inicio
      </Link>

      <div className="week-layout">
        <div className="week-main">
          <header className="week-hero">
            <div>
              <p className="week-eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
            </div>
          </header>
          {children}
        </div>

        <aside className="week-aside">
          <div className="week-nav-card">
            <p className="week-nav-title">Navegación por semanas</p>
            <div className="week-nav-list">
              {weeksList.map((week) => (
                <Link
                  key={week.number}
                  to={week.path}
                  className={`week-nav-item ${currentWeek === week.number ? 'is-active' : ''}`}
                  aria-current={currentWeek === week.number ? 'page' : undefined}
                >
                  <span className="week-nav-label">{week.label}</span>
                  <span className="week-nav-subtitle">{week.subtitle}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
