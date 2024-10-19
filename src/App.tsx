import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Export } from './Component/Content/Export/Export';
import { ExcelExport } from './Component/Content/Export/Export1';
import Swal from 'sweetalert2'
import Docx_export from './Component/Content/Export/docx';


function App() {



  // <-------------------  For set state with use reducer ---------------->
  const initials = {
    Sender: "ไม่ระบุ",
    Year: new Date().toJSON().slice(0, 10),
    Substation_Thai: "โพธาราม1",
    Substation_Eng: "PTR",
    Feeder: ["PTR01CVB-01", "PTR01VB-01", "PTR02VB-01", "PTR1BVB-01", "PTR03VB-01", "PTR04VB-01", "PTR05VB-01", "PTR01TVB-01", "PTRBVB-01", "PTR02TVB-01", "PTR06VB-01", "PTR07VB-01", "PTR2BVB-01", "PTR08VB-01", "PTR09VB-01", "PTR10VB-01", "PTR02CVB-01", "PTRBVB-02", "PTR11VB-01", "PTR12VB-01", "PTR3BVB-01", "PTR13VB-01", "PTR14VB-01", "PTR15VB-01", "PTR03CVB-01"],
    Select_Feeder: "PTR01CVB-01",
    Select_Feeder_Array: '["โพธาราม1", "PTR"]',
    Serial: [],
    Contact_PhaseA: "",
    Contact_PhaseB: "",
    Contact_PhaseC: "",
    Vaccuum_PhaseA: "",
    Vaccuum_PhaseB: "",
    Vaccuum_PhaseC: "",
    Insulation_PhaseAG: "",
    Insulation_PhaseBG: "",
    Insulation_PhaseCG: "",
    Insulation_PhaseAB: "",
    Insulation_PhaseBC: "",
    Insulation_PhaseCA: "",
    Counter: "",
    Remark: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_0: "",
    Serial_0: "",
    Contact_PhaseA_0: "",
    Contact_PhaseB_0: "",
    Contact_PhaseC_0: "",
    Vaccuum_PhaseA_0: "",
    Vaccuum_PhaseB_0: "",
    Vaccuum_PhaseC_0: "",
    Insulation_PhaseAG_0: "",
    Insulation_PhaseBG_0: "",
    Insulation_PhaseCG_0: "",
    Insulation_PhaseAB_0: "",
    Insulation_PhaseBC_0: "",
    Insulation_PhaseCA_0: "",
    Counter_0: "",
    Remark_0: "",
    MFR_0: "",
    Type_0: "",
    kV_0: "",
    kA_0: "",
    A_0: "",

    // <-------------------  FEEDER1  ----------------> 
    Feeder_1: "",
    Serial_1: "",
    Contact_PhaseA_1: "",
    Contact_PhaseB_1: "",
    Contact_PhaseC_1: "",
    Vaccuum_PhaseA_1: "",
    Vaccuum_PhaseB_1: "",
    Vaccuum_PhaseC_1: "",
    Insulation_PhaseAG_1: "",
    Insulation_PhaseBG_1: "",
    Insulation_PhaseCG_1: "",
    Insulation_PhaseAB_1: "",
    Insulation_PhaseBC_1: "",
    Insulation_PhaseCA_1: "",
    Counter_1: "",
    Remark_1: "",
    MFR_1: "",
    Type_1: "",
    kV_1: "",
    kA_1: "",
    A_1: "",


    // <-------------------  FEEDER2  ----------------> 
    Feeder_2: "",
    Serial_2: "",
    Contact_PhaseA_2: "",
    Contact_PhaseB_2: "",
    Contact_PhaseC_2: "",
    Vaccuum_PhaseA_2: "",
    Vaccuum_PhaseB_2: "",
    Vaccuum_PhaseC_2: "",
    Insulation_PhaseAG_2: "",
    Insulation_PhaseBG_2: "",
    Insulation_PhaseCG_2: "",
    Insulation_PhaseAB_2: "",
    Insulation_PhaseBC_2: "",
    Insulation_PhaseCA_2: "",
    Counter_2: "",
    Remark_2: "",
    MFR_2: "",
    Type_2: "",
    kV_2: "",
    kA_2: "",
    A_2: "",

    // <-------------------  IN1  ----------------> 
    Feeder_3: "",
    Serial_3: "",
    Contact_PhaseA_3: "",
    Contact_PhaseB_3: "",
    Contact_PhaseC_3: "",
    Vaccuum_PhaseA_3: "",
    Vaccuum_PhaseB_3: "",
    Vaccuum_PhaseC_3: "",
    Insulation_PhaseAG_3: "",
    Insulation_PhaseBG_3: "",
    Insulation_PhaseCG_3: "",
    Insulation_PhaseAB_3: "",
    Insulation_PhaseBC_3: "",
    Insulation_PhaseCA_3: "",
    Counter_3: "",
    Remark_3: "",
    MFR_3: "",
    Type_3: "",
    kV_3: "",
    kA_3: "",
    A_3: "",

    // <-------------------  FEEDER3  ----------------> 
    Feeder_4: "",
    Serial_4: "",
    Contact_PhaseA_4: "",
    Contact_PhaseB_4: "",
    Contact_PhaseC_4: "",
    Vaccuum_PhaseA_4: "",
    Vaccuum_PhaseB_4: "",
    Vaccuum_PhaseC_4: "",
    Insulation_PhaseAG_4: "",
    Insulation_PhaseBG_4: "",
    Insulation_PhaseCG_4: "",
    Insulation_PhaseAB_4: "",
    Insulation_PhaseBC_4: "",
    Insulation_PhaseCA_4: "",
    Counter_4: "",
    Remark_4: "",
    MFR_4: "",
    Type_4: "",
    kV_4: "",
    kA_4: "",
    A_4: "",

    // <-------------------  FEEDER4  ----------------> 
    Feeder_5: "",
    Serial_5: "",
    Contact_PhaseA_5: "",
    Contact_PhaseB_5: "",
    Contact_PhaseC_5: "",
    Vaccuum_PhaseA_5: "",
    Vaccuum_PhaseB_5: "",
    Vaccuum_PhaseC_5: "",
    Insulation_PhaseAG_5: "",
    Insulation_PhaseBG_5: "",
    Insulation_PhaseCG_5: "",
    Insulation_PhaseAB_5: "",
    Insulation_PhaseBC_5: "",
    Insulation_PhaseCA_5: "",
    Counter_5: "",
    Remark_5: "",
    MFR_5: "",
    Type_5: "",
    kV_5: "",
    kA_5: "",
    A_5: "",

    // <-------------------  FEEDER5  ----------------> 
    Feeder_6: "",
    Serial_6: "",
    Contact_PhaseA_6: "",
    Contact_PhaseB_6: "",
    Contact_PhaseC_6: "",
    Vaccuum_PhaseA_6: "",
    Vaccuum_PhaseB_6: "",
    Vaccuum_PhaseC_6: "",
    Insulation_PhaseAG_6: "",
    Insulation_PhaseBG_6: "",
    Insulation_PhaseCG_6: "",
    Insulation_PhaseAB_6: "",
    Insulation_PhaseBC_6: "",
    Insulation_PhaseCA_6: "",
    Counter_6: "",
    Remark_6: "",
    MFR_6: "",
    Type_6: "",
    kV_6: "",
    kA_6: "",
    A_6: "",

    // <-------------------  Loadbreak1  ----------------> 
    Feeder_7: "",
    Serial_7: "",
    Contact_PhaseA_7: "",
    Contact_PhaseB_7: "",
    Contact_PhaseC_7: "",
    Vaccuum_PhaseA_7: "",
    Vaccuum_PhaseB_7: "",
    Vaccuum_PhaseC_7: "",
    Insulation_PhaseAG_7: "",
    Insulation_PhaseBG_7: "",
    Insulation_PhaseCG_7: "",
    Insulation_PhaseAB_7: "",
    Insulation_PhaseBC_7: "",
    Insulation_PhaseCA_7: "",
    Counter_7: "",
    Remark_7: "",
    MFR_7: "",
    Type_7: "",
    kV_7: "",
    kA_7: "",
    A_7: "",

    // <-------------------  BUSTIE  ----------------> 
    Feeder_8: "",
    Serial_8: "",
    Contact_PhaseA_8: "",
    Contact_PhaseB_8: "",
    Contact_PhaseC_8: "",
    Vaccuum_PhaseA_8: "",
    Vaccuum_PhaseB_8: "",
    Vaccuum_PhaseC_8: "",
    Insulation_PhaseAG_8: "",
    Insulation_PhaseBG_8: "",
    Insulation_PhaseCG_8: "",
    Insulation_PhaseAB_8: "",
    Insulation_PhaseBC_8: "",
    Insulation_PhaseCA_8: "",
    Counter_8: "",
    Remark_8: "",
    MFR_8: "",
    Type_8: "",
    kV_8: "",
    kA_8: "",
    A_8: "",

    // <-------------------  Loadbreak2  ----------------> 
    Feeder_9: "",
    Serial_9: "",
    Contact_PhaseA_9: "",
    Contact_PhaseB_9: "",
    Contact_PhaseC_9: "",
    Vaccuum_PhaseA_9: "",
    Vaccuum_PhaseB_9: "",
    Vaccuum_PhaseC_9: "",
    Insulation_PhaseAG_9: "",
    Insulation_PhaseBG_9: "",
    Insulation_PhaseCG_9: "",
    Insulation_PhaseAB_9: "",
    Insulation_PhaseBC_9: "",
    Insulation_PhaseCA_9: "",
    Counter_9: "",
    Remark_9: "",
    MFR_9: "",
    Type_9: "",
    kV_9: "",
    kA_9: "",
    A_9: "",

    // <-------------------  FEEDER6  ----------------> 
    Feeder_10: "",
    Serial_10: "",
    Contact_PhaseA_10: "",
    Contact_PhaseB_10: "",
    Contact_PhaseC_10: "",
    Vaccuum_PhaseA_10: "",
    Vaccuum_PhaseB_10: "",
    Vaccuum_PhaseC_10: "",
    Insulation_PhaseAG_10: "",
    Insulation_PhaseBG_10: "",
    Insulation_PhaseCG_10: "",
    Insulation_PhaseAB_10: "",
    Insulation_PhaseBC_10: "",
    Insulation_PhaseCA_10: "",
    Counter_10: "",
    Remark_10: "",
    MFR_10: "",
    Type_10: "",
    kV_10: "",
    kA_10: "",
    A_10: "",


    // <-------------------  FEEDER7  ----------------> 
    Feeder_11: "",
    Serial_11: "",
    Contact_PhaseA_11: "",
    Contact_PhaseB_11: "",
    Contact_PhaseC_11: "",
    Vaccuum_PhaseA_11: "",
    Vaccuum_PhaseB_11: "",
    Vaccuum_PhaseC_11: "",
    Insulation_PhaseAG_11: "",
    Insulation_PhaseBG_11: "",
    Insulation_PhaseCG_11: "",
    Insulation_PhaseAB_11: "",
    Insulation_PhaseBC_11: "",
    Insulation_PhaseCA_11: "",
    Counter_11: "",
    Remark_11: "",
    MFR_11: "",
    Type_11: "",
    kV_11: "",
    kA_11: "",
    A_11: "",


    // <-------------------  IN2  ----------------> 
    Feeder_12: "",
    Serial_12: "",
    Contact_PhaseA_12: "",
    Contact_PhaseB_12: "",
    Contact_PhaseC_12: "",
    Vaccuum_PhaseA_12: "",
    Vaccuum_PhaseB_12: "",
    Vaccuum_PhaseC_12: "",
    Insulation_PhaseAG_12: "",
    Insulation_PhaseBG_12: "",
    Insulation_PhaseCG_12: "",
    Insulation_PhaseAB_12: "",
    Insulation_PhaseBC_12: "",
    Insulation_PhaseCA_12: "",
    Counter_12: "",
    Remark_12: "",
    MFR_12: "",
    Type_12: "",
    kV_12: "",
    kA_12: "",
    A_12: "",

    // <-------------------  FEEDER8  ----------------> 
    Feeder_13: "",
    Serial_13: "",
    Contact_PhaseA_13: "",
    Contact_PhaseB_13: "",
    Contact_PhaseC_13: "",
    Vaccuum_PhaseA_13: "",
    Vaccuum_PhaseB_13: "",
    Vaccuum_PhaseC_13: "",
    Insulation_PhaseAG_13: "",
    Insulation_PhaseBG_13: "",
    Insulation_PhaseCG_13: "",
    Insulation_PhaseAB_13: "",
    Insulation_PhaseBC_13: "",
    Insulation_PhaseCA_13: "",
    Counter_13: "",
    Remark_13: "",
    MFR_13: "",
    Type_13: "",
    kV_13: "",
    kA_13: "",
    A_13: "",


    // <-------------------  FEEDER9  ----------------> 
    Feeder_14: "",
    Serial_14: "",
    Contact_PhaseA_14: "",
    Contact_PhaseB_14: "",
    Contact_PhaseC_14: "",
    Vaccuum_PhaseA_14: "",
    Vaccuum_PhaseB_14: "",
    Vaccuum_PhaseC_14: "",
    Insulation_PhaseAG_14: "",
    Insulation_PhaseBG_14: "",
    Insulation_PhaseCG_14: "",
    Insulation_PhaseAB_14: "",
    Insulation_PhaseBC_14: "",
    Insulation_PhaseCA_14: "",
    Counter_14: "",
    Remark_14: "",
    MFR_14: "",
    Type_14: "",
    kV_14: "",
    kA_14: "",
    A_14: "",

    // <-------------------  FEEDER10  ----------------> 
    Feeder_15: "",
    Serial_15: "",
    Contact_PhaseA_15: "",
    Contact_PhaseB_15: "",
    Contact_PhaseC_15: "",
    Vaccuum_PhaseA_15: "",
    Vaccuum_PhaseB_15: "",
    Vaccuum_PhaseC_15: "",
    Insulation_PhaseAG_15: "",
    Insulation_PhaseBG_15: "",
    Insulation_PhaseCG_15: "",
    Insulation_PhaseAB_15: "",
    Insulation_PhaseBC_15: "",
    Insulation_PhaseCA_15: "",
    Counter_15: "",
    Remark_15: "",
    MFR_15: "",
    Type_15: "",
    kV_15: "",
    kA_15: "",
    A_15: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_16: "",
    Serial_16: "",
    Contact_PhaseA_16: "",
    Contact_PhaseB_16: "",
    Contact_PhaseC_16: "",
    Vaccuum_PhaseA_16: "",
    Vaccuum_PhaseB_16: "",
    Vaccuum_PhaseC_16: "",
    Insulation_PhaseAG_16: "",
    Insulation_PhaseBG_16: "",
    Insulation_PhaseCG_16: "",
    Insulation_PhaseAB_16: "",
    Insulation_PhaseBC_16: "",
    Insulation_PhaseCA_16: "",
    Counter_16: "",
    Remark_16: "",
    MFR_16: "",
    Type_16: "",
    kV_16: "",
    kA_16: "",
    A_16: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_17: "",
    Serial_17: "",
    Contact_PhaseA_17: "",
    Contact_PhaseB_17: "",
    Contact_PhaseC_17: "",
    Vaccuum_PhaseA_17: "",
    Vaccuum_PhaseB_17: "",
    Vaccuum_PhaseC_17: "",
    Insulation_PhaseAG_17: "",
    Insulation_PhaseBG_17: "",
    Insulation_PhaseCG_17: "",
    Insulation_PhaseAB_17: "",
    Insulation_PhaseBC_17: "",
    Insulation_PhaseCA_17: "",
    Counter_17: "",
    MFR_17: "",
    Type_17: "",
    kV_17: "",
    kA_17: "",
    A_17: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_18: "",
    Serial_18: "",
    Contact_PhaseA_18: "",
    Contact_PhaseB_18: "",
    Contact_PhaseC_18: "",
    Vaccuum_PhaseA_18: "",
    Vaccuum_PhaseB_18: "",
    Vaccuum_PhaseC_18: "",
    Insulation_PhaseAG_18: "",
    Insulation_PhaseBG_18: "",
    Insulation_PhaseCG_18: "",
    Insulation_PhaseAB_18: "",
    Insulation_PhaseBC_18: "",
    Insulation_PhaseCA_18: "",
    Counter_18: "",
    MFR_18: "",
    Type_18: "",
    kV_18: "",
    kA_18: "",
    A_18: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_19: "",
    Serial_19: "",
    Contact_PhaseA_19: "",
    Contact_PhaseB_19: "",
    Contact_PhaseC_19: "",
    Vaccuum_PhaseA_19: "",
    Vaccuum_PhaseB_19: "",
    Vaccuum_PhaseC_19: "",
    Insulation_PhaseAG_19: "",
    Insulation_PhaseBG_19: "",
    Insulation_PhaseCG_19: "",
    Insulation_PhaseAB_19: "",
    Insulation_PhaseBC_19: "",
    Insulation_PhaseCA_19: "",
    Counter_19: "",
    MFR_19: "",
    Type_19: "",
    kV_19: "",
    kA_19: "",
    A_19: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_20: "",
    Serial_20: "",
    Contact_PhaseA_20: "",
    Contact_PhaseB_20: "",
    Contact_PhaseC_20: "",
    Vaccuum_PhaseA_20: "",
    Vaccuum_PhaseB_20: "",
    Vaccuum_PhaseC_20: "",
    Insulation_PhaseAG_20: "",
    Insulation_PhaseBG_20: "",
    Insulation_PhaseCG_20: "",
    Insulation_PhaseAB_20: "",
    Insulation_PhaseBC_20: "",
    Insulation_PhaseCA_20: "",
    Counter_20: "",
    MFR_20: "",
    Type_20: "",
    kV_20: "",
    kA_20: "",
    A_20: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_21: "",
    Serial_21: "",
    Contact_PhaseA_21: "",
    Contact_PhaseB_21: "",
    Contact_PhaseC_21: "",
    Vaccuum_PhaseA_21: "",
    Vaccuum_PhaseB_21: "",
    Vaccuum_PhaseC_21: "",
    Insulation_PhaseAG_21: "",
    Insulation_PhaseBG_21: "",
    Insulation_PhaseCG_21: "",
    Insulation_PhaseAB_21: "",
    Insulation_PhaseBC_21: "",
    Insulation_PhaseCA_21: "",
    Counter_21: "",
    MFR_21: "",
    Type_21: "",
    kV_21: "",
    kA_21: "",
    A_21: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_22: "",
    Serial_22: "",
    Contact_PhaseA_22: "",
    Contact_PhaseB_22: "",
    Contact_PhaseC_22: "",
    Vaccuum_PhaseA_22: "",
    Vaccuum_PhaseB_22: "",
    Vaccuum_PhaseC_22: "",
    Insulation_PhaseAG_22: "",
    Insulation_PhaseBG_22: "",
    Insulation_PhaseCG_22: "",
    Insulation_PhaseAB_22: "",
    Insulation_PhaseBC_22: "",
    Insulation_PhaseCA_22: "",
    Counter_22: "",
    MFR_22: "",
    Type_22: "",
    kV_22: "",
    kA_22: "",
    A_22: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_23: "",
    Serial_23: "",
    Contact_PhaseA_23: "",
    Contact_PhaseB_23: "",
    Contact_PhaseC_23: "",
    Vaccuum_PhaseA_23: "",
    Vaccuum_PhaseB_23: "",
    Vaccuum_PhaseC_23: "",
    Insulation_PhaseAG_23: "",
    Insulation_PhaseBG_23: "",
    Insulation_PhaseCG_23: "",
    Insulation_PhaseAB_23: "",
    Insulation_PhaseBC_23: "",
    Insulation_PhaseCA_23: "",
    Counter_23: "",
    MFR_23: "",
    Type_23: "",
    kV_23: "",
    kA_23: "",
    A_23: "",

    // <-------------------  CAPBANK  ----------------> 
    Feeder_24: "",
    Serial_24: "",
    Contact_PhaseA_24: "",
    Contact_PhaseB_24: "",
    Contact_PhaseC_24: "",
    Vaccuum_PhaseA_24: "",
    Vaccuum_PhaseB_24: "",
    Vaccuum_PhaseC_24: "",
    Insulation_PhaseAG_24: "",
    Insulation_PhaseBG_24: "",
    Insulation_PhaseCG_24: "",
    Insulation_PhaseAB_24: "",
    Insulation_PhaseBC_24: "",
    Insulation_PhaseCA_24: "",
    Counter_24: "",
    MFR_24: "",
    Type_24: "",
    kV_24: "",
    kA_24: "",
    A_24: "",


  }

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "setstate":
        return {
          ...state,
          [action.payload.name]: action.payload.value
        }
      case "resetstate":
        return {
          ...state,
          Substation_Thai: action.payload.value,
          Substation_Eng: action.payload.value1,
          //Sender: "",
          //Year: "",          
          //Feeder: "",
          Contact_PhaseA: "",
          Contact_PhaseB: "",
          Contact_PhaseC: "",
          Vaccuum_PhaseA: "",
          Vaccuum_PhaseB: "",
          Vaccuum_PhaseC: "",
          Insulation_PhaseAG: "",
          Insulation_PhaseBG: "",
          Insulation_PhaseCG: "",
          Insulation_PhaseAB: "",
          Insulation_PhaseBC: "",
          Insulation_PhaseCA: "",
          Counter: "",
          Remark: "",
          // <-------------------  CAPBANK  ----------------> 
          Feeder_0: "",
          Serial_0: "",
          Contact_PhaseA_0: "",
          Contact_PhaseB_0: "",
          Contact_PhaseC_0: "",
          Vaccuum_PhaseA_0: "",
          Vaccuum_PhaseB_0: "",
          Vaccuum_PhaseC_0: "",
          Insulation_PhaseAG_0: "",
          Insulation_PhaseBG_0: "",
          Insulation_PhaseCG_0: "",
          Insulation_PhaseAB_0: "",
          Insulation_PhaseBC_0: "",
          Insulation_PhaseCA_0: "",
          Counter_0: "",
          Remark_0: "",
          MFR_0: "",
          Type_0: "",
          kV_0: "",
          kA_0: "",
          A_0: "",

          // <-------------------  FEEDER1  ----------------> 
          Feeder_1: "",
          Serial_1: "",
          Contact_PhaseA_1: "",
          Contact_PhaseB_1: "",
          Contact_PhaseC_1: "",
          Vaccuum_PhaseA_1: "",
          Vaccuum_PhaseB_1: "",
          Vaccuum_PhaseC_1: "",
          Insulation_PhaseAG_1: "",
          Insulation_PhaseBG_1: "",
          Insulation_PhaseCG_1: "",
          Insulation_PhaseAB_1: "",
          Insulation_PhaseBC_1: "",
          Insulation_PhaseCA_1: "",
          Counter_1: "",
          Remark_1: "",
          MFR_1: "",
          Type_1: "",
          kV_1: "",
          kA_1: "",
          A_1: "",


          // <-------------------  FEEDER2  ----------------> 
          Feeder_2: "",
          Serial_2: "",
          Contact_PhaseA_2: "",
          Contact_PhaseB_2: "",
          Contact_PhaseC_2: "",
          Vaccuum_PhaseA_2: "",
          Vaccuum_PhaseB_2: "",
          Vaccuum_PhaseC_2: "",
          Insulation_PhaseAG_2: "",
          Insulation_PhaseBG_2: "",
          Insulation_PhaseCG_2: "",
          Insulation_PhaseAB_2: "",
          Insulation_PhaseBC_2: "",
          Insulation_PhaseCA_2: "",
          Counter_2: "",
          Remark_2: "",
          MFR_2: "",
          Type_2: "",
          kV_2: "",
          kA_2: "",
          A_2: "",

          // <-------------------  IN1  ----------------> 
          Feeder_3: "",
          Serial_3: "",
          Contact_PhaseA_3: "",
          Contact_PhaseB_3: "",
          Contact_PhaseC_3: "",
          Vaccuum_PhaseA_3: "",
          Vaccuum_PhaseB_3: "",
          Vaccuum_PhaseC_3: "",
          Insulation_PhaseAG_3: "",
          Insulation_PhaseBG_3: "",
          Insulation_PhaseCG_3: "",
          Insulation_PhaseAB_3: "",
          Insulation_PhaseBC_3: "",
          Insulation_PhaseCA_3: "",
          Counter_3: "",
          Remark_3: "",
          MFR_3: "",
          Type_3: "",
          kV_3: "",
          kA_3: "",
          A_3: "",

          // <-------------------  FEEDER3  ----------------> 
          Feeder_4: "",
          Serial_4: "",
          Contact_PhaseA_4: "",
          Contact_PhaseB_4: "",
          Contact_PhaseC_4: "",
          Vaccuum_PhaseA_4: "",
          Vaccuum_PhaseB_4: "",
          Vaccuum_PhaseC_4: "",
          Insulation_PhaseAG_4: "",
          Insulation_PhaseBG_4: "",
          Insulation_PhaseCG_4: "",
          Insulation_PhaseAB_4: "",
          Insulation_PhaseBC_4: "",
          Insulation_PhaseCA_4: "",
          Counter_4: "",
          Remark_4: "",
          MFR_4: "",
          Type_4: "",
          kV_4: "",
          kA_4: "",
          A_4: "",

          // <-------------------  FEEDER4  ----------------> 
          Feeder_5: "",
          Serial_5: "",
          Contact_PhaseA_5: "",
          Contact_PhaseB_5: "",
          Contact_PhaseC_5: "",
          Vaccuum_PhaseA_5: "",
          Vaccuum_PhaseB_5: "",
          Vaccuum_PhaseC_5: "",
          Insulation_PhaseAG_5: "",
          Insulation_PhaseBG_5: "",
          Insulation_PhaseCG_5: "",
          Insulation_PhaseAB_5: "",
          Insulation_PhaseBC_5: "",
          Insulation_PhaseCA_5: "",
          Counter_5: "",
          Remark_5: "",
          MFR_5: "",
          Type_5: "",
          kV_5: "",
          kA_5: "",
          A_5: "",

          // <-------------------  FEEDER5  ----------------> 
          Feeder_6: "",
          Serial_6: "",
          Contact_PhaseA_6: "",
          Contact_PhaseB_6: "",
          Contact_PhaseC_6: "",
          Vaccuum_PhaseA_6: "",
          Vaccuum_PhaseB_6: "",
          Vaccuum_PhaseC_6: "",
          Insulation_PhaseAG_6: "",
          Insulation_PhaseBG_6: "",
          Insulation_PhaseCG_6: "",
          Insulation_PhaseAB_6: "",
          Insulation_PhaseBC_6: "",
          Insulation_PhaseCA_6: "",
          Counter_6: "",
          Remark_6: "",
          MFR_6: "",
          Type_6: "",
          kV_6: "",
          kA_6: "",
          A_6: "",

          // <-------------------  Loadbreak1  ----------------> 
          Feeder_7: "",
          Serial_7: "",
          Contact_PhaseA_7: "",
          Contact_PhaseB_7: "",
          Contact_PhaseC_7: "",
          Vaccuum_PhaseA_7: "",
          Vaccuum_PhaseB_7: "",
          Vaccuum_PhaseC_7: "",
          Insulation_PhaseAG_7: "",
          Insulation_PhaseBG_7: "",
          Insulation_PhaseCG_7: "",
          Insulation_PhaseAB_7: "",
          Insulation_PhaseBC_7: "",
          Insulation_PhaseCA_7: "",
          Counter_7: "",
          Remark_7: "",
          MFR_7: "",
          Type_7: "",
          kV_7: "",
          kA_7: "",
          A_7: "",

          // <-------------------  BUSTIE  ----------------> 
          Feeder_8: "",
          Serial_8: "",
          Contact_PhaseA_8: "",
          Contact_PhaseB_8: "",
          Contact_PhaseC_8: "",
          Vaccuum_PhaseA_8: "",
          Vaccuum_PhaseB_8: "",
          Vaccuum_PhaseC_8: "",
          Insulation_PhaseAG_8: "",
          Insulation_PhaseBG_8: "",
          Insulation_PhaseCG_8: "",
          Insulation_PhaseAB_8: "",
          Insulation_PhaseBC_8: "",
          Insulation_PhaseCA_8: "",
          Counter_8: "",
          Remark_8: "",
          MFR_8: "",
          Type_8: "",
          kV_8: "",
          kA_8: "",
          A_8: "",

          // <-------------------  Loadbreak2  ----------------> 
          Feeder_9: "",
          Serial_9: "",
          Contact_PhaseA_9: "",
          Contact_PhaseB_9: "",
          Contact_PhaseC_9: "",
          Vaccuum_PhaseA_9: "",
          Vaccuum_PhaseB_9: "",
          Vaccuum_PhaseC_9: "",
          Insulation_PhaseAG_9: "",
          Insulation_PhaseBG_9: "",
          Insulation_PhaseCG_9: "",
          Insulation_PhaseAB_9: "",
          Insulation_PhaseBC_9: "",
          Insulation_PhaseCA_9: "",
          Counter_9: "",
          Remark_9: "",
          MFR_9: "",
          Type_9: "",
          kV_9: "",
          kA_9: "",
          A_9: "",

          // <-------------------  FEEDER6  ----------------> 
          Feeder_10: "",
          Serial_10: "",
          Contact_PhaseA_10: "",
          Contact_PhaseB_10: "",
          Contact_PhaseC_10: "",
          Vaccuum_PhaseA_10: "",
          Vaccuum_PhaseB_10: "",
          Vaccuum_PhaseC_10: "",
          Insulation_PhaseAG_10: "",
          Insulation_PhaseBG_10: "",
          Insulation_PhaseCG_10: "",
          Insulation_PhaseAB_10: "",
          Insulation_PhaseBC_10: "",
          Insulation_PhaseCA_10: "",
          Counter_10: "",
          Remark_10: "",
          MFR_10: "",
          Type_10: "",
          kV_10: "",
          kA_10: "",
          A_10: "",


          // <-------------------  FEEDER7  ----------------> 
          Feeder_11: "",
          Serial_11: "",
          Contact_PhaseA_11: "",
          Contact_PhaseB_11: "",
          Contact_PhaseC_11: "",
          Vaccuum_PhaseA_11: "",
          Vaccuum_PhaseB_11: "",
          Vaccuum_PhaseC_11: "",
          Insulation_PhaseAG_11: "",
          Insulation_PhaseBG_11: "",
          Insulation_PhaseCG_11: "",
          Insulation_PhaseAB_11: "",
          Insulation_PhaseBC_11: "",
          Insulation_PhaseCA_11: "",
          Counter_11: "",
          Remark_11: "",
          MFR_11: "",
          Type_11: "",
          kV_11: "",
          kA_11: "",
          A_11: "",


          // <-------------------  IN2  ----------------> 
          Feeder_12: "",
          Serial_12: "",
          Contact_PhaseA_12: "",
          Contact_PhaseB_12: "",
          Contact_PhaseC_12: "",
          Vaccuum_PhaseA_12: "",
          Vaccuum_PhaseB_12: "",
          Vaccuum_PhaseC_12: "",
          Insulation_PhaseAG_12: "",
          Insulation_PhaseBG_12: "",
          Insulation_PhaseCG_12: "",
          Insulation_PhaseAB_12: "",
          Insulation_PhaseBC_12: "",
          Insulation_PhaseCA_12: "",
          Counter_12: "",
          Remark_12: "",
          MFR_12: "",
          Type_12: "",
          kV_12: "",
          kA_12: "",
          A_12: "",

          // <-------------------  FEEDER8  ----------------> 
          Feeder_13: "",
          Serial_13: "",
          Contact_PhaseA_13: "",
          Contact_PhaseB_13: "",
          Contact_PhaseC_13: "",
          Vaccuum_PhaseA_13: "",
          Vaccuum_PhaseB_13: "",
          Vaccuum_PhaseC_13: "",
          Insulation_PhaseAG_13: "",
          Insulation_PhaseBG_13: "",
          Insulation_PhaseCG_13: "",
          Insulation_PhaseAB_13: "",
          Insulation_PhaseBC_13: "",
          Insulation_PhaseCA_13: "",
          Counter_13: "",
          Remark_13: "",
          MFR_13: "",
          Type_13: "",
          kV_13: "",
          kA_13: "",
          A_13: "",


          // <-------------------  FEEDER9  ----------------> 
          Feeder_14: "",
          Serial_14: "",
          Contact_PhaseA_14: "",
          Contact_PhaseB_14: "",
          Contact_PhaseC_14: "",
          Vaccuum_PhaseA_14: "",
          Vaccuum_PhaseB_14: "",
          Vaccuum_PhaseC_14: "",
          Insulation_PhaseAG_14: "",
          Insulation_PhaseBG_14: "",
          Insulation_PhaseCG_14: "",
          Insulation_PhaseAB_14: "",
          Insulation_PhaseBC_14: "",
          Insulation_PhaseCA_14: "",
          Counter_14: "",
          Remark_14: "",
          MFR_14: "",
          Type_14: "",
          kV_14: "",
          kA_14: "",
          A_14: "",

          // <-------------------  FEEDER10  ----------------> 
          Feeder_15: "",
          Serial_15: "",
          Contact_PhaseA_15: "",
          Contact_PhaseB_15: "",
          Contact_PhaseC_15: "",
          Vaccuum_PhaseA_15: "",
          Vaccuum_PhaseB_15: "",
          Vaccuum_PhaseC_15: "",
          Insulation_PhaseAG_15: "",
          Insulation_PhaseBG_15: "",
          Insulation_PhaseCG_15: "",
          Insulation_PhaseAB_15: "",
          Insulation_PhaseBC_15: "",
          Insulation_PhaseCA_15: "",
          Counter_15: "",
          Remark_15: "",
          MFR_15: "",
          Type_15: "",
          kV_15: "",
          kA_15: "",
          A_15: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_16: "",
          Serial_16: "",
          Contact_PhaseA_16: "",
          Contact_PhaseB_16: "",
          Contact_PhaseC_16: "",
          Vaccuum_PhaseA_16: "",
          Vaccuum_PhaseB_16: "",
          Vaccuum_PhaseC_16: "",
          Insulation_PhaseAG_16: "",
          Insulation_PhaseBG_16: "",
          Insulation_PhaseCG_16: "",
          Insulation_PhaseAB_16: "",
          Insulation_PhaseBC_16: "",
          Insulation_PhaseCA_16: "",
          Counter_16: "",
          Remark_16: "",
          MFR_16: "",
          Type_16: "",
          kV_16: "",
          kA_16: "",
          A_16: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_17: "",
          Serial_17: "",
          Contact_PhaseA_17: "",
          Contact_PhaseB_17: "",
          Contact_PhaseC_17: "",
          Vaccuum_PhaseA_17: "",
          Vaccuum_PhaseB_17: "",
          Vaccuum_PhaseC_17: "",
          Insulation_PhaseAG_17: "",
          Insulation_PhaseBG_17: "",
          Insulation_PhaseCG_17: "",
          Insulation_PhaseAB_17: "",
          Insulation_PhaseBC_17: "",
          Insulation_PhaseCA_17: "",
          Counter_17: "",
          MFR_17: "",
          Type_17: "",
          kV_17: "",
          kA_17: "",
          A_17: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_18: "",
          Serial_18: "",
          Contact_PhaseA_18: "",
          Contact_PhaseB_18: "",
          Contact_PhaseC_18: "",
          Vaccuum_PhaseA_18: "",
          Vaccuum_PhaseB_18: "",
          Vaccuum_PhaseC_18: "",
          Insulation_PhaseAG_18: "",
          Insulation_PhaseBG_18: "",
          Insulation_PhaseCG_18: "",
          Insulation_PhaseAB_18: "",
          Insulation_PhaseBC_18: "",
          Insulation_PhaseCA_18: "",
          Counter_18: "",
          MFR_18: "",
          Type_18: "",
          kV_18: "",
          kA_18: "",
          A_18: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_19: "",
          Serial_19: "",
          Contact_PhaseA_19: "",
          Contact_PhaseB_19: "",
          Contact_PhaseC_19: "",
          Vaccuum_PhaseA_19: "",
          Vaccuum_PhaseB_19: "",
          Vaccuum_PhaseC_19: "",
          Insulation_PhaseAG_19: "",
          Insulation_PhaseBG_19: "",
          Insulation_PhaseCG_19: "",
          Insulation_PhaseAB_19: "",
          Insulation_PhaseBC_19: "",
          Insulation_PhaseCA_19: "",
          Counter_19: "",
          MFR_19: "",
          Type_19: "",
          kV_19: "",
          kA_19: "",
          A_19: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_20: "",
          Serial_20: "",
          Contact_PhaseA_20: "",
          Contact_PhaseB_20: "",
          Contact_PhaseC_20: "",
          Vaccuum_PhaseA_20: "",
          Vaccuum_PhaseB_20: "",
          Vaccuum_PhaseC_20: "",
          Insulation_PhaseAG_20: "",
          Insulation_PhaseBG_20: "",
          Insulation_PhaseCG_20: "",
          Insulation_PhaseAB_20: "",
          Insulation_PhaseBC_20: "",
          Insulation_PhaseCA_20: "",
          Counter_20: "",
          MFR_20: "",
          Type_20: "",
          kV_20: "",
          kA_20: "",
          A_20: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_21: "",
          Serial_21: "",
          Contact_PhaseA_21: "",
          Contact_PhaseB_21: "",
          Contact_PhaseC_21: "",
          Vaccuum_PhaseA_21: "",
          Vaccuum_PhaseB_21: "",
          Vaccuum_PhaseC_21: "",
          Insulation_PhaseAG_21: "",
          Insulation_PhaseBG_21: "",
          Insulation_PhaseCG_21: "",
          Insulation_PhaseAB_21: "",
          Insulation_PhaseBC_21: "",
          Insulation_PhaseCA_21: "",
          Counter_21: "",
          MFR_21: "",
          Type_21: "",
          kV_21: "",
          kA_21: "",
          A_21: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_22: "",
          Serial_22: "",
          Contact_PhaseA_22: "",
          Contact_PhaseB_22: "",
          Contact_PhaseC_22: "",
          Vaccuum_PhaseA_22: "",
          Vaccuum_PhaseB_22: "",
          Vaccuum_PhaseC_22: "",
          Insulation_PhaseAG_22: "",
          Insulation_PhaseBG_22: "",
          Insulation_PhaseCG_22: "",
          Insulation_PhaseAB_22: "",
          Insulation_PhaseBC_22: "",
          Insulation_PhaseCA_22: "",
          Counter_22: "",
          MFR_22: "",
          Type_22: "",
          kV_22: "",
          kA_22: "",
          A_22: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_23: "",
          Serial_23: "",
          Contact_PhaseA_23: "",
          Contact_PhaseB_23: "",
          Contact_PhaseC_23: "",
          Vaccuum_PhaseA_23: "",
          Vaccuum_PhaseB_23: "",
          Vaccuum_PhaseC_23: "",
          Insulation_PhaseAG_23: "",
          Insulation_PhaseBG_23: "",
          Insulation_PhaseCG_23: "",
          Insulation_PhaseAB_23: "",
          Insulation_PhaseBC_23: "",
          Insulation_PhaseCA_23: "",
          Counter_23: "",
          MFR_23: "",
          Type_23: "",
          kV_23: "",
          kA_23: "",
          A_23: "",

          // <-------------------  CAPBANK  ----------------> 
          Feeder_24: "",
          Serial_24: "",
          Contact_PhaseA_24: "",
          Contact_PhaseB_24: "",
          Contact_PhaseC_24: "",
          Vaccuum_PhaseA_24: "",
          Vaccuum_PhaseB_24: "",
          Vaccuum_PhaseC_24: "",
          Insulation_PhaseAG_24: "",
          Insulation_PhaseBG_24: "",
          Insulation_PhaseCG_24: "",
          Insulation_PhaseAB_24: "",
          Insulation_PhaseBC_24: "",
          Insulation_PhaseCA_24: "",
          Counter_24: "",
          MFR_24: "",
          Type_24: "",
          kV_24: "",
          kA_24: "",
          A_24: "",
        }
    }
  }
  const [state, dispatch] = useReducer(reducer, initials)
  // <-------------------  End For set state with use reducer ---------------->
  // <------------------------  Start For set Variable ----------------------->

  const Feeder_Name = ["01CVB-01", "01VB-01", "02VB-01", "1BVB-01", "03VB-01", "04VB-01", "05VB-01", "01TVB-01", "BVB-01", "02TVB-01", "06VB-01", "07VB-01", "2BVB-01", "08VB-01", "09VB-01", "10VB-01", "02CVB-01", "BVB-02", "11VB-01", "12VB-01", "3BVB-01", "13VB-01", "14VB-01", "15VB-01", "03CVB-01"]



  // <--------------------------  End For set Variable ------------------------->
  const Fetch = (Name_Thai: any, Name_Eng: any, Feeder: any, Date: any) => {

    axios.get("https://script.google.com/macros/s/AKfycbwzuXmMZunKmAl_fFgDU7tmKFdsGXMk7ETrlkVskF1k64WX1nQ1_8vNSO4pG-9PveKdEQ/exec")
      .then(async (res: any) => {
        await Set_serial(res.data.content2, Feeder, Name_Thai, Name_Eng)
        await Set_To_State(res.data.content, Name_Thai, Feeder, Date)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }
  const Set_serial = async (Serial: any, Feeder: any, Name_Thai: any, Name_Eng: any) => {
    await dispatch({ type: "resetstate", payload: { value: Name_Thai, value1: Name_Eng } });
    await Serial.map((Data_Serial: any, Index_Row_Serial: number) => {
      Feeder.map((Data_Feeder: String, Index_Feeder: number) => {
        if (Data_Serial[2] == Data_Feeder) {
          dispatch({ type: "setstate", payload: { name: `Serial_${Index_Feeder}`, value: Data_Serial[3] } })
          dispatch({ type: "setstate", payload: { name: `MFR_${Index_Feeder}`, value: Data_Serial[4] } })
          dispatch({ type: "setstate", payload: { name: `Type_${Index_Feeder}`, value: Data_Serial[5] } })
          dispatch({ type: "setstate", payload: { name: `kV_${Index_Feeder}`, value: Data_Serial[6] } })
          dispatch({ type: "setstate", payload: { name: `kA_${Index_Feeder}`, value: Data_Serial[7] } })
          dispatch({ type: "setstate", payload: { name: `A_${Index_Feeder}`, value: Data_Serial[8] } })
        }
      })
    })
  }

  const Set_To_State = (Data_Fetch: any, Name_Thai: any, Feeder: any, Date1: any) => {
    Data_Fetch.map((Data_Row: any, Index_Row: number) => {
      Feeder.map((Feeder1: String, Index_Feeder: number) => {
        if (Feeder1 === Data_Row[4] && Data_Row[3] == Name_Thai) {
          const year = new Date(Data_Row[2]).getFullYear()
          const Year = new Date(Date1).getFullYear()
          if (year === Year) {
            if (Data_Row[5] !== "") {
              dispatch({ type: "setstate", payload: { name: `Vaccuum_PhaseA_${Index_Feeder}`, value: Data_Row[5] } })
            }
            if (Data_Row[6] !== "") {
              dispatch({ type: "setstate", payload: { name: `Vaccuum_PhaseB_${Index_Feeder}`, value: Data_Row[6] } })
            }
            if (Data_Row[7] !== "") {
              dispatch({ type: "setstate", payload: { name: `Vaccuum_PhaseC_${Index_Feeder}`, value: Data_Row[7] } })
            }
            if (Data_Row[8] !== "") {
              dispatch({ type: "setstate", payload: { name: `Contact_PhaseA_${Index_Feeder}`, value: Data_Row[8] } })
            }
            if (Data_Row[9] !== "") {
              dispatch({ type: "setstate", payload: { name: `Contact_PhaseB_${Index_Feeder}`, value: Data_Row[9] } })
            }

            if (Data_Row[10] !== "") {
              dispatch({ type: "setstate", payload: { name: `Contact_PhaseC_${Index_Feeder}`, value: Data_Row[10] } })
            }
            if (Data_Row[11] !== "") {
              dispatch({ type: "setstate", payload: { name: `Insulation_PhaseAG_${Index_Feeder}`, value: Data_Row[11] } })
            }
            if (Data_Row[12] !== "") {
              dispatch({ type: "setstate", payload: { name: `Insulation_PhaseBG_${Index_Feeder}`, value: Data_Row[12] } })
            }
            if (Data_Row[13] !== "") {
              dispatch({ type: "setstate", payload: { name: `Insulation_PhaseCG_${Index_Feeder}`, value: Data_Row[13] } })
            }
            if (Data_Row[14] !== "") {
              dispatch({ type: "setstate", payload: { name: `Insulation_PhaseAB_${Index_Feeder}`, value: Data_Row[14] } })
            }
            if (Data_Row[15] !== "") {
              dispatch({ type: "setstate", payload: { name: `Insulation_PhaseBC_${Index_Feeder}`, value: Data_Row[15] } })
            }
            if (Data_Row[16] !== "") {
              dispatch({ type: "setstate", payload: { name: `Insulation_PhaseCA_${Index_Feeder}`, value: Data_Row[16] } })
            }
            if (Data_Row[17] !== "") {
              dispatch({ type: "setstate", payload: { name: `Counter_${Index_Feeder}`, value: Data_Row[17] } })
            }
            if (Data_Row[18] !== "") {
              dispatch({ type: "setstate", payload: { name: `Remark_${Index_Feeder}`, value: Data_Row[18] } })
            }
          }

        }
      })
    })
  }

  useEffect(() => {
    Fetch("โพธาราม1", "PTR", ["PTR01CVB-01", "PTR01VB-01", "PTR02VB-01", "PTR1BVB-01", "PTR03VB-01", "PTR04VB-01", "PTR05VB-01", "PTR01TVB-01", "PTRBVB-01", "PTR02TVB-01", "PTR06VB-01", "PTR07VB-01", "PTR2BVB-01", "PTR08VB-01", "PTR09VB-01", "PTR10VB-01", "PTR02CVB-01", "PTRBVB-02", "PTR11VB-01", "PTR12VB-01", "PTR3BVB-01", "PTR13VB-01", "PTR14VB-01", "PTR15VB-01", "PTR03CVB-01"], new Date().toJSON().slice(0, 10),)
  }, [])





  // <-------------------  สำหรับการส่งข้อมูล  ---------------->
  const Save_Data = (e: React.FormEvent) => {
    let formData = new FormData()
    formData.append('Sender', state.Sender)
    formData.append('Year', state.Year)
    formData.append('Substation', state.Substation_Thai)
    formData.append('Feeder', state.Select_Feeder)
    formData.append('Vaccuum_PhaseA', state.Vaccuum_PhaseA)
    formData.append('Vaccuum_PhaseB', state.Vaccuum_PhaseB)
    formData.append('Vaccuum_PhaseC', state.Vaccuum_PhaseC)
    formData.append('Contact_PhaseA', state.Contact_PhaseA)
    formData.append('Contact_PhaseB', state.Contact_PhaseB)
    formData.append('Contact_PhaseC', state.Contact_PhaseC)
    formData.append('Insulation_PhaseAG', state.Insulation_PhaseAG)
    formData.append('Insulation_PhaseBG', state.Insulation_PhaseBG)
    formData.append('Insulation_PhaseCG', state.Insulation_PhaseCG)
    formData.append('Insulation_PhaseAB', state.Insulation_PhaseAB)
    formData.append('Insulation_PhaseBC', state.Insulation_PhaseBC)
    formData.append('Insulation_PhaseCA', state.Insulation_PhaseCA)
    formData.append('Counter', state.Counter)
    formData.append('Remark', state.Remark)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwzuXmMZunKmAl_fFgDU7tmKFdsGXMk7ETrlkVskF1k64WX1nQ1_8vNSO4pG-9PveKdEQ/exec'
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        Fetch(state.Substation_Thai, state.Substation_Eng, state.Feeder, state.Year)
        Swal.fire(
          "เเจ้งเตือน",
          "บันทึกข้อมูลสำเร็จ",
          "success"
        )
      })
      .catch(error => console.error('Error!', error.message))
  }
  useEffect(() => {
    const Feeder_select = state.Feeder.filter((Feeder: any, Index_Feeder: number) => {
      if (eval(`state.Serial_${Index_Feeder}`) != "") {
        return (Feeder)
      } else {
      }
    })
    dispatch({ type: "setstate", payload: { name: "Select_Feeder", value: Feeder_select[0] } })
    //console.log(Feeder_select)
  }, [state.Serial_0, state.Serial_1, state.Serial_2, state.Serial_3, state.Serial_4, state.Serial_5, state.Serial_6, state.Serial_7, state.Serial_8, state.Serial_9, state.Serial_10, state.Serial_11, state.Serial_12, state.Serial_13, state.Serial_14, state.Serial_15, state.Serial_16, state.Serial_17, state.Serial_18, state.Serial_19, state.Serial_20, state.Serial_21, state.Serial_22, state.Serial_23, state.Substation_Thai])
  const FunctionTest = (e: React.FormEvent<HTMLSelectElement>) => {
    const Option_Array = e.currentTarget.value.split(",")
    dispatch({ type: "setstate", payload: { name: "Select_Feeder_Array", value: e.currentTarget.value } })
    dispatch({ type: "setstate", payload: { name: "Substation_Thai", value: Option_Array[0] } })
    dispatch({ type: "setstate", payload: { name: "Substation_Eng", value: Option_Array[1] } })
    dispatch({ type: "resetstate", payload: { value: Option_Array[0], value1: Option_Array[1] } })
    const Feeder_select = Feeder_Name.map((data, index) => {
      return `${Option_Array[1]}${data}`
    })
    // const Feeder_select = state.Feeder.map((Feeder: any, Index_Feeder: number) => {
    //   if (eval(`state.Serial_${Index_Feeder}`) != "") {
    //     return (Feeder)          
    //   }
    // })

    dispatch({ type: "setstate", payload: { name: "Feeder", value: Feeder_select } })
    // dispatch({ type: "setstate", payload: { name: "Select_Feeder", value: Feeder_select[0] } })
    Fetch(Option_Array[0], Option_Array[1], Feeder_select, state.Year)
  }

  const Select_Feeder = (e: React.FormEvent<HTMLSelectElement>) => {
    dispatch({ type: "setstate", payload: { name: "Select_Feeder", value: e.currentTarget.value } })
  }


  // const { generate } = ExcelExport();

  // const handleDataExport = () => {
  //   generate(
  //     [
  //       [new Date("2019-07-20"), 16.5],
  //       [new Date("2019-07-21"), 70.6],
  //       [new Date("2019-07-22"), 70.1]
  //     ],
  //     { name: "Prueba" },
  //     { ref: "B2" }
  //   );
  // };


  return (
    <div className="App">
      <div className="container">
        <div className="form-group">
          <h2 className="text-center">Test Form</h2>
        </div>
        <form method="post" className="d-flex justify-content-center flex-column align-items-center" onSubmit={Save_Data} name="hello-sheet">
          <div className="d-flex justify-content-center input-group row align-items-center">
            <div className="mx-2 col-lg-2 col-md-5 col-sm-5 my-1">
              <div className="d-flex justify-content-center input-group">
                <span className="input-group-text" id="basic-addon1">ผู้ทดสอบ</span>
                <select name="Sender" className="form-control text-center" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Sender", value: e.target.value } }) }} value={state.Sender}>
                  <option value="ไม่ระบุ">ไม่ระบุ</option>
                  <option value="ทศม">ทศม</option>
                  <option value="สรายุธ">สรายุธ</option>
                  <option value="นำพล">นำพล</option>
                  <option value="อภินัทธ์">อภินัทธ์</option>
                  <option value="ภูนรินทร์">ภูนรินทร์</option>
                  <option value="นพพร">นพพร</option>
                  <option value="ธนภูมิ">ธนภูมิ</option>
                </select>
                {/* <input type="text" name="Sender" required className="form-control" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Sender", value: e.target.value } }) }} value={state.Sender} /> */}
              </div>
            </div>
            <div className="mx-2 col-lg-2 col-md-5 col-sm-5 my-1">
              <div className="d-flex justify-content-center input-group">
                <span className="input-group-text" id="basic-addon1">ปีทดสอบ</span>
                <input type="text" id="datePicker" className="form-control" onChange={(e) => {
                  dispatch({ type: "setstate", payload: { name: "Year", value: e.target.value } });
                  dispatch({ type: "resetstate", payload: { value: state.Substation_Thai, value1: state.Substation_Eng } });
                  Fetch(state.Substation_Thai, state.Substation_Eng, state.Feeder, e.target.value);
                  dispatch({ type: "setstate", payload: { name: "Select_Feeder_Array", value: state.Select_Feeder_Array } })
                  dispatch({ type: "setstate", payload: { name: "Feeder", value: state.Feeder } })
                  dispatch({ type: "setstate", payload: { name: "Select_Feeder", value: state.Select_Feeder } })
                }} value={state.Year} />
              </div>
            </div>
            <div className="mx-2 col-lg-2 col-md-5 col-sm-5 my-1">
              <div className="d-flex justify-content-center input-group">
                <span className="input-group-text" id="basic-addon1">สถานี&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <select name="Substation" className="form-control" onChange={FunctionTest} value={state.Select_Feeder_Array}>
                  <option value={["โพธาราม1", "PTR"]} >โพธาราม1</option>
                  <option value={["โพธาราม2", "PTS"]} >โพธาราม2</option>
                  <option value={["ดำเนินสะดวก", "DNA"]}>ดำเนินสะดวก</option>
                  <option value={["สมุทรสงคราม (แม่กลอง)", "SSA"]}>สมุทรสงคราม</option>
                  <option value={["จอมบึง", "CBN"]}>จอมบึง</option>
                  {/* <option value={["ราชบุรี2  (ลานไก)","PTS"]}>ราชบุรี2 (ลานไก)</option> */}
                  <option value={["ราชบุรี1", "RBA"]}>ราชบุรี1</option>
                  <option value={["ราชบุรี2", "RBB"]}>ราชบุรี2</option>
                  <option value={["ราชบุรี3", "RBC"]}>ราชบุรี3</option>
                  <option value={["ราชบุรีนิคม", "PTS"]}>ราชบุรีนิคม</option>
                  <option value={["ปากท่อ", "PTH"]}>ปากท่อ</option>
                  <option value={["เขาย้อย1", "KHY"]}>เขาย้อย1</option>
                  <option value={["เขาย้อย2", "KHZ"]}>เขาย้อย2</option>
                  <option value={["เพชรบุรี1", "PBA"]}>เพชรบุรี1</option>
                  <option value={["เพชรบุรี2", "PBB"]}>เพชรบุรี2</option>
                  <option value={["ท่ายาง", "X"]}>ท่ายาง</option>
                  <option value={["ชะอำชั่วคราว", "CAU"]}>ชะอำชั่วคราว</option>
                  <option value={["ชะอำ1", "CAA"]}>ชะอำ1</option>
                  <option value={["ชะอำ2", "CAB"]}>ชะอำ2</option>
                  <option value={["ชะอำ3", "CAC"]}>ชะอำ3</option>
                  <option value={["หัวหิน2", "HUB"]}>หัวหิน2</option>
                  <option value={["หัวหิน3", "HUC"]}>หัวหิน3</option>
                  <option value={["หิวหิน4", "HUU"]}>หัวหิน4</option>
                  <option value={["ปรานบุรี", "PNA"]}>ปรานบุรี</option>
                  <option value={["กุยบุรี", "KUA"]}>กุยบุรี</option>
                  <option value={["ประจวบคีรีขันธ์", "PDA"]}>ประจวบคีรีขันธ์</option>
                  <option value={["บางสะพาน1", "BSP"]}>บางสะพาน1</option>
                  <option value={["บางสะพาน2", "BSR"]}>บางสะพาน2</option>
                  <option value={["ท่าแซะ", "TSE"]}>ท่าแซะ</option>
                  <option value={["ปะทิว", "QTA"]}>ปะทิว</option>
                  <option value={["ชุมพร1", "CPA"]}>ชุมพร1</option>
                  <option value={["ชุมพร2", "CPB"]}>ชุมพร2</option>
                  <option value={["หลังสวน", "LSA"]}>หลังสวน</option>
                  <option value={["ระนอง1", "RNA"]}>ระนอง1</option>
                  <option value={["ระนอง2", "RNB"]}>ระนอง2</option>
                  <option value={["สวนผึ้ง", "XPA"]}>สวนผึ้ง</option>
                </select>
              </div>
            </div>
            <div className="mx-2 col-lg-2 col-md-5 my-1">
              <div className="d-flex justify-content-center input-group">
                <span className="input-group-text" id="">Feeder&nbsp;&nbsp;</span>
                <select name="Feeder" id="Feeder1" className="form-control" onChange={Select_Feeder} value={state.Select_Feeder}>
                  {/* {state.Feeder.map((data: any, index: number) => {
                    return <option value={data}>{data}</option>
                  })} */}
                  {state.Feeder.map((Feeder: any, Index_Feeder: number) => {
                    if (eval(`state.Serial_${Index_Feeder}`) != "") {
                      return (
                        <option key={uuidv4()} value={Feeder}>{Feeder}</option>

                      )
                    }
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-center flex-column'>

            <div className="d-flex justify-content-center mt-3">
              <div className="mx-2">

                <div>
                  <div className="btn btn-danger" id="vaccuum">
                    <h3>VACCUUM</h3>
                  </div>

                  <div className="input-group my-1">
                    <span className="input-group-text" id="A_Vaccuum">A</span>
                    <input type="text" className="form-control" placeholder="PhaseA" name="PhaseA" id="PhaseA" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Vaccuum_PhaseA", value: e.target.value } }) }} value={state.Vaccuum_PhaseA} />
                  </div>
                  <div className="input-group my-1">
                    <span className="input-group-text" id="B_Vaccuum">B</span>
                    <input type="text" className="form-control" placeholder="PhaseB" name="PhaseB" id="PhaseB" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Vaccuum_PhaseB", value: e.target.value } }) }} value={state.Vaccuum_PhaseB} />
                  </div>
                  <div className="input-group my-1">
                    <span className="input-group-text" id="C_Vaccuum">C</span>
                    <input type="text" className="form-control" placeholder="PhaseC" name="PhaseC" id="PhaseC" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Vaccuum_PhaseC", value: e.target.value } }) }} value={state.Vaccuum_PhaseC} />
                  </div>
                </div>


                <div>
                  <div className="btn btn-danger" id="contact">
                    <h3>Contact</h3>
                  </div>

                  <div className="input-group my-1">
                    <span className="input-group-text" id="A_Contact">A</span>
                    <input type="text" className="form-control" placeholder="PhaseA" name="PhaseA_contact"
                      id="PhaseA_contact" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Contact_PhaseA", value: e.target.value } }) }} value={state.Contact_PhaseA} />
                  </div>
                  <div className="input-group my-1">
                    <span className="input-group-text" id="B_Contact">B</span>
                    <input type="text" className="form-control" placeholder="PhaseB" name="PhaseB_contact"
                      id="PhaseB_contact" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Contact_PhaseB", value: e.target.value } }) }} value={state.Contact_PhaseB} />
                  </div>
                  <div className="input-group my-1">
                    <span className="input-group-text" id="C_Contact">C</span>
                    <input type="text" className="form-control" placeholder="PhaseC" name="PhaseC_contact"
                      id="PhaseC_contact" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Contact_PhaseC", value: e.target.value } }) }} value={state.Contact_PhaseC} />
                  </div>
                </div>


              </div>

              <div className="mx-2">
                <div className="btn btn-danger" id="insulation">
                  <h3>Insulation</h3>
                </div>
                <div className="input-group my-2">
                  <span className="input-group-text" id="AG">A-G</span>
                  <input type="text" className="form-control" placeholder="PhaseAG" name="PhaseAG" id="PhaseAG" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Insulation_PhaseAG", value: e.target.value } }) }} value={state.Insulation_PhaseAG} />
                </div>
                <div className="input-group my-2">
                  <span className="input-group-text" id="BG">B-G</span>
                  <input type="text" className="form-control" placeholder="PhaseBG" name="PhaseBG" id="PhaseBG" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Insulation_PhaseBG", value: e.target.value } }) }} value={state.Insulation_PhaseBG} />
                </div>
                <div className="input-group my-2">
                  <span className="input-group-text" id="CG">C-G</span>
                  <input type="text" className="form-control" placeholder="PhaseCG" name="PhaseCG" id="PhaseCG" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Insulation_PhaseCG", value: e.target.value } }) }} value={state.Insulation_PhaseCG} />
                </div>
                <div className="input-group my-2">
                  <span className="input-group-text" id="AB">A-B</span>
                  <input type="text" className="form-control" placeholder="PhaseAB" name="PhaseAB" id="PhaseAB" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Insulation_PhaseAB", value: e.target.value } }) }} value={state.Insulation_PhaseAB} />
                </div>
                <div className="input-group my-2">
                  <span className="input-group-text" id="BC">B-C</span>
                  <input type="text" className="form-control" placeholder="PhaseBC" name="PhaseBC" id="PhaseBC" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Insulation_PhaseBC", value: e.target.value } }) }} value={state.Insulation_PhaseBC} />
                </div>
                <div className="input-group my-2">
                  <span className="input-group-text" id="CA">C-A</span>
                  <input type="text" className="form-control" placeholder="PhaseCA" name="PhaseCA" id="PhaseCA" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Insulation_PhaseCA", value: e.target.value } }) }} value={state.Insulation_PhaseCA} />
                </div>
                <div className="input-group my-2">
                  <span className="input-group-text" >CN</span>
                  <input type="text" className="form-control" name="Counter"
                    id="Counter" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Counter", value: e.target.value } }) }} value={state.Counter} placeholder='Counter' />
                </div>
              </div>
            </div>

            <div className="my-2 row ">
              <div className='col-lg-12 d-flex justify-content-center input-group'>
                <span className="input-group-text" >Remark</span>
                <input type="text" className="form-control" name="Remark"
                  id="Counter" onChange={(e) => { dispatch({ type: "setstate", payload: { name: "Remark", value: e.target.value } }) }} value={state.Remark} placeholder='Remark' />
                <button type="submit" name="submit" value="Send message" className="btn btn-success">บันทึก</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <br></br>
      <div className='container d-flex justify-content-between'>
        <h5>ผลทดสอบ Switchgear 22/33 kV สถานีไฟฟ้า {state.Substation_Thai} &#40;{new Date(state.Year).getFullYear()}&#41; </h5>
        {/* <button className='btn btn-success' onClick={() => { Export({ ...state }) }}>Export</button> */}
        {/* <button className='btn btn-success' onClick={() => { ExcelExport() }}>Export</button> */}
      </div>
      <div style={{ overflow: 'scroll' }} className='mt-3'>
        <table className="container table table table-bordered" id="table_all_of_data">
          <thead >
            <tr>
              <th rowSpan={2} style={{ textAlign: 'center', verticalAlign: 'middle', position: 'sticky', left: '0px', zIndex: '500' }}>Feeder</th>
              <th rowSpan={2} style={{ textAlign: 'center', verticalAlign: 'middle', position: 'sticky', left: '100px', zIndex: '500' }}>Serial</th>
              <th colSpan={3} style={{ textAlign: 'center' }}>Vaccuum &#40;&#60;100&#181;A&#41;</th>
              <th colSpan={3} style={{ textAlign: 'center' }}>Contact &#40;&#60;200&#181;&#937;&#41;</th>
              <th colSpan={6} style={{ textAlign: 'center' }}>Insulation&#40;&#62;1G&#937;&#41;</th>
              <th rowSpan={2} style={{ textAlign: 'center', verticalAlign: 'middle' }} >Counter</th>
              <th rowSpan={2} style={{ textAlign: 'center', verticalAlign: 'middle' }} >Remark </th>

            </tr>
            <tr>
              <th style={{ textAlign: 'center' }} >PhaseA</th>
              <th style={{ textAlign: 'center' }} >PhaseB</th>
              <th style={{ textAlign: 'center' }} >PhaseC</th>
              <th style={{ textAlign: 'center' }} >PhaseA</th>
              <th style={{ textAlign: 'center' }} >PhaseB</th>
              <th style={{ textAlign: 'center' }} >PhaseC</th>
              <th style={{ textAlign: 'center' }} >PhaseAG</th>
              <th style={{ textAlign: 'center' }} >PhaseBG</th>
              <th style={{ textAlign: 'center' }} >PhaseCG</th>
              <th style={{ textAlign: 'center' }} >PhaseAB</th>
              <th style={{ textAlign: 'center' }} >PhaseBC</th>
              <th style={{ textAlign: 'center' }} >PhaseCA</th>

            </tr>
          </thead>
          <tbody>
            {state.Feeder.map((Feeder: any, Index_Feeder: number) => {
              if (eval(`state.Serial_${Index_Feeder}`) != "") {
                return (
                  <tr key={uuidv4()}>
                    <td style={{ textAlign: 'center', position: 'sticky', left: '0px', zIndex: '500' }} key={uuidv4()} >{Feeder}</td>
                    <td style={{ textAlign: 'center', position: 'sticky', left: '100px', zIndex: '500' }} key={uuidv4()} >{eval(`state.Serial_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Vaccuum_PhaseA_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Vaccuum_PhaseB_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Vaccuum_PhaseC_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Contact_PhaseA_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Contact_PhaseB_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Contact_PhaseC_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Insulation_PhaseAG_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Insulation_PhaseBG_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Insulation_PhaseCG_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Insulation_PhaseAB_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Insulation_PhaseBC_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Insulation_PhaseCA_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Counter_${Index_Feeder}`)}</td>
                    <td style={{ textAlign: 'center' }} key={uuidv4()} >{eval(`state.Remark_${Index_Feeder}`)}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>




    </div>
  );
}

export default App;
