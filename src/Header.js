import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";


function Header(){

    return <Navbar bg="dark" variant="dark">
 
        <Container className="header"> 
        <Navbar.Brand href="/"> Silly Amy Matching Game </Navbar.Brand></Container>
  
        </Navbar>

}

export default Header;