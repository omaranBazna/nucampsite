import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../../features/campsites/campsitesSlice";
import CampsiteDetails from "../../features/campsites/CampsiteDetails";
import CommentsList from "../../features/Comments/CommentsList";
import SubHeader from "../../components/SubHeader";
const CampsiteDetailedPage = () => {
  const { campsiteid } = useParams();
  const campsite = selectCampsiteById(campsiteid);
  return (
    <Container>
      <SubHeader current={campsite.name} detail={true} />
      <Row>
        <CampsiteDetails campsite={campsite} />
        <CommentsList campsiteid={campsiteid} />
      </Row>
    </Container>
  );
};
export default CampsiteDetailedPage;
