import WeekLayout from '../components/WeekLayout.jsx'

function Week2() {
  return (
    <WeekLayout currentWeek={2} eyebrow="Semana 2" title="Diseño de Interfaces (UI/UX)">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>HTML5, XML, CSS3, Flexbox/Grid, Diseño Responsivo y SEO</h2>
            <p className="section-subtitle">
              Maquetación moderna, accesibilidad y rendimiento.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          En esta semana se desarrollaron interfaces web semánticas utilizando
          HTML5 y CSS3, aplicando conceptos de maquetación moderna como Flexbox
          y Grid, además de técnicas de diseño responsivo orientadas a múltiples
          dispositivos.
        </p>
        <p>
          También se abordaron aspectos relacionados con el árbol DOM,
          principios básicos de SEO y compatibilidad entre navegadores,
          comprendiendo la importancia de crear experiencias accesibles y
          optimizadas para el usuario.
        </p>
        <p>
          La práctica se dividió en dos actividades: la primera consistió en
          construir una página web utilizando herramientas de inteligencia
          artificial como apoyo para generar contenido. La segunda actividad se
          enfocó en el desarrollo de una galería de proyectos sin asistencia
          directa de IA, utilizando únicamente conocimientos propios.
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
        <p>Como evidencia de aprendizaje, se desarrollaron dos sitios web:</p>
        <div className="doc-list">
          <a className="doc-link" href="https://github.com/alexandercruzjh/challenge-amigo-secreto-js" target="_blank" rel="noreferrer">
            Practica_individual_IA
          </a>
          <span className="muted">Ver Página</span>
          <a className="doc-link" href="https://github.com/alexandercruzjh/tareas-pendientes" target="_blank" rel="noreferrer">
            Practica_2_sin_IA
          </a>
          <span className="muted">Ver Página</span>
        </div>
      </section>

      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Reflexión</h2>
            <p className="section-subtitle">Conclusiones y aprendizajes.</p>
          </div>
        </div>
        <p>
          Las herramientas de inteligencia artificial complementan el trabajo
          del desarrollador, pero no sustituyen la creatividad ni el criterio
          profesional.
        </p>
        <p>
          Esta experiencia permitió comprender la relevancia de la semántica y
          el diseño adaptable dentro del desarrollo web moderno. Asimismo,
          ayudó a reflexionar sobre el equilibrio entre la automatización y la
          capacidad creativa humana al momento de construir experiencias
          digitales significativas.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week2
