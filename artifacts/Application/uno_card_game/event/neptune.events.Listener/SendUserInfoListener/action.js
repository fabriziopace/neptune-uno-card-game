let dataUserLogged = data;
if (Object.keys(dataUserLogged).length > 0 && appContext.roomId === dataUserLogged.roomId) {
    if (appContext.user !== dataUserLogged.user) {
        appContext.opponent = dataUserLogged.user;

        // opponent always go first
        appContext.currentTurn = appContext.opponent;

        // update opponent name
        listOppCards.setHeaderText(appContext.opponent);

        // reset var
        appContext.arrUsersCallsUno = [];

        // update interface based on current turn and other params
        updateInterface();

        if (appContext.isHost) {
            // start the game
            startGame();
        }
    }
}
