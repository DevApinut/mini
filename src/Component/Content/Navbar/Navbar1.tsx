import { useReducer, useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlay } from "@fortawesome/free-solid-svg-icons"
const Navbar1 = () => {
    const dropdown = useRef<any>()
    const subdropdown = useRef<any>()
    const [isOpen, setIsOpen] = useState(false)
    const [SubisOpen, setSubIsOpen] = useState([false, false])

    const initials = {
        dropdows_report: "hidden"
    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "setstate":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, initials)

    useEffect(() => {
        document.body.addEventListener('click', handle_outside)
        return () => document.body.removeEventListener('click', handle_outside)
    }, [dropdown, isOpen, subdropdown])

    const handle_outside = (event: any) => {
        if (dropdown.current && !dropdown.current.contains(event.target) &&
            subdropdown.current && !subdropdown.current.contains(event.target)) {
            setIsOpen(false);
            setSubIsOpen([false, false])
        }
    }
    const Active_class = () => {
        setIsOpen(!isOpen);
        setSubIsOpen([false, false])
    }
    const sub_menu_data = (number: any) => {
        let Array_data = [...SubisOpen.map((data: any) => false)]
        const newvalue = !SubisOpen[number]
        Array_data[number] = newvalue;
        setSubIsOpen(Array_data)

    }

    return (
        <>
            <nav className="container flex justify-between  items-center top-0 relative p-2 bg-fuchsia-600">
                <div className="w-full flex ">
                    <div className="flex justify-center flex-col items-center text-white font-bold">
                        <div className="text-3xl">
                            PEA
                        </div>
                        {/* <div className="text-sm">
                            ผสม.กสฟ.ต.1
                        </div> */}

                    </div>

                    <div className=" flex justify-between w-full items-center headMenubar">
                        <ul className="Barul h-full">
                            <li className="BarMenu">หน้าหลัก</li>
                            <li className="BarMenu">เกี่ยวกับฉัน</li>
                            <li className="BarMenu relative">
                                <div className="flex justify-center flex-col hover:cursor-pointer">
                                    <div onClick={(e) => Active_class()}
                                        ref={dropdown}
                                    >
                                        รายงาน
                                    </div>
                                    {isOpen && <div className=' border z-50 bg-slate-50 overflow-visible absolute top-6 w-56 rounded' ref={subdropdown}>
                                        <div className="m-2 text-black hover:bg-slate-200 relative" onClick={() => sub_menu_data(0)}>
                                            PM CB 22 kV
                                            <FontAwesomeIcon icon={faPlay} className="text-slate-400 absolute right-0 top-1/4 text-sm" />
                                            {SubisOpen[0] && <div className="absolute w-56 border left-52 top-3 rounded mx-2 bg-slate-50 "
                                            >
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.1</div>
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.1</div>
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.1</div>
                                            </div>}
                                        </div>
                                        <div className="m-2 text-black hover:bg-slate-200 relative" onClick={() => sub_menu_data(1)}>
                                            PM CB 115 kV
                                            <FontAwesomeIcon icon={faPlay} className="text-slate-400 absolute right-0 top-1/4 text-sm" />
                                            {SubisOpen[1] && <div className="absolute w-56 border left-52 top-3 rounded mx-2 bg-slate-50 "
                                            >
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.2</div>
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.2</div>
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.2</div>
                                            </div>}
                                        </div>
                                        <div className="m-2 text-black hover:bg-slate-200 relative">
                                            PM Power Transformer
                                            <FontAwesomeIcon icon={faPlay} className="text-slate-400 absolute right-0 top-1/4 text-sm" />
                                        </div>
                                    </div>}

                                </div>
                            </li>
                        </ul>

                        <div className="subheadMenubarlogin">
                            <div className="BarMenu login-reg">ลงชื่อเข้าใช้</div>
                            <div className="BarMenu login-reg">สมัครสมาชิก</div>
                        </div>

                    </div>

                </div>



                <FontAwesomeIcon icon={faBars} className="border text-3xl text-slate-50 p-2 rounded hover:cursor-pointer hover:text-slate-950 hover:bg-white hamburger" />





            </nav>
        </>
    )
}

export default Navbar1