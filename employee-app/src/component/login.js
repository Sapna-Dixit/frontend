import React from "react"
import "../css/Showdata.css";

export const  Login = ()=>{

    //const [email, setEmail] = useState("");
    //const [pass, setPass]   =useState("");

    return (
        <div className="container">
        <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Login Form</h3>
          <div className="card-text">
           <form action="#" className="was-validated">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <a href="#">Forgot password?</a>
                <input type="password" className="form-control" id="passwrd" required />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Login</button>
              <div className="sign-up">
                Don't have an account? <a href="#">Create One</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
}