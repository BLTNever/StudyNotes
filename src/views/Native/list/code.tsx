export const createProgress = `
const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    createWindow()
})
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
`

export const createRender = `
function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1010,
        height: 716,
        minWidth: 800,
        minHeight: 600,
        frame: false,
        autoHideMenuBar: false,
        titleBarStyle: 'hidden',
        fullscreen: false,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true,
          devTools: isDevEnv
        }
    })
    // 加载index.html文件
    mainWindow.loadURL(isDevEnv
      ? 'http://localhost:3000'
      : 'file://$/{path.join(__dirname, '../build/index.html')}');
    // 打开开发者工具
    isDevEnv && mainWindow.openDevTools();
    mainWindow.once('ready-to-show', () => {
        autoUpdater.checkForUpdatesAndNotify();
    })
    updateHandle()      // 更新
}
`

export const ipcRenderToMain = `
// index.js
ipcMain.on("mainWindow:close", () => {
    mainWindow.hide();
})

// render.js
ipcRenderer.send('mainWindow:close')

// 传入参数
ipcMain.on("mainWindow:setTaskTimer", (event, task) => {
    // ...
})
`
export const ipcMainToRender = `
viceWindow.webContents.on("did-finish-load", () => {
    viceWindow.webContents.send("event", task);
})`

export const ipcRenderToRender = `
ipcRenderer.sendTo(1, "finishEvent", params);
`

export const contextBridge = `
// preload.js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system')
})


// renderer.js
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})`

export const electronStore = `
const Store = require("electron-store");
const store = new Store();

store.set('key', 'value');
let value = store.get('key');
let isExist = store.has('key')`