import React from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Form,Button} from 'react-bootstrap';
export default function File() {
    
    return (
        
        <Container fluid>
				
        <Row style={{backgroundColor:"white"}}>
            <Col>
                  <form style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}>
                    <Row>
                        <Col lg="2"></Col>
                        <Col lg="8">
                            <Row>&nbsp;</Row>
                            <Form.Group as={Row} controlId="Choose file">
                                <Form.Label column lg="4">
                                   
                                </Form.Label>
                                <Col lg="8">
                                    <Form.Control type="file" style={{fontSize:"12px",fontFamily: "Segoe UI",fontWeight:"400",color:"#999999"}}/>
                                </Col>
                            </Form.Group>
                            <Row>
                                        <Col align="center"><Button type="upload" style={{backgroundColor:"#2A324B",borderColor:"#2A324B",color:"white"}}>Upload</Button></Col>
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
