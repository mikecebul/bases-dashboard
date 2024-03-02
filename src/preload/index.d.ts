import { ElectronAPI } from '@electron-toolkit/preload'
import { Cookie } from 'puppeteer'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      getClientData: () => Promise<any>
    }
  }
}
