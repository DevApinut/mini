
// import * as XLSX from "xlsx";
import XLSX from 'sheetjs-style'
import { useEffect, useReducer, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";


export const Export = (prop: any) => {
    console.log(prop)

    var ws_data = [
        ["Feeder", "MFR", "Serial", "Type", "kV", "kA", "A", "Vaccuum (<100µA)", "", "", "Contact (<200µΩ)", "", "", "Insulation (>1GΩ)", "", "", "", "", "", "Counter", "Remark"],
        ["", "", "", "", "", "", "", "PhaseA", "PhaseB", "PhaseC", "PhaseA", "PhaseB", "PhaseC", "PhaseA-G", "PhaseB-G", "PhaseC-G", "PhaseA-B", "PhaseB-C", "PhaseC-A", "", ""],


    ]

    // // console.log(ws_data)



    const Table_data = prop.Feeder.map((data: any, index: number) => {
        if (eval(`prop.Serial_${index}`) != "") {
            return (
                [
                    data,
                    eval(`prop.MFR_${index}`),
                    eval(`prop.Serial_${index}`),
                    eval(`prop.Type_${index}`),
                    eval(`prop.kV_${index}`),
                    eval(`prop.kA_${index}`),
                    eval(`prop.A_${index}`),
                    eval(`prop.Vaccuum_PhaseA_${index}`),
                    eval(`prop.Vaccuum_PhaseB_${index}`),
                    eval(`prop.Vaccuum_PhaseC_${index}`),
                    eval(`prop.Contact_PhaseA_${index}`),
                    eval(`prop.Contact_PhaseB_${index}`),
                    eval(`prop.Contact_PhaseC_${index}`),
                    eval(`prop.Insulation_PhaseAG_${index}`),
                    eval(`prop.Insulation_PhaseBG_${index}`),
                    eval(`prop.Insulation_PhaseCG_${index}`),
                    eval(`prop.Insulation_PhaseAB_${index}`),
                    eval(`prop.Insulation_PhaseBC_${index}`),
                    eval(`prop.Insulation_PhaseCA_${index}`),
                    eval(`prop.Counter_${index}`),
                    eval(`prop.Remark_${index}`),
                ]
            )

        }
    }).filter((notUndefined: any) => notUndefined !== undefined);

    const Data_of_Table = ws_data.concat(Table_data)

    const ws0 = XLSX.utils.aoa_to_sheet(Data_of_Table);


    const merge = [
        { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } },
        { s: { r: 0, c: 1 }, e: { r: 1, c: 1 } },
        { s: { r: 0, c: 2 }, e: { r: 1, c: 2 } },
        { s: { r: 0, c: 3 }, e: { r: 1, c: 3 } },
        { s: { r: 0, c: 4 }, e: { r: 1, c: 4 } },
        { s: { r: 0, c: 5 }, e: { r: 1, c: 5 } },
        { s: { r: 0, c: 6 }, e: { r: 1, c: 6 } },
        { s: { r: 0, c: 7 }, e: { r: 0, c: 9 } },
        { s: { r: 0, c: 10 }, e: { r: 0, c: 12 } },
        { s: { r: 0, c: 13 }, e: { r: 0, c: 18 } },
        { s: { r: 0, c: 19 }, e: { r: 1, c: 19 } },
        { s: { r: 0, c: 20 }, e: { r: 1, c: 20 } },
        { s: { r: 1, c: 7 }, e: { r: 1, c: 7 } },
        { s: { r: 1, c: 8 }, e: { r: 1, c: 8 } },
        { s: { r: 1, c: 9 }, e: { r: 1, c: 9 } },
        { s: { r: 1, c: 10 }, e: { r: 1, c: 10 } },
        { s: { r: 1, c: 11 }, e: { r: 1, c: 11 } },
        { s: { r: 1, c: 12 }, e: { r: 1, c: 12 } },
        { s: { r: 1, c: 13 }, e: { r: 1, c: 13 } },
        { s: { r: 1, c: 14 }, e: { r: 1, c: 14 } },
        { s: { r: 1, c: 15 }, e: { r: 1, c: 15 } },
        { s: { r: 1, c: 16 }, e: { r: 1, c: 16 } },
        { s: { r: 1, c: 17 }, e: { r: 1, c: 17 } },
        { s: { r: 1, c: 18 }, e: { r: 1, c: 18 } },


    ];

    ws0["!merges"] = merge


    const width = 9
    var wscols = [
        { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: width }, { wch: width },
        { wch: width }, { wch: width }, { wch: width }, { wch: width },
        { wch: width }, { wch: width }, { wch: width }, { wch: width },
        { wch: width }, { wch: width }, { wch: width }, { wch: width },
        { wch: width }, { wch: width },
    ];

    ws0['!cols'] = wscols
    ws0['A1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['B1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['C1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['D1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['E1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['F1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['G1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['H1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['K1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['N1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['T1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['U1'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['H2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['I2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['J2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['K2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['L2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['M2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['N2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['O2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['P2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['Q2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['R2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }
    ws0['S2'].s = { font: { name: 'TH Sarabun New', bold: true, sz: 16, }, alignment: { vertical: "center", horizontal: "center", } }




    let i = 2
    prop.Feeder.map((data: any, index: number) => {
        if (eval(`prop.Serial_${index}`) != "") {
            i = i + 1
            ws0[`A${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`B${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`C${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`D${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`E${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`F${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`G${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`H${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`I${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`J${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`K${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`L${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`M${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`N${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`O${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`P${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`Q${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`R${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`S${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            ws0[`T${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            if (eval(`prop.Remark_${index}`) !== undefined) {
                ws0[`U${i}`].s = { font: { name: 'TH Sarabun New', bold: false, sz: 14, }, alignment: { vertical: "center", horizontal: "center", } }
            }
        }
    })



    const wb = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(wb, ws0, `${prop.Substation_Thai}_${new Date(prop.Year).getFullYear()}`);

    XLSX.writeFile(wb, "sheetjs.xlsx");





}
