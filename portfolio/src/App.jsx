import { useState } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import NavBar from './components/Navbar'
import Banner from './components/Banner'
import './App.css'
import { Offcanvas } from 'reactstrap'
import OffCanvas from './components/OffCanvas'
function App() {
  const [topNav, setTopNav] = useState(false)

  const toggleNav = () => {
    setTopNav(!topNav)
  }

  return (
    <div>
      <NavBar toggleNav={toggleNav} />
      <OffCanvas topNav={topNav} toggleNav={toggleNav} />
      <Banner />

      <br />

      <About />
      <br />
      <Projects />
    </div>
  )
}

export default App
