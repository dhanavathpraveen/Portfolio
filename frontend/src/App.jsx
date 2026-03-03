import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Projectsmain from './projects/Projectsmain.jsx'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projectsmain />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
