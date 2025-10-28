let lastScrollHeight = -1;
const scrollInterval = setInterval(() => {
    const currentScrollHeight = document.body.scrollHeight;
    window.scrollTo(0, currentScrollHeight);

    if (lastScrollHeight === currentScrollHeight) {
        clearInterval(scrollInterval);
        console.log("Reached the end of the page.");
    }
    lastScrollHeight = currentScrollHeight;
}, 2000); // Scrolls every 2 seconds. Adjust as needed.
