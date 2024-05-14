// skip the turn
// opponent turn
appContext.currentTurn = appContext.opponent;

// reset var
appContext.lastCardIdGetFromPile = null;

// remove uno call
let dataMyCards = modellistMyCards.getData();
if (dataMyCards.length > 1) {
    appContext.arrUsersCallsUno = appContext.arrUsersCallsUno.filter(
        (user) => user !== appContext.user
    );
}

// update interface based on current turn and other params
updateInterface();

// send cards data to the opponent (via redis)
sendUpdatedCardsData();
