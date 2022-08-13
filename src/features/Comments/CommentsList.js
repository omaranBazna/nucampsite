import { Col, Row } from "reactstrap";
import Comment from "./Comment";
import { selectCommentByCampsiteId } from "../Comments/commentsSlice";
import CommentForm from "./CommentForm";

import { useSelector } from "react-redux/es/exports";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
const CommentsList = ({ campsiteid }) => {
  const comments = useSelector(selectCommentByCampsiteId(campsiteid));
  const err = useSelector((state) => state.comments.errMsg);
  const isLoading = useSelector((state) => state.comments.isLoading);
  console.log(err);
  if (isLoading) {
    return <Loading />;
  }
  if (err) {
    return <Error errMsg={err} />;
  }

  if (campsiteid && campsiteid.length > 0) {
    return (
      <Col md="5" className="m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <CommentForm campsiteId={campsiteid} />
      </Col>
    );
  }

  return (
    <Col md="5" className="m-1">
      There is no comment for this campsite yet
    </Col>
  );
};
export default CommentsList;
