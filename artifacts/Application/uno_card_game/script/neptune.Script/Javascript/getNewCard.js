function getNewCard() {
    // can't get a new card if is not the current turn
    // or if the user already got the card from the file in current turn
    if (appContext.currentTurn !== appContext.user || appContext.lastCardIdGetFromPile) {
        return;
    }

    // reset var
    appContext.lastSelectedCardId = null;

    // reset selection
    listMyCards.removeSelections();

    // get new card from the deck
    let datalistCardDeck = modellistCardDeck.getData();
    if (datalistCardDeck.length > 0) {
        datalistCardDeck[0].showBack = false;
        ModelData.Add(listMyCards, datalistCardDeck[0]);
        ModelData.Delete(listCardDeck, "id", datalistCardDeck[0].id, "EQ");

        appContext.lastCardIdGetFromPile = datalistCardDeck[0].id;

        // remove uno call
        let dataMyCards = modellistMyCards.getData();
        if (dataMyCards.length > 1) {
            appContext.arrUsersCallsUno = appContext.arrUsersCallsUno.filter(
                (user) => user !== appContext.user
            );
        }

        // send cards data to the opponent (via redis)
        sendUpdatedCardsData();
    }
}
