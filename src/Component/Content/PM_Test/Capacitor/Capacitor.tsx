import Navbar1 from "../../Navbar/Navbar1"
import Footer from "../../Footer/Footer"
const Capacitor = () => {

    return (
        <>
            <Navbar1 />
            <div className="grow container justify-center text-center">
                <div className="text-xl font-bold my-2">Capacitor Test</div>
                {/* Path of selector */}
                <div className="flex justify-center items-center flex-wrap">
                    <div className="flex justify-end w-56 ">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            สถานี
                        </label>
                        <select className="rounded-xl w-1/2 border">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="flex justify-end w-56 ">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Capacitor
                        </label>
                        <select className="rounded-xl w-1/2 border">
                            <option value="Step1">Cap1</option>
                            <option value="Step2">Cap2</option>
                            <option value="Step3">Cap3</option>
                        </select>
                    </div>
                    <div className="flex justify-end w-56 ">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            step
                        </label>
                        <select className="rounded-xl w-1/2 border">
                            <option value="Step1">Step1</option>
                            <option value="Step2">Step2</option>
                            <option value="Step3">Step3</option>
                        </select>
                    </div>
                </div>
                {/* Path of Fill Data */}
                <div className="my-2">
                    <div className="flex justify-center rounded-lg border overflow-hidden">
                        <span className="bg-slate-200 p-1 rounded-l-lg">test</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" />
                    </div>
                </div>

                <div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Capacitor