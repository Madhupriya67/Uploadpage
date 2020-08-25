import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
export default class Form6 extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeCompanyID = this.onChangeCompanyID.bind(this);
    this.onChangeAttendence = this.onChangeAttendence.bind(this);
    this.onChangeWrittentest= this.onChangeWrittentest.bind(this);
    this.onChangeGroupdiscussion = this.onChangeGroupdiscussion.bind(this);
    this.onChangeTechnicalInterview = this.onChangeTechnicalInterview.bind(this);
    this.onChangePIU = this.onChangePIU.bind(this);
    this.onChangeOfferLetter = this.onChangeOfferLetter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UserID: "",
      CompanyID: "",
      Attendence: "",
      Writtentest: "",
      Groupdiscussion:"",
      TechnicalInterview:"",
      PIU:"",
      OfferLetter:"",
    };
  }
  onChangeUserID(e) {
      console.log(e.target.value);
    this.setState({
      UserID: e.target.value,
    });
  }
  onChangeCompanyID(e) {
    console.log(e.target.value);
    this.setState({
      CompanyID: e.target.value,
    });
  }
  onChangeAttendence(e) {
    console.log(e.target.value);
    this.setState({
    Attendence: e.target.value,
    });
  }
  onChangeWrittentest(e) {
    console.log(e.target.value);
    this.setState({
        Writtentest: e.target.value,
    });
  }
  onChangeGroupdiscussion(e) {
    console.log(e.target.value);
    this.setState({
        Groupdiscussion: e.target.value,
    });
  }
  onChangeTechnicalInterview(e) {
    console.log(e.target.value);
    this.setState({
        TechnicalInterview: e.target.value,
    });
  }
  onChangePIU(e) {
    console.log(e.target.value);
    this.setState({
        PIU: e.target.value,
    });
  }
  onChangeOfferLetter(e) {
    console.log(e.target.value);
    this.setState({
        OfferLetter: e.target.value,
    });
  }
  
  onSubmit(e) {
    e.preventDefault(); //Value will be submitted through react js
    const obj = {
      UserID: this.state.UserID,
      CompanyID: this.state.CompanyID,
      Attendence: this.state.Date,
      Writtentest: this.state.Writtentest,
      Groupdiscussion: this.state.Groupdiscussion,
      TechnicalInterview: this.state.TechnicalInterview,
      PIU: this.state.PIU,
      OfferLetter:this.state.OfferLetter,
    };

    console.log(obj);
    Axios.post("http://localhost/upload-backend/cdt.php", obj).then((res) =>
      window.alert(res.data)
    )
    .catch((err) =>{
        window.alert(err.message);
        console.log(err)
    } 
    
    );
    //console.log(obj);
    this.setState({
      UserID: "",
      CompanyID: "",
      Attendence: "",
      Writtentest: "",
      Groupdiscussion:"",
      TechnicalInterview:"",
      PIU:"",
      OfferLetter:"",
    });
  }
  render()
  {
     return (
      <Container fluid>
				
      <Row style={{backgroundColor:"white"}}>
        <Col>
                <form style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                          <Row>
                              <Col lg="2"></Col>
                              <Col lg="8">
                                  <Row>&nbsp;</Row>
<Form.Group as={Row} controlId='UserID'  >
         <Form.Label  column lg="4">
                                        User ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.UserID}
                                        onChange={this.onChangeUserID} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='CompanyID'>
         <Form.Label  column lg="4">
                                        Company ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                        value={this.state.CompanyID}
                                        onChange={this.onChangeCompanyID}/>
                                    </Col>
</Form.Group>

        <Form.Group value={this.state.Attendence} as={Row} controlId="Attendence" >
                                        <Form.Label  column lg="4" >
                                            Attendence:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Present"
          value="Present"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
 style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
 onChange={this.onChangeAttendence}/>
        <Form.Check inline
          type="radio"
          label="Absent"
          value="Absent"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
           style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
           onChange={this.onChangeAttendence}/>
        </Col>
        </Form.Group>
      
        <Form.Group value={this.state.Writtentest} as={Row} controlId="Writtentest" >
                                        <Form.Label column lg="4" >
                                        Written test:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Cleared"
          value="Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
 style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
 onChange={this.onChangeWrittentest} />
        <Form.Check inline
          type="radio"
          label="Not Cleared"
          value="Not Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}     
        onChange={this.onChangeWrittentest} />
        </Col>
        </Form.Group>
     
        <Form.Group value={this.state.Groupdiscussion} as={Row} controlId="Groupdiscussion" >
                                        <Form.Label  column lg="4 " >
                                        Group discussion: 
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Cleared"
          value="Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
 style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
 onChange={this.onChangeGroupdiscussion}/>
        <Form.Check inline
          type="radio"
          label="Not Cleared"
          value="Not cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
           style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
           onChange={this.onChangeGroupdiscussion}/>
        </Col>
        </Form.Group>
     
        <Form.Group value={this.state.TechnicalInterview} as={Row} controlId="TechnicalInterview" >
                                        <Form.Label column lg="4 " >
                                        Technical Interview:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Cleared"
          value="Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          onChange={this.onChangeTechnicalInterview}/>
        <Form.Check inline
          type="radio"
          label="Not Cleared"
          value="Not Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          onChange={this.onChangeTechnicalInterview}/>
        </Col>
        </Form.Group>
      
        <Form.Group value={this.state.PIU} as={Row} controlId="PIU" >
                                        <Form.Label column lg="4 " >
                                            PIU:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Cleared"
          value="Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          onChange={this.onChangePIU}/>
        <Form.Check inline
          type="radio"
          label="Not cleared"
          value="Not Cleared"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          onChange={this.onChangePIU}/>
        </Col>
        </Form.Group>
      
        <Form.Group value={this.state.OfferLetter} as={Row} controlId="OfferLetter" >
                                        <Form.Label  column lg="4 " >
                                            Offer Letter:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Available"
          value="Available"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          onChange={this.onChangeOfferLetter}/>
        <Form.Check inline
          type="radio"
          label="Not Available"
          value="Not Available"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          onChange={this.onChangeOfferLetter}/>
        </Col>
        </Form.Group>
        <Row>
                                        <Col align="center"><Button type="submit" style={{backgroundColor:"#2A324B",borderColor:"#2A324B",color:"white"}}>Submit</Button></Col>
                                    </Row>
        <Row>&nbsp;</Row>
                                </Col>
                                <Col lg="4 "></Col>
                            </Row>
          				</form>
                    </Col>
            	</Row>
                                   
			</Container>
     )
 }
}