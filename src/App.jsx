import { Link, Route, Routes } from 'react-router-dom'
import Week1 from './pages/Week1.jsx'
import Week2 from './pages/Week2.jsx'
import Week3 from './pages/Week3.jsx'
import Week4 from './pages/Week4.jsx'
import Week5 from './pages/Week5.jsx'
import Week6 from './pages/Week6.jsx'
import Week7 from './pages/Week7.jsx'
import Week8 from './pages/Week8.jsx'
import Week9 from './pages/Week9.jsx'
import Week10 from './pages/Week10.jsx'
import Week11 from './pages/Week11.jsx'
import Week12 from './pages/Week12.jsx'
import Week13 from './pages/Week13.jsx'
import Week14 from './pages/Week14.jsx'
import Week15 from './pages/Week15.jsx'

const weeks = [
  { number: 1, title: 'Fundamentos Web', path: '/semana-1', component: <Week1 /> },
  { number: 2, title: 'Diseño de Interfaces (UI/UX)', path: '/semana-2', component: <Week2 /> },
  { number: 3, title: 'Bootstrap y Tailwind CSS', path: '/semana-3', component: <Week3 /> },
  { number: 4, title: 'JavaScript y TypeScript', path: '/semana-4', component: <Week4 /> },
  { number: 5, title: 'Framework JS (React)', path: '/semana-5', component: <Week5 /> },
  { number: 6, title: 'Framework JS: Eventos y Consumo de APIs', path: '/semana-6', component: <Week6 /> },
  { number: 7, title: 'React Hooks', path: '/semana-7', component: <Week7 /> },
  { number: 8, title: 'Consolidado', path: '/semana-8', component: <Week8 /> },
  { number: 9, title: 'Tecnología Web Backend', path: '/semana-9', component: <Week9 /> },
  { number: 10, title: 'Lenguaje Python', path: '/semana-10', component: <Week10 /> },
  { number: 11, title: 'Introducción a Django', path: '/semana-11', component: <Week11 /> },
  { number: 12, title: 'Gestión de formularios', path: '/semana-12', component: <Week12 /> },
  { number: 13, title: 'Diseño de APIs RESTful', path: '/semana-13', component: <Week13 /> },
  { number: 14, title: 'Microservicios en Django', path: '/semana-14', component: <Week14 /> },
  { number: 15, title: 'Sistema Académico Integral', path: '/semana-15', component: <Week15 /> },
]

function App() {
  return (
    <main className="app">
      <Routes>
        <Route
          path="/"
          element={
            <section className="home-container">
              <header className="home-header">
                <h1>Bitácora de Aprendizaje</h1>
                <p>Explora el desarrollo de proyectos y conceptos clave de la Semana 1 a la 15.</p>
              </header>
              <div className="weeks-grid">
                {weeks.map((week) => (
                  <Link key={week.number} to={week.path} className="week-card">
                    <span className="week-card-number">Semana {week.number}</span>
                    <h3 className="week-card-title">{week.title}</h3>
                    <span className="week-card-action">Ver contenido</span>
                  </Link>
                ))}
              </div>
            </section>
          }
        />
        {weeks.map((week) => (
          <Route key={week.number} path={week.path} element={week.component} />
        ))}
        <Route
          path="*"
          element={
            <section className="not-found">
              <h1>Ruta no encontrada</h1>
              <Link to="/" className="back-button">Volver al inicio</Link>
            </section>
          }
        />
      </Routes>
    </main>
  )
}

export default App
