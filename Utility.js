class Utility {

   isvalidFirstName(firstName){
    let regexPt = /^[A-Z][a-z]{2,}/;
    let result = regexPt.test(firstName);
    return result;
   }
   isvalidLastName(lastName){
    let regexPt = /^[A-Z]+[a-z]*/;
    let result = regexPt.test(lastName);
    return result;
   }
   isvalidAddress(address){
    let regexPt = /[A-Za-z0-9\s\,\''\-]*/;
    let result = regexPt.test(address);
    return result;
   }
   isvalidValue(value){
    let regexPt = /^[A-Z][a-z]{2,}$/;
    let result = regexPt.test(value);
    return result;
   }
   isvalidMail(email){
    let regexPt = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let result = regexPt.test(email);
    return result;
   }
   isvalidPhoneNum(phoneNum){
    let regexPt = /^[0-9]{10}$/;
    let result = regexPt.test(phoneNum);
    return result;
   }

}

module.exports=new Utility();