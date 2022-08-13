import { Col } from "reactstrap";

import React from "react";

const Error = ({ errMsg }) => {
  return (
    <Col>
      <h4>{errMsg.message}</h4>
    </Col>
  );
};

export default Error;
