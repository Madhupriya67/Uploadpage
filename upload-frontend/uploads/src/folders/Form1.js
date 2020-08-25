import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
export default class Form1 extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeMiddlename = this.onChangeMiddlename.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangeBloodgroup = this.onChangeBloodgroup.bind(this);
    this.onChangePermanentaddress = this.onChangePermanentaddress.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmailid= this.onChangeEmailid.bind(this);
    this.onChangeFathername = this.onChangeFathername.bind(this);
    this.onChangeFatherOccupation = this.onChangeFatherOccupation.bind(this);
    this.onChangeFatherContactNumber = this.onChangeFatherContactNumber.bind(this);
    this.onChangeFatherMailid = this.onChangeFatherMailid.bind(this);
    this.onChangeMothername = this.onChangeMothername.bind(this);
    this.onChangeMotherOccupation = this.onChangeMotherOccupation.bind(this);
    this.onChangeMotherContactNumber = this.onChangeMotherContactNumber.bind(this);
    this.onChangeMotherMailid = this.onChangeMotherMailid.bind(this);
    this.onChangeReservationCategory = this.onChangeReservationCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UserID: "",
      FirstName: "",
      Middlename: "",
      Lastname: "",
      Gender: "",
      DOB: "",
      Bloodgroup: "",
      Permanentaddress: "",
      PhoneNumber: "",
      Emailid: "",
      Fathername: "",
      FatherOccupation: "",
      FatherContactNumber: "",
      FatherMailid: "",
      Mothername: "",
      MotherOccupation: "",
      MotherContactNumber: "",
      MotherMailid: "",
      ReservationCategory: "",
    };
  }
  onChangeUserID(e) {
      console.log(e.target.value);
    this.setState({
      UserID: e.target.value,
    });
  }
  onChangeFirstName(e) {
    console.log(e.target.value);
    this.setState({
      FirstName: e.target.value,
    });
  }
  onChangeMiddlename(e) {
    console.log(e.target.value);
    this.setState({
      Middlename: e.target.value,
    });
  }
  onChangeLastname(e) {
    console.log(e.target.value);
    this.setState({
      Lastname: e.target.value,
    });
  }
  onChangeGender(e) {
    console.log(e.target.value);
  this.setState({
    Gender: e.target.value,
  });
}
onChangeDOB(e) {
  console.log(e.target.value);
this.setState({
  DOB: e.target.value,
});
}
onChangeBloodgroup(e) {
  console.log(e.target.value);
this.setState({
  Bloodgroup: e.target.value,
});
}
onChangePermanentaddress(e) {
  console.log(e.target.value);
this.setState({
  Permanentaddress: e.target.value,
});
}
onChangePhoneNumber(e) {
  console.log(e.target.value);
this.setState({
  PhoneNumber: e.target.value,
});
}
onChangeEmailid(e) {
  console.log(e.target.value);
this.setState({
  Emailid: e.target.value,
});
}
onChangeFatherMailid(e) {
  console.log(e.target.value);
this.setState({
  FatherMailid: e.target.value,
});
}
onChangeFathername(e) {
  console.log(e.target.value);
this.setState({
  Fathername: e.target.value,
});
}
onChangeFatherOccupation(e) {
  console.log(e.target.value);
this.setState({
  FatherOccupation: e.target.value,
});
}
onChangeFatherContactNumber(e) {
  console.log(e.target.value);
this.setState({
  FatherContactNumber: e.target.value,
});
}
onChangeFatherMailid(e) {
  console.log(e.target.value);
this.setState({
  FatherMailid: e.target.value,
});
}
onChangeMothername(e) {
  console.log(e.target.value);
this.setState({
  Mothername: e.target.value,
});
}
onChangeMotherOccupation(e) {
  console.log(e.target.value);
this.setState({
  MotherOccupation: e.target.value,
});
}
onChangeMotherContactNumber(e) {
  console.log(e.target.value);
this.setState({
 MotherContactNumber: e.target.value,
});
}
onChangeMotherMailid(e) {
  console.log(e.target.value);
this.setState({
  MotherMailid: e.target.value,
});
}
onChangeReservationCategory(e) {
  console.log(e.target.value);
this.setState({
  ReservationCategory: e.target.value,
});
}
  onSubmit(e) {
    e.preventDefault(); //Value will be submitted through react js
    const obj = {
      UserID: this.state.UserID,
      FirstName: this.state.FirstName,
      Middlename: this.state.Middlename,
      Lastname: this.state.Lastname,
      Gender: this.state.Gender,
      DOB: this.state.DOB,
      Bloodgroup: this.state.Bloodgroup,
      Permanentaddress: this.state.Permanentaddress,
      PhoneNumber: this.state.PhoneNumber,
      Emailid: this.state.Emailid,
      Fathername: this.state.Fathername,
      FatherOccupation: this.state.FatherOccupation,
      FatherContactNumber: this.state.FatherContactNumber,
      FatherMailid: this.state.FatherMailid,
      Mothername: this.state.Mothername,
      MotherOccupation: this.state.MotherOccupation,
      MotherContactNumber: this.state.MotherContactNumber,
      MotherMailid: this.state.MotherMailid,
      ReservationCategory: this.state.ReservationCategory,
    };

    console.log(obj);
    Axios.post("http://localhost/upload-backend/personaldetails.php", obj).then((res) =>
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
      FirstName: "",
      Middlename: "",
      Lastname: "",
      Gender: "",
      DOB: "",
      Bloodgroup: "",
      Permanentaddress: "",
      PhoneNumber: "",
      Emailid: "",
      Fathername: "",
      FatherOccupation: "",
      FatherContactNumber: "",
      FatherMailid: "",
      Mothername: "",
      MotherOccupation: "",
      MotherContactNumber: "",
      MotherMailid: "",
      ReservationCategory: "",
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
<Form.Group as={Row} controlId='FirstName' >
         <Form.Label  column lg="4">
         First Name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.FirstName}
                                        onChange={this.onChangeFirstName}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Middlename'  >
         <Form.Label  column lg="4">
         Middle name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.Middlename}
                                        onChange={this.onChangeMiddlename}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Lastname'  >
         <Form.Label  column lg="4">
         Last name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.Lastname}
                                        onChange={this.onChangeLastname}
                                      />
                                    </Col>
</Form.Group>
<Form.Group  value={this.state.Gender} as={Row} controlId="Gender">
                        
                                        <Form.Label  column lg="4" >
                                            Gender
                                        </Form.Label>
                                        <Col sm={6}>
        <Form.Check inline
          type="radio"
          label="Male"
          value="Male"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
          onChange={this.onChangeGender}
                    
        />
        <Form.Check inline
          type="radio"
          label="Female"
          value="Female"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
          onChange={this.onChangeGender}
                     
        />
        </Col>
        </Form.Group>
         <Form.Group as={Row} controlId='DOB'  >
         <Form.Label column lg="4">
         DOB:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.DOB}
                                        onChange={this.onChangeDOB}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Bloodgroup'  >
         <Form.Label  column lg="4">
         Blood group:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.Bloodgroup}
                                        onChange={this.onChangeBloodgroup}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Permanentaddress'  >
         <Form.Label  column lg="4">
         Permanent address:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.Permanentaddress}
                                        onChange={this.onChangePermanentaddress}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='PhoneNumber'  >
         <Form.Label column lg="4">
         Phone Number:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.PhoneNumber}
                                        onChange={this.onChangePhoneNumber}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Emailid' >
         <Form.Label column lg="4">
         Email id:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.Emailid}
                                        onChange={this.onChangeEmailid}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Fathername'  >
         <Form.Label  column lg="4">
         Father name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.Fathername}
                                        onChange={this.onChangeFathername}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='FatherOccupation'  >
         <Form.Label column lg="4">
         Father Occupation:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.FatherOccupation}
                                        onChange={this.onChangeFatherOccupation}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='FatherContactNumber'  >
         <Form.Label  column lg="4">
         Father Contact Number:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.FatherContactNumber}
                                        onChange={this.onChangeFatherContactNumber}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='FatherMailid'  >
         <Form.Label  column lg="4">
         Father Mail id:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.FatherMailid}
                                        onChange={this.onChangeFatherMailid}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Mothername' >
         <Form.Label column lg="4">
         Mother name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.Mothername}
                                        onChange={this.onChangeMothername}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='MotherOccupation'>
         <Form.Label column lg="4">
         Mother Occupation:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.MotherOccupation}
                                        onChange={this.onChangeMotherOccupation}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='MotherContactNumber'  >
         <Form.Label  column lg="4">
         Mother Contact Number:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.MotherContactNumber}
                                        onChange={this.onChangeMotherContactNumber}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='MotherMailid'  >
         <Form.Label  column lg="4">
         Mother Mail id:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.MotherMailid}
                                        onChange={this.onChangeMotherMailid}
                                      />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='ReservationCategory'  >
         <Form.Label  column lg="4">
         Reservation Category:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.ReservationCategory}
                                        onChange={this.onChangeReservationCategory}
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