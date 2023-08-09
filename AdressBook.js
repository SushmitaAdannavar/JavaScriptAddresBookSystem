var readlineSync = require('readline-sync');
const fs=require("fs")
const { insertnewcontact, deleteexistingcontact, updateexistingcontact,display,searchFunction} = require('./insertnewcontact');

/*const Contacts = [
  { firstName: 'Rahul', lastName: 'Patil', address: 'abcnagar', city: 'bangalore', state: 'karnataka', email: 'rahul@gmail.com', phoneNum: '9012345678' },
  { firstName: 'Akshara', lastName: 'Shetty', address: 'jklnagar', city: 'bangalore', state: 'karnataka', email: 'akshetty@gmail.com', phoneNum: '956743218' },
  { firstName: 'Rani', lastName: 'Patil', address: 'xyznagar', city: 'bangalore', state: 'karnataka', email: 'ranipatil@gmail.com', phoneNum: '9054321678' }
]
const jsonData=JSON.stringify(Contacts);
fs.writeFile("data.json",jsonData,(err)=>{
  if(err) throw err;
  console.log("Done");
});*/

do{
  var caseVal = readlineSync.question('Operation\n 1.Insert contact \t 2.Delete contact \t 3.Update exisying contact \t4.Display contacts \t5.Search \t6.Exit= ')
  switch (caseVal) 
  {
    case '1': console.log("Inserting contacts");
              insertnewcontact();
              break;
    case '2': console.log("Deleting contacts");
              deleteexistingcontact();
              break;
    case '3': console.log("Update existing contacts");
              updateexistingcontact();
              break;
    case '4':console.log("Displaying contacts");
              display();
              break;
    case '5': console.log("Search ");
             let searchstring=readlineSync.question("Enter name of person to be searched")
              const searcharray=searchFunction(searchstring)
              if(searcharray.length==0){console.log(searchstring+" not found");}
              else{console.log(searcharray)};
              break;
    case '6':console.log('End of program');
             break;
  }

}while(caseVal!=6);


