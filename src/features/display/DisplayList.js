import { Col, Row } from "reactstrap";
/*import DisplayCard from "./DisplayCard";*/
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import { useSelector } from "react-redux/es/exports";
const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPartner(state),
    selectFeaturedPromotion(state),
  ]);

  return (
    <Row>
      {items.map((item, index) => {
        return (
          item && (
            <Col md className="m-1" key={index}>
              <AnimatedDisplayCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};
export default DisplayList;
