import axios from "axios"
import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import { useReducer } from "react"
const Assess = () => {

   // use Reducer initials 
   const initials = {
      Assess: [""]
   }

   const test = [["AAA", "XX", "CCC"], ["AAA", "BBXX", "CCC"], ["AAA", "TT", "CCC"], ["AAA", "YY", "CCC"]]
   console.log(test)



   // const Test2 = test.map((data: any) => {
   //    var PATTERN = 'BB'
   //    if (data[1].includes(PATTERN)) {
   //       console.log("EiEi")
   //       return data
   //    }
   //    else{ 
   //       console.log("test")
   //       }
   //    // filtered = test.filter(function (str) { return str.includes(PATTERN); });
   //    // console.log(filtered)
   // })

   const Test2 = test.filter(function (data: any) {
      var PATTERN = 'T'
      
      if (data[0].includes(PATTERN) || data[1].includes(PATTERN) || data[2].includes(PATTERN)        
      ) {
         console.log("EiEi")
         return data
      }
      else {
         console.log("test")
      }

   });
   console.log(Test2)


   const reducer = (state: any, action: any) => {
      switch (action.type) {
         case "setstate":
            return {
               ...state,
               [action.payload.name]: action.payload.value
            }
      }
   }
   const [state, dispatch] = useReducer(reducer, initials)


   axios.get(`https://script.google.com/macros/s/AKfycbxCRTiN6jVKCDTf-qJM1kblnd6t9Iym8A3v0dLBqWNz5rP3ds4DgCtO6tBky8bicz34/exec`)
      .then(res => {
         console.log(res)
         dispatch({ type: "setstate", payload: { name: "Assess", value: res.data.Assess } })
      })
   return (
      <>
         <Navbar1 />
         <div className="grow container flex items-center flex-col">
            <div>รายการค้นหาข้อมูลสถานีใน SAP</div>
            <div className="w-full flex justify-center my-2">
               <input type="text" placeholder="Search......" className="text-xl border w-1/4 border" />
            </div>

            <div className="flex jusify-center">

            </div>

         </div>
         <Footer />
      </>
   )
}
export default Assess 