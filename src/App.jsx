import { Link, Route, Routes } from 'react-router-dom'
import Week1 from './pages/Week1.jsx'
import Week2 from './pages/Week2.jsx'
import Week3 from './pages/Week3.jsx'
import Week4 from './pages/Week4.jsx'
import Week5 from './pages/Week5.jsx'
import Week6 from './pages/Week6.jsx'
import Week7 from './pages/Week7.jsx'

const weeks = [
  { number: 1, path: '/semana-1', component: <Week1 /> },
  { number: 2, path: '/semana-2', component: <Week2 /> },
  { number: 3, path: '/semana-3', component: <Week3 /> },
  { number: 4, path: '/semana-4', component: <Week4 /> },
  { number: 5, path: '/semana-5', component: <Week5 /> },
  { number: 6, path: '/semana-6', component: <Week6 /> },
  { number: 7, path: '/semana-7', component: <Week7 /> },
]

function App() {
  return (
    <main className="app">
      <Routes>
        <Route
          path="/"
          element={
            <section className="home">
              <h1>Semanas 1 a 7</h1>
              <p>Selecciona una semana para ver el contenido.</p>
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
              <Link to="/">Volver al inicio</Link>
            </section>
          }
        />
      </Routes>
    </main>
  )
}

export default App
