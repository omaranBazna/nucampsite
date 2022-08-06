import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser, selectCurrentUser } from "./userSlice";
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import { Formik, Field, Form } from "formik";
import defaultAvatar from "../../app/assets/img/unicorn.png";
const UserLoginForm = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const handleLogin = (values) => {
    const currentUser = {
      id: Date.now(),
      avatar: defaultAvatar,
      username: values.username,
      password: values.password,
    };
    dispatch(setCurrentUser(currentUser));
    setLoginModalOpen(false);
  };
  return (
    <>
      <span className="navbar-text ml-auto">
        {currentUser ? (
          <div style={{ width: "4rem", height: "4rem" }}>
            <img
              src={currentUser.avatar}
              alt={"user"}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <Button
            outline
            onClick={() => setLoginModalOpen(true)}
            style={{ color: "white", border: "1px solid white" }}
          >
            <i className="fa fa-sign-in fa-lg" /> Login
          </Button>
        )}
      </span>
      <Modal></Modal>
    </>
  );
};
export default UserLoginForm;
