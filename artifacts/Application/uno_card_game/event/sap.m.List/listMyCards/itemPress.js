let context = this.getSelectedItem().getBindingContext();
let cardData = context.getObject();

// double tap on touch devices
if (isTouchDevice()) {
    if (appContext.lastSelectedCardId === cardData.id) {
        // play the card only on double tap
        playCard(cardData);
    } else {
        // save selected card id
        appContext.lastSelectedCardId = cardData.id;
    }
} else {
    // play the card on single click (since we have the hover event)
    playCard(cardData);
}
