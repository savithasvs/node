const nodemail = require('nodemailer');
const { getMaxListeners } = require('./logger');
var sender = nodemail.createTransport({
    service:'gmail',
    auth:{
        user:'restaurantbook56@gmail.com',
        pass:'rest@123'
    }
})
// module.exports.getemail = function(params)

// var composemail = {
//     from:'restaurantbook56@gmail.com',
//     to:params,
//     subject:'node email',
//     text:'Hi Patient Your request is granted,your booking date and time is mentioned below '
// }


// sender.sendMail(composemail,function(err,res){
//     if(err)
//     {
//         console.log("Mail not sent",err);
//     }
//     else{
//         console.log("Mail sent");
//     }
// })

// sender.sendMail(composemail,function(err,res){
//                         if(err)
//                         {
//                             console.log("Mail not sent",err);
//                         }
//                         else{
//                             console.log("Mail sent");
//                         }
//                     })
//                     // composemail = {
//                     //                         from:'restaurantbook56@gmail.com',
//                     //                         to:'savithasvs2503@gmail.com',
//                     //                         subject:'node email',
//                     //                         text:'Hi Patient Your request is granted,your booking date and time is mentioned below '
//                     //                     },
                        
var mail = async (datas,information)=>{
    console.log("Booking Get confirm");
    var returnobject  = new Promise((resolve,reject)=>{
        if(datas == undefined || information == undefined)
        {
            reject();
        }
        else{
            resolve(

                composemail = {
                    from:'restaurantbook56@gmail.com',
                    to:datas,
                    subject:'node email',
                    text:'Your booking has been confirm. '
                },

                sender.sendMail(composemail,function(err,res){
                    if(err)
                    {
                        console.log("Mail not sent",err);
                    }
                    else{
                        console.log("Mail sent");
                    }
                })
            )
        }
        
    })
    return returnobject;
}

module.exports = {mail};