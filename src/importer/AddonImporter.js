
export default class AddonImporter {
    async getAddons(wowPath) {
        return await window.ipcRenderer.invoke("fs-action", { wowPath: wowPath })
    }
}