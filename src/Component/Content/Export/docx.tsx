
import { WidthType, Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, SymbolRun, TabStopType, TabStopPosition, TableRow, Table,UnderlineType, TableCell, BorderStyle } from "docx";
import { Buffer } from 'buffer';
import { saveAs } from "file-saver";
import { Logo_image1 } from "./Image"


const Docx_export = () => {
    // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
    // This simple example will only contain one section
    const imageBase64Data = Logo_image1()
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
                                    color: "FF0000",
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
                                    color: "FF0000",
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
                    new Table({
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [new Paragraph("Hello")],
                                        borders: {
                                            top: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "FF0000",
                                            },
                                            bottom: {
                                                style: BorderStyle.DOUBLE,
                                                size: 3,
                                                color: "0000FF",
                                            },
                                            left: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "00FF00",
                                            },
                                            right: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "#ff8000",
                                            },
                                        },
                                    }),
                                    new TableCell({
                                        children: [],
                                        borders: {
                                            top: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "FF0000",
                                            },
                                            bottom: {
                                                style: BorderStyle.DOUBLE,
                                                size: 3,
                                                color: "0000FF",
                                            },
                                            left: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "00FF00",
                                            },
                                            right: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "#ff8000",
                                            },
                                        },
                                    }),
                                    new TableCell({
                                        children: [],
                                        borders: {
                                            top: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "FF0000",
                                            },
                                            bottom: {
                                                style: BorderStyle.DOUBLE,
                                                size: 3,
                                                color: "0000FF",
                                            },
                                            left: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "00FF00",
                                            },
                                            right: {
                                                style: BorderStyle.DASH_DOT_STROKED,
                                                size: 3,
                                                color: "#ff8000",
                                            },
                                        },
                                        width: {
                                            size: 80,
                                            type: WidthType.PERCENTAGE,
                                        },
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                ],
                            }),
                            new TableRow({
                                children: [
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                    new TableCell({
                                        children: [],
                                    }),
                                ],
                            }),
                        ],
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