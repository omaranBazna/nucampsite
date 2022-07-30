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
        <ModalHeader toggle={setModalOpen}></ModalHeader>
      </Modal>
    </>
  );
};
export default CommentForm;
