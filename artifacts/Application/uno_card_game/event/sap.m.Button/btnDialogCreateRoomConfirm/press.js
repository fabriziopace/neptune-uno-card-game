// check mandatory fields
inputRoomIdNew.setValueState("None");
inputUserNew.setValueState("None");

let roomId = inputRoomIdNew.getValue();
let user = inputUserNew.getValue();
if (!roomId) {
    inputRoomIdNew.setValueState("Error");
    return sap.m.MessageToast.show(textRoomNameMissing.getText());
}
if (!user) {
    inputUserNew.setValueState("Error");
    return sap.m.MessageToast.show(textUserMissing.getText());
}

// set game data
setGameData(roomId, user, true);

// go to the waiting room
dialogCreateRoom.close();
app.to(pageWaitingRoom);
