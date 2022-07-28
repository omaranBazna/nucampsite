import { Row, Col, Container } from "reactstrap";
import SubHeader from "../../components/SubHeader";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact"></SubHeader>
      <Row className="row-content align-items-center">
        <Col sm="4">
          <h5></h5>
        </Col>
      </Row>
      <Row className="row-content"></Row>
    </Container>
  );
};

export default ContactPage;
