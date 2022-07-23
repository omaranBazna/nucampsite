import { Container, Row, Col, Button } from "reactstrap";
import CampsitesList from "../../features/campsites/CampsitesList";
import CampsiteDetails from "../../features/campsites/CampsiteDetails";
///import { selectRandomCampsite } from "../../features/campsites/campsitesSlice";
import { selectCampsiteById } from "../../features/campsites/campsitesSlice";
import React from "react";
import { useState } from "react";

const CampsitesDirectryPage = () => {
  const [campsiteid, setCampsiteId] = useState(0);
  const selectedCampsite = selectCampsiteById(campsiteid);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <CampsitesList setCampsiteId={setCampsiteId}> </CampsitesList>
        </Col>
        <Col sm="7" md="5">
          <CampsiteDetails campsite={selectedCampsite}></CampsiteDetails>
        </Col>
      </Row>
    </Container>
  );
};
export default CampsitesDirectryPage;
