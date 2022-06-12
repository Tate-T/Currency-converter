const getCurrencyRateApi = async () => {
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(new Error('No currency rate there'));
}

export default getCurrencyRateApi;