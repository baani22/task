import React from 'react';
import './App.css';
import About from './About';

class Register extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            ind:-1,
        
        }
    }
about=()=>{
    var fname=this.refs.fname.value;
    var lname=this.refs.lname.value;
    var dob=this.refs.dob.value;
    var phn=this.refs.phn.value;
    var contactno=this.refs.contactno.value;
    var emailid=this.refs.emailid.value;
    var address=this.refs.address.value;
    var x=this.refs.x.value;
    var xii=this.refs.xii.value;
    var graduation=this.refs.graduation.value;


    var data = this.state.data;
    data.push({fname:fname,lname:lname,dob:dob,phn:phn,contactno:contactno,emailid:emailid,address:address,x:x,xii:xii,graduation:graduation});
    
    this.setState({data:data});

     

    console.log(data);
      
}
  
    render(){
       return(
         <div>
           
           <div className="hd">
            REGISTER
         </div>
         <About/>
        
         </div>
       )
 
         
   }
 
 };
 export default Register;