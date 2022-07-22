import { Container, Row, Col, Button } from "reactstrap";
import CampsitesList from "../../features/campsites/CampsitesList";
import CampsiteDetails from "../../features/campsites/CampsiteDetails";
import { selectRandomCampsite } from "../../features/campsites/campsitesSlice";
import React from "react";
const CampsitesDirectryPage = () => {
  const selectedCampsite = selectRandomCampsite();
  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <CampsitesList> </CampsitesList>
        </Col>
        <Col sm="7" md="5">
          <CampsiteDetails select={selectedCampsite}></CampsiteDetails>
        </Col>
      </Row>
    </Container>
  );
};
export default CampsitesDirectryPage;
