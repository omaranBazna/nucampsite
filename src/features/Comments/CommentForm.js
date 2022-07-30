import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
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
        ></Formik>
      </Modal>
    </>
  );
};
export default CommentForm;
