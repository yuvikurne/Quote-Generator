var quotes = [
    {
        author: "-Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
        author: "-Maya Angelou",
        quote: "You will face many defeats in life, but never let yourself be defeated.",
    },
    {
        author: "-Nelson Mandela",
        quote: "It always seems impossible until it’s done.",
    },
    {
        author: "-Helen Keller",
        quote: "Alone we can do so little; together we can do so much.",
    },
    {
        author: "-Steve Jobs",
        quote: "Innovation distinguishes between a leader and a follower.",
    },
];

if (localStorage.getItem("quotes") == null) {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

function generateQuotes() {
    var getQuotes = JSON.parse(localStorage.getItem("quotes"));

    let randomIndex = Math.floor(Math.random() * getQuotes.length);

    let result = getQuotes[randomIndex].quote;
    let show = getQuotes[randomIndex].author;

    document.getElementById("show-quote").innerHTML = result;
    document.getElementById("show-author").innerHTML = show;
}

function add() {
    let newQuote = document.getElementById("input").value;
    let newAuthor = document.getElementById("author").value;

    if (newQuote === "" || newAuthor === "") {
        alert("Both quote and author fields must be filled.");
        return;
    }

    let changeQuote = JSON.parse(localStorage.getItem("quotes"));

    let newChanges = { author: newAuthor, quote: newQuote };

    changeQuote.push(newChanges);

    localStorage.setItem("quotes", JSON.stringify(changeQuote));

    alert("Quote added successfully!");

    // Clear input fields
    document.getElementById("input").value = "";
    document.getElementById("author").value = "";
}
