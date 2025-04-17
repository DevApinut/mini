const Capacitorsub = (props:any) => {
    return (
        <>
            <div className="flex flex-col w-1/3 px-4 px-4">
                <div className="bg-slate-200">Step{props.Step}</div>
                <div className="w-full">
                    <div>Vaccuum</div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">A</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Vaccuum",e.target.value,0,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">B</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Vaccuum",e.target.value,1,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">C</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Vaccuum",e.target.value,2,props.Step-1)}/>
                    </div>
                </div>
                <div className="w-full">
                    <div>Contact</div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">A</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Contact",e.target.value,0,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">B</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Contact",e.target.value,1,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">C</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Contact",e.target.value,2,props.Step-1)}/>
                    </div>
                </div>
                <div className="w-full">
                    <div>Insulation</div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">AG</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Insulation",e.target.value,0,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">BG</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Insulation",e.target.value,1,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">CG</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Insulation",e.target.value,2,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">AB</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Insulation",e.target.value,3,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">BC</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Insulation",e.target.value,4,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">CA</span>
                        <input type="text" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Insulation",e.target.value,5,props.Step-1)}/>
                    </div>
                </div>
                <div>
                    <div>Counter</div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">CN</span>
                        <input type="number" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Counter",e.target.value,0,props.Step-1)}/>
                    </div>
                </div>
                <div>
                    <div>Remark</div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg text-center items-center justify-center">RM</span>
                        <textarea className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Remark",e.target.value,0,props.Step-1)}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Capacitorsub