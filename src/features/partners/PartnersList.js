import { Col, Row } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
const PartnersList = () => {
  const partners = useSelector(selectAllPartners);

  const err = useSelector((state) => state.partners.errMsg);
  const isLoading = useSelector((state) => state.partners.isLoading);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  } else if (err) {
    return (
      <Row>
        <Error errMsg={err} />
      </Row>
    );
  } else {
    return (
      <Col className="mt-4">
        {partners.map((partner) => {
          return (
            <div className="d-flex mb-5" and key={partner.id}>
              <Partner partner={partner} />
            </div>
          );
        })}
      </Col>
    );
  }
};
export default PartnersList;
