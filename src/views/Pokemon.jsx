import { Container } from "react-bootstrap";
import Poke1 from "../components/Poke1";

//Vista de los datos del Pokemon seleccionado. 
const Navigation = () => {
    return (
        <Container className="pt-5">
            <Poke1 />
        </Container>
    );
};
export default Navigation;
