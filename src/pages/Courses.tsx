import { Link } from 'react-router-dom'
import { courses } from '../data/courses'

export default function Courses() {
  return (
    <main style={{maxWidth: 880, margin: '0 auto', padding: 24}}>
      <h1>Cursos</h1>
      <ul style={{display:'grid', gap: 16, padding:0, listStyle:'none'}}>
        {courses.map(c => (
          <li key={c.slug} style={{border:'1px solid #ddd', borderRadius:12, padding:16}}>
            <h3 style={{margin:'0 0 6px'}}><Link to={`/courses/${c.slug}`}>{c.title}</Link></h3>
            <p style={{opacity:.8}}>{c.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
