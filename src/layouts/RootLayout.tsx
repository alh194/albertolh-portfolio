import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function RootLayout() {
  return (
    <>
      <Header />
      <div style={{minHeight:'calc(100vh - 120px)'}}>
        <Outlet />
      </div>
      <footer style={{borderTop:'1px solid #e5e7eb', padding:16, textAlign:'center'}}>
        © {new Date().getFullYear()} Alberto LH
      </footer>
    </>
  )
}
