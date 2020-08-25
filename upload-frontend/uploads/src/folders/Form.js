import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
export default class Form5 extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeYearofPassing = this.onChangeYearofPassing.bind(this);
    this.onChangeSSC = this.onChangeSSC.bind(this);
    this.onChangeINTER = this.onChangeINTER.bind(this);
    this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangeProgram= this.onChangeProgram.bind(this);
    this.onChangeGPA = this.onChangeGPA.bind(this);
    this.onChangePassCategory = this.onChangePassCategory.bind(this);
    this.onChangeActiveBacklog = this.onChangeActiveBacklog.bind(this);
    this.onChangeSection= this.onChangeSection.bind(this);
    this.onChangeResume = this.onChangeResume.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UserID: "",
      YearofPassing: "",
      SSC: "",
      INTER: "",
      Branch: "",
      Program: "",
      GPA: "",
      PassCategory: "",
      ActiveBacklog: "",
      Section: "",
      Resume: "",
    };
  }
onChangeUserID(e) {
  console.log(e.target.value);
this.setState({
  UserID: e.target.value,
});
}
onChangeYearofPassing(e) {
  console.log(e.target.value);
this.setState({
    YearofPassing: e.target.value,
});
}
onChangeSSC(e) {
  console.log(e.target.value);
this.setState({
    SSC: e.target.value,
});
}
onChangeINTER(e) {
  console.log(e.target.value);
this.setState({
    INTER: e.target.value,
});
}
onChangeBranch(e) {
  console.log(e.target.value);
this.setState({
    Branch: e.target.value,
});
}
onChangeProgram(e) {
  console.log(e.target.value);
this.setState({
    Program: e.target.value,
});
}
onChangeGPA(e) {
  console.log(e.target.value);
this.setState({
    GPA: e.target.value,
});
}
onChangePassCategory(e) {
  console.log(e.target.value);
this.setState({
    PassCategory: e.target.value,
});
}
onChangeActiveBacklog(e) {
  console.log(e.target.value);
this.setState({
    ActiveBacklog: e.target.value,
});
}
onChangeSection(e) {
  console.log(e.target.value);
this.setState({
    Section: e.target.value,
});
}
onChangeResume(e) {
  console.log(e.target.value);
this.setState({
    Resume: e.target.value,
});
}

  onSubmit(e) 
  {
    e.preventDefault(); //Value will be submitted through react js
    const obj = {
      UserID: this.state.UserID,
      YearofPassing: this.state.YearofPassing,
      SSC: this.state.SSC,
      INTER: this.state.INTER,
      Branch: this.state.Branch,
      Program: this.state.Program,
      GPA: this.state.GPA,
      PassCategory: this.state.PassCategory,
      ActiveBacklog: this.state.ActiveBacklog,
      Section: this.state.Section,
      Resume: this.state.Resume,
    };

    console.log(obj);
    Axios.post("http://localhost/upload-backend/academicdetails.php", obj).then((res) =>
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
      YearofPassing: "",
      SSC: "",
      INTER: "",
      Branch: "",
      Program: "",
      GPA: "",
      PassCategory: "",
      ActiveBacklog: "",
      Section: "",
      Resume: "",
    });
  }
  render()
  {

		return(
			<Container fluid>
				
				<Row style={{backgroundColor:"white"}}>
					<Col>
          				<form style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                            <Row>
                                <Col lg="2"></Col>
                                <Col lg="8">
                                    <Row>&nbsp;</Row>
                                    <Form.Group as={Row} controlId="UserID">
                                        <Form.Label column lg="4">
                                           User ID:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                            value={this.state.UserID}
                                            onChange={this.onChangeUserID}
                                          />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="YearofPassing">
                                        <Form.Label column lg="4">
                                        Year of Passing:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"   style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                            value={this.state.YearofPassing}
                                            onChange={this.onChangeYearofPassing}
                                          />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="SSC">
                                        <Form.Label column lg="4">
                                        SSC/SSLC:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"   style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                            value={this.state.UserId}
                                            onChange={this.onChangeUserID}
                                          />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="INTER/PUC">
                                        <Form.Label column lg="4">
                                        INTER/PUC:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                            value={this.state.UserId}
                                            onChange={this.onChangeUserID}
                                          />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Branch">
                                        <Form.Label column lg="4">
                                        Branch:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control as="select" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                            value={this.state.Branch}
                                            onChange={this.onChangeBranch}
                                          >
                                                 <option>CSE</option>
                                                <option>ECE</option>
                                                <option>EEE</option>
                                                <option>Mechanical</option>
                                                <option>Civil</option>
                                                
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="Program">
                                        <Form.Label column lg="4">
                                        Program:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" default value="B.Tech" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                            value={this.state.UserId}
                                            onChange={this.onChangeUserID}
                                          />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="GPA">
                                        <Form.Label column lg="4">
                                        B.Tech GPA:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                            value={this.state.GPA}
                                            onChange={this.onChangeGPA}
                                          />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="PassCategory">
                                        <Form.Label column lg="4">
                                        Pass Category:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                            value={this.state.PassCategory}
                                            onChange={this.onChangePassCategory}
                                          />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="ActiveBacklog">
                                        <Form.Label column lg="4">
                                        Active Backlog:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                            value={this.state.ActiveBacklog}
                                            onChange={this.onChangeActiveBacklog}
                                          />
                                        </Col>
                                    </Form.Group>
                                    
                                    
                
                     <Form.Group as={Row} controlId="Section">
                                        <Form.Label column lg="4">
                                        Section:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                            value={this.state.Section}
                                            onChange={this.onChangeSection}
                                          />
                                        </Col>
                                    </Form.Group>
                                    
                                    <Form.Group as={Row} controlId="Resume">
                                        <Form.Label column lg="4">
                                        Resume:
                                        </Form.Label>
                                        <Col lg="8">
                                            <Form.Control type="file" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                            value={this.state.Resume}
                                            onChange={this.onChangeResume}
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
		);
    }
}
