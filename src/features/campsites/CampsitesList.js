import CampsiteCard from "./CampsiteCard";
import { Col, Row } from "reactstrap";
import { Controller } from "react-spring";
import { selectAllCampsites } from "./campsitesSlice";
import { useSelector } from "react-redux/es/exports";
const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);
  return (
    <Row className="ms-auto">
      {campsites.map((campsite) => {
        return (
          <Col md="5" className="m-4" key={campsite.id}>
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};
export default CampsitesList;
