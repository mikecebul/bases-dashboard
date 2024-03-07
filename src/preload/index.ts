import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import type { Client } from '../main/db/client'

// Custom APIs for renderer
const api = {
  getSPClientData: (): Promise<Client[]> => ipcRenderer.invoke('get-sp-client-data'),
  getDBClientData: (): Promise<Client[]> => ipcRenderer.invoke('get-db-client-data')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
