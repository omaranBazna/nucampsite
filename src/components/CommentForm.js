import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from "react";
const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
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
        <ModalBody>campsite: {campsiteId}</ModalBody>
      </Modal>
    </>
  );
};
export default CommentForm;
