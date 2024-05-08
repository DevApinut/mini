import { useReducer, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlay } from "@fortawesome/free-solid-svg-icons"
import Favicon from "react-favicon";

const Navbar1 = () => {
    const dropdown = useRef<any>()
    const subdropdown = useRef<any>()


    const [isOpen, setIsOpen] = useState(false)
    const [SubisOpen, setSubIsOpen] = useState([false, false])
    const [MenuresponsiveisOpen, setMenuresponsiveisOpen] = useState(false)

    let menu_response = MenuresponsiveisOpen ? "toggle-active" : "active"

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
            subdropdown.current && !subdropdown.current.contains(event.target)
        ) {
            setIsOpen(false);
            setSubIsOpen([false, false])
            setMenuresponsiveisOpen(false)
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
            <Favicon url={"https://ppim.pea.co.th/images/pea-logo.png"} />
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

                    <div className={`${menu_response}`}>
                        <div className="Barul h-full">
                            <Link to={'/Homepage'} className="BarMenu no-underline">หน้าหลัก</Link>
                            <Link to={'/Homepage'} className="BarMenu no-underline">เกี่ยวกับฉัน</Link>
                            <div className="BarMenu relative">
                                <div className="flex justify-center flex-col hover:cursor-pointer">
                                    <div onClick={(e) => Active_class()}
                                        ref={dropdown}
                                    >
                                        รายงาน
                                    </div>
                                    {isOpen && <div className='Subheader1' ref={subdropdown}>
                                        <div className="m-2 text-black hover:bg-slate-200 relative" >
                                            <div onClick={() => sub_menu_data(0)}>PM CB 22 kV</div>
                                            <FontAwesomeIcon icon={faPlay} className="text-slate-400 absolute right-0 top-1/4 text-sm" />
                                            {SubisOpen[0] && <div className="Subheader2"
                                            >
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.1</div>
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.1</div>
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.1</div>
                                            </div>}
                                        </div>
                                        <div className="m-2 text-black hover:bg-slate-200 relative">
                                            <div onClick={() => sub_menu_data(1)}>PM CB 115 kV</div>
                                            <FontAwesomeIcon icon={faPlay} className="text-slate-400 absolute right-0 top-1/4 text-sm" />
                                            {SubisOpen[1] && <div className="Subheader2"
                                            >
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.2</div>
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.2</div>
                                                <div className="m-2 text-black hover:bg-slate-200 relative">ย่อย1.2</div>
                                            </div>}
                                        </div>
                                        <div className="m-2 text-black hover:bg-slate-200 relative">
                                            <Link to={'/Dashboard'} className="no-underline text-black">DashBoard</Link>
                                            {/* <FontAwesomeIcon icon={faPlay} className="text-slate-400 absolute right-0 top-1/4 text-sm" /> */}
                                        </div>
                                    </div>}

                                </div>
                            </div>
                        </div>

                        <div className="subheadMenubarlogin">
                            <Link to={'/Login'} className="BarMenu login-reg no-underline">ลงชื่อเข้าใช้</Link>                            
                            <div className="BarMenu login-reg">สมัครสมาชิก</div>
                        </div>

                    </div>

                </div>



                <FontAwesomeIcon icon={faBars}
                    className="border text-3xl text-slate-50 p-2 rounded hover:cursor-pointer hover:text-slate-950 hover:bg-white hamburger"
                    onClick={(e) => { setMenuresponsiveisOpen(!MenuresponsiveisOpen) }}
                />





            </nav>
        </>
    )
}

export default Navbar1