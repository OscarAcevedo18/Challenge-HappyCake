import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="not pt-5">
      <h1 className="mb-4">Ups! Esta ruta no existe</h1>
      <h2>Presiona Home para volver al Inicio</h2>
    </Container>
  );
};

export default NotFound;
