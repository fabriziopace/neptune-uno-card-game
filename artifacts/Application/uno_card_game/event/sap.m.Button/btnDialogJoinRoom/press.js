// check mandatory fields
inputUserJoin.setValueState("None");

let roomId = getQueryUrlParam("room");
let user = inputUserJoin.getValue();
if (!user) {
    inputUserJoin.setValueState("Error");
    return sap.m.MessageToast.show(textUserMissing.getText());
}

// set game data
setGameData(roomId, user, false);

// go to the waiting room
dialogJoinRoom.close();
app.to(pageWaitingRoom);
