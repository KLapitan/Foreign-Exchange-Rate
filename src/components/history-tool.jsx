import { AreaChart,XAxis,Tooltip,ResponsiveContainer ,CartesianGrid, YAxis, Area} from "recharts"



const History = ({currencyGraphData,selectedRanged, onSelect }) => {

let openRate =currencyGraphData.length > 0 ? currencyGraphData[0].rate : null

let lastRate = currencyGraphData.length > 0 ? currencyGraphData[currencyGraphData.length - 1].rate : null

let change =(lastRate - openRate)


let  formatChange = change >= 0  ?  `+${change.toFixed(5)}` :change.toFixed(5)

let percentChange = ((change / openRate) * 100).toFixed(4)

return(
<div className="h-auto">
  <div className="flex flex-row max-w-lg w-auto h-auto flex-wrap gap-2 ">
  {/* open */}
    <div className="bg-BlackLight w-30 h-20 rounded-2xl text-sm flex flex-col items-start justify-center gap-4 p-3">
    <span className="text-gray-400">OPEN</span>
    <span>{openRate}</span>
    </div>

  {/* last */}
    <div className="bg-BlackLight w-30 h-20 rounded-2xl text-sm flex flex-col items-start justify-center gap-4 p-3">
    <span className="text-gray-400">LAST</span>
    <span>{lastRate}</span>
    </div>

      {/* Change */}
    <div className="bg-BlackLight w-30 h-20 rounded-2xl text-sm flex flex-col items-start justify-center gap-4 p-3 ">
    <span className="text-gray-400">CHANGE</span>
    <span className={`${change >= 0  ? "text-green-500" :"text-red-500"}`}>{formatChange}</span>
    </div>

  {/* %change  */}
    <div className="bg-BlackLight w-30 h-20 rounded-2xl text-sm flex flex-col items-start justify-center gap-4 p-3">
    <span className="text-gray-400">% CHANGE</span>
    <span  className={`flex flex-row gap-2 items-center ${
    change >= 0 ? "text-green-500" : "text-red-500"
  }`}> <span>{change >= 0 ? "▲" : "▼"}</span> <span>{percentChange}</span></span>
    </div>
  
  </div>

{/*graph-container */}
    <div className="flex flex-col gap-8 p-2 ">
        <div className="flex flex-row gap-5 bg-BlackSR w-auto mt- p-2 rounded-md " >
        {/*  1d 1week 1month 1year */}
          <button className={`w-15 ${selectedRanged === "1D" ? "text-white" :"text-gray-400"}`} onClick={() => onSelect("1D")}>1D</button>
          <button className={`w-15 ${selectedRanged === "1W" ? "text-white" :"text-gray-400"}`} onClick={() => onSelect("1W")}>1W</button>
          <button className={`w-15 ${selectedRanged === "1M" ? "text-white" :"text-gray-400"}`} onClick={() => onSelect("1M")}>1M</button>
          <button className={`w-15 ${selectedRanged === "3M" ? "text-white" :"text-gray-400"}`} onClick={() => onSelect("3M")}>3M</button>
          <button className={`w-15 ${selectedRanged === "1Y" ? "text-white" :"text-gray-400"}`} onClick={() => onSelect("1Y")}>1Y</button>
          <button className={`w-15 ${selectedRanged === "5Y" ? "text-white" :"text-gray-400"}`} onClick={() => onSelect("5Y")}>5Y</button>



        </div>


          {/* graph  */}
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={currencyGraphData}>
            <defs>
      <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#B8F133" stopOpacity={0.6} />
        <stop offset="95%" stopColor="#B8F133" stopOpacity={0} />
      </linearGradient>
    </defs>
          <CartesianGrid  strokeDasharray="1 18" stroke="gray"  />

          {/* months */}
          <XAxis 
          // getting the date in our data
          dataKey="date"  
          // format the date to be  "2026-06-12 tobe jun 12 or jun"

          //  we need to changed this from solo to dynamically changed data
          // (date) =>  new Date(date).toLocaleDateString("en-US", {
          //  month: "short", 
          //   day: "numeric",
          //   })
          tickFormatter={ (date) => {

          const d = new Date(date)

          switch (selectedRanged) {
          
          case "1D" : 
            return d.toLocaleDateString("en-Us" , {
              month: "short",
          day:"numeric",
            
            })
           
            case "1W" :
           return d.toLocaleDateString("en-US", {
           month: "short", 
            day: "numeric",
            })
        
            case "1M" :
           return d.toLocaleDateString("en-US", {
           month: "short", 
            day: "numeric",
            })
            
            case "3M" : 
           return d.toLocaleDateString("en-US", {
           month: "short", 
            day: "numeric",
            })
          
            case "1Y" :
           return  d.toLocaleDateString("en-US" , {  
          month: "short",
          year: "2-digit",
          })
          

           case "5Y" :
            return d.toLocaleDateString("en-US" , {  
          month: "short",
          year: "2-digit",
          })
          
          default :
            return d.toLocaleDateString()


          

          
          }
          
          
          }
           } 
          //  making the text white
           tick={{fill:"white"}}   

          //  
           minTickGap={60} 
           />


          {/* rate */}
         <YAxis  
         dataKey="rate"
        //  format the rate data shows from current data minimun and not goes from 0.000 and to lowest data we have
            domain={['dataMin', 'dataMax']}
          tick={{ fill: "#fff" , fontSize:"10px" }} tickFormatter={(value) => value.toFixed(3)} />


          {/* line */}

          <Area 
          type="monotone"
          // rate
          dataKey="rate"
          // removing everyday  dot  
            dot={false}
          // only show the dot currently user hovering
            activeDot={{ r: 6 }}

            stroke="#cef737"
            strokeWidth={2}
              fill="url(#colorRate)"
           
          />
          
         
          
          
          </AreaChart>
        </ResponsiveContainer>


      </div>
    
    
    
    </div>










</div>
)

}
export default History
  {/* opening  */}
 
  // Open – The exchange rate at the start of the selected time range.

// Example: If the range is the last 30 days, Open is the rate from 30 days ago.


//  what will be the source of our data ?  so we need to get the historical dates from api 





  {/* LAST */}
  {/* Change */}
  {/* % change */}






  // i think we need to create a graph first for us to answer this one

// Recommendation for your project creation of grapch chart

// Since you've been building a currency exchange application with React and the Frankfurter API, I'd recommend:

// TradingView Lightweight Charts if you want a professional-looking forex-style chart like those on finance websites.
// Recharts if you want the easiest React integration and enough customization for exchange rate history.

// TradingView gives the most polished financial chart experience, while Recharts is simpler to learn and integrate.


// graph making 


// we need
//  REcharts for showing data 

// source of our data ?  
  // -from the currency converter fromSelected and toSelected 
  //  - we only get the rates by historicalrates for each (1day ,1week ,1month to see the changes)

//  getting rates from month/week   https://api.frankfurter.dev/v2/rates?from=2026-01-01&group=month

// getting 



  // then continue the openn last  change and %change 



// history

// so we created a graph that handles from 1 month jun to july 

//  and created a fetch request 

//  so the current code is only 1 month so we need to change it accorrdingly to the buttons  and instead of making more another 4 more fetch request we can make it dynamically

// ---- based on 1month ---

// // get todays date 
// const date = new Date();

// // so here we making the request to get from month to this month


// // currentMOnth 
// // tomake the get time to like this "2026-01-01 same as the data we will get"
// const currentMonthDate =date.toISOString().split('T')[0];

// // from month
// // avoid mutatuion of original date
// const previousMonthDate = new Date(date);
// previousMonthDate.setMonth(previousMonthDate.getMonth() - 1)
// const  previousMonth = previousMonthDate.toISOString().split('T')[0];


//  we created the fetGraphData form single form getting 1m to dynamically using swith and setting the dates


// open last ,change %change