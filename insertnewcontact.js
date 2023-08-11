var readlineSync = require('readline-sync');
const fs=require("fs");
const util=require('./Utility');
//const { Console } = require('console');

insertnewcontact=()=> {
  let i,firstName,lastName,address,city,state,email,phoneNum;
  do{ firstName = readlineSync.question('Enter firstname ');
      i= util.isvalidFirstName(firstName); } while(i==false)
  do{ lastName = readlineSync.question('Enter lastname ');
     i=util.isvalidLastName(lastName);}while(i==false)
  do{address = readlineSync.question('Enter address ');
     i=util.isvalidAddress(address);}while(i==false)
  do{city = readlineSync.question('Enter city ');
     i=util.isvalidValue(city);}while(i==false)
  do{ state = readlineSync.question('Enter state ');
     i=util.isvalidValue(state);}while(i==false)
  do{ email = readlineSync.question('Enter email ');
   i=util.isvalidMail(email);}while(i==false)
  do{ phoneNum = readlineSync.question('Enter phonenumber ');
   i=util.isvalidPhoneNum(phoneNum);}while(i==false)
  const contact = { firstName, lastName, address, city, state, email, phoneNum };
  const users=readFileFunc();
  users.push(contact);
  writeFileFunc(users);
}
exports.insertnewcontact = insertnewcontact;


deleteexistingcontact=() =>{
  const users=readFileFunc();
  let val = readlineSync.question('Enter the firstname of existing contact to be deleted');
  for (let i = 0; i < users.length; i++) {
    if (users[i].firstName === val) {
      users.splice(i, 1);
      break;
    }
  }
  writeFileFunc(users);
}
exports.deleteexistingcontact = deleteexistingcontact;


updateexistingcontact=()=> {
  let updatedvalue;
  const users=readFileFunc();
  let val = readlineSync.question('Enter the firstname of existing contact to be updated');
  do{updatedvalue = readlineSync.question('Enter new city value');i=util.isvalidValue(updatedvalue);}while(i==false)
  for (let i = 0; i < users.length; i++) {
    if (users[i].firstName === val) {
      users[i].city = updatedvalue;
      break;
    }
  }
  writeFileFunc(users);
}
exports.updateexistingcontact = updateexistingcontact;

display=()=>{
  const users=readFileFunc();
    console.log("FirstName Lastname Adress City State Email Phonenumber");
    for(i=0;i<users.length;i++)
    {
       console.log(users[i].firstName+" "+users[i].lastName+" "+users[i].address+" "+users[i].city+" "+users[i].state+" "+users[i].email+" "+users[i].phoneNum)
    }
}
exports.display = display;

function searchFunction(searchstring)
{const users=readFileFunc();
 const search=users.filter((element)=>{
      return element.firstName==searchstring     
    })
    return search;
  }
exports.searchFunction = searchFunction;


function readFileFunc()
{
  let usersjson=fs.readFileSync("data.json","utf-8")
  return JSON.parse(usersjson);
}
function writeFileFunc(users)
{
  usersjson=JSON.stringify(users)
  fs.writeFile("data.json",usersjson,(err)=>{
    if(err) throw err;
    console.log("Done")
  });
}

