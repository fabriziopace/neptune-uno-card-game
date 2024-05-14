function copyToClipboard(text) {
    // copy room url to the clipboard
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    try {
        // handle ios devices
        if (navigator.userAgent.match(/ipad|iphone/i)) {
            const docRange = document.createRange();
            docRange.selectNodeContents(textArea);

            const windowSelection = window.getSelection();
            windowSelection.removeAllRanges();
            windowSelection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
        document.execCommand("copy");
    } catch (err) {
        console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
}
