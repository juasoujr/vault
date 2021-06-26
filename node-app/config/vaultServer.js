var dotenv = require('dotenv')
dotenv.config()

var options = {
    apiVersion: 'v1',
    endpoint: `${process.env.VAULT_ADDR}`,
    token: `${process.env.VAULT_TOKEN}`
}
var vault = require("node-vault")(options);

module.exports.vault=vault