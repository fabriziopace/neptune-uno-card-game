function sendUpdatedCardsData() {
    // send cards data to the opponent (via redis)
    let dataCardDeck = modellistCardDeck.getData();
    let datalistCardPile = modellistCardPile.getData();
    let dataMyCards = modellistMyCards.getData();
    let dataOppCards = modellistOppCards.getData();
    triggerUpdateCardsTrigger({
        dataCardDeck,
        datalistCardPile,
        dataMyCards,
        dataOppCards,
        roomId: appContext.roomId,
        user: appContext.user,
        currentTurn: appContext.currentTurn,
        currentColor: appContext.currentColor,
        currentPlayedCard: appContext.currentPlayedCard,
        arrUsersCallsUno: appContext.arrUsersCallsUno,
    });
}
