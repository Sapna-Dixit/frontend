import React, {useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployee } from "../actions/EmployeeAction";
import "../css/registration.css";
import axios from "axios";


export const EmployeeRegister = ()=>{
    const [user, setUser] = useState({
        firstName : '',
        lastName  : '',
        email     : '',
        phone     : '',
        gender    : '',
        age       : '',
        password  : '',
        confirmPassword :''

    });

    const dispatch = useDispatch();
    
     
    function handleOnChange(e)
    {
        const {name, value} = e.target;
        setUser({ ...user, [name]:value});

    }

    const handleOnSubmit = async (e) =>
    {
        e.preventDefault();

        const response = await axios.post(`http://localhost:8000/empRegister/registers`,user)
        .catch((err)=>{
          console.log(err);
        });        
        dispatch(setEmployee(response)); 
        console.log(dispatch(setEmployee(response)));
    }

  
    return(

     <div className="card registration-form">
     <div className="card-body">
       <h3 className="card-title text-center">Registration Form</h3>
       <div className="card-text">
       <form onSubmit={(e)=>handleOnSubmit(e)} className="was-validated">
     <div className="row">
       <div className="col-md-6">
       <div className="form-group">
       <label htmlFor="fname">First Name</label>
       <input type="text" className="form-control" id="fname" 
       name = "firstName" 
       value = {user.firstName} 
       onChange = {(e) => 
           handleOnChange(e)}
       required/>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
     </div>
       </div>
       <div className="col-md-6">
        <div className="form-group">
       <label htmlFor="lname">Last Name</label>
       <input type="text" 
       className="form-control"
        id="lname" 
       name = "lastName"
       value = {user.lastName} 
       onChange = {(e) => 
        handleOnChange(e)}
       required/>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
     </div>
       </div>
        <div className="col-md-6">
       <div className="form-group">
       <label htmlFor="email">Email</label>
       <input type="email"
        className="form-control" 
        id="email" 
        name = "email" 
        value = {user.email} 
        onChange = {(e) => 
            handleOnChange(e)}
        required/>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
     </div>
       </div>
        <div className="col-md-6">
       <div className="form-group">
       <label htmlFor="phone">Phone</label>
       <input type="text" 
       className="form-control" 
       id="phone" 
       name = "phone" 
       value = {user.phone} 
       onChange = {(e) => 
        handleOnChange(e)}
       required/>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
     </div>
       </div>
        <div className="col-md-6">
       <div className="form-group gender">
            <legend className="gender">Gender</legend>
         <div className="form-check-inline">
         <label className="form-check-label" htmlFor="radio1">
           <input type="radio" 
           className="form-check-input" 
           id="radio1" 
           name="gender"
            value={user.gender}
            onClick = {() => user.gender = "male"}
            onChange = {(e) => 
                handleOnChange(e)}
            checked/>Male
         </label>
       </div>
       <div className="form-check-inline">
         <label className="form-check-label" htmlFor="radio2">
           <input type="radio" 
           className="form-check-input" 
           id="radio2" 
           name="gender"
           value={user.gender}
           onClick = {() => user.gender = "Female"}
           onChange = {(e) => 
            handleOnChange(e)}/>Female
         </label>
       </div>
     </div>
   </div>
        <div className="col-md-6">
       <div className="form-group">
       <label htmlFor="age">Age</label>
       <input type="text" 
       className="form-control"
        id="age"
        name = "age" 
        value = {user.age} 
        onChange = {(e) => 
            handleOnChange(e)}
         required/>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
     </div>
       </div>
        <div className="col-md-6">
       <div className="form-group">
       <label htmlFor="passwrd">Password</label>
       <input type="password" 
       className="form-control"
        id="passwrd"
        name = "password"
        value = {user.password} 
        onChange = {(e) => 
            handleOnChange(e)}
        required/>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
     </div>
       </div>
        <div className="col-md-6">
       <div className="form-group">
       <label htmlFor="cpasswrd">Confirm Password</label>
       <input type="password" 
       className="form-control" 
       id="cpasswrd" 
       name = "confirmPassword"
       value = {user.confirmPassword} 
       onChange = {(e) => 
        handleOnChange(e)}
       required/>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
     </div>
       </div>
     </div>
       <button type="submit" className="btn btn-primary btn-block">Register</button>
    
       </form>
       </div>
     </div>
   </div>
    )
}