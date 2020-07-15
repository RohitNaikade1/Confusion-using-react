import React from 'react';
import {Breadcrumb,BreadcrumbItem,Button, Label, Col,Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control,Form,Errors,actions} from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) =>  !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);    
class Contactus extends React.Component{
    constructor(props) {
        super(props);
    }
    handleSubmit=(values)=>{
          alert(JSON.stringify(values));
          this.props.resetFeedbackForm();
    }
    
    render(){
        return(    
  
            <div className='container'>
                    <div className="row">
                      <Breadcrumb>
                          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                          <BreadcrumbItem active>Contact us</BreadcrumbItem>
                      </Breadcrumb>
                      <div className="col-12">
                         <h3>Contact us</h3>
                         <hr />
                      </div>
                      </div>
            <div className="row row-content mb-3">
               <div className="col-12">
                  <h3>Location Information</h3>
               </div>
                <div className="col-12 col-sm-4">
                       <h5>Our Address</h5>
                        <address>
                          121, Clear Water Bay Road<br />
                          Clear Water Bay, Kowloon<br />
                          HONG KONG<br />
                          <i className="fa fa-phone"></i>: +852 1234 5678<br />
                          <i className="fa fa-fax"></i>: +852 8765 4321<br />
                          <i className="fa fa-envelope"></i>:
                            <a href="mailto:confusion@food.net">confusion@food.net</a>
                       </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-2">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11">
                <div className="btn-group" role="group">
                    <a role="button" href="+917522979006" className="btn btn-primary"><i className="fa fa-phone"></i> Call</a>
                    <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                    <a role="button" href="emailto:naikaderohit833@gmail.com" className="btn btn-success"><i className="fa fa-envelope-o"></i> Email</a>
                </div>
                </div>
                    <div className="col-12 col-md-9 mt-4">
                        <Form model="feedback" onSubmit={this.handleSubmit}>
                            <Row className="form-group mt-3">
                                <Col md={2}>
                                <Label htmlFor="firstname">First Name:</Label>
                                </Col>
                                <Col md={10}>
                                <Control.text model=".firstname" 
                                placeholder="First Name"
                                id="firstname" 
                                name="firstname" 
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                ></Control.text>
                                <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                                
                            </Row>
                            <Row className="form-group mt-3">
                                <Col md={2}>
                                <Label htmlFor="lastname">Last Name:</Label>
                                </Col>
                                <Col md={10}>
                                <Control.text model=".lastname" 
                                id="lastname" 
                                className="form-control"
                                name="lastname" 
                                placeholder="Last Name"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                ></Control.text>
                                 <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>  
                            </Row>
                            <Row className="form-group mt-3">
                                <Col md={2}>
                                <Label htmlFor="telnum">Tel Number:</Label>
                                </Col>
                                <Col md={10}>
                                <Control.text model=".telnum" 
                                id="telnum" 
                                className="form-control"
                                placeholder="Telephone Number"
                                name="telnum" 
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}
                                ></Control.text>
                                <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                                
                            </Row>
                            <Row className="form-group mt-3">
                                <Col md={2}>
                                <Label htmlFor="email">Email:</Label>
                                </Col>
                                <Col md={10}>
                                <Control.text
                                 id="email" 
                                 placeholder="Email"
                                 name="email" 
                                 className="form-control"
                                 model=".email"
                                 validators={{
                                    required, validEmail
                                }}
                                 ></Control.text>
                                 <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Col md={{size:6,offset:2}}>
                                    <div className="form-check">
                                    <Label htmlFor="agree">
                                        <Control.checkbox model=".model" 
                                        id="agree" 
                                        name="agree" 
                                        className="form-check-input"
                                        ></Control.checkbox>
                                        <strong>May we Contact you?</strong></Label>
                                        
                                    </div> 
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" 
                                    name="contactType" 
                                    className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group mt-3">
                                <Col md={2}>
                                    <Label htmlFor="feedback">Your Feedback</Label>
                                </Col>
                                <Col md={10}>
                                        <Control.textarea 
                                        model=".message" 
                                        id="message" 
                                        name="message" 
                                        rows="12"
                                        className="form-control"
                                        ></Control.textarea>
                                </Col>
                            </Row>
                            <Col md={{size:4,offset:2}}>
                                <Button type="submit" color="primary">Submit</Button>
                            </Col>
                        </Form>
                    </div>
            </div>     
           </div>
        );
    }
   
}
export default Contactus;