import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import { useEffect, useRef, createRef, useState, useReducer } from "react"
import ProfilePicture from "@dsalvagni/react-profile-picture"
import "@dsalvagni/react-profile-picture/dist/ProfilePicture.css"
import image22 from "../../image/PIC43.jpg"
import Avatar from 'react-avatar-edit'
import axios from "axios"
import Swal from "sweetalert2"
import ReactLoading from 'react-loading';

const Personel = () => {
    const watd = "data:image/jpeg;base64,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"

    const image_profile = createRef<any>()
    const initials = {
        personel_infomation: [{ img: watd, Cropimg: watd, name: "ไม่มีข้อมูล", position: "ไม่มีข้อมููล", contact: "ไม่มีข้อมููล" }, { img: watd, Cropimg: watd, name: "ไม่มีข้อมูล", position: "ไม่มีข้อมููล", contact: "ไม่มีข้อมููล" }],
        edit_Personel: false,
        imageFull: [{ img: "none" }],
        loading: false,
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
    useEffect(() => {
        document.title = "บุคลากร | Personel"
        fetchPersonel()
    }, [])


    const [preview, setPreview] = useState("")

    const fetchPersonel = () => {
        axios.get(`${process.env.REACT_APP_API}/GetPersonel`)
            .then((result: any) => {
                dispatch({ type: "setstate", payload: { name: "personel_infomation", value: result.data.res.data } })
                dispatch({ type: "setstate", payload: { name: "loading", value: true } })
                dispatch({ type: "setstate", payload: { name: "edit_Personel", value: false } })
            })
    }

    const savePersonel = async() => {
        await dispatch({ type: "setstate", payload: { name: "loading", value: false } })
        await axios.post(`${process.env.REACT_APP_API}/Personel`, { data: state.personel_infomation })
            .then(result => {
                Swal.fire({
                    title: 'อัพเดทข้อมูลสำเร็จ',
                    text: `อัพเดทข้อมูลสำเร็จ`,
                    icon: 'success',
                })
                    .then(res => 
                        fetchPersonel()
                )
            })
    }

    const addPersonel = (index: number) => {
        let personelOld = [...state.personel_infomation]
        let newPersonel = { img: watd, Cropimg: watd, name: "Wattd", position: "ไม่ระบุ", contact: "ไม่ระบุ" }
        personelOld.splice(index + 1, 0, newPersonel)
        dispatch({ type: "setstate", payload: { name: "personel_infomation", value: personelOld } })

    }
    const delPersonel = (index: number) => {
        let personelOld = [...state.personel_infomation]
        personelOld.splice(index, 1)
        dispatch({ type: "setstate", payload: { name: "personel_infomation", value: personelOld } })
    }
    const editPersonel = () => {
        dispatch({ type: "setstate", payload: { name: "edit_Personel", value: !state.edit_Personel } })
    }
    const setStatePersonelInformation = (nameofdata: any, data: any, index: number) => {
        let personelOld = [...state.personel_infomation]
        if (nameofdata == "name") personelOld[index].name = data
        else if (nameofdata == "position") personelOld[index].position = data
        else if (nameofdata == "contact") personelOld[index].contact = data
        dispatch({ type: "setstate", payload: { name: "personel_infomation", value: personelOld } })
    }

    const onClose = () => {

        // setPreview("")
    }

    const onCrop = (preview: any, index: number = 0) => {
        let personelOld = [...state.personel_infomation]
        personelOld[index].Cropimg = preview
        dispatch({ type: "setstate", payload: { name: "personel_infomation", value: personelOld } })
    }


    const onBeforeFileLoad = (elem: any, index: number = 0) => {
        console.log("AAA")
        if (elem.target.files[0].size > 2030412) {
            alert(`ขนาดไฟล์ใหญ่เกินไป ${elem.target.files[0].size}`);
            elem.target.value = "";
        }
        else {
            console.log(elem)
            let personelOld1 = [...state.personel_infomation]
            getBase64(elem.target.files[0])
                .then((result: any) => {
                    personelOld1[index].img = result
                    dispatch({ type: "setstate", payload: { name: "personel_infomation", value: personelOld1 } })

                })

        }


    }


    async function getBase64(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
        })
    }


    return (
        <>
            <Navbar1 />
            <div className="grow container flex flex-column">
                <div className="text-center text-xl font-bold">บุคลากรในแผนก</div>
                {!state.loading && <div className="flex justify-center items-center flex-column grow">
                    <div className="text-green-400 font-bold text-4xl my-3"> Loading </div>
                    <ReactLoading type={"spinningBubbles"} color={"#5eab67"} height={100} width={100} />
                </div>}
                <div className="container-personel">
                    {(!state.edit_Personel && state.loading) && state.personel_infomation.map((data: any, index: number) => {
                        return (
                            <div className="personel-infomation">
                                <img src={data.Cropimg} className="w-24 h-24 bg-red-200 rounded-full"></img>
                                <div className="flex flex-col justify-start mx-4 ">
                                    <div className="text-base">{data.name}</div>
                                    <div className="text-sm">{data.position}</div>
                                    <div className="text-sm">{data.contact}</div>
                                    <div>
                                        <button onClick={() => { editPersonel() }} className="mx-1 px-3 bg-yellow-200 rounded-xl">Ed</button>
                                    </div>
                                </div>
                            </div>
                        )

                    })}


                    {state.loading && state.edit_Personel && state.personel_infomation.map((data: any, index: number) => {
                        let imageToShow = data.img ? data.img : data.Cropimg
                        return (
                            <div className="personel-infomation ">
                                <div >
                                    <div className="m-0 h-48">
                                        <div className="flex justify-center">
                                            <Avatar
                                                width={150}
                                                height={150}
                                                onCrop={(preview) => { onCrop(preview, index) }}
                                                onClose={onClose}
                                                onBeforeFileLoad={(elem) => { onBeforeFileLoad(elem, index) }}
                                                src={imageToShow}
                                                cropRadius={60}

                                            />
                                            {/* <img src={preview} alt="Preview" /> */}
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-center mx-4">
                                    <div className="flex justify-start flex-column">
                                        <div className="w-full text-sm">ชื่อ-สกุล</div>
                                        <input className="w-full border" type="text" value={data.name}
                                            onChange={(e) => { setStatePersonelInformation("name", e.target.value, index) }} />
                                    </div>
                                    <div className="flex justify-start flex-column">
                                        <div className="w-full text-sm">ตำเเหน่ง</div>
                                        <input className="w-full border" type="text" value={data.position}
                                            onChange={(e) => { setStatePersonelInformation("position", e.target.value, index) }} />
                                    </div>
                                    <div className="flex justify-start flex-column">
                                        <div className="w-full text-sm">ติดต่อ</div>
                                        <input className="w-full border" type="text" value={data.contact}
                                            onChange={(e) => { setStatePersonelInformation("contact", e.target.value, index) }} />
                                    </div>
                                    <div className="flex justify-center my-2 ">
                                        <button className="w-14 bg-green-400 mx-0 rounded-xl text-slate-50"
                                            // onClick={image_handle}>ok</button>
                                            onClick={() => { savePersonel() }}>ok</button>
                                        <button className="w-14 bg-red-400 mx-0 rounded-xl text-slate-50"
                                            onClick={(e) => { editPersonel() }}>Cancel</button>
                                        <button onClick={() => { addPersonel(index) }} className="mx-0 px-3 bg-green-200 rounded-xl">+</button>
                                        {state.personel_infomation.length > 1 && <button onClick={() => { delPersonel(index) }} className="mx-0 px-3 bg-red-200 rounded-xl">-</button>}
                                    </div>

                                </div>
                            </div>
                        )

                    })}




                </div>

            </div>
            <Footer />

        </>
    )
}

export default Personel;