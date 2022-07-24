import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeuturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";

const DisplayList = () => {
  const items = [selectFeaturedCampsite(), selectFeuturedPromotion()];

  return <Row></Row>;
};
export default DisplayList;
