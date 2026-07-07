const Favorite = ({favoriteList, showFavContent}) => {
return(

      <div className={`border h-auto  border-white p-2 ${showFavContent ? "h-auto" : "h-80"}`}>
        <h2 className="text-white  flex flex-row justify-between">FAVORITES <span>{favoriteList.length > 1 ? favoriteList.length + " pairs" : ""} </span></h2>
      
       {showFavContent ? (
            <ul className="flex flex-col gap-3 h-auto ">
        {favoriteList.map((item) => (
        <li className="flex flex-row text-white bg-BlackLight items-center  border h-10 p-2  justify-between ">
        <span className="flex flex-row gap-3"> 
          <span  className="flex flex-row gap-2" ><img src={`https://flagcdn.com/w40/${item.fromFlag}.png`} alt="flagfrom" className="w-6 h-6 rounded-full"/> {item.from}</span>  {" / "}
           <span className="flex flex-row gap-2"><img src={`https://flagcdn.com/w40/${item.toFlag}.png`} alt="flagto" className="w-6 h-6 rounded-full"/> {item.to}</span>
          </span>
          <span>{item.rate}</span>
          </li>
        ))}
        </ul>
      
       ): (
       <h2 className="text-2xl text-gray-400 text-center mt-20 ">No favorites to shown</h2>

       )}
       
      </div>

)

}
export default Favorite