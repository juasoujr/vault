
/*
role_id 4cc7ac1c-0d4e-1bbf-2127-e34d1dafad02
Key                Value                               
secret_id          3fdcf6da-ab61-60b8-c2f2-be0637f55713
secret_id_accessor 001aa2fb-f5ac-ea5d-41a9-b303ec5d8855

*/


var options = {
    apiVersion: 'v1',
    endpoint: 'http://10.64.1.20:8200',
    token: 's.80bptLTnuCGbk7UrOPi2Ps72'
    // endpoint: 'http://localhost:8200',
    // token: 's.ydiWafXnJAoVHPF17fy77gF5'

}

var vault = require("node-vault")(options);

// var roleName = '1_juarez.souza'


// vault.getApproleRoleId({ role_name: roleName }).then(result => {
//     return result.data.role_id
//     })

// console.log(roleId)

// var roleId = await vault.getApproleRoleId({ role_name: roleName })

/*
const mountPoint = 'approle';
const roleName = 'jujuba-role';

var secret = {
  "accessKey": "testKey",
  "region": "Brazil",
  "secretId": "the_secret_id"
}

var path = 'cloudbuilder/vast20/jsouza/credential_aws'

vault.addPolicy({
  name: 'juarez_node_pol_from_test',
  rules: '{ "path": {\\"cloudbuilder/1/jsouza/*\\": {"policy": "read"} } }',
});
*/

/*
vault.addApproleRole({ 
  role_name: roleName, policies: 'juarez_node_pol' 
});
*/

//vault.write(path, secret)

//console.log("The token is: " + vault.token);
/*
//policy creation test
vault.policies().then(
  (result) => {
    console.log(result);
    return vault.addPolicy({
      name: 'fromTest_pol',
      rules: '{ "path": {"cloudbuilder/vast20/jsouza/*": {"policy": "read"} } }',
    });
  }
)

//approle role creation test
const mountPoint = 'approle';
const roleName = 'test-role';

vault.auths()
.then((result) => {
  if (result.hasOwnProperty('approle/')) return undefined;
  return vault.enableAuth({
    mount_point: mountPoint,
    type: 'approle',
    description: 'Approle auth',
  });
})
.then(() => vault.addApproleRole({ role_name: roleName, policies: 'fromTest_pol, admins' }))
*/

/*
const roleId    = "4cc7ac1c-0d4e-1bbf-2127-e34d1dafad02"
const secretId  = "3fdcf6da-ab61-60b8-c2f2-be0637f55713"

const run = async () => {
  const result = await vault.approleLogin({
    role_id: roleId,
    secret_id: secretId,
  });

  vault.token = result.auth.client_token;

  const { data } = await vault.read("cloudbuilder/vast20/jsouza/manual_test")

  const accessKey = data.data.accessKey
  const region    = data.data.region
  const secretId  = data.data.secretID

  console.log({
    accessKey,
    region,
    secretId,
  })

}

run()
*/

/*
vault.health()
.then(console.log)
.catch((err) => console.error('error message:' + err.message));
*/


// vault.status()
// .then(console.log)
// .catch((err) => console.error(err.message));

/*
vault.read(`auth/approle/role/${roleName}`)
.then(console.log)
.catch((err) => console.error(err.message))
*/


/*
.then((result) => {
  console.log(result);
  return vault.addPolicy({
    name: 'mypolicy',
    rules: '{ "path": { "secret/*": { "policy": "write" } } }',
  });
})
.then(() => vault.getPolicy({ name: 'mypolicy' }))
.then(vault.policies)
.then((result) => {
  console.log(result);
  return vault.removePolicy({ name: 'mypolicy' });
})
.catch((err) => console.error(err.message));
*/

/*
vault.addPolicy({
   name: 'gitlab_policy2',
   rules: '{ "path": { "auth/approle/role/+/secret*": { "policy": "update" } } }'
}).then(console.log)
.catch((err) => console.error(err.message))
*/


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
*/

// vault.read('cloudbuilder/vast20/jsouza/3a2d8e9a-64e6-4667-8e76-ba687c30bf98')
//  .then( (result) => {
//     var data = result.data;
//     console.log(data)
//  })
//  .catch((err) => console.error('error message:' + err.message));

const asyncFunction = async () => {
   const resultVault = await vault.read('cloudbuilder/vast20/jsouza/3a2d8e9a-64e6-4667-8e76-ba687c30bf98');
   console.log('resultVault', resultVault)
 }

asyncFunction();

vault.read('cloudbuilder/vast20/jsouza/3a2d8e9a-64e6-4667-8e76-ba687c30bf98')
 .then( (result) => {
    var data = result.data;
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
