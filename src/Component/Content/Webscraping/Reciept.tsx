import { useReducer, useEffect, useState } from 'react';
import { ExcelExport } from '../Export/Export1';
// import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { th } from 'date-fns/locale/th';
import { ThaiDatePicker } from "thaidatepicker-react";
import { Box, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/th';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { th } from 'date-fns/locale'
import MomentUtils from "@date-io/moment";
import 'moment/locale/th';
import { format } from 'date-fns';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import newAdapter from "./Test.js";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import pdfToText from 'react-pdftotext'
import Navbar1 from '../Navbar/Navbar1';
import Footer from '../Footer/Footer';










function Reciept() {

    const fetch = () => {
        axios.get('https://script.google.com/macros/s/AKfycby30qnNbXpUj_2--odf6-9gJVUf6WIsVMmYEyFbFsyuMBJ1NiqldJ0yvK43aSel5qnEkg/exec')
            .then(async (res: any) => {
                await dispatch({ type: "setstate", payload: { name: "data_personal_information", value: res.data.data_personal_information } })
                await dispatch({ type: "setstate", payload: { name: "data_location", value: res.data.data_location } })
                await dispatch({ type: "setstate", payload: { name: "data_account_buy", value: res.data.data_account_buy } })
                await dispatch({ type: "setstate", payload: { name: "data_log_file", value: res.data.data_log_file } })

                let Array_data_work_detail = [...state.Detail_Work]
                var Obj_data_1 = { ...Array_data_work_detail[0], affiliation: res.data.data_other_data[0][0], for_personal: res.data.data_other_data[0][1], Department_head: res.data.data_other_data[0][2], Department_head_position: res.data.data_other_data[0][3], }


                Array_data_work_detail[0] = Obj_data_1
                dispatch({ type: "setstate", payload: { name: "Detail_Work", value: Array_data_work_detail } })

                // await setdata_fetch(JSON.parse(res.data.data_log_file), "data_log_file")
            })
    }


    useEffect(() => {
        fetch();
    }, [])

    const initials = {
        //รายละเอียดงานที่ทำ
        work_for_work: [{ date_from_for_work: "", date_destination_for_work: "", for_work: "" }],
        //ข้อมูลบุคคลในคำสั่ง
        Personal_Infomation: [{ Number_Personal: "", Name_Personal: "", Position_Personal: "", Allowance: "", Additional_Allowance: "", Accomodation_cost: "", Accomodation_All: "" }],
        //ข้อมูลรายการการเดินทางว่าเดินทางไปไหนบ้าง
        Work_Infomation: [{ location_from: "ระบุสถานที่", location_destination: "ระบุสถานที่", date_from: "", date_destination: "", other_location_from: "", other_location_destination: "", other_location_from_hidden: "hidden", other_location_destination_hidden: "hidden" }],
        //รายการเบิกของเพิ่มเติม
        Additional_buy: [{ Name_personal: "", Number_account: "", list_material: "ระบุรายการเบิก", other_list_material: "", price: "", vat: "", total_price: "", ohter_list_material_hidden: "hidden" }],
        //รายระเอียดงานว่าคำสั่งชื่อว่าอะไร
        Detail_Work: [{ Number_command: "", Continue_Command_select: "ไม่ต่อเนื่อง", Continue_Command_check: "Hidden", Continue_Command_number: "", date_permission: "", date_permission_buddha: "", location_work: "", obj: "", type_car: "รถยนต์ กฟภ. ทะเบียน", serial_car: "", budget: "ทำการ", other_budget: "", type_order: "หมายเลขใบสั่ง", other_type_order: "", other_type_order_hidden: "Hidden", Number_order: "", affiliation: "", for_personal: "", number_day: "", number_night: "", Department_head: "", Department_head_position: "" }],
        data_location: [""],
        data_personal_information: [""],
        data_account_buy: [""],
        Name_test_select: ["เลือกรายการบันทึก", 0],
        Name_test: `รายการใหม่`,
        data_log_file: [""],
        row_for_save: 0,
        file_location: ""

    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "ADD":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            case "setstate":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, initials)



    const setdata_fetch = async (data_from_fetch: any, name_data: any) => {
        dispatch({ type: "setstate", payload: { name: name_data, value: data_from_fetch } })
    }

    // ---------------------------- Handle for set Data--------------------------------------
    const handleforsetdatawork = async (event: any, index: number, name_data: any) => {

        let Array_data = [...state.Work_Infomation]

        if (name_data == "location_from" && event.target.value == "") {
            var Obj_data_0 = { ...Array_data[index], [name_data]: event.target.value, other_location_from_hidden: "text" }
        } else if (name_data == "location_destination" && event.target.value == "") {
            var Obj_data_0 = { ...Array_data[index], [name_data]: event.target.value, other_location_destination_hidden: "text" }
        } else if (name_data == "other_location_destination" || name_data == "other_location_from") {
            var Obj_data_0 = { ...Array_data[index], [name_data]: event.target.value }
        } else if (name_data == "location_from" && event.target.value !== "") {
            var Obj_data_0 = { ...Array_data[index], [name_data]: event.target.value, other_location_from_hidden: "hidden", other_location_from: "" }
        } else if (name_data == "location_destination" && event.target.value !== "") {
            var Obj_data_0 = { ...Array_data[index], [name_data]: event.target.value, other_location_destination_hidden: "hidden", other_location_destination: "" }
        } else {
            var Obj_data_0 = { ...Array_data[index], [name_data]: event.target.value }
        }
        Array_data[index] = Obj_data_0
        dispatch({ type: "setstate", payload: { name: "Work_Infomation", value: Array_data } })
    }
    const handleforsetdata = async (event: any, index: number, name_data: any) => {

        if (name_data == "Number_Personal") {
            var Array_data = [...state.Personal_Infomation]
            state.data_personal_information.map((data1: any, index1: any) => {
                if (data1[0] == event.target.value) {
                    let Obj_data = { ...Array_data[index], Number_Personal: data1[0], Name_Personal: data1[1], Position_Personal: data1[2], Allowance: data1[3], Additional_Allowance: data1[4], Accomodation_cost: data1[5], Accomodation_All: data1[6] }
                    Array_data[index] = Obj_data
                } else {
                    let Obj_data = { ...Array_data[index], [name_data]: event.target.value }
                    Array_data[index] = Obj_data
                }
            })
            dispatch({ type: "setstate", payload: { name: "Personal_Infomation", value: Array_data } })
        } else {
            let Array_data = [...state.Personal_Infomation]
            let Obj_data = { ...Array_data[index], [name_data]: event.target.value }
            Array_data[index] = Obj_data
            dispatch({ type: "setstate", payload: { name: "Personal_Infomation", value: Array_data } })
        }


    }
    const handleforsetdatawork_for_work = async (event: any, index: number, name_data: any) => {
        let Array_data = [...state.work_for_work]
        let Obj_data = { ...Array_data[index], [name_data]: event.target.value }
        Array_data[index] = Obj_data
        dispatch({ type: "setstate", payload: { name: "work_for_work", value: Array_data } })
    }
    const handleforsetdataaddition_buy = async (event: any, index: number, name_data: any) => {
        let Array_data = [...state.Additional_buy]
        if (name_data == "list_material" && event.target.value == "") {
            var Obj_data_2 = { ...Array_data[index], [name_data]: event.target.value, ohter_list_material_hidden: "text" }
        } else if (name_data == "list_material_hidden") {
            var Obj_data_2 = { ...Array_data[index], [name_data]: event.target.value, ohter_list_material_hidden: "text" }
        } else if (name_data == "list_material" && event.target.value !== "") {
            var Obj_data_2 = { ...Array_data[index], Number_account: event.target.value.split(",")[0], list_material: event.target.value, ohter_list_material_hidden: "hidden", ohter_list_material: "" }
        } else if (name_data == "price") {
            if (event.target.value !== "" && state.Additional_buy[index].vat != "") {
                var Obj_data_2 = { ...Array_data[index], total_price: (parseFloat(event.target.value) + parseFloat(state.Additional_buy[index].vat)).toFixed(2), price: event.target.value }
            }
            else if (event.target.value == "" && state.Additional_buy[index].vat != "") {
                var Obj_data_2 = { ...Array_data[index], total_price: parseFloat(state.Additional_buy[index].vat).toFixed(2), price: event.target.value }
            }
            else if (event.target.value != "" && state.Additional_buy[index].vat == "") {
                var Obj_data_2 = { ...Array_data[index], total_price: parseFloat(event.target.value).toFixed(2), price: event.target.value }
            } else if (event.target.value == "" && state.Additional_buy[index].vat == "") {
                var Obj_data_2 = { ...Array_data[index], total_price: 0, price: "", vat: "" }
            }
        } else if (name_data == "vat") {
            if (event.target.value !== "" && state.Additional_buy[index].price != "") {

                var Obj_data_2 = { ...Array_data[index], total_price: (parseFloat(event.target.value) + parseFloat(state.Additional_buy[index].price)).toFixed(2), vat: event.target.value }
            }
            else if (event.target.value == "" && state.Additional_buy[index].price != "") {
                console.log(222)
                var Obj_data_2 = { ...Array_data[index], total_price: (parseFloat(state.Additional_buy[index].price)).toFixed(2), vat: event.target.value }
            }
            else if (event.target.value != "" && state.Additional_buy[index].price == "") {
                console.log(333)
                var Obj_data_2 = { ...Array_data[index], total_price: parseFloat(event.target.value).toFixed(2), vat: event.target.value }
            }
            else if (event.target.value == "" && state.Additional_buy[index].price == "") {
                console.log(444)
                var Obj_data_2 = { ...Array_data[index], total_price: 0, price: "", vat: "" }
            }
        } else {
            var Obj_data_2 = { ...Array_data[index], [name_data]: event.target.value }
        }

        // let Obj_data = { ...Array_data[index], [name_data]: event.target.value }
        Array_data[index] = Obj_data_2
        dispatch({ type: "setstate", payload: { name: "Additional_buy", value: Array_data } })
    }
    const handleforsetdataDetail_Work = async (event: any, index: number, name_data: any) => {
        let Array_data = [...state.Detail_Work]
        if (name_data == "Continue_Command_select" && event.target.value == "ไม่ต่อเนื่อง") {
            var Obj_data_1 = { ...Array_data[index], Continue_Command_select: event.target.value, Continue_Command_check: "Hidden" }
        } else if (name_data == "Continue_Command_select" && event.target.value == "ต่อเนื่อง") {
            var Obj_data_1 = { ...Array_data[index], Continue_Command_select: event.target.value, Continue_Command_check: "text" }
        } else if (name_data == "type_order" && event.target.value == "") {
            var Obj_data_1 = { ...Array_data[index], [name_data]: event.target.value, other_type_order_hidden: "text" }
        } else if (name_data == "type_order" && event.target.value !== "") {
            var Obj_data_1 = { ...Array_data[index], [name_data]: event.target.value, other_type_order_hidden: "Hidden", other_type_order: "" }
        } else {
            var Obj_data_1 = { ...Array_data[index], [name_data]: event.target.value }
        }


        Array_data[index] = Obj_data_1
        dispatch({ type: "setstate", payload: { name: "Detail_Work", value: Array_data } })
    }


    // ---------------------------- Handle for Add Row--------------------------------------

    const handleforAdd = (index: number) => {
        let Array_data = [...state.Personal_Infomation]
        Array_data.splice(index, 0, { Number_Personal: "", Name_Personal: "", Position_Personal: "", Allowance: "", Additional_Allowance: "", Accomodation_cost: "", Accomodation_All: "" })
        dispatch({ type: "setstate", payload: { name: "Personal_Infomation", value: Array_data } })
    }
    const handleforAddwork = (index: number) => {
        console.log(state.Work_Infomation[index - 1].other_location_from_hidden)
        let Array_data = [...state.Work_Infomation]
        Array_data.splice(index, 0, { location_from: state.Work_Infomation[index - 1].location_destination, other_location_from: state.Work_Infomation[index - 1].other_location_destination, other_location_from_hidden: state.Work_Infomation[index - 1].other_location_destination_hidden, date_from: "", date_from_buddha: "", time_from: "", location_destination: "ระบุสถานที่", other_location_destination: "", other_location_destination_hidden: "hidden", date_destination: "", date_destination_buddha: "", time_destination: "", for_work: "" })
        dispatch({ type: "setstate", payload: { name: "Work_Infomation", value: Array_data } })
    }
    const handleforAddwork_for_work = (index: number) => {
        let Array_data = [...state.work_for_work]
        Array_data.splice(index, 0, { date_from_for_work: "", date_destination_for_work: "", for_work: "" })
        dispatch({ type: "setstate", payload: { name: "work_for_work", value: Array_data } })
    }
    const handleforAddadditional_buy = (index: number) => {
        let Array_data = [...state.Additional_buy]
        Array_data.splice(index, 0, { Name_personal: "", Number_account: "", list_material: "ระบุรายการเบิก", other_list_material: "", price: "", vat: "", total_price: "", ohter_list_material_hidden: "hidden" })
        dispatch({ type: "setstate", payload: { name: "Additional_buy", value: Array_data } })
    }

    // ---------------------------- Handle for Delete Data--------------------------------------

    const handlefordelete = (index: number) => {
        let Array_data = [...state.Personal_Infomation]
        Array_data.splice(index, 1)
        dispatch({ type: "setstate", payload: { name: "Personal_Infomation", value: Array_data } })
    }
    const handlefordeletework = (index: number) => {
        let Array_data = [...state.Work_Infomation]
        Array_data.splice(index, 1)
        dispatch({ type: "setstate", payload: { name: "Work_Infomation", value: Array_data } })
    }
    const handlefordeletework_for_work = (index: number) => {
        let Array_data = [...state.work_for_work]
        Array_data.splice(index, 1)
        dispatch({ type: "setstate", payload: { name: "work_for_work", value: Array_data } })
    }
    const handlefordeleteadditional_buy = (index: number) => {
        let Array_data = [...state.Additional_buy]
        Array_data.splice(index, 1)
        dispatch({ type: "setstate", payload: { name: "Additional_buy", value: Array_data } })
    }

    const handleforsetdataworkDate = async (data: any, index: number, name_data: any, name_data_buddha: any) => {
        let date = new Date(data.$d)
        const day = date.getDate();
        let month: any = date.getMonth() + 1;
        if (month === 1) { month = "ม.ค." }
        else if (month === 2) { month = "ก.พ." }
        else if (month === 3) { month = "มี.ค." }
        else if (month === 4) { month = "เม.ย." }
        else if (month === 5) { month = "พ.ค." }
        else if (month === 6) { month = "มิ.ย." }
        else if (month === 7) { month = "ก.ค." }
        else if (month === 8) { month = "ส.ค." }
        else if (month === 9) { month = "ก.ย." }
        else if (month === 10) { month = "ต.ค." }
        else if (month === 11) { month = "พ.ย." }
        else if (month === 12) { month = "ธ.ค." }

        const year = date.getFullYear() + 543
        const Buddhayear = `${day} ${month}${year.toString().substr(-2)}`
        const Christyear = `${day} ${month}${date.getFullYear()}`
        let Array_data = [...state.Work_Infomation]

        let Obj_data = { ...Array_data[index], [name_data]: data.$d, [name_data_buddha]: Buddhayear }
        Array_data[index] = Obj_data
        dispatch({ type: "setstate", payload: { name: "Work_Infomation", value: Array_data } })
    }
    const handleforsetdatadate_permission = async (data: any, index: number, name_data: any, name_data_buddha: any) => {

        let date = new Date(data.$d)
        const day = date.getDate();
        let month: any = date.getMonth() + 1;
        if (month === 1) { month = "ม.ค." }
        else if (month === 2) { month = "ก.พ." }
        else if (month === 3) { month = "มี.ค." }
        else if (month === 4) { month = "เม.ย." }
        else if (month === 5) { month = "พ.ค." }
        else if (month === 6) { month = "มิ.ย." }
        else if (month === 7) { month = "ก.ค." }
        else if (month === 8) { month = "ส.ค." }
        else if (month === 9) { month = "ก.ย." }
        else if (month === 10) { month = "ต.ค." }
        else if (month === 11) { month = "พ.ย." }
        else if (month === 12) { month = "ธ.ค." }

        const year = date.getFullYear() + 543
        const Buddhayear = `${day} ${month}${year.toString().substr(-2)}`
        const Christyear = `${day} ${month}${date.getFullYear()}`
        let Array_data = [...state.Detail_Work]

        let Obj_data = { ...Array_data[index], [name_data]: data.$d, [name_data_buddha]: Buddhayear }
        Array_data[index] = Obj_data
        dispatch({ type: "setstate", payload: { name: "Detail_Work", value: Array_data } })
    }
    const handleforsetdatadate_work_forwok = async (data: any, index: number, name_data: any) => {
        let Array_data = [...state.work_for_work]
        let Obj_data = { ...Array_data[index], [name_data]: data.$d }
        Array_data[index] = Obj_data
        dispatch({ type: "setstate", payload: { name: "work_for_work", value: Array_data } })
    }



    const save_as_data = () => {
        let formData = new FormData()
        formData.append('Name_Save', state.Name_test)
        formData.append('row_for_save', "0")
        formData.append('work_for_work', JSON.stringify(state.work_for_work))
        formData.append('Personal_Infomation', JSON.stringify(state.Personal_Infomation))
        formData.append('Work_Infomation', JSON.stringify(state.Work_Infomation))
        formData.append('Additional_buy', JSON.stringify(state.Additional_buy))
        formData.append('Detail_Work', JSON.stringify(state.Detail_Work))
        formData.append('data_location', JSON.stringify(state.data_location))
        formData.append('data_personal_information', JSON.stringify(state.data_personal_information))
        formData.append('data_account_buy', JSON.stringify(state.data_account_buy))

        axios.post("https://script.google.com/macros/s/AKfycby30qnNbXpUj_2--odf6-9gJVUf6WIsVMmYEyFbFsyuMBJ1NiqldJ0yvK43aSel5qnEkg/exec", formData)
            .then((res) => {
                alert("สำเร็จ")
                fetch();
            })
            .catch((err) => {

            })
    }
    const save_data = () => {
        let formData = new FormData()
        formData.append('Name_Save', state.Name_test)
        formData.append('row_for_save', state.row_for_save)
        formData.append('work_for_work', JSON.stringify(state.work_for_work))
        formData.append('Personal_Infomation', JSON.stringify(state.Personal_Infomation))
        formData.append('Work_Infomation', JSON.stringify(state.Work_Infomation))
        formData.append('Additional_buy', JSON.stringify(state.Additional_buy))
        formData.append('Detail_Work', JSON.stringify(state.Detail_Work))
        formData.append('data_location', JSON.stringify(state.data_location))
        formData.append('data_personal_information', JSON.stringify(state.data_personal_information))
        formData.append('data_account_buy', JSON.stringify(state.data_account_buy))

        axios.post("https://script.google.com/macros/s/AKfycby30qnNbXpUj_2--odf6-9gJVUf6WIsVMmYEyFbFsyuMBJ1NiqldJ0yvK43aSel5qnEkg/exec", formData)
            .then((res) => {
                alert("สำเร็จ")
                fetch();
            })
            .catch((err) => {

            })
    }
    const Del_data = () => {
        let formData = new FormData()
        formData.append('Del', 'Del')
        formData.append('row_for_save', state.row_for_save)

        axios.post("https://script.google.com/macros/s/AKfycby30qnNbXpUj_2--odf6-9gJVUf6WIsVMmYEyFbFsyuMBJ1NiqldJ0yvK43aSel5qnEkg/exec", formData)
            .then((res) => {
                alert("สำเร็จ")
                fetch();
            })
            .catch((err) => {

            })
    }

    // Get data form html file with link path 
    // work_for_work: [{ date_from_for_work: "", date_destination_for_work: "", for_work: "" }],
    //     //ข้อมูลบุคคลในคำสั่ง
    //     Personal_Infomation: [{ Number_Personal: "", Name_Personal: "", Position_Personal: "", Allowance: "", Additional_Allowance: "", Accomodation_cost: "", Accomodation_All: "" }],
    //     //ข้อมูลรายการการเดินทางว่าเดินทางไปไหนบ้าง
    //     Work_Infomation: [{ location_from: "ระบุสถานที่", location_destination: "ระบุสถานที่", date_from: "", date_destination: "", other_location_from: "", other_location_destination: "", other_location_from_hidden: "hidden", other_location_destination_hidden: "hidden" }],
    //     //รายการเบิกของเพิ่มเติม
    //     Additional_buy: [{ Name_personal: "", Number_account: "", list_material: "ระบุรายการเบิก", other_list_material: "", price: "", vat: "", total_price: "", ohter_list_material_hidden: "hidden" }],
    //     //รายระเอียดงานว่าคำสั่งชื่อว่าอะไร
    //     Detail_Work: [{ Number_command: "", Continue_Command_select: "ไม่ต่อเนื่อง", Continue_Command_check: "Hidden", Continue_Command_number: "", date_permission: "", date_permission_buddha: "", location_work: "", obj: "", type_car: "รถยนต์ กฟภ. ทะเบียน", serial_car: "", budget: "ทำการ", other_budget: "", type_order: "หมายเลขใบสั่ง", other_type_order: "", other_type_order_hidden: "Hidden", Number_order: "", affiliation: "", for_personal: "", number_day: "", number_night: "", Department_head: "", Department_head_position: "" }],
    //     data_location: [""],
    //     data_personal_information: [""],
    //     data_account_buy: [""],
    //     Name_test_select: ["เลือกรายการบันทึก", 0],
    //     Name_test: `รายการใหม่`,
    //     data_log_file: [""],
    //     row_for_save: 0,
    //     file_location: ""

    const getdatafromHTML = () => {
        axios.post(`${process.env.REACT_APP_API}/Reciept`, { urllink: state.file_location })
            .then(res => {
                // For set Detail work 
                let detailwork = [...state.Detail_Work]
                detailwork[0].Number_command = res.data.TJ_Number_val
                detailwork[0].serial_car = res.data.Name_Car_val
                detailwork[0].location_work = res.data.Location_val
                detailwork[0].obj = res.data.objective_val

                const separateDatefromTime = res.data.date_personel_permit_val.split(" ")
                let separateDate = separateDatefromTime[0].split("/")
                const DatePermittion = `20${separateDate[2] - 43}-${separateDate[1]}-${separateDate[0]}`
                detailwork[0].date_permission = DatePermittion 
                
                

                // For set personel 
                let Personal_Infomation_data = [{}]
                let personelfromfetch = res.data.Data_person
                personelfromfetch.map((data: any, index: any) => {
                    Personal_Infomation_data.push({ Number_Personal: data[0], Name_Personal: "", Position_Personal: "", Allowance: "", Additional_Allowance: "", Accomodation_cost: "", Accomodation_All: "" })
                    // console.log(data[0])
                })
                Personal_Infomation_data.shift()
                var Array_data = [...Personal_Infomation_data]
                state.data_personal_information.map((data2: any, index1: any) => {
                    Array_data.map((data1: any, index: any) => {
                        if (data1.Number_Personal == data2[0]) {
                            let Obj_data = { ...Array_data[index], Number_Personal: data2[0], Name_Personal: data2[1], Position_Personal: data2[2], Allowance: data2[3], Additional_Allowance: data2[4], Accomodation_cost: data2[5], Accomodation_All: data2[6] }
                            Array_data[index] = Obj_data
                        } else {
                            let Obj_data = { ...Array_data[index] }
                            Array_data[index] = Obj_data
                        }

                    })

                })


                
                let date = new Date(DatePermittion)
                const day = date.getDate();
                let month: any = date.getMonth() + 1;
                if (month === 1) { month = "ม.ค." }
                else if (month === 2) { month = "ก.พ." }
                else if (month === 3) { month = "มี.ค." }
                else if (month === 4) { month = "เม.ย." }
                else if (month === 5) { month = "พ.ค." }
                else if (month === 6) { month = "มิ.ย." }
                else if (month === 7) { month = "ก.ค." }
                else if (month === 8) { month = "ส.ค." }
                else if (month === 9) { month = "ก.ย." }
                else if (month === 10) { month = "ต.ค." }
                else if (month === 11) { month = "พ.ย." }
                else if (month === 12) { month = "ธ.ค." }

                const year = date.getFullYear() + 543
                const Buddhayear = `${day} ${month}${year.toString().substr(-2)}`
                const Christyear = `${day} ${month}${date.getFullYear()}` 

                detailwork[0].date_permission_buddha = Buddhayear 
                
                dispatch({ type: "setstate", payload: { name: "Detail_Work", value: detailwork } })
                dispatch({ type: "setstate", payload: { name: "Personal_Infomation", value: Array_data } })
            })
    }

    const select_nametest = async (data: any,) => {
        await dispatch({ type: "setstate", payload: { name: "Name_test_select", value: data } })
        await dispatch({ type: "setstate", payload: { name: "Name_test", value: data.split(",")[0] } })
        await dispatch({ type: "setstate", payload: { name: "row_for_save", value: data.split(",")[1] } })

        if (data.split(",")[0] !== "เลือกรายการบันทึก") {
            await dispatch({ type: "setstate", payload: { name: "work_for_work", value: JSON.parse(state.data_log_file[data.split(",")[1]][2]) } })
            await dispatch({ type: "setstate", payload: { name: "Personal_Infomation", value: JSON.parse(state.data_log_file[data.split(",")[1]][3]) } })
            await dispatch({ type: "setstate", payload: { name: "Work_Infomation", value: JSON.parse(state.data_log_file[data.split(",")[1]][4]) } })
            await dispatch({ type: "setstate", payload: { name: "Additional_buy", value: JSON.parse(state.data_log_file[data.split(",")[1]][5]) } })
            await dispatch({ type: "setstate", payload: { name: "Detail_Work", value: JSON.parse(state.data_log_file[data.split(",")[1]][6]) } })
        } else {
            await dispatch({ type: "setstate", payload: { name: "work_for_work", value: initials.work_for_work } })
            await dispatch({ type: "setstate", payload: { name: "Personal_Infomation", value: initials.Personal_Infomation } })
            await dispatch({ type: "setstate", payload: { name: "Work_Infomation", value: initials.Work_Infomation } })
            await dispatch({ type: "setstate", payload: { name: "Additional_buy", value: initials.Additional_buy } })
            await dispatch({ type: "setstate", payload: { name: "Detail_Work", value: initials.Detail_Work } })
            await dispatch({ type: "setstate", payload: { name: "row_for_save", value: 0 } })
        }
    }

    const test_frorearang = () => {

        // const result = state.Additional_buy.map((item: any, index: number) => item.list_material.split(",")[1]);
        // const result1 = result.filter((item: any, index: number) => result.indexOf(item) === index);
        // const price = result1.map((data: any) => 0)

        // state.Additional_buy.map((data: any, index: number) => {
        //     if (result1.indexOf(data.list_material.split(",")[1]) >= 0 && data.Name_personal == "นาย อภินัทธ์ แก้วมูณี") {
        //         price[result1.indexOf(data.list_material.split(",")[1])] = price[result1.indexOf(data.list_material.split(",")[1])] + parseFloat(data.total_price).toFixed(2)
        //     }

        // })

        const work_information_romeve_deplicate = state.Work_Infomation.filter((item: any, index: number) => item.date_destination !== "");
        const numberwork = state.Detail_Work[0].Number_order.split(",").filter((item: any, index: number) => item !== "")

        console.log(numberwork)
        console.log(work_information_romeve_deplicate)
    }

    const price_calculate = (index: number) => {


        if (state.Additional_buy[index].total_price !== "") {
            let Array_data = [...state.Additional_buy]
            var Obj_data_2 = { ...Array_data[index], price: (parseFloat(state.Additional_buy[index].total_price) / 1.07).toFixed(2), vat: ((parseFloat(state.Additional_buy[index].total_price)) - (parseInt(state.Additional_buy[index].total_price) / 1.07)).toFixed(2) }
            Array_data[index] = Obj_data_2
            dispatch({ type: "setstate", payload: { name: "Additional_buy", value: Array_data } })
        }

        // let Obj_data = { ...Array_data[index], [name_data]: event.target.value }


    }



    function extractText(event: any) {
        const file = event.target.files[0]
        pdfToText(file)
            .then(text => console.log(text))
            .catch(error => console.error("Failed to extract text from pdf"))
    }





    return (
        <>
            <Navbar1 />
            <div className='grow container'>
                <div className='flex justify-center'>
                    <h3>แบบฟอร์มเบี้ยเลี้ยง</h3>
                </div>
                {/* 
            <div className="App">
                <div>AAAAAAAAAAAAA</div>
                <header className="App-header">
                    <input type="file" accept="application/pdf" onChange={extractText} />
                </header>
            </div> */}

                <div className='d-flex justify-content-between align-items-center row'>

                    <div className='d-flex justify-content-center align-items-center col-lg-7'>
                        <select className="form-control text-center" value={state.Name_test_select} onChange={(e) => { select_nametest(e.target.value) }}>
                            <option value={["เลือกรายการบันทึก", "0"]}>เลือกรายการบันทึก</option>
                            {state.data_log_file.map((data: any, index: any) => {
                                if (index >= 1) {
                                    return (
                                        <option value={[data[0], index]}>{data[0]}</option>
                                    )
                                }

                            })}
                        </select>
                        <div className='input-group mx-1 items-center flex justify-center'>
                            <div>
                                <div className='form-control'>แก้ไข</div>
                            </div>
                            <input type="text" className="form-control text-center h-full" value={state.Name_test} onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Name_test", value: e.target.value } }) }} />
                        </div>
                    </div>
                    <div className='col-lg-4 flex justify-center'>
                        <div>
                            <div className='text-red-200 text-sm'>
                                E:/เอกสารสำรับเขียนเว็บ/PEA-Life.html
                            </div>
                            <input type="text" className='border text-center flex justify-center items-center' onChange={(e: any) => {
                                // console.log(new URL(e.target.value).href)
                                dispatch({ type: "setstate", payload: { name: "file_location", value: e.target.value } })
                            }} />
                        </div>

                        <div className='flex justify-center btn btn-success mx-2' onClick={() => getdatafromHTML()}>OK</div>
                        {/* <h3>แบบฟอร์มเบี้ยเลี้ยง</h3> */}
                    </div>


                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>เลขที่คำสั่ง</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ต่อเนื่อง</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ลงวันที่</th>
                            <th className="col-3" style={{ textAlign: 'center', verticalAlign: 'middle' }}>สถานที่ปฏิบัติงาน</th>
                            <th className="col-3" style={{ textAlign: 'center', verticalAlign: 'middle' }}>วัตถุประสงค์</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>สังกัด</th>
                            {/* <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>งบ</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <input type="text" required className="form-control text-center" value={state.Detail_Work[0].Number_command} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "Number_command") }} />
                            </td>
                            <td>
                                <div className='input-group mx-1 '>
                                    <select name="Feeder" className="form-control text-center" value={state.Detail_Work[0].Continue_Command_select} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "Continue_Command_select") }}>
                                        <option value="ไม่ต่อเนื่อง">ไม่ต่อเนื่อง</option>
                                        <option value="ต่อเนื่อง">ต่อเนื่อง</option>
                                    </select>
                                    <input type={state.Detail_Work[0].Continue_Command_check} placeholder='เลขคำสั่งต่อเนื่อง' className="form-control text-center" value={state.Detail_Work[0].Continue_Command_number} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "Continue_Command_number") }} />
                                </div>
                            </td>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <div>
                                    <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                        <DatePicker
                                            label="เลือกวันที่"
                                            format="DD MMMYYYY"
                                            onChange={(newValue) => { handleforsetdatadate_permission(newValue, 0, "date_permission", "date_permission_buddha") }}
                                            defaultValue={dayjs(state.Detail_Work[0].date_permission)}
                                            value={dayjs(state.Detail_Work[0].date_permission)}
                                            slotProps={{ textField: { size: 'small' } }}

                                        />
                                    </LocalizationProvider>
                                </div>

                            </td>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <input type="text" required className="form-control text-center" value={state.Detail_Work[0].location_work} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "location_work") }} />
                            </td>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <input type="text" required className="form-control text-center" value={state.Detail_Work[0].obj} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "obj") }} />
                            </td>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <input type="text" required className="form-control text-center" value={state.Detail_Work[0].affiliation} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "affiliation") }} />
                            </td>

                        </tr>
                    </tbody>
                </table>



                <table>
                    <thead>
                        <tr>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>เรียน</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>โดยรถยนต์</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>งบ</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>จำนวนวัน/คืน</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}> </th>
                            <th className="col-3" style={{ textAlign: 'center', verticalAlign: 'middle' }}>{`${state.Detail_Work[0].type_order}${state.Detail_Work[0].other_type_order}`}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" required className="form-control text-center" value={state.Detail_Work[0].for_personal} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "for_personal") }} />
                            </td>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <div className='input-group mx-1 '>
                                    <select name="Feeder" className="form-control text-center" value={state.Detail_Work[0].type_car} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "type_car") }}>
                                        <option value="รถยนต์ กฟภ. ทะเบียน">รถยนต์กฟภ.</option>
                                        <option value="รถยนต์ส่วนตัว ทะเบียน">รถยนต์ส่วนตัว</option>
                                        <option value="รถโดยสารประจำทาง">รถโดยสารประจำทาง</option>
                                    </select>
                                    <input type="text" required className="form-control text-center" placeholder='ทะเบียน' value={state.Detail_Work[0].serial_car} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "serial_car") }} />
                                </div>
                            </td>
                            <td>
                                <div className='input-group mx-1'>
                                    <select name="Feeder" className="form-control text-center" value={state.Detail_Work[0].budget} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "budget") }}>
                                        <option value="ทำการ">ทำการ</option>
                                        <option value="WBS">WBS</option>
                                        <option value="">อื่นๆ</option>
                                    </select>
                                    <input type="text" placeholder='ระบุ' className="form-control text-center" value={state.Detail_Work[0].other_budget} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "other_budget") }} />
                                </div>

                            </td>
                            <td>
                                <div className='input-group mx-1'>
                                    <input type="text" required className="form-control text-center" placeholder="วัน" value={state.Detail_Work[0].number_day} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "number_day") }} />
                                    <input type="text" required className="form-control text-center" placeholder="คืน" value={state.Detail_Work[0].number_night} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "number_night") }} />
                                </div>
                            </td>
                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                <div className='input-group mx-1 '>
                                    <select className="form-control text-center" value={state.Detail_Work[0].type_order} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "type_order") }} >
                                        <option value="หมายเลขใบสั่ง">หมายเลขใบสั่ง</option>
                                        <option value="หมายเลขงาน">หมายเลขงาน</option>
                                        <option value="">อื่นๆ</option>
                                    </select>
                                    <input type={state.Detail_Work[0].other_type_order_hidden} className="form-control text-center" value={state.Detail_Work[0].other_type_order} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "other_type_order") }} />
                                </div>
                            </td>
                            <td>
                                <input type="text" required className="form-control text-center" value={state.Detail_Work[0].Number_order} onChange={(e) => { handleforsetdataDetail_Work(e, 0, "Number_order") }} />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* ---------------------------------------------------------------------------------------------------------------------- */}
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <h3>ข้อมูลผู้ปฏิบัติงาน</h3>
                    {state.data_personal_information[0] == "" && <FontAwesomeIcon icon={faXmark} />}
                    {state.data_personal_information[0] !== "" && <FontAwesomeIcon icon={faCheck} />}
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>เลชประจำตัว</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ชื่อ-นามสกุล</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ตำเเหน่ง</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ค่าเบียเลี้ยงวันละ</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ค่าเบียเลี้ยงส่วนเพิ่ม</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ค่าที่พักจ่ายจริง</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ค่าที่พักเหมาจ่าย</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>เพิ่ม/ลด</th>
                        </tr>
                    </thead>

                    {/* <button className='btn btn-success' onClick={() => { handleforaddinput("") }}>ADD</button> */}
                    {
                        state.Personal_Infomation.map((data: any, index: any) => {
                            return (<>

                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" required className="form-control text-center" value={data.Number_Personal} onChange={(e) => { handleforsetdata(e, index, "Number_Personal") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" required className="form-control text-center" value={data.Name_Personal} onChange={(e) => { handleforsetdata(e, index, "Name_Personal") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" required className="form-control text-center" value={data.Position_Personal} onChange={(e) => { handleforsetdata(e, index, "Position_Personal") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" required className="form-control text-center" value={data.Allowance} onChange={(e) => { handleforsetdata(e, index, "Allowance") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" required className="form-control text-center" value={data.Additional_Allowance} onChange={(e) => { handleforsetdata(e, index, "Additional_Allowance") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" required className="form-control text-center" value={data.Accomodation_cost} onChange={(e) => { handleforsetdata(e, index, "Accomodation_cost") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" required className="form-control text-center" value={data.Accomodation_All} onChange={(e) => { handleforsetdata(e, index, "Accomodation_All") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <button className='btn btn-success mx-1' onClick={() => { handleforAdd(index + 1) }}>Add</button>
                                            {state.Personal_Infomation.length > 1 && <button className="btn btn-danger mx-1" onClick={() => { handlefordelete(index) }}>Del</button>}
                                        </td>
                                    </tr>
                                </tbody>

                            </>

                            )
                        })
                    }
                </table >

                {/* ---------------------------------------------------------------------------------------------------------------------- */}
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <h3>รายการเบิกเพิ่มเติม</h3>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ชื่อผู้เบิก</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>รหัสบัญชี</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>รายการเบิก</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ยอดเงิน</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ภาษีมูลค่าเพิ่ม</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>รวมสุทธิ</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>เพิ่ม/ลด</th>
                        </tr>
                    </thead>

                    {/* <button className='btn btn-success' onClick={() => { handleforaddinput("") }}>ADD</button> */}
                    {
                        state.Additional_buy.map((data: any, index: any) => {
                            return (<>

                                <tbody>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <select className="form-control text-center" value={data.Name_personal} onChange={(e) => { handleforsetdataaddition_buy(e, index, "Name_personal") }}>
                                                <option value="ระบุชื่อผู้ซื้อ">ระบุชื่อผู้ซื้อ</option>
                                                {state.Personal_Infomation.map((data: any, index: any) => {
                                                    return (
                                                        <option value={data.Name_Personal}>{data.Name_Personal}</option>
                                                    )
                                                })}
                                            </select>
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" className="form-control text-center" value={data.Number_account} onChange={(e) => { handleforsetdataaddition_buy(e, index, "Number_account") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <div className='input-group mx-1 '>
                                                <select className="form-control text-center" value={data.list_material} onChange={(e) => { handleforsetdataaddition_buy(e, index, "list_material") }}>
                                                    <option value="ระบุรายการเบิก">ระบุรายการเบิก</option>
                                                    {state.data_account_buy.map((data1: any, index: any) => {
                                                        return (
                                                            <option value={data1}>{data1[1]}</option>
                                                        )
                                                    })}
                                                    <option value="">อื่นๆ</option>
                                                </select>
                                                <input type={data.ohter_list_material_hidden} className="form-control text-center" value={data.ohter_list_material} onChange={(e) => { handleforsetdataaddition_buy(e, index, "ohter_list_material") }} />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" className="form-control text-center" value={data.price} onChange={(e) => { handleforsetdataaddition_buy(e, index, "price") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <input type="text" className="form-control text-center" value={data.vat} onChange={(e) => { handleforsetdataaddition_buy(e, index, "vat") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <div className='form-input d-flex justiy-content-center align-items-center'>
                                                <input type="text" className="form-control text-center me-2" value={data.total_price} onChange={(e) => { handleforsetdataaddition_buy(e, index, "total_price") }} />
                                                <button style={{ all: 'unset', cursor: "pointer" }} onClick={() => price_calculate(index)}><FontAwesomeIcon icon={faCalculator} /></button>

                                            </div>
                                        </td>

                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <button className='btn btn-success mx-1' onClick={() => { handleforAddadditional_buy(index + 1) }}>Add</button>
                                            {state.Additional_buy.length > 1 && <button className="btn btn-danger mx-1" onClick={() => { handlefordeleteadditional_buy(index) }}>Del</button>}
                                        </td>
                                    </tr>
                                </tbody>

                            </>

                            )
                        })
                    }
                </table >


                {/* ---------------------------------------------------------------------------------------------------------------------- */}

                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <h3>รายการการทำงาน</h3>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>จาก</th>
                            <th className="col-2" style={{ textAlign: 'center', verticalAlign: 'middle' }}>วันที่</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>เวลา</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}></th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>ถึง</th>
                            <th className="col-2" style={{ textAlign: 'center', verticalAlign: 'middle' }}>วันที่</th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>เวลา</th>
                            {/* <th className="col-4" style={{ textAlign: 'center', verticalAlign: 'middle' }}>เพื่อ</th> */}
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>การทำงาน</th>
                        </tr>
                    </thead>
                    <tbody>

                        {state.Work_Infomation.map((data: any, index: any) => {
                            return (
                                <>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <div className='input-group mx-1 '>
                                                <select className="form-control text-center" value={data.location_from} onChange={(e) => { handleforsetdatawork(e, index, "location_from") }}>
                                                    <option value="ระบุสถานที่">ระบุสถานที่</option>
                                                    {state.data_location.map((data1: any, index: any) => {
                                                        return (
                                                            <option value={data1[1]}>{data1[1]}</option>
                                                        )

                                                    })}
                                                    <option value="">อื่นๆ</option>
                                                </select>
                                                <input type={data.other_location_from_hidden} className="form-control text-center" value={data.other_location_from} onChange={(e) => { handleforsetdatawork(e, index, "other_location_from") }} />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <Box>
                                                {/* <Typography variant='h5'>
                                                MUI Datepicker
                                            </Typography> */}
                                                <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                                    <DatePicker
                                                        label="เลือกวันที่"
                                                        format="DD MMMYYYY"
                                                        onChange={(newValue) => { handleforsetdataworkDate(newValue, index, "date_from", "date_from_buddha") }}
                                                        defaultValue={dayjs(data.date_from)}
                                                        value={dayjs(data.date_from)}
                                                        slotProps={{ textField: { size: 'small' } }}

                                                    />
                                                </LocalizationProvider>
                                            </Box>

                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }} className='d-flex justify-content-center'>
                                            <input type="text" className="form-control text-center" value={data.time_from} onChange={(e) => { handleforsetdatawork(e, index, "time_from") }} />
                                            <div className='ms-1 d-flex justify-content-center align-items-center'>น.</div>
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>&rarr;</td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <div className='input-group mx-1 '>
                                                <select className="form-control text-center" value={data.location_destination} onChange={(e) => { handleforsetdatawork(e, index, "location_destination") }}>
                                                    <option value="ระบุสถานที่">ระบุสถานที่</option>
                                                    {state.data_location.map((data1: any, index: any) => {
                                                        return (
                                                            <option value={data1[1]}>{data1[1]}</option>
                                                        )
                                                    })}
                                                    <option value="">อื่นๆ</option>
                                                </select>
                                                <input type={data.other_location_destination_hidden} className="form-control text-center" value={data.other_location_destination} onChange={(e) => { handleforsetdatawork(e, index, "other_location_destination") }} />
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <Box>
                                                {/* <Typography variant='h5'>
                                                MUI Datepicker
                                            </Typography> */}
                                                <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                                    <DatePicker
                                                        label="เลือกวันที่"
                                                        format="DD MMMYYYY"
                                                        onChange={(newValue) => { handleforsetdataworkDate(newValue, index, "date_destination", "date_destination_buddha") }}
                                                        defaultValue={dayjs(data.date_destination)}
                                                        value={dayjs(data.date_destination)}
                                                        slotProps={{ textField: { size: 'small' } }}

                                                    />
                                                </LocalizationProvider>

                                            </Box>
                                            {/* <input type="text" className="form-control text-center" value={data.date_destination} onChange={(e) => { handleforsetdatawork(e, index, "date_destination") }} /> */}
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }} className='d-flex justify-content-center'>
                                            <input type="text" className="form-control text-center" value={data.time_destination} onChange={(e) => { handleforsetdatawork(e, index, "time_destination") }} />
                                            <div className='ms-1 d-flex justify-content-center align-items-center'>น.</div>
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <div className='mx-1 d-flex justify-content-center'>
                                                <button className='btn btn-success mx-1' onClick={() => { handleforAddwork(index + 1) }}>Add</button>
                                                {state.Work_Infomation.length > 1 && <button className="btn btn-danger mx-1" onClick={() => { handlefordeletework(index) }}>Del</button>}
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}


                    </tbody >
                </table>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <h3>รายละเอียดปฏิบัติงาน</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                วันที่เริ่ม
                            </th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                วันที่สิ้นสุด
                            </th>
                            <th className="col-4" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                เพื่อทำงาน
                            </th>
                            <th className="col-1" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                การทำงาน
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.work_for_work.map((data: any, index: any) => {
                            return (
                                <>
                                    <tr>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <div className='my-1'>
                                                <Box>
                                                    {/* <Typography variant='h5'>
                                                MUI Datepicker
                                            </Typography> */}
                                                    <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                                        <DatePicker
                                                            label="เลือกวันที่"
                                                            format="DD MMMYYYY"
                                                            onChange={(newValue) => { handleforsetdatadate_work_forwok(newValue, index, "date_from_for_work") }}
                                                            defaultValue={dayjs(data.date_from_for_work)}
                                                            value={dayjs(data.date_from_for_work)}
                                                            slotProps={{ textField: { size: 'small' } }}

                                                        />
                                                    </LocalizationProvider>

                                                </Box>
                                            </div>

                                            {/* <input type="text" className="form-control text-center" value={data.date_destination} onChange={(e) => { handleforsetdatawork(e, index, "date_destination") }} /> */}
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <div className='my-1'>
                                                <Box>
                                                    {/* <Typography variant='h5'>
                                                MUI Datepicker
                                            </Typography> */}
                                                    <LocalizationProvider dateAdapter={newAdapter} adapterLocale='th' >
                                                        <DatePicker
                                                            label="เลือกวันที่"
                                                            format="DD MMMYYYY"
                                                            onChange={(newValue) => { handleforsetdatadate_work_forwok(newValue, index, "date_destination_for_work") }}
                                                            defaultValue={dayjs(data.date_destination_for_work)}
                                                            value={dayjs(data.date_destination_for_work)}
                                                            slotProps={{ textField: { size: 'small' } }}

                                                        />
                                                    </LocalizationProvider>

                                                </Box>
                                                {/* <input type="text" className="form-control text-center" value={data.date_destination} onChange={(e) => { handleforsetdatawork(e, index, "date_destination") }} /> */}
                                            </div>
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }} className='d-flex justify-content-center'>
                                            <input type="text" className="form-control text-center my-1" value={data.for_work} onChange={(e) => { handleforsetdatawork_for_work(e, index, "for_work") }} />
                                        </td>
                                        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                            <div className='mx-1 d-flex justify-content-center'>
                                                <button className='btn btn-success mx-1' onClick={() => { handleforAddwork_for_work(index + 1) }}>Add</button>
                                                {state.work_for_work.length > 1 && <button className="btn btn-danger mx-1" onClick={() => { handlefordeletework_for_work(index) }}>Del</button>}
                                            </div>
                                        </td>
                                    </tr>

                                </>
                            )

                        })}

                    </tbody>
                </table>


                <div className='d-flex justify-content-center'>
                    {state.row_for_save !== 0 && <button className='btn btn-primary mx-2' onClick={save_data}>Save</button>}
                    <button className='btn btn-warning mx-2' onClick={save_as_data}>Save AS</button>
                    {state.row_for_save !== 0 && <button className='btn btn-danger mx-2' onClick={Del_data}>Del</button>}
                    <button onClick={() => { ExcelExport({ ...state }) }} className='btn btn-success mx-2'>Excel File</button>
                    <button onClick={() => { test_frorearang() }} className='btn btn-success mx-2'>Test</button>
                </div>
            </div >
            <Footer />
        </>
    )

}

export default Reciept;

