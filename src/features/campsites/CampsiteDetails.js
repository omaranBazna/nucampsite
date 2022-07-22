import React from "react";
import { Col, CardText, Card, CardImg, CardBody } from "reactstrap";

const CampsiteDetails = ({ campsite }) => {
  const { name, image, description } = campsite;

  return (
    <Col md="12" className="m-4">
      <Card>
        <CardImg top src={image} alt={name} />

        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CampsiteDetails;
