
import { HeightRule, WidthType, Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, SymbolRun, TabStopType, TabStopPosition, TableRow, Table, UnderlineType, TableCell, BorderStyle } from "docx";
import { Buffer } from 'buffer';
import { saveAs } from "file-saver";
import { Logo_image2 } from "../Export/Image";


const ExportDocx = () => {
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
                            // new TableRow({
                            //     children: [
                            //         new TableCell({
                            //             children: [
                            //                 new Paragraph({
                            //                     alignment: AlignmentType.CENTER,
                            //                     children: [
                            //                         new TextRun({
                            //                             size: 28,
                            //                             text: "รายละเอียดของงานที่ปฏิบัติ",
                            //                             bold: true,
                            //                             font: "TH SarabunIT๙",
                            //                         }),

                            //                     ],
                            //                 })
                            //             ],
                            //             width: {
                            //                 size: 10000,
                            //                 type: WidthType.DXA,
                            //             },
                            //             columnSpan: 3,
                            //         }),                                                                          
                            //     ],
                            // }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
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
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "",
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
                                                alignment: AlignmentType.LEFT,
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
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "",
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
                                                alignment: AlignmentType.LEFT,
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
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "",
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
                                                alignment: AlignmentType.LEFT,
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
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "",
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
                                                alignment: AlignmentType.LEFT,
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
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "",
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
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
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
                                        children: [
                                            new Paragraph({
                                                alignment: AlignmentType.LEFT,
                                                children: [
                                                    new TextRun({
                                                        size: 32,
                                                        text: "",
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
                                position: 2.5*(cmTab),
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 6*(cmTab),
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 10*(cmTab),
                            },
                            {
                                type: TabStopType.CENTER,
                                position: 12*(cmTab),
                            },
                            {
                                type: TabStopType.LEFT,
                                position: 14*(cmTab),
                            },

                        ],
                        children: [
                            new TextRun({
                                size: 32,
                                text: `\tด้วยในวันที่`,
                                font: "TH SarabunIT๙",
                            }),
                            new TextRun({
                                size: 32,
                                text: ` 19 สิงหาคม 2567`,
                                font: "TH SarabunIT๙",
                                // underline: {
                                //     type: UnderlineType.DOTTED,
                                // },
                            }),
                            new TextRun({
                                size: 32,
                                text: ` ผสม.กสฟ.(ต.1) `,
                                font: "TH SarabunIT๙",                                
                            }),
                            new TextRun({
                                size: 32,
                                text: `จะทำการดับไฟ ระบบ `,
                                font: "TH SarabunIT๙",                               
                            }),
                           
                            new SymbolRun({
                                size: 28,
                                char: `F071`,
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
                                char: `F0FE`,
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
                                text: `พร้อมแนบผังจุดปฏิบัติงานมาด้วย จำนวน 1 แผ่น โดยมีรายละเอียดที่ปฏิบัติงานดังนี้`,
                                font: "TH SarabunIT๙",                               
                            }),
                            // new TextRun({
                            //     size: 28,
                            //     text: "Substation",
                            //     font: "TH SarabunIT๙",
                            // }),
                            // new SymbolRun({
                            //     size: 28,
                            //     char: `{data.type_substation == "Unmanned" ? "F0FE" : "F071"}`,
                            //     bold: true,
                            //     italics: false,
                            // }),
                            // new TextRun({
                            //     size: 28,
                            //     text: " Unmanned Substation",
                            //     font: "TH SarabunIT๙",
                            // }),
                        ],
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