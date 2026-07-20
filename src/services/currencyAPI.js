//  api calls 

import axios from "axios";

// base was USD
  const base = import.meta.env.VITE_FXCHECKER_BASE
  const baseURL = import.meta.env.VITE_FXCHECKER_API

const singleRateURL = import.meta.env.VITE_SINGLERATECHECKER_API;

console.log(baseURL ,"in api ui")

export const fetchLiveMarket = async () => {

return  axios.get(baseURL , { params: {base }});
}


export const fetchAllRates = async ({ rateBase }) => {
return axios.get(baseURL, {params : { base: rateBase }})


}

export const fetchYesterdayRates = async () => {
// get todays day monday june 22 
  const yesterday = new Date(); 

   // Go back one day
   yesterday.setDate(yesterday.getDate() -1 )

       // sun june 21 2026 -> 2026 -06-21 
  // Format: YYYY-MM-DD
   const dateStr = yesterday.toISOString().split('T')[0]

     //  weget historical endpoint for USD in yesterday ddate  
return axios.get(baseURL , {
  params :{base , date:dateStr}
  })

}
export const fetchSingleRate = async (baseCurrency,targetCurrency) => {

// path parameter 
const formattedSingleRateURL =`${singleRateURL}/${baseCurrency}/${targetCurrency}`


return axios.get(formattedSingleRateURL)
}

export const fetchGraphDataRates = async ({baseCurrency,currentDate,previousDate, targetCurrency,range}) => {
// console.log({
//   baseCurrency,
//   targetCurrency,
//   previousDate,
//   currentDate,
// } ,"API RESPONSE FOR GRAPH");


// we used NDJSON
return axios.get(baseURL , {
params: {
base: baseCurrency || base,
from:previousDate,
to:currentDate,
quotes:targetCurrency, 
...(range === "5Y" && { group : "month" })

}})


}
