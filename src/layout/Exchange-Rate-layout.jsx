import { useEffect } from "react"
import ERHeader from "../components/Header"
import ERHero from "../components/Hero"

import axios from "axios"
import { useState } from "react"

const Layout =() => {

const [rates,setRates]=useState([])



// state for the diffrence rates that we check from yesterday and todays rates
const [isChangeRates,setIsChangeRates]=useState([])

const loopedRates = [...isChangeRates, ...isChangeRates];

const [baseRate,setBaseRate]=useState(null)


useEffect(() => {
  const fetchRates = async () => {
  

  try {
  // base was USD

  const baseURL =import.meta.env.VITE_FXRATE_API

  // today's rate 
  const todayRates = await axios.get(baseURL);
  
  // get todays day monday june 22 
  const yesterday = new Date(); 

  // /set yesterday by set method and then we get the date to day and minus -1 for yesterday 
   yesterday.setDate(yesterday.getDate() -1 )

    // sun june 21 2026 -> 2026 -06-21 
// we get the date and turn into string 2026-06-21 for comparsion for historical 
   const dateStr = yesterday.toISOString().split('T')[0]


  //  weget historical endpoint for USD in yesterday ddate  

  const yesterdayRates = await axios.get(`https://api.frankfurter.dev/v1/${dateStr}?base=USD`)


  const todayRes = todayRates.data.rates;
  const yesterdayRes = yesterdayRates.data.rates;

  const mergedRates = Object.keys(todayRes).map((currency) => {
  //we get the rates from today  (e.g  PHP - 60.111) todays 60.111 
    const today = todayRes[currency]
    // we get the yesterdayrate (e.g PHP - 60.002) yesterday 60.0222
    const yesterdayRate =yesterdayRes[currency]
  
      const change = ((today - yesterdayRate) / yesterdayRate) * 100

    return {
    currency,
    rate:today,
    change:change.toFixed(2)
    
    }

  })

  console.log(mergedRates, "merge rates")



// console.log(todayRes ,"Todays rates  ")
// console.log(yesterdayRes , "yesterday rates")

//       console.log(yesterday , " yesterday date")
//    console.log(yesterdayRates,"data fetched")
//    console.log(dateStr, "string we date that we get")
 
//   console.log(todayRates , "Base rate")
  



setIsChangeRates(mergedRates)
setBaseRate(todayRates.data.base)
  setRates(todayRes)
  

  }catch(err){
  console.error ("Error fetching" , err)
  
  }
  
  }

  fetchRates();

},[])

console.log(isChangeRates)
console.log(baseRate , "country base rate")


return(
<>
<ERHeader  rates={rates} base={baseRate}  changeRate={loopedRates}/>
<ERHero/>

</>
)
}
export default Layout