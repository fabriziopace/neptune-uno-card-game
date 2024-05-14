// play again

// set game data
setGameData(appContext.roomId, appContext.user, appContext.isHost);

// go to the waiting room
app.to(pageWaitingRoom);

// reset vars
appContext.arrUsersCallsUno = [];
appContext.lastSelectedCardId = null;
appContext.currentTurn = null;
appContext.currentColor = null;
appContext.currentPlayedCard = null;
appContext.lastCardIdGetFromPile = null;

// reset list style
listOppCards.removeStyleClass("listCardsCurrentTurn");
listMyCards.removeStyleClass("listCardsCurrentTurn");

// update footer buttons
btnCallUno.setEnabled(false);
btnSkipTurn.setEnabled(false);
btnGetCard.setEnabled(false);