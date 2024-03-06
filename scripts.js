const convertButton = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")

const convertValues = async () => {
    const imputCurrencyValue = document.querySelector(".imput-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then( response => response.json())
    
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const btcToday = data.BTCBRL.high

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(imputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(imputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(imputCurrencyValue / libraToday)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(imputCurrencyValue / btcToday)

    }
   
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(imputCurrencyValue)



}
function changeCurrency () {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
        
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
       
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
       
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/btc.png"
        
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
        
    }

convertValues()

}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)






