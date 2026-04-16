const { app,BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const db = require('./testdb')



let win;
const createWindow =async () => {
    win = new BrowserWindow({
       autoHideMenuBar:true,
        webPreferences:{
            preload: path.join(__dirname, "preload.js"),
            
        }
    });
    win.maximize();

    win.loadURL(isDev?'http://localhost:3000': `file://${path.join(__dirname,"../build/index.html")}`)
}


ipcMain.handle("getAll", () => {
   const data = db.getAllProducts();
   return data;
})

ipcMain.handle("insert", async () => {
    db.setProduct();
})

ipcMain.handle("getAny",  (event,args) => {
    const data = db.getByBarCode(args);
    return data;
})

ipcMain.handle("getByName",  (event,args) => {
    const data = db.getAllProductsByName(args);
    return data;
})

ipcMain.handle("fullscreen", (event,flag)=> {
    win.setFullScreen(flag);
})


app.whenReady().then(() => createWindow())

app.on('activate', () => {if (BrowserWindow.getAllWindows().length === 0) {createWindow()}})