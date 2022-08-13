import { Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);
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
};
export default PartnersList;
