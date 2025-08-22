// src/pages/Course.tsx
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'

export default function Course() {
  const { slug } = useParams<{ slug: string }>()
  const course = courses.find((c) => c.slug === slug)

  useEffect(() => {
    // Asegura que la página empieza arriba al cambiar de curso
    window.scrollTo(0, 0)
  }, [slug])

  if (!course) {
    return (
      <main style={{ maxWidth: 880, margin: '0 auto', padding: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>Curso no encontrado</h1>
        <p style={{ marginTop: 8 }}>
          Revisa la URL o vuelve a <Link to="/courses">Cursos</Link>.
        </p>
      </main>
    )
  }

  return (
    <main style={{ margin: 0, padding: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '12px 16px' }}>
        <Link to="/courses">← Volver a cursos</Link>
        <h1 style={{ fontSize: 24, marginTop: 8 }}>{course.title}</h1>
      </div>

      {/* Incrusta el export de eXeLearning */}
      <iframe
        src={course.path}           // ej: /exe/ai-governance/index.html
        title={course.title}
        style={{ width: '100%', minHeight: '100vh', border: 0 }}
      />
    </main>
  )
}
