import React from 'react';
import {Breadcrumb,BreadcrumbItem,Button, Form, FormGroup, Label, Input, Col,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';
class Contactus extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{
                firstname:false,
                lastname:false,
                email:false,
                telnum:false
            }
        };
    }
    handleInputChange=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    handleSubmit=(event)=>{
          alert(JSON.stringify(this.state));
          event.preventDefault();
    }
    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })
    }
    validate(firstname,lastname,email,telnum){
        const errors={
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
        if(this.state.touched.firstname && firstname.length<3){
            errors.firstname="firstname should be >=3 characters";
        }else if(this.state.touched.firstname && firstname.length>15){
            errors.firstname="firstname should be <15 characters";
        }
        if(this.state.touched.lastname && lastname.length<3){
            errors.lastname="lastname should be >=3 characters";
        }else if(this.state.touched.lastname && lastname.length>15){
            errors.lastname="lastname should be <15 characters";
        }
        const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum)){
            errors.telnum='telephone number should contain digits only';
        }
        if(this.state.touched.email && email.split('').filter(x=>x==='@').length!==1){
            errors.email='Email should contain @';
        }
        return errors;
    }
    render(){
        const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Col md={2}>
                                <Label htmlFor="firstname">First Name:</Label>
                                </Col>
                                <Col md={10}>
                                <Input type="text" 
                                placeholder="First Name"
                                id="firstname" 
                                name="firstname" 
                                valid={errors.firstname===''}
                                invalid={errors.firstname!==''}
                                onBlur={this.handleBlur('firstname')}
                                onChange={this.handleInputChange}></Input>
                                <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                <Label htmlFor="lastname">Last Name:</Label>
                                </Col>
                                <Col md={10}>
                                <Input type="text" 
                                id="lastname" 
                                name="lastname" 
                                placeholder="Last Name"
                                valid={errors.lastname===''}
                                invalid={errors.lastname!==''}
                                onBlur={this.handleBlur('lastname')}
                                onChange={this.handleInputChange}></Input>
                                 <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                               
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                <Label htmlFor="telnum">Tel Number:</Label>
                                </Col>
                                <Col md={10}>
                                <Input type="tel" 
                                valid={errors.telnum===''}
                                invalid={errors.telnum!==''}
                                id="telnum" 
                                placeholder="Telephone Number"
                                name="telnum" 
                                onBlur={this.handleBlur('telnum')}
                                onChange={this.handleInputChange}></Input>
                                <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                <Label htmlFor="email">Email:</Label>
                                </Col>
                                <Col md={10}>
                                <Input type="email"
                                 id="email" 
                                 placeholder="Email"
                                 name="email" 
                                 valid={errors.email===''}
                                 invalid={errors.email!==''}
                                 onBlur={this.handleBlur('email')}
                                 onChange={this.handleInputChange}></Input>
                                 <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                                
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Input type="checkbox" id="agree" name="agree" onChange={this.handleInputChange}></Input>
                                        <Label htmlFor="agree"><strong>May we Contact you?</strong></Label>
                                    </FormGroup> 
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type="select" name="contactType" onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="feedback">Your Feedback</Label>
                                </Col>
                                <Col md={10}>
                                        <Input type="textarea" id="feedback" name="message" rows="12" onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
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