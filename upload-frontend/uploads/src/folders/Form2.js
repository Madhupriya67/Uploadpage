import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
export default class Form2 extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeAT1Score = this.onChangeAT1Score.bind(this);
    this.onChangeAT1Date = this.onChangeAT1Date.bind(this);
    this.onChangeAT1rank = this.onChangeAT1rank.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UserId: 0,
      AT1Score: "",
      AT1Date: "",
      AT1rank: "",
    };
  }
  onChangeUserID(e) {
      console.log(e.target.value);
    this.setState({
      UserId: e.target.value,
    });
  }
  onChangeAT1Score(e) {
    console.log(e.target.value);
    this.setState({
        AT1Score: e.target.value,
    });
  }
  onChangeAT1Date(e) {
    console.log(e.target.value);
    this.setState({
        AT1Date: e.target.value,
    });
  }
  onChangeAT1rank(e) {
    console.log(e.target.value);
    this.setState({
        AT1rank: e.target.value,
    });
  }
  onChangeAT1Score(e) {
    console.log(e.target.value);
    this.setState({
        AT1Score: e.target.value,
    });
  }
  onChangeAT1Date(e) {
    console.log(e.target.value);
    this.setState({
        AT1Date: e.target.value,
    });
  }
  onChangeAT1rank(e) {
    console.log(e.target.value);
    this.setState({
        AT1rank: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault(); //Value will be submitted through react js
    const obj = {
      UserID: this.state.UserId,
      AT1Score: this.state.AT1Score,
      AT1Date: this.state.AT1Date,
      AT1rank: this.state.AT1rank,
      AT1Score: this.state.AT1Score,
      AT1Date: this.state.AT1Date,
      AT1rank: this.state.AT1rank,
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
      AT1Score: "",
      AT1Date: "",
      AT1rank: "",
      AT1Score: "",
      AT1Date: "",
      AT1rank: "",
    });
  }
  render() {
     return (
        <Container fluid>
				
        <Row style={{backgroundColor:"white"}}>
            <Col>
                  <form style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="8">
                            <Row>&nbsp;</Row>
<Form.Group as={Row} controlId='User ID'  >
         <Form.Label column lg="4">
                                        User ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.UserId}
                                        onChange={this.onChangeUserID}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AT1Score' >
         <Form.Label  column lg="4">
         AT1 Score:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.UserId}
                                        onChange={this.onChangeUserID}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AT1Date' >
         <Form.Label column lg="4">
         AT1 Date:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.UserId}
                                        onChange={this.onChangeUserID}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AT1rank'>
         <Form.Label column lg="4">
         AT1 rank:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.UserId}
                                        onChange={this.onChangeUserID}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AT1Score' >
         <Form.Label  column lg="4">
         AT1 Score:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.UserId}
                                        onChange={this.onChangeUserID}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AT1Date' >
         <Form.Label  column lg="4">
         AT1 Date:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.UserId}
                                        onChange={this.onChangeUserID}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AT1rank' >
         <Form.Label column lg="4">
         AT1 rank:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.UserId}
                                        onChange={this.onChangeUserID}
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