import Compare from "./compare-tool"
import Favorite from "./favorite-tool"
import History from "./history-tool"

const Tools = ({tools, onChangeTools ,favoriteList, isBaseComparison, compareResults , showFavContent , currencyGraphData ,selectedRanged, onSelectedRanged}) => {




return(
<section className=" w-auto h-auto  border-PrimaryNeon border text-white font-JetBrains-Mono p-2">

    <select className="w-full border rounded-md p-2 "  value={tools} onChange={onChangeTools}>
      <option className="bg-BlackSR   text-white"  value="history">History</option>
      <option className="bg-BlackSR  text-white" value="compare">Compare</option>
      <option className="bg-BlackSR  text-white" value="favorites">Favorites</option>
      <option className="bg-BlackSR  text-white"  value="log">Log</option>
    </select>
      <div className="w-full h-auto p-2">
      {tools === "history" &&
      <History currencyGraphData={currencyGraphData} onSelect={onSelectedRanged}  selectedRanged={selectedRanged}/>
      }


      {tools === "compare" && 
     
      <Compare isBaseComparison={isBaseComparison} compareResults={compareResults}/>
      }

      {tools === "favorites"  &&  

      <Favorite favoriteList={favoriteList} showFavContent={showFavContent}/>
      
      }

      </div>


</section>


)
}
export default Tools