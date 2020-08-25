import React, { Component } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';
import Axios from 'axios';

 
export default class Form8 extends Component {
    constructor(props) 
    {
        super(props);
        this.onChangeCompanyID = this.onChangeCompanyID.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeCompanyLogo = this.onChangeCompanyLogo.bind(this);
        this.onChangeCompanyofficialwebsite = this.onChangeCompanyofficialwebsite.bind(this);
        this.onChangeEmployeestrength = this.onChangeEmployeestrength.bind(this);      
        this.onChangeAnnualturnover = this.onChangeAnnualturnover.bind(this);
        this.onChangeAboutthecompany = this.onChangeAboutthecompany.bind(this);
        this.onChangeAnalytical = this.onChangeAnalytical.bind(this);
        this.onChangeHRName = this.onChangeHRName.bind(this);
        this.onChangeTechinicalinterviewername = this.onChangeTechinicalinterviewername.bind(this);
        this.onChangeRecruitmentDate = this.onChangeRecruitmentDate.bind(this);    
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            CompanyID:'',
            CompanyName: '',
            CompanyLogo:'',
            Companyofficialwebsite:'',
            Employeestrength:'',
            Annualturnover:'',
            Aboutthecompany:'',
            Analytical:'',
            HRName:'',
            Techinicalinterviewername:'',
            RecruitmentDate:''
        }
    }
            onChangeCompanyID(e) 
                {
                this.setState({
                    CompanyID: e.target.value
                });
                }
            onChangeCompanyName(e) 
                {
                this.setState({
                    CompanyName: e.target.value
                });
                }
            onChangeCompanyLogo(e) 
                {
                this.setState({
                    CompanyLogo: e.target.value
                });
                }
            onChangeCompanyofficialwebsite(e) 
                {
            this.setState({
                Companyofficialwebsite: e.target.value
                });
                 }

            onChangeEmployeestrength(e) 
                {
                    this.setState({
                        Employeestrength: e.target.value
                    });
                }

                onChangeAnnualturnover(e) 
                {
                    this.setState({
                        Annualturnover: e.target.value
                    });
                }
                onChangeAboutthecompany(e) 
                {
                    this.setState({
                        Aboutthecompany: e.target.value
                    });
                }
                onChangeAnalytical(e) 
                {
                    this.setState({
                        Analytical: e.target.value
                    });
                }
                onChangeHRName(e) 
                {
                    this.setState({
                        HRName: e.target.value
                    });
                }
                onChangeTechinicalinterviewername(e) 
                {
                    this.setState({
                        Techinicalinterviewername: e.target.value
                    });
                }
                onChangeRecruitmentDate(e) 
                {
                    this.setState({
                        RecruitmentDate: e.target.value
                    });
                }

        onSubmit(e)
         {
            e.preventDefault();//Value will be submitted through react js
            const obj = {
                CompanyID : this.state.CompanyID,
                CompanyName: this.state.CompanyName,
                CompanyLogo: this.state.CompanyLogo,
                Companyofficialwebsite: this.state.Companyofficialwebsite,
                Employeestrength:this.state.Employeestrength,
                Annualturnover:this.state.Annualturnover,
                Aboutthecompany:this.state.Aboutthecompany,
                Analytical:this.state.Analytical,
                HRName:this.state.HRName,
                Techinicalinterviewername:this.state.Techinicalinterviewername,
                RecruitmentDate:this.state.RecruitmentDate,

            };
            Axios.post("http://localhost:80/GCGC_V2.0/companydetails.php",obj).then(res => console.log(res.data));
            //console.log(obj);
            this.setState({
                    CompanyID: '',
                    CompanyName:'',
                    CompanyLogo:'',
                    Companyofficialwebsite:'',
                    Employeestrength:'',
                    Annualturnover:'',
                    Aboutthecompany:'',
                    Analytical:'',
                    HRName:'',
                    Techinicalinterviewername:'',
                    RecruitmentDate:''
                })
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
<Form.Group as={Row} controlId='CompanyID'  >
         <Form.Label column lg="4">
                                        Company ID:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                         value={this.state.CompanyID}
                                         onChange={this.onChangeCompanyID}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='CompanyName' >
         <Form.Label column lg="4">
                                        Company Name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                         value={this.state.CompanyName}
                                         onChange={this.onChangeCompanyName}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='CompanyLogo' >
         <Form.Label  column lg="4">
         Company Logo:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                        value={this.state.CompanyLogo}
                                            onChange={this.onChangeCompanyLogo}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Companyofficialwebsite'  >
         <Form.Label column lg="4">
         Company official website:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                         value={this.state.Companyofficialwebsite}
                                         onChange={this.onChange6666Companyofficialwebsite}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Employeestrength'  >
         <Form.Label  column lg="4">
         Employee strength:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                         value={this.state.Employeestrength}
                                         onChange={this.onChangeEmployeestrength}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Annualturnover'  >
         <Form.Label  column lg="4">
         Annual turnover:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                         value={this.state.Annualturnover}
                                         onChange={this.onChangeAnnualturnover}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Aboutthecompany' >
         <Form.Label  column lg="4">
         About the company:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}} 
                                         value={this.state.Aboutthecompany}
                                         onChange={this.onChangeAboutthecompany}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Analytical'  >
         <Form.Label column lg="4">
         Analytical:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                         value={this.state.Analytical}
                                         onChange={this.onChangeAnalytical}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='HRName'  >
         <Form.Label  column lg="4">
         HR Name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                         value={this.state.HRName}
                                         onChange={this.onChangeHRName}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='Techinicalinterviewername'  >
         <Form.Label column lg="4">
         Techinical interviewer name:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="text"style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}  
                                         value={this.state.Techinicalinterviewername}
                                         onChange={this.onChangeTechinicalinterviewername}/>
                                    </Col>
</Form.Group>
<Form.Group as={Row} controlId='RecruitmentDate'  >
         <Form.Label  column lg="4">
         Recruitment Date:
        </Form.Label>
                                    <Col lg="8">
                                        <Form.Control type="date" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}
                                         value={this.state.RecruitmentDate}
                                         onChange={this.onChangeRecruitmentDate}/>
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