function insertCssLink(href) {
    // Create a new link element
    var link = document.createElement('link');

    // Set the attributes for the link element
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;

    // Append the link element to the head of the document
    document.head.appendChild(link);
}

// Example usage: Insert a CSS file into the head
insertCssLink('https://codingtimes.netlify.app/projects/assets/ghl.css');