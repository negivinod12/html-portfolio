const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

const button = document.querySelector("button");

const fromVal = document.querySelector(".from select");
const toVal = document.querySelector(".to select");

const msg = document.querySelector(".msg");


for(let select of dropdowns){
    for(code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.name === "from" && code === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && code === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

const updateExchangeRate = async () => {
    let amt = document.querySelector(".amt");
    let amtVal = amt.value;
    if(amtVal === "" || amtVal < 1){
        amt.value = "1";
    }
    //console.log(fromVal.value, toVal.value);
    const URL = `${baseURL}/${fromVal.value.toLowerCase()}/${toVal.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    //console.log(response);
    let data = await response.json();
    //console.log(data);
    let rate = data[toVal.value.toLowerCase()];
    //console.log(rate);
    let exchange = rate * amtVal ;

    chagneMsg(amtVal, exchange);    
}

button.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
})

const chagneMsg = (amtVal, exchange) => {
        msg.innerText = `${amtVal} ${fromVal.value} = ${exchange} ${toVal.value}`
}

window.addEventListener("load", () => {
    updateExchangeRate();
})

// document.addEventListener("DOMContentLoaded", () => {  // alternate way to do above one 
//     updateExchangeRate();
// });


  
