
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
  { currency: "CNH", country: "Chinese Yuan (Offshore)", flag: "cn" },
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




  { currency: "AFN", country: "Afghanistan", flag: "af" },
  { currency: "ALL", country: "Albania", flag: "al" },
  { currency: "AMD", country: "Armenia", flag: "am" },
  { currency: "ANG", country: "Curaçao", flag: "cw" },
  { currency: "AOA", country: "Angola", flag: "ao" },
  { currency: "AWG", country: "Aruba", flag: "aw" },
  { currency: "AZN", country: "Azerbaijan", flag: "az" },

  { currency: "BAM", country: "Bosnia and Herzegovina", flag: "ba" },
  { currency: "BBD", country: "Barbadian Dollar", flag: "bb" },
  { currency: "BDT", country: "Bangladesh", flag: "bd" },
  { currency: "BGN", country: "Bulgaria", flag: "bg" },
  { currency: "BIF", country: "Burundi", flag: "bi" },
  { currency: "BMD", country: "Bermuda", flag: "bm" },
  { currency: "BND", country: "Brunei", flag: "bn" },
  { currency: "BOB", country: "Bolivia", flag: "bo" },
  { currency: "BSD", country: "Bahamas", flag: "bs" },
  { currency: "BTN", country: "Bhutan", flag: "bt" },
  { currency: "BWP", country: "Botswana", flag: "bw" },
  { currency: "BYN", country: "Belarus", flag: "by" },
  { currency: "BZD", country: "Belize Dollar", flag: "bz" },

  { currency: "CDF", country: "Democratic Republic of the Congo", flag: "cd" },
  { currency: "CRC", country: "Costa Rica", flag: "cr" },
  { currency: "CUP", country: "Cuba", flag: "cu" },
  { currency: "CVE", country: "Cape Verde", flag: "cv" },

  { currency: "DJF", country: "Djibouti", flag: "dj" },
  { currency: "DOP", country: "Dominican Republic", flag: "do" },
  { currency: "DZD", country: "Algeria", flag: "dz" },

  { currency: "ETB", country: "Ethiopia", flag: "et" },
  { currency: "ERN", country: "Eritrean Nakfa", flag: "er" },

  { currency: "FJD", country: "Fiji", flag: "fj" },
  { currency: "FKP", country: "Falkland Islands", flag: "fk" },

  { currency: "GEL", country: "Georgia", flag: "ge" },
  { currency: "GHS", country: "Ghana", flag: "gh" },
  { currency: "GIP", country: "Gibraltar", flag: "gi" },
  { currency: "GMD", country: "Gambia", flag: "gm" },
  { currency: "GNF", country: "Guinea", flag: "gn" },
  { currency: "GTQ", country: "Guatemala", flag: "gt" },
  { currency: "GYD", country: "Guyana", flag: "gy" },
  { currency: "GGP", country: "Guernsey Pound", flag: "gg" },

  { currency: "HNL", country: "Honduras", flag: "hn" },
  { currency: "HTG", country: "Haiti", flag: "ht" },

  { currency: "ILS", country: "Israel", flag: "il" },
  { currency: "IMP", country: "Isle of Man Pound", flag: "im" },
  { currency: "IQD", country: "Iraq", flag: "iq" },
  { currency: "IRR", country: "Iran", flag: "ir" },

  { currency: "JEP", country: "Jersey Pound", flag: "je" },
  { currency: "JMD", country: "Jamaica", flag: "jm" },
  { currency: "JOD", country: "Jordan", flag: "jo" },

  { currency: "KGS", country: "Kyrgyzstan", flag: "kg" },
  { currency: "KHR", country: "Cambodia", flag: "kh" },
  { currency: "KMF", country: "Comoros", flag: "km" },
  { currency: "KZT", country: "Kazakhstan", flag: "kz" },
  { currency: "KPW", country: "North Korean Won", flag: "kp" },
  { currency: "KYD", country: "Cayman Islands Dollar", flag: "ky" },

  { currency: "LAK", country: "Laos", flag: "la" },
  { currency: "LBP", country: "Lebanon", flag: "lb" },
  { currency: "LKR", country: "Sri Lanka", flag: "lk" },
  { currency: "LRD", country: "Liberia", flag: "lr" },
  { currency: "LYD", country: "Libyan Dinar", flag: "ly" },
  { currency: "LSL", country: "Lesotho", flag: "ls" },

  { currency: "MAD", country: "Morocco", flag: "ma" },
  { currency: "MDL", country: "Moldova", flag: "md" },
  { currency: "MGA", country: "Madagascar", flag: "mg" },
  { currency: "MKD", country: "North Macedonia", flag: "mk" },
  { currency: "MMK", country: "Myanmar", flag: "mm" },
  { currency: "MNT", country: "Mongolia", flag: "mn" },
  { currency: "MOP", country: "Macau", flag: "mo" },
  { currency: "MUR", country: "Mauritius", flag: "mu" },
  { currency: "MRO", country: "Mauritanian Ouguiya (OLD)", flag: "mr" },
  { currency: "MRU", country: "Mauritanian Ouguiya (NEW)", flag: "mr" },

  { currency: "MVR", country: "Maldives", flag: "mv" },
  { currency: "MWK", country: "Malawi", flag: "mw" },
  { currency: "MZN", country: "Mozambique", flag: "mz" },
    { currency: "NAD", country: "Namibia", flag: "na" },
  { currency: "NPR", country: "Nepal", flag: "np" },
  { currency: "NIO", country: "Nicaraguan Córdoba", flag: "ni" },

  { currency: "PAB", country: "Panama", flag: "pa" },
  { currency: "PGK", country: "Papua New Guinea", flag: "pg" },
  { currency: "PKR", country: "Pakistan", flag: "pk" },
  { currency: "PYG", country: "Paraguay", flag: "py" },

  { currency: "RSD", country: "Serbia", flag: "rs" },
  { currency: "RWF", country: "Rwanda", flag: "rw" },

  { currency: "SBD", country: "Solomon Islands", flag: "sb" },
  { currency: "SCR", country: "Seychelles", flag: "sc" },
  { currency: "SDG", country: "Sudan", flag: "sd" },
  { currency: "SHP", country: "Saint Helena Pound", flag: "sh" },
  { currency: "SLE", country: "Sierra Leonean Leone", flag: "sl" },
  { currency: "SOS", country: "Somalia", flag: "so" },
  { currency: "SRD", country: "Suriname", flag: "sr" },

  { currency: "SSP", country: "South Sudanese Pound", flag: "ss" },
  { currency: "STN", country: "São Tomé and Príncipe", flag: "st" },
  { currency: "SVC", country: "Salvadoran Colón", flag: "sv" },
  { currency: "SYP", country: "Syria", flag: "sy" },
  { currency: "SZL", country: "Eswatini", flag: "sz" },

  { currency: "TJS", country: "Tajikistan", flag: "tj" },
  { currency: "TMT", country: "Turkmenistan", flag: "tm" },
  { currency: "TND", country: "Tunisia", flag: "tn" },
  { currency: "TOP", country: "Tonga", flag: "to" },
  { currency: "TTD", country: "Trinidad and Tobago", flag: "tt" },
  { currency: "TZS", country: "Tanzania", flag: "tz" },

  { currency: "UGX", country: "Uganda", flag: "ug" },
  { currency: "UYU", country: "Uruguay", flag: "uy" },
  { currency: "UZS", country: "Uzbekistan", flag: "uz" },

  { currency: "VES", country: "Venezuela", flag: "ve" },
  { currency: "VUV", country: "Vanuatu Vatu", flag: "vu" },
  { currency: "WST", country: "Samoa", flag: "ws" },


  { currency: "XAF", country: "Central African CFA", flag: "cm" },
  { currency: "XCG", country: "Caribbean Guilder (Curaçao & Sint Maarten)", flag: "cw" },
  { currency: "XCD", country: "East Caribbean", flag: "ag" },
  { currency: "XOF", country: "West African CFA", flag: "sn" },
  { currency: "XPF", country: "French Pacific", flag: "pf" },
  

  { currency: "YER", country: "Yemen", flag: "ye" },

  { currency: "ZMW", country: "Zambia", flag: "zm" },
  { currency: "ZWL", country: "Zimbabwe", flag: "zw" },
  { currency: "ZWG", country: "Zimbabwe", flag: "zw" },

  { currency: "XAG", country: "Silver", flag: null },
  { currency: "XAU", country: "Gold", flag: null },
  { currency: "XDR", country: "IMF Special Drawing Rights", flag: null },
  { currency: "XPD", country: "Palladium", flag: null },
  { currency: "XPT", country: "Platinum", flag: null },


];

const options = countriesCurrency.map((country)=> ({
    value:country.currency,
    label:country.country,
    flag:country.flag
}))



const CurrencyProvider  = ({children}) => {

const [liveRates,setLiveRates]=useState([])
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

// list of all rates for shown in the compare area
const [compareList,setCompareList]=useState([]);

// // state to track the pairs only
// const [FavoriteCompareList,setFavoriteCompareList]=useState([])

const baseComparisonValue = fromSelectedCurrency.value;





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

const handleToggleFavorite =(currency) => {

setFavoriteList((prev) => {

//check if favorite is list or not
  const existItem = prev.some(fav => fav.to === currency.to )

  if(existItem){
  // remove favorite
    return prev?.filter(fav => fav?.to !== currency.to)

  }



// value of currency check that passed to FavoriteList
const saveCurrentCurrency = {
  id:crypto.randomUUID(),
  fromFlag:fromSelectedCurrency.flag,
  from:fromSelectedCurrency.value,
  to:currency.to,
  toFlag:toSelectedCurrency.flag,
  amount,
  convertedAmount,
  rate: singleRateCurrency.rate,
 }

console.log(saveCurrentCurrency, "FOR COMAPARE AND FAVORITE LIST")




 return [...prev, saveCurrentCurrency] 
})


// in compare list we need to check that favorited one

// const matchItem = compareList.some((currency) => currency.currency ===saveCurrentCurrency.to)






setFavoriteContent(true)

}


const handleToggelStarred = (currency) => {
setFavoriteList((prev) => {

const  itemExistedStar= prev.some(fav => fav.to === currency)

if(itemExistedStar) {
return prev.filter(fav => fav.to !== currency)
}


return [...prev, itemExistedStar]

})

}

// star compared list and show length inside compare list





// useeEFfects (fetching LiveRates , singlerates , conversion)

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
  const loadLiveMarkets = async () => {

  try {
  const todaysRates = await api.fetchLiveMarket();
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
    setLiveRates(todaysRes)
  
  }catch(err){
   console.error ("Error fetching" , err)
  }
  
  }
  loadLiveMarkets()
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


// passed the value with objects so it will contains the
// we passed the ranged for NDJSON for getting group of month
const response = await api.fetchGraphDataRates({
  baseCurrency: fromSelectedCurrency.value,
  previousDate: formattedPreviousDate,
  currentDate: formattedToCurrentDate,
  targetCurrency: toSelectedCurrency.value,
  range: selectedRanged,
});

console.log(fromSelectedCurrency.value)

console.log(response.data , "graph data")

    setCurrencyGraphData(response.data)
  }catch (err){
   console.error("Error fetching Dates" ,err)
  }

  }
    loadGraphDataRates(selectedRanged);


},[fromSelectedCurrency.value,toSelectedCurrency.value,selectedRanged ])

useEffect(() => {
  if (!amount || !fromSelectedCurrency.value) return;
const loadCompareRates =  async ( )=> {


try{

const response = await api.fetchAllRates({ rateBase: fromSelectedCurrency.value});

const comparsionRates = response.data.map((item) => {
const comparisonInfo = options.find((C) => C.value === item.quote)

const comparisonAmount = amount *item.rate;

return {
currency:item.quote,
country:comparisonInfo?.label || item.quote, 
flag:comparisonInfo?.flag || null,
rate:item.rate,
amount:comparisonAmount.toLocaleString("en-US" , {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
}
});


console.log(comparsionRates , "FOR COMPARED FAVORITE")

setCompareList(comparsionRates)
}catch (err) {
console.error("Error in Fetching data" ,err )
}



}
loadCompareRates();

},[amount ,fromSelectedCurrency.value])


console.log(favoriteList, "loggin when star is filled")

return (
<CurrencyContext.Provider value={{liveRates , duplicateRates , fromSelectedCurrency,toSelectedCurrency ,options,amount , compareList,convertedAmount,singleRateCurrency,tools,isFavorite,favoriteContent,baseComparisonValue ,favoriteList,currencyGraphData,selectedRanged,setFromSelectedCurrency, setToSelectedCurrency, handleAmountInput ,handleToggelStarred ,handleSwitchExchange,handleTools,handleToggleFavorite,setSelectedRanged,setTools,
}}>

{children}



</CurrencyContext.Provider>


)


}
export default CurrencyProvider


export const useCurrencyContext = () => {
return useContext(CurrencyContext)
}