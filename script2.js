// Sample Portfolio Data
const portfolioData = [
    { name: "Ethereum", amount: 1.5, value: 4500 },
    { name: "Bitcoin", amount: 0.3, value: 15000 },
    { name: "Cardano", amount: 500, value: 1000 }
];

// Sample Transaction History Data
const transactionHistory = [
    { date: "2024-10-01", name: "Ethereum", amount: 1.2, type: "Buy", status: "Completed" },
    { date: "2024-09-30", name: "Bitcoin", amount: 0.1, type: "Sell", status: "Completed" }
];

// Sample News Data
const newsData = [
    { title: "Ethereum hits all-time high", source: "CryptoNews", link: "#" },
    { title: "Bitcoin adoption skyrockets", source: "Blockchain Weekly", link: "#" }
];

// Watchlist Data
let watchlistData = [];

// Price Alerts Data
let priceAlerts = [];

// Load Portfolio Data
function loadPortfolio() {
    const portfolioTable = document.getElementById("portfolio").getElementsByTagName("tbody")[0];

    portfolioData.forEach(coin => {
        let row = portfolioTable.insertRow();
        row.insertCell(0).innerText = coin.name;
        row.insertCell(1).innerText = coin.amount;
        row.insertCell(2).innerText = `$${coin.value.toFixed(2)}`;
    });
}

// Load Transaction History Data
// Sample Transaction History Data
// Define the transaction object type


// Transaction History Array with typed objects
 transactionHistory = [
    { date: "2024-10-01", name: "Ethereum", amount: 1.2, type: "Buy", status: "Completed" },
    { date: "2024-09-30", name: "Bitcoin", amount: 0.1, type: "Sell", status: "Completed" },
    { date: "2024-09-29", name: "Cardano", amount: 100, type: "Buy", status: "Pending" },
];


// Function to load Transaction History dynamically
function loadTransactionHistory() {
    const transactionTable = document.getElementById("transaction-history").getElementsByTagName("tbody")[0];

    transactionHistory.forEach(transaction => {
        let row = transactionTable.insertRow(); // Create a new row
        row.insertCell(0).innerText = transaction.date;        // Date column
        row.insertCell(1).innerText = transaction.name;        // Cryptocurrency column
        row.insertCell(2).innerText = transaction.amount;      // Amount column
        row.insertCell(3).innerText = transaction.type;        // Type column
        row.insertCell(4).innerText = transaction.status;      // Status column
    });
}

// Call this function to populate the table on page load
window.onload = function() {
    loadTransactionHistory();
};


// Load News Data
function loadNews() {
    const newsDiv = document.getElementById("news")
}    
