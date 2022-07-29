import { Card, CardBody, CardTitle, CardImg, CardText } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { frameLoop } from "@react-spring/shared";
const AnimatedDisplayCard = ({ item }) => {
  const { description, name, image } = item;
  const [toggle, setToggle] = useState(false);
  const animatedstyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    config: { duration: 500 },
  });
  useEffect(() => {
    setToggle(true);
  }, []);
  return (
    <animated.div style={animatedstyle}>
      <Card>
        <CardImg src={image} alt={name}></CardImg>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </animated.div>
  );
};
export default AnimatedDisplayCard;
