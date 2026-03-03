const SERVER_URL = "https://jsonplaceholder.typicode.com/posts";

let quotes = [];

/* ===============================
   STORAGE FUNCTIONS
================================ */

function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

function loadQuotes() {
    const stored = localStorage.getItem("quotes");
    if (stored) {
        quotes = JSON.parse(stored);
    } else {
        quotes = [
            { text: "Be yourself; everyone else is already taken.", category: "Inspiration" },
            { text: "Stay hungry, stay foolish.", category: "Motivation" },
        ];
        saveQuotes();
    }
}

/* ===============================
   DISPLAY FUNCTIONS
================================ */

function renderQuotes(filteredQuotes) {
    const container = document.getElementById("quoteDisplay");
    container.innerHTML = "";

    filteredQuotes.forEach((q) => {
        const div = document.createElement("div");
        div.className = "quote-card";
        div.innerHTML = `
      <p>"${q.text}"</p>
      <small>- ${q.category}</small>
    `;
        container.appendChild(div);
    });
}

function showRandomQuote() {
    if (quotes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    sessionStorage.setItem("lastViewedQuote", JSON.stringify(randomQuote));

    renderQuotes([randomQuote]);
}

/* ===============================
   ADD QUOTE
================================ */

function addQuote() {
    const text = document.getElementById("newQuoteText").value.trim();
    const category = document.getElementById("newQuoteCategory").value.trim();

    if (!text || !category) {
        alert("Please fill in all fields.");
        return;
    }

    quotes.push({ text, category });

    saveQuotes();
    populateCategories();
    filterQuotes();

    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
}

/* ===============================
   CATEGORY FILTERING
================================ */

function populateCategories() {
    const select = document.getElementById("categoryFilter");
    select.innerHTML = '<option value="all">All Categories</option>';

    const categories = [...new Set(quotes.map((q) => q.category))];

    categories.forEach((cat) => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });

    const savedFilter = localStorage.getItem("selectedCategory");
    if (savedFilter) {
        select.value = savedFilter;
    }
}

function filterQuotes() {
    const selected = document.getElementById("categoryFilter").value;

    localStorage.setItem("selectedCategory", selected);

    if (selected === "all") {
        renderQuotes(quotes);
    } else {
        const filtered = quotes.filter((q) => q.category === selected);
        renderQuotes(filtered);
    }
}

/* ===============================
   IMPORT / EXPORT JSON
================================ */

function exportQuotes() {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.json";
    a.click();

    URL.revokeObjectURL(url);
}

function importFromJsonFile(event) {
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
        try {
            const imported = JSON.parse(e.target.result);

            imported.forEach((serverQuote) => {
                const index = quotes.findIndex((q) => q.text === serverQuote.text);

                if (index !== -1) {
                    quotes[index] = serverQuote; // Conflict → imported wins
                } else {
                    quotes.push(serverQuote);
                }
            });

            saveQuotes();
            populateCategories();
            filterQuotes();

            showNotification("Quotes imported successfully!");
        } catch {
            alert("Invalid JSON file.");
        }
    };

    fileReader.readAsText(event.target.files[0]);
}

/* ===============================
   SERVER SYNC
================================ */

async function fetchServerQuotes() {
    try {
        const res = await fetch(SERVER_URL);
        const data = await res.json();

        return data.slice(0, 5).map((item) => ({
            text: item.title,
            category: "Server",
        }));
    } catch (error) {
        console.error("Server fetch failed", error);
        return [];
    }
}

async function syncWithServer() {
    const serverQuotes = await fetchServerQuotes();
    let updated = false;

    serverQuotes.forEach((serverQuote) => {
        const index = quotes.findIndex((q) => q.text === serverQuote.text);

        if (index !== -1) {
            quotes[index] = serverQuote; // Server wins
            updated = true;
        } else {
            quotes.push(serverQuote);
            updated = true;
        }
    });

    if (updated) {
        saveQuotes();
        populateCategories();
        filterQuotes();
        showNotification("Data synced with server.");
    }
}

/* ===============================
   NOTIFICATIONS
================================ */

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;

    setTimeout(() => {
        notification.textContent = "";
    }, 3000);
}

/* ===============================
   INITIALIZATION
================================ */

document.addEventListener("DOMContentLoaded", () => {
    loadQuotes();
    populateCategories();
    filterQuotes();

    document.getElementById("newQuote").addEventListener("click", showRandomQuote);

    document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

    document.getElementById("categoryFilter").addEventListener("change", filterQuotes);

    document.getElementById("exportBtn").addEventListener("click", exportQuotes);

    document.getElementById("importFile").addEventListener("change", importFromJsonFile);

    document.getElementById("manualSync").addEventListener("click", syncWithServer);

    // Auto Sync every 30 sec
    setInterval(syncWithServer, 30000);
});
