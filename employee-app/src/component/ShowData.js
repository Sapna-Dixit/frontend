import axios from "axios";
import  { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../actions/EmployeeAction";
import "../css/Showdata.css";


export const ShowData = ()=>{

  const user = useSelector((state)=>state.allEmployee.users);
 
  const  dispatch = useDispatch();

  const getDetails = async()=>{
    const res = await axios.get(`http://localhost:8000/empRegister/registers`)
    .catch((err)=>{
      console.log(err)
    });
    dispatch(getEmployee(res.data));
  }

 useEffect(()=>{
   getDetails();
 },[])

//  useEffect(()=>{
//   dispatch(getEmployee());
//  },[dispatch])
 
  console.log("Get Employee Details : ",user);

    return(
        <div>
        <div className="container-fluid">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div className="col-sm-6">
           
						<a href="/Registration" className="btn btn-success" data-toggle="modal">
              <i className="fa-solid fa-circle-plus"></i> <span>Add New Employee</span></a>
            
	                </div>
                </div>
            </div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                       <th>Id</th>
						            <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
						            <th>Phone</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                {

                  user.map((item )=> (
                  <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.gender}</td>
                  <td>{item.age}</td>
                  <td>
              
                    <a
                      href="#editEmployeeModal"
                      className="edit"
                      data-toggle="modal"
                    >
                      <i
                        className="fa fa-pen"
                        data-toggle="tosolidoltip"
                        title="Edit"
                       ></i>
                    </a>
                    <a
                      // href="#deleteEmployeeModal"
                      className="delete"
                      data-toggle="modal"
                      data-target ="#deleteEmployeeModal"
                    >
                      <i
                        className="fa-solid fa-trash-can"
                        data-toggle="tooltip"
                        title="Delete"
                      
                      ></i>
                    </a>
                  </td>
                </tr>
                  ))}
                </tbody>
            </table>
		</div>
    </div>
{	// <!-- Edit Modal HTML -->
    }
	<div id="addEmployeeModal" className="modal fade">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				  <form action="#" className="was-validated"  >
					<div className="modal-header">						
						<h4 className="modal-title">Add Employee</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						 <div className="row">
    <div className="col-md-6">
    <div className="form-group">
    <label for="fname">First Name</label>
    <input type="text" className="form-control" id="fname" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
    <div className="col-md-6">
     <div className="form-group">
    <label for="lname">Last Name</label>
    <input type="text" className="form-control" id="lname" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="email">Email</label>
    <input type="email" className="form-control" id="email" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="phone">Phone</label>
    <input type="text" className="form-control" id="phone" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group gender">
         <legend className="gender">Gender</legend>
      <div className="form-check-inline">
      <label className="form-check-label" for="radio1">
        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>Male
      </label>
    </div>
    <div className="form-check-inline">
      <label className="form-check-label" for="radio2">
        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>Female
      </label>
    </div>
  </div>
</div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="age">Age</label>
    <input type="text" className="form-control" id="age" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="passwrd">Password</label>
    <input type="password" className="form-control" id="passwrd" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="cpasswrd">Confirm Password</label>
    <input type="password" className="form-control" id="cpasswrd" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
  </div>		
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-secondary" data-dismiss="modal" value="Cancel"/>
						<input type="submit" className="btn btn-success" value="Add"/>
					</div>
				</form>
			</div>
		</div>
	</div>
{	// <!-- Edit Modal HTML -->
    }
	<div id="editEmployeeModal" className="modal fade">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
			  <form action="#" className="was-validated">
					<div className="modal-header">						
						<h4 className="modal-title">Edit Employee</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						 <div className="row">
    <div className="col-md-6">
    <div className="form-group">
    <label for="fname">First Name</label>
    <input type="text" className="form-control" id="fname1" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
    <div className="col-md-6">
     <div className="form-group">
    <label for="lname">Last Name</label>
    <input type="text" className="form-control" id="lname1" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="email">Email</label>
    <input type="email" className="form-control" id="email1" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="phone">Phone</label>
    <input type="text" className="form-control" id="phone1" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group gender">
         <legend className="gender">Gender</legend>
      <div className="form-check-inline">
      <label className="form-check-label" for="radio1">
        <input type="radio" className="form-check-input" id="radio11" name="optradio" value="option1" checked/>Male
      </label>
    </div>
    <div className="form-check-inline">
      <label className="form-check-label" for="radio2">
        <input type="radio" className="form-check-input" id="radio21" name="optradio" value="option2"/>Female
      </label>
    </div>
  </div>
</div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="age1">Age</label>
    <input type="text" className="form-control" id="age1" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="passwrd1">Password</label>
    <input type="password" className="form-control" id="passwrd1" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
     <div className="col-md-6">
    <div className="form-group">
    <label for="cpasswrd1">Confirm Password</label>
    <input type="password" className="form-control" id="cpasswrd1" required/>
     <div className="valid-feedback">Valid.</div>
     <div className="invalid-feedback">Please fill out this field.</div>
  </div>
    </div>
  </div>			
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-secondary" data-dismiss="modal" value="Cancel"/>
						<input type="submit" className="btn btn-info" value="Save"/>
					</div>
				</form>
			</div>
		</div>
	</div>
{	// <!-- Delete Modal HTML -->
}
	<div id="deleteEmployeeModal" className="modal fade">
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
				<form>
					<div className="modal-header">						
						<h4 className="modal-title">Delete Employee</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						<p>Are you sure you want to delete these Records?</p>
						<p className="text-warning"><small>This action cannot be undone.</small></p>
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-secondary" data-dismiss="modal" value="Cancel"/>
						<input type="submit" className="btn btn-danger" value="Delete"/>
					</div>
				</form>
			</div>
		</div>
	</div>
        </div>
    
    
)}
