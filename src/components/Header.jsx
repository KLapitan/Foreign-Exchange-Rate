const ERHeader = ({rates , base, changeRate}) => {

return(
<header className="h-auto">
    <section className="h-20 w-full bg-black border flex flex-col gap-2  sm:flex-row items-start sm:items-center  sm:justify-between p-3">

    <picture>
    <img src="/images/logo.svg" alt="FX CHECKER" />
    </picture>

    <div className="w-auto font-JetBrains-Mono font-light">
      <span className="text-white/70 text-xs sm:text-md">{Object.keys(rates).length} CURRENCIES · </span>
      <span className="text-white/70 text-xs sm:text-md">EOD · </span>
      <span className="text-white/70 text-xs sm:text-md">ECB DATA  </span>
    
    </div>
    </section>

{/* dynamic scrolling of rates */}
    {/* container */}
    <section className="relative w-full h-10 bg-black  ">
        {/* holding the xchange rates ul */}
        <div className=" w-full overflow-hidden z-20 ">
          <ul className="w-max whitespace-nowrap flex animate-scroll font-JetBrains-Mono ">
            {changeRate.map((item , index) => (
            <li key={item.currency + index} className="flex  border-2 border-r-gray-600 items-center shrink-0 px-6 h-10">
            <span className="flex flex-row gap-4 text-white/60">
            <span>
            {base} /
            <span>
            {item.currency} 
            </span>
            </span>
            <span className="text-white font-bold flex gap-2 ">
            {item.rate} 
            <span className="text-green-700">{item.change}</span>
            </span>
            </span>
            </li>
            
            ))}
          
          </ul>
        
        
        
        
        </div>
    
    
    
      <div className="absolute top-0 left-0  flex flex-row items-center  border bg-PrimaryNeon font-JetBrains-Mono h-10 w-35 p-2 justify-center  z-40">
      <span className="text-3xl">·</span>
      <span className=" text-xs"> LIVE MARKETS</span>
      </div>
    
    

    
    </section>

    
    



</header>
)}
export default ERHeader

 {/* Dynamic: scrolling list of currency pairs, each with its rate and 24h change (▲ up / ▼ down)  */}
        {/* the given api dont give us an 24 change  */}
        // we use the historical endpoint just to compute today and yesterday rates and if its up an downrates

        // so we need to fetch another request and use historical on itsendpoint withdate  yestarday date



        // computaion (today -yesterday) / yesterday * 100

        // after we get the rates from yesterday and today 

        // animation-scroll

        //  so we need to check currency for all like PHP/USD rates / for all 29 countries


