
import Select from "react-select";

const Dropdown =({options, value,onChange}) => {



return(
<Select
  options={options}
  value={value}
  onChange={onChange}
  formatOptionLabel={({ label, flag, value }) => (
    <div className="flex items-center gap-2">
      <img
        src={`https://flagcdn.com/w40/${flag}.png`}
        alt={label}
        className="w-6 h-6 rounded-full"
      />
    
      <span className="text-white active:text-black text-sm">{value}</span>
    </div>
  )}
  defaultValue={value}
  className="w-auto"
   styles={{
    control: (base) => ({
      ...base,
      backgroundColor: "#2A2A2A",
      border: "1px solid #3A3A3A",
      borderRadius: "12px",
      minHeight: "47px",
      boxShadow: "none",
      cursor: "pointer",
      padding:"0px",
    }),

    valueContainer: (base) => ({
      ...base,
      padding: "0px 6px",
    }),

    singleValue: (base) => ({
      ...base,
      color: "#fff",
    }),

    menu: (base) => ({
      ...base,
      borderRadius: "12px",
      overflow: "hidden",
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? "#171719" :  "#202022",
      color: "#000",
      padding: "10px 12px",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: (base) => ({
      ...base,
      color: "#fff",
    }),
  }}
/>




)

}
export default Dropdown

// dropdown currency changer

//  we install select  select-react 

// because in when we are rendering an image it wont accept it only accept ony html text


// we created a 2 state that will track the send and reacive currency

// for send currency we track the it using fromselectedCurreny

// for receive we track it by using toSelectedCurreny 


// we created an static data for the currency ,and not dyamic

