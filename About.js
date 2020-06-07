import React from 'react';
import './App.css';
import ImageUploader from 'react-images-upload';






 
//import Register from './register';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

class About extends React.Component{
    constructor(){
        super();
        this.state={ind:-1,
            data:[],
            pictures: [],
            nameError: "",
            emailError:""
           
           
        }
       
        this.onDrop = this.onDrop.bind(this);
    }
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };
      validate = () => {
        let nameError = "";
        let emailError = "";
    
    
        if (!this.state.name) {
          nameError = "name cannot be blank";
        }
    
        if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }
    
        if (emailError || nameError) {
          this.setState({ emailError, nameError });
          return false;
        }
    
        return true;
      };
    
  
    About=()=>{
        alert('you have clicked a button');
        var fname=this.refs.fname.value;
        var lname=this.refs.lname.value;
        var dob=this.refs.dob.value;
        var phn=this.refs.phn.value;
        var emailid=this.refs.emailid.value;
        var address=this.refs.address.value;
        var city=this.refs.city.value;
        var state=this.refs.state.value;
        var pincode=this.refs.pincode.value;
        var graduation=this.refs.graduation.value;
        var Resume=this.refs.Resume.value;
        var edudocs=this.refs.edudocs.value;
        var data = this.state.data;
        data.push({fname:fname,lname:lname,dob:dob,phn:phn,emailid:emailid,address:address,city:city,state:state,pincode:pincode,graduation:graduation,Resume:Resume,edudocs:edudocs});
       
        this.setState({data:data});
        
    }
  preview=()=>{
        var data = this.state.data; 
        console.log(data);
          }
 
   buttonedit=(ind)=>{

    var data = this.state.data[ind];
        
    this.refs.fname.value=data.fname;
    this.refs.lname.value=data.lname;
    this.refs.emailid.value=data.emailid;
    this.refs.phn.value=data.phn;
    this.refs.dob.value=data.dob;
    this.refs.address.value=data.address;
    this.refs.city.value=data.city;
    this.refs.state.value=data.state;
    this.refs.pincode.value=data.pincode;
    this.refs.graduation.value=data.graduation;
    this.refs.Resume.value=data.Resume;
    this.refs.edudocs.value=data.edudocs;

    this.setState({ind:ind});

  }
  buttonup=()=>{
    var fname=this.refs.fname.value;
    var lname=this.refs.lname.value;
    var dob=this.refs.dob.value;
    var phn=this.refs.phn.value;
    var emailid=this.refs.emailid.value;
    var address=this.refs.address.value;
    var city=this.refs.city.value;
    var state=this.refs.state.value;
    var pincode=this.state.pincode.value;;
    var graduation=this.refs.graduation.value;
    var Resume=this.refs.Resume.value;
    var edudocs=this.refs.edudocs.value;
     
     var ind = this.state.ind;
     var data = this.state.data;

     data[ind].fname= fname;
     data[ind].lname= lname;
     data[ind].emailid= emailid;
     data[ind].phn= phn;
     data[ind].dob= dob;
     data[ind].address= address;
     data[ind].city= city;
     data[ind].state= state;
     data[ind].pincode= pincode;
     data[ind].graduation= graduation;
     data[ind].Resume= Resume;
     data[ind].edudocs= edudocs;

     this.setState({data:data,ind:-1});

  }
   onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });

}
handleChange=(e)=>{
    this.setState({graduation:e.target.value});
}



    render(){
        var message='You selected '+this.state.graduation;
     
      
        return(
             <div>
                               <Router>
                                   <div className="head">
                               <p className="mn" > <Link to='/form'>REGISTERATION</Link></p> 
                             
                               <p className="mn" > <Link to='/preview'>PREVIEW</Link></p>
                                       </div>
                                       <Switch>
            <Route path="/form"> 
           
         <p className="headings">FIRST NAME* </p>  
            <input type="text"  className="errorMsg"   required  placeholder=" First name "ref="fname"    class="form-control" style={{ width:"600px"}}/><div style={{ fontSize: 12, color: "red" }}>  {this.state.nameError}</div> <p className="headings">LAST NAME* </p>     <input type="text"   required  placeholder=" Last name "ref="lname"    class="form-control" style={{ width:"600px"}}/>
                            
            <br></br>
            <p className="headings">UPLOAD YOUR IMAGE* </p>     <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText='Upload image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
           
           
           <p className="headings">DATE OF BIRTH* </p>  <input type="text"   placeholder=" Date of Birth "ref="dob"  class="form-control" style={{ width:"600px"}}/>
           <p className="headings">PHONE NUMBER* </p>   <input type="text"   placeholder=" Phone no "ref="phn"  class="form-control" style={{ width:"600px"}}/>
           <p className="headings">EMAIL ID*</p>   <input type="text"   placeholder=" Email Id "ref="emailid"  class="form-control" style={{ width:"600px"}}/>
           <p className="headings">ADDRESS* </p>   <input type="text"   placeholder="Address "ref="address"  class="form-control" style={{ width:"600px"}}/>
           <p className="headings">PINCODE*</p>   <input type="text"   placeholder="pincode "ref="pincode"  class="form-control" style={{ width:"600px"}}/>
           <p className="headings">CITY* </p>   <input type="text"   placeholder="city "ref="city"  class="form-control" style={{ width:"600px"}}/>
           <p className="headings">STATE* </p>  <input type="text"   placeholder="state "ref="state"  class="form-control" style={{ width:"600px"}}/>
               
           <p className="headings">GRADUATION* </p>    <select      inputMode="text" ref="graduation" value={this.state.graduation} 
        onChange={this.handleChange} >
  <option value="mtech">MTECH</option>
  <option value="btech">BTECH</option>
  <option value="bca">BCA</option>
  <option value="mca">MCA</option>
  <option value="bca">B.CS</option>
  <option value="mca">M.CS</option>
  
</select>
<p>{message}</p>
                  
<p className="headings">UPLOAD RESUME* </p>    <br></br>
    <input type="file"  required   id="exampleFormControlFile1" ref="Resume" label="Example file input" />
    <br></br>
    <p className="headings">EDUCATION DOCS* </p>     <br></br>
    <input type="file"   id="exampleFormControlFile1"  ref="edudocs" label="Example file input" />
            

           
  <div>  <input type='button' value="SUBMIT" class="btn btn-success" onClick={this.About}/>
             <input type='button' value="UPDATE" class="btn btn-primary" onClick={this.buttonup}/>
             </div>
                  
                
     


                  </Route>
                
                  <div>
                  <Route path="/preview"> 
         
         {this.state.data.map((r,i)=><div>

            <ul class="list-group list-group-flush">
  <li class="list-group-item"> FIRST NAME<br></br>{r.fname}</li>
  <li class="list-group-item">LAST NAME<br></br>{r.lname}</li>
  <li class="list-group-item">DATE OF BIRTH<br></br>{r.dob}</li>
  <li class="list-group-item">PHONE NUMBER<br></br>{r.phn} </li>
  <li class="list-group-item"> EMAIL ID<br></br>{r.emailid}</li>
  <li class="list-group-item">ADDRESS<br></br>{r.address}</li>
  <li class="list-group-item">STATE<br></br>{r.state}</li>
  <li class="list-group-item">CITY<br></br>{r.city} </li>
  <li class="list-group-item">PINCODE<br></br>{r.pincode} </li>
  <li class="list-group-item"> GRADUATION<br></br>{r.graduation}</li>
  <li class="list-group-item">RESUME<br></br>{r.Resume}</li>
  <li class="list-group-item">EDUCATION DOCS<br></br>{r.edudocs}</li>
  
</ul>
      
      
         <br></br>  
         <input type="button" class="btn btn-primary" value="EDIT" onClick={()=>this.buttonedit(i)} />
            </div>   
             )
            }
            

           </Route>
                  </div>
                  </Switch>

                                       </Router>
             </div>           
        );
    }
}
export default About;