import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText,Breadcrumb,BreadcrumbItem,Button,Modal,ModalHeader,ModalBody, Label,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {LocalForm,Control,Errors} from 'react-redux-form';
import  Loading  from './LoadingComponent';
import { baseUrl } from '../redux/baseUrl';

const maxLength = (len) => (val) =>  !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends React.Component {
    state={
        isModalOpen:false
    }
    toggleModal=()=>{
        this.setState({isModalOpen:!this.state.isModalOpen});
    }
    handleSubmit=(values)=>{
       this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render() {
        return (
            <>
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg mr-2"></span>Submit Comment</Button>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={this.handleSubmit}>
                        <Row className="form-group">
                            <Label htmlFor="rating" className="ml-2">Rating</Label>
                            <Control.select
                            model=".rating" 
                            id="rating"
                            name="rating"
                            className="form-control ml-2 mr-2">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="name" className="ml-2">Your Name</Label>
                            <Control.text
                            model=".name" 
                            id="name"
                            placeholder="Your Name"
                            name="name"
                            validators={{
                                maxLength:maxLength(15),minLength:minLength(3)
                            }}
                            className="form-control ml-2 mr-2"></Control.text>
                            <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" className="ml-2">Comment</Label>
                            <Control.textarea
                            model=".comment" 
                            id="comment"
                            name="comment"
                            rows="8"
                            className="form-control ml-2 mr-2"></Control.textarea>
                        </Row>
                        <Button type="submit" color="primary" onClick={this.toggleModal}>Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
        )
    };
};
    function RenderDish({dish}) {
         if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name}/>
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

    function RenderComments({comments}) {
        console.log(comments)
        if (comments != null) {
            return (
            comments.map((comm) => { 
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
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
        return (
            <div className="container">
                <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                     <h3>{props.dish.name}</h3>
                     <hr />
                  </div>
              </div>
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {<RenderDish dish={props.dish} />}                    
                </div>
                <div className="col-12 col-md-5 m-1">
                <h4><strong>Comments</strong></h4>
                    {<RenderComments comments={props.comments} />}
                    {<CommentForm dishId={props.dish.id} postComment={props.postComment}/>}
                </div>
                </div>
            </div>
                
        )
    }


export default DishDetail;