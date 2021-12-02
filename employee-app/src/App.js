import {Header} from "./component/Header";
import { Route,Routes} from "react-router-dom";
import {EmployeeRegister} from "./component/EmployeeRegister";
import { Login } from "./component/login"
import { ShowData } from "./component/ShowData";
function App() {
  return (
    <div className="App">
  
    <Header/>
    <Routes>
    <Route  exact path ="/Registration" element ={<EmployeeRegister/>}></Route>
    <Route path ="/login" element = {<Login/>}></Route>
    <Route path ="/ShowData" element = {<ShowData/>}></Route>
    </Routes>
    
    </div>
  );
}

export default App;
