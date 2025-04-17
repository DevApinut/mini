const Capacitorsub2 = (props:any) => {
    return (
        <>
            <div className="flex flex-col w-1/3 px-4 px-4">
                <div className="bg-slate-200">Step{props.Step}</div>
                <div className="w-full">    
                    <div>PhaseA</div>                
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">1</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,0,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">2</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,1,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">3</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,2,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">4</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,3,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-red-700 p-1 rounded-l-lg text-white">S</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,4,props.Step-1)}/>
                    </div>
                </div>
                <div className="w-full">    
                    <div>PhaseB</div>                
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">1</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,5,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">2</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,6,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">3</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,7,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">4</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,8,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-red-700 p-1 rounded-l-lg text-white">S</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,9,props.Step-1)}/>
                    </div>
                </div>
                <div className="w-full">    
                    <div>PhaseC</div>                
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">1</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,10,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">2</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,11,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">3</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,12,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-slate-200 p-1 rounded-l-lg">4</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,13,props.Step-1)}/>
                    </div>
                    <div className="flex justify-center rounded-lg border overflow-hidden my-2">
                        <span className="bg-red-700 p-1 rounded-l-lg text-white">S</span>
                        <input type="text" inputMode="numeric" className="text-center rounded-l-lg w-full focus:outline-none" onChange={(e)=>props.onChngeData("Capacitorstep",e.target.value,14,props.Step-1)}/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Capacitorsub2