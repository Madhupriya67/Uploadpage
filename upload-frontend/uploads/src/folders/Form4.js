import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
export default class Form4 extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeUserID= this.onChangeUserID.bind(this);
    this.onChangeAssessmentpatner = this.onChangeAssessmentpatner.bind(this);
    this.onChangeAssessmentdate = this.onChangeAssessmentdate.bind(this);
    this.onChangeAssessmentID = this.onChangeAssessmentID.bind(this);
    this.onChangeOverallAptitude= this.onChangeOverallAptitude.bind(this);
    this.onChangeEnglish = this.onChangeEnglish.bind(this);
    this.onChangeQuantitative= this.onChangeQuantitative.bind(this);
    this.onChangeAnalytical = this.onChangeAnalytical.bind(this);
    this.onChangeDomian = this.onChangeDomian.bind(this);
    this.onChangeComputerFundamentals = this.onChangeComputerFundamentals.bind(this);
    this.onChangecoding = this.onChangecoding.bind(this);
    this.onChangeWET = this.onChangeWET.bind(this);
    this.onChangePersonality = this.onChangePersonality.bind(this);
    this.onChangeOverallscore = this.onChangeOverallscore.bind(this);
    this.onChangeOverallrank = this.onChangeOverallrank.bind(this);
    this.onChangeAnalyst = this.onChangeAnalyst.bind(this);
    this.onChangeCustomerServiceExecutive = this.onChangeCustomerServiceExecutive.bind(this);
    this.onChangeGraduateEngineerplant = this.onChangeGraduateEngineerplant.bind(this);
    this.onChangeGraduateEngineerRandD = this.onChangeGraduateEngineerRandD.bind(this);
    this.onChangeNetworkEngineer = this.onChangeNetworkEngineer.bind(this);
    this.onChangeOperationsExecutive = this.onChangeOperationsExecutive.bind(this);
    this.onChangeSalesExecutive = this.onChangeSalesExecutive.bind(this);
    this.onChangeSoftwareDeveloper = this.onChangeSoftwareDeveloper.bind(this);
    this.onChangeSoftwareEngineer = this.onChangeSoftwareEngineer.bind(this);
    this.onChangeSoftwareTester = this.onChangeSoftwareTester.bind(this);
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        UserID:"",
        Assessmentpatner: "",
        Assessmentdate: "",
        AssessmentID: "",
        OverallAptitude: "",
        English:"",
        Quantitative:"",
        Analytical:"",
        Domian:"",
        ComputerFundamentals:"",
        coding:"",
        WET:"",
        Personality:"",
        Overallscore:"",
        Overallrank:"",
        Analyst:"",
        CustomerServiceExecutive:"",
        GraduateEngineerplant:"",
        GraduateEngineerRandD:"",
        NetworkEngineer:"",
        OperationsExecutive:"",
        SalesExecutive:"",
        SoftwareDeveloper:"",
        SoftwareEngineer:"",
        SoftwareTester:"",
    };
  }
  
  onChangeUserID(e) {
    console.log(e.target.value);
  this.setState({
    UserID: e.target.value,
  });
}
  onChangeAssessmentpatner(e) {
      console.log(e.target.value);
    this.setState({
        Assessmentpatner: e.target.value,
    });
  }
  onChangeAssessmentdate(e) {
    console.log(e.target.value);
    this.setState({
      Assessmentdate: e.target.value,
    });
  }
  onChangeAssessmentID(e) {
    console.log(e.target.value);
    this.setState({
        AssessmentID: e.target.value,
    });
  }
  onChangeOverallAptitude(e) {
    console.log(e.target.value);
    this.setState({
        OverallAptitude: e.target.value,
    });
  }
  onChangeEnglish(e) {
    console.log(e.target.value);
    this.setState({
        English: e.target.value,
    });
  }
  onChangeQuantitative(e) {
    console.log(e.target.value);
    this.setState({
        Quantitative: e.target.value,
    });
  }
  onChangeAnalytical(e) {
    console.log(e.target.value);
    this.setState({
        Analytical: e.target.value,
    });
  }
  onChangeDomian(e) {
    console.log(e.target.value);
    this.setState({
        Domian: e.target.value,
    });
  }
  onChangeComputerFundamentals(e) {
    console.log(e.target.value);
    this.setState({
        ComputerFundamentals: e.target.value,
    });
  }
  onChangecoding(e) {
    console.log(e.target.value);
    this.setState({
        coding: e.target.value,
    });
  }
  onChangeWET(e) {
    console.log(e.target.value);
    this.setState({
        WET: e.target.value,
    });
  }
  onChangePersonality(e) {
    console.log(e.target.value);
    this.setState({
        Personality: e.target.value,
    });
  }
  onChangeOverallscore(e) {
    console.log(e.target.value);
    this.setState({
        Overallscore: e.target.value,
    });
  }
  onChangeOverallrank(e) {
    console.log(e.target.value);
    this.setState({
        Overallrank: e.target.value,
    });
  }
  onChangeAnalyst(e) {
    console.log(e.target.value);
    this.setState({
        Analyst: e.target.value,
    });
  }
  onChangeCustomerServiceExecutive(e) {
    console.log(e.target.value);
    this.setState({
        CustomerServiceExecutive: e.target.value,
    });
  }
  onChangeGraduateEngineerplant(e) {
    console.log(e.target.value);
    this.setState({
        GraduateEngineerplant: e.target.value,
    });
  }
  onChangeGraduateEngineerRandD(e) {
    console.log(e.target.value);
    this.setState({
        GraduateEngineerRandD: e.target.value,
    });
  }
  onChangeNetworkEngineer(e) {
    console.log(e.target.value);
    this.setState({
        NetworkEngineer: e.target.value,
    });
  }
  onChangeOperationsExecutive(e) {
    console.log(e.target.value);
    this.setState({
        OperationsExecutive: e.target.value,
    });
  }
  onChangeSalesExecutive(e) {
    console.log(e.target.value);
    this.setState({
        SalesExecutive: e.target.value,
    });
  }
  onChangeSoftwareDeveloper(e) {
    console.log(e.target.value);
    this.setState({
        SoftwareDeveloper: e.target.value,
    });
  }
  onChangeSoftwareEngineer(e) {
    console.log(e.target.value);
    this.setState({
        SoftwareEngineer: e.target.value,
    });
  }
  onChangeSoftwareTester(e) {
    console.log(e.target.value);
    this.setState({
        SoftwareTester: e.target.value,
    });
  }
 
 
  onSubmit(e) {
    e.preventDefault(); //Value will be submitted through react js
    const obj = {
      UserID:this.state.UserID,
        Assessmentpatner: this.state.Assessmentpatner,
        Assessmentdate: this.state.Assessmentdate,
        AssessmentID: this.state.AssessmentID,
        OverallAptitude: this.state.OverallAptitude,
        English: this.state.English,
        Quantitative: this.state.Quantitative,
        Analytical:this.state.Analytical,
        Domian:this.state.Domian,
        ComputerFundamentals:this.state.ComputerFundamentals,
        coding:this.state.coding,
        WET:this.state.WET,
        Personality:this.state.Personality,
        Overallscore:this.state.Overallscore,
        Overallrank:this.state.Overallrank,
       Analyst:this.state. Analyst,
        CustomerServiceExecutive:this.state.CustomerServiceExecutive,
        GraduateEngineerplant:this.state.GraduateEngineerplant,
        GraduateEngineerRandD:this.state. GraduateEngineerRandD,
        NetworkEngineer:this.state. NetworkEngineer,
        OperationsExecutive:this.state.OperationsExecutive,
        SalesExecutive:this.state. SalesExecutive,
        SoftwareDeveloper:this.state.SoftwareDeveloper,
        SoftwareEngineer:this.state.SoftwareEngineer,
        SoftwareTester:this.state.SoftwareTester,

    };

    console.log(obj);
    Axios.post("http://localhost/upload-backend/arecocubes.php", obj).then((res) =>
      window.alert(res.data)
    )
    .catch((err) =>{
        window.alert(err.message);
        console.log(err)
    } 
    
    );
    //console.log(obj);
    this.setState({
      UserID:"",
        Assessmentpatner: "",
        Assessmentdate: "",
        AssessmentID: "",
        OverallAptitude: "",
        English:"",
        Quantitative:"",
        Analytical:"",
        Domian:"",
        ComputerFundamentals:"",
        coding:"",
        WET:"",
        Personality:"",
        Overallscore:"",
        Overallrank:"",
        Analyst:"",
        CustomerServiceExecutive:"",
        GraduateEngineerplant:"",
        GraduateEngineerRandD:"",
        NetworkEngineer:"",
        OperationsExecutive:"",
        SalesExecutive:"",
        SoftwareDeveloper:"",
        SoftwareEngineer:"",
        SoftwareTester:"",
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
<Form.Group as={Row} controlId='UserId' >
         <Form.Label column lg="4">
         User Id:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" defaultvalue="CoCubes" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.UserID}
                                        onChange={this.onChangeUserID}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Assessmentpatner' >
         <Form.Label column lg="4">
         Assessment patner:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" defaultvalue="CoCubes" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Assessmentpatner}
                                        onChange={this.onChangeAssessmentpatner}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Assessmentdate' >
         <Form.Label column lg="4">
         Assessment date:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date"  style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Assessmentdate}
                                        onChange={this.onChangeAssessmentdate}/>
                                    </Col>
</Form.Group>

<Form.Group as={Row} controlId='AssessmentID'  >
         <Form.Label  column lg="4">
         Assessment ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                        value={this.state.AssessmentID}
                                        onChange={this.onChangeAssessmentID}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='OverallAptitude' >
         <Form.Label  column lg="4">
         Overall Aptitude:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                         value={this.state.OverallAptitude}
                                         onChange={this.onChangeOverallAptitude}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='English'>
         <Form.Label  column lg="4">
         English:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                         value={this.state.English}
                                         onChange={this.onChangeEnglish}    />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Quantitative'  >
         <Form.Label  column lg="4">
         Quantitative:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.Quantitative}
                                        onChange={this.onChangeQuantitative}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Analytical'  >
         <Form.Label  column lg="4">
         Analytical:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                        value={this.state.Analytical}
                                        onChange={this.onChangeAnalytical}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Domian' >
         <Form.Label  column lg="4">
         Domian:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                         value={this.state.Domian}
                                         onChange={this.onChangeDomian}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='ComputerFundamentals'  >
         <Form.Label  column lg="4">
         Computer Fundamentals:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.ComputerFundamentals}
                                        onChange={this.onChangeComputerFundamentals}   />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='coding' >
         <Form.Label column lg="4">
         coding:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                       value={this.state.coding}
                                       onChange={this.onChangecoding}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='WET'  >
         <Form.Label  column lg="4">
         WET:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                         value={this.state.WET}
                                         onChange={this.onChangeWET}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Personality'  >
         <Form.Label column lg="4">
         Personality:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                        value={this.state.Personality}
                                        onChange={this.onChangePersonality}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Over all score'>
         <Form.Label  column lg="4">
         Over all score:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                         value={this.state.Overallscore}
                                         onChange={this.onChangeOverallscore} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Over all rank' >
         <Form.Label  column lg="4">
         Over all rank:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control  type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                         value={this.state.Overallrank}
                                         onChange={this.onChangeOverallrank} />
                                    </Col>
</Form.Group>
<Form.Group   as={Row} controlId="Analyst">
                                        <Form.Label column lg="4" >
                                        Analyst: 
                                        </Form.Label>
                                        <Col sm={6}>
        
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Analyst}
          onChange={this.onChangeAnalyst}/>
        
        </Col>
        </Form.Group>
      
        <Form.Group    as={Row} controlId="CustomerServiceExecutive">
                                        <Form.Label  column lg="4" >
                                        Customer Service Executive:
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.CustomerServiceExecutive}
          onChange={this.onChangeCustomerServiceExecutive}/>
        
        </Col>
        </Form.Group>
     
        <Form.Group   as={Row} controlId="GraduateEngineerplant" >
                                        <Form.Label  column lg="4" >
                                        Graduate Engineer(Plant):
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.GraduateEngineerplant}
          onChange={this.onChangeGraduateEngineerplant}/>
        
        </Col>
        </Form.Group>
     
        <Form.Group   as={Row} controlId="GraduateEngineerRandD">
                                        <Form.Label column lg="4" >
                                        Graduate Engineer(R and D): 
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.GraduateEngineerRandD} 
          onChange={this.onChangeGraduateEngineerRandD}/>
        
        </Col>
        </Form.Group>
      
        <Form.Group   as={Row} controlId="NetworkEngineer" >
                                        <Form.Label  column lg="4" >
                                        Network Engineer: 
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.NetworkEngineer}
          onChange={this.onChangeNetworkEngineer}/>
        
        </Col>
        </Form.Group>
      
        <Form.Group   as={Row} controlId="OperationsExecutive" >
                                        <Form.Label  column lg="4" >
                                        Operations Executive:
                                        </Form.Label>
                                        <Col sm={6}>
       
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.OperationsExecutive}
          onChange={this.onChangeOperationsExecutive}/>
        
        </Col>
        </Form.Group>
        <Form.Group   as={Row} controlId="SalesExecutive" >
                                        <Form.Label  column lg="4" >
                                        Sales Executive:  
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.SalesExecutive}
          onChange={this.onChangeSalesExecutive}/>
        
        </Col>
        </Form.Group >
        <Form.Group  as={Row} controlId="SoftwareDeveloper"  >
                                        <Form.Label column lg="4" >
                                        Software Developer:
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.SoftwareDeveloper} 
          onChange={this.onChangeSoftwareDeveloper}/>
        
        </Col>
        </Form.Group>
        <Form.Group   as={Row} controlId="SoftwareEngineer">
                                        <Form.Label  column lg="4" >
                                        Software Engineer: 
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.SoftwareEngineer}
          onChange={this.onChangeSoftwareEngineer}/>
        
        </Col>
        </Form.Group>
        <Form.Group   as={Row} controlId="SoftwareTester"  >
                                        <Form.Label column lg="4" >
                                        Software Tester: 
                                        </Form.Label>
                                        <Col sm={6}>
                                        <Form.Control type="text"
          style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
          value={this.state.SoftwareTester}
          onChange={this.onChangeSoftwareTester}/>
        
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