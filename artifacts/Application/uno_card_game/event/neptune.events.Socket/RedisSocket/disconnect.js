let roomId = appContext.roomId;
let user = appContext.user;
let isHost = appContext.isHost;

triggerUserLeftTrigger({ roomId, user, isHost });