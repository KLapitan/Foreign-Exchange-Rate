import { useState } from "react";
import FXInput from "./input"
import Dropdown from "./dropdown-currency"
import convert from "./currency-conversion";

import { useEffect } from "react";


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
  { code: "PEN", country: "Peru", flag: "pe" },
  { code: "ZAR", country: "South Africa", flag: "za" },
  { currency: "EGP", country: "Egypt", flag: "eg" },
  {currency: "NGN", country: "Nigeria", flag: "ng" },
  { currency: "KES", country: "Kenya", flag: "ke" },
  { currency: "AED", country: "United Arab Emirates", flag: "ae" },
  { code: "SAR", country: "Saudi Arabia", flag: "sa" },
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
setAmount(Number(e.target.value))
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

return(
<main className="h-auto bg-black">
    <section className="h-screen max-w-6xl  w-full p-3 font-JetBrains-Mono border-white border ">
      <h2 className=" text-white font-bold text-lg">CHECK THE RATE</h2>

{/* container for 2 currency change checker */}
        <div className=" h-auto  flex flex-col gap-5 items-center p-2 bg-BlackLight rounded-lg border border-amber-600">

        {/* send container */}
          <div className="bg-BlackSR h-30 w-full flex flex-col p-2 rounded-md border border-green-400  gap-4 ">
              <span className="text-white/60 text-lg font-bold ">SEND</span>

              <div className="w-auto flex flex-row justify-between">
                <FXInput amount={amount} onChangeInput={handleAmountInput}/>

                {/* dropdown */}
                <Dropdown value={fromSelectedCurrency} onChange={setFromSelectedCurreny} options={options}/>
              
              </div>
          
          </div>

          {/* exchange image- */}
            <div className="w-20 h-20  ">
            <button className="w-full  h-full border border-white rounded-md active:border-2 hover:cursor-pointer active: ">
              <img src="/images/icon-exchange-vertical.svg" alt="excange-icon" className="w-30 h-10" />
            </button>
            
            </div>


          {/* receive */}
          <div className="bg-BlackSR h-27 w-full p-2 rounded-md border border-white flex flex-col gap-3">
              <span className="text-white/60 text-lg font-bold ">RECEIVE</span>

              <div className="w-auto flex flex-row justify-between items-center">
                <span className="text-2xl text-PrimaryNeon font-bold "> {convertedAmount}</span>
                {/* dropdown */}
                <Dropdown  value={toSelectedCurrency} onChange={setToSelectedCurrency} options={options}/>
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