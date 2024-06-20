// import React, { Component, useReducer,useEffect } from "react";
// import Navbar1 from "../Navbar/Navbar1";
// import Footer from "../Footer/Footer";

// type SubstationInfomation = {
//     SubstationThai: string,
//     SubstationEng: string,
// }

// type TestReport = [{
//     Sender: string,
//     Year: string,
//     Serial: string,
//     Feeder: string,
//     ContactA: string,
//     ContactB: string,
//     ContactC: string,
//     VaccuumA: string,
//     VaccuumB: string,
//     VaccuumC: string,
//     InsulationAG: string,
//     InsulationBG: string,
//     InsulationCG: string,
//     InsulationAB: string,
//     InsulationBC: string,
//     InsulationCA: string,

// }]

// class SwitchGear extends React.Component {
//     constructor(props: TestReport) {
//         super(props)
//     }
//     initials: TestReport = [{
//         // optional second annotation for better type inference
//         Sender: "",
//         Year: "",
//         Serial: "",
//         Feeder: "",
//         ContactA: "",
//         ContactB: "",
//         ContactC: "",
//         VaccuumA: "",
//         VaccuumB: "",
//         VaccuumC: "",
//         InsulationAG: "",
//         InsulationBG: "",
//         InsulationCG: "",
//         InsulationAB: "",
//         InsulationBC: "",
//         InsulationCA: "",
//     }];


//     const reducer = (state: any, action: any) => {
//         switch (action.type) {
//             case "setstate":
//                 return {
//                     ...state,
//                     [action.payload.name]: action.payload.value
//                 }
//         }
//     }

//     const[state, dispatch] = useReducer(reducer, this.initials)
    
    
// render() {
//     return (
//         <>
//             <Navbar1 />
//             <div className="grow container">
//                 <div>Test</div>
//                 <div>ทดสอบการทำงาน</div>
//                 <div>ทดสอบการทำงาน</div>
//                 <div>{this.initials[0].ContactA}</div>
//             </div>

//             <Footer />
//         </>



//     )
// }
// }

// export default SwitchGear

const XX = () =>{

    return(
        <>
        </>
    )
}

