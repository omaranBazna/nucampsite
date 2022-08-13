import { Col, Row } from "reactstrap";
/*import DisplayCard from "./DisplayCard";*/
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import { useSelector } from "react-redux/es/exports";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPartner(state),
    selectFeaturedPromotion(state),
  ]);
  const isLoading = useSelector((state) => {
    return [
      state.campsites.isLoading,
      state.partners.isLoading,
      state.promotions.isLoading,
    ];
  });

  const err = useSelector((state) => {
    return [
      state.campsites.errMsg,
      state.partners.errMsg,
      state.promotions.errMsg,
    ];
  });
  return (
    <Row>
      {items.map((item, index) => {
        if (isLoading[index]) {
          return (
            <Col>
              <Loading />
            </Col>
          );
        }
        if (err[index]) {
          return (
            <Col>
              <Error errMsg={err[index]} />
            </Col>
          );
        }

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
