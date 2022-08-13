import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../../features/campsites/campsitesSlice";
import CampsiteDetails from "../../features/campsites/CampsiteDetails";
import CommentsList from "../../features/Comments/CommentsList";
import SubHeader from "../../components/SubHeader";

import { useSelector } from "react-redux/es/exports";

import Error from "../../components/Error";
import { isLoading } from "../../features/campsites/campsitesSlice";
const CampsiteDetailedPage = () => {
  const { campsiteid } = useParams();
  const campsite = useSelector(selectCampsiteById(campsiteid));

  const err = useSelector((state) => state.campsites.errMsg);
  const isLoading = useSelector((state) => state.campsites.isLoading);
  if (isLoading) {
    return (
      <Row>
        <isLoading />
      </Row>
    );
  }
  if (err) {
    return (
      <Row>
        <Error errMsg={err} />
      </Row>
    );
  }
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

///close to 100
///5  to go
///4 to go
