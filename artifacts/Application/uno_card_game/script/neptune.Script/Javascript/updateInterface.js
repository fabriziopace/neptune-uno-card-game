function updateInterface() {
    // update interface based on current turn and other params
    let currentUserTurn = appContext.user === appContext.currentTurn;
    let datalistMyCards = modellistMyCards.getData();

    // update footer buttons
    btnCallUno.setEnabled(currentUserTurn && datalistMyCards.length === 2);
    btnSkipTurn.setEnabled(currentUserTurn && appContext.lastCardIdGetFromPile !== null);
    btnGetCard.setEnabled(currentUserTurn && appContext.lastCardIdGetFromPile === null);

    // reset list style

    // current turn
    listOppCards.removeStyleClass("listCardsCurrentTurn");
    listMyCards.removeStyleClass("listCardsCurrentTurn");

    if (currentUserTurn) {
        listMyCards.addStyleClass("listCardsCurrentTurn");
    } else {
        listOppCards.addStyleClass("listCardsCurrentTurn");
    }

    // uno calls
    listOppCards.removeStyleClass("listUnoCalled");
    listMyCards.removeStyleClass("listUnoCalled");
    if (appContext.arrUsersCallsUno.includes(appContext.opponent)) {
        listOppCards.addStyleClass("listUnoCalled");
    }
    if (appContext.arrUsersCallsUno.includes(appContext.user)) {
        listMyCards.addStyleClass("listUnoCalled");
    }

    // refresh cards model data
    listCardDeck.getModel().refresh(true);
    listMyCards.getModel().refresh(true);
    listOppCards.getModel().refresh(true);
}
