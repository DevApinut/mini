
import { HeightRule, WidthType, Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, VerticalAlign, SymbolRun, TabStopType, TabStopPosition, TableRow, Table, UnderlineType, TableCell, BorderStyle,Footer } from "docx";
import { Buffer } from 'buffer';
import { saveAs } from "file-saver";
import { Logo_image2 } from "../Export/Image";


const ExportDocx = (props: any) => {

    let textDate = ""

    const changedate = (date_recieve: any): string => {
        let date = new Date(date_recieve)
        const day = date.getDate();
        let month: any = date.getMonth() + 1;
        if (month === 1) { month = "มกราคม" }
        else if (month === 2) { month = "กุมภาพันธ์" }
        else if (month === 3) { month = "มีนาคม" }
        else if (month === 4) { month = "เมษายน" }
        else if (month === 5) { month = "พฤษภาคม" }
        else if (month === 6) { month = "มิถุนายน" }
        else if (month === 7) { month = "กรกฎาคม" }
        else if (month === 8) { month = "สิงหาคม" }
        else if (month === 9) { month = "กันยายน" }
        else if (month === 10) { month = "ตุลาคม" }
        else if (month === 11) { month = "พฤศจิกายน" }
        else if (month === 12) { month = "ธันวาคม" }
        return (month)
    }

    if (((new Date(props.otherData[9][1])).getDate() == (new Date(props.otherData[10][1])).getDate()) && ((new Date(props.otherData[9][1])).getMonth() == (new Date(props.otherData[10][1])).getMonth()) && ((new Date(props.otherData[9][1])).getFullYear() == (new Date(props.otherData[10][1])).getFullYear())) {
        textDate = `${new Date(props.otherData[9][1]).getDate()} ${changedate(new Date(props.otherData[9][1]))}${(new Date(props.otherData[9][1]).getFullYear() + 543).toString()}`

    } else if ((new Date(props.otherData[9][1]).getMonth() == new Date(props.otherData[10][1]).getMonth()) && (new Date(props.otherData[9][1]).getFullYear() == new Date(props.otherData[10][1]).getFullYear())) {
        textDate = `${new Date(props.otherData[9][1]).getDate()} - ${new Date(props.otherData[10][1]).getDate()} ${changedate(new Date(props.otherData[9][1]))} ${(new Date(props.otherData[9][1]).getFullYear() + 543).toString()}`

    } else if ((new Date(props.otherData[9][1]).getMonth() !== new Date(props.otherData[10][1]).getMonth()) && (new Date(props.otherData[9][1]).getFullYear() == new Date(props.otherData[10][1]).getFullYear())) {
        textDate = `${new Date(props.otherData[9][1]).getDate()} ${changedate(new Date(props.otherData[9][1]))} - ${new Date(props.otherData[10][1]).getDate()} ${changedate(new Date(props.otherData[10][1]))} ${(new Date(props.otherData[9][1]).getFullYear() + 543).toString()}`

    } else if ((new Date(props.otherData[9][1]).getMonth() !== new Date(props.otherData[10][1]).getMonth()) && (new Date(props.otherData[9][1]).getFullYear() !== new Date(props.otherData[10][1]).getFullYear())) {
        textDate = `${new Date(props.otherData[9][1]).getDate()} ${changedate(new Date(props.otherData[9][1]))} ${(new Date(props.otherData[9][1]).getFullYear() + 543).toString()} - ${new Date(props.otherData[10][1]).getDate()} ${changedate(new Date(props.otherData[10][1]))} ${(new Date(props.otherData[10][1]).getFullYear() + 543).toString()}`
    }

    const changeFormatDate = (Date1:any,Date2:any) =>{
        let textFormatDate = ""
        if (((new Date(Date1)).getDate() == (new Date(Date2)).getDate()) && ((new Date(Date1)).getMonth() == (new Date(Date2)).getMonth()) && ((new Date(Date1)).getFullYear() == (new Date(Date2)).getFullYear())) {
            textFormatDate = `${new Date(Date1).getDate()} ${changedate(new Date(Date1))}${(new Date(Date1).getFullYear() + 543).toString()}`
    
        } else if ((new Date(Date1).getMonth() == new Date(Date2).getMonth()) && (new Date(Date1).getFullYear() == new Date(Date2).getFullYear())) {
            textFormatDate = `${new Date(Date1).getDate()} - ${new Date(Date2).getDate()} ${changedate(new Date(Date1))} ${(new Date(Date1).getFullYear() + 543).toString()}`
    
        } else if ((new Date(Date1).getMonth() !== new Date(Date2).getMonth()) && (new Date(Date1).getFullYear() == new Date(Date2).getFullYear())) {
            textFormatDate = `${new Date(Date1).getDate()} ${changedate(new Date(Date1))} - ${new Date(Date2).getDate()} ${changedate(new Date(Date2))} ${(new Date(Date1).getFullYear() + 543).toString()}`
    
        } else if ((new Date(Date1).getMonth() !== new Date(Date2).getMonth()) && (new Date(Date1).getFullYear() !== new Date(Date2).getFullYear())) {
            textFormatDate = `${new Date(Date1).getDate()} ${changedate(new Date(Date1))} ${(new Date(Date1).getFullYear() + 543).toString()} - ${new Date(Date2).getDate()} ${changedate(new Date(Date2))} ${(new Date(Date2).getFullYear() + 543).toString()}`
        }

        return textFormatDate 
    
    }

    console.log(textDate)

    

    


    const cmTab = 586.181
    // Used to export the file into a .docx file
    const doc = new Document({
        
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 1129,
                            right: 1129,
                            bottom: 1129,
                            left: 1693,
                        },
                    },
                },
                footers: {
                    default: new Footer({
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        size: 32,
                                        text: `แผนกสวิตช์เกียร์และหม้อแปลงไฟฟ้ากำลัง`,
                                        font: "TH SarabunIT๙",
                                    }),

                                ],
                            }),
                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        size: 32,
                                        text: `10611`,
                                        font: "TH SarabunIT๙",
                                    }),

                                ],
                            })
                        ],
                    }),
                },              
                
                children: [
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: Buffer.from(Logo_image2(), "base64"),
                                // 1cm == 37.7834
                                transformation: {
                                    width: 150,
                                    height: 130,
                                },
                                floating: {
                                    // 1 cm == 359716.3121
                                    horizontalPosition: {
                                        offset: 1079148,
                                    },
                                    // 1 cm == 359716.3121
                                    verticalPosition: {
                                        offset: 719432,
                                    },
                                },
                            }),
                        ],
                    }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),

                    new Table({
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "จาก",
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 1000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: `${props.otherData[1][1]}`,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "ถึง",
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 1000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: `${props.otherData[2][1]}`,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },

                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "เลขที่",
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 1000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: `${props.otherData[3][1]}`,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "วันที่",
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 1000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: `${props.otherData[1][1]}`,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },

                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "เรื่อง",
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan: 1,
                                    }),

                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: `${props.otherData[5][1]}`,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 10000,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan: 3,
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "เรียน",
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 500,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan: 1,
                                    }),

                                    new TableCell({
                                        verticalAlign: VerticalAlign.CENTER,
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: `${props.otherData[6][1]}`,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 10000,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan: 3,
                                    }),
                                ],
                            }),

                        ],
                    }),

                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        // 1cm == 568.181
                        tabStops: [
                            {
                                type: TabStopType.LEFT,
                                position: 2.5 * (cmTab),
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 6 * (cmTab),
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 10 * (cmTab),
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 12 * (cmTab),
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 14 * (cmTab),
                            },

                        ],
                        alignment: AlignmentType.THAI_DISTRIBUTE,
                        children: [
                            new TextRun({
                                size: 32,
                                text: `\tด้วยในวันที่`,
                                font: "TH SarabunIT๙",
                            }),
                            new TextRun({
                                size: 32,
                                text: ` ${textDate}`,
                                font: "TH SarabunIT๙",
                                // underline: {
                                //     type: UnderlineType.DOTTED,
                                // },
                            }),
                            new TextRun({
                                size: 32,
                                text: ` ${props.otherData[7][1]} `,
                                font: "TH SarabunIT๙",
                            }),
                            new TextRun({
                                size: 32,
                                text: `จะทำการดับไฟ ระบบ `,
                                font: "TH SarabunIT๙",
                            }),

                            new SymbolRun({
                                size: 28,
                                char: `${props.otherData[11][1] ? "F0FE" : "F071"}`,
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 32,
                                text: ` 22kV `,
                                font: "TH SarabunIT๙",
                            }),
                            new SymbolRun({
                                size: 28,
                                char: `${props.otherData[12][1] ? "F0FE" : "F071"}`,
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 32,
                                text: ` 115kV `,
                                font: "TH SarabunIT๙",
                            }),
                            new TextRun({
                                size: 32,
                                text: `พร้อมแนบผังจุดปฏิบัติงานมาด้วย จำนวน ${props.otherData[13][1]} ฉบับ โดยมีรายละเอียดที่ปฏิบัติงานดังนี้`,
                                font: "TH SarabunIT๙",
                            }),
                        ],
                    }),

                    ...props.RequestElectoff.map((data: any, index: number) => {

                        return (
                            new Paragraph({
                                tabStops: [
                                    {
                                        type: TabStopType.LEFT,
                                        position: 2.5 * (cmTab),
                                    },
                                ],
                                alignment: AlignmentType.THAI_DISTRIBUTE,
                                children: [
                                    new TextRun({
                                        size: 32,
                                        text: `\t${props.RequestElectoff.length < 2 ? "" : `${index + 1}.` }`,
                                        font: "TH SarabunIT๙",
                                    }),
                                    new TextRun({
                                        size: 32,
                                        text: ` ${data[0].contentForDetail}`,
                                        font: "TH SarabunIT๙",
                                    }),
                                ],
                            })
                        )
                    }),
                    new Paragraph({
                        tabStops: [
                            {
                                type: TabStopType.LEFT,
                                position: 2.5 * (cmTab),
                            },
                        ],
                        
                        children: [
                            new TextRun({
                                size: 32,
                                text: `\tจึงขออนุมัติดับไฟโดยมีรายละเอียดดังนี้`,
                                font: "TH SarabunIT๙",
                            }),
                        ],
                    }),
                    ...props.RequestElectoff.map((data: any, index: number) => {

                        return (
                            new Paragraph({
                                tabStops: [
                                    {
                                        type: TabStopType.LEFT,
                                        position: 2.5 * (cmTab),
                                    },
                                ],
                                alignment: AlignmentType.THAI_DISTRIBUTE,
                                children: [
                                    new TextRun({
                                        size: 32,
                                        text: `\t${props.RequestElectoff.length < 2 ? "" : `${index + 1}.` }`,
                                        font: "TH SarabunIT๙",
                                    }),
                                    new TextRun({
                                        size: 32,
                                        text: `${data[1].requestOffDetail} วันที่ ${changeFormatDate(data[1].fromDate,data[1].destinationDate)} เวลา ${data[1].Timefrom} น. ถึง ${data[1].Timedestination} (${data[1].typeOfRequestOff}) `,
                                        font: "TH SarabunIT๙",
                                    }),
                                ],
                            })
                        )
                    }),
                    new Paragraph({
                        tabStops: [
                            {
                                type: TabStopType.LEFT,
                                position: 7.5 * (cmTab),
                            },
                        ],
                        
                        children: [
                            new TextRun({
                                size: 32,
                                text: `\tจึงเรียนมาเพื่อโปรดพิจารณา`,
                                font: "TH SarabunIT๙",
                            }),
                        ],
                    }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({ children: [new TextRun({ text: "", }),], }),



                    new Table({
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                tabStops: [
                                                    {
                                                        type: TabStopType.LEFT,
                                                        position: 0.5 * 567,
                                                    },
                                                ],
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "แผนกควบคุมการจ่ายไฟ",
                                                        bold: false,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                tabStops: [
                                                    {
                                                        type: TabStopType.LEFT,
                                                        position: 0.5 * 567,
                                                    },


                                                ],
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "ผู้รับเอกสาร",
                                                        bold: false,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },
                                    }),

                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                tabStops: [
                                                    {
                                                        type: TabStopType.LEFT,
                                                        position: 0.5 * 567,
                                                    },
                                                ],
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "Tel:032 -598461 หรือ 10511,10529-30",
                                                        bold: false,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                tabStops: [
                                                    {
                                                        type: TabStopType.LEFT,
                                                        position: 0.5 * 567,
                                                    },


                                                ],
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "กปบ.ต.1…………..ลว…………………….เวลา……………..",
                                                        bold: false,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },
                                    }),

                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                tabStops: [
                                                    {
                                                        type: TabStopType.LEFT,
                                                        position: 0.5 * 567,
                                                    },
                                                ],
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "Fax:032-598462 หรือ 10536",
                                                        bold: false,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                tabStops: [
                                                    {
                                                        type: TabStopType.LEFT,
                                                        position: 0.5 * 567,
                                                    },


                                                ],
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "ศจฟ.ต.1…………..ลว…………………….เวลา……………..",
                                                        bold: false,
                                                        font: "TH SarabunIT๙",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            left: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                            right: {
                                                style: BorderStyle.NONE,
                                                size: 3,

                                            },
                                        },
                                        width: {
                                            size: 5000,
                                            type: WidthType.DXA,
                                        },
                                    }),

                                ],
                            }),

                        ]


                    }),





                ]
            }
        ],
    });

    Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, `test.docx`);
        console.log("Document created successfully");
    });
}

export default ExportDocx