const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev');
const path = require('path');
let TrayWindow;

function createWindowTray() {
  // MainTray = new Tray(path.join(__dirname, 'logo.png'));
  TrayWindow = new BrowserWindow({
    width: 420,
    height: 600,
    show:false,
    webPreferences: {
        backgroundThrottling:false,
    }
  })

  TrayWindow.setMenu(null);
  TrayWindow.loadURL(
    isDev
      ? ' http://localhost:3000#/settings'
      : (`file:///${path.join(__dirname,"../../build/index.html")}#/settings`)
  );
  // TrayWindow.hide()
  // TrayWindow.on("blur",() => {
  //     if(!TrayWindow) return;
  //     if(!TrayWindow.webContents.isDevToolsOpened()) {
  //         TrayWindow.hide();
  //         // ipcMain.emit("tray-window-hidden", {window: TrayWindow, tray:MainTray})
  //     }
  // })
  TrayWindow.on("close",function(event) {
      if (!TrayWindow) return;
      event.preventDefault();
      TrayWindow.hide();
  })
  TrayWindow.once("ready-to-show",() => {
    TrayWindow.show()
  })
}
module.exports = {createWindowTray}