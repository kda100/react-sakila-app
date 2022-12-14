import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import routes from "../../routing/routes";
import useCustomNavigation from "../../hooks/useCustomNavigation";

/**
 * Navigation Bar of SPA
 */

function NavBar() {
  const currRoute = useCustomNavigation();

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Sakila App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {routes.map((route) => (
              <Nav.Link
                key={route.route}
                as={Link}
                to={route.route}
                active={route.route === currRoute}
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
