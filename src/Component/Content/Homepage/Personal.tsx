import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import { useEffect, useRef, createRef, useState } from "react"
import ProfilePicture from "@dsalvagni/react-profile-picture"
import "@dsalvagni/react-profile-picture/dist/ProfilePicture.css"
import image22 from "../../image/app.jpg"
import Avatar from 'react-avatar-edit'
import { Point, Area } from "react-easy-crop/types";

const Personel = () => {
  const image_profile = createRef<any>()
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    console.log(croppedArea, croppedAreaPixels);
  };

  useEffect(() => {
    document.title = "บุคลากร | Personel"
  }, [])



  // const getBase64 = () => {
  //     return new Promise(resolve => {
  //         let fileInfo;
  //         let baseURL = null;
  //         // Make new FileReader
  //         let reader = new FileReader();

  //         // Convert the file to base64 text
  //         reader.readAsDataURL(image22);

  //         // on reader load somthing...
  //         reader.onload = () => {
  //             // Make a fileInfo Object
  //             console.log("Called", reader);
  //             baseURL = reader.result;
  //             console.log(baseURL);
  //             resolve(baseURL);
  //         };
  //         console.log(fileInfo);
  //     });
  // };


  const image_handle = () => {
    // const image = getBase64(image22)
    // console.log(image)

  }

  function getBase64(event: any) {
    const PP = image_profile.current;
    const imageData = PP.getData();
    const file1 = imageData.imageSrc.BaseURI;
    console.log(event)
    console.log(PP)


    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image_profile.current.state.file);
    // reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }



  const [preview , setPreview] = useState("")
 


const onClose=()=> {
  setPreview("")
}

const onCrop=(preview:any)=> {
  setPreview(preview)
}

const onBeforeFileLoad=(elem:any)=>{
  if(elem.target.files[0].size > 71680){
    alert("File is too big!");
    elem.target.value = "";
  };
}
  return (
    <>
      <Navbar1 />
      <div className="grow container">
        <div className="text-center text-xl font-bold">บุคลากรในแผนก</div>
        <div className="container-personel">
          <div className="personel-infomation">
            <img src={'https://assets.ch3plus.com/newsch/2022/09/674947308478.JPG'} className="w-24 h-24 bg-red-200 rounded-full"></img>
            <div className="flex flex-col justify-center mx-4">
              <div className="text-base">นาย อภินัทธ์ แก้วมูณี (โดนัท)</div>
              <div className="text-sm">ตำเแหน่ง วศก.4 ผสม.กสฟ.ต.1</div>
              <div className="text-sm">ติดต่อ 081-9635567</div>
            </div>
          </div>

          <div className="personel-infomation">
            <div >
              <button onClick={() => getBase64("aaa")}> test</button>
              <input type="file" onChange={getBase64} />


              <div className="m-0 h-48">

                <Avatar
                  width={400}
                  height={400}
                  onCrop={onCrop}
                  onClose={onClose}
                  onBeforeFileLoad={onBeforeFileLoad}
                  src={image22}
                  imageWidth={400}
                  imageHeight={1000}
                />
                <img src={preview} alt="Preview" />
                {/* <ProfilePicture
                  image={image22}
                  ref={image_profile}
                  frameFormat={"circle"}
                  useHelper={true}
                  debug={true}

                /> */}
              </div>

            </div>

            {/* <div className="bg-red-200 w-24 rounded-full relative" >
                            <img src={'https://assets.ch3plus.com/newsch/2022/09/674947308478.JPG'}></img>
                            <div className="absolute bottom-0 text-3xl font-bold bg-slate-50 w-full opacity-80 
                            overflow-hidden text-center text-green-700 hover:cursor-pointer">+</div>
                        </div> */}
            <div className="flex flex-col justify-center mx-4">
              <div className="flex justify-start flex-column">
                <div className="w-full text-sm">ชื่อ-สกุล</div>
                <input className="w-full border" type="text" />
              </div>
              <div className="flex justify-start flex-column">
                <div className="w-full text-sm">ตำเเหน่ง</div>
                <input className="w-full border" type="text" />
              </div>
              <div className="flex justify-start flex-column">
                <div className="w-full text-sm">ติดต่อ</div>
                <input className="w-full border" type="text" />
              </div>
              <div className="flex justify-center my-2 ">
                <button className="w-14 bg-green-400 mx-2 rounded-xl text-slate-50"
                  // onClick={image_handle}>ok</button>
                  onClick={() => getBase64(image_profile.current)}>ok</button>
                <button className="w-14 bg-red-400 mx-2 rounded-xl text-slate-50">Cancel</button>
              </div>

            </div>
          </div>


        </div>

      </div>
      <Footer />

    </>
  )
}

export default Personel;