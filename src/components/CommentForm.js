import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from "react";
const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setModalOpen(true)}></Button>
    </>
  );
};
export default CommentForm;
