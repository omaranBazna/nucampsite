import { Button, Label, FormGroup, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNum: "",
        email: "",
        agree: false,
        contactType: "By Phone",
        feedback: "",
      }}
    >
      <Form>
        <FormGroup row>
          <Label></Label>
          <Col md="10"></Col>
        </FormGroup>
        <FormGroup row>
          <Label></Label>
          <Col md="10"></Col>
        </FormGroup>
        <FormGroup row>
          <Label></Label>
          <Col md="10"></Col>
        </FormGroup>
        <FormGroup row>
          <Label></Label>
          <Col md="10"></Col>
        </FormGroup>
        <FormGroup row>
          <Label></Label>
          <Col md="10"></Col>
        </FormGroup>
        <FormGroup row>
          <Label></Label>
          <Col></Col>
        </FormGroup>
        <FormGroup row></FormGroup>
      </Form>
    </Formik>
  );
};
export default ContactForm;
