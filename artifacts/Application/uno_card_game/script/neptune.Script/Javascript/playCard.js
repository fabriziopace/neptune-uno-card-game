function playCard(cardData) {
    // reset var
    appContext.lastSelectedCardId = null;
    appContext.lastCardIdGetFromPile = null;

    // reset selection
    listMyCards.removeSelections();

    if (Object.keys(cardData).length > 0) {
        if (cardData.id) {
            let dataCardDeck = modellistCardDeck.getData();
            let dataMyCards = modellistMyCards.getData();

            cardData.showBack = false;
            ModelData.Add(listCardPile, cardData);
            ModelData.Delete(listMyCards, "id", cardData.id, "EQ");

            appContext.currentPlayedCard = cardData.value;

            // opponent turn
            appContext.currentTurn = appContext.opponent;

            // if action card let user set new color
            if (cardData.color === "black") {
                dialogSetColor.open();
            } else {
                appContext.currentColor = cardData.color;
                barFooter.data("color", cardData.color, true);
                barFooter.invalidate();
            }

            if (cardData.value === "skip") {
                // if card played is skip, the opponent user skip the turn
                appContext.currentTurn = appContext.user;
            }
            // since the game for now allow maximum 2 players
            // this card will just have the same effect as normal cards (same number/color/sign)
            // else if (cardData.value === "reverse") {
            // }
            else if (cardData.value === "drawtwo") {
                // if card played is drawto, the opponent user skip the turn and draw two cards
                appContext.currentTurn = appContext.user;

                for (var a = 0; a < 2; a++) {
                    dataCardDeck[a].showBack = true;
                    ModelData.Add(listOppCards, dataCardDeck[a]);
                    ModelData.Delete(listCardDeck, "id", dataCardDeck[a].id, "EQ");
                }
            } else if (cardData.value === "wilddrawfour") {
                // if card played is wilddrawfour, the opponent user skip the turn and draw four cards
                appContext.currentTurn = appContext.user;

                for (var a = 0; a < 4; a++) {
                    dataCardDeck[a].showBack = true;
                    ModelData.Add(listOppCards, dataCardDeck[a]);
                    ModelData.Delete(listCardDeck, "id", dataCardDeck[a].id, "EQ");
                }
            }

            // if current user has no cards won the game and called uno in the previous match
            if (dataMyCards.length === 0) {
                if (appContext.arrUsersCallsUno.includes(appContext.user)) {
                    illustratedMsgWinRoom.setDescription(
                        textWinGame.getText().replace("&", appContext.user)
                    );
                    app.to(pageWinRoom);
                } else {
                    // as penalty add two cards
                    for (var a = 0; a < 2; a++) {
                        dataCardDeck[a].showBack = false;
                        ModelData.Add(listMyCards, dataCardDeck[a]);
                        ModelData.Delete(listCardDeck, "id", dataCardDeck[a].id, "EQ");
                    }
                }
            } else if (dataMyCards.length > 1) {
                // remove uno call
                appContext.arrUsersCallsUno = appContext.arrUsersCallsUno.filter(
                    (user) => user !== appContext.user
                );
            }

            // update interface based on current turn and other params
            updateInterface();

            // send cards data to the opponent (via redis)
            sendUpdatedCardsData();
        }
    }
}
