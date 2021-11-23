import { Container, Row } from "react-bootstrap";
import PlayButton from "./PlayButton";

function HomepageOptions() {

    return <div className="homepage d-flex align-items-center justify-content-center">
        <div className="options-card d-flex justify-content-center">
            <Container>
                <Row className="m-3"><p>Game Options</p></Row>
                <Row className="mx-3"><PlayButton /></Row>
            </Container>
        </div>
            </div>
}

export default HomepageOptions;