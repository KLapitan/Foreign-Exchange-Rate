const Compare = ({isBaseComparison, compareResults }) => {

return (
 <div>
          <h2 className="text-white">Multi-Currency <span><span>{isBaseComparison.amount}</span> <span>{isBaseComparison.from}</span>  </span></h2>

      <ul>
        {compareResults.map((item) => (
        <li key={item.id} className="text-white">{item.to} - {item.convertedAmount}</li>
        ))}
      </ul>
      
      </div>


)


}
export default Compare


// here i think we need to put all the currencies on list and then when change the base for comparing it for multi currency

//  needed an array to show all currencies and then display it and then what user type on input and what user select base

//  example user types 1000 and base is PHP 

//  multicurrency will show all currecies as a list and then what is 1000 php equivalent to the other country