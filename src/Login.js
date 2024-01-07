import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import swal from 'sweetalert'
function Login(){
   const[username,setusername]=useState('');
   const[password,setpassword]=useState('');
   function validate(event){
    event.preventDefault();
      if(username==='Javascript' && password==='React'){
        swal('Login Successful','Congratulations,you logged in Successfully','success');
      }else{
        swal('Login Failed','Incorrect Username (or) Password,Try Again!','error');
      }
   }
    return(
    <div className='row justify-content-center '>
      <div className="col-md-4">
        <h1>User Authentication</h1>
      <form onSubmit={validate}>
      <input type="text" placeholder='username' value={username} className='form-control' onChange={(e)=>{setusername(e.target.value)}}/>
      <input type="text" placeholder='password' value={password} className='form-control' onChange={(e)=>{setpassword(e.target.value)}}/>
      <input type="Submit" name="Submit" className='btn btn-primary' />
      </form>
      </div>
    </div>
)
}
export default Login;