import { useEffect } from "react"
import ERHeader from "../components/Header"
import ERHero from "../components/Hero"
// import { test } from "../components/currency-conversion"


import axios from "axios"
import { useState } from "react"

const Layout =() => {

const [rates,setRates]=useState([])



// state for the diffrence rates that we check from yesterday and todays rates
const [isChangeRates,setIsChangeRates]=useState([])

const duplicateRates = isChangeRates.length ? [...isChangeRates, ...isChangeRates] : [];

// const [baseRate,setBaseRate]=useState(null)


useEffect(() => {
  const fetchRates = async () => {
  

  try {
  // base was USD
  const base = import.meta.env.VITE_FXCHECKER_BASE
  const baseURL = import.meta.env.VITE_FXCHECKER_API

  // today's rate 
  const todayRates = await axios.get(baseURL , {
  params: {base }
  });
  
  // get todays day monday june 22 
  const yesterday = new Date(); 

  // /set yesterday by set method and then we get the date to day and minus -1 for yesterday 
   yesterday.setDate(yesterday.getDate() -1 )

    // sun june 21 2026 -> 2026 -06-21 
// we get the date and turn into string 2026-06-21 for comparsion for historical 
   const dateStr = yesterday.toISOString().split('T')[0]


  //  weget historical endpoint for USD in yesterday ddate  

  const yesterdayRates = await axios.get(baseURL , {
  params :{base , date:dateStr}
  })

// because it is in array form insteadof accessing them item[0-100] we iterate it and turn into an objects
  const todayRes = todayRates.data.map((item) => {
      const baseRate=item.base
      const todaysRate = item.rate;
      const todaysCurrency = item.quote
      

      return {
      base:baseRate,
      currency:todaysCurrency,
      rate:todaysRate
      }  
  });
  // const yesterdayRes = yesterdayRates.data?.rates; v1
  // check yesterday Rates v2
    const yesterdayRes = yesterdayRates.data.map((item) => {
    const baseRate=item.base;
    const yesterdaysCurrency =item.quote;
    const yesterdaysRate = item.rate;
    const yesterdaysDay = item.date;
    

    return {
     base:baseRate,
     currency:yesterdaysCurrency,
      date:yesterdaysDay,
      rate:yesterdaysRate
    
    }})


  console.log(yesterdayRes , "yesterday v2 rate")

  console.log( todayRes, "today v2 rate")
  console.log( typeof todayRes)

// merged rates to check up and down time

const mergedRates = todayRes.map((todayRateItem) => {
const yesterdayRateItem = yesterdayRes.find((item) => 
item.currency === todayRateItem.currency
) 
if(!yesterdayRateItem){

return{
 base:todayRateItem.base,
currency:todayRateItem.currency,
rate:todayRateItem.rate,
change:null,
}

}



// console.log( todayRateItem.currency,
//   yesterdayRateItem)

const change = ((todayRateItem.rate - yesterdayRateItem.rate ) /yesterdayRateItem.rate ) * 100

return {
 base:todayRateItem.base,
currency:todayRateItem.currency,
rate:todayRateItem.rate,
change:change.toFixed(2)

}

})


console.log(todayRes.base,"v2 country based")
console.log(mergedRates, "merge v2 rates")


  // const mergedRates = todayRes.map((currency) => {
  //we get the rates from today  (e.g  PHP - 60.111) todays 60.111 
    // const today = todayRes[currency]
    // we get the yesterdayrate (e.g PHP - 60.002) yesterday 60.0222
    // const yesterdayRate =yesterdayRes[currency]
  
    //   const change = ((today - yesterdayRate) / yesterdayRate) * 100

    // return {
    // currency,
    // rate:today,
    // change:change.toFixed(2)
    
  //    }

  // })

  // console.log(mergedRates, "merge rates")



// console.log(todayRes ,"Todays rates  ")
// console.log(yesterdayRes , "yesterday rates")

//       console.log(yesterday , " yesterday date")
//    console.log(yesterdayRates,"data fetched")
//    console.log(dateStr, "string we date that we get")
 
//   console.log(todayRates , "Base rate")
  



setIsChangeRates(mergedRates)

  setRates(todayRes)
  

  }catch(err){
  console.error ("Error fetching" , err)
  
  }
  
  }

  fetchRates();

},[])

console.log(isChangeRates, "for loop")



// CONVERT CHECKER

// useEffect(() => {
// const convertFetch  = async() => {
// await test() ;


// }
// convertFetch()

// },[])








return(
<>
<ERHeader  rates={rates}   slidingRate={duplicateRates}/>
<ERHero/>

</>
)
}
export default Layout