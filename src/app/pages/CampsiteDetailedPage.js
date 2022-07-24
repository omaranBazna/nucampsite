import { Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../../features/campsites/campsitesSlice";
import CampsiteDetails from "../../features/campsites/CampsiteDetails";

const CampsiteDetailedPage = () => {
  const { campsiteid } = useParams();
  const campsite = selectCampsiteById(campsiteid);
};
export default CampsiteDetailedPage;