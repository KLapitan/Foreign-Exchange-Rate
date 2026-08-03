import { useCurrencyContext } from "../context/currencyContext";

const FXInput = () => {

const {amount, handleAmountInput}=useCurrencyContext();

return (
<input type="text" className="border border-white w-32 max-w-lg h-13 text-white pl-2  text-xs" value={amount} onChange={handleAmountInput} placeholder="Enter an amount" />


)
}
export default FXInput;