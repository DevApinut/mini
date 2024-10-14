import Navbar1 from "../Navbar/Navbar1"
import Footer from "../Footer/Footer"
import * as XLSX from 'xlsx';

const PMTiming = ({ onFileLoad } :any) => {
    
        const handleFileChange = (e: any) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event: any) => {                    
                    const data = new Uint8Array(event.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(sheet);
                    // onFileLoad(jsonData);
                    // console.log(workbook)
                    console.log(workbook)
                };
                reader.readAsArrayBuffer(file);
            }
        }
        return (
            <>
                <Navbar1 />
                <div className="flex grow">
                    <div>รายงานการอ่าน excel</div>
                    <input type="file" onChange={handleFileChange} />





                </div>
                <Footer />
            </>
        )
    }

    export default PMTiming