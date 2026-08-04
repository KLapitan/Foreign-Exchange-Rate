import { useCurrencyContext } from "../context/currencyContext"
import ERButton from "./Button";

const Compare = () => {

const {compareList,favoriteList,baseComparisonValue,amount,handleToggleFavorite  }=useCurrencyContext();






return (
 <div className="font-JetBrains-Mono bg-BlackLight rounded-xl">
        <div className="flex flex-col sm:flex-row justify-between   mb-4 h-auto p-2">
        
          <span className="flex flex-row gap-1 text-gray-400 text-md  sm:text-md items-center sm:p-2  ">Multi-Currency:
              <span className="text-white text-sm sm:text-xl ">{amount}</span>
              <span className="text-white text-sm sm:text-xl">FROM</span>
              <span className=" text-white text-sm sm:text-xl">{baseComparisonValue}</span> 
             </span>
          <span className=" w-40 text-left sm:p-2 sm:text-right ">{favoriteList.length} {`${favoriteList.length > 1 ? "pairs" :"pair"}`} </span>
        </div>

      <ul className="overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent h-110 flex flex-col gap-3 p-2 ">
        {compareList.map((item) =>  {
      
        const isFavorite = favoriteList.some(fav => fav.to === item.currency)
        
        return (
        <li key={item.currency} className=" bg-BlackSR border-BlackSR shadow-md text-white  w-full  rounded-xl h-auto border p-2 ">
          <span className="w-full   flex flex-row  justify-between items-center">

        <span className="flex-2">
          {/* flag and name */}    
          <span className="flex flex-row  h-auto  w-auto items-center gap-2 sm:gap-4 sm:p-2">
        <img  src={item.flag ? `https://flagcdn.com/w40/${item.flag}.png` : null } alt={`${item.label}flag`} className={`${item.flag ? "w-6 h-6 rounded-full" : "hidden" }`}/> 

        {/* currecny and full name */}
        <span className="flex flex-col ">
        
        <span className={`${item.flag ? "ml-0" : "ml-10" } text-md sm:text-lg w-auto`}>{item.currency}</span>
        <span className={`${item.flag ? "ml-0" : "ml-10" } text-[8px] tracking-tightest sm:text-lg     text-gray-400`} >{item.country}</span>
        </span>
         
         {/* end of container of redborder */}
         </span>

          </span>



<span className="flex">
          {/* container of rates and star */}
          <span className="flex flex-row items-center gap-3 sm:p-2  w-auto">
          <span className="flex flex-col gap-2 items-end p-2">
          <span className="text-xs sm:text-lg 2xl:text-xl">{item.amount}</span>
          <span className="text-xs sm:text-md text-gray-400 2xl:text-xl">{item.rate}</span>
                  
          </span>
             <span>
            <ERButton className={` ${isFavorite ? " border w-7 h-7  border-PrimaryNeon rounded-sm" : " w-7 h-7 " } sm:w-10 sm:h-10 cursor-pointer` } onClick={ () => handleToggleFavorite({to:item.currency , toFlag:item.flag,rate:item.rate}) } ><img src={`${isFavorite ? "./images/icon-star-filled.svg"  :"./images/icon-star.svg"}`} className="place-self-center"/></ERButton>
          </span>
         </span>
</span>
       

        
        
        
          {/* end of container pink border   */}
          </span> 
          

      </li>
        )}
        )}
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







// july 21 todo 


//  so we are can compare now and star is working now 

// todo 

// if user click any favorite button or star button it will show to favorites and compare button


// breaking the task 

// currency converter favorite button 

// first it will show on favorites 

// then next on compare the  star is filled according to currenct conversion 

// so we need to check the current values of currency conveter data was passing through favorites 

//  after we see it now we check if the data is same as data we are passing inside the compare so example if the item.currency checks both the favorite for base country to targetcountry  it will show through favorite.

// for the comparison , we check only  the item.currency is same as we passed through the data of inside the favoriteList if same the star will be filled




// steps :




// we successfull compare the favorite and currencychecker 

// every favorited currency we clicked we checked inside the favoritList if same as the comparelist the isFavoritestar will show means it shows same value 

//  now the problem if we clickde favoritebutton in currency checker  we can remove 

//  but when we are clicking inside the compare list it doesnt remove 


// july 28, were done in compare ui 
// so we can added favorite via button or when click on the star , so we passed the object values through handleTOggleFavorite so when we clickde it will take its value wetherit came from currency checker or in the compareList