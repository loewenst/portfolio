import { HashLink } from 'react-router-hash-link'
import { Navbar, NavbarBrand, NavLink, NavbarToggler } from 'reactstrap'
import { useMediaQuery } from 'react-responsive'

const NavBar = (props) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 550px)' })
  const checkSizeTopBar = () => {
    if (isSmallScreen) {
      return 'none'
    } else {
      return 'block'
    }
  }
  const checkSizeSideBar = () => {
    if (isSmallScreen) {
      return 'inline'
    } else {
      return 'none'
    }
  }

  const hashLinkStyle = {
    paddingLeft: '10px',
    display: `${checkSizeTopBar()}`,
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <Navbar>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          alignItems: 'center',
          padding: '10px',
          margin: '10px'
        }}
      >
        <NavbarBrand>
          <HashLink to="/">
            <img
              src="https://i.imgur.com/x66YOBs.png"
              alt="DL"
              style={{ height: '8vh' }}
            />
          </HashLink>
        </NavbarBrand>
        <HashLink to="#about-me" style={hashLinkStyle}>
          About Me
        </HashLink>
        <HashLink to="#projects" style={hashLinkStyle}>
          Projects
        </HashLink>
        <HashLink to="#contact" style={hashLinkStyle}>
          Contact
        </HashLink>
      </div>
      <NavbarToggler
        onClick={props.toggleNav}
        id="toggler"
        style={{ display: `${checkSizeSideBar()}`, marginRight: '32px' }}
      />
    </Navbar>
  )
}

export default NavBar
