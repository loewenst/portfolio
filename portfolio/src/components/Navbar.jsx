import { useState } from 'react'
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
          <img
            src="https://i.imgur.com/x66YOBs.png"
            alt="DL"
            style={{ height: '8vh' }}
          />
        </NavbarBrand>
        <NavLink
          style={{ paddingLeft: '10px', display: `${checkSizeTopBar()}` }}
        >
          About Me
        </NavLink>
        <NavLink
          style={{ paddingLeft: '10px', display: `${checkSizeTopBar()}` }}
        >
          Projects
        </NavLink>
        <NavLink
          style={{ paddingLeft: '10px', display: `${checkSizeTopBar()}` }}
        >
          Contact
        </NavLink>
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
