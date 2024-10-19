import axios from "axios"
import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
const Assess = () => {
   axios.get(`https://script.google.com/macros/s/AKfycbxCRTiN6jVKCDTf-qJM1kblnd6t9Iym8A3v0dLBqWNz5rP3ds4DgCtO6tBky8bicz34/exec`)
   .then(res=>{
      console.log(res)
   })
   return (
      <>
         <Navbar1 />
         <div className="grow container flex items-center flex-col">            
            <div>รายการค้นหาข้อมูลสถานีใน SAP</div>
            <div className="w-full flex justify-center my-2">
               <input type="text" placeholder="Search......" className="text-xl border w-1/4 border"/>
            </div>

            <div className="flex jusify-center">

            </div>
            
         </div>
         <Footer />
      </>
   )
}
export default Assess 