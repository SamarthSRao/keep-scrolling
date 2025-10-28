let scrolling = true;
let scrollDelay = 1000; // Time in milliseconds between scrolls (e.g., 1 second)
let scrollAmount = 500; // Amount of pixels to scroll each time (adjust as needed)

function scrollDown() {
  if (!scrolling) {
    console.log('Scrolling stopped.');
    return;
  }

  window.scrollBy(0, scrollAmount);
  
  // Check if the user has reached the bottom of the page
  const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight;

  if (isAtBottom) {
    console.log('Reached the bottom. Continuing to scroll...');
  }

  setTimeout(scrollDown, scrollDelay);
}

function stopScrolling() {
  scrolling = false;
}

console.log('Starting to scroll...');
scrollDown();

// To stop the scrolling, run the following command in the console:
// stopScrolling();
