const Result = (props: any) => {
   return (
      <>
         <div className="flex flex-col w-1/3 px-4 px-4">
            <div className="bg-slate-200">Step{props.Step}</div>
            <div className="flex justify-center items-center flex-wrap">
               <div className="flex flex-col mx-4 my-4 grow">
                  <div className="bg-slate-200 w-full">Vaccuum</div>
                  <div>PhaseA : {props.datafromFetch.slice().reverse().find((row:any) => row[3 * (props.Step - 1) + 5] !== "")?.[3 * (props.Step - 1) + 5]}</div>
                  <div>PhaseB : {props.datafromFetch.slice().reverse().find((row:any) => row[3 * (props.Step - 1) + 6] !== "")?.[3 * (props.Step - 1) + 6]}</div>
                  <div>PhaseC : {props.datafromFetch.slice().reverse().find((row:any) => row[3 * (props.Step - 1) + 7] !== "")?.[3 * (props.Step - 1) + 7]}</div>
                  <div className="bg-slate-200 w-full">Contact</div>
                  <div>PhaseA : {props.datafromFetch.slice().reverse().find((row:any) => row[3 * (props.Step - 1) + 14] !== "")?.[3 * (props.Step - 1) + 14]}</div>
                  <div>PhaseB : {props.datafromFetch.slice().reverse().find((row:any) => row[3 * (props.Step - 1) + 15] !== "")?.[3 * (props.Step - 1) + 15]}</div>
                  <div>PhaseC : {props.datafromFetch.slice().reverse().find((row:any) => row[3 * (props.Step - 1) + 16] !== "")?.[3 * (props.Step - 1) + 16]}</div>
               </div>
               <div className="flex flex-col mx-4 my-4 grow">
                  <div className="bg-slate-200 w-full">Insulation</div>
                  <div>PhaseAG : {props.datafromFetch.slice().reverse().find((row:any) => row[6 * (props.Step - 1) + 23] !== "")?.[6 * (props.Step - 1) + 23]}</div>
                  <div>PhaseBG : {props.datafromFetch.slice().reverse().find((row:any) => row[6 * (props.Step - 1) + 24] !== "")?.[6 * (props.Step - 1) + 24]}</div>
                  <div>PhaseCG : {props.datafromFetch.slice().reverse().find((row:any) => row[6 * (props.Step - 1) + 25] !== "")?.[6 * (props.Step - 1) + 25]}</div>
                  <div>PhaseAB : {props.datafromFetch.slice().reverse().find((row:any) => row[6 * (props.Step - 1) + 26] !== "")?.[6 * (props.Step - 1) + 26]}</div>
                  <div>PhaseBC : {props.datafromFetch.slice().reverse().find((row:any) => row[6 * (props.Step - 1) + 27] !== "")?.[6 * (props.Step - 1) + 27]}</div>
                  <div>PhaseCA : {props.datafromFetch.slice().reverse().find((row:any) => row[6 * (props.Step - 1) + 28] !== "")?.[6 * (props.Step - 1) + 28]}</div>
                  <div className="flex justify-center items-center">
                     <div>Counter : </div>
                     <div> {props.datafromFetch.slice().reverse().find((row:any) => row[1 * (props.Step - 1) + 41] !== "")?.[1 * (props.Step - 1) + 41]} </div>
                  </div>
               </div>
               <div className="w-full flex flex-col">
                  <div className="bg-slate-200 w-full">Remark</div>
                  <div>test</div>
               </div>
               <div className="w-full flex flex-col">
                  <div className="bg-slate-200 w-full">Capacitor</div>
                  <div className="flex flex-wrap">
                     <div className="grow m-2">
                        <div className="bg-slate-200 grow" >PhaseA</div>
                        <div>1 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 47] !== "")?.[14 * (props.Step - 1) + 47]}</div>
                        <div>2 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 48] !== "")?.[14 * (props.Step - 1) + 48]}</div>
                        <div>3 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 49] !== "")?.[14 * (props.Step - 1) + 49]}</div>
                        <div>4 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 50] !== "")?.[14 * (props.Step - 1) + 50]}</div>
                        <div>S : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 51] !== "")?.[14 * (props.Step - 1) + 51]}</div>
                     </div>
                     <div className="grow m-2">
                        <div className="bg-slate-200 grow" >PhaseB</div>
                        <div>1 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 52] !== "")?.[14 * (props.Step - 1) + 52]}</div>
                        <div>2 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 53] !== "")?.[14 * (props.Step - 1) + 53]}</div>
                        <div>3 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 54] !== "")?.[14 * (props.Step - 1) + 54]}</div>
                        <div>4 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 55] !== "")?.[14 * (props.Step - 1) + 55]}</div>
                        <div>S : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 56] !== "")?.[14 * (props.Step - 1) + 56]}</div>
                     </div>
                     <div className="grow m-2">
                        <div className="bg-slate-200 grow" >PhaseC</div>
                        <div>1 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 57] !== "")?.[14 * (props.Step - 1) + 57]}</div>
                        <div>2 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 58] !== "")?.[14 * (props.Step - 1) + 58]}</div>
                        <div>3 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 59] !== "")?.[14 * (props.Step - 1) + 59]}</div>
                        <div>4 : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 60] !== "")?.[14 * (props.Step - 1) + 60]}</div>
                        <div>S : {props.datafromFetch.slice().reverse().find((row:any) => row[14 * (props.Step - 1) + 61] !== "")?.[14 * (props.Step - 1) + 61]}</div>
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </>
   )
}
export default Result