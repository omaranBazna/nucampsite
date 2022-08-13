import CampsiteCard from "./CampsiteCard";
import { Col, Row } from "reactstrap";
import { Controller } from "react-spring";
import { selectAllCampsites } from "./campsitesSlice";

import Error from "../../components/Error";
import Loading from "../../components/Loading";

import { useSelector } from "react-redux/es/exports";
import { ErrorMsg, isLoading } from "./campsitesSlice";
const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);

  const error_message = useSelector(ErrorMsg);
  const is_loading = useSelector(isLoading);
  return (
    <Row className="ms-auto">
      {campsites &&
        campsites.map((campsite) => {
          return (
            <Col md="5" className="m-4" key={campsite.id}>
              <CampsiteCard campsite={campsite} />
            </Col>
          );
        })}
      {is_loading && (
        <Row>
          <Loading />
        </Row>
      )}

      {!is_loading && error_message && (
        <Row>
          <Error errMsg={error_message} />
        </Row>
      )}
    </Row>
  );
};
export default CampsitesList;
