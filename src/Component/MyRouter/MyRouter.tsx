import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import IndexPage from "../Content/IndexPage/IndexPage";
import Reciept from "../Content/Webscraping/Reciept"
import Workpermit from "../Content/Webscraping/Workpermit"
import Dashboard from "../Content/Dashboard/Dashboard1";
import Home from "../Content/Homepage/Home";
import Login from "../Content/Loginreg/Login";
import Register from "../Content/Loginreg/Register";
import Forgetpassword from "../Content/Loginreg/Forgetpassword";
import JobDescription from "../Content/Homepage/JobDescription";
import Personel from "../Content/Homepage/Personal";
import RedirectHome from "../Content/Private_redirect/RedirectHome";
import SwitchGear from "../Content/PM_Test/Switch_Gear";
const Myrouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={App} />
                <Route path="/Index" Component={IndexPage} />
                <Route path="/Reciept" Component={Reciept} />
                <Route path="/Workpermit" Component={Workpermit} />
                <Route path="/Dashboard" Component={Dashboard} />
                <Route path="/Homepage" Component={Home} />
                <Route path="/Login" element={<RedirectHome Component={Login}/>}/>
                <Route path="/Register" element={<RedirectHome Component={Register}/>}/>                
                <Route path="/SwitchGear" element={<SwitchGear/>} />
                    
                {/* <Route  path="/Login" Component={Login}/>             */}
                {/* <Route  path="/Register" Component={Register}/>             */}

                <Route path="/Forgetpassword" Component={Forgetpassword} />
                <Route path="/About/JobDescription" Component={JobDescription} />
                <Route path="/About/Personel" Component={Personel} />
            </Routes>
        </BrowserRouter>

    )
}

export default Myrouter;