// copy room url to the clipboard
copyToClipboard(location.origin + location.pathname + "?room=" + appContext.roomId);
sap.m.MessageToast.show(textUrlCopied.getText());
