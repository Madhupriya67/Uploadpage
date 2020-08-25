import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
export default class Form9 extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeCampusID = this.onChangeCampusID.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UserId: "",
      Password: "",
      CampusID: "",
      Type1: "Admin",
    };
  }
  onChangeUserID(e) {
      console.log(e.target.value);
    this.setState({
      UserId: e.target.value,
    });
  }
  onChangePassword(e) {
    console.log(e.target.value);
    this.setState({
      Password: e.target.value,
    });
  }
  onChangeCampusID(e) {
    console.log(e.target.value);
    this.setState({
      CampusID: e.target.value,
    });
  }
  onChangeType(e) {
    console.log(e.target.value);
    this.setState({
      Type1: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault(); //Value will be submitted through react js
    const obj = {
      UserID: this.state.UserId,
      Password: this.state.Password,
      CampusID: this.state.CampusID,
      Type1: this.state.Type1,
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
      Password: "",
      CampusID: "",
      Type1: "",
    });
  }
  render() {
    return (
      <Container fluid onSubmit={this.onSubmit}>
        <Row style={{ backgroundColor: "white" }}>
          <Col>
            <form
              style={{
                fontSize: "12px",
                fontFamily: "Segoe UI",
                fontWeight: "400",
                color: "#999999",
              }}
            >
              <Row>
                <Col lg="2"></Col>
                <Col lg="8">
                  <Row>&nbsp;</Row>
                  <Form.Group as={Row} controlId="UserID">
                    <Form.Label column lg="4">
                      User ID:
                    </Form.Label>
                    <Col lg="8">
                      <Form.Control
                        type="text"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Segoe UI",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                        value={this.state.UserId}
                        onChange={this.onChangeUserID}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="Password">
                    <Form.Label column lg="4">
                      Password:
                    </Form.Label>
                    <Col lg="8">
                      <Form.Control
                        type="text"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Segoe UI",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                        value={this.state.Password}
                        onChange={this.onChangePassword}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="CampusID">
                    <Form.Label column lg="4">
                      Campus ID:
                    </Form.Label>
                    <Col lg="8">
                      <Form.Control
                        type="text"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Segoe UI",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                        value={this.state.CampusID}
                        onChange={this.onChangeCampusID}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group value={this.state.Type1} as={Row} controlId="Type">
                    <Form.Label column lg="4">
                      Type
                    </Form.Label>
                    <Col sm={6}>
                      <Form.Check
                        inline
                        type="radio"
                        value="Admin"
                        label="Admin"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Segoe UI",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                        onChange={this.onChangeType}
                      />
                      <Form.Check
                        inline
                        type="radio"
                        value="Student"
                        label="Student"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Segoe UI",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                        onChange={this.onChangeType}
                      />
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col align="center">
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: "#2A324B",
                          borderColor: "#2A324B",
                          color: "white",
                        }}
                      >
                        Submit
                      </Button>
                    </Col>
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
