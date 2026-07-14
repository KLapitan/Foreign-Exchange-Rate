
import { useEffect ,useState } from "react";
import { createContext } from "react";

import * as api from "../services/currencyAPI";
import { useContext } from "react";
import convert from "../components/currency-conversion";

 const CurrencyContext = createContext(null)

const countriesCurrency = [
  { currency: "USD", country: "United States", flag: "us" },
  { currency: "EUR", country: "European Union", flag: "eu" },
  { currency: "GBP", country: "United Kingdom", flag: "gb" },
  { currency: "JPY", country: "Japan", flag: "jp" },
  { currency: "PHP", country: "Philippines", flag: "ph" },
  { currency: "AUD", country: "Australia", flag: "au" },
  { currency: "CAD", country: "Canada", flag: "ca" },
  { currency: "CHF", country: "Switzerland", flag: "ch" },
  { currency: "CNY", country: "China", flag: "cn" },
  { currency: "HKD", country: "Hong Kong", flag: "hk" },
  { currency: "SGD", country: "Singapore", flag: "sg" },
  { currency: "KRW", country: "South Korea", flag: "kr" },
  { currency: "INR", country: "India", flag: "in" },
  { currency: "MYR", country: "Malaysia", flag: "my" },
  { currency: "THB", country: "Thailand", flag: "th" },
  { currency: "IDR", country: "Indonesia", flag: "id" },
  { currency: "VND", country: "Vietnam", flag: "vn" },
  { currency: "TWD", country: "Taiwan", flag: "tw" },
  { currency: "NZD", country: "New Zealand", flag: "nz" },
  { currency: "MXN", country: "Mexico", flag: "mx" },
  { currency: "BRL", country: "Brazil", flag: "br" },
  { currency: "ARS", country: "Argentina", flag: "ar" },
  { currency: "CLP", country: "Chile", flag: "cl" },
  { currency: "COP", country: "Colombia", flag: "co" },
  { currency: "PEN", country: "Peru", flag: "pe" },
  { currency: "ZAR", country: "South Africa", flag: "za" },
  { currency: "EGP", country: "Egypt", flag: "eg" },
  {currency: "NGN", country: "Nigeria", flag: "ng" },
  { currency: "KES", country: "Kenya", flag: "ke" },
  { currency: "AED", country: "United Arab Emirates", flag: "ae" },
  { currency: "SAR", country: "Saudi Arabia", flag: "sa" },
  { currency: "QAR", country: "Qatar", flag: "qa" },
  { currency: "KWD", country: "Kuwait", flag: "kw" },
  { currency: "BHD", country: "Bahrain", flag: "bh" },
  { currency: "OMR", country: "Oman", flag: "om" },
  { currency: "TRY", country: "Turkey", flag: "tr" },
  { currency: "RUB", country: "Russia", flag: "ru" },
  { currency: "UAH", country: "Ukraine", flag: "ua" },
  { currency: "PLN", country: "Poland", flag: "pl" },
  { currency: "CZK", country: "Czech Republic", flag: "cz" },
  { currency: "HUF", country: "Hungary", flag: "hu" },
  { currency: "RON", country: "Romania", flag: "ro" },
  { currency: "SEK", country: "Sweden", flag: "se" },
  { currency: "NOK", country: "Norway", flag: "no" },
  { currency: "DKK", country: "Denmark", flag: "dk" },
  { currency: "ISK", country: "Iceland", flag: "is" },
];

const options = countriesCurrency.map((country)=> ({
    value:country.currency,
    label:country.country,
    flag:country.flag
}))



const CurrencyProvider  = ({children}) => {

const [rates,setRates]=useState([])
// state for the diffrence rates that we check from yesterday and todays rates
const [isChangeRates,setIsChangeRates]=useState([])

// state  for dropdwon on currency cchecker
// sendValue dropdown
const [fromSelectedCurrency, setFromSelectedCurrency]=useState(options.find((option) => option.value === "USD"))


// recieve dropdown
const [toSelectedCurrency ,setToSelectedCurrency]=useState(options.find((option) => option.value === "EUR"))


// singlerates state
const [singleRateCurrency,setSingleRateCurrency]=useState({})

// input 
const [amount,setAmount]=useState(1000)
const [convertedAmount,setConvertedAmount]=useState('')


// history/favorite/LogCOnversion

const [tools,setTools]=useState("history")

// state for favorites
// why array ? becausew we want to the valueos of slected currecy and show it in ui
const [favoriteList,setFavoriteList]=useState([])


// if nothing yet saved
const [favoriteContent,setFavoriteContent]=useState(false)

// compare 
// const [compareResults,setCompareResults]=useState([])



const duplicateRates = isChangeRates.length ? [...isChangeRates, ...isChangeRates] : [];

// we change from  checking by flag to finding it inside the array so it will accurate in displaying
const isFavorite = favoriteList.some((item) => item.from === fromSelectedCurrency.value && item.to === toSelectedCurrency.value)


// base currency that will be compared to
// const isBaseComparison = favoriteList.find((item) =>item.from === fromSelectedCurrency.value)


// history 
// 
const [currencyGraphData,setCurrencyGraphData]=useState([])

const [selectedRanged,setSelectedRanged]=useState("1D")


console.log(favoriteList)



// handlder EVENTS

const handleAmountInput = (e) => {
const value = e.target.value

setAmount(Number(value))
}

// switch the send and receive ui
const handleSwitchExchange = () => {
const tempValue =fromSelectedCurrency;

setFromSelectedCurrency(toSelectedCurrency)
setToSelectedCurrency(tempValue)

} 

const handleTools = (e) => {
setTools(e.target.value)
}

const handleFavorite =() => {
const saveCurrentCurrency = {
  id:crypto.randomUUID(),
  fromFlag:fromSelectedCurrency.flag,
  from:fromSelectedCurrency.value,
  to:toSelectedCurrency.value,
  toFlag:toSelectedCurrency.flag,
  amount,
  convertedAmount,
  rate: singleRateCurrency.rate,
 }

setFavoriteList((prev) => [...prev,saveCurrentCurrency])

setFavoriteContent(true)

// const saveComparisonValue = {
//   id:crypto.randomUUID(),
//   to:toSelectedCurrency.value,
//   convertedAmount,

// }

//   setCompareResults((prev) => [...prev, saveComparisonValue])

}






// useeEFfects (fetching rates , singlerates , conversion)

// conversion of currencies
useEffect(() => {
  if (!amount) return;

  const handleConversion = async () => {
    const result = await convert(
      fromSelectedCurrency.value,
      toSelectedCurrency.value,
      amount
    );

    const formattedResult = result.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    setConvertedAmount(formattedResult);
  };

  handleConversion();
}, [
  amount,
  fromSelectedCurrency.value,
  toSelectedCurrency.value,
]);

console.log(convertedAmount )


useEffect(()=> {
// for moving in nav section live market
  const loadRates = async () => {

  try {
  const todaysRates = await api.fetchAllRates();
  const yesterdayRates = await api.fetchYesterdayRates();


// because it is in array form insteadof accessing them item[0-100] we iterate it and turn into an objects
  const todaysRes = todaysRates.data.map((item) => {
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


//  merge the currrenct rate and previous rate to see donwtime
    const mergedRates = todaysRes.map((todayRateItem) => {
    const yesterdayRateItem =yesterdayRes.find((item) => (item.currency === todayRateItem.currency))
    

    if(!yesterdayRateItem){
    
    return {
      base:todayRateItem.base,
      currency:todayRateItem.currency,
      rate:todayRateItem.rate,
      change:null,
    }
    }

  // to see the down if the chagne is up or down
    const change = ((todayRateItem.rate - yesterdayRateItem.rate) /yesterdayRateItem.rate ) * 100

    return {
      base:todayRateItem.base,
      currency:todayRateItem.currency,
      rate:todayRateItem.rate,
      change:change.toFixed(2),
    
    }

    })

    setIsChangeRates(mergedRates)
    setRates(todaysRes)
  
  }catch(err){
   console.error ("Error fetching" , err)
  }
  
  }
  loadRates()
},[])
console.log(isChangeRates, "for loop")


useEffect(() => {
  const loadSingeleRates = async () => {
  try {
      const response = await api.fetchSingleRate(fromSelectedCurrency.value, toSelectedCurrency.value)

  setSingleRateCurrency(response.data) 


  }catch (err){
  console.error("Error in fetching data currency rate" ,err)
  }
  
  }
  loadSingeleRates()
},[fromSelectedCurrency, toSelectedCurrency])
console.log(singleRateCurrency , "rate of single")



useEffect(() => {
  const loadGraphDataRates = async (range) => {
  try{
        // todays date
      const toCurrentDate = new Date();
     
    //  previous date
      const fromCurrentDate = new Date(toCurrentDate);

    switch (range){
    case "1D" : 
          fromCurrentDate.setDate(toCurrentDate.getDate() - 1);
          break;
    case "1W" : 
          fromCurrentDate.setDate(toCurrentDate.getDate() - 7);
          break;
    case "1M" :
          fromCurrentDate.setMonth(toCurrentDate.getMonth() - 1);
          break;
    case "3M" :
          fromCurrentDate.setMonth(toCurrentDate.getMonth() - 3);
          break;
    case "1Y" :
          fromCurrentDate.setFullYear(toCurrentDate.getFullYear() - 1);
          break;
    case "5Y":
          fromCurrentDate.setFullYear(toCurrentDate.getFullYear() - 5);
          break;  

    default: 
          fromCurrentDate.setDate(toCurrentDate.getDate() - 1);
      
    
    }
      // to
      const formattedToCurrentDate = toCurrentDate.toISOString().split('T')[0];
        // from
      const formattedPreviousDate = fromCurrentDate.toISOString().split('T')[0];

    console.log(formattedPreviousDate, "start of data  graph")
      console.log(formattedToCurrentDate , "end of data  graph")


const response = await api.fetchGraphDataRates({
  baseCurrency: fromSelectedCurrency.value,
  previousDate: formattedPreviousDate,
  currentDate: formattedToCurrentDate,
  targetCurrency: toSelectedCurrency.value,
});

console.log(fromSelectedCurrency.value)

console.log(response.data , "graph data")

    setCurrencyGraphData(response.data)
  }catch (err){
   console.error("Error fetching Dates" ,err)
  }

  }
    loadGraphDataRates(selectedRanged);


},[fromSelectedCurrency .value,toSelectedCurrency.value,selectedRanged ])




return (
<CurrencyContext.Provider value={{rates , duplicateRates , fromSelectedCurrency,toSelectedCurrency ,options,amount , convertedAmount,singleRateCurrency,tools,isFavorite,favoriteContent,favoriteList,currencyGraphData,selectedRanged,setFromSelectedCurrency, setToSelectedCurrency, handleAmountInput ,handleSwitchExchange,handleTools,handleFavorite,setSelectedRanged
}}>

{children}



</CurrencyContext.Provider>


)


}
export default CurrencyProvider


export const useCurrencyContext = () => {
return useContext(CurrencyContext)
}