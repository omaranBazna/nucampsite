import { Col, Row } from "reactstrap";
/*import DisplayCard from "./DisplayCard";*/
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeuturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
const DisplayList = () => {
  const items = [
    selectFeaturedCampsite(),
    selectFeuturedPromotion(),
    selectFeaturedPartner(),
  ];

  return (
    <Row>
      {items.map((item, index) => {
        return (
          <Col md className="m-1" key={index}>
            <AnimatedDisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};
export default DisplayList;
