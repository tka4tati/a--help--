import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavItem({path,text}) {
  return (
     <NavDropdown.Item href={path}>{text}</NavDropdown.Item>
  )
}

export default NavItem