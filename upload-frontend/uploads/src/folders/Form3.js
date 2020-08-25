import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";
export default class Form3 extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserID = this.onChangeUserID.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onChangeAssessmentId = this.onChangeAssessmentId.bind(this);
    this.onChangelogicalability= this.onChangelogicalability.bind(this);
    this.onChangeLPA = this.onChangeLPA.bind(this);
    this.onChangeEnglishcomprehension = this.onChangeEnglishcomprehension.bind(this);
    this.onChangeECP= this.onChangeECP.bind(this);
    this.onChangeQuantitativeability = this.onChangeQuantitativeability.bind(this);
    this.onChangeQAP = this.onChangeQAP.bind(this);
    this.onChangeAutomata = this.onChangeAutomata.bind(this);
    this.onChangeAP = this.onChangeAP.bind(this);
    this.onChangeAutomataFix = this.onChangeAutomataFix.bind(this);
    this.onChangeAFP = this.onChangeAFP.bind(this);
    this.onChangeDomain1 = this.onChangeDomain1.bind(this);
    this.onChanged1p = this.onChanged1p.bind(this);
    this.onChangeDomain2 = this.onChangeDomain2.bind(this);
    this.onChangeDomainAverage = this.onChangeDomainAverage.bind(this);
    this.onChangeDP = this.onChangeDP.bind(this);
    this.onChanged2p = this.onChanged2p.bind(this);
    this.onChangeOverallscore = this.onChangeOverallscore.bind(this);
    this.onChangeOverallscorepercentail = this.onChangeOverallscorepercentail.bind(this);
    this.onChangeOverallrank = this.onChangeOverallrank.bind(this);
    this.onChangeRemarks = this.onChangeRemarks.bind(this);
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      UserID: "",
      date: "",
      AssessmentId: "",
      logicalability: "",
      LPA:"",
      Englishcomprehension:"",
      Quantitative:"",
      ECP:"",
      Quantitativeability:"",
      QAP:"",
      Automata:"",
      AP:"",
      AutomataFix:"",
      AFP:"",
      Domain1:"",
      d1p:"",
      Domain2:"",
      d2p:"",
      DomainAverage:"",
      DP:"",
      Overallscore:"",
      Overallscorepercentail:"",
      Overallrank:"",
      Remarks:"",
    };
  }
  onChangeUserID(e) {
      console.log(e.target.value);
    this.setState({
        UserID: e.target.value,
    });
}
  onChangedate(e) {
    console.log(e.target.value);
    this.setState({
      date: e.target.value,
    });
  }
  onChangeAssessmentId(e) {
    console.log(e.target.value);
    this.setState({
      AssessmentId: e.target.value,
    });
  }
  onChangelogicalability(e) {
    console.log(e.target.value);
    this.setState({
      logicalability: e.target.value,
    });
  }
  onChangeLPA(e) {
    console.log(e.target.value);
    this.setState({
      LPA: e.target.value,
    });
  }
  onChangeEnglishcomprehension(e) {
    console.log(e.target.value);
    this.setState({
      Englishcomprehension: e.target.value,
    });
  }
  onChangeECP(e) {
    console.log(e.target.value);
    this.setState({
      ECP: e.target.value,
    });
  }
  onChangeQuantitativeability(e) {
    console.log(e.target.value);
    this.setState({
      Quantitativeability: e.target.value,
    });
  }
  onChangeQAP(e) {
    console.log(e.target.value);
    this.setState({
      QAP: e.target.value,
    });
  }
  onChangeAutomata(e) {
    console.log(e.target.value);
    this.setState({
      Automata: e.target.value,
    });
  }
  onChangeAP(e) {
    console.log(e.target.value);
    this.setState({
      AP: e.target.value,
    });
  }
  onChangeAutomataFix(e) {
    console.log(e.target.value);
    this.setState({
      AutomataFix: e.target.value,
    });
  }
  onChangeAFP(e) {
    console.log(e.target.value);
    this.setState({
      AFP: e.target.value,
    });
  }
  onChangeDomain1(e) {
    console.log(e.target.value);
    this.setState({
      Domain1: e.target.value,
    });
  }
  onChanged1p(e) {
    console.log(e.target.value);
    this.setState({
      d1p: e.target.value,
    });
  }
  onChangeDomain2(e) {
    console.log(e.target.value);
    this.setState({
      Domain2: e.target.value,
    });
  }
  onChanged2p(e) {
    console.log(e.target.value);
    this.setState({
      d2p: e.target.value,
    });
  }
  onChangeDomainAverage(e) {
    console.log(e.target.value);
    this.setState({
      DomainAverage: e.target.value,
    });
  }
  onChangeDP(e) {
    console.log(e.target.value);
    this.setState({
      DP: e.target.value,
    });
  }
  
  onChangeOverallscore(e) {
    console.log(e.target.value);
    this.setState({
        Overallscore: e.target.value,
    });
  }
  onChangeOverallscorepercentail(e) {
    console.log(e.target.value);
    this.setState({
        Overallscorepercentail: e.target.value,
    });
  }
  onChangeOverallrank(e) {
    console.log(e.target.value);
    this.setState({
        Overallrank: e.target.value,
    });
  }
  onChangeRemarks(e) {
    console.log(e.target.value);
    this.setState({
        Remarks: e.target.value,
    });
  }
  
  
  onSubmit(e) {
    e.preventDefault(); //Value will be submitted through react js
    const obj = {
      UserID: this.state.UserID,
      date: this.state.date,
      AssessmentId: this.state.AssessmentId,
      logicalability: this.state.logicalability,
      LPA: this.state.LPA,
      Englishcomprehension: this.state.Englishcomprehension,
      ECP: this.state.Quantitative,
      Quantitativeability:this.state.Quantitativeability,
      QAP:this.state.Domian,
      Automata:this.state.Automata,
      AP:this.state.AP,
      AutomataFix:this.state.AutomataFix,
      AFP:this.state.Personality,
      Domain1:this.state.Domain1,
      d1p:this.state.d1p,
      Domain2:this.state.Domain2,
      d2p:this.state.d2p,
      DomainAverage:this.state.DomainAverage,
      DP:this.state.DP,
      Overallscore:this.state.Overallscore,
      Overallscorepercentail:this.state.Overallscorepercentail,
      Overallrank:this.state.Overallrank,
      Remarks:this.state.Remarks,
    };

    console.log(obj);
    Axios.post("http://localhost/upload-backend/areamcat.php", obj).then((res) =>
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
      date: "",
      AssessmentId :"",
      logicalability: "",
      LPA:"",
      Englishcomprehension:"",
      ECP:"",
      Quantitativeability:"",
      QAP:"",
      Automata:"",
      AP:"",
      AutomataFix:"",
      AFP:"",
      Domain1:"",
      d1p:"",
      Domain2:"",
      d2p:"",
      DomainAverage:"",
      DP:"",
      Overallscore:"",
      Overallscorepercentail:"",
      Overallrank:"",
      Remarks:"",
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
         <Form.Label  column lg="4 ">
                                        User ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.UserID}
                                        onChange={this.onChangeUserID}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='date' >
         <Form.Label  column lg="4 ">
         Date:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.date}
                                        onChange={this.onChangedate} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AssessmentId'  >
         <Form.Label column lg="4">
         Assessment ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                        value={this.state.AssessmentId}
                                        onChange={this.onChangeAssessmentId} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='logicalability' >
         <Form.Label  column lg="4">
         Logical ability (900):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                        value={this.state.logicalability}
                                        onChange={this.onChangelogicalability} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='LPA' >
         <Form.Label column lg="4">
         logical ability percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                        value={this.state.LPA}
                                        onChange={this.onChangeLPA} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Englishcomprehension' >
         <Form.Label  column lg="4 ">
         English comprehension (900):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Englishcomprehension}
                                        onChange={this.onChangeEnglishcomprehension}  />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='ECP'  >
         <Form.Label column lg="4 ">
         English comprehension percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.ECP}
                                        onChange={this.onChangeECP} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Quantitativeability' >
         <Form.Label column lg="4 ">
        Quantitative ability (900):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Quantitativeability}
                                        onChange={this.onChangeQuantitativeability} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='QAP' >
         <Form.Label column lg="4 ">
         Quantitative ability percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                        value={this.state.QAP}
                                        onChange={this.onChangeQAP} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Automata'  >
         <Form.Label column lg="4 ">
         Automata(100):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Automata}
                                        onChange={this.onChangeAutomata} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AP' >
         <Form.Label  column lg="4 ">
         Automata ability Percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}   
                                        value={this.state.AP}
                                        onChange={this.onChangeAP} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AutomataFix' >
         <Form.Label column lg="4 ">
         Automata Fix (100):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.AutomataFix}
                                        onChange={this.onChangeAutomataFix} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='AFP' >
         <Form.Label  column lg="4 ">
         Automata Fix Percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.AFP}
                                        onChange={this.onChangeAFP} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Domain1' >
         <Form.Label  column lg="4 ">
         Domain 1 (900):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Domain1}
                                        onChange={this.onChangeDomain1} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='d1p' >
         <Form.Label  column lg="4 ">
         Domain 1 percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.d1p}
                                        onChange={this.onChanged1p} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Domain2' >
         <Form.Label  column lg="4 ">
         Domain 2 (900):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Domain2}
                                        onChange={this.onChangeDomain2} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='d2p' >
         <Form.Label  column lg="4 ">
         Domain 2 percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.d2p}
                                        onChange={this.onChanged2p} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='DomainAverage' >
         <Form.Label  column lg="4 ">
         Domain Average (900):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.DomainAverage}
                                        onChange={this.onChangeDomainAverage} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='DP' >
         <Form.Label  column lg="4 ">
         Domain Average percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.DP}
                                        onChange={this.onChangeDP} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Overallscore'  >
         <Form.Label column lg="4">
         Over all score (3800):
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Overallscore}
                                        onChange={this.onChangeOverallscore} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Overallscorepercentail'  >
         <Form.Label column lg="4">
         Over all score percentail:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Overallscorepercentail}
                                        onChange={this.onChangeOverallscorepercentail} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Overallrank'  >
         <Form.Label  column lg="4">
         Over all rank:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Overallrank}
                                        onChange={this.onChangeOverallrank} />
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Remarks' >
         <Form.Label  column lg="4 ">
         Remarks:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                        value={this.state.Remarks}
                                        onChange={this.onChangeRemarks} />
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