# Auto-Scroll Script

A simple JavaScript utility for automatically scrolling web pages, useful for loading dynamic content or testing infinite scroll implementations.

## Features

- **Two scrolling methods included:**
  - Method 1: Scrolls to bottom and waits for new content to load
  - Method 2: Smooth continuous scrolling with configurable speed

- Automatically detects when the page has finished loading content
- Easy to start and stop
- Configurable scroll speed and intervals

## Usage

### Method 1: Scroll and Wait (Recommended for Dynamic Content)

This method scrolls to the bottom, waits for content to load, then scrolls again until no new content appears.

```javascript
let lastScrollHeight = -1;
const scrollInterval = setInterval(() => {
    const currentScrollHeight = document.body.scrollHeight;
    window.scrollTo(0, currentScrollHeight);
    if (lastScrollHeight === currentScrollHeight) {
        clearInterval(scrollInterval);
        console.log("Reached the end of the page.");
    }
    lastScrollHeight = currentScrollHeight;
}, 2000); // Scrolls every 2 seconds
```

**To stop:** Run `clearInterval(scrollInterval)` in the console

### Method 2: Continuous Smooth Scrolling

This method scrolls continuously at a fixed rate, ideal for smooth scrolling through content.

```javascript
let scrolling = true;
let scrollDelay = 1000; // Time between scrolls (milliseconds)
let scrollAmount = 500; // Pixels to scroll each time

function scrollDown() {
  if (!scrolling) {
    console.log('Scrolling stopped.');
    return;
  }
  window.scrollBy(0, scrollAmount);
  
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
```

**To stop:** Run `stopScrolling()` in the console

## Configuration

### Method 1 Settings
- Adjust the interval time (default: `2000ms`) to control how long to wait for new content

### Method 2 Settings
- `scrollDelay`: Time between scroll actions in milliseconds (default: `1000`)
- `scrollAmount`: Number of pixels to scroll each time (default: `500`)

## Installation

1. Open your browser's Developer Console (F12 or Cmd+Option+J on Mac)
2. Copy and paste the desired method's code into the console
3. Press Enter to start scrolling

## Use Cases

- Loading all content on infinite scroll pages
- Automated testing of scroll-based features
- Capturing full-page screenshots
- Bulk loading of lazy-loaded images
- Web scraping dynamic content

## Browser Compatibility

Works in all modern browsers that support:
- `window.scrollTo()` / `window.scrollBy()`
- `setInterval()` / `setTimeout()`
- ES6 arrow functions

## Notes

- Some websites may have rate limiting or anti-bot measures
- Adjust timing based on your internet speed and page load times
- Use responsibly and respect website terms of service

## License

MIT License - Feel free to use and modify as needed.

## Contributing

Contributions, issues, and feature requests are welcome!
