// when the user choose the new color
// change the footer border color
// and refresh the cards model
let context = this.getSelectedItem().getBindingContext();
let cardData = context.getObject();

appContext.currentColor = cardData.color;
barFooter.data("color", cardData.color, true);
barFooter.invalidate();

// update interface based on current turn and other params
updateInterface();

// send cards data to the opponent (via redis)
sendUpdatedCardsData();

setTimeout(function () {
    dialogSetColor.close();
    listSetColor.removeSelections();
}, 200);
