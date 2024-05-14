function startGame() {
    // reset model data
    modellistOppCards.setData([]);
    modellistCardDeck.setData([]);
    modellistCardPile.setData([]);
    modellistMyCards.setData([]);

    let dataCards = [];
    const cards = [
        { value: "0", color: ["blue", "red", "yellow", "green"], repeat: 1 },
        { value: "1", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "2", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "3", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "4", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "5", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "6", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "7", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "8", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "9", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "skip", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "reverse", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "drawtwo", color: ["blue", "red", "yellow", "green"], repeat: 2 },
        { value: "wild", color: ["black"], repeat: 4 },
        { value: "wilddrawfour", color: ["black"], repeat: 4 },
    ];

    for (const card of cards) {
        for (const color of card.color) {
            for (var a = 0; a < card.repeat; a++) {
                dataCards.push({
                    id: ModelData.genID(),
                    value: card.value,
                    showBack: true,
                    color: color,
                });
            }
        }
    }

    // randomize cards
    dataCards = dataCards.sort((a, b) => {
        return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
    });

    modellistCardDeck.setData(dataCards);

    // get my cards
    for (var a = 0; a < 7; a++) {
        dataCards[a].showBack = false;
        ModelData.Add(listMyCards, dataCards[a]);
        ModelData.Delete(listCardDeck, "id", dataCards[a].id, "EQ");
    }

    // get opponent cards
    for (var a = 0; a < 7; a++) {
        dataCards[a].showBack = true;
        ModelData.Add(listOppCards, dataCards[a]);
        ModelData.Delete(listCardDeck, "id", dataCards[a].id, "EQ");
    }

    // get one card from the deck and set it to the pile (must not be black - action card)
    let findNonActionCard = ModelData.Find(listCardDeck, "color", "black", "NE");
    if (findNonActionCard.length > 0) {
        findNonActionCard[a].showBack = false;
        ModelData.Add(listCardPile, findNonActionCard[a]);
        ModelData.Delete(listCardDeck, "id", findNonActionCard[a].id, "EQ");

        appContext.currentColor = findNonActionCard[a].color;
        barFooter.data("color", findNonActionCard[a].color, true);
        barFooter.invalidate();
    }

    // send cards data to the opponent (via redis)
    sendUpdatedCardsData();

    app.to(pageGameTable);
}
