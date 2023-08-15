import { Offcanvas, OffcanvasHeader, OffcanvasBody, NavLink } from 'reactstrap'
import { HashLink } from 'react-router-hash-link'

const OffCanvas = (props) => {
  const hashLinkStyle = {
    textDecoration: 'none',
    color: 'black'
  }

  return (
    <Offcanvas
      direction="top"
      isOpen={props.topNav}
      toggle={props.toggleNav}
      returnFocusAfterClose={false}
    >
      <OffcanvasHeader toggle={props.toggleNav}></OffcanvasHeader>
      <OffcanvasBody
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <HashLink
          to="#about-me"
          style={hashLinkStyle}
          onClick={props.toggleNav}
        >
          About Me
        </HashLink>
        <HashLink
          to="#projects"
          style={hashLinkStyle}
          onClick={props.toggleNav}
        >
          Projects
        </HashLink>
        <HashLink to="#contact" style={hashLinkStyle} onClick={props.toggleNav}>
          Contact
        </HashLink>
      </OffcanvasBody>
    </Offcanvas>
  )
}

export default OffCanvas
