import { Offcanvas, OffcanvasHeader, OffcanvasBody, NavLink } from 'reactstrap'

const OffCanvas = (props) => {
  return (
    <Offcanvas direction="top" isOpen={props.topNav} toggle={props.toggleNav}>
      <OffcanvasHeader toggle={props.toggleNav}></OffcanvasHeader>
      <OffcanvasBody
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <NavLink>About Me</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </OffcanvasBody>
    </Offcanvas>
  )
}

export default OffCanvas
