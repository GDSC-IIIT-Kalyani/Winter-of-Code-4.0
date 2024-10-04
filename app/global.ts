// Function to set the font size based on the parent's width
function setFontSizeForTextScaleElements(): void {
    // Select all elements whose class contains "text-scale"
    const elements = document.querySelectorAll<HTMLElement>('[class*="text-scale"]');

    // Iterate over each selected element
    elements.forEach(element => {
        // Get the parent element's width
        const parentElement = element.parentElement;

        // Ensure parentElement exists before proceeding
        if (parentElement) {
            const parentWidth = parentElement.clientWidth;

            // Set the font size to 2 times the parent's width
            element.style.fontSize = `${2 * parentWidth}px`;
        }
    });
}

// Set the initial font size for all matching elements
setFontSizeForTextScaleElements();

// Optionally, adjust the font size when the window is resized
window.addEventListener('resize', setFontSizeForTextScaleElements);
