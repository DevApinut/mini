import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import { useEffect, useReducer } from "react";
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Link } from "react-router-dom";

const Aboutme = () => {
   useEffect(() => {
      document.title = 'เกี่ยวกับฉัน | About'
   }, [])


   const initials = {
      content_jobdescription: "",
      id: "",
      button_active: false,
      button_edit: false
   }
   const reducer = (state: any, action: any) => {
      switch (action.type) {
         case 'change_state':
            return { ...state, [action.payload.name]: action.payload.value }
         case 'change_id':
            return { ...state, id: action.payload.id }
         case 'change_switch':
            return { ...state, button_edit: !action.payload.edit }
         case 'change_active':
            return { ...state, button_active: action.payload.active }
      }
   }
   const [state, dispatch] = useReducer(reducer, initials)


   //// config quill
   var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']
   ];
   const module = {
      toolbar: toolbarOptions
   }


   const button_submit = {
      button: 1
   };

   const onSubmit = () => {

   }
   return (
      <>
         <Navbar1 />
         <div className="grow container flex justify-center items-center flex-col">
            <div>เกี่ยวกับฉัน</div>
            <div>
               <Link to={'#'}></Link>
            </div>
            <div className="flex flex-col justify-center items-center" >
               <ReactQuill
                  value={state.content_jobdescription}
                  readOnly={true}
                  theme={"bubble"}
               />
               <button className="btn btn-warning btn_edit" onClick={() => dispatch({ type: 'change_switch', payload: { edit: state.button_edit } })}>แก้ไข</button>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col ">
               <div className="headjob">
                  <div>แก้ไข Job Description</div>
               </div>
               <div>
                  <ReactQuill
                     modules={module}
                     value={state.content_jobdescription}
                     onChange={(e) => {
                        dispatch({
                           type: 'change_state',
                           payload: { name: 'content_jobdescription', value: e }
                        })
                     }}
                     theme="snow"
                     style={{ background: 'white' }}
                  />
               </div>
               <div className="flex justify-center m-3">
                  <button
                     className="btn btn-success mx-3"
                     onClick={() => (button_submit.button = 1)}
                     type="submit"
                     name="btn1"
                     value="1"
                     disabled={state.button_active}
                  >
                     Add
                  </button>
                  <button
                     className="btn btn-warning mx-3"
                     onClick={() => (button_submit.button = 2)}
                     type="submit"
                     name="btn2"
                     value="2"
                     disabled={!state.button_active}
                  >
                     Update
                  </button>
               </div>

            </form>

            <button className="btn btn-danger"
               onClick={() => dispatch({
                  type: 'change_switch',
                  payload: { edit: state.button_edit }
               })}>
               ยกเลิก</button>
         </div>
         <Footer />
      </>
   )

}
export default Aboutme;