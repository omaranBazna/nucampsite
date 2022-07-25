import { Col, Ro, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
  );
};
export default SubHeader;
