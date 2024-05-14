// vars used in the game
appContext = {
    roomId: null,
    user: null,
    opponent: null,
    arrUsersCallsUno: [],
    isHost: false,
    lastSelectedCardId: null,
    currentTurn: null,
    currentColor: null,
    currentPlayedCard: null,
    lastCardIdGetFromPile: null,
};

try {
    sap.ui.getCore().attachInit(function (startParams) {
        // reset the game
        resetGame();
    });
} catch (err) {
    console.log(err);
}
