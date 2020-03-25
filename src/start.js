const electron = require("electron");
const app = electron.app;
const path = require("path");
const isDev = require("electron-is-dev");
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    isDev
      ? `file://${path.join(__dirname, "../build/index.html")}`
      : "http://localhost:7000"
  );

  if (isDev) {
    mainWindow.toggleDevTools();
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("certificate-error", function(
  event,
  webContents,
  url,
  error,
  certificate,
  callback
) {
  event.preventDefault();
  callback(true);
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
