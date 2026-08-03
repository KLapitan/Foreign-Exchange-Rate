import { useCurrencyContext } from "../context/currencyContext"
import Compare from "./compare-tool"
import Favorite from "./favorite-tool"
import History from "./history-tool"
import ERButton from "./Button"
import LogConversion from "./Log-Conversion"

import ErrorMessage from "./ErrorMessage"

const Tools = () => {



const {tools,handleTools,amount,compareList,logList  ,errorMessages, setTools ,favoriteList}=useCurrencyContext();

return(
<section className=" w-auto h-auto   text-white font-JetBrains-Mono ">

    <select className="w-full border rounded-md p-2  sm:hidden"  value={tools} onChange={handleTools}>
      <option className="bg-BlackSR   text-white"  value="history">HISTORY</option>
      <option className="bg-BlackSR  text-white" value="compare">COMPARE</option>
      <option className="bg-BlackSR  text-white" value="favorites">FAVORITE</option>
      <option className="bg-BlackSR  text-white"  value="log">LOG</option>
    </select>

      <div className={`${favoriteList.length  > 0 ? " gap-11 " : " gap-12 "}hidden  w-full sm:flex flex-row  border-b  border-b-BlackLight  h-auto mb-4  ml-3`}>
    
    
      <ERButton className={`${tools === "history" ? "border-b-PrimaryNeon border-b-2 py-2" : ""} cursor-pointer`} onClick={() => setTools("history")}>HISTORY</ERButton>
      <ERButton className={`${tools === "compare" ? "border-b-PrimaryNeon border-b py-2" : "" } cursor-pointer`} onClick={() => setTools("compare")}>COMPARE</ERButton> 
      


<ERButton
  className="cursor-pointer py-2"
  onClick={() => setTools("favorites")}
>
  <span
    className={
      tools === "favorites"
        ? "border-b border-b-PrimaryNeon py-2"
        : ""
    }
  >
    FAVORITES
  </span>

  <span
    className={`ml-2 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs rounded-full ${
         favoriteList.length > 0
        ? "bg-BlackLight text-PrimaryNeon font-bold w-6 h-6  text-center"
        : " text-black "
    }`}
  >
      {favoriteList.length }
  </span>
</ERButton>
      
      


      
      <ERButton  className="cursor-pointer py-2" onClick={() => setTools("log")}>

       <span
    className={
      tools === "log"
        ? "border-b border-b-PrimaryNeon py-2"
        : ""
    }
  >
  LOG
  </span>
      
          <span
    className={`ml-2 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs rounded-full ${
         logList.length > 0
        ? "bg-BlackLight text-PrimaryNeon font-bold w-6 h-6  text-center"
        : " text-black "
    }`}
  >
      {logList.length }
  </span>
      
      </ERButton>
      
      
      
      </div>

      



      <div className="w-full h-auto p-2">
      {tools === "history" && (
      amount > 0 ? (
      <History />
      ) : (
      <>
      <div className="flex flex-row max-w-lg w-auto h-auto flex-wrap gap-2 ">
  {/* open */}
    <div className="bg-BlackLight w-30 h-20 rounded-2xl text-sm flex flex-col items-start justify-center gap-4 p-3">
    <span className="text-gray-400">OPEN</span>
    <span>0</span>
    </div>

  {/* last */}
    <div className="bg-BlackLight w-30 h-20 rounded-2xl text-sm flex flex-col items-start justify-center gap-4 p-3">
    <span className="text-gray-400">LAST</span>
    <span>0</span>
    </div>

      {/* Change */}
    <div className="bg-BlackLight w-30 h-20 rounded-2xl text-sm flex flex-col items-start justify-center gap-4 p-3 ">
    <span className="text-gray-400">CHANGE</span>
    <span>0</span>
    </div>

  {/* %change  */}
    <div className="bg-BlackLight w-30 h-20 rounded-2xl text-sm flex flex-col items-start justify-center gap-4 p-3">
    <span className="text-gray-400">% CHANGE</span>
          <span>0</span>

    </div>
  
  </div>
      
      <ErrorMessage className="text-white ">{errorMessages.history}</ErrorMessage>
      
      </>
      )
      )
      }


      {tools === "compare" && (
        compareList.length > 0 ? (
      <Compare />
      
      ) : (
       <ErrorMessage className="text-white ">{errorMessages.compare}</ErrorMessage>
      )
      )
     
      }

      {tools === "favorites"  && (
      favoriteList.length > 0 ? (
      <Favorite/>
      
      ) : (
      <ErrorMessage className="text-white  ">{errorMessages.favorites}</ErrorMessage>
      )
      )}

      {tools === "log"  && (
      logList.length > 0 ? (
      <LogConversion/>
      
      ) : (
 <ErrorMessage className="text-white  ">{errorMessages.log}</ErrorMessage>
      )
      )}

  </div>
</section>


)
}
export default Tools