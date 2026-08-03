const ErrorMessage = ({className, children}) => {


return (
<div className="h-40 flex items-center justify-center ">
<span className={`${className}`}>{ children }</span>
</div>

)
}
export default ErrorMessage