// import React, { Component } from 'react';
// import Docxtemplater from 'docxtemplater';
// import PizZip from 'pizzip';
// import PizZipUtils from 'pizzip/utils/index.js';
// import { saveAs } from 'file-saver';
// import expressionParser from 'docxtemplater/expressions';

// const docxTest = () => {
//     const generate = (docs: any) => {       
//         console.log()
//         // mini/src/Component/Content/Template/FM0.docx
//         const reader = new FileReader();
//         reader.readAsBinaryString(docs.target.files[0]);
//         // reader.readAsBinaryString(docs.target.files[0]);
//         // reader.readAsDataURL(docs.target.files[0]);
//         // new Blob(mini/src/Component/Content/Template/FM0.docx)


//         PizZipUtils.getBinaryContent("mini/src/Component/Content/Template/FM0.docx", function (err, data) {
//             if (err) {
//               throw err; // or handle err
//             }
//             console.log(data)
//             console.log("XX")
          
//             var zip = new PizZip(data);
//           });






//         reader.onerror = function (evt: any) {
//             console.log("error reading file", evt);
//             alert("error reading file" + evt);
//         };
//         reader.onload = function (evt: any) {
//             console.log(evt)
//             const content = evt.target.result;
//             const zip = new PizZip(content);
//             console.log(zip)
//             const doc = new Docxtemplater(zip, {
//                 paragraphLoop: true,
//                 linebreaks: true,
//             });

//             // Render the document (Replace {first_name} by John, {last_name} by Doe)
//             doc.render({
//                 substation: "John",
//                 last_name: "Doe",
//                 phone: "+33666666",
//                 description: "The Acme Product",
//             });

//             const blob = doc.getZip().generate({
//                 type: "blob",
//                 mimeType:
//                     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//                 // compression: DEFLATE adds a compression step.
//                 // For a 50MB output document, expect 500ms additional CPU time
//                 compression: "DEFLATE",
//             });
//             // Output the document using Data-URI
//             saveAs(blob, "output.docx");
//         };
//     };




//     return (
//         <>
//             <div className="p-2">

//                 <input type="file" id="doc" onChange={(e) => generate(e)} />
//                 <button >Generate document</button>
//             </div>
//         </>
//     )
// }

// export default docxTest














import React, { Component } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import expressionParser from 'docxtemplater/expressions';
import axios from 'axios';

const docxTest = () => {
    function loadFile(url: any, callback: any) {
        PizZipUtils.getBinaryContent(url, callback);
    }

    const generateDocument = () => {
        loadFile(
            'http://localhost:9000/api/Dowloadfile',
            function (error: any, content: any) {
                if (error) {
                    throw error;
                }
                const zip = new PizZip(content);
                const doc = new Docxtemplater(zip, {
                    paragraphLoop: true,
                    linebreaks: true,
                    parser: expressionParser,
                });
                doc.render({
                    substation: 'John',
                    last_name: 'Doe',
                    organization: {
                        companyName: 'Foobar',
                    },
                    phone: '0652455478',
                    description: 'New Website',
                });
                const out = doc.getZip().generate({
                    type: 'blob',
                    mimeType:
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                }); //Output the document using Data-URI
                saveAs(out, 'output.docx');
            }
        );
    };

    const sendfile = (e:any) =>{
        // console.log(e.target.files[0])
        const formData = new FormData()
        formData.append('file',e.target.files[0])
        axios.post(`${process.env.REACT_APP_API}/Dowloadfile`,formData)
        .then(res=>{
            // alert("success")
            console.log(res.data)
        })
    }

    return (
        <>
            <div className="p-2">
                <h1>Test docxtemplater</h1>
                <button onClick={generateDocument}>Generate document</button>
                <p>Click the button above to generate a document using ReactJS</p>
                <p>
                    You can edit the data in your code in this example. In your app, the
                    data would come from your database for example.
                </p>
                <input type="file" onChange={(e)=>{sendfile(e)}}/>
            </div>
        </>
    )
}

export default docxTest