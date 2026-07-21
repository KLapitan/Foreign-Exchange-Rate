import { useCurrencyContext } from "../context/currencyContext"
import Compare from "./compare-tool"
import Favorite from "./favorite-tool"
import History from "./history-tool"
import ERButton from "./Button"

const Tools = ({ favoriteList, showFavContent}) => {


const {tools,handleTools,setTools}=useCurrencyContext();

return(
<section className=" w-auto h-auto  border-PrimaryNeon border text-white font-JetBrains-Mono p-2">

    <select className="w-full border rounded-md p-2  sm:hidden"  value={tools} onChange={handleTools}>
      <option className="bg-BlackSR   text-white"  value="history">History</option>
      <option className="bg-BlackSR  text-white" value="compare">Compare</option>
      <option className="bg-BlackSR  text-white" value="favorites">Favorites</option>
      <option className="bg-BlackSR  text-white"  value="log">Log</option>
    </select>

      <div className="hidden  w-full sm:flex flex-row gap-12  p-4 font-JetBrains-Mono ">
      <ERButton className={`${tools === "history" ? "border-b-PrimaryNeon border-b py-1" : ""} cursor-pointer`} onClick={() => setTools("history")}>HISTORY</ERButton>
      <ERButton className={`${tools === "compare" ? "border-b-PrimaryNeon border-b py-1" : "" } cursor-pointer`} onClick={() => setTools("compare")}>COMPARE</ERButton>
      <ERButton className={`${tools === "favorites" ? "border-b-PrimaryNeon border-b py-1" : "" } cursor-pointer`} onClick={() => setTools("favorites")}>FAVORITES</ERButton>
      <ERButton className={`${tools === "log" ? "border-b-PrimaryNeon border-b py-1" : "" } cursor-pointer`} onClick={() => setTools("log")}>LOG</ERButton>
      </div>

      



      <div className="w-full h-auto p-2">
      {tools === "history" &&
      <History />
      }


      {tools === "compare" && 
     
      <Compare />
      }

      {tools === "favorites"  &&  

      <Favorite favoriteList={favoriteList} showFavContent={showFavContent}/>
      
      }

      </div>


</section>


)
}
export default Tools