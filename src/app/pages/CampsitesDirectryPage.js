import { Container, Row, Col, Button } from "reactstrap";
import CampsitesList from "../../features/campsites/CampsitesList";
import CampsiteDetails from "../../features/campsites/CampsiteDetails";
///import { selectRandomCampsite } from "../../features/campsites/campsitesSlice";
import { selectCampsiteById } from "../../features/campsites/campsitesSlice";
import React from "react";
import { useState } from "react";

const CampsitesDirectryPage = () => {
  const [campsite, setCampsite] = useState(selectCampsiteById(0));
  const selectedCampsite = () => {
    const select = selectCampsiteById(0);
    setCampsite(select);
    return -1;
  };
  return (
    <Container>
      <Button onClick={selectedCampsite}> Choose random campsite </Button>
      <Row>
        <Col sm="5" md="7">
          <CampsitesList> </CampsitesList>
        </Col>
        <Col sm="7" md="5">
          <CampsiteDetails campsite={campsite}></CampsiteDetails>
        </Col>
      </Row>
    </Container>
  );
};
export default CampsitesDirectryPage;
