import React from 'react'
export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email: "",
            password:"",
            h1:""
        }
    }

    changeEmail = (e) => {
       this.setState ({ email: e.target.value});
    }
    changePsswd = (e) => {
        this.setState ({ password: e.target.value});
     }

     submitData = (e)=>{
        e.preventDefault();
        this.setState({
            h1: `hello ${this.state.email}`,
          });  
    };
     
    render(){
        return (
            <div>
            <form onSubmit={this.submitData}>             
              <h2>Login Page</h2>
             
              Email:<br></br>
              <input type='email' placeholder="Enter your email" onChange={this.changeEmail}></input><br></br>
             Password:<br></br>
              <input type='password'placeholder="Enter your password" onBlur={this.changePsswd}></input><br></br>
              <button type='submit' onSubmit={this.submitData}>Submit</button><br></br>
            </form>
            <h1>{this.state.h1}</h1>
            </div>
            
          )
    }
 
}







