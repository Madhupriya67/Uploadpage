import React,{useState} from 'react';
import File from "./folders/File";
import Form5 from "./folders/Form";
import {Row,Col} from 'react-bootstrap';


function Academicdetails() {
    const [open,setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    
  return (
    <div>
      
      <Row style={{backgroundColor:"#2A324B",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
      
    	   <div id="rov" onClick={()=>setOpen(!open)}  >Set Data Manually</div>
           {open && <Form5 />}
           </Col>
				</Row><br></br>
        
      <Row style={{backgroundColor:"#2A324B",color:"white"}}>
					<Col xs="12" className="p-2" align="center">
         <div id="rov" onClick={()=>setOpen1(!open1)}>Upload File</div>
         {open1 && <File />}
        

         </Col>
				</Row><br></br>
        
    </div>
  );
}

export default Academicdetails;
