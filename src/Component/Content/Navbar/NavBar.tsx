import { useReducer, useEffect, useRef, useState } from "react"



const NavBar = () => {
   


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

    const Active_class = () => {
        dispatch({ type: "setstate", payload: { name: "dropdows_report", value: "flex" } })
    }
    return (
        <>            
            <nav className="container border flex justify-between pt-3">
                <div >
                    Logo
                </div>
                <div>
                    <ul className="flex justify-center">
                        <li className="mx-2">หน้าหลัก</li>
                        <li className="mx-2">เกี่ยวกับฉัน</li>
                        <li className="mx-2">
                            <div className="flex justify-center flex-col">
                                <div onClick={(e) => dispatch({
                                    type: "setstate",
                                    payload: { name: "dropdows_report", value: "flex flex-col items-center justify-center" }
                                })}
                                >
                                    รายงาน
                                </div>
                                <div className={`${state.dropdows_report}`} >
                                    <div>
                                        รายงานที่1
                                    </div>
                                    <div>
                                        รายงานที่1
                                    </div>
                                    <div>
                                        รายงานที่1
                                    </div>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )
}

export default NavBar
