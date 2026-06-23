june 23 /2026

<!-- change api v1 to v2 -->

we change the api version from v1 to v2
so we change the value of todaysRate and yesterday rate

because in v1 it gave us json in full object so we access them via object.keys,entries like that to show on varius ui .

so we change it to version 2 . and gave us the api response with array objects .

so now when we access the the todays and yesterday rate by using dot notation.

because it gave us array objects we changed the given data for us to access nicely

<!-- change the data of todays and yesterday data -->

so we map through the todaysAPi data and turn into new object wherein we changed

from based USD
date:"2026-23-06" ,qoute:PHP , rate:61.540

to:
{currency: "PHP" ,rate:61.3040}

for todaysRAte

same as todaysrate we change the rate data for yesterday and

from

date:"2026-23-06" ,qoute:PHP , rate:61.540

to

{date:"2026-22-06" currency:PHP ,rate:61.3444}

here wechange the date to yesterday's date:

<!-- to check the up and down stream rate and shhown at header -->

now for us to access the up and down rates

we get the todays and yesterday rates,

so again we map and named it mergeRates

where in we map through todays. data and
check the currency if the same we will get that

and create a new object that will merge the data from todays and get the change stream rate

first we encououred where in we save the whole object inside the currency

<!-- first logic we wrote to get the  up and down currency  -->

const mergedRate = todaysRes.map((currency) => {
const today= todayres[currncy][reate]
const yesterday= yesterdayres[currncy]

})

currency = { currency: "AED", rate: 3.6725 }
rate = 0 (the index)

So the result becomes:

{
currency: { currency: "AED", rate: 3.6725 },
rate: undefined
}

and cause to be undefined

<!-- first problem cause to show undefined -->

return {
currency:currency,
rate:,
change:,
}

{currency :{currency,rate,change}, rate , change}

<!-- we need the value of currency to show -->

{currency:PHP}

for us to change the currency from the value we want

returnt{
currency:todaysRateItem.currency
}

still undefined so

we create a safe check
if the vvalue is undefined we fallback to todaysdata

if(!yesterdayRateItem){

return{
currency:todayRateItem.currency,
rate:todayRateItem.rate,
change:null,
}

}

todo :

currency converter

1. user will input a number to be converted/checked the rate of it
   - create a state that will user input will lived
   - code spliting and put the input in seperate component

2. we gonna create a dropdown icon where in the user can pick currency of their money to an designated currency they want to check
   - so when we clicked on an currency the output will based on the dropdown
     example : PHP = 1 USD = 61.8999  
     dropdown clicked : PHP/USD => PHP/EURO , usd change to eur => php = 1.00 Euro => 49.333

3. we gonna use the logic given from the api when converting a money

function convert(from, to, amount) {
fetch(`https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`)
.then((resp) => resp.json())
.then((data) => {
const convertedAmount = (amount \* data.rates[to]).toFixed(2);
alert(`${amount} ${from} = ${convertedAmount} ${to}`);
});
}

convert("EUR", "USD", 10);

4.  when we clicked on the exchange image the currency will change and the value will be changed also based on the cuurrency
