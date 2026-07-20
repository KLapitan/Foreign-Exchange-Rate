import { useCurrencyContext } from "../context/currencyContext"

const Compare = () => {

const {compareList,baseComparisonValue,amount }=useCurrencyContext();

return (
 <div>
          <h2 className="text-white">Multi-Currency: <span>{amount}<span></span> <span>{baseComparisonValue}</span>  </span></h2>

      <ul className="overflow-x-scroll h-110 flex flex-col gap-3 ">
        {compareList.map((item) => (
        <li key={item.id} className="text-white w-full ">
          <span className="w-full border flex flex-row justify-between items-center">
          <span className="flex flex-row  h-15 w-auto items-center gap-4 p-2">
          {/* flag and name */}    
        <img src={`https://flagcdn.com/w40/${item.flag}.png`
        } alt={`${item.label}flag`} className="w-6 h-6 rounded-full"/> 

        <span className="flex flex-col ">
        {/* currecny and full name */}
        
        <span className="text-md">{item.currency}</span>
        <span className="text-xs">{item.country}</span>
        </span>
         </span>

          <span className="flex flex-col gap-2 items-end p-2">
          <span className="text-md">{item.amount}</span>
          <span className="text-xs">{item.rate}</span>
          
          </span>



          </span>

      </li>
        ))}
      </ul>
      
      </div>


)


}
export default Compare
//   {item.currency} - {item.amount} {item.rate}

// here i think we need to put all the currencies on list and then when change the base for comparing it for multi currency

//  needed an array to show all currencies and then display it and then what user type on input and what user select base

//  example user types 1000 and base is PHP 

//  multicurrency will show all currecies as a list and then what is 1000 php equivalent to the other country





// PLANNING
// we neeed to fetch all currencies on for comaparing


//  so if the current currency -conversion base is USD  the list  of compare will  fetch all rates and comapre it based on input


//  state so we have already have state of loading all rates  that are used to shown LIVE MARKET


// api structure 
//  so now the api is fetching have params {base} and the base  , we created base with value with base so we need to changed it dynamically so every time user change the base it will change the compare list


// source of data ? the loadRate api call we created and rates state


// now we done getting the countries list  for comparing now 

//  we need to check the the conversion for all base on input


//  so the logic for our current conversion is base only for one mean base on the current conversion 

//  now we need to make it dynamicall and called it for all 