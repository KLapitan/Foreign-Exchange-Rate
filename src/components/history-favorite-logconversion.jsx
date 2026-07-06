const HistoryFavoritedLogConversion = ({tools, onChangeTools ,favoriteList, isBaseComparison, compareResults, singleRate}) => {




return(
<section className="w-auto h-screen border-PrimaryNeon border text-white font-JetBrains-Mono p-2">
    <select className="w-full border rounded-md p-2 "  value={tools} onChange={onChangeTools}>
      <option className="bg-BlackSR   text-white"  value="history">History</option>
      <option className="bg-BlackSR  text-white" value="compare">Compare</option>
      <option className="bg-BlackSR  text-white" value="favorites">Favorites</option>
      <option className="bg-BlackSR  text-white"  value="log">Log</option>
    </select>
      <div className="w-full h-auto p-2">
      {tools === "compare" && 
      <div>
          <h2 className="text-white">Multi-Currency <span><span>{isBaseComparison.amount}</span> <span>{isBaseComparison.from}</span>  </span></h2>

      <ul>
        {compareResults.map((item) => (
        <li key={item.id} className="text-white">{item.to} - {item.convertedAmount}</li>
        ))}
      </ul>
      
      </div>
      
      }

      {tools === "favorites"  && 
      <div className="border border-white p-2 h-auto">
        <h2 className="text-white">FAVORITES</h2>
      
        <ul className="flex flex-col gap-3 h-auto ">
        {favoriteList.map((item) => (
        <li className="flex flex-row text-white bg-BlackLight items-center  border h-10 p-2  justify-between ">
        <span className="flex flex-row gap-3"> 
          <span  className="flex flex-row gap-2" ><img src={`https://flagcdn.com/w40/${item.fromFlag}.png`} alt="flagfrom" className="w-6 h-6 rounded-full"/> {item.from}</span>  {" / "}
           <span className="flex flex-row gap-2"><img src={`https://flagcdn.com/w40/${item.toFlag}.png`} alt="flagto" className="w-6 h-6 rounded-full"/> {item.to}</span>
          </span>
          <span>{singleRate.rate}</span>
          </li>
        ))}
        </ul>
      
      </div>
      
      }

      </div>

</section>


)
}
export default HistoryFavoritedLogConversion 