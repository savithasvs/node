const Cloudant = require("@cloudant/cloudant");
const { request } = require("express");
const req = require("express/lib/request");
var url =
  "https://a1b21745-8512-41b2-8506-c83a13a27993-bluemix.cloudantnosqldb.appdomain.cloud ";
var username = "apikey-v2-qnl37sqy0oqwj8owtrhj6kam3p39wzmc0d46oflhvln";
var password = "cb14c8c9976ced0867c79d8eb625505a";
 
var cloudant = Cloudant({ url: url, username: username, password: password });
var adminin = cloudant.use("new_sample");

// get = function (dbname) {
//   return cloudant.use(dbname).list();
// };
// getId = function (id, dbfname) {
//   return cloudant.use(dbfname).get(id);
// };
get = function (dbname) {
  return cloudant.use(dbname).list();
};
getId = function (id, dbfname) {
  return cloudant.use(dbfname).get(id);
};
var admin = {
  id: "admin-1",
  name: "Savitha",
  email: "Savitha2503@gmail.com",
  password: "Admin@123",
  cpassword: "Admin@123",
  type:"admin",
};
// cloudant.db
//   .create("sam")
//   .then(() =>

//     cloudant
//       .use("sam")
//       .insert({ happy: true }, "rabbit")
//       .then((data) => {
//         console.log(data);
//       })
//   )
//   .catch((err) => {
//     console.log(err);
//   });
 
// module.exports.insert = function (paramsvalue) {
//   console.log(paramsvalue);
//   cloudant
//     .use("new_sample")
//     .insert(paramsvalue)
//     .then((data) => {
//       console.log("Data Inserted into Clouddatabase" + data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
  
    // var admin = cloudant.adminin.find(fetchdata).then((data) => {
    //     console.log("data fetchd from server",data);
    //     return data;
    // }).catch((err)=>{
    //     console.log("Got error from server",err);
    // })
    // return admin;

 module.exports = {cloudant, adminin ,get,getId}