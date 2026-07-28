import { useCurrencyContext } from "../context/currencyContext"
import ERButton from "./Button";
const LogConversion = () => {
const {logList,formatLogRelativeTime, handleDeleteLogItem} = useCurrencyContext();
const isItemLog = logList.length > 0 ? true : false

return(
<section className="h-auto bg-BlackLight">
{isItemLog ? 
 <ul className="h-auto flex flex-col gap-2 ">
    {logList.map((item) => (
      <li key={item.id} className="border border-white h-auto p-2 flex flex-col w-auto rounded-lg">

          {/* date and rate together with border green */}
      <span className="flex flex-row gap-2 text-xs justify-between border border-green-600">
        <span>
        <span>Date: </span>
        <span>{formatLogRelativeTime(item.loggedAt)}</span>
        </span>

          <span>
            rate:  {item.rate}
          </span>
      </span>



        {/* send ,receive ,delete  item container */}
      <span className="flex flex-row border border-PrimaryNeon p-2 gap-2">

          {/* send and reeive items only */}
          <span className="flex  flex-1 flex-col md:flex-row gap-2 w-auto items-center justify-center border border-pink-500">

            {/* send ui  text*/}
            <span className="  flex-col flex  flex-1 border border-red-800"> 
              <span className="flex-1  flex justify-between">
              
            <span>SEND </span>
            <span>AMOUNT </span>
              
              </span>
              
              <span className="flex flex-row justify-between">
              <span>{item.fromCurrency}</span>
              <span>{item.amount}</span>
              </span>

            </span>


              <span className="w-17  flex place-content-center h-4">
              <img src="/images/icon-arrow-right.svg"/>
              </span>

            {/* recvie ui text */}
               <span className="  flex-col flex  flex-1 border border-red-500"> 
              <span className="flex-1  flex justify-between">
                <span>RECEIVE </span>
            <span>AMOUNT </span>
              
              </span>
              
              <span className="flex flex-row justify-between">
              <span>{item.toCurrency}</span>
              <span>{item.convertedAmount}</span>
              </span>

            </span>
          </span>

          
        <ERButton className="flex  items-center"><img src="/images/icon-delete.svg" alt="delete icon" onClick={() => handleDeleteLogItem({toCurrency:item.toCurrency})}/></ERButton>
     
      </span>
      
          
      
            
      </li>
    
    
    
    
    
    
    
    
    ))}




</ul> : <h2 className="text-gray-400">NO CONVERSIONS LOGGED YET </h2>}
</section>

)

}
export default LogConversion

//your log is session is pravate ton only to this browser


// meaning we need to use sessionStorage to store the items on log conversion


// so first we change setLogList((prev) => [...prev, formattedLogItem]);
//  becasue it is asynchronous update it will update when it renders 



// doin this will only get the old value of loglist array and not get the new added item
// setLogList((prev) => [...prev, formattedLogItem]);

// sessionStorage.setItem("LogItems", JSON.stringify(logList)); 


//  so we change it to this

// setLoglist((prev) => {   

// const updatedLogItems = [...prev,logItems]

// we set the item to updatedLogitems so that every new item we get will be save inide the sessionstorage

// sessionStorage.setItem("LogItems" , updateLogItems)

// then we just return when user add more items and that items added also 
// return updatedLogItems;
  //   })


// next for us to get our items

//  in our state for LogConversion aray 
// we initialize the array to get the items on sessionstorrage thatwe set named "LogItems"

// so this LogItems stored our items for our session in this tab


// const [logList,setLogList] = usestate(() => {

  // const storedItemLogs = sessionStorage.getItem("LogItems")

// return storedItemsLogs ? json.parse(storedItemLogs) : []

// })

// here we set our logList with data inside the sessionstorage named storedLgItems , here it is saved as json body  and we parse for use to see it and use it on our ui



// todo  Create clear all meaning we remove all 

// another feature to favorite add star so we can unclicked it