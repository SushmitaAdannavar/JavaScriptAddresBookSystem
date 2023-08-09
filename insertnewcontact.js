var readlineSync = require('readline-sync');
const fs=require("fs");
const { Console } = require('console');

insertnewcontact=()=> {
  let firstName = readlineSync.question('Enter firstname ');
  let lastName = readlineSync.question('Enter lastname ');
  let address = readlineSync.question('Enter adress ');
  let city = readlineSync.question('Enter city ');
  let state = readlineSync.question('Enter state ');
  let email = readlineSync.question('Enter email ');
  let phoneNum = readlineSync.question('Enter phonenumber ');
  const contact = { firstName, lastName, address, city, state, email, phoneNum };
  let usersjson=fs.readFileSync("data.json","utf-8")
  const users=JSON.parse(usersjson);
  console.log(users)
  users.push(contact);
  usersjson=JSON.stringify(users)
  fs.writeFile("data.json",usersjson,(err)=>{
    if(err) throw err;
    console.log("Inserted data");
  });
  //console.log(Contacts);*/
}
exports.insertnewcontact = insertnewcontact;


deleteexistingcontact=() =>{
  let usersjson=fs.readFileSync("data.json","utf-8")
  const users=JSON.parse(usersjson);
  let val = readlineSync.question('Enter the firstname of existing contact to be deleted');
  for (let i = 0; i < users.length; i++) {
    if (users[i].firstName === val) {
      users.splice(i, 1);
      break;
    }
  }
  usersjson=JSON.stringify(users)
  fs.writeFile("data.json",usersjson,(err)=>{
    if(err) throw err;
    console.log("Deleted data");
  });
 // console.log(Contacts);
}
exports.deleteexistingcontact = deleteexistingcontact;


updateexistingcontact=()=> {
  let usersjson=fs.readFileSync("data.json","utf-8")
  const users=JSON.parse(usersjson);
  let val = readlineSync.question('Enter the firstname of existing contact to be updated');
  let updatedvalue = readlineSync.question('Enter new city value');
  for (let i = 0; i < users.length; i++) {
    if (users[i].firstName === val) {
      users[i].city = updatedvalue;
      break;
    }
  }
  usersjson=JSON.stringify(users)
  fs.writeFileSync("data.json",usersjson,(err)=>{
    if(err) throw err;
    console.log("Updated data");
  });
  //console.log(Contacts);
}
exports.updateexistingcontact = updateexistingcontact;

display=()=>{
  let usersjson=fs.readFileSync("data.json","utf-8")
  const users=JSON.parse(usersjson);
    console.log("FirstName Lastname Adress City State Email Phonenumber");
    for(i=0;i<users.length;i++)
    {
       console.log(users[i].firstName+" "+users[i].lastName+" "+users[i].adress+" "+users[i].city+" "+users[i].state+" "+users[i].email+" "+users[i].phoneNum)
    }
}
exports.display = display;

function searchFunction(searchstring)
{let usersjson=fs.readFileSync("data.json","utf-8")
const users=JSON.parse(usersjson);
const search=users.filter((element)=>{

      return element.firstName==searchstring
      
    })
    return search;
  }
exports.searchFunction = searchFunction;
