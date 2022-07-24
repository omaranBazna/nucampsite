import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";

const DisplayCard = ({ item }) => {
  const { description, name, image } = item;

  return (
    <Card>
      <CardImg src={image} alt={name}></CardImg>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};
export default DisplayCard;
