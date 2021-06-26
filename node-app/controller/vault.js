var vaultServer = require('../config/vaultServer')
var vault=vaultServer.vault
module.exports = {
  list: async (query) => {
    try {
      return await vault.list(query)
    } catch (err) {
      console.error('Error retrieving list from path ' + query, err)
      throw (err)
    }
  },
  read: async (path) => {
    try {
      return await vault.read(path)
    } catch (err) {
      console.error('Error retrieving secret from path', err)
      throw (err)
    }
  },
  write: async (path, secret_id, secret) => {
    try {
      return await vault.write(path, {[secret_id] : secret})
    } catch (err) {
      console.error('Error writing secret', err)
      throw (err)
    }
  },
  health: async () => {
    try {
      return await vault.health()
    } catch (err) {
      console.error('Error retrieving health', err)
      throw (err)
    }
  },
  status: async () => {
    try {
      return await vault.status()
    } catch (err) {
      console.error('Error retrieving status', err)
      throw (err)
    }
  },
}
