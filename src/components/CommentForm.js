import React, { Component } from 'react'
import {Button,Modal,ModalHeader,ModalBody, Label,Row} from 'reactstrap';
import {LocalForm,Control,Errors} from 'react-redux-form';
const maxLength = (len) => (val) =>  !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
class CommentForm extends Component {
    state={
        isModalOpen:false
    }
    toggleModal=()=>{
        this.setState({isModalOpen:!this.state.isModalOpen});
    }
    handleSubmit=(values)=>{
        alert(JSON.stringify(values));
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
export default CommentForm;
