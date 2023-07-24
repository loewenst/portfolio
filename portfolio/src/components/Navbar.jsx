import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'

const NavBar = (props) => {
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
        <NavLink style={{ paddingLeft: '10px' }}>About Me</NavLink>
        <NavLink style={{ paddingLeft: '10px' }}>Projects</NavLink>
        <NavLink style={{ paddingLeft: '10px' }}>Contact</NavLink>
      </div>
      <NavbarToggler
        onClick={props.toggleNav}
        id="toggler"
        style={{ display: `inline`, marginRight: '32px' }}
      />
    </Navbar>
  )
}

export default NavBar
