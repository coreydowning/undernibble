<template>
  <table>
    <thead>
      <tr>
        <th>Status</th>
        <th>Name</th>
        <th>Version</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="addon in addons" :key="addon.name">
        <td>
          {{ addon.status }}
        </td>
        <td>
          {{ addon.name }}
        </td>
        <td>
          {{ addon.version }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import AddonImporter from "../importer/AddonImporter"
import path from "path"

const importer = new AddonImporter()

export default {
  name: "AddonList",
  data: () => {
    return { addons: [] }
  },
  created() {
    importer
      .getAddons(
        path.join(path.resolve("/"), "Users", "corey", "workspace", "_retail_")
      )
      .then((val) => {
        this.addons = val
      })
  },
}
</script>

<style scoped>
</style>
