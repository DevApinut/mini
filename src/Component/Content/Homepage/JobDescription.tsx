import Navbar1 from "../Navbar/Navbar1";
import Footer from "../Footer/Footer";
import { useEffect, useReducer } from "react";
import ReactQuill, { Quill } from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Link } from "react-router-dom";
import axios from "axios";
import ImageResize from 'quill-image-resize-module-react';






Quill.register('modules/imageResize', ImageResize);

const Aboutme = () => {

   const GetDescription = () => {
      axios.get(`${process.env.REACT_APP_API}/GetDescription`)
         .then(result => {
            // console.log(result.data.res)
            dispatch({
               type: 'change_state',
               payload: { name: 'content_jobdescription', value: result.data.res.Description }
            })
         })
         .catch(err => { console.log(err.massage) })
   }
   const UpdateDescription = () => {
      axios.post(`${process.env.REACT_APP_API}/Description`, { Description: state.content_jobdescription })
         .then(result => {
            alert('บันทึกข้อมูลสำเร็จ')
            dispatch({
               type: 'change_switch',
               payload: { edit: state.button_edit }
            })
            GetDescription();
         })
         .catch(err => {
            console.log(err)
            alert(err)
         })
   }

   useEffect(() => {
      GetDescription()
      document.title = 'ความรับผิดชอบ | Jobdescription'
   }, [])


   const initials = {
      content_jobdescription: "",
      id: "",
      button_edit: false,
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
      [
         { list: 'ordered' },
         { list: 'bullet' },
         { indent: '-1' },
         { indent: '+1' }
       ],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video', 'formula'],
      ['clean'],


   ];




   const module = {
      toolbar: toolbarOptions,

      // toolbar: [
      //    [{ header: '1' }, { header: '2' }, { font: [] }],
      //    [{ size: [] }],
      //    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      //    [
      //       { list: 'ordered' },
      //       { list: 'bullet' },
      //       { indent: '-1' },
      //       { indent: '+1' }
      //    ],
      //    ['link', 'image', 'video'],
      //    ['clean']
      // ],
      clipboard: {
         // toggle to add extra line breaks when pasting HTML:
         matchVisual: false
      },
      imageResize: {
         parchment: Quill.import('parchment'),
         modules: ['Resize', 'DisplaySize']
      }


   }

   // const formats = [
   //    'font', 'size',
   //    'bold', 'italic', 'underline', 'strike',
   //    'color', 'background',
   //    'script',
   //    'header', 'blockquote', 'code-block',
   //    'indent', 'list',
   //    'direction', 'align',
   //    'link', 'image', 'video', 'formula',
   // ];
   const formats = [
      'header',
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
      'video'
   ];



   const onSubmit = (event: any) => {
      event.preventDefault()
      UpdateDescription();

   }
   return (
      <>
         <Navbar1 />
         <div className="grow container flex  items-center flex-col">
            <div className="text-xl font-bold">Job Description</div>
            <div>
               <Link to={'#'}></Link>
            </div>
            {!state.button_edit && <div className="flex flex-col justify-center items-center my-4" >
               <ReactQuill
                  value={state.content_jobdescription}
                  readOnly={true}
                  theme={"bubble"}
               />
               <button className="btn btn-warning btn_edit"
                  onClick={() =>
                     dispatch({ type: 'change_switch', payload: { edit: state.button_edit } })}
               >แก้ไข</button>
            </div>}

            {state.button_edit && <form onSubmit={onSubmit} className="flex flex-col my-4">

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
                     formats={formats}

                  />
               </div>

               
               <div className="flex justify-center m-3">
                  <button
                     className="btn btn-warning mx-3"
                     type="submit"
                  >
                     แก้ไข
                  </button>
               </div>

            </form>}
        

            {/* <button className="btn btn-danger"
               onClick={() => dispatch({
                  type: 'change_switch',
                  payload: { edit: state.button_edit }
               })}>
               ยกเลิก
            </button> */}
         </div>
         <Footer />
      </>
   )

}
export default Aboutme;