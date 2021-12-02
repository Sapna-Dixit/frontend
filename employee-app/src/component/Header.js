import React from "react";
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";


export const Header = ()=>{
    return(
        <div>
            <Link to ="/Registration">
                <Button className ="btn btn-success p 1">Registration</Button>
            </Link>
            <Link to="login">
                <Button className ="btn btn-success p 1">Login</Button>
            </Link>
            <Link to="/ShowData">
                <Button className = "btn btn-success">ShowData</Button>
            </Link>
         
        </div>
    )
}

