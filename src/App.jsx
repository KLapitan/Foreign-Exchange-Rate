import Layout from "./layout/Exchange-Rate-layout";
import CurrencyProvider from "./context/currencyContext";


const App = () => {
return(
<CurrencyProvider>

<Layout/>
</CurrencyProvider>

)
}
export default App;