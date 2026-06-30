import { useState, useEffect } from "react";
import axios from "axios";
import FXInput from "./input"
import Dropdown from "./dropdown-currency"
import convert from "./currency-conversion";




const ERHero = () => {
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

// for us to know what user select on the currency dropdown
// sendValue dropdown
const [fromSelectedCurrency, setFromSelectedCurreny]=useState(options.find((option) => option.value === "USD"))

// recieve dropdown
const [toSelectedCurrency ,setToSelectedCurrency]=useState(options.find((option) => option.value === "EUR"))


// input
const [amount,setAmount]=useState(1000)
const [convertedAmount,setConvertedAmount]=useState('')

const handleAmountInput = (e) => {
const value = e.target.value

setAmount(Number(value))
}


useEffect(() => {
if(!amount) return  ;

// we change the number into a number  not in a string
const handleConversion = async () => {
const result = await convert(
fromSelectedCurrency.value,
toSelectedCurrency.value,
amount
)

const formattedResult = result.toLocaleString("en-US",{
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})


//  because every stroke it gets so we can use setitmout or useffect
setConvertedAmount(formattedResult)

}
 handleConversion()

},[amount,fromSelectedCurrency,toSelectedCurrency])



console.log(convertedAmount )

// console.log(typeof convertedAmount)


// switch the send and receive ui
const handleSwitchExchange = () => {
const tempValue =fromSelectedCurrency

setFromSelectedCurreny(toSelectedCurrency)
setToSelectedCurrency(tempValue)

} 


// state of the singleRate

const [singleRateCurrency,setSingleRateCurrency]=useState([])

// check the single currency for the used conversion
useEffect(() => {
const singleRateChecker = async () =>{

const baseCurrency = fromSelectedCurrency.value ;
const singleRateURL = import.meta.env.VITE_SINGLERATECHECKER_API;

const targetCurrency = toSelectedCurrency.value;


try {

// path parameters
const  formattedRateURL =`${singleRateURL}/${baseCurrency}/${targetCurrency}`;


const response = await axios.get(formattedRateURL);



 setSingleRateCurrency(response.data)
}catch (error){
console.error("Error in fetching data currency rate" ,error)

}

}

singleRateChecker()



},[fromSelectedCurrency, toSelectedCurrency])

console.log(singleRateCurrency , "rate of single")


return(
<main className="h-auto bg-black">
    <section className="h-auto max-w-6xl  w-full p-3 font-JetBrains-Mono border-white border ">
      <h2 className=" text-white font-bold text-lg">CHECK THE RATE</h2>

{/* container for 2 currency change checker */}
        <div className=" h-auto  flex flex-col gap-5 items-center p-4 bg-BlackLight rounded-2xl border border-amber-600">

        {/* send container */}
          <div className="bg-BlackSR h-30 w-full max-w-lg flex flex-col p-2 rounded-lg border border-green-400  gap-4 ">
              <span className="text-white/60 text-lg font-bold ">SEND</span>

              <div className="w-auto flex flex-row justify-between">
                <FXInput amount={amount} onChangeInput={handleAmountInput}/>

                {/* dropdown */}
               
                <Dropdown value={fromSelectedCurrency} onChange={setFromSelectedCurreny} options={options}/>
              
              </div>
          
          </div>

          {/* exchange image- */}
            <div className="w-20 h-20  ">
            <button className="w-full  h-full border border-white rounded-md active:border-2 hover:cursor-pointer active: " onClick={handleSwitchExchange}>
              <img src="/images/icon-exchange-vertical.svg" alt="excange-icon" className="w-30 h-10" />
            </button>
            
            </div>


          {/* receive */}
          <div className="bg-BlackSR h-27 w-full max-w-lg p-2 rounded-md border border-white flex flex-col gap-3">
              <span className="text-white/60 text-lg font-bold ">RECEIVE</span>

              <div className="w-auto flex flex-row justify-between items-center">
                <span className="text-2xl text-PrimaryNeon font-bold "> {convertedAmount}</span>
                {/* dropdown */}

   
               
                <Dropdown  value={toSelectedCurrency} onChange={setToSelectedCurrency} options={options}/>
               
              </div>
          
          </div>
           {/* rate log conversion favorite */}
          <div className="max-w-full w-full h-25 flex flex-col gap-1">
                     {/* dashed border */}
               <div className="border border-dashed  border-gray-500 w-full  "/>

                  {/* rate  */}
                  <div className="flex flex-col items-center justify-center border  ">
                    <span className="flex flex-row gap-2 text-white font-JetBrains-Mono text-xs h-10 items-center">
                    <span> 1 {" "}
                    {singleRateCurrency.base} =
                    </span>
                      <span>
                      {singleRateCurrency.rate} {" "}
                      {singleRateCurrency.quote}
                      </span>
                      </span>
                  </div>

                  {/*favorite log conversion  */}
                  <div className="font-JetBrains-Mono flex flex-row gap-2 items-center justify-center">
                  <button className="bg-PrimaryNeon text-black text-xs px-3 py-2  font-bold flex flex-row items-center justify-center gap-1 rounded-md hover:bg-PrimaryNeon/80 cursor-pointer"><img src="/images/icon-star-black.svg" className="w-4 h-4"/>FAVORITED</button>
                  <button className="border border-PrimaryNeon text-center text-white px-2 text-xs py-2 rounded-md active:bg-PrimaryNeon active:text-black font-semibold cursor-pointer tracking-normal">LOG CONVERSION</button>
                  
                  </div>
         </div>


        </div>


    </section>





</main>
)}
export default ERHero



//  for input we will try to create a state that wil track the amount nummber that the user will check on 


//  so for us to interact input and currency dropdown we will put in on the parent so it will track both

// so next step is to getcurrent value of fromSelectedCurreny and toSelectedCurrenct and its amount to show the value of it


// so we dont need to check the from our created one is same on given api , it usually used on DISPLAYing ui ,and changing ui 


// so we have the currenc conversion formula given in the api 

// earlier we tried to convert using hardcoded input but now , we want to used the dynamically input amount of user, the selected from crurreny to selected to currency


// so for us to to formate the given number from 1000 to 1,000 with commas 
// so we change the state instead of empty string we put 1000 (number) as default value

// then we change return in convert to anumber and remove to be fixed() because it is for strings

// then result we change the parsefloat(amount) to amount 

//  and then we save the formatted into a variable named formatted result and use toLocaleString("en-US" , maxfractiondigits: 2 ,minFractiondigits:2) to format the given value 10,0000 

// minimum and maxmiumfraction is what we get from decimal  and it is an option when we used tolocalestring(),sometimes weget 0.122 like that minmum use .12 while maximum .56987 .56 




// todo 

// switch the send and recive value if the send value USD and recive value is PHP , if we swtiched it PHP to USD


// for us to switch the value of send and receive

// 1.  flag the switch 
//  -- state [isSwitch,setIsSwitch]=useState(false)

//  create a variable let FXSwitch;
//  meaning we just switch the selected currency 

// if false  we dont switch  still the same   USD  => PHP 

//  if true we switch PHP => USD


//  so we switched it  by using isSwitchedflag

// here if we think more about the process 


//  2. state of fromSelectedCurrency and ToSelectedCurrency

// -- should we switch the state meaning [fromSelectedCurrency, ToSelectedCurrency] = [toSelectedCurrency,fromSelectedCurrency] 

//  -- or do we need to create a new state that will copy the 2 state? 

//  -- or we just do step 1 flagged


//  the problem of using switchflags is we just switching the ui  but for us to fully switched it ,as we think about it 


// The SEND dropdown stores the selected currency in
// fromSelectedCurrency.

// The RECEIVE dropdown stores the selected currency in
// toSelectedCurrency.

// Initially:

// SEND    -> USD
// RECEIVE -> EUR

// When the user clicks the switch button, we don't create
// new state and we don't change which dropdown owns which
// state.

// Instead, we swap the values stored in the two states.

// After swapping:

// SEND    -> EUR
// RECEIVE -> USD


// and also w create a variable temp inside ,because we now react schedules when update only if some action will trigger it will be only be changed

//  so temp = fromSelectedCurrency = rembers the old value USD

// setFromSelectedCurrency(toSelectedCurrency)
// seToSelectedCurrency(temp)

// becasue react udpate issue 

// send euro
// recieve euro

//  with temp we do safe conversion 

// receive with its temp it rembers its old value until it retrigger renders




// # 📖 Single Rate Checker (Frankfurter API)

// ## Goal

// Display the current exchange rate between two selected currencies.

// Example:

// ```text
// 1 USD = 61.837 PHP
// ```

// The Frankfurter API provides an endpoint for getting the exchange rate between two currencies.

// ```text
// https://api.frankfurter.dev/v2/rate/USD/PHP
// ```

// ---

// ## Step 1 - Where do the currencies come from?

// The exchange rate depends on the currencies selected in the two dropdowns.

// Our application stores them in two pieces of state.


// const [fromSelectedCurrency, setFromSelectedCurrency] = useState(...);
// const [toSelectedCurrency, setToSelectedCurrency] = useState(...);
// ```

// At first, I thought I could directly use these states in the API request.

// const baseCurrency = fromSelectedCurrency;
// const toCurrency = toSelectedCurrency;
// ```

// ### Problem #1

// The values stored in these states are **not strings**.

// Because they come from **React Select**, each selected option is an object.

// Example:


// {
//   value: "USD",
//   label: "United States",
//   flag: "us"
// }


// The Frankfurter API does **not** understand this object.

// It only expects the currency code.

// Expected:


// USD


// Received:

// {
//   value: "USD",
//   label: "United States",
//   flag: "us"
// }


// If I send the entire object, the request will fail because the API only accepts a string representing the currency code.

// ### Solution #1

// Access only the **value** property.

// const baseCurrency = fromSelectedCurrency.value;
// const toCurrency = toSelectedCurrency.value;


// Now the variables contain:


// baseCurrency = "USD"
// toCurrency = "PHP"



// ## Step 2 - Making the API Request

// At first I tried using Axios query parameters.


// axios.get(singleRateURL, {
//   params: {
//     baseCurrency,
//     toCurrency,
//   },
// });


// ### Problem #2

// Using `params` creates a **query parameter URL**.

// Axios automatically builds a URL similar to this:


// https://api.frankfurter.dev/v2/rate?baseCurrency=USD&toCurrency=PHP


// After checking the Frankfurter API documentation, I realized that this is **not** the expected URL format.

// The API endpoint is:


// https://api.frankfurter.dev/v2/rate/USD/PHP


// Notice that the currencies are **inside the URL path**, not after a `?`.

// This means the API uses **path parameters**, not query parameters.


// ## Query Parameters vs Path Parameters

// ### Query Parameters

// Query parameters appear after a question mark (`?`).

// Example:


// https://api.example.com/latest?base=USD&symbols=PHP

// Axios:


// axios.get(url, {
//   params: {
//     base: "USD",
//     symbols: "PHP",
//   },
// });


// Axios automatically generates:

// ...?base=USD&symbols=PHP


// ### Path Parameters

// Path parameters are part of the URL itself.

// Example:


// https://api.frankfurter.dev/v2/rate/USD/PHP


// URL breakdown:


// https://api.frankfurter.dev
//         │
//         └── Server

// /v2/rate
//     │
//     └── Endpoint

// /USD
//  │
//  └── Base Currency

// /PHP
//  │
//  └── Target Currency


// Because the Frankfurter API expects path parameters, Axios cannot build this automatically.

// I need to construct the URL myself.

// ## Solution #2

// Use a template literal to build the endpoint.


// const response = await axios.get(
//   `${singleRateURL}/${baseCurrency}/${toCurrency}`
// );


// If:


// baseCurrency = "USD"
// toCurrency = "PHP"


// The final request becomes:


// https://api.frankfurter.dev/v2/rate/USD/PHP


// This matches the API documentation exactly.

// ## Step 3 - Save the Response

// The API returns data similar to:

// {
//   "amount": 1,
//   "base": "USD",
//   "quote": "PHP",
//   "rate": 61.837
// }


// Store the response in state.


// setSingleRateCurrency(response.data);


// Now I can access the exchange rate anywhere in my component.

// Example:


// singleRateCurrency.rate


// Which can be displayed as:


// 1 USD = 61.837 PHP


// ## Step 4 - When should the API run?

// The exchange rate should update whenever the user changes either dropdown.

// That is why `useEffect` depends on both selected currencies.


// useEffect(() => {
//   // Fetch the latest exchange rate
// }, [fromSelectedCurrency, toSelectedCurrency]);


// This tells React:

// > Whenever `fromSelectedCurrency` or `toSelectedCurrency` changes, fetch the latest exchange rate again.


// # Mental Model

// Whenever working with an API, ask these two questions first.

// ### 1. What data do I currently have?

// Examples:

// - String
// - Number
// - Object
// - Array

// In this project:


// {
//   value: "USD",
//   label: "United States",
//   flag: "us"
// }




// ### 2. What data does the API expect?

// Possible formats:

// **Query Parameters**


// ?base=USD&symbols=PHP


// **Path Parameters**


// /rate/USD/PHP


// **JSON Request Body**


// {
//   "base": "USD",
//   "to": "PHP"
// }


// If the data I have does not match what the API expects, the request will fail.


