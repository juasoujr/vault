var options = {
    apiVersion: 'v1',
    endpoint: 'http://10.64.1.20:8200',
    token: 's.QY500CabnAbu4WcrXT28Dkwf'
}

var vault = require("node-vault")(options);

/*
vault.health()
.then(console.log)
.catch((err) => console.error('error message:' + err.message));
*/

/*
vault.status()
.then(console.log)
.catch((err) => console.error(err.message));
*/
/*
vault.read(`auth/approle/role/${roleName}`)
.then(console.log)
.catch((err) => console.error(err.message))
*/

vault.addPolicy({
   name: 'gitlab_policy2',
   rules: '{ "path": { "auth/approle/role/+/secret*": { "policy": "update" } } }'
}).then(console.log)
.catch((err) => console.error(err.message))



/*
vault.addApproleRole({ role_name: roleName, policies: 'secretId_create'})
.catch((err) => console.error(err.message));
*/
/*
vault.write('secret/juarez', { theuser: 'seconduser'})
.catch(console.error);
*/
/*
vault.write('cloudbuilder/1/123', { theuser2: 'seconduser2'})
.catch(console.error);
*/
/*

var teste1 = 'secret/'
var teste2 = teste1 + 'juarez'

console.log(teste2)

vault.read('secret/juarez')
 .then( (result) => {
    var data = result.data.theuser;
    console.log(data)
 })
 .catch((err) => console.error('error message:' + err.message));

/* 
 vault.list('/secret/')
 .then( (result) => {
    var data = result.data.keys[0];
    console.log(data)
 })
 .catch((err) => console.error('error message:' + err.message));
*/
