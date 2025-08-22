import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Header.css'

type Item = { label: string; to: string }
type Group = { label: string; to?: string; items?: Item[] }

const NAV: Group[] = [
  {
    label: 'Ingeniería',
    items: [
      { label: 'Ingeniería', to: '/engineering' },
      { label: 'Arduino', to: '/arduino' },
      { label: 'ESP32', to: '/esp32' },
      { label: 'Formularios', to: '/forms' },
      { label: 'Calculadoras', to: '/calculators' },
    ],
  },
  {
    label: 'Informática',
    items: [
      { label: 'Informática', to: '/it' },
      { label: 'Raspberry / Linux', to: '/raspberry' },
      { label: 'Programación', to: '/dev' },
    ],
  },
  {
    label: 'Diseño',
    items: [
      { label: 'Impresión 3D', to: '/3d-printing' },
      { label: 'Electrónica', to: '/electronics' },
      { label: 'Diseño', to: '/design' },
      { label: 'Proyectos', to: '/projects' },
    ],
  },
  {
    label: 'Cursos',
    items: [
      { label: 'Cursos', to: '/courses' },
      { label: 'CheatSheets', to: '/cheatsheets' },
      { label: 'Desde cero', to: '/from-zero' },
      { label: 'Roadmaps', to: '/roadmaps' },
      { label: 'Quizs', to: '/quizzes' },
    ],
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)           // menú móvil
  const [lang, setLang] = useState<'ES' | 'EN'>('ES')

  // Cerrar el menú móvil al cambiar de tamaño a escritorio
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 960) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="ll-header">
      <div className="ll-topbar">
        <button
          className="ll-burger"
          aria-label="Abrir menú"
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <NavLink to="/" className="ll-brand">albertolh</NavLink>

        <div className="ll-actions">
          <button className="ll-search" aria-label="Buscar (Ctrl+k)">
            Ctrl + k
          </button>
          <div className="ll-lang" role="group" aria-label="Idioma">
            <button
              className={lang === 'ES' ? 'active' : ''}
              onClick={() => setLang('ES')}
            >
              ES
            </button>
            <button
              className={lang === 'EN' ? 'active' : ''}
              onClick={() => setLang('EN')}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* NAV DESKTOP */}
      <nav className="ll-nav">
        <ul className="ll-row">
          <li className="ll-item">
            <NavLink to="/" end>Inicio</NavLink>
          </li>

          {NAV.map(group => (
            <li key={group.label} className="ll-item ll-has-sub">
              <button className="ll-trigger" aria-haspopup="true" aria-expanded="false">
                {group.label}
              </button>
              <div className="ll-submenu" role="menu">
                {(group.items ?? []).map(it => (
                  <NavLink key={it.to} to={it.to} role="menuitem">
                    {it.label}
                  </NavLink>
                ))}
              </div>
            </li>
          ))}

          <li className="ll-item">
            <NavLink to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </nav>

      {/* NAV MÓVIL */}
      <nav className={`ll-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          <li><NavLink to="/" end onClick={() => setOpen(false)}>Inicio</NavLink></li>
          {NAV.map(g => (
            <li key={g.label}>
              <details>
                <summary>{g.label}</summary>
                <div className="ll-drawer-group">
                  {(g.items ?? []).map(it => (
                    <NavLink key={it.to} to={it.to} onClick={() => setOpen(false)}>
                      {it.label}
                    </NavLink>
                  ))}
                </div>
              </details>
            </li>
          ))}
          <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contacto</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
