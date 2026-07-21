const ERButton = ({className, onClick, children}) => {

return (
<button className={`${className }`} onClick={onClick}>{ children }</button>

)

}
export default ERButton;