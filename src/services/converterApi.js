const getCurrencyRateApi = async () => {
    // const response = await fetch('https://api.monobank.ua/bank/currency');
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(new Error('No currency rate there'));
}

// const myHeaders = new Headers();
// myHeaders.append("apikey", "L8sohpxBj4GhDlztkb61gMcECsCIZxLE");

// const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
// };

// const getCurrencyRateApi = () => {
//     fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }


export default getCurrencyRateApi;