import axios from "axios"
import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import { useReducer } from "react"
import { saveAs } from 'file-saver';
const Assess = () => {

   // use Reducer initials 
   const initials = {
      Assess: [""]
      , searchtext: ""
      , Assessfromsearch: [""]
      , searchtextstatus: true
      , Assessfromselect: ["none"]
      , displaypopup: false

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

      } else {
         await dispatch({ type: "setstate", payload: { name: "Assessfromsearch", value: [""] } })
      }
   }

   const SelectItems = (data: any) => {
      if (state.Assessfromselect[0] !== "none") {
         const ArrayData = [...state.Assessfromselect]
         ArrayData.push(data)
         dispatch({ type: "setstate", payload: { name: "Assessfromselect", value: ArrayData } })
      }else{
         const ArrayData = []
         ArrayData.push(data)
         dispatch({ type: "setstate", payload: { name: "Assessfromselect", value: ArrayData } })
      }


   }

   const exportTotxtFile = () => {
      
      const Header1 = `-------------------------------------------------------------------------------------------`
      const Header2 = `\n หมายเลขใบสั่ง        อุปกรณ์          พท.ซ่อมบำรุง            คำอธิบาย            ชื่อผลิตภัณฑ์`
      const Header3 = `\n-----------------------------------------------------------------------------------------`
      const ArrayData = [...state.Assessfromselect]
      console.log(ArrayData)
      ArrayData.map((data: any) => {
         if(data[0] !== `\nXXXXXXXXXX\t`) data.splice(0, 0, `\nXXXXXXXXXX\t`)         
         if(data[1] !== ``) data[1] =   `${data[1]}\t ` 
         else  data[1] =   `${data[1]}\t `      
         if(data[3] !== ``) data[3] =   `${data[3]}\t ` 
         else  data[3] =   `${data[3]}\t `      
         if(data[4] !== ``) data[4] =   `${data[4]}\t ` 
         else  data[4] =   `${data[4]}\t `      
      })
      ArrayData.map((data: any) => {             
         data.splice(6, data.length)
      })

      console.log(ArrayData)
      // any kind of extension (.txt,.cpp,.cs,.bat)
      var filename = `รายการคำสั่งอุปกรณ์ .txt`;



      var blob = new Blob([Header1, Header2, Header3, ...ArrayData], {
         type: "text/plain;charset=utf-8"
      });

      saveAs(blob, filename);
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
         <div className="grow container flex items-center flex-col relative">
            <div className="text-lg">รายการค้นหาข้อมูลสถานีใน SAP</div>
            {state.displaypopup && <div className="w-3/4 h-96 border rounded-md overflow-y-scroll absolute buttom-3px bg-white top-24 popupmodalselect">
               <div className="absolute top-2 right-2 border rounded-md mx-2 p-2 hover:cursor-pointer" onClick={() => { dispatch({ type: "setstate", payload: { name: "displaypopup", value: false } }) }}>
                  X
               </div>
               <div className="flex justify-center flex-col">
                  <div className="flex justify-center my-4">
                     <div className="flex justify-center items-center">
                        รายการเลือก
                     </div>
                     <div className="btn btn-success mx-3" onClick={() => exportTotxtFile()}>
                        txt File
                     </div>
                  </div>


                  <table className="table my-3">
                     <thead>
                        <tr>
                           <td>อุปกรณ์</td>
                           <td>สินทรัพย์</td>
                           <td>พท.ซ่อมบำรุง</td>
                           <td>คำอธิบาย</td>
                           <td>คำอธิบาย4</td>
                           <td>ชื่อผลิตภัณฑ์</td>
                        </tr>
                     </thead>
                     <tbody>
                        {state.Assessfromselect.map((data: any, index: number) => {
                           return (
                              <tr>
                                 <td key={`row0_select_${index}`}>{data[0]}</td>
                                 <td key={`row1_select_${index}`}>{data[1]}</td>
                                 <td key={`row2_select_${index}`}>{data[2]}</td>
                                 <td key={`row3_select_${index}`}>{data[3]}</td>
                                 <td key={`row4_select_${index}`}>{data[4]}</td>
                                 <td key={`row5_select_${index}`}>{data[5]}</td>
                              </tr>
                           )
                        })}
                     </tbody>
                  </table>
               </div>
            </div>}


            <div className="w-full flex justify-center my-2">
               <input type="text" placeholder="Search......" className="text-xl border w-1/4 border" onChange={(e) => { searchtext(e.target.value) }} disabled={state.searchtextstatus} />
               <button className="btn btn-primary mx-3" onClick={() => { dispatch({ type: "setstate", payload: { name: "displaypopup", value: true } }) }}> info</button>
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
                           <td key={`select_${index}`}><div className="btn btn-success" onClick={() => SelectItems(data)}>sel</div></td>
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