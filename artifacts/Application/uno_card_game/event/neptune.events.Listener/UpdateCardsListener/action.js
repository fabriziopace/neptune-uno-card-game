if (Object.keys(data).length > 0 && appContext.roomId === data.roomId) {
    if (appContext.user !== data.user) {
        // update current turn, color, played card and cards lists data
        appContext.currentTurn = data.currentTurn;

        appContext.currentPlayedCard = data.currentPlayedCard;

        appContext.currentColor = data.currentColor;
        barFooter.data("color", data.currentColor, true);
        barFooter.invalidate();

        updateCardData(
            data.dataCardDeck,
            data.datalistCardPile,
            data.dataMyCards,
            data.dataOppCards
        );

        appContext.arrUsersCallsUno = data.arrUsersCallsUno;

        // update interface based on current turn and other params
        updateInterface();

        // if opponent user has no cards, current user lose the game
        if (data.dataMyCards.length === 0) {
            illustratedMsgLoseRoom.setDescription(
                textLoseGame.getText().replace("&", appContext.user)
            );
            app.to(pageLoseRoom);
        }
    }
}
