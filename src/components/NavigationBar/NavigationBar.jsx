import React, {useState} from 'react'
import './NavigationBar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/Logo.svg';
import Button from 'react-bootstrap/Button';
import NavItem from './NavItem';




export const NavigationBar = () => {
  const [language, setLanguage] = useState("ua")
  return (
    <Navbar fixed="top" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img class="logo" src={logo}/></Navbar.Brand>
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown  title="Про нас" menuVariant="light">
              <NavItem path='/mission' text={"Мета та історія фонду"}/>
              <NavItem path='/team' text={"Команда та партнери"} />
              <NavItem path='/docs' text={"Документація та звітність"} />
            </NavDropdown>
            <NavDropdown  title="Проєкти" menuVariant="light">
              <NavItem path='/current' text={"Поточні"} />
              <NavItem path='/successful' text={"Успішні історії"} /> 
            </NavDropdown>
            <Nav.Link className="contacts" href="/contacts">Контакти</Nav.Link>
            <NavDropdown  title={language === "ua" ? "УКР" : "ENG"} menuVariant="light">
              <NavDropdown.Item onClick={()=>setLanguage("ua")} href="#ua">Українська</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>setLanguage("en")} href="#eng">Англійська</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#helpBlock"> <Button bsPrefix='help__button'> Допомогти</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
