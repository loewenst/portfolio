import { useState } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import NavBar from './components/Navbar'
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
      <div>Hi, I'm Daniel</div>
      <div>Text about me</div>
      <div>photo on the side of these</div>
      <div>carousel with other fun facts</div>
      <div>github linkedin</div>
      <br />

      <About />
      <br />
      <Projects />
    </div>
  )
}

export default App
