import React from 'react';
import './App.css';
import Users from './users';
import Personaldetails from './personaldetails';
import Academicdetails from './academicdetails';
import Navbar from "./Navbar";
import {BrowserRouter as Router,  Route}from 'react-router-dom';
import Ari from './ari';
import AreAmcat from './areamcat';
import AreCoCubes from './arecocubes';
import Cdt from './cdt';
import Ita from './ita';
import Companydetails from './companydetails';




function App() {
 
  return (
    <Router>
    <div className="App">
      <form>
      <span className="formtext"></span>
      <div class="text-left mb-3">
      <h2 align='center'>Uploads</h2><br></br>
      <Route exact path="/" component={Navbar}/>
      <Route path="/users" component={Users} />
      <users />
      <Route path="/personaldetails" component={Personaldetails} />
      <Route path="/academicdetails" component={Academicdetails} />
      <Route path="/ari" component={Ari} />
      <Route path="/areamcat" component={AreAmcat} />
      <Route path="/arecocubes" component={AreCoCubes} />
      <Route path="/cdt" component={Cdt} />
      <Route path="/ita" component={Ita} />
      <Route path="/companydetails" component={Companydetails} />
       </div>
    	</form>
    </div>
    </Router>
  );
}

export default App;
