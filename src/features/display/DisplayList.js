import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeuturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";

const DisplayList = () => {
  const items = [selectFeaturedCampsite(), selectFeuturedPromotion()];

  return (
    <Row>
      {items.map((item, index) => {
        return (
          <Col md className="m-1" key={index}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};
export default DisplayList;
