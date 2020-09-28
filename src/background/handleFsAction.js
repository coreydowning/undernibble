import path from 'path'
import fs from 'fs'

export default async function (event, options) {
    const addons = []
    const baseWowPath = path.join(options.wowPath, "Interface", "Addons")
    const interfaceDir = path.join(baseWowPath,)
    fs.readdirSync(interfaceDir).forEach(file => {
        addons.push({ name: file })
    })
    return addons
}