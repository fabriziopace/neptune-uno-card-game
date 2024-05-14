function updateCardData(dataCardDeck, datalistCardPile, dataMyCards, dataOppCards) {
    // update cards lists data (from redis)
    modellistCardDeck.setData(dataCardDeck);
    modellistCardPile.setData(datalistCardPile);

    for (var a = 0; a < dataOppCards.length; a++) {
        dataOppCards[a].showBack = false;
    }
    modellistMyCards.setData(dataOppCards);

    for (var a = 0; a < dataMyCards.length; a++) {
        dataMyCards[a].showBack = true;
    }
    modellistOppCards.setData(dataMyCards);

    app.to(pageGameTable);
}
