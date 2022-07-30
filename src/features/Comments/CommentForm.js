import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { FormGroup, Label } from "reactstrap";
const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmit = (values) => {
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
    };
    console.log(comment);
  };
  return (
    <>
      <Button onClick={() => setModalOpen(true)}>
        {" "}
        <i className="fa fa-pencil fa-lg" /> Add Comment
      </Button>

      <Modal isOpen={modalOpen}>
        <ModalHeader
          toggle={() => {
            setModalOpen(false);
          }}
        >
          Add Comment
        </ModalHeader>

        <Formik
          initialValues={{
            rating: "",
            author: "",
            commentText: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormGroup>
              <Label htmlFor="rating">Rating</Label>
              <Field name="rating" as="select" className="form-control">
                <option>Select...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Field>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="author">Author</Label>
              <Field
                name="author"
                placeholder="Your Name"
                className="form-control"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="commentText">Comment</Label>
              <Field
                name="commentText"
                as="textarea"
                rows="12"
                className="form-control"
              />
            </FormGroup>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};
export default CommentForm;
