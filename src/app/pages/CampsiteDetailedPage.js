import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../../features/campsites/campsitesSlice";
import CampsiteDetails from "../../features/campsites/CampsiteDetails";
import CommentsList from "../../features/Comments/CommentsList";
const CampsiteDetailedPage = () => {
  const { campsiteid } = useParams();
  const campsite = selectCampsiteById(campsiteid);
  return (
    <Container>
      <Row>
        <CampsiteDetails campsite={campsite} />
        <CommentsList campsiteid={campsiteid} />
      </Row>
    </Container>
  );
};
export default CampsiteDetailedPage;
