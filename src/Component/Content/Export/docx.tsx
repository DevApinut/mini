
import { HeightRule,WidthType, Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, SymbolRun, TabStopType, TabStopPosition, TableRow, Table, UnderlineType, TableCell, BorderStyle } from "docx";
import { Buffer } from 'buffer';
import { saveAs } from "file-saver";
import { Logo_image1 } from "./Image"


const Docx_export = () => {
    // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
    // This simple example will only contain one section
    const imageBase64Data = Logo_image1()
    var  i = [0,1];
    const doc = new Document({        
        sections: [
            {
                properties: {
                    page: {
                        margin: {
                            top: 350,
                            right: 1262,
                            bottom: 350,
                            left: 1262,
                        },
                    },
                },
                children: [
                    new Paragraph({
                        children: [
                            new ImageRun({
                                data: Buffer.from(imageBase64Data, "base64"),
                                transformation: {
                                    width: 90,
                                    height: 90,
                                },
                                floating: {
                                    horizontalPosition: {
                                        offset: 3514400,
                                    },
                                    verticalPosition: {
                                        offset: 244400,
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
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                size: 36,
                                text: "หนังสืออนุญาตเข้าปฏิบัติงานภายในสถานีไฟฟ้า",
                                bold: true,
                                font: "Angsana New",
                            }),

                        ],
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                size: 36,
                                text: "\tWork Permit",
                                bold: true,
                                font: "Angsana New",
                            }),

                        ],
                        // tabStops: [                            
                        //     {
                        //         type: TabStopType.LEFT,
                        //         position: 1000,
                        //     },
                        // ],

                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [
                            {
                                type: TabStopType.CENTER,
                                position: 2200,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 4000,
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 5000,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 6000,
                            },

                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: "สถานีไฟฟ้า",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tชะอำ\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "เขต",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tต.1\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new SymbolRun({
                                size: 28,
                                char: "F0FE",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: "Substation",
                                font: "Angsana New",
                            }),
                            new SymbolRun({
                                size: 28,
                                char: "F071",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: " Unmanned Substation",
                                font: "Angsana New",
                            }),
                        ],
                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 5.25 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 6 * 567,
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 10 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 12.25 * 567,
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 14.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 16 * 567,
                            },

                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: "หน่วยงานที่ขอปฏิบัติงาน",
                                font: "Angsana New",
                            }),
                            new SymbolRun({
                                size: 28,
                                char: "F0FE",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: "กฟภ",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tผสม\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "ผู้ควบคุมงาน",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tนาย ภูนรินทร์ แช่มนาสวน\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "เบอร์โทร",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\t 0819635567\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                        ],
                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 4.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 6 * 567,
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 10 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 12.25 * 567,
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 14.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 16 * 567,
                            },

                        ],
                        children: [
                            new SymbolRun({
                                size: 28,
                                char: "F0FE",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: "หน่วยงานภายนอก",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tผสม\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "ผู้ควบคุมงาน",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tนาย ภูนรินทร์ แช่มนาสวน\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "เบอร์โทร",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\t 0819635567\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                        ],
                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 4 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 5 * 567,
                            },
                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: "จำนวนผู้เข้าปฏิบัติงาน",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\t7\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                        ],

                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 4.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 6 * 567,
                            },
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 7.25 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 8 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 8.75 * 567,
                            },
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 11 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 12.5 * 567,
                            },
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 13.75 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 14.5 * 567,
                            },
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 15.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 16 * 567,
                            },
                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: "วันที่ขอปฏิบัติงาน",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\t15 เม.ย.67\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "เวลา",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\t 8.00 น.\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "ถึง",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tวันที่",
                                font: "Angsana New",

                            }),
                            new TextRun({
                                size: 28,
                                text: "\t15 เม.ย.67\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "เวลา",
                                font: "Angsana New",
                            }),
                            new TextRun({
                                size: 28,
                                text: "\t 8.00 น.\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "รวม",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "\t7\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: "วัน",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),

                        ],

                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                            
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 15.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 16 * 567,
                            },
                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: "การขอดับไฟ",
                                font: "Angsana New",
                            }),
                            new SymbolRun({
                                size: 28,
                                char: "F0FE",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: "ดับไฟปฏิบัติงาน",
                                font: "Angsana New",                               
                            }),
                            new SymbolRun({
                                size: 28,
                                char: "F0FE",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: "ไม่ดับไฟปฏิบัติงาน",
                                font: "Angsana New",                               
                            }),
                            new TextRun({
                                size: 28,
                                text: "งาน",
                                font: "Angsana New",
                            }),
                            new SymbolRun({
                                size: 28,
                                char: "F0FE",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: "ตามแผน",
                                font: "Angsana New",                                
                            }),
                            new SymbolRun({
                                size: 28,
                                char: "F0FE",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: "นอกแผน",
                                font: "Angsana New",                                
                            }),
                            new SymbolRun({
                                size: 28,
                                char: "F0FE",
                                bold: true,
                                italics: false,
                            }),
                            new TextRun({
                                size: 28,
                                text: "กรณีฉุกเฉิน (ศูนย์ฯ พิจารณา)",
                                font: "Angsana New",                                
                            }),
                        ],

                    }),

                    // ตารางงาน
                    new Table({
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "รายละเอียดของงานที่ปฏิบัติ",
                                                        bold: true,
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 10000,
                                            type: WidthType.DXA,
                                        },
                                        columnSpan : 3,
                                    }),
                                    // new TableCell({
                                    //     children: [],
                                    //     borders: {
                                    //         top: {
                                    //             style: BorderStyle.DASH_DOT_STROKED,
                                    //             size: 3,
                                    //             
                                    //         },
                                    //         bottom: {
                                    //             style: BorderStyle.DOUBLE,
                                    //             size: 3,
                                    //             
                                    //         },
                                    //         left: {
                                    //             style: BorderStyle.DASH_DOT_STROKED,
                                    //             size: 3,
                                    //             
                                    //         },
                                    //         right: {
                                    //             style: BorderStyle.DASH_DOT_STROKED,
                                    //             size: 3,
                                    //             
                                    //         },
                                    //     },                                       
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "ลำดับที่",
                                                        bold: true,
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "รายการ",
                                                        bold: true,
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 50,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "หมายเหตุ",
                                                        bold: true,
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: " ",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },                                        
                                        
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: " ",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 50,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: " ",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: " ",                                                        
                                                        font: "Angsana New",
                                                        bold:false,
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: " ",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 50,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: " ",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 50,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 50,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 50,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "",                                                        
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        width: {
                                            size: 25,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                ],
                            }),
                            
                        ],
                    }),

                    new Paragraph({ children: [new TextRun({ text: "", }),], }),


                    // ลงชื่อผู้ส่ง
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [
                            {
                                type: TabStopType.LEFT,
                                position: 5 * 567,
                            },  
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 8.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 12 * 567,
                            }, 
                                                      

                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: "\tลงชื่อ",
                                font: "Angsana New",                                
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tอภินัทธ์ แก้วมูณี\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),                            
                        ],
                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [
                            {
                                type: TabStopType.LEFT,
                                position: 5 * 567,
                            },  
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 8.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 12 * 567,
                            }, 
                            {
                                type: TabStopType.CENTER,
                                position: 14.5 * 567,
                            }, 
                            {
                                type: TabStopType.LEFT,
                                position: 16 * 567,
                            }, 
                                                      

                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: "\t(",
                                font: "Angsana New",                                
                            }),
                            new TextRun({
                                size: 28,
                                text: "\tอภินัทธ์ แก้วมูณี\t",
                                font: "Angsana New",
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },
                            }),
                            new TextRun({
                                size: 28,
                                text: ")",
                                font: "Angsana New",                                
                            }),
                            new TextRun({
                                size: 28,
                                text: "ตำแหน่ง",
                                font: "Angsana New",                                
                            }), 
                            new TextRun({
                                size: 28,
                                text: "\tวศก4\t",
                                font: "Angsana New", 
                                underline: {
                                    type: UnderlineType.DOTTED,
                                    
                                },                               
                            }),                           
                        ],
                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                             
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 8.5 * 567,
                            },
                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: "\tผู้ขออนุญาติ",
                                font: "Angsana New",                                
                            }),                                                      
                        ],
                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                             
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 8.5 * 567,
                            },
                        ],
                        children: [
                            new TextRun({
                                size: 28,
                                text: `\t18 เม.ย. 67`,
                                font: "Angsana New",                                
                            }),                                                      
                        ],
                    }),


                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    // ลงนาม
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
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "\tเรียน  อก.ปบ.(ต.1)",
                                                        bold: false,
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.SINGLE,
                                                size: 3,                                                
                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,
                                                
                                            },
                                            left: {
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\tเลขที่...................................",
                                                        bold: false,
                                                        font: "Angsana New",
                                                    }),

                                                ],
                                            })
                                        ],
                                        borders: {
                                            top: {
                                                style: BorderStyle.SINGLE,
                                                size: 3,                                                
                                            },
                                            bottom: {
                                                style: BorderStyle.NONE,
                                                size: 3,
                                                
                                            },
                                            left: {
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\t",
                                                        bold: false,
                                                        font: "Angsana New",
                                                    }),
                                                    new SymbolRun({
                                                        size: 28,
                                                        char: "F0FE",
                                                        bold: true,
                                                        italics: false,
                                                    }),
                                                    new TextRun({
                                                        size: 28,
                                                        text: "เห็นควรอนุญาตให้เข้าทำงานได้",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\tเรียน",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\t",
                                                        bold: false,
                                                        font: "Angsana New",
                                                    }),
                                                    new SymbolRun({
                                                        size: 28,
                                                        char: "F0FE",
                                                        bold: true,
                                                        italics: false,
                                                    }),
                                                    new TextRun({
                                                        size: 28,
                                                        text: "ไม่เห็นควรให้เข้าทำงานเนื่องจาก...........................",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 44,
                                                        text: "อนุมัติตามเสนอ",
                                                        bold: true,
                                                        font: "Angsana New",
                                                    }),                                                    
                                                ],                                                
                                            })
                                        ],
                                        rowSpan :2 ,
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\t",
                                                        bold: false,
                                                        font: "Angsana New",
                                                    }),                                                    
                                                    new TextRun({
                                                        size: 28,
                                                        text: "........................................................................................",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\tทั้งนี้ให้ดำเนินการตามบันทึก ผวก.เลขที่ กปภ.(วค)1492/2558 ",
                                                        bold: true,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\t",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\tลว.22 ธ.ค.2558",
                                                        bold: true,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "\t",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "ลงชื่อ.................................................",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: "ลงชื่อ................................................. อก.ปบ.(ต.1)",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "หผ.จฟ.1/ศูนย์ควบคุมการจ่ายไฟ (ฉุกเฉิน)",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            left: {
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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
                                                        size: 28,
                                                        text: " (.......................................................)",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            left: {
                                                style: BorderStyle.SINGLE,
                                                size: 3,
                                                
                                            },
                                            right: {
                                                style: BorderStyle.SINGLE,
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


                    new Paragraph({ children: [new TextRun({ text: "", }),], }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                            
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 15.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 16 * 567,
                            },
                        ],
                        alignment: AlignmentType.LEFT,
                        children: [                            
                            new TextRun({                                
                                size: 28,
                                text: "สำหรับเจ้าหน้าที่",
                                font: "Angsana New",
                                bold : true,
                                underline: {
                                    type: UnderlineType.SINGLE,
                                    
                                },
                            }),
                            
                        ],

                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                            
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 15.5 * 567,
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 16 * 567,
                            },
                        ],
                        alignment: AlignmentType.LEFT,
                        children: [                            
                            new TextRun({                                
                                size: 28,
                                text: "เรียน หผ.จฟ.1",
                                font: "Angsana New",
                                bold : true,                                
                            }),
                            
                        ],

                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                            
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.LEFT,
                                position: 0.75 * 567,
                            },
                            
                        ],                        
                        children: [                            
                            new TextRun({                                
                                size: 28,
                                text: "\tขอรายงานผลการปฏิบัติงาน ดังนี้",
                                font: "Angsana New",
                                bold : true,                                
                            }),
                            
                        ],

                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                            
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 0.75 * 567,
                            },
                            
                        ],
                        alignment: AlignmentType.LEFT,
                        children: [                            
                            new TextRun({                                
                                size: 28,
                                text: "...........................................................................................................................................................................................................",
                                font: "Angsana New",
                                                              
                            }),
                            
                        ],

                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                            
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 0.75 * 567,
                            },
                            
                        ],
                        alignment: AlignmentType.LEFT,
                        children: [                            
                            new TextRun({                                
                                size: 28,
                                text: "...........................................................................................................................................................................................................",
                                font: "Angsana New",
                                                            
                            }),
                            
                        ],

                    }),
                    new Paragraph({
                        // alignment: AlignmentType.LEFT,
                        tabStops: [                            
                            {
                                //multiply by 567 example want 5 cm * 567 = 2835
                                type: TabStopType.CENTER,
                                position: 0.75 * 567,
                            },
                            
                        ],
                        alignment: AlignmentType.LEFT,
                        children: [                            
                            new TextRun({                                
                                size: 28,
                                text: "...........................................................................................................................................................................................................",
                                font: "Angsana New",                                                             
                            }),
                            
                        ],

                    }),



                    // ลงนาม
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
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "ลงชื่อ......................................................... ",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                        size: 28,
                                                        text: "ลงชื่อ......................................................... ",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "(.......................................................) ตำแหน่ง .............",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                        size: 28,
                                                        text: "(.......................................................) ตำแหน่ง .............",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                alignment: AlignmentType.CENTER,
                                                children: [
                                                    new TextRun({
                                                        size: 28,
                                                        text: "พนักงานสถานีไฟฟ้า",
                                                        bold: false,
                                                        font: "Angsana New",
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
                                                        size: 28,
                                                        text: "ผู้ปฏิบัติงาน",
                                                        bold: false,
                                                        font: "Angsana New",
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





                ],
            },
        ],
    });
    

    // Used to export the file into a .docx file

    Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
    });


    // Done! A file called 'My Document.docx' will be in your file system.
}

export default Docx_export