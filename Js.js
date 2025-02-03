const hymns = {
    "English Hymns": [
        "The Nation of The Cross",
        "The Old Is Gone",
        "Theotokos",
        "I Can't Do It Alone",
        "The Spirit",
        "The Stars",
        "I Have Seen All I Need",
        "I Won't Forget",
        "The Angel",
        "The Purest of The Pure"
    ],
    "Faaruwwan Afaan Oromoo": [
        "Hymn 1",
        "Hymn 2",
        "Hymn 3"
    ],
    "የማህበረ ሰብ መዝሙራት": [
        "Hymn A",
        "Hymn B",
        "Hymn C"
    ]
};

function toggleSearch() {
    let searchBar = document.getElementById("search-bar");
    searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
}

function searchHymns() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#hymns li");

    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(input) ? "block" : "none";
    });
}

function openCategory(category) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("hymn-list").classList.remove("hidden");
    document.getElementById("category-title").textContent = category;

    let hymnList = document.getElementById("hymns");
    hymnList.innerHTML = "";

    if (hymns[category]) {
        hymns[category].forEach(hymn => {
            let li = document.createElement("li");
            li.textContent = hymn;
            hymnList.appendChild(li);
        });
    }
}

function goHome() {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("hymn-list").classList.add("hidden");
}

function openInfo() {
    alert("This is the EOTC Hymns website!");
}