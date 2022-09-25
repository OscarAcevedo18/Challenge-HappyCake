import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Link to="/" className="text-white ms-3 text-decoration-none">
          🏠 Home
        </Link>
        <Link to="/contact" className="text-white ms-3 text-decoration-none">
          📨 Contacto
        </Link>
        <Container className="justify-content-end">
          <Navbar.Brand className="log">Happy Cake 🍰</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
