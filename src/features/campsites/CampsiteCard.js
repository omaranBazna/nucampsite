import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CampsiteCard = ({ campsite }) => {
  const { id, image, name } = campsite;
  return (
    <Link to="/">
      <Card>
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
          {" "}
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};
export default CampsiteCard;
