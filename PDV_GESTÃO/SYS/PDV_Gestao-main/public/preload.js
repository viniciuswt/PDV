const {contextBridge,ipcRenderer} = require("electron");


contextBridge.exposeInMainWorld("api", {
    setProduct: () => ipcRenderer.invoke("insert"),
    getAllProducts: () => ipcRenderer.invoke("getAll"),
    getByBarCode: (id) => ipcRenderer.invoke("getAny",id),
    getAllByName: (name) => ipcRenderer.invoke("getByName",name)
});

contextBridge.exposeInMainWorld("setFullscreen", {
    fullscreen: (flag) => ipcRenderer.invoke("fullscreen",flag),
   
});


