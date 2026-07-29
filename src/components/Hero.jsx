import FXInput from "./input"
import Dropdown from "./dropdown-currency"


import Tools from "./tools";
import { useCurrencyContext } from "../context/currencyContext";





const ERHero = () => {

const {fromSelectedCurrency, setFromSelectedCurrency,toSelectedCurrency,setToSelectedCurrency,options,singleRateCurrency,  convertedAmount,favoriteList ,handleSwitchExchange ,handleToggleFavorite,handleLoggedConversion}=useCurrencyContext();

const isActiveFavorite = favoriteList.some((item) => item.from === fromSelectedCurrency.value && item.to === toSelectedCurrency.value)

console.log(fromSelectedCurrency,"dropdown ui")
console.log(toSelectedCurrency, "dropdown ui")
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
                <FXInput />

                {/* dropdown */}
               {/* only dropdown has props  */}
                <Dropdown value={fromSelectedCurrency} onChange={setFromSelectedCurrency} options={options}/>
              
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
                  <button className={` ${isActiveFavorite? "bg-PrimaryNeon text-black px-4 " : " bg-BlackLight text-white border-PrimaryNeon px-5 "}  border text-xs  py-2 font-bold flex flex-row items-center justify-center gap-1 rounded-md hover:bg-PrimaryNeon/80 cursor-pointer`} onClick={() => handleToggleFavorite({to:toSelectedCurrency.value , toFlag:toSelectedCurrency.flag, rate:singleRateCurrency.rate})}><img src={`${isActiveFavorite ? " /images/icon-star-black.svg " :" /images/icon-star.svg " }`} className={`${isActiveFavorite ?  " w-4 h-4 " : " w-3 h-4 mr-1 "}`} />{isActiveFavorite ? "FAVORITED" :"FAVORITE"}</button>
                  <button className="border border-PrimaryNeon text-center text-white px-2 text-xs py-2 rounded-md active:bg-PrimaryNeon active:text-black font-semibold cursor-pointer tracking-normal" onClick={handleLoggedConversion}>LOG CONVERSION</button>
                  
                  </div>
         </div>


        </div>


          {/* favorite/favorited /log conversion */}
         <Tools />
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




//  Favorite/Favorited / log conversion 

// favorite /Favorited

// favorite when it unpinned and favorited if pinned 

//questions

// where do we get the data?

//  from the  From/toSelectedCurrency state and the amount/convertedamount state

// from the currency convert what do we need to show on the favorite state

// currency ? or  currency with values

// state fromSelected/toSelected currency / state fromSelected/toSelected currency and amount/convertedamout state 

// check if the user want this currency selection to favorite/favorited 


//favorite/favorited state

// display the data that comes from the fromSelected/toSelectedCurrency dropdownState and for values is Amount,convertedAMount State

// we created an handlerEvent that will handle when the use favorite the current currencychecker

//  first is we get the value of current by formSelected and toselectedCurreny and 

// second we created a variable and save it as and object to create new object consisting the value we get form currenct state of currency

// const setFavorite = {
    // currencyBase:fromSelectedCurrency.value,
    // currencyto:toSelectedCurrency.value,

// }

// and save it to our created state array FavoriteList


// compare 

// list of toSelectedValue that was added to favorite and show the value of 1000 in the toslected currecny


// compare the user input value from different type of currency and  display it

// example 1000 PHP compare it to USD <EURO ,JAPAN ...etc


// where will the data will be comming through? 

//  so we created an array for favorite we can used it so the favorite one and compare has same value 

// but the data will be shown is only ToSelectedValue. because we are comparing it  but the value of the header will be th fromselected because it is the one we have the value and show what we compare



//  do we need a state so it will show the ones we added to compile them for our base currency

// favorite so we need to put the rate of each single in the favorite 

// we can check like this ? rate: singleRateCurrency.rate??


// in COMPARE tools compare we just need to delete and favorite it again

//



// favorite Puting single rate on the each favorite 



// where the data will be coming from so we have created a favoritelist array where we save the current currency checker 

// we created a saveCurrentCurrency

//  

// const saveCurrentCurrency = {
//   id:crypto.randomUUID(),
//   fromFlag:fromSelectedCurrency.flag,
//   from:fromSelectedCurrency.value,
//   to:toSelectedCurrency.value,
//   toFlag:toSelectedCurrency.flag,
//   amount,
//   convertedAmount,
//   rate:singleRateCurrency,
// }

// output we need  is 

//  USD / PHP                                               61.98


// PROBLEM
// so the problem is we save the rate as singlerateCheker and save it in a array form

// whenever we saved the current  crrency  eg. USD /PHP 61.98

// when we change the current currency USD/EURO  0.8888     

// USD/PHP  0.8888        
// USD/EURO  0.8888     

//  it look like this


// do we need to changed the singleRatechecker ? 
// do we need to transform the given data of singleRAteChker

//
// {
//  base: "USD"
// date: "2026-07-07"
// quote: "GBP"
// rate: 0.74913
// }


// to understand the problem we have is we are have problem in reference vs value . 

// the data of singlerateChecker is giving us diffrent value always because it always calls the api and  return us new  whole object with new data inside

// answer

// first we do is save it our savecurrency and put a property named rate


// const saveCurrentCurrency = {

// rate:singleRateCheker.rate
// }

// but thing is WHen we displaying it still returns new object for all and not retain the old object that save for the first save of currency 

// thats when i check the ui  so favoriteList that we map is wrong when displaying rate , instead of  <span>{item.rate}</span>  , we dsiplaying it like this  <span>{singlerateChecker.rate}</span>

//  so it shows like its wrong every save still returns new for all rates for the list of favlorites


