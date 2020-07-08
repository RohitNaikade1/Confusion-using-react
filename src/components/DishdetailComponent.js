import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';


    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function RenderComments({dish}) {
        console.log(dish)
        if (dish != null) {
            return (

            dish.comments.map((comm) => {
                
                return (
                    <ul className="list-unstyled">
                        <li>{comm.comment}</li>
                        <li>-- {comm.author},  {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comm.date))}</li>
                    </ul>
                )
            })
        )
        }
        else {
            return (
                <div></div>
            )
        }
    }
    const DishDetail=(props)=> {
        return (
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {<RenderDish dish={props.dish} />}                    
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4><strong>Comments</strong></h4>
                    {<RenderComments dish={props.dish} />}
                </div>
                </div>
            </div>
                
        )
    }


export default DishDetail;