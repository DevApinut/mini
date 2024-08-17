
import { HeightRule, WidthType, Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, SymbolRun, TabStopType, TabStopPosition, TableRow, Table, UnderlineType, TableCell, BorderStyle } from "docx";
import { Buffer } from 'buffer';
import { saveAs } from "file-saver";
import { Logo_image2 } from "../Export/Image"; 


const ExportDocx =()=>{
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