// call uno!
// opponent turn
// appContext.currentTurn = appContext.opponent;

// update uno calls
if (!appContext.arrUsersCallsUno.includes(appContext.user)) {
    appContext.arrUsersCallsUno.push(appContext.user);
}

// update interface based on current turn and other params
updateInterface();

// send cards data to the opponent (via redis)
sendUpdatedCardsData();
