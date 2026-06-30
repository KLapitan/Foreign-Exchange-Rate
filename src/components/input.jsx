const FXInput = ({amount , onChangeInput}) => {

return (
<input type="text" className="border border-white w-32 max-w-lg h-13 text-white pl-2 " value={amount} onChange={onChangeInput} />


)
}
export default FXInput;