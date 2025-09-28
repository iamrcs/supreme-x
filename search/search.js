document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("searchQuery").value.trim();
    if (query) {
        const googleUrl = "https://www.google.com/search?q=" + encodeURIComponent(query) + "+site:sx.itisuniqueofficial.com";
        window.location.href = googleUrl;
    }
});
