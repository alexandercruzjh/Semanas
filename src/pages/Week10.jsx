import WeekLayout from '../components/WeekLayout.jsx'
import pdfUrl from '../assets/pdf/semana 10.pdf'

function Week10() {
  return (
    <WeekLayout currentWeek={10} eyebrow="Semana 10" title="Lenguaje Python">
      <section className="week-section">
        <div className="section-title">
          <div>
            <h2>Introducción a Python y Programación Orientada a Objetos</h2>
            <p className="section-subtitle">
              Sintaxis básica, estructuras de datos, control de flujo y OOP avanzada.
            </p>
          </div>
        </div>
        <h3 className="section-kicker">Descripción del Tema</h3>
        <p>
          Durante esta semana se estudió a fondo el lenguaje de programación Python.
          Se analizaron los aspectos sintácticos básicos como la indentación significativa,
          comentarios, variables, cadenas, números y tipos de datos. Se profundizaron estructuras
          como listas, tuplas y diccionarios, además del control de flujo mediante condicionales
          y bucles.
        </p>
        <p>
          Asimismo, se abordó la Programación Orientada a Objetos (POO) en Python, estudiando
          conceptos clave como clases, atributos e instancias, métodos de objeto, constructores
          y destructores, herencia múltiple, encapsulamiento, polimorfismo, gestión de excepciones
          y modularización mediante la creación y consumo de módulos.
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
          Como evidencia de aprendizaje, se desarrollaron diversos scripts para poner en práctica
          la sintaxis imperativa y orientada a objetos en Python, documentados en el siguiente archivo:
        </p>
        <p>
          <a className="doc-link" href={pdfUrl} target="_blank" rel="noreferrer">
            semana 10.pdf
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
          La legibilidad y expresividad de Python lo convierten en un lenguaje sumamente productivo
          tanto para principiantes como para desarrolladores experimentados en diversas áreas (web, datos, scripts).
        </p>
        <p>
          El dominio de las estructuras de datos nativas y el paradigma orientado a objetos en Python
          constituye el cimiento requerido para comprender arquitecturas de frameworks modernos como Django
          y diseñar sistemas backend escalables, ordenados y mantenibles.
        </p>
      </section>
    </WeekLayout>
  )
}

export default Week10
