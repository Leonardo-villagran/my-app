import { Container } from "react-bootstrap";
import Poke from "../components/Poke";

//Vista del dropdown para la selección de Pokemones.
const Navigation = () => {
  return (
    <Container className="pt-5">
      <Poke />
    </Container>
  );
};
export default Navigation;
