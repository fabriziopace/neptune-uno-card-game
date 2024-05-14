function resetGame() {
    // go to init page
    app.to(pageStart);

    // check if the url has the roomId or not (ref url for new users)
    let roomId = getQueryUrlParam("room");
    if (roomId) {
        // new user join in the room
        dialogJoinRoom.open();
    } else {
        // create a new room
        dialogCreateRoom.open();
    }

    // reset vars
    appContext.roomId = null;
    appContext.user = null;
    appContext.opponent = null;
    appContext.arrUsersCallsUno = [];
    appContext.isHost = false;
    appContext.lastSelectedCardId = null;
    appContext.currentTurn = null;
    appContext.currentColor = null;
    appContext.currentPlayedCard = null;
    appContext.lastCardIdGetFromPile = null;

    // reset model data
    modellistOppCards.setData([]);
    modellistCardDeck.setData([]);
    modellistCardPile.setData([]);
    modellistMyCards.setData([]);

    // reset labels
    listOppCards.setHeaderText("");
    listMyCards.setHeaderText("");

    // reset list style
    listOppCards.removeStyleClass("listCardsCurrentTurn");
    listMyCards.removeStyleClass("listCardsCurrentTurn");

    // set color dialog
    modellistSetColor.setData([
        { value: "1", color: "blue", showBack: false },
        { value: "1", color: "red", showBack: false },
        { value: "1", color: "yellow", showBack: false },
        { value: "1", color: "green", showBack: false },
    ]);

    // update footer buttons
    btnCallUno.setEnabled(false);
    btnSkipTurn.setEnabled(false);
    btnGetCard.setEnabled(false);
}
