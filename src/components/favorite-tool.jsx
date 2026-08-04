import { useCurrencyContext } from "../context/currencyContext"
import ERButton from "./Button";

const Favorite = () => {

const {favoriteList ,handleToggleFavorite}=useCurrencyContext();

const favoriteContent = favoriteList.length > 0 ? true :false


return(

      <div className={` h-auto  p-2 ${favoriteContent ? "h-auto" : "h-40"}`}>
      
       {favoriteContent &&
        <>
          <h2 className="text-white  flex flex-row justify-between">FAVORITES <span>{favoriteList.length > 1 ? favoriteList.length + " pairs" : ""} </span></h2>
            <ul className="flex flex-col gap-3 h-auto mt-5  bg-BlackLight p-4 rounded-lg">
        {favoriteList.map((item) => {

            const isfilled = favoriteList.some(fav => fav.to === item.to);

        return (
        <li className="flex flex-row text-white bg-BlackLight  items-center    h-auto p-2  justify-between rounded-md">
        <span className="flex flex-col  sm:flex-row gap-2 sm:gap-20 max-w-3xl w-full sm:justify-between">
        <span className="flex flex-row gap-3 "> 
          <span  className="flex flex-row gap-2" ><img src={`https://flagcdn.com/w40/${item.fromFlag}.png`} alt="flagfrom" className="w-6 h-6 rounded-full"/> {item.from}</span>  {" / "}
           <span className="flex flex-row gap-2"><img src={`https://flagcdn.com/w40/${item.toFlag}.png`} alt="flagto" className="w-6 h-6 rounded-full"/> {item.to}</span>
          </span>

         
          <span className="text-gray-400">rate : <span className="text-md text-white">{item.rate}</span></span>
        </span>

          {/* button */}
          <span>
            <ERButton className={`${isfilled ? "border w-10 h-10 border-PrimaryNeon rounded-sm" : "w-10 h-10  " } flex  items-center justify-center ` } onClick={ () => handleToggleFavorite({to:item.to , toFlag:item.toFlag}) } ><img src={`${isfilled ? "./images/icon-star-filled.svg"  :"./images/icon-star.svg"}`}/></ERButton>
          </span>
          </li>
        )}
        )}
        </ul>
      
      </>
       }
       
      </div>

)

}
export default Favorite