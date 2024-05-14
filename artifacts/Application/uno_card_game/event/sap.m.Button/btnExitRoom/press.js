// exit from the room
let roomId = appContext.roomId;
let user = appContext.user;
let isHost = appContext.isHost;

triggerUserLeftTrigger({ roomId, user, isHost });

// reset game
resetGame();

// create a new room
window.location.href = window.location.origin + window.location.pathname;
