import { useCurrencyContext } from "../context/currencyContext"
import Compare from "./compare-tool"
import Favorite from "./favorite-tool"
import History from "./history-tool"
import ERButton from "./Button"
import LogConversion from "./Log-Conversion"

const Tools = () => {



const {tools,handleTools,setTools ,favoriteList}=useCurrencyContext();

return(
<section className=" w-auto h-auto  border-PrimaryNeon border text-white font-JetBrains-Mono p-2">

    <select className="w-full border rounded-md p-2  sm:hidden"  value={tools} onChange={handleTools}>
      <option className="bg-BlackSR   text-white"  value="history">History</option>
      <option className="bg-BlackSR  text-white" value="compare">Compare</option>
      <option className="bg-BlackSR  text-white" value="favorites">Favorites</option>
      <option className="bg-BlackSR  text-white"  value="log">Log</option>
    </select>

      <div className={`${favoriteList.length  > 0 ? " gap-11 " : " gap-12 "}hidden  w-full sm:flex flex-row    p-4 font-JetBrains-Mono `}>
      <ERButton className={`${tools === "history" ? "border-b-PrimaryNeon border-b py-2" : ""} cursor-pointer`} onClick={() => setTools("history")}>HISTORY</ERButton>
      <ERButton className={`${tools === "compare" ? "border-b-PrimaryNeon border-b py-2" : "" } cursor-pointer`} onClick={() => setTools("compare")}>COMPARE</ERButton> 
      <>
   <ERButton
  className={`cursor-pointer py-2 ${
    tools === "favorites" ? "border-b border-b-PrimaryNeon" : ""
  }`}
  onClick={() => setTools("favorites")}
>
  FAVORITES
  <span
    className={`ml-2 inline-flex items-center justify-center min-w-5 h-5 px-1 text-xs rounded-full ${
         favoriteList.length > 0
        ? "bg-PrimaryNeon text-black w-6 h-6  text-center"
        : " text-black "
    }`}
  >
      {favoriteList.length }
  </span>
</ERButton>
      
      </>

      <ERButton className={`${tools === "log" ? "border-b-PrimaryNeon border-b py-2" : "" } cursor-pointer`} onClick={() => setTools("log")}>LOG</ERButton>
      </div>

      



      <div className="w-full h-auto p-2">
      {tools === "history" &&
      <History />
      }


      {tools === "compare" && 
     
      <Compare />
      }

      {tools === "favorites"  &&  

      <Favorite/>
      
      }

      {tools === "log"  &&  
      <LogConversion/>      
      }
      </div>



</section>


)
}
export default Tools