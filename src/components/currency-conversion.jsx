import axios from "axios";



const convert = async (base ,quote ,amount) => {
const api =import.meta.env.VITE_CONVERT_API;

try {

const response = await axios.get(`${api}/v2/rate/${base}/${quote}`)

console.log(response)
return amount * response.data.rate;
}catch(error){
console.error ("Error in fetcing the currency rate",error)
throw error;
}
}

 export default convert


//  given by the frankfurt API to convert based on the given based and quote 