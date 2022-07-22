import React from 'react'
import {Col,Row,Card,CardImg,CardBody} from bootstrap;

export default CampsiteDetails =(props)=>{
const {name ,image ,descriptio} = props.selected;

return (
    <Card>
        <CardImg top src={image} />

        <CardBody>
             {descriptio}
        </CardBody>
    </Card>
)
}