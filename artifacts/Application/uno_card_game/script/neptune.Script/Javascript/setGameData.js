function setGameData(roomId, user, isHost) {
    // set room / user information
    if (roomId) {
        appContext.roomId = roomId;
        objAttrRoomId.setText(roomId);
    }

    if (user) {
        appContext.user = user;
        listMyCards.setHeaderText(user);
    }

    appContext.isHost = isHost;

    // send new user logged data to other users (via redis/socket)
    triggerUserLoggedTrigger({ roomId, user, isHost });
}
