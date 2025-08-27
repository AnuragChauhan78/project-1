function resetLength() {
    document.getElementById('length-input').value = '';
    document.getElementById('length-result').textContent = '';
}

function resetWeight() {
    document.getElementById('weight-input').value = '';
    document.getElementById('weight-result').textContent = '';
}

function resetTemperature() {
    document.getElementById('temp-input').value = '';
    document.getElementById('temp-result').textContent = '';
}

function resetCurrency() {
    document.getElementById('currency-input').value = '';
    document.getElementById('currency-result').textContent = '';
}

function resetTime() {
    document.getElementById('time-input').value = '';
    document.getElementById('time-result').textContent = '';
}
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Set default values for currency conversion
    document.getElementById('currency-from').value = 'USD';
    document.getElementById('currency-to').value = 'EUR';
});

// Length conversion functions
function convertLength() {
    const input = parseFloat(document.getElementById('length-input').value);
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;
    
    if (isNaN(input)) {
        document.getElementById('length-result').textContent = 'Please enter a valid number';
        return;
    }

    // Convert to meters first (base unit)
    let meters;
    switch (fromUnit) {
        case 'meters': meters = input; break;
        case 'kilometers': meters = input * 1000; break;
        case 'centimeters': meters = input / 100; break;
        case 'millimeters': meters = input / 1000; break;
        case 'miles': meters = input * 1609.34; break;
        case 'yards': meters = input * 0.9144; break;
        case 'feet': meters = input * 0.3048; break;
        case 'inches': meters = input * 0.0254; break;
    }

    // Convert from meters to target unit
    let result;
    switch (toUnit) {
        case 'meters': result = meters; break;
        case 'kilometers': result = meters / 1000; break;
        case 'centimeters': result = meters * 100; break;
        case 'millimeters': result = meters * 1000; break;
        case 'miles': result = meters / 1609.34; break;
        case 'yards': result = meters / 0.9144; break;
        case 'feet': result = meters / 0.3048; break;
        case 'inches': result = meters / 0.0254; break;
    }

    document.getElementById('length-result').textContent = 
        `${input} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;
}

// Weight conversion functions
function convertWeight() {
    const input = parseFloat(document.getElementById('weight-input').value);
    const fromUnit = document.getElementById('weight-from').value;
    const toUnit = document.getElementById('weight-to').value;
    
    if (isNaN(input)) {
        document.getElementById('weight-result').textContent = 'Please enter a valid number';
        return;
    }

    // Convert to kilograms first (base unit)
    let kilograms;
    switch (fromUnit) {
        case 'kilograms': kilograms = input; break;
        case 'grams': kilograms = input / 1000; break;
        case 'milligrams': kilograms = input / 1000000; break;
        case 'pounds': kilograms = input * 0.453592; break;
        case 'ounces': kilograms = input * 0.0283495; break;
        case 'tons': kilograms = input * 1000; break;
    }

    // Convert from kilograms to target unit
    let result;
    switch (toUnit) {
        case 'kilograms': result = kilograms; break;
        case 'grams': result = kilograms * 1000; break;
        case 'milligrams': result = kilograms * 1000000; break;
        case 'pounds': result = kilograms / 0.453592; break;
        case 'ounces': result = kilograms / 0.0283495; break;
        case 'tons': result = kilograms / 1000; break;
    }

    document.getElementById('weight-result').textContent = 
        `${input} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;
}

// Temperature conversion functions
function convertTemperature() {
    const input = parseFloat(document.getElementById('temp-input').value);
    const fromUnit = document.getElementById('temp-from').value;
    const toUnit = document.getElementById('temp-to').value;
    
    if (isNaN(input)) {
        document.getElementById('temp-result').textContent = 'Please enter a valid number';
        return;
    }

    // Convert to Celsius first (base unit)
    let celsius;
    switch (fromUnit) {
        case 'celsius': celsius = input; break;
        case 'fahrenheit': celsius = (input - 32) * 5/9; break;
        case 'kelvin': celsius = input - 273.15; break;
    }

    // Convert from Celsius to target unit
    let result;
    switch (toUnit) {
        case 'celsius': result = celsius; break;
        case 'fahrenheit': result = (celsius * 9/5) + 32; break;
        case 'kelvin': result = celsius + 273.15; break;
    }

    document.getElementById('temp-result').textContent = 
        `${input} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
}

// Currency conversion functions (using approximate rates)
function convertCurrency() {
    const input = parseFloat(document.getElementById('currency-input').value);
    const fromCurrency = document.getElementById('currency-from').value;
    const toCurrency = document.getElementById('currency-to').value;
    
    if (isNaN(input)) {
        document.getElementById('currency-result').textContent = 'Please enter a valid number';
        return;
    }

    // Exchange rates (approximate values)
    const rates = {
        USD: { EUR: 0.85, GBP: 0.75, JPY: 110.0, INR: 74.0, CAD: 1.25, AUD: 1.35 },
        EUR: { USD: 1.18, GBP: 0.88, JPY: 130.0, INR: 87.0, CAD: 1.47, AUD: 1.59 },
        GBP: { USD: 1.33, EUR: 1.14, JPY: 147.0, INR: 99.0, CAD: 1.67, AUD: 1.80 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, INR: 0.67, CAD: 0.011, AUD: 0.012 },
        INR: { USD: 0.0135, EUR: 0.0115, GBP: 0.0101, JPY: 1.49, CAD: 0.017, AUD: 0.018 },
        CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, JPY: 88.0, INR: 59.0, AUD: 1.08 },
        AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, JPY: 82.0, INR: 55.0, CAD: 0.93 }
    };

    // Add self-conversion rates
    Object.keys(rates).forEach(currency => {
        rates[currency][currency] = 1;
    });

    let result;
    if (fromCurrency === toCurrency) {
        result = input;
    } else if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
        result = input * rates[fromCurrency][toCurrency];
    } else {
        document.getElementById('currency-result').textContent = 'Conversion not available';
        return;
    }

    document.getElementById('currency-result').textContent = 
        `${input} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}

// Time conversion functions
function convertTime() {
    const input = parseFloat(document.getElementById('time-input').value);
    const fromUnit = document.getElementById('time-from').value;
    const toUnit = document.getElementById('time-to').value;
    
    if (isNaN(input)) {
        document.getElementById('time-result').textContent = 'Please enter a valid number';
        return;
    }

    // Convert to seconds first (base unit)
    let seconds;
    switch (fromUnit) {
        case 'seconds': seconds = input; break;
        case 'minutes': seconds = input * 60; break;
        case 'hours': seconds = input * 3600; break;
        case 'days': seconds = input * 86400; break;
        case 'weeks': seconds = input * 604800; break;
        case 'months': seconds = input * 2592000; // 30 days
        case 'years': seconds = input * 31536000; // 365 days
    }

    // Convert from seconds to target unit
    let result;
    switch (toUnit) {
        case 'seconds': result = seconds; break;
        case 'minutes': result = seconds / 60; break;
        case 'hours': result = seconds / 3600; break;
        case 'days': result = seconds / 86400; break;
        case 'weeks': result = seconds / 604800; break;
        case 'months': result = seconds / 2592000; // 30 days
        case 'years': result = seconds / 31536000; // 365 days
    }

    document.getElementById('time-result').textContent = 
        `${input} ${fromUnit} = ${result.toFixed(6)} ${toUnit}`;
}

// Keyboard support - allow Enter key to trigger conversion
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const activeTab = document.querySelector('.tab-pane.active').id;
        switch (activeTab) {
            case 'length': convertLength(); break;
            case 'weight': convertWeight(); break;
            case 'temperature': convertTemperature(); break;
            case 'currency': convertCurrency(); break;
            case 'time': convertTime(); break;
        }
    }
});

// Input validation - only allow numbers and decimal point
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9.]/g, '');
        // Ensure only one decimal point
        if ((this.value.match(/\./g) || []).length > 1) {
            this.value = this.value.slice(0, -1);
        }
    });
});
