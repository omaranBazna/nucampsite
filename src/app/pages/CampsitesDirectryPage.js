import { Container } from "reactstrap";
import CampsitesList from "../../features/campsites/CampsitesList";
import SubHeader from "../../components/SubHeader";
const CampsitesDirectryPage = () => {
  return (
    <Container>
      <SubHeader current={"Directory"}></SubHeader>
      <CampsitesList> </CampsitesList>
    </Container>
  );
};
export default CampsitesDirectryPage;
