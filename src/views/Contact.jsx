import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Contact = () => {
  return (
    <Container className="inp pt-5">
      <h1>Cuéntanos, ¿En qué te podemos ayudar?</h1>
      <h4 className="mb-4">Contáctanos</h4>
      <input
        className="bar-inp"
        type="email"
        placeholder="Ingrese correo"
      ></input>
      <h4 className="mb-4">Descripción</h4>
      <textarea className="bar-text"></textarea>
      <Button className="btn" variant="outline-danger">
        Enviar
      </Button>{" "}
    </Container>
  );
};

export default Contact;
