import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from "../../App";
import IndexPage from "../Content/IndexPage/IndexPage";
import Reciept from "../Content/Webscraping/Reciept"
import Workpermit from "../Content/Webscraping/Workpermit"
import Dashboard from "../Content/Dashboard/Dashboard1";
const Myrouter=()=>{  
    return(        
    <BrowserRouter> 
        <Routes>
            <Route  path="/" Component={App} />
            <Route  path="/Index" Component={IndexPage}/>
            <Route  path="/Reciept" Component={Reciept}/>            
            <Route  path="/Workpermit" Component={Workpermit}/>            
            <Route  path="/Dashboard" Component={Dashboard}/>            
        </Routes>       
    </BrowserRouter>
            
    )
}

export default Myrouter;