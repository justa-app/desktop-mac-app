const {
  app,
  BrowserWindow,
  Tray,
  Menu,
  MenuItem,
} = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
const { createWindowTray } = require("./electron-helper/trayWindow");


if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    icon: __dirname + "/logo.png",
  });




  // mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );


  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
};

// app.on('ready', createWindow);

let trayIcon = null;
app.whenReady().then(() => {
  trayIcon = new Tray(`${path.join(__dirname, "./logo.png")}`);
  const trayMenuTemplate = [
    {
      label: "Settings...",
      click: function() {
        createWindowTray();
      },
    },

    {
      label: "Quit",
      click: function() {
        if (process.platform !== "darwin") {
          app.quit();
        }
      },
    },
  ];

  let trayMenu = Menu.buildFromTemplate(trayMenuTemplate);
  trayIcon.setContextMenu(trayMenu);
  // createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

