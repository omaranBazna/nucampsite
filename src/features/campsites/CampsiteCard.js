import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CampsiteCard = ({ campsite }) => {
  const { id, image, name } = campsite;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} onClick={() => {}} />
      <CardImgOverlay>
        {" "}
        <CardTitle>{props.campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};
export default CampsiteCard;
