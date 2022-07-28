import { Row, Col, Container } from "reactstrap";
import SubHeader from "../../components/SubHeader";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact"></SubHeader>
      <Row className="row-content align-items-center">
        <Col sm="4">
          <h5>Our Address </h5>
          <address>
            1 Nucamp Way
            <br />
            Seattle, WA 98001
            <br />
            U.S.A.
          </address>
        </Col>
      </Row>
      <Row className="row-content"></Row>
    </Container>
  );
};

export default ContactPage;
