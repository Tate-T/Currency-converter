const getCurrencyRateApi = async () => {
    const response = await fetch();
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(new Error('No currency rate there'));
}

export default getCurrencyRateApi;