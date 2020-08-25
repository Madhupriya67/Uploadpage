import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
export default class Form7 extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeNameofTheTrgProgramme = this.onChangeNameofTheTrgProgramme.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeSession = this.onChangeSession.bind(this);
    this.onChangeAttendence = this.onChangeAttendence.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UserID: "",
      NameofTheTrgProgramme: "",
      Date: "",
      Session: "",
      Attendence:""
    };
  }
  onChangeUserID(e) {
      console.log(e.target.value);
    this.setState({
      UserID: e.target.value,
    });
  }
  onChangeNameofTheTrgProgramme(e) {
    console.log(e.target.value);
    this.setState({
      NameofTheTrgProgramme: e.target.value,
    });
  }
  onChangeDate(e) {
    console.log(e.target.value);
    this.setState({
      Date: e.target.value,
    });
  }
  onChangeSession(e) {
    console.log(e.target.value);
    this.setState({
      Session: e.target.value,
    });
  }
  onChangeAttendence(e) {
    console.log(e.target.value);
    this.setState({
      Attendence: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault(); //Value will be submitted through react js
    const obj = {
      UserID: this.state.UserID,
      NameofTheTrgProgramme: this.state.NameofTheTrgProgramme,
      Date: this.state.Date,
      Session: this.state.Session,
      Attendence: this.state.Attendence,
    };

    console.log(obj);
    Axios.post("http://localhost/upload-backend/user.php", obj).then((res) =>
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
      NameofTheTrgProgramme: "",
      Date: "",
      Session: "",
      Attendence:""
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
<Form.Group as={Row} controlId='UserID' >
         <Form.Label  column lg="4">
                                        User ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                         value={this.state.UserID}
                                         onChange={this.onChangeUserID}
                                       />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='NameofTheTrgProgramme'  >
         <Form.Label column lg="4">
         Name of The Trg Programme:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                         value={this.state.NameofTheTrgProgramme}
                                         onChange={this.onChangeNameofTheTrgProgramme}
                                       />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Date' >
         <Form.Label  column lg="4">
         Date:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                         value={this.state.Date}
                                         onChange={this.onChangeDate}
                                       />
                                    </Col>
</Form.Group>
<Form.Group as={Row} value={this.state.Session} controlId='Session' >
                                        <Form.Label  column lg="4" >
                                            Session:
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          value="Morning"
          label="Morning"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
          onChange={this.onChangeSession}
        />
        <Form.Check inline
          type="radio"
          label="Afternoon"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
          onChange={this.onChangeSession}
        />
        </Col>
        </Form.Group>
        <Form.Group as={Row} value={this.state.Attendence} controlId='Attendence'>
                                        <Form.Label  column lg="4" >
                                            Attendence
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          value="Present"
          label="Present"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
          onChange={this.onChangeAttendence}
        />
        <Form.Check inline
          type="radio"
          value="Absent"
          label="Absent"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
          onChange={this.onChangeAttendence}
        />
        </Col>
        </Form.Group>
         
        <Row>
                                        <Col align="center"><Button type="submit" style={{backgroundColor:"#2A324B",borderColor:"#2A324B",color:"white"}}>Submit</Button></Col>
                                    </Row>
                                    <Row>&nbsp;</Row>
                                </Col>
                                <Col lg="2"></Col>
                            </Row>
          				</form>
                    </Col>
            	</Row>
                                   
			</Container>
     )
 }
}