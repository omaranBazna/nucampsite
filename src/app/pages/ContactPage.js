import { Row, Col, Container } from "reactstrap";
import SubHeader from "../../components/SubHeader";

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current="Contact"></SubHeader>
      <Row className="row-content align-items-center"></Row>
      <Row className="row-content"></Row>
    </Container>
  );
};

export default ContactPage;
