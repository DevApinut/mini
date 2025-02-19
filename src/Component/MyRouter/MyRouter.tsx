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
import SwitchGear from "../Content/PM_Test/SwitchGear/Switch_Gear";
import Tranfromer from "../Content/PM_Test/Transformer/Tranformer";
import RequestElectricalOff from "../Content/RequestElectricalOff/RequestElectricalOff"
import MainEquiment from "../Content/Equimentinfo/mainEquiment";
import SaleAssess from "../Content/SaleAssess/SaleAssess";
import PMTiming from "../Content/Webscraping/PMTimming";
import Assess from "../Content/Sapassess/Assess";
import SwitchGearDashboard from "../Content/Dashboard/SwitchGear";
import DocxTest from "../Content/Template/docxTest";
import Capacitor from "../Content/PM_Test/Capacitor/Capacitor";
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
                <Route path="/Transformer" element={<Tranfromer/>} />
                <Route path="/RequestElectricalOff" element={<RequestElectricalOff/>} />
                <Route path="/mainEquiment" element={<MainEquiment/>} />
                <Route path="/SaleAssess" element={<SaleAssess/>} />
                <Route path="/PMTiming" element={<PMTiming/>} />
                <Route path="/Assess" element={<Assess/>} />
                <Route path="/SwitchGearDashboard" element={<SwitchGearDashboard/>} />
                <Route path="/Capacitor" element={<Capacitor/>} />
                
                <Route path="/docxTest" Component={DocxTest} />
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