function isTouchDevice() {
    // check if is touch device
    return (
        true ==
        ("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch))
    );
}
