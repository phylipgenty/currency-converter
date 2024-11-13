document.addEventListener('DOMContentLoaded', () => {
    const currencyList = ['USD', 'EUR', 'GBP', 'JPY', 'AUD','NGN']; 
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    currencyList.forEach(currency => {
        let option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        fromCurrency.appendChild(option1);

        let option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        toCurrency.appendChild(option2);
    });
});

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || !fromCurrency || !toCurrency) {
        alert('Please fill out all fields');
        return;
    }

    const apiKey = 'c499834b98d6509f3d0eb492'; // API key
    const url = `https://v6.exchangerate-api.com/v6/c499834b98d6509f3d0eb492/latest/USD`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const rate = data.conversion_rates[toCurrency];
        const result = (amount * rate).toFixed(2);

        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        document.getElementById('result').textContent = 'Error retrieving data. Please try again.';
    }
}