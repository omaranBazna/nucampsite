import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

const DisplayCard = ({ item }) => {
  const { description, name, image } = item;

  return (
    <Card>
      <CardImg src={image} alt={name}></CardImg>
    </Card>
  );
};
export default DisplayCard;
