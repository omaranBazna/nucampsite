import React from "react";
import { Col, Row, Card, CardImg, CardBody } from "reactstrap";

const CampsiteDetails = (props) => {
  const { name, image, description } = props.selected;

  return (
    <Card>
      <CardImg top src={image} />

      <CardBody>{description}</CardBody>
    </Card>
  );
};
export default CampsiteDetails;
