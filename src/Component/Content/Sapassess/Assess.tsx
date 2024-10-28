import axios from "axios"
import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import { useReducer } from "react"
const Assess = () => {

   // use Reducer initials 
   const initials = {
      Assess: [""],
      searchtext: "",
      Assessfromsearch: [""],
      searchtextstatus:true
   }

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

   // Function for change state and searchtext
   const searchtext = async (textsearch: string) => {
      await dispatch({ type: "setstate", payload: { name: "searchtext", value: textsearch } })
      if (textsearch !== "") {
         const arrayFromsearch = await state.Assess.filter(function (data: any) {
            var PATTERN = textsearch

            if (data[3].includes(PATTERN)
            ) {
               return data
            }
            else {
               // console.log("test")
            }
         });
         console.log(arrayFromsearch)
         await dispatch({ type: "setstate", payload: { name: "Assessfromsearch", value: arrayFromsearch } })

      }else{
         await dispatch({ type: "setstate", payload: { name: "Assessfromsearch", value: [""] } })
      }


   }


   axios.get(`https://script.google.com/macros/s/AKfycbxCRTiN6jVKCDTf-qJM1kblnd6t9Iym8A3v0dLBqWNz5rP3ds4DgCtO6tBky8bicz34/exec`)
      .then(res => {
         console.log(res)
         dispatch({ type: "setstate", payload: { name: "Assess", value: res.data.Assess } })
         dispatch({ type: "setstate", payload: { name: "searchtextstatus", value: false } })
      })
   return (
      <>
         <Navbar1 />
         <div className="grow container flex items-center flex-col">
            <div>รายการค้นหาข้อมูลสถานีใน SAP</div>
            <div className="w-full flex justify-center my-2">
               <input type="text" placeholder="Search......" className="text-xl border w-1/4 border" onChange={(e) => { searchtext(e.target.value) }} disabled={state.searchtextstatus}/>
            </div>

            <table className="table">
               <thead>
                  <tr>
                     <td>เลือก</td>
                     <td>อุปกรณ์</td>
                     <td>สินทรัพย์</td>
                     <td>พท.ซ่อมบำรุง</td>
                     <td>คำอธิบาย</td>
                     <td>คำอธิบาย4</td>
                     <td>ชื่อผลิตภัณฑ์</td>
                  </tr>
               </thead>
               <tbody>
                  {state.Assessfromsearch.map((data: any, index: number) => {
                     return (
                        <tr>
                           <td key={`select_${index}`}><div className="btn btn-success">sel</div></td>
                           <td key={`row0_${index}`}>{data[0]}</td>
                           <td key={`row1_${index}`}>{data[1]}</td>
                           <td key={`row2_${index}`}>{data[2]}</td>
                           <td key={`row3_${index}`}>{data[3]}</td>
                           <td key={`row4_${index}`}>{data[4]}</td>
                           <td key={`row5_${index}`}>{data[5]}</td>
                        </tr>
                     )

                  })}
               </tbody>

            </table>

         </div >
         <Footer />
      </>
   )
}
export default Assess 