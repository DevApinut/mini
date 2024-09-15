
import { HeightRule, WidthType, Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, VerticalAlign, SymbolRun, TabStopType, TabStopPosition, TableRow, Table, UnderlineType, TableCell, BorderStyle, Footer,PageOrientation } from "docx";
import { Buffer } from 'buffer';
import { saveAs } from "file-saver";

const Exportdocx = () => {

    const cmTab = 586.181

    const doc = new Document({

        sections: [{
            properties: {
                page: {
                    size: {
                        orientation: PageOrientation.LANDSCAPE,
                    },
                    margin: {
                        top: 1129,
                        right: 1129,
                        bottom: 1129,
                        left: 1693,
                    },
                },
            },            
            children: [

            ]
        }]
    })


    Packer.toBlob(doc).then((blob) => {

        saveAs(blob, `test.docx`);

    })

}


export default Exportdocx