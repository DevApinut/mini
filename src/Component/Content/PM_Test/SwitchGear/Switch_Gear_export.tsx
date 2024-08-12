import { Workbook } from "exceljs";
import { saveAs } from "file-saver";
import { Logo_image } from "./Image"

// polyfills required by exceljs
export const ExportExcellSwitchGear = (props: any) => {
    var workbook = new Workbook();

    var worksheet = workbook.addWorksheet(`sheet1`, {
        pageSetup: { paperSize: 9, orientation: 'landscape', fitToHeight: 2, fitToPage: true, }
    });

    worksheet.properties.defaultRowHeight = 15;
    // adjust pageSetup settings afterwards
    worksheet.pageSetup.margins = {
        left: 0, right: 0,
        top: 0.4, bottom: 0.4,
        header: 0, footer: 0
    };
    worksheet.views = [{}]


    worksheet.getCell('C1').value = "CIRCUIT BREAKER TEST REPORT"
    worksheet.getCell('A3').value = "Subtation"
    worksheet.getCell('T3').value = "Year"
    worksheet.getCell('A4').value = "Feeder"
    worksheet.getCell('B4').value = "MFR"
    worksheet.getCell('C4').value = "Type"
    worksheet.getCell('D4').value = "Serial Number"
    worksheet.getCell('E4').value = "kV"
    worksheet.getCell('F4').value = "kA"
    worksheet.getCell('G4').value = "A"
    worksheet.getCell('H4').value = "Vacuum"
    worksheet.getCell('K4').value = "Contact resistance "
    worksheet.getCell('N4').value = "Insulation"
    worksheet.getCell('T4').value = "Counter Number "
    worksheet.getCell('U4').value = "Remark "
    worksheet.getCell('H5').value = "เกณฑ์ < 300 µA"
    worksheet.getCell('K5').value = "เกณฑ์ < 200 µΩ"
    worksheet.getCell('N5').value = "เกณฑ์ > 1 GΩ"
    worksheet.getCell('H6').value = "A"
    worksheet.getCell('I6').value = "B"
    worksheet.getCell('J6').value = "C"
    worksheet.getCell('K6').value = "A"
    worksheet.getCell('L6').value = "B"
    worksheet.getCell('M6').value = "C"
    worksheet.getCell('N6').value = "A-G"
    worksheet.getCell('O6').value = "B-G"
    worksheet.getCell('P6').value = "C-G"
    worksheet.getCell('Q6').value = "A-B"
    worksheet.getCell('R6').value = "B-C"
    worksheet.getCell('S6').value = "C-A"


    worksheet.mergeCells('A1:B2')
    worksheet.mergeCells('C1:U2')
    worksheet.mergeCells('A3:B3')
    worksheet.mergeCells('C3:S3')
    worksheet.mergeCells('A4:A6')
    worksheet.mergeCells('B4:B6')
    worksheet.mergeCells('C4:C6')
    worksheet.mergeCells('D4:D6')
    worksheet.mergeCells('E4:E6')
    worksheet.mergeCells('F4:F6')
    worksheet.mergeCells('G4:G6')
    worksheet.mergeCells('H4:J4')
    worksheet.mergeCells('K4:M4')
    worksheet.mergeCells('N4:S4')
    worksheet.mergeCells('T4:T6')
    worksheet.mergeCells('U4:U6')
    worksheet.mergeCells('H5:J5')
    worksheet.mergeCells('K5:M5')
    worksheet.mergeCells('N5:S5')



    worksheet.getCell('A1').border = { left: { style: 'thin' }, }
    worksheet.getCell('C1').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('A3').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, }
    worksheet.getCell('C3').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, }
    worksheet.getCell('T3').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('U3').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('A4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('B4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('C4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('D4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('E4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('F4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('G4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('H4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('K4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('N4').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('T4').border = { left: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('U4').border = { left: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('H5').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('K5').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('N5').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('H6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('I6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('J6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('K6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('L6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('M6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('N6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('O6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('P6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('Q6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('R6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
    worksheet.getCell('S6').border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }

    worksheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('C1').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('A3').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('C3').alignment = { vertical: 'middle', horizontal: 'left' }
    worksheet.getCell('T3').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('U3').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('A4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('B4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('C4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('D4').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }
    worksheet.getCell('E4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('F4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('G4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('H4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('K4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('N4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('T4').alignment = { vertical: 'middle', horizontal: 'center', wrapText: true }
    worksheet.getCell('U4').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('H5').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('K5').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('N5').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('H6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('I6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('J6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('K6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('L6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('M6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('N6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('O6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('P6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('Q6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('R6').alignment = { vertical: 'middle', horizontal: 'center' }
    worksheet.getCell('S6').alignment = { vertical: 'middle', horizontal: 'center' }


    worksheet.getCell('A1').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('C1').font = { name: 'TH SarabunPSK', size: 28, italic: false, bold: true, }
    worksheet.getCell('A3').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('C3').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('T3').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('U3').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: false, }
    worksheet.getCell('A4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('B4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('C4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('D4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('E4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('F4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('G4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('H4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('K4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('N4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('T4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('U4').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('H5').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('K5').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('N5').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('H6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('I6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('J6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('K6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('L6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('M6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('N6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('O6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('P6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('Q6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('R6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }
    worksheet.getCell('S6').font = { name: 'TH SarabunPSK', size: 14, italic: false, bold: true, }


    worksheet.getColumn(1).width = 12
    worksheet.getColumn(2).width = 10
    worksheet.getColumn(3).width = 12
    worksheet.getColumn(4).width = 12
    worksheet.getColumn(5).width = 6
    worksheet.getColumn(6).width = 6
    worksheet.getColumn(7).width = 6
    worksheet.getColumn(8).width = 8
    worksheet.getColumn(9).width = 8
    worksheet.getColumn(10).width = 8
    worksheet.getColumn(11).width = 8
    worksheet.getColumn(12).width = 8
    worksheet.getColumn(13).width = 8
    worksheet.getColumn(14).width = 8
    worksheet.getColumn(15).width = 8
    worksheet.getColumn(16).width = 8
    worksheet.getColumn(17).width = 8
    worksheet.getColumn(18).width = 8
    worksheet.getColumn(19).width = 8
    worksheet.getColumn(20).width = 8
    worksheet.getColumn(21).width = 15


    worksheet.getRow(1).height = 45
    worksheet.getRow(2).height = 45


    worksheet.getCell(`C3`).value = props.SubstationSelect
    
    props.dataFromfetch.map((data: any, index: number) => {
        worksheet.getCell(`A${index + 7}`).value = data[2]
        worksheet.getCell(`B${index + 7}`).value = data[3]
        worksheet.getCell(`C${index + 7}`).value = data[4]
        worksheet.getCell(`D${index + 7}`).value = data[5]
        worksheet.getCell(`E${index + 7}`).value = data[6]
        worksheet.getCell(`F${index + 7}`).value = data[7]
        worksheet.getCell(`G${index + 7}`).value = data[8]
        worksheet.getCell(`H${index + 7}`).value = data[9]
        worksheet.getCell(`I${index + 7}`).value = data[10]
        worksheet.getCell(`J${index + 7}`).value = data[11]
        worksheet.getCell(`K${index + 7}`).value = data[12]
        worksheet.getCell(`L${index + 7}`).value = data[13]
        worksheet.getCell(`M${index + 7}`).value = data[14]
        worksheet.getCell(`N${index + 7}`).value = data[15]
        worksheet.getCell(`O${index + 7}`).value = data[16]
        worksheet.getCell(`P${index + 7}`).value = data[17]
        worksheet.getCell(`Q${index + 7}`).value = data[18]
        worksheet.getCell(`R${index + 7}`).value = data[19]
        worksheet.getCell(`S${index + 7}`).value = data[20]
        worksheet.getCell(`T${index + 7}`).value = data[21]
        worksheet.getCell(`U${index + 7}`).value = data[22]

        worksheet.getCell(`A${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`B${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`C${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`D${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`E${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`F${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`G${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`H${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`I${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`J${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`K${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`L${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`M${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`N${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`O${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`P${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`Q${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`R${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`S${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`T${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        worksheet.getCell(`U${index + 7}`).font = { name: 'TH SarabunPSK', size: 14, }
        
        worksheet.getCell(`A${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`B${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`C${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`D${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`E${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`F${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`G${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`H${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`I${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`J${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`K${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`L${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`M${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`N${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`O${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`P${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`Q${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`R${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`S${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`T${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        worksheet.getCell(`U${index + 7}`).alignment = { vertical: 'middle', horizontal: 'center' }
        
        worksheet.getCell(`A${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`B${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`C${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`D${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`E${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`F${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`G${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`H${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`I${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`J${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`K${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`L${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`M${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`N${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`O${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`P${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`Q${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`R${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`S${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`T${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }
        worksheet.getCell(`U${index + 7}`).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, }




    })


































    // Set Print Area for a sheet
    worksheet.pageSetup.printArea = 'A1:Z83';
    worksheet.pageSetup.scale = 77;
    worksheet.pageSetup.horizontalCentered = true;
    worksheet.pageSetup.verticalCentered = true;





    const myBase64Image = Logo_image();
    const imageId2 = workbook.addImage({
        base64: myBase64Image,
        extension: 'png',
    });

    worksheet.addImage(imageId2, 'A1:B2');



    console.log(typeof(props.Substation))
    workbook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
        saveAs(blob, `รายงานผล switchGear สถานี ${props.SubstationSelect} ${props.YearSelect}.xlsx`);
    });

}









