import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img
        className="pastel"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNhauA4mLx35OfeVoaMSgso6EZnxBwULO3g&usqp=CAU"
        alt="dibujo de pastel"
      />
    </Container>
  );
};

export default Home;
